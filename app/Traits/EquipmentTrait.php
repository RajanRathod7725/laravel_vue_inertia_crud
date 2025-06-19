<?php

namespace App\Traits;


trait EquipmentTrait
{

    /*public function getUpcomingEvents(){
        return EventResource::collection(Event::upcomingEvents()->get());
    }

    public function getPastEvents(){
        return EventResource::collection(Event::pastEvents()->get());
    }

    public function getFeaturedEvents(){
        return EventResource::collection(Event::featuredEvents()->get());
    }

    public function getMyUpcomingEvents(){

        $myevents = Event::join('event_participants','event_participants.event_id','events.id')
        ->where('event_participants.user_id',auth()->user()->id)
        ->whereNull('event_participants.deleted_at')
        ->upcomingEvents()
        ->get();
        return EventResource::collection($myevents);

    }

    public function getMyPastEvents(){

        $myevents = Event::join('event_participants','event_participants.event_id','events.id')
        ->where('event_participants.user_id',auth()->user()->id)
        ->whereNull('event_participants.deleted_at')
        ->pastEvents()
        ->get();
        return EventResource::collection($myevents);

    }

    public function getHostedBy($event_id){

        $hosted_by = "";
        $hosts = EventHost::with('user')->where('event_id',$event_id)->oldest()->get();
        if($hosts->count() == 1){
            $hosted_by = $hosts[0]->user->name;
        }else if($hosts->count() > 1){
            $other_count = $hosts->count() - 1;
            $other_text =  ($other_count > 1) ? " & ". $other_count." others" : " & ". $other_count." other";
            $hosted_by = $hosts[0]->user->name.$other_text;
        }

        return $hosted_by;

    }

    public function getEvent($slug){

        $data['event'] = new EventResource(Event::with('topics','reviews','photos')->where('slug',$slug)->first());
        $data['title'] = $data['event']->name;
        $data['hosted_by'] = $this->getHostedBy($data['event']->id);

        if(auth()->check()){
            $review = Review::where('event_id',$data['event']->id)->where('user_id',auth()->user()->id)->select('status')->ignoreRejected()->first();
            $data['review_status'] = (isset($review)) ? $review->status : null;
        }else{
            $data['review_status'] = null;
        }

        $data['reviews_and_ratings'] = $this->getReviewsAndRatings($data['event']->id);

        if(auth()->check()){

            $participation = EventParticipant::where('event_id',$data['event']->id)->where('user_id',auth()->user()->id)->select('is_attending')->first();

            if(isset($participation) && $participation->is_attending == 1){
                $data['participation_type'] = 2; // attending
            }else if(isset($participation) && is_null($participation->is_attending)){
                $data['participation_type'] = 1; // enrolled but no attendence
            }else if(isset($participation) && $participation->is_attending == 0){
                $data['participation_type'] = 3; // not attending
            }else{
                $data['participation_type'] = 0; // no participation
            }

        }else{
            $data['participation_type'] = 0; // // no participation
        }

        return $data;

    }

    public function isEnrolled($event_id,$user_id = null){

        if($user_id == null && auth()->check()){
            $user_id = auth()->user()->id;
        }

        $is_enrolled = EventParticipant::where([
            'event_id' => $event_id,
            'user_id' => $user_id,
        ])->exists();

        return ($is_enrolled) ? true : false;

    }

    public function getReviewsAndRatings($event_id){

        $reviews = Review::with('user')->where('event_id',$event_id)
        ->when(auth()->check(), function($query){
            $query->orderByRaw('reviews.user_id = ' . auth()->user()->id . ' DESC');
        })
        ->latest()->approved()->get();
        $reviews = ReviewResource::collection($reviews);

        $ratings = [];
        if($reviews->count() > 0){
            $index = 5;
            for($i=5;$i>=1;$i--){
                $dataset = [];
                $dataset['rating'] = $i;
                $dataset['count'] = $reviews->where('rating','>',$i-1)->where('rating','<=',$i)->count();
                $rating_percentage = ($dataset['count'] > 0) ? $dataset['count'] * 100 / $reviews->count() : 0;
                $dataset['percentage'] = number_format($rating_percentage,2);
                $ratings[] = $dataset;
                $index--;
            }
        }

        return [
            'reviews' => $reviews,
            'ratings' => $ratings,
        ];

    }*/
}
