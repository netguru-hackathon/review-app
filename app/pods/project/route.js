import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.queryRecord('project', { name: params.name} );
  },

  actions: {
    show(commit) {
      this.transitionTo('commit', commit);
    }
  }
});
