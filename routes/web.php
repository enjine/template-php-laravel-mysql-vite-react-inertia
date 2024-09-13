<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::inertia('/', 'Test'); // This will get component Test.jsx from the resources/js/Pages/Test.jsx
// is shorthand for:
// Route::get('/', function () {
//     return Inertia::render('Test');
// });

// Our routes
Route::get('/products', [Controller::class, 'getProducts']);
