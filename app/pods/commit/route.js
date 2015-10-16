import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('commit', params.id);
  },

  actions: {
    gotoProject() {
      let model = this.modelFor('commit');
      let self = this;
      model.get('project').then(function(project) {
        self.transitionTo('project', project);
      });
    }
  }
});
