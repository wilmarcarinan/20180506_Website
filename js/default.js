// Fullscreen Background & Slideshows
// =========================
$(document).ready(function() {
  
  // Check Backstretch is loaded
  if (!jQuery().backstretch) {
    return;
  }
  
  // Find all data-toggle="backstretch" elements
  var backstretches = $('[data-toggle=backstretch]');// Selector
  backstretches.each(function() {
    var backstretchEl = $(this);
    var backstretchTarget = backstretchEl.data('backstretch-target') || null;
    var backstretchImgs = [];
    var backstretchOpacity = backstretchEl.data('opacity') || null;
    var backstretchSettings = {
      fade: 750,
      duration: 5000
    };
  
    // Get images from element
    $.each(backstretchEl.data('backstretch-imgs').split(','), function(k, img) {
      backstretchImgs[k] = img;
    });
  
    if (backstretchImgs) {
      $('html').addClass('has-backstretch');
      
      // Opacity: add CSS to wrapper
      if (backstretchOpacity !== null) {
        $('html').addClass('backstretch-opacity-'+ backstretchOpacity);
      }
      
      // Merge in any custom settings
      backstretchSettings = $.extend({}, backstretchSettings, backstretchEl.data());
  
      // block level element
      if (backstretchTarget !== null) {
        if (backstretchTarget === 'self') {
          backstretchTarget = backstretchEl;
        }
        else {
          if ($(backstretchTarget).length > 0) {
            backstretchTarget = $(backstretchTarget);
          }
        }
        backstretchTarget.backstretch(backstretchImgs, backstretchSettings);
      }
      else {
        $.backstretch(backstretchImgs, backstretchSettings);
      }                 
    }
  });

  $(window).on("backstretch.before", function (e, instance, index) {
    
    if (index == 0) {
      $('#backstretch-div ol li:nth-child(1)').addClass("active");
      $('#backstretch-div ol li:nth-child(2)').removeClass("active");
      $('#backstretch-div ol li:nth-child(3)').removeClass("active");
    } else if (index == 1) {
      $('#backstretch-div ol li:nth-child(1)').removeClass("active");
      $('#backstretch-div ol li:nth-child(2)').addClass("active");
      $('#backstretch-div ol li:nth-child(3)').removeClass("active");
    } else if (index == 2) {
      $('#backstretch-div ol li:nth-child(1)').removeClass("active");
      $('#backstretch-div ol li:nth-child(2)').removeClass("active");
      $('#backstretch-div ol li:nth-child(3)').addClass("active");
    }
  });
  
});