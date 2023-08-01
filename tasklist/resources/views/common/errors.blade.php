@if(count($errors) > 0)
<!-- Fom Erorr List -->

    <div class="alert alert-danger">
        <strong>Whoops! Something Went Wrong!</strong>

        <br>
        <<br>

        <<ul>
            @foreach ($errors->all() as $error)
            <il>{{ $error }}</il>
            @endforeach
        </ul>
    </div>
@endif