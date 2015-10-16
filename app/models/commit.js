import Ember from 'ember';
import DS from 'ember-data';
const attr = DS.attr;
const belongsTo = DS.belongsTo;
const hasMany = DS.hasMany;

export default DS.Model.extend({
  remoteId: attr('string'),
  message: attr('string'),
  state: attr('string'),
  remoteUrl: attr('string'),
  project: belongsTo('project'),
  tag: attr('array'),
  expiresAt: attr('date'),
  createdAt: attr('date'),
  authoredAt: attr('date'),
  author: belongsTo('author'),
  tickets: hasMany('ticket'),
  reviewer: belongsTo('user', { async: true }),
  fixesFor: attr('object'),
  fixedBy: attr('object'),
  fix: hasMany('commit', { inverse: 'fixed' }, { async: true }),
  fixed: hasMany('commit', { inverse: 'fix' }, { async: true }),

  shortHash: Ember.computed('remoteId', function() {
    return this.get('remoteId').substr(0,6);
  }),

  isRejected: Ember.computed('state', function() {
    return this.get('state') === 'rejected';
  }),

  isRejectedOrAutoRejected: Ember.computed('state', function() {
    return ['rejected', 'auto_rejected'].contains(this.get('state'));
  }),

  isPassed: Ember.computed('state', function() {
    return this.get('state') === 'passed';
  }),

  isFixed: Ember.computed('state', function() {
    return this.get('state') === 'fixed';
  }),

  isAccepted: Ember.computed('state', function() {
    return this.get('state') === 'accepted';
  }),

  hasExpiration: Ember.computed('state', function() {
    return this.get('state') !== 'fixed' && this.get('state') !== 'accepted';
  }),

  hasReviewer: Ember.computed.notEmpty('reviewer.id')

});
