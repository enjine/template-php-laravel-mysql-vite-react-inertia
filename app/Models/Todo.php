<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{

    protected $table='todos_fer';

    protected $guarder=['created_at', 'updated_at'];
    use HasFactory;
}
