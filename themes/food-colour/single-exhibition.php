<?php
/**
 * The template for displaying single exhibition.
 */

 ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

            <?php while ( have_posts() ) : the_post(); ?>
             
                <h1><?php the_title(); ?></h1>

                <div class="menu">
                <?php
                        $args = array( 
                            'post_type' => 'exhibition',
                            'posts_per_page' => 11, 
                        ); 
                        $exhibitions = new WP_Query( $args );
                    ?>
                    <?php if ( $exhibitions->have_posts() ) : ?>
                        <?php while ( $exhibitions->have_posts() ) : $exhibitions->the_post(); ?>
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        <?php endwhile; ?>
                        <?php wp_reset_postdata(); ?>
                        <?php else : ?>
                        <h2>Nothing found!</h2>
                    <?php endif; ?>
                </div>

                <img src="<?php echo esc_url( CFS()->get('icon') ); ?>" />
                <img src="<?php echo esc_url( CFS()->get('map') ); ?>" />
                
                <div>
                    <p><?php echo CFS()->get('description') ?></p>
                    <?php echo CFS()->get('metadata') ?>
                    <button>Twitter</button>
                    <button>Facebook</button>
                </div>

                <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Back</a>


                
                

            <?php endwhile; // End of the loop. ?>

		</main><!-- #main -->

	</div><!-- #primary -->