@extends('layouts.app')

@section('content')
@guest
    <authin-wrapper></authin-wrapper>
@endguest
@endsection
