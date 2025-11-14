<?php

require_once get_stylesheet_directory() . '/custom-woocommerce-functions.php';

/* add_shortcode("pw_pre_launch_offer_form", function () {
    ob_start();
    include(get_stylesheet_directory() . '/pw-pre-launch-form.php');
    return ob_get_clean();
}); */

function astra_child_css_enqueue() {
    wp_enqueue_style('astra-theme-css', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), wp_get_theme()->get('Version'));
}
add_action('wp_enqueue_scripts', 'astra_child_css_enqueue');

add_action('phpmailer_init', function($phpmailer) {
    $phpmailer->SMTPOptions = [
        'ssl' => [
            'verify_peer'       => false,
            'verify_peer_name'  => false,
            'allow_self_signed' => true,
        ],
    ];
});


// Complete solution for WOOF radio buttons and remove icons
function woof_radio_remove_fix() {
    ?>
    <script type="text/javascript">
    jQuery(document).ready(function($) {
        function saveScrollPosition() {
            const scrollPos = $(window).scrollTop();
            sessionStorage.setItem('woof_scroll_position', scrollPos);
            console.log('Scroll saved:', scrollPos);
        }
        
        function restoreScrollPosition() {
            const savedScroll = sessionStorage.getItem('woof_scroll_position');
            if (savedScroll && savedScroll > 0) {
                setTimeout(() => {
                    $('html, body').scrollTop(parseInt(savedScroll));
                    sessionStorage.removeItem('woof_scroll_position');
                }, 100);
            }
        }
        
        // 1. Handle radio button changes
        $('.woof_list_radio input[type="radio"]').on('change', function() {
            console.log('Radio button changed');
            saveScrollPosition();
            
            // Trigger the filter immediately after radio change (like WOOF does)
            setTimeout(() => {
                $('.woof_submit_search_form').trigger('click');
            }, 100);
        });
        
        // 2. Handle remove icon clicks (the X buttons)
        $(document).on('click', '.woof_radio_term_reset', function(e) {
            console.log('Remove icon clicked');
            e.preventDefault();
            e.stopPropagation();
            
            saveScrollPosition();
            
            // WOOF might handle this via JavaScript, so we need to simulate the removal
            const $resetLink = $(this);
            const termId = $resetLink.data('term-id');
            const dataName = $resetLink.data('name');
            
            console.log('Removing term:', termId, 'for:', dataName);
            
            // Uncheck the corresponding radio button
            $('.woof_radio_term_' + termId).prop('checked', false);
            
            // Hide this remove icon
            $resetLink.hide();
            
            // Remove selected class from label
            $resetLink.closest('li').find('.woof_radio_label').removeClass('woof_radio_label_selected');
            
            // Trigger filter to apply changes
            setTimeout(() => {
                $('.woof_submit_search_form').trigger('click');
            }, 50);
            
            return false;
        });
        
        // 3. Handle filter buttons
        $('.woof_submit_search_form, .woof_reset_search_form').on('click', function() {
            saveScrollPosition();
        });
        
        // 4. Restore scroll position on page load
        $(window).on('load', restoreScrollPosition);
        
        console.log('WOOF Radio & Remove Fix loaded');
    });
    </script>
    <?php
}
add_action('wp_footer', 'woof_radio_remove_fix');

add_filter('wp_generate_attachment_metadata', function($metadata, $attachment_id) {
    $upload_dir = wp_upload_dir();
    $file = get_attached_file($attachment_id);
    $original_path = $file;
    $original_filename = basename($file);
 
    // Get all registered image sizes
    $sizes = get_intermediate_image_sizes();
 
    // Create duplicate files for each size
    foreach ($sizes as $size) {
        $size_info = image_get_intermediate_size($attachment_id, $size);
        $target_path = str_replace($original_filename, "{$metadata['file']}", $file);
 
        // Build a new filename like original-300x300.jpg
        $ext  = pathinfo($original_path, PATHINFO_EXTENSION);
        $name = pathinfo($original_path, PATHINFO_FILENAME);
        $duplicate_path = trailingslashit(dirname($original_path)) . "{$name}-{$size}.{$ext}";
 
        // Copy the original image as the new size
        if (file_exists($original_path)) {
            @copy($original_path, $duplicate_path);
        }
 
        // Update metadata to reflect that this “size” exists
        if (!isset($metadata['sizes'][$size])) {
            $metadata['sizes'][$size] = [
                'file'   => basename($duplicate_path),
                'width'  => $metadata['width'],
                'height' => $metadata['height'],
                'mime-type' => $metadata['sizes']['thumbnail']['mime-type'] ?? mime_content_type($original_path),
            ];
        }
    }
 
    return $metadata;
}, 10, 2);
 
// Disable actual cropping or resizing
add_filter('intermediate_image_sizes_advanced', '__return_empty_array');
 
// Prevent "big image" downscaling
add_filter('big_image_size_threshold', '__return_false');





/**
 * Add video to WooCommerce gallery with orientation detection and fullscreen
 */
function add_preview_video_to_product_gallery($html, $attachment_id) {
    global $product;

    if (!is_product() || !$product instanceof WC_Product) {
        return $html;
    }

    // Check category and meta
    $is_video_category = has_term('video', 'product_cat', $product->get_id());
    $preview_video_url = get_post_meta($product->get_id(), 'preview_video_url', true);

    static $video_added = false;

    if ($is_video_category && !empty($preview_video_url) && !$video_added) {
        $video_added = true;

        // Add main video slide
        ob_start(); ?>
        <div class="woocommerce-product-gallery__image video-slide" data-thumb="<?php echo esc_url(wc_placeholder_img_src()); ?>" data-thumb-alt="Preview Video">
            <video id="product-preview-video" controls preload="metadata" style="width:100%; border-radius:8px;">
                <source src="<?php echo esc_url($preview_video_url); ?>" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <?php
        $video_html = ob_get_clean();

        // Add play icon thumbnail and video handling via JS
        add_action('wp_footer', function() use ($preview_video_url) { ?>
            <script type="text/javascript">
            jQuery(document).ready(function($) {
                // Only add once
                if ($('.flex-control-nav li.video-thumb').length === 0) {
                    const playIcon = 'https://cdn-icons-png.flaticon.com/512/727/727245.png';
                    const videoThumb = $('<li class="video-thumb"><img src="'+ playIcon +'" alt="Video" draggable="false" style="object-fit: contain; background: #000; border-radius: 6px;"></li>');

                    // Add as the first thumbnail
                    $('.flex-control-nav').prepend(videoThumb);

                    // On click, move slider back to first (video)
                    videoThumb.on('click', function(e) {
                        e.preventDefault();
                        const gallery = $('.woocommerce-product-gallery');
                        if (gallery.data('flexslider')) {
                            gallery.data('flexslider').flexslider(0);
                        }
                    });
                }

                // Video orientation detection and fullscreen handling
                function setupVideoPlayer() {
                    const video = document.getElementById('product-preview-video');
                    if (!video) {
                        setTimeout(setupVideoPlayer, 100);
                        return;
                    }

                    // Create a temporary video element to detect dimensions
                    const tempVideo = document.createElement('video');
                    tempVideo.src = '<?php echo esc_url($preview_video_url); ?>';
                    
                    tempVideo.addEventListener('loadedmetadata', function() {
                        const videoWidth = tempVideo.videoWidth;
                        const videoHeight = tempVideo.videoHeight;
                        const isPortrait = videoHeight > videoWidth;
                        
                        console.log('Video dimensions:', videoWidth, 'x', videoHeight, 'Orientation:', isPortrait ? 'Portrait' : 'Landscape');
                        
                        // Store orientation in video element
                        video.setAttribute('data-orientation', isPortrait ? 'portrait' : 'landscape');
                        
                        // Clean up
                        tempVideo.remove();
                    });

                    // Auto-play and enter fullscreen when video starts playing
                    video.addEventListener('play', function() {
                        console.log('Video started playing, entering fullscreen...');
                        
                        // Try to enter fullscreen
                        enterFullscreen(video);
                        
                        // Apply orientation-specific styles
                        const orientation = video.getAttribute('data-orientation');
                        if (orientation === 'portrait') {
                            video.style.maxHeight = '90vh';
                            video.style.maxWidth = 'auto';
                        } else {
                            video.style.maxWidth = '90vw';
                            video.style.maxHeight = 'auto';
                        }
                    });

                    // Handle fullscreen change events
                    document.addEventListener('fullscreenchange', function() {
                        if (!document.fullscreenElement) {
                            // Exited fullscreen - reset styles and pause video
                            video.style.maxWidth = '100%';
                            video.style.maxHeight = 'none';
//                             video.pause();
                        }
                    });
                }

                // Pause video when user clicks on any other thumbnail (non-video thumbnails)
                $(document).on('click', '.flex-control-nav li:not(.video-thumb)', function() {
                    const video = document.getElementById('product-preview-video');
                    if (video && !video.paused) {
                        console.log('Other thumbnail clicked - pausing video');
                        video.pause();
                        
                        // Also exit fullscreen if in fullscreen
                        if (document.fullscreenElement) {
                            exitFullscreen();
                        }
                    }
                });

                // Also pause video when flexslider changes to a non-video slide
                $(document).on('flexslider.before', function(e, slider) {
                    if (slider.animatingTo !== 0) {
                        // Changing to a non-video slide, pause video
                        const video = document.getElementById('product-preview-video');
                        if (video && !video.paused) {
                            console.log('Changing to image slide - pausing video');
                            video.pause();
                            
                            // Exit fullscreen if in fullscreen
                            if (document.fullscreenElement) {
                                exitFullscreen();
                            }
                        }
                    }
                });

                // Fullscreen function with fallbacks
                function enterFullscreen(element) {
                    if (element.requestFullscreen) {
                        element.requestFullscreen().catch(err => {
                            console.log('Fullscreen request failed:', err);
                        });
                    } else if (element.webkitRequestFullscreen) {
                        element.webkitRequestFullscreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        element.msRequestFullscreen();
                    } else {
                        console.log('Fullscreen API not supported');
                    }
                }

                // Exit fullscreen function
                function exitFullscreen() {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                }

                // Start video setup
                setTimeout(setupVideoPlayer, 1000);
            });
            </script>

            <style>
            /* Fullscreen video styles */
            #product-preview-video:-webkit-full-screen {
                width: 100% !important;
                height: 100% !important;
                max-width: none !important;
                max-height: none !important;
                object-fit: contain;
            }
            
            #product-preview-video:-moz-full-screen {
                width: 100% !important;
                height: 100% !important;
                max-width: none !important;
                max-height: none !important;
                object-fit: contain;
            }
            
            #product-preview-video:-ms-fullscreen {
                width: 100% !important;
                height: 100% !important;
                max-width: none !important;
                max-height: none !important;
                object-fit: contain;
            }
            
            #product-preview-video:fullscreen {
                width: 100% !important;
                height: 100% !important;
                max-width: none !important;
                max-height: none !important;
                object-fit: contain;
            }

            /* Portrait video styling */
            .video-slide[data-orientation="portrait"] video {
                max-height: 80vh;
                width: auto;
                margin: 0 auto;
                display: block;
            }

            /* Landscape video styling */
            .video-slide[data-orientation="landscape"] video {
                width: 100%;
                height: auto;
            }

            /* Thumbnail styles */
            .video-thumb {
                position: relative;
                cursor: pointer;
            }
            .video-thumb::after {
                content: '▶';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                background: rgba(0,0,0,0.7);
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                pointer-events: none;
            }
			.woocommerce-product-gallery__image.video-slide video{
                max-height: 464px !important;
            }
            </style>
            <?php
        });

        return $video_html . $html;
    }

    return $html;
}
add_filter('woocommerce_single_product_image_thumbnail_html', 'add_preview_video_to_product_gallery', 10, 2);