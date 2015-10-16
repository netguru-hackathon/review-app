import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('main', { path: '/' }, function() {
    this.route('project', { path: '/:name', resetNamespace: true });
  });
});

export default Router;
