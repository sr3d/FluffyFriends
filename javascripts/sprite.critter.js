var Critter = Class.create( Sprite, { 
  initialize: function( $super, id, options ) { 
    options = Object.extend( { 
      speed:      5
      ,friction:  0.5
      ,width:     50
      ,height:    50
    }, options || {} );
    
    this.id       = id;
    this.type     = 'critter'
    this.speed    = options.speed;
    this.friction = options.friction;
    this.velocity = 0;
    
    this.x        = 0;
    this.y        = 100;
    
    this.width    = options.width;
    this.height   = options.height;

    this.setX( this.x );
    this.setY( this.y );
    
		this.bb = new BoundingShape.Rectangle( this.id, {x: this.x, y: this.y, w: 15, h: 15} );
    
    this.render();
  }
  
  ,render: function() { 
    $('canvas').insert( { bottom: this.html() } );
    this.node = $(id);
  }
  
  ,html: function() { 
    var html = [ "<div id='" ];
    html.push( '')
    return html.join( ' ');
  }

  ,resetCoefficents: function() { 
    this.b = 100 * Math.random();
    this.a = Math.random() / 10;
  }
  
  ,updateBoundingBox: function() { 
		this.bb.setPos( this.x, this.y );
	}	
	
  ,tick : function() {

    this.x += 2;
		this.setX( this.x );
    
    this.y = this.a * (this.x * this.x ) + this.b;
    
    if( this.y > 500 - this.b )
    {
			this.reset();
		}
    this.setY( this.y );

		this.updateBoundingBox();
  }
 
	,reset: function() { 
		this.x = 0;
		this.resetCoefficents();
	}

	,onCollision: function() {
		this.reset();
	}
} );
