/**
 * Created by douson on 1/10/16.
 */

Template.mainLayout.onRendered(function() {
  setTimeout(function() {
    $('.wrapper').addClass('loaded');
  }, 10)
});