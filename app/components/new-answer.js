import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
      this.set('answer', "");
      this.set('author', "");
    },

    saveAnswer() {
      var params = {
        answer: this.get('answer') || null,
        author: this.get('author') || null,
        question: this.get('question') || null,
      };
      this.set('addNewAnswer', false),
      this.sendAction('saveAnswer', params);
    }
  }
});
