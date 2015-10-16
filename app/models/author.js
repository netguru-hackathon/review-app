import DS from 'ember-data';

const attr = DS.attr;

export default DS.Model.extend({
  username: attr('string'),
  name:     attr('string'),
  imageUrl: attr('string')
});
