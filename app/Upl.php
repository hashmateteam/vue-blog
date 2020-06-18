<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Upl extends Model
{
    //
    public function uplc()
    {
        return $this->belongsTo(Uplc::class);
    }
}
