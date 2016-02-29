import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
      this.set('question', "");
      this.set('author', "");
      this.set('notes', "");
    },

    save() {
      var params = {
        question: this.get('question') || null,
        author: this.get('author') || null,
        notes: this.get('notes') || null,
      };
      this.set('addNewQuestion', false),
      this.sendAction('save', params)
    }
  }
});
