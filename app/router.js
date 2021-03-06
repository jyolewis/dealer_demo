import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("english_main", {
    path: "/index/en"
  });

  this.route("french_main", {
    path: "/fr"
  });

  this.route("engines");
  this.route("english-aboutus");

  this.resource("dashboard", function() {
    this.resource("products", function() {
      this.route("new");

      this.route("edit", {
        path: ":product_id/edit"
      });

      this.route("show", {
        path: ":product_id"
      });
    });
  });


  /* suject to change E.G. localhost:4200/index/en */
  this.route('engines');
  this.route('english-aboutus');
  this.route('english-contactus');
  this.route('english-new');
  this.route('login');
  this.route('protected');

});

export default Router;
