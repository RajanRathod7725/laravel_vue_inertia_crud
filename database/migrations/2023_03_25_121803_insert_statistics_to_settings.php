<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
use App\Models\Setting;
use Illuminate\Support\Carbon;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Setting::insert([
            [
                'key' => 'LINKEDIN_LINK',
                'value' => '',
                'created_at' => Carbon::now()->format(config('constants.sql_date_time_format')),
            ],
            [
                'key' => 'WHATSAPP_LINK',
                'value' => '',
                'created_at' => Carbon::now()->format(config('constants.sql_date_time_format')),
            ],
            [
                'key' => 'INSTAGRAM_LINK',
                'value' => '',
                'created_at' => Carbon::now()->format(config('constants.sql_date_time_format')),
            ],
            [
                'key' => 'GITHUB_LINK',
                'value' => '',
                'created_at' => Carbon::now()->format(config('constants.sql_date_time_format')),
            ],
            [
                'key' => 'X_LINK',
                'value' => '',
                'created_at' => Carbon::now()->format(config('constants.sql_date_time_format')),
            ]]
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Setting::whereIn('key',['LINKEDIN_LINK','FACEBOOK_LINK','INSTAGRAM_LINK'])
        ->delete();
    }
};
