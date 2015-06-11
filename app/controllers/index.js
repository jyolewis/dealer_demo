import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
     fade: window.onload = function(){
      move('h1.landing-title')
      .set('color', 'black')
      .duration('20s')
      .end();
    }
  }
});
