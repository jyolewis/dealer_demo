import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'index',
  didInsertElement: function() {
    this._super();

    var screenHeight = Ember.$(window).height();
    Ember.$('.main_title').height(screenHeight);
    Ember.$('.main_title').css('padding-top', screenHeight / 2);
  }
});
