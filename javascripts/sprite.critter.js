var Critter = Class.create( Sprite, { 
  initialize: function( $super, options ) { 
    options = Object.extend( { 
      speed:      5
      ,friction:  0.5
      ,width:     50
      ,height:    50
      
      ,bbOffsetX: 5
      ,bbOffsetY: 5
      ,bbW:       20
      ,bbH:       20
      
      ,critterCssClass:  ''
    }, options || {} );
    
    this.id       = 'critter_' + Util.nextCounter();
    console.log( this.id );
    this.type     = 'critter'
    this.speed    = options.speed;
    this.friction = options.friction;
    this.velocity = 0;
    
    this.bbW      = options.bbW;
    this.bbH      = options.bbH;
    this.bbOffsetX = options.bbOffsetX;
    this.bbOffsetY = options.bbOffsetY;
    
    this.critterCssClass = options.critterCssClass;
    
		this.initBoundingBox();
    this.updateBoundingBox();
    
    this.render();

    this.resetCoefficents();
  }
  
  ,initBoundingBox: function() { 
    this.bb = new BoundingShape.Rectangle( this.id, {x: 0, y: 0, w: this.bbW, h: this.bbH } );
  }
  
  ,updateBoundingBox: function() { 
		this.bb.setPos( this.x + this.bbOffsetX, this.y + this.bbOffsetY );
	}
  
  ,render: function() { 
    $('canvas').insert( { bottom: this.html() } );
    this.node = $(this.id);
    this.node.hide();
  }
  
  ,html: function() { 
    var html = [ "<div id='" + this.id + "'" ];
    html.push( 'class="critter ' + this.critterCssClass + ' "' );
    html.push( '></div>' );
    return html.join( ' ' );
  }

  ,resetCoefficents: function() {
    /* reset the coeffecients and the time */
    //this.angle          = 1; //( Math.random() * 90 )  * Math.PI / 180;
    //this.b              = 300;
    //this.currentTick    = 0;  // the time

    this.angle          = 0.8 + Math.random() * 0.4;
    this.b              = 230;      // offset for y-axis, where the critter appears
    this.currentTick    = 0;        // the time

    /* find the speed and acceleration*/
    var d       = 100 + Math.random() * 170;          // distance: min 150 px, max: 300
    var t       = 1500 + Math.random() * 1000;        // time to arrive at destination
    var ticks   = t / 33;                             // number of ticks to reach the target, at 33 ticks per second
    
    this.speed  = d / ( ticks * Math.cos( this.angle ) ); // px/tick
    this.a      = this.speed * 0.5 / ticks;
    
    //sl.log( this.id + ' angle', this.angle );
    //sl.log( this.id + ' speed', this.speed );
    //sl.log( this.id + ' acceleration', this.a );
  }
  

	
  ,tick : function() {
    if( !this.node.visible() ) this.node.show();
    this.currentTick++;

    this.x = this.speed * Math.cos( this.angle ) * this.currentTick + 50;
    this.y = this.b - this.speed * Math.sin( this.angle ) * this.currentTick + this.a * this.currentTick * this.currentTick;

    this.setX( this.x );
    this.setY( this.y );
		this.updateBoundingBox();
		
		if( this.y > this.b + 65 )
		  this.resetCoefficents();

  }
 
	,reset: function() { 
		this.x = 0;
		this.resetCoefficents();
	}

	,onCollision: function() {
		this.reset();
	}
} );


var HamCritter = Class.create( Critter, {
  initialize: function( $super, options ) { 
    options = Object.extend( { 
      speed:      4
      ,bbOffsetX: 7
      ,bbOffsetY: 7
      ,bbW:       20
      ,bbH:       20
      ,critterCssClass: 'ham'
    }, options || {} );

    $super( options );
  }  
} );

var ChainsawCritter = Class.create( Critter, {
  initialize: function( $super, options ) { 
    options = Object.extend( { 
      speed:      6
      ,bbOffsetX: 7
      ,bbOffsetY: 7
      ,bbW:       20
      ,bbH:       20
      ,critterCssClass: 'chainsaw'
    }, options || {} );

    $super( options );
  }  
} );

var IcecreamCritter = Class.create( Critter, {
  initialize: function( $super, options ) { 
    options = Object.extend( { 
      speed:      6
      ,bbOffsetX: 7
      ,bbOffsetY: 7
      ,bbW:       20
      ,bbH:       20
      ,critterCssClass: 'icecream'
    }, options || {} );

    $super( options );
  }  
} );

