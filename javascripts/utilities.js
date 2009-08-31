var Util = {};
Util.StaticLogger = { 
  collection: []
  ,count: []
  ,log: function( key, value ) {
    if( !this.collection[ key ] ) 
    {
      this.count[ "sl_key_" + key ] = 0;
        this.draw();
      this.div.insert( { bottom: "<div><b>" + key +"</b><div id='sl_key_" + key +"'></div></div>"})
      this.collection[ key ] = true;
    }
    this.count[ "sl_key_" + key ]++;
    $("sl_key_" + key ).innerHTML = "[" + this.count[ "sl_key_" + key ]+ "] " + value;
    
  }
    
  ,draw: function( ) {
    if( !this.div ) 
    {
      $( document.body ).insert( { bottom: "<div id='static_logger' style='position:fixed;right:0;top:10px; width:250px; border: 2px solid black; background-color: white;height: 300px; overflow:auto'></div>" } );
      this.div = $('static_logger');
      
      Event.observe( window, 'unload', function() { 
        this.div = null;  // remove mem-leak;
      }.bind(this) );
    }
  }
}
var sl = Util.StaticLogger;

Event.KEY_SPACE = 32;