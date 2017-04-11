// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
  	if (this.length === 1) {
  		this.model.playFirst()
  	}
  },

  playFirst: function() {

  }

});