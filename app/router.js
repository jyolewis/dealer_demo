import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  /* suject to change E.G. localhost:4200/index/en */
  this.route('english_main');
  this.route('french_main');
});

export default Router;
