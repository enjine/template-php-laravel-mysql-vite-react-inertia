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
        $todos = json_decode($content);

        collect($todos)->each(function ($item, int $key) {
           \App\Models\Todo::insert([
            'id' => $item->id,
            'todo' => $item->todo,
            'completed' => $item->completed,
            'user_id' =>$item->userId,
        ]);
        });

        Log::info('Seeding Todos');

    }
}
