Event.observe( window, 'load', function() {

  window.paddle = new Paddle('yukyuk');
  
  window.gameScreen = new GameScreen( 'canvas', [ window.paddle
		, new Soot('soot1') 
		, new Soot('soot2')
		, new Soot('soot3')
	] );
  window.gameScreen.paddle = window.paddle;
  window.gameconsole = new Console(window.gameScreen);
  gameconsole.start();
  window.game = new Sprite(); game.id="canvas"; game.node=$("canvas");
} );




 
var GameScreen = Class.create( Screen, {
	initialize: function( $super, id, objects ) { 
		$super(id, objects);

		/* push the soot to a list for collisions */
		this.soots = [];
		for( var i = 0; i < objects.length; i++ )
		{
			if( objects[i].type == 'soot' )
				this.soots.push( objects[i] );
		}
		
	}

	,collide: function() { 
//		this.
	}
  
	,keyDown : function (e) {
    switch (e.keyCode) {
    case Event.KEY_LEFT:
        this.paddle.velocity = -this.paddle.speed;
        break;
    case Event.KEY_RIGHT:
        this.paddle.velocity = +this.paddle.speed;
        break;
    case 32:  // space
      this.paddle.chomping();//this.paddle.node.addClassName('open');
      break;
    default:
        console.log('key ' + e.keyCode + ' pressed');
        break;
    }
  },

  keyUp : function(e) {
    switch (e.keyCode) {
    case Event.KEY_LEFT:
        if (paddle.velocity < 0) paddle.velocity = 0;
        break;
    case Event.KEY_RIGHT:
        if (paddle.velocity > 0) paddle.velocity = 0;
        break;
    case 32:  // space
      setTimeout( function(){ 
					this.paddle.noChomping();
      }, 200 );
      break; 
    }
  },
  
  tick : function() {
    var i = this.objects.length;
    while( i-- )
    {
      this.objects[ i ].tick();
    }

		if( this.paddle.isChomping )
		{
			//console.log( 'I\'m chomping' );
			i = this.soots.length;
			while( i-- )
			{
				if( this.paddle.bb.collidesWith( this.soots[i].bb ) )
				{	
					//console.log( 'colliding' );
					this.soots[i].onCollision();
					this.paddle.onCollision();
				}
			}

		}
  }

});  
