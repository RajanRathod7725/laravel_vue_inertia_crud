<?php

use Illuminate\Support\Facades\Route;

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


/* -------------- */
/* User Routes */
/* -------------- */

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/works', [App\Http\Controllers\WorkController::class, 'index'])->name('works');
Route::get('/blogs', [App\Http\Controllers\BlogController::class, 'index'])->name('blogs');
Route::get('/blog/{slug?}', [App\Http\Controllers\BlogController::class, 'show'])->name('blog');
Route::get('/about', [App\Http\Controllers\AboutUsController::class, 'index'])->name('about');
Route::get('/contact', [App\Http\Controllers\ContactController::class, 'index'])->name('contact');
Route::get('/sitemap.xml', [App\Http\Controllers\SitemapXmlController::class, 'index'])->name('sitemap');

/* ------------- */
/* Admin Routes */
/* ------------- */

Route::group(['prefix' => 'admin'], function () {

    Route::get('/', [App\Http\Controllers\Admin\AdminAuthController::class, 'index'])->name('admin_login');
    Route::post('/', [App\Http\Controllers\Admin\AdminAuthController::class, 'login'])->name('admin_login_check');
    Route::get('/logout', [App\Http\Controllers\Admin\AdminAuthController::class, 'logout'])->name('admin_logout');
    Route::group(['middleware' => 'adminauth'], function () {

        //Dashboard
        Route::get('/dashboard', [App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('admin_dashboard');

        //Inquiry
        Route::get('/inquiries', [App\Http\Controllers\Admin\InquiryController::class, 'index'])->name('admin_inquiries');
        Route::get('/inquiry/{id?}', [App\Http\Controllers\Admin\InquiryController::class, 'view']);
        Route::get('/inquiry/delete/{id}', [App\Http\Controllers\Admin\InquiryController::class, 'delete']);

        // Blog
        Route::get('/blogs', [App\Http\Controllers\Admin\BlogController::class, 'index'])->name('admin_blogs');
        Route::get('/blog/add/{id?}', [App\Http\Controllers\Admin\BlogController::class, 'add']);
        Route::post('/blog/add', [App\Http\Controllers\Admin\BlogController::class, 'save'])->name('admin_blog_save');
        Route::get('/blog/delete/{id}', [App\Http\Controllers\Admin\BlogController::class, 'delete']);
        Route::get('/blog/{id?}', [App\Http\Controllers\Admin\BlogController::class, 'view']);

        //Setting
        Route::get('/settings', [App\Http\Controllers\Admin\SettingController::class, 'index'])->name('admin_settings');
        Route::post('/setting/update', [App\Http\Controllers\Admin\SettingController::class, 'update'])->name('admin_setting_update');

        /* Livewire Components */
        Route::get('user-list',[App\Http\Livewire\UserList::class]);
        Route::get('view-user',[App\Http\Livewire\ViewUser::class]);
        Route::get('trix-editor',[App\Http\Livewire\Trix::class]);
        Route::get('inquiry-list',[App\Http\Livewire\InquiryList::class]);
        Route::get('newsletter-list',[App\Http\Livewire\NewsletterList::class]);

        // Common Livewire Components
        Route::get('toast-notification',[App\Http\Livewire\ToastNotification::class]);

    });
});

