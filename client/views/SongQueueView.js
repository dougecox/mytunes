// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
  	console.log(JSON.stringify(this));
  	// var context = this
  	// _.each( this.collection, function(song) {
   //    var html = [
   //  '<div class="artist">',
   //    'artist: ' + context[song].get('artist'),
   //  '</div>',   
   //  '<div class="title">',
   //    'title: ' + context[song].get('title'),
   //  '</div>'
  	// ].join("");
  	// });

  	this.render();
  },

  render: function() {
    var html = [
    '<div class="artist">',
      'artist: ' + context[song].get('artist'),
    '</div>',   
    '<div class="title">',
      'title: ' + context[song].get('title'),
    '</div>'
  	].join("");
  	
    return this.$el.html(html);
  }

});
