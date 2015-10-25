import Ember from 'ember';

var btn = false;

export default Ember.Controller.extend({
  actions: {
    addSpacing: $("#nav-btn").click = function () {
      if (btn === false){
      Ember.$("#clearfix").css("padding-top", 120);
        btn = true;
      }else {
        Ember.$("#clearfix").css("padding-top", 0);
        btn = false;
      }
    },
    getTime: setInterval(function () {
      
      var time =  moment().format('MMMM Do YYYY, h:mm:ss a');
      document.getElementById('currentTime').innerHTML = time;

    },1000)

  }
});
