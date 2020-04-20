<?php
/*
    Fields
        motivator_text
        motivator_image
*/

$motivator_text = get_field('motivator_text');
$motivator_image = get_field('motivator_image');

if($motivator_text && $motivator_image):
?>

<section class="motivators" id="Motivators">
    <article class="motivators-text">
        <?php echo $motivator_text; ?>
    </article>
    <figure class="motivators-info">
        <img src="<?php echo $motivator_image; ?>" alt="motivator image"/>
    </figure>
</section>

<?php
endif;
