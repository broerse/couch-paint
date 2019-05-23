import Controller from '@ember/controller';

export default Controller.extend({
  color: 'red',

  actions: {
    paint: function() {
      console.log(event.offsetX);
      console.log(event.offsetY);
      console.log(event);
      console.log(event.srcElement.attributes[0].value);
    },

    pick: function(){
      this.set('color',event.srcElement.attributes[0].value);
    }

  }

});
