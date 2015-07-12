import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.find('product');
  }
});

// <!-- FOR TESTING PURPOSES -->
// export default Ember.Route.extend({
//   model: function() {
//     return this.store.find('product');
//   }
// });
