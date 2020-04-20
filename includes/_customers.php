<?php
/*
    Fields
        customers
            customer_logo
*/

$customers = get_field('customers');

if($customers):
?>

<section class="customers" id="Customers">
    <header>
        <h3>Clientes</h3>
    </header>
    <div class="customers-wrapper container">
        <?php
            while(have_rows('customers')):the_row();

                $customer_logo = get_sub_field('customer_logo');
        ?>
        
        <article class="customers-logo">
            <figure>
                <img src="<?php echo $customer_logo; ?>" alt="logo "/> 
            </figure>             
        </article>
        
        <?php
            endwhile;
        ?>
    </div>
    
</section>

<?php
endif;
