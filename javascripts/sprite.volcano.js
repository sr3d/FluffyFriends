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
    
    this.critterTypes = [ Critter, HamCritter, ChainsawCritter,  IcecreamCritter ];
    
    this.maxCritters = 6;
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
	  this.nextEruption = Math.floor( Math.random() * 50 );
	  this.node.removeClassName( 'erupt' );
	  this.isErupting = false;
	  

	}

  ,erupt: function() {
    this.isErupting = true;
    var self = this;
    this.node.addClassName( 'erupt');
    
    /* add a new criter here */
    //console.log( this.screen );
    if( this.maxCritters-- > 0 )
    {
      //var critter = this.critterTypes[ Math.round( Math.random() * this.critterTypes.length ) ];
      var critter = this.critterTypes[ this.maxCritters % this.critterTypes.length ];
      this.screen.registerObject( new critter() );
      //this.screen.registerObject( new HamCritter() );
    }
    setTimeout( function() { self.reset(); }, Math.random() * 1500 );
  }
  
} );
