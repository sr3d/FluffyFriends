// Paddle ////////////////////////////////////////
var YukYuk = Class.create();
YukYuk.prototype = Object.extend(new Sprite(), {

  initialize: function(id) {
    this.id         = id;
    this.node       = $(id);
    this.speed      = 10;
    this.friction   = 0;
    this.velocity   = 0;
    
    this.leftBound  = 90; // 80;
    this.rightBound = 0; // 30;


		this.bb = new BoundingShape.Rectangle( this.id, { 
			x: this.x
			,y: this.y
			,w: 100 
			,h: 50	
		} );
		this.bb.isEnabled = false;
    this.updateBoundingBox();
		
		this.score = 0;
		
  }
  
	,updateBoundingBox: function() {
		this.bb.setPos( this.getX() + 70, this.getY() + 150 );	
	}

  ,tick: function() {
    if( this.velocity == 0 ) 
    { 
      // sl.log( 'status', '' )
      return;
    }
    
    if (this.getX() + this.velocity <= this.leftBound )
    {
      //sl.log( 'status', 'left bound' )
      this.setX( this.leftBound );
    }
    else if ( this.getX() + this.velocity + this.getW() >= this.screen.getW() + this.rightBound ) 
    {
      //sl.log( 'status', 'right bound' );
      this.setX( this.screen.getW() - this.getW() + this.rightBound ); 
    }
    else
    {
      //sl.log( 'status', 'moving, velocity ' + this.velocity );
      this.moveBy(this.velocity, 0);
    }

		this.updateBoundingBox();
	}

	,chomping: function() { 
		this.isChomping = true; 
		this.node.addClassName('open');
		this.bb.isEnabled = true;
	}

	,noChomping: function() {
		this.node.removeClassName( 'open' );
		this.bb.isEnabled = false;
		this.isChomping = false;
	}

	,onCollision: function() {	
	  this.score++;
		$('score').innerHTML = this.score;
	}

});
