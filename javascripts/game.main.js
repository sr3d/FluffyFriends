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
  
  
  /* Atmospheric Animation */
  new Wave( 'wave_front' , {} );  
  new Wave( 'wave_mid' , {
    speed: 1
    ,tickSpeed: 33
  } );  
  new Wave( 'bubbles' , { speed: 0.5, tickSpeed: 50 } );
  
  /* Cloud */
  new Cloud( 'cloud1' , { speed: 1, tickSpeed: 70 } );
  new Cloud( 'cloud2' , { speed: 1, tickSpeed: 90 } );
  new Cloud( 'cloud3' , { speed: 2, tickSpeed: 100 } );
  new Cloud( 'cloud4' , { speed: 1.5, tickSpeed: 60 } );
  new Cloud( 'cloud5' , { speed: 1, tickSpeed: 67 } );

} );