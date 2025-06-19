<?php

namespace App\Listeners;

use App\Events\EventReminder;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\Event;
use App\Models\EventParticipant;
use App\Models\User;
use App\Models\Setting;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendEventReminderNotification
{
    use InteractsWithQueue;
    /**
     * Create the event listener.
     */
    public function __construct()
    {

    }

    /**
     * Handle the event.
     */
    public function handle()
    {
       // Log::info(Event::with('participants')->where(DB::raw('TIMESTAMPDIFF(HOUR,CURRENT_TIMESTAMP(),start_date)'),"<=",1)->toSql());
        $event_reminder_hours = Setting::where('key','EVENT_REMINDER_HOURS')->first() && Setting::where('key','EVENT_REMINDER_HOURS')->first()->value!=null && Setting::where('key','EVENT_REMINDER_HOURS')->first()->value!=''?Setting::where('key','EVENT_REMINDER_HOURS')->first()->value:1;
        $events = Event::with('participants')->where(DB::raw('TIMESTAMPDIFF(HOUR,CURRENT_TIMESTAMP(),start_date)'),"<=",$event_reminder_hours)->where(DB::raw('TIMESTAMPDIFF(HOUR,CURRENT_TIMESTAMP(),start_date)'),">",0)->get();
        foreach($events as $evt)
        {
            if($evt->participants->count() > 0)
            {
                foreach($evt->participants as $participant)
                {
                    $user = User::find($participant->user_id);
                    if($user && $participant->is_send_reminder_mail == 0)
                    {
                        //Log::info($user->email);
                        $event_participant = EventParticipant::find($participant->id);
                        $event_participant->is_send_reminder_mail = 1;
                        $event_participant->save();
                        $data = [];
                        $data['event'] = $evt;
                        $data['user'] = $user;
                        Mail::send('mail.event_reminder_mail', $data, function($message) use ($user){
                            $message->to($user->email, $user->name)->subject('Event Reminder');
                            $message->from(env('MAIL_FROM_EMAIL'),env('MAIL_FROM_NAME'));
                         });
                    }
                }
            }
        }

    }
}
