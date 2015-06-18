import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
<<<<<<< HEAD
  this.route("english_main", {
    path: "/en"
  });

  this.route("french_main", {
    path: "/fr"
  });

  this.route("engines");
  this.route("english-aboutus");

  this.resource("products", function() {
    this.route("new");

    this.route("edit", {
      path: ":product_id/edit"
    });

    this.route("show", {
      path: ":product_id"
    });
  });
=======
  /* suject to change E.G. localhost:4200/index/en */
  this.route('english_main', { path: '/en' });
  this.route('french_main', { path: '/fr'});
  this.route('engines');
  this.route('english-aboutus');
  this.route('english-contactus');
>>>>>>> 64eeb47043c538015802012589a6a8e03e7e6c1c
});

export default Router;
