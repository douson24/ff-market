/**
 * Created by douson on 1/6/16.
 */

Template.mrHeaderLogo.helpers({
  getLogo: function(screen) {
    /*mobile or desktop*/
    return this.screen === 'desktop';
  }
});


/* Choose language */
Template.mkHeaderLanguage.events({
  'click li a': function(e, v) {
    var $target = e.target;
    var b = $($target).data('lang');
    console.log(b);
    $($target.closest('[data-uk-dropdown]')).removeClass();
  }
});


Template.appHeaderTmpl.onRendered(function() {
  var content = $('.mk-currency-animation');
  
  for (var i = 1; i < 19; i++) {
    var item = $('<div></div>').addClass('anim-' + i);
    
    item.css({
      'position':'absolute',
      'opacity':'0',
      'zIndex':'2',
      'animationTimingFunction': 'linear',
      'backgroundSize': 'auto',
      'animationIterationCount': 'infinite',
      'animationName':'Animation5',
      'top': function() {
        return Math.random() * 100 - 1 + '%';
      },
      'left': function() {
        return Math.random() * 100 - 2 + '%';
      },
      'animationDelay': function() {
        return Math.random() * 1 + 's';
      },
      'animationDuration': function() {
        return 5 - 0.5 + Math.random() * (5 - 5 + 1) + 's';
      }
    });
    item.appendTo(content);
  }
});
