Event.observe( window, 'load', function() {
  
  var yukyuk = new YukYuk('yukyuk');

  var screen = new GameScreen( 'canvas', yukyuk );


  var volcano = new Volcano();  
  screen.registerObject( volcano );
  
  var gameConsole = new Console( screen );
  gameConsole.start();
    
  window.yukyuk       = yukyuk;
  window.gameConsole  = gameConsole;
  window.gameScreen   = screen;

} );