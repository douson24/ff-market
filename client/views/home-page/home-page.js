

  Template.homePage.rendered = function() {
    
    var i = $('img');
    i.each(function(n) {
      this.id = this.tagName + '_' + n;
    });
    
  };


  Template.homePage.events({
    'click .btn': function(e, v) {
      e.preventDefault();
      
      
    }
  });
  
  
  Template.homePage.helpers();
  

