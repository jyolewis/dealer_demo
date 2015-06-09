import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  /* suject to change E.G. localhost:4200/index/en */
  this.route('english_main', { path: '/en' });
  this.route('french_main', { path: '/fr'});
  this.route('engines');
  this.route('english-aboutus');
});

export default Router;
