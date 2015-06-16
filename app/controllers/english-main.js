import Ember from 'ember';

var btn = false;

export default Ember.Controller.extend({
  actions: {
    addSpacing: $("#nav-btn").click = function () {
      if (btn === false){
      $("#clearfix").css("padding-top", 120);
        btn = true;
      }else {
        $("#clearfix").css("padding-top", 0);
        btn = false;
      }
    }

  }
});
