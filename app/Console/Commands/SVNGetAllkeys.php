<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\User;
use App\Models\SVN;

class SVNGetAllkeys extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'svn:get_all_keys';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '获取全部SVN密钥';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
	foreach(USER::get(['email', 'password']) as $up){
	    $this->info($up['email'] . ' = ' . SVN::calculate_key($up['password']));
	}
        return 0;
    }
}
