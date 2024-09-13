<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use App\Models\Item;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $response = Http::get('https://fakestoreapi.com/products');
        $items = json_decode($response->getBody()->getContents());

        collect($items)->each(function($item) {
            $model = new Item();
            $model->title = $item->title;
            $model->description = $item->description;
            $model->price = $item->price;
            $model->category = $item->category;

            $model->save();
        });
    }
}
