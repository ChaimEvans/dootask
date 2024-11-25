<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSVNSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('s_v_n_s', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('名称');
            $table->string('url_wan')->comment('外网URL');
            $table->string('url_lan')->comment('内网URL');
            $table->string('get_info_user')->comment('用于读取信息的用户');
            $table->string('get_info_user_passwd')->comment('用于读取信息的用户的密码');
            $table->boolean('get_info_use_wan')->default(false)->comment('使用外网URL获取信息(默认否)');
            $table->integer('info_update_timestamps')->default(946656000)->comment('info更新时间戳');
            $table->integer('revision')->default(0)->comment('版本号');
            $table->string('last_changed_author')->default('')->comment('最近的修改者');
            $table->string('last_changed_date')->default('')->comment('最近修改时间');
            $table->integer('yesterday_revision')->default(0)->comment('昨日版本号');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('s_v_n_s');
    }
}
