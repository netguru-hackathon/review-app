import DS from 'ember-data';

const attr = DS.attr;
const hasMany = DS.hasMany;
const belongsTo = DS.belongsTo;

export default DS.Model.extend({
  imageUrl: attr('string'),
  name: attr('string'),
  nickname: attr('string'),
  email: attr('string'),
  admin: attr('boolean'),
  person: belongsTo('author'),
  token: attr('string'),
  roles: hasMany('role'),
  role: attr('string'),
  projectIds: attr('object'),

  isAdmin: Ember.computed('admin', function() {
    return this.get('admin') === true;
  }),

  allRoles: Ember.computed('roles', function() {
    return this.get('roles').getEach('name');
  }),

  userRole: Ember.computed.uniq('allRoles')
});
