<?php

namespace App\Models;

use App\Module\Base;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SVN extends AbstractModel
{
    protected $fillable = [
        'name',
        'url_wan',
        'url_lan',
        'get_info_user',
        'get_info_user_passwd',
        'get_info_use_wan'
    ];

    protected $casts = [
        'info_cache' => 'array',
        'get_info_use_wan' => 'bool',
    ];

    protected $hidden = [
        'get_info_user_passwd',
    ];

    /**
     * 计算SVN密钥
     */
    public static function calculate_key($passwd_in_db)
    {
	return Base::md52($passwd_in_db, 'svn');
    }

    /**
     * 更新所有仓库信息
     */
    public static function update_info()
    {
        foreach (SVN::all() as $svn) {
            $url = $svn['get_info_use_wan'] ? $svn['url_wan'] : $svn['url_lan'];
            $user = str_replace('"', '\"', $svn['get_info_user']);
            $passwd = str_replace('"', '\"', $svn['get_info_user_passwd']);
            $cmd = 'svn info ' . $url . ' --username "' . $user . '" --password "' . $passwd . '"';
            $output = shell_exec($cmd);

            // 当前时间戳
            $svn->info_update_timestamps = time();

            // 版本
            $svn->revision = 0;
            if (preg_match('/Revision: (.+)/', $output, $matchs))
                if (Base::isNumber($matchs[1]))
                    $svn->revision = intval($matchs[1]);

            // 最近修改的作者
            $svn->last_changed_author = '';
            if (preg_match('/Last Changed Author: (.+)/', $output, $matchs))
                $svn->last_changed_author = $matchs[1];

            // 最近更改日期
            $svn->last_changed_date = '';
            if (preg_match('/Last Changed Date: (.+)/', $output, $matchs))
                $svn->last_changed_date = $matchs[1];

            $svn->save();
        }
    }

    /**
     * 每日处理
     * 1、记录上一天的版本号
     */
    public static function daily_process()
    {
        foreach (SVN::all() as $svn) {
            $svn->yesterday_revision = $svn->revision;
            $svn->save();
        }
    }
}
