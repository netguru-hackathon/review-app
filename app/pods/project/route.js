import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.queryRecord('project', { name: params.name} );
  },

  // serialize: function(model) {
  //   // this will make the URL `/posts/foo-post`
  //   return { project_slug: model.get('name') };
  // }
});
