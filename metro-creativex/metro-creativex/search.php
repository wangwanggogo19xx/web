<?php get_header(); ?>			<h1>				<?php echo __('Search Results for: ','metro-creativex') . get_search_query(); ?>			</h1>		</div><!--/topside-->		<div id="content">			<?php if ( have_posts() ) : ?>			<?php /* The loop */ ?>			<?php while ( have_posts() ) : the_post(); ?>				<?php get_template_part( 'content', get_post_format() ); ?>			<?php endwhile; ?>			<?php metro_creativex_pagination(); ?>			<?php else : ?>				<?php get_template_part( 'content', 'none' ); ?>			<?php endif; ?>		</div><!-- /content --><?php get_footer(); ?>