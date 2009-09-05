var Cloud = Class.create( Sprite, { 
  initialize: function( $super, id, options ) { 
    options = Object.extend( { 
      speed:      0.5             // 2px per tick
      ,tickSpeed: 33
      ,distance:  $('canvas').offsetWidth // px
    }, options || {} );
    
    this.id         = id;
    this.node       = $(this.id);
    this.speed      = options.speed;
    this.distance   = options.distance;
    
    // this.node.style.left = -this.node.offsetWidth + 'px';
    
    var self = this;
    
    setInterval( function(){ 
      if( parseInt( self.node.style.left ) >  self.distance ) 
      {
        console.log( self.id + ' is out, reset position' + -self.node.offsetWidth  );
        self.node.style.left = Math.round( -self.node.offsetWidth ) + 'px';
        //return;
      }
      
      self.node.style.left = ( parseInt( self.node.style.left ) + self.speed ) + 'px';
      //console.log( self.node.style.left );
    }, options.tickSpeed );
  }
} );
