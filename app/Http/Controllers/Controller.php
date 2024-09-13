<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\Http;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    const PRODUCTS_API = 'https://fakestoreapi.com/products';

    public function getProducts(){
        return Http::get(self::PRODUCTS_API)->json();
    }
}
