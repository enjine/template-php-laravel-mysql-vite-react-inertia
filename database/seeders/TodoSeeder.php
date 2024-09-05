<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;


class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $content = file_get_contents('https://dummyjson.com/todos');
        $data = json_decode($content);

       collect($data->todos)->each(function ($item) {

            \App\Models\Todo::insert([
                'id' => $item->id,
                'todo' => $item->todo,
                'completed' => $item->completed,
                'user_id' =>$item->userId,
            ]);
        });

    }
}
