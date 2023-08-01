<?php

use App\Models\Task;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
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

/**
 * Display All Tasks
 */
Route::get('/', function () {
    $tasks = Task::orderBy('created_at', 'asc')->get();
 
    return view('tasks', [
        'tasks' => $tasks
    ]);
});
// Route::get('/', function () {
//     $tasks = Task::orderBy('created_at', 'asc')->get();
 
//     return view('tasks', [
//         'tasks' => $tasks
//     ]);
// });

/**
 * Add A New Task
 */
Route::post('/task', function (Request $request) {
    $validtor= Validator::make($request->all(), [
        'name' => 'required|max:255'
    ]);

    if($validtor->failed()) {
        return redirect('/')
            ->withInput()
            ->withErrors($validtor);
    }


    $task = new Task;
    $task ->name = $request->name;
    $task->save();

    return redirect('/');
});

/**
 * Delete An Existing Task
 */
Route::delete('/task/{id}', function ($id) {
    Task::findOrFail($id)->delete();
 
    return redirect('/');
});