import Ember from 'ember';
import DS from 'ember-data';

const attr = DS.attr;
const hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr('string'),
  rejected: attr('number'),
  pending: attr('number'),
  accepted: attr('number'),
  total: attr('number'),
  grade: attr('string'),
  token: attr('string'),
  url: attr('string'),

  commits: hasMany('commit', { async: true }),


  reviewIsGood: Ember.computed('grade', function() {
    return this.get('grade') === 'good';
  }),

  slug: Ember.computed('name', function() {
    return this.get('name').replace(/\s+/g, '-').toLowerCase();
  })
});
