var Screen = Class.create( {
  initialize : function (id, objects) {
    this.id = id;
    this.objects = [];
  }
  
  ,keyDown : function (e) { }
  ,keyUp : function(e) {}
  ,keyPress : function(e) { }
  ,tick : function () { }
  ,registerObject: function( obj ) { obj.screen = this; this.objects.push( obj ); }
} );



var GameScreen = Class.create( Screen, {
	initialize: function( $super, id, character ) {
		$super(id);
		
		/* push the critter to a list for collision detections*/
		this.critters           = [];
		this.character          = character;
		this.character.screen   = this;
		
		this.registerObject( character );
	}
	
	,registerObject: function( $super, object ) { 
	  $super( object );
	  
	  if( object.type == 'critter' )
	  {
	    this.critters.push( object );
	  }
	}

	,keyDown : function (e) {
    switch (e.keyCode) {
      case Event.KEY_LEFT:
        this.character.velocity = -this.character.speed;
        sl.log( 'velocity', this.character.velocity );
        break;
      case Event.KEY_RIGHT:
        this.character.velocity = +this.character.speed;
        sl.log( 'velocity', this.character.velocity );
        break;
      case Event.KEY_SPACE:  // space
        this.character.chomping();
        break;
      default:
        sl.log('Key Pressed', e.keyCode);
        break;
    }
  }

  ,keyUp : function(e) {
    switch (e.keyCode) {
      case Event.KEY_LEFT:
        if (this.character.velocity < 0) this.character.velocity = 0;
        sl.log( 'velocity', this.character.velocity );
        break;
      case Event.KEY_RIGHT:
        if (this.character.velocity > 0) this.character.velocity = 0;
        sl.log( 'velocity', this.character.velocity );  
        break;
      case Event.KEY_SPACE:
        var self = this;
        setTimeout( function(){ self.character.noChomping(); }, 100 );
        break;
    }
  }
  
  ,tick : function() {
    /* ticking for all the registered objects */
    var i = this.objects.length;
    while( i-- ) this.objects[ i ].tick();

    /* collision detection */
		if( this.character.isChomping )
		{
			i = this.critters.length;
			while( i-- )
			{
				if( this.character.bb.collidesWith( this.critters[i].bb ) )
				{	
					this.critters[ i ].onCollision();
					this.character.onCollision();
				}
			}
		}
  }
  
  ,getW: function() { return $('canvas').offsetWidth; }
  ,getH: function() { return $('canvas').offsetHeight; }

});  
