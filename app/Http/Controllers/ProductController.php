<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use App\Models\Todo;


class ProductController extends Controller
{
    public function index(){

        return Inertia::render('Test',[
            'todos' => Todo::paginate(2)
        ]);
    }
}
