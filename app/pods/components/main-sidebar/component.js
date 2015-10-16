import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['pane', 'pane-sm', 'sidebar'],
  term: '',
  filteredProjects: Ember.computed('term', 'projects', function() {
    let term = this.get('term');

    if (Ember.isEmpty(term)) {
      return this.get('projects');
    } else {
      return this.get('projects').filter(function(item, index, enumerable) {
        return item.get('name').startsWith(term);
      });
    }
  })
});
