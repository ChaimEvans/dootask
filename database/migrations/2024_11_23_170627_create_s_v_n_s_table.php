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
            $table->json('commits_info')->nullable()->comment('提交信息');
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