<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Todo;
use Illuminate\Support\Facades\Http;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $response = Http::get('https://dummyjson.com/todos');
        $json = $response->json();

        foreach($json['todos'] as $todo){
            Todo::create($todo);
        }
    }
}
