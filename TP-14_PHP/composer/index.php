<?php 
    require  "vendor/autoload.php";

    use Intervention\Image\ImageManagerStatic as Image;
    $Image = Image::make("upload/image.jpg")->resize(200,200)->save("img/thumbnail.jpg",100);

?>