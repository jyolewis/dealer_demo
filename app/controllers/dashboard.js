import Ember from 'ember';



export default Ember.Controller.extend({
  toggle:false,
  actions: {
      display: function() {
        this.set('toggle', true);
      },
      hide: function() {
        this.set('toggle', false);
        this.transitionTo("dashboard");
      }
    }
});
