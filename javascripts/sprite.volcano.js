var Volcano = Class.create( Sprite, { 
  initialize: function( $super, options ) { 
    options = Object.extend( { 
      speed:      5
      ,friction:  0.5
      ,width:     50
      ,height:    50
    }, options || {} );
    
    this.id       = 'volcano';
    this.node     = $(this.id);
    this.type     = 'volcano'
    
    this.reset();
  }
  
  
	
  ,tick : function() {
    if( this.isErupting )
      return;
      
    if( this.nextEruption-- > 0 )
    {
      sl.log( 'next eruption', this.nextEruption )
      return;
    }
    this.erupt();
  }
  
 
	,reset: function() { 
	  this.nextEruption = Math.floor( Math.random() * 100 );
	  this.node.removeClassName( 'erupt' );
	  this.isErupting = false;
	}

  ,erupt: function() {
    this.isErupting = true;
    var self = this;
    this.node.addClassName( 'erupt');
    setTimeout( function() { self.reset(); }, Math.random() * 1000 );
  }
  
} );
