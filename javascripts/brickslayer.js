// Paddle ////////////////////////////////////////
var Paddle = Class.create();
Paddle.prototype = Object.extend(new Sprite(), {

  initialize: function(id) {
    this.id = id;
    this.node = $(id);
    this.speed = 10;
    this.friction = 0;
    this.velocity = 0;
  },
    
  center: function () {
    this.setX(game.getW()/2 - this.getW()/2);
    this.velocity = 0;
  },
 
  tick: function() {
    if (this.getX() + this.velocity <= -50)
        this.setX( -50 );
    else if (this.getX() + this.velocity + this.getW() >= game.getW() + 20 ) 
        this.setX(game.getW() - this.getW() + 20); 
    else 
        this.moveBy(this.velocity, 0); 
  }
});