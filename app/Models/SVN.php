<?php

namespace App\Models;

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
}
