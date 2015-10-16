import Ember from 'ember';
/* globals moment */

export default Ember.Helper.helper(function(params) {
  let date = params[0];

  return moment(date).fromNow();
});
