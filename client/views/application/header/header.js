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