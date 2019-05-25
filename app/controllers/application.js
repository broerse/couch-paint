import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  color: 'red',

  // rects: computed(function() {
  //   let rects = [];
  //   for (let x = 0; x < 80; x++) {
  //     for (let y = 0; y < 60; y++) {
  //       let fill = 'red';
  //       if (x === 0 || x === 79 || y === 0 || y === 59) {
  //         fill = 'blue';
  //       }
  //       rects.push({x: x, y: y, fill: fill});
  //       let rectRec = this.store.createRecord('rect', {
  //        id: x + '-' + y,
  //         x: x,
  //         y: y,
  //         fill: fill
  //       });
  //       rectRec.save();
  //     }
  //   }
  //   return rects;
  // }),
  toHex (c) {
    let hex = c.toString(16);
    while (hex.length < 6 ){
      hex = '0' + hex;
    }
    return '#' + hex;
  },

  pick: computed(function() {
    let xMax = 18;
    let yMax = 18;

    let rects = [];
    let x = 0;
    let y = 0;
    let fill = 0;
    let fillAdd = Math.floor((256 * 256 * 256) / (xMax * yMax -1));
    let tempDiff = (256 * 256 * 256) - (xMax * yMax - 1) * fillAdd;
    console.log(fillAdd,tempDiff);
    for (let l = 0; l < xMax * yMax; l++) {
      // console.log(x,y,this.toHex(fill));
      rects.push({x: x, y: y, fill: this.toHex(fill)});
      x++;
      if (x === xMax) {
        x = 0;
        y++;
      }
      fill += fillAdd;
    }
    return rects;
  }),

  actions: {
    paint: function() {
      console.log(event.offsetX);
      console.log(event.offsetY);
      console.log(event.srcElement.attributes[0].value);
      let x =  Math.floor(event.offsetX/10);
      let y = Math.floor(event.offsetY/10);
      let id = x + '-' + y;
      let fill = this.get('color');
      console.log(x,y,fill);
      this.store.findRecord('rect', id).then(function(rect) {
        rect.set('x', x);
        rect.set('y', y);
        rect.set('fill', fill);
        rect.save(); // => PATCH to '/posts/1'
      });
    },

    pick: function(){
      this.set('color',event.srcElement.attributes[0].value);
    }

  }

});
