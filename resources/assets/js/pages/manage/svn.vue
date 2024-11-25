<template>
    <div class="page-file page-dashboard">
        <PageTitle :title="$L('SVN仓库')"/>
        <div class="file-wrapper dashboard-wrapper">
            <div class="file-head">
                <div class="file-nav">
                    <h1>{{$L('SVN仓库')}}</h1>
                </div>
                <div class="file-add">
                    <Button shape="circle" icon="md-refresh" @click="RefreshRepoList"></Button>
                </div>
            </div>
            <ul class="dashboard-block">
                <li v-for="repo in RepoList" :key="repo.id" @click="SelectRepo(repo.id)">
                    <div class="block-svn-name">{{ repo.name }}</div>
                    <div class="block-title">今日提交：{{ repo.revision - repo.yesterday_revision }}</div>
                    <div class="block-title">当前版本：{{ repo.revision }}</div>
                </li>
            </ul>
            <div class="dashboard-list overlay-y">
                <div class="dashboard-title">
                    登录信息
                    <Button style="margin-left: 10px;" shape="circle" icon="md-eye" @click="GetSecretKey"></Button>
                </div>
                <ul class="dashboard-ul">
                    <li @click="CopyText(userInfo.email)">
                        <div class="item-title">
                            登录账户 &nbsp;&nbsp;
                            <span>{{ userInfo.email }}</span> 
                        </div>
                        <div class="item-icon">
                            <i class="taskfont">&#xe721;</i>
                            <em>点击复制</em>
                        </div>
                    </li>
                    <li @click="CopySecretKey">
                        <div class="item-title">
                            登录密钥 &nbsp;&nbsp;
                            <span class="start">{{ SecretKey ? SecretKey : "********" }}</span> 
                        </div>
                        <div class="item-icon">
                            <i class="taskfont">&#xe721;</i>
                            <em>点击复制</em>
                        </div>
                    </li>
                </ul>
                <div class="dashboard-title">仓库信息</div>
                <ul v-if="RepoSelected != undefined" class="dashboard-ul">
                    <li @click="CopyText(RepoSelected['url_wan'])">
                        <div class="item-title">
                            仓库URL &nbsp;&nbsp;
                            <span>{{ RepoSelected['url_wan'] }}</span> 
                        </div>
                        <div class="item-icon">
                            <i class="taskfont">&#xe721;</i>
                            <em>点击复制</em>
                        </div>
                    </li>
                    <li @click="CopyText(RepoSelected['url_lan'])">
                        <div class="item-title">
                            内网URL &nbsp;&nbsp;
                            <span>{{ RepoSelected['url_lan'] }}</span> 
                        </div>
                        <div class="item-icon">
                            <i class="taskfont">&#xe721;</i>
                            <em>点击复制</em>
                        </div>
                    </li>
                    <li>
                        <div class="item-title">
                            最近修改者 &nbsp;&nbsp;
                            <span>{{ RepoSelected['last_changed_author'] }}</span> 
                        </div>
                    </li>
                    <li>
                        <div class="item-title">
                            最近修改时间 &nbsp;&nbsp;
                            <span>{{ RepoSelected['last_changed_date'] }}</span> 
                        </div>
                    </li>
                </ul>
                <ul v-else class="dashboard-ul">
                    <div style="color: gray; font-size: small;">选择仓库以显示信息</div>
                </ul>
                <div class="dashboard-title">仓库日志</div>
                <ul v-if="RepoSelected != undefined" class="dashboard-ul">
                    <!-- TODO --> 未实现
                    <li v-for="log in RepoLogs" :key="log.version">
                        <div class="item-title">
                            <span>v{{ log.version }}</span>
                            {{ log.user }} : {{ log.log }}
                        </div>
                        <div class="item-icon">
                            <i class="taskfont">&#xe71d;</i>
                            <em>{{ log.date }}</em>
                        </div>
                    </li>
                    <div style="text-align: center;">
                        <Button @click="LoadLog">加载日志</Button>
                    </div>
                </ul>
                <ul v-else class="dashboard-ul">
                    <div style="color: gray; font-size: small;">选择仓库以获取日志</div>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.block-svn-name {
    line-height: 2.5em;
    font-size: 1.3em;
    color: white;
}

.block-title {
    line-height: 2em;
}
@media only screen and (max-width: 767px){
    .item-title>span {
        display: block !important;
    }
}
</style>

<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import {mapState} from "vuex";

export default {
    components: {},
    data() {
        return {
            RepoList: [],
            RepoSelected: undefined,
            RepoWanURL: "",
            RepoLanURL: "",
            SecretKey: "",
            RepoLogs: []
        }
    },

    mounted() {
        this.RefreshRepoList();
    },

    computed: {
        ...mapState(['userIsAdmin', 'userInfo']),
    },

    methods: {
        GetSecretKey() {
            this.$store.dispatch("call", {
                url: 'svn/key'
            }).then(({data}) => {
                this.SecretKey = data;
            }).catch(({msg}) => {
                $A.modalError(msg);
            });
        },

        RefreshRepoList() {
            this.$store.dispatch("call", {
                url: 'svn/lists_info'
            }).then(({data}) => {
                this.RepoList = data;
            }).catch(({msg}) => {
                $A.modalError(msg);
            });
        },

        SelectRepo(id) {
            this.RepoList.forEach(repo => {
                (repo['id'] === id) && (this.RepoSelected = repo);
            });
        },

        LoadLog(clean = false) {
            if (clean) {
                this.RepoLogs = []
            }
            this.RepoLogs.push({
                "version": 0,
                "user": "用户",
                "date": "时间",
                "log": "日志 ！未实现！"
            });
        },

        CopyText(text) {
            this.$copyText(text).then(_ => {
                $A.noticeSuccess("复制成功");
            }, _ => {
                $A.noticeError("复制失败");
            });
        },

        CopySecretKey() {
            if (this.SecretKey != "") {
                this.CopyText(this.SecretKey);
            } else {
                this.$store.dispatch("call", {
                    url: 'svn/key'
                }).then(({data}) => {
                    this.CopyText(data);
                }).catch(({msg}) => {
                    $A.modalError(msg);
                });
            }
        }
    }
}
</script>
