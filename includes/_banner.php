<?php
/*
    Fields
        hero_text
        hero_image
*/

$hero_text = get_field('hero_text');
$hero_image = get_field('hero_image');

if($hero_text && $hero_image):
?>
    <section class="hero" id="Hero">
        <div class="container hero-wrapper">
            <article class="hero--text">
                <?php echo $hero_text; ?>
            </article>
            <figure class="hero--image">
                <img src="<?php echo $hero_image; ?>" alt="Piso a tus sueños"/>
            </figure>
        </div>
    </section>

<?php
endif;
