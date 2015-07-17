// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  playFirst: function(){
    this.trigger('playFirst', this);
  },

  dequeue: function(){
    this.remove(this.at(0));
    this.trigger('dequeue', this);
    this.playFirst();
  },



});