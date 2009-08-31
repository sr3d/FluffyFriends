var Screen = Class.create( {
  initialize : function (id, objects) {
    this.id = id;
    this.objects = [];
  }
  
  ,keyDown : function (e) { }
  ,keyUp : function(e) {}
  ,keyPress : function(e) { }
  ,tick : function () { }
  ,registerObject: function( obj ) { this.objects.push( obj ); }
} );



var GameScreen = Class.create( Screen, {
	initialize: function( $super, id, character ) {
		$super(id);
		
		/* push the critter to a list for collision detections*/
		this.critters = [];
		this.character = character;
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
        break;
    case Event.KEY_RIGHT:
        this.character.velocity = +this.character.speed;
        break;
    case Event.KEY_SPACE:  // space
      this.character.chomping();
      break;
    default:
        console.log('key ' + e.keyCode + ' pressed');
        break;
    }
  }

  ,keyUp : function(e) {
    switch (e.keyCode) {
    case Event.KEY_LEFT:
        if (this.character.velocity < 0) this.character.velocity = 0;
        break;
    case Event.KEY_RIGHT:
        if (this.character.velocity > 0) this.character.velocity = 0;
        break;
    case Event.KEY_SPACE:
      setTimeout( function(){ 
					this.character.noChomping();
      }, 200 );
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

});  
