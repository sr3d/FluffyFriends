Event.observe( window, 'load', function() {

  window.paddle = new Paddle('yukyuk');
  
  window.gameScreen = new GameScreen( 'canvas', [ window.paddle, new Soot('soot1') ] );
  window.gameScreen.paddle = window.paddle;
  window.gameconsole = new Console(window.gameScreen);
  gameconsole.start();
  window.game = new Sprite(); game.id="canvas"; game.node=$("canvas");
} );


var Soot = Class.create( Sprite, { 
  initialize: function( id ) { 
    this.id = id;
    this.node = $(id);
    this.speed = 5;
    this.friction = 0.5;
    this.velocity = 0;
    
    this.x = 0;
    this.y = 100;

    this.setX( this.x );
    this.setY( this.y );
    
    this.resetCoefficents();
  }
  
  ,resetCoefficents: function() { 
    this.b = 100 * Math.random();
    this.a = Math.random() / 10;
    
  }
  
  ,tick : function() {

    this.x += 2;
    this.setX( this.x );
    
    this.y = this.a * (this.x * this.x ) + this.b; //Math.sqrt( 4 * a * this.x ) + b;
    
    if( this.y > 500 - this.b )
    {
      this.x = 0;
      this.resetCoefficents();
    }

    this.setY( this.y );
  }
  
} );



 
var GameScreen = Class.create( Screen, {
  keyDown : function (e) {
    switch (e.keyCode) {
    case Event.KEY_LEFT:
        paddle.velocity = -paddle.speed;
        break;
    case Event.KEY_RIGHT:
        paddle.velocity = +paddle.speed;
        break;
    case 32:  // space
      paddle.node.addClassName('open');
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
        if( paddle.node.hasClassName('open') )
          paddle.node.removeClassName('open');
        }, 100 );
      break; 
    }
  },
  
  tick : function() {
    var i = this.objects.length;
    while( i-- )
    {
      this.objects[ i ].tick();
    }
  }

});  