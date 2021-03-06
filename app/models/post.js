import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  author: DS.belongsTo('author'),
  title: DS.attr('string'),
  body: attr('string'),
  date: attr('date'),
  comments: DS.hasMany('comment')
});
