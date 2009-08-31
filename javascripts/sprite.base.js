var Sprite = Class.create( {
  initialize : function(id) {
    this.id = id;
  }
  ,getX : function() { return this.node.offsetLeft; }
  ,setX : function(x) { this.node.style.left = x + 'px';}
  ,getY : function () { return this.node.offsetTop; }
  ,setY : function(y) { this.node.style.top = y + 'px';}
  ,moveBy: function(dx, dy) { this.setX(this.getX()+dx); this.setY(this.getY()+dy); }
  ,getW : function() { return this.node.offsetWidth; }
  ,getH : function() { return this.node.offsetHeight; }
} );