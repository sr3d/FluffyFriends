
var Wave = Class.create( Sprite, { 
  initialize: function( $super, id, options ) { 
    options = Object.extend( { 
      speed:      0.5             // 2px per tick
      ,tickSpeed: 33
      ,amplitude: 2             // px
    }, options || {} );
    
    this.id         = id;
    this.node       = $(this.id);
    this.speed      = options.speed;
    this.amplitude  = options.amplitude;
    
    this.currentTick = 0;

    var self = this;
    
    setInterval( function(){ 
      self.currentTick += self.speed;
      if( self.currentTick > 100 ) self.currentTick = 0;
      self.node.style.bottom = self.amplitude * Math.sin( 0.15707963267948966 * self.currentTick ) + 'px';
    }, options.tickSpeed );
  }
} );
