import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.belongsTo('answer', { async: true }),
  answer: DS.attr(),
  author: DS.attr(),
});
