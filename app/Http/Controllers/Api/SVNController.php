<?php

namespace App\Http\Controllers\Api;

use App\Models\SVN;
use App\Models\User;
use App\Module\Base;
use Request;

// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SVNController extends AbstractController
{
    /**
     * @api {get} api/svn/lists          01. 获取svn列表
     *
     * @apiDescription 需要token身份
     * @apiVersion 1.0.0
     * @apiGroup svn
     * @apiName lists
     *
     * @apiSuccess {Number} ret     返回状态码（1正确、0错误）
     * @apiSuccess {String} msg     返回信息（错误描述）
     * @apiSuccess {Object} data    返回数据 [{'id': id, 'name': name, 'info': commits_info}]
     */
    public function lists()
    {
        User::auth();
        $data = SVN::get(['id', 'name', 'commits_info'])->map(function ($_d) {
            return [
                'id' => $_d->id,
                'name' => $_d->name,
                'info' => $_d->commits_info,
            ];
        });
        return Base::retSuccess('success', $data);
    }


    /**
     * @api {get} api/svn/add          02. 添加一个SVN记录
     *
     * @apiDescription 需要token身份
     * @apiVersion 1.0.0
     * @apiGroup svn
     * @apiName add
     *
     * @apiParam {String} name                  名称
     * @apiParam {String} url_wan               外网URL
     * @apiParam {String} url_lan               内网URL
     * @apiParam {String} get_info_user         用于获取信息的用户
     * @apiParam {String} get_info_user_passwd  用于获取信息的用户的密码
     * 
     *
     * @apiSuccess {Number} ret     返回状态码（1正确、0错误）
     * @apiSuccess {String} msg     返回信息（错误描述）
     * @apiSuccess {Object} data    返回数据
     */
    public function add()
    {
        User::auth();

        $validator = Validator::make(Request::all(), [
            'name' => 'required',
            'url_wan' => ['required', 'regex:/^(http|https|svn):\/\/.*/'],
            'url_lan' => ['required', 'regex:/^(http|https|svn):\/\/.*/'],
            'get_info_user' => 'required',
            'get_info_user_passwd' => 'required',
        ]);

        if ($validator->fails()) {
            return Base::retError('非法数据');
        }

        $data = Request::only(['name', 'url_wan', 'url_lan', 'get_info_user', 'get_info_user_passwd']);
        SVN::create($data);
        return Base::retSuccess('suucess');
    }

    /**
     * @api {get} api/svn/update          03. 更新SVN记录
     *
     * @apiDescription 需要token身份
     * @apiVersion 1.0.0
     * @apiGroup svn
     * @apiName update
     *
     * @apiParam {Number} id                    ID
     * @apiParam {String} name                  名称
     * @apiParam {String} url_wan               外网URL
     * @apiParam {String} url_lan               内网URL
     * @apiParam {String} get_info_user         用于获取信息的用户
     * @apiParam {String} get_info_user_passwd  用于获取信息的用户的密码
     * 
     *
     * @apiSuccess {Number} ret     返回状态码（1正确、0错误）
     * @apiSuccess {String} msg     返回信息（错误描述）
     * @apiSuccess {Object} data    返回数据
     */
    public function update()
    {
        User::auth();

        $validator = Validator::make(Request::all(), [
            'id' => ['required', 'regex:/[0-9]+/'],
            'name' => 'required',
            'url_wan' => ['required', 'regex:/^(http|https|svn):\/\/.*/'],
            'url_lan' => ['required', 'regex:/^(http|https|svn):\/\/.*/'],
            'get_info_user' => 'required',
        ]);

        if ($validator->fails()) {
            return Base::retError('非法数据');
        }

        $svn = SVN::find(Request::input('id'));
        if (!$svn) {
            return Base::retError('未查询到该记录');
        }

        $data = Request::only(['name', 'url_wan', 'url_lan', 'get_info_user']);
        $get_info_user_passwd = Request::input('get_info_user_passwd');
        if ($get_info_user_passwd) {
            $data['get_info_user_passwd'] = $get_info_user_passwd;
        }
        $svn->update($data);
        return Base::retSuccess('suucess');
    }

    /**
     * @api {get} api/svn/remove          04. 获取删除指定记录
     *
     * @apiDescription 需要token身份
     * @apiVersion 1.0.0
     * @apiGroup svn
     * @apiName remove
     * 
     * @apiParam {Number} id        id
     *
     * @apiSuccess {Number} ret     返回状态码（1正确、0错误）
     * @apiSuccess {String} msg     返回信息（错误描述）
     * @apiSuccess {Object} data    返回数据
     */
    public function remove()
    {
        User::auth();
        $id = Request::input('id');
        if (!Base::isNumber($id)) {
            return Base::retError('非法id');
        }
        $svn = SVN::find($id);
        if (!$svn) {
            return Base::retError('未查询到该记录');
        }
        $svn->delete();
        return Base::retSuccess('success');
    }

    /**
     * @api {get} api/svn/info          05. 获取svn信息
     *
     * @apiDescription 需要token身份
     * @apiVersion 1.0.0
     * @apiGroup svn
     * @apiName info
     * 
     * @apiParam {Number} id        id
     *
     * @apiSuccess {Number} ret     返回状态码（1正确、0错误）
     * @apiSuccess {String} msg     返回信息（错误描述）
     * @apiSuccess {Object} data    返回数据
     */
    public function info()
    {
        User::auth();
        $id = Request::input('id');
        if (!Base::isNumber($id)) {
            return Base::retError('非法id');
        }
        $svn = SVN::find($id);
        if (!$svn) {
            return Base::retError('未查询到该记录');
        }
        return Base::retSuccess('success', $svn);
    }

    /**
     * @api {get} api/svn/lists_info          06. 获取所有svn信息
     *
     * @apiDescription 需要token身份
     * @apiVersion 1.0.0
     * @apiGroup svn
     * @apiName lists_info
     *
     * @apiSuccess {Number} ret     返回状态码（1正确、0错误）
     * @apiSuccess {String} msg     返回信息（错误描述）
     * @apiSuccess {Object} data    返回数据
     */
    public function lists_info()
    {
        User::auth();
        return Base::retSuccess('success', SVN::get(['id', 'name', 'url_wan', 'url_lan', 'get_info_user']));
    }

    /**
     * @api {get} api/svn/key          07. 获取svn密钥
     *
     * @apiDescription 需要token身份
     * @apiVersion 1.0.0
     * @apiGroup svn
     * @apiName key
     *
     * @apiSuccess {Number} ret     返回状态码（1正确、0错误）
     * @apiSuccess {String} msg     返回信息（错误描述）
     * @apiSuccess {Object} data    返回数据
     */
    public function key()
    {
        $user = User::auth();
        return Base::retSuccess('success', Base::md52($user->password, 'svn'));
    }


    public function test()
    {
        return Request::all();
    }
}
