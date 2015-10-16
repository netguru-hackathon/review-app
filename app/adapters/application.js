import Ember from 'ember';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'http://review.dev',
  namespace: 'api/v2',
  headers: Ember.computed(function() {
    return { 'X-CSRF-Token': Ember.$('meta[name="csrf-token"]').attr('content') };
  }).volatile()
});
