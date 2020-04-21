<?php
/*
    Fields
        motivators
            motivator_item
*/

$motivators = get_field('motivators');
$counter = 1;

if ($motivators) : ?>
    <section class="motivators" id="Motivators">
        <header>
            <h3>Motivadores</h3>
        </header>
        <div class="motivators-wrapper container">
            <?php while (have_rows('motivators')) : the_row();
                $motivator_item = get_sub_field('motivator_item');
                $motivator_title = get_sub_field('motivator_title');
            ?>
                <article class="motivators-item" data-index="<?php echo $counter; ?>">
                    <header>
                        <h4><?php echo $counter . ' ' . $motivator_title; ?></h4>
                    </header>
                    <div class="motivators-item--text">
                        <p><?php echo $motivator_item; ?></p>
                    </div>
                </article>
            <?php $counter++;
            endwhile; ?>
        </div>
    </section>
<?php
endif;
