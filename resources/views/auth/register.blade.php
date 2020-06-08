@extends('layouts.app')

@section('content')
@guest
    <authup-wrapper></authup-wrapper>
@endguest
@endsection
