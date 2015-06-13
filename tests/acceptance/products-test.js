import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

function defineFixturesFor(name, fixtures) {
  var modelClass = application.__container__.lookupFactory('model:' + name);
  modelClass.FIXTURES = fixtures;
}

module('Acceptance: Product', {
  beforeEach: function() {
    application = startApp();
    defineFixturesFor('product', []);
    originalConfirm = window.confirm;
    window.confirm = function() {
      confirmCalledWith = [].slice.call(arguments);
      return true;
    };
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
    window.confirm = originalConfirm;
    confirmCalledWith = null;
  }
});

test('visiting /products without data', function(assert) {
  visit('/products');

  andThen(function() {
    assert.equal(currentPath(), 'products.index');
    assert.equal(find('#blankslate').text().trim(), 'No Products found');
  });
});

test('visiting /products with data', function(assert) {
  defineFixturesFor('product', [{ id: 1, name: 'MyString', price: 42, description: 'MyString' }]);
  visit('/products');

  andThen(function() {
    assert.equal(currentPath(), 'products.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new product', function(assert) {
  visit('/products');
  click('a:contains(New Product)');

  andThen(function() {
    assert.equal(currentPath(), 'products.new');

    fillIn('label:contains(Name) input', 'MyString');
    fillIn('label:contains(Price) input', 42);
    fillIn('label:contains(Description) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing product', function(assert) {
  defineFixturesFor('product', [{ id: 1 }]);
  visit('/products');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'products.edit');

    fillIn('label:contains(Name) input', 'MyString');
    fillIn('label:contains(Price) input', 42);
    fillIn('label:contains(Description) input', 'MyString');

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing product', function(assert) {
  defineFixturesFor('product', [{ id: 1, name: 'MyString', price: 42, description: 'MyString' }]);
  visit('/products');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'products.show');

    assert.equal(find('p strong:contains(Name:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Price:)').next().text(), 42);
    assert.equal(find('p strong:contains(Description:)').next().text(), 'MyString');
  });
});

test('delete a product', function(assert) {
  defineFixturesFor('product', [{ id: 1, name: 'MyString', price: 42, description: 'MyString' }]);
  visit('/products');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'products.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
