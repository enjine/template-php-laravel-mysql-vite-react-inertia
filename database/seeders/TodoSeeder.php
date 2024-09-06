<?php

namespace Database\Seeders;

use App\Models\Todo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Collection;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $responseJson = Http::get('https://dummyjson.com/todos');

        collect(json_decode($responseJson->json(), true))->each(function ($item) {
            $todo = Todo::create(['name' => $item['todo'], 'id' => $item['id'], 'description' => $item['todo']]);
            
        });
    }
}
