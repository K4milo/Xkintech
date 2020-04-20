<?php
/*
    Fields
        services
            service_name
            service_text
            service_icon
*/

$services = get_field('services');

if($services):
?>

<section class="services" id="Services">
    <header>
        <h3>Servicios</h3>
    </header>
    <div class="services-wrapper container">
        <?php
            while(have_rows('services')):the_row();

                $service_name = get_sub_field('service_name');
                $service_text = get_sub_field('service_text');
                $service_icon = get_sub_field('service_icon');
        ?>
        
        <article class="col-md-4 services-item">
            <header>
                <img src="<?php echo $service_icon; ?>" alt="<?php echo $service_name; ?>">
                <h4><?php echo $service_name; ?></h4>
            </header>
            <div class="services-item--text">
                <?php echo $service_text; ?>
            </div>
        </article>
        
        <?php
            endwhile;
        ?>
    </div>
    
</section>

<?php
endif;
