import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('question');
  },

  actions: {
    save(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    destroyQuestion(question) {
      console.log("Are we here")
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
