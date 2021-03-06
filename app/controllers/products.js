import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    }
  },
  model: function() {
    return this.store.find('product');
  }
});
