<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $response = Http::get('https://fakestoreapi.com/products');
        if (!$response->ok()) {
            return;
        }
        $products = $response->object();
        $productsToBeInsertedInDatabase = [];
        foreach ($products as $key => $product) {
            $productsToBeInsertedInDatabase[$key] = [
                'title' => $product->title,
                'category' => $product->category,
                'rating' => $product->rating->rate,
                'price' => $product->price,
                'url' => $product->image,
                'description' => $product->description
            ];
        }
        Product::insert($productsToBeInsertedInDatabase);

    }
}
