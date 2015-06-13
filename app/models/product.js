import DS from 'ember-data';

var Product = DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  description: DS.attr('string')
});

Product.reopenClass({
  FIXTURES: []
});

export default Product;
