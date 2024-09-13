<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Item;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function items(Request $request) {
        return response(['data' => Item::all()]);
    }
}
