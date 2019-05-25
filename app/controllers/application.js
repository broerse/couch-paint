import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  color: 'red',

  rects: computed(function() {
    let rects = [];
    for (let x = 0; x < 80; x++) {
      for (let y = 0; y < 60; y++) {
        let fill = 'red';
        if (x === 0 || x === 79 || y === 0 || y === 59) {
          fill = 'blue';
        }
        rects.push({x: x, y: y, fill: fill});
      }
    }
    return rects;
  }),

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
