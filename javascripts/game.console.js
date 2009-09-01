var Console = Class.create( { 
  initialize : function ( screen, options ) {
    options = Object.extend( { 
      frameRate:   30
    } , options || { } );
    
    this.tickSpeed  = options.tickSpeed;
    this.screen     = screen;
    this.counter    = 0;
    
    this.MAX_TICK   = -1 // 200; // - 1 to inifinitely looping
  }
  
  ,start: function() {
    var self = this;
    this.interval = window.setInterval( function () { self.tick() }, 25 );
    document.onkeydown  = function (e) { self.keyDown(e); return !false; };
    document.onkeyup    = function (e) { self.keyUp(e); return !false; };
    document.onkeypress = function (e) { self.keyPress(e); return !false; };
    
    return this;
  }
  
  ,stop: function() { 
    clearInterval( this.interval );
    this.interval = null;
    return this;
  }

  ,keyDown : function(e) {
    this.screen.keyDown(e);
  }
  
  ,keyUp : function(e) {
    this.screen.keyUp(e);
  }

  ,keyPress : function(e) {
    this.screen.keyPress(e);
  }
  
  ,tick : function () {
    this.counter++;
    
    sl.log('Current Game Tick', this.counter );
    if( this.MAX_TICK != -1 && this.counter > this.MAX_TICK )
    {
      this.stop();
      sl.log( 'Game Status', 'stopped'  );      
      return
    } 
    
    this.screen.tick();
  }
  
} );