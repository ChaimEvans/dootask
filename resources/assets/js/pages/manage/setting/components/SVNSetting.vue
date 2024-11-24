<template>
    <div class="setting-component-item">
        <Form ref="formDatum" label-width="auto" @submit.native.prevent>
            <Row class="setting-color">
                <Col span="0">{{$L('#')}}</Col>
                <Col span="4">{{$L('名称')}}</Col>
                <Col span="8">{{$L('外网URL')}}</Col>
                <Col span="8">{{$L('内网URL')}}</Col>
                <Col span="4">
                    <ETooltip :content="$L('仅用于获取仓库信息和日志')" max-width="auto" placement="top" transfer>
                        <div><Icon class="information" type="ios-information-circle-outline" /> {{$L('用户名')}}</div>
                    </ETooltip>
                </Col>
                <Col span="8">
                    <ETooltip :content="$L('仅用于获取仓库信息和日志')" max-width="auto" placement="top" transfer>
                        <div><Icon class="information" type="ios-information-circle-outline" /> {{$L('密码')}}</div>
                    </ETooltip>
                </Col>
                <Col span="2">{{$L('使用外网URL获取信息')}}</Col>
            </Row>
            <Row v-for="(item, index) in formDatum" :key="index" class="setting-color">
                <Col span="0">
                    <Input v-model="item.id" disabled />
                </Col>
                <Col span="8">
                    <Input v-model="item.name" :placeholder="$L('请输入名称')" clearable />
                </Col>
                <Col span="8">
                    <Input v-model="item.url_wan" :placeholder="$L('请输入外网URL')" clearable/>
                </Col>
                <Col span="8">
                    <Input v-model="item.url_lan" :placeholder="$L('请输入内网URL')" clearable/>
                </Col>
                <Col span="8">
                    <Input v-model="item.get_info_user" :placeholder="$L('请输入用户名')" clearable/>
                </Col>
                <Col span="8">
                    <Input v-model="item.get_info_user_passwd" :placeholder="$L('请输入密码')" clearable/>
                </Col>
                <Col span="2">
                    <Checkbox v-model="item.get_info_use_wan" />
                </Col>
                <Col span="2">
                    <Button shape="circle" icon="md-remove" @click="delDatum(index, item.id)"></Button>
                </Col>
            </Row>
            <Button type="default" icon="md-add" @click="addDatum">{{$L('添加仓库')}}</Button>
        </Form>
        <div class="setting-footer">
            <Button type="primary" @click="submitForm">{{$L('提交')}}</Button>
            <Button @click="getSVNs" style="margin-left: 8px">{{$L('重置')}}</Button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SystemTaskPriority',
    data() {
        return {
            formDatum: [],

            deletedID: [],

            nullDatum: {
                'id': -1,
                'name': '',
                'url_wan': '',
                'url_lan': '',
                'get_info_user': '',
                'get_info_user_passwd': '',
                'get_info_use_wan': false
            }
        }
    },

    mounted() {
        this.getSVNs();
    },

    methods: {
        getSVNs() {
            this.$store.dispatch("call", {
                url: 'svn/lists_info'
            }).then(({data}) => {
                for(let i = 0; i < data.length; i++) {
                    data[i]["get_info_user_passwd"] = "******";
                }
                this.formDatum = data;
            }).catch(({msg}) => {
                $A.modalError(msg);
            });
            this.deletedID = [];
        },

        submitForm() {
            let total_requests_num = 0;
            this.formDatum.forEach(item => {
                total_requests_num++;
                if (item.id > 0) {
                    // 更新
                    if (item.get_info_user_passwd == "******") {
                        delete item.get_info_user_passwd;
                    }
                    this.$store.dispatch("call", {
                        url: 'svn/update',
                        method: 'post',
                        data: JSON.stringify(item),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(_=>{
                        total_requests_num--;
                        if(total_requests_num <= 0) {
                            $A.messageSuccess('修改成功');
                        }
                    }).catch(({msg}) => {
                        $A.modalError(msg);
                    });
                }else {
                    // 添加
                    this.$store.dispatch("call", {
                        url: 'svn/add',
                        method: 'post',
                        data: JSON.stringify(item),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(_=>{
                        total_requests_num--;
                        if(total_requests_num <= 0) {
                            $A.messageSuccess('修改成功');
                        }
                    }).catch(({msg}) => {
                        $A.modalError(msg);
                    });
                }
            });
            let total_requests_num_remove = 0;
            this.deletedID.forEach(item => {
                total_requests_num_remove++;
                // 删除
                this.$store.dispatch("call", {
                    url: 'svn/remove?id=' + item,
                }).then(_=>{
                    total_requests_num_remove--;
                    if(total_requests_num_remove <= 0) {
                        $A.messageSuccess('删除成功');
                    }
                }).catch(({msg}) => {
                    $A.modalError(msg);
                });
            });
        },

        addDatum() {
            this.formDatum.push($A.cloneJSON(this.nullDatum));
        },

        delDatum(key, id) {
            if (id > 0) {
                this.deletedID.push(id);
            }
            this.formDatum.splice(key, 1);
        },
    }
}
</script>
