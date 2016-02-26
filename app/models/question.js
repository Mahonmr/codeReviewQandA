import DS from 'ember-data';

export default DS.Model.extend({
  answers: DS.hasMany('answer', { async: true }),
  question: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
});
