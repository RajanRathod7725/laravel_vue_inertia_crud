<?php

namespace App\Http\Controllers;

class WorkController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {

        $data['title'] = 'Works | '.config('app.name');
        $data['description'] = 'Explore the professional work history of a seasoned Full Stack Developer with 9+ years of experience. View completed Laravel, Vue.js, and PHP projects showcasing real-world web solutions and application development.';
        $data['keywords'] = 'Full Stack Developer Portfolio, Laravel Vue Projects';

        return view('works', compact('data'));
    }
}
