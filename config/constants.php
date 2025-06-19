<?php

    return [

        'pagination' => [
            'items_per_page' => 10
        ],

        'date_format' => 'd M, Y',

        'date_time_format' => 'd M, Y h:i A',

        'sql_date_format' => 'Y-m-d',

        'sql_date_time_format' => 'Y-m-d h:i:s',

        'size_categories' => [
            'Mini',
            'Medium',
            'Large',
            'Extra Large',
        ],

        'order_status_txt' => [
            0 => 'OPEN',
            1 => 'ACCEPTED',
            2 => 'REJECTED',
            3 => 'IN PROGRESS',
            4 => 'CLOSED'
        ],

        'order_equipment_status_txt' => [
            0 => 'OPEN',
            1 => 'ACCEPTED',
            2 => 'REJECTED',
            3 => 'IN TRANSIT',
            4 => 'DELIVERED'
        ],

        'inspection_bodies' => [
            0 => 'TUV',
            1 => 'SPSP',
            2 => 'Aramco Standards',
        ],

        'upload' => [
            'order' => [
                'view_path' => '/storage/order/',
            ]
        ],

        'designation'=>'Sr. Full Stack Developer'

    ];
