import DS from "ember-data";
import { Model } from 'ember-pouch';

var Rect = Model.extend({
  x: DS.attr('number'),
  y: DS.attr('number'),
  fill: DS.attr('string')
});

export default Rect;
