/**
 * Created by douson on 1/6/16.
 */

Template.mrHeaderLogo.helpers({
  getLogo: function(screen) {
    /*mobile or desktop*/
    return this.screen === 'desktop';
  }
});