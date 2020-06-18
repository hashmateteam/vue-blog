<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ul extends Model
{
    protected $guarded = [];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function upl()
    {
        return $this->belongsTo(Upl::class);
    }
}
