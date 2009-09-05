<html>
<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <title>YukYuk</title>

<script type="text/javascript" charset="utf-8">
if( typeof console == 'undefined') { console = { log: function(msg) { ; } } };
DEBUG_COLLISION = !true;
</script>
<!--
<script type="text/javascript" charset="utf-8" src='http://ajax.googleapis.com/ajax/libs/prototype/1.6.0.3/prototype.js'></script>-->
<script type="text/javascript" charset="utf-8" src='javascripts/prototype.js'></script>
<script type="text/javascript" charset="utf-8" src='javascripts/utilities.js'></script>
<script type="text/javascript" charset="utf-8" src='javascripts/sprite.base.js'></script>
<script type="text/javascript" charset="utf-8" src='javascripts/sprite.volcano.js'></script>
<script type="text/javascript" charset="utf-8" src='javascripts/sprite.critter.js'></script>
<script type="text/javascript" charset="utf-8" src='javascripts/sprite.yukyuk.js'></script>

<script type="text/javascript" charset="utf-8" src='javascripts/sprite.wave.js'></script>

<script type="text/javascript" charset="utf-8" src='javascripts/physics.collision.js'></script>

<script type="text/javascript" charset="utf-8" src='javascripts/game.console.js'></script>
<script type="text/javascript" charset="utf-8" src='javascripts/game.screen.js'></script>

<script type="text/javascript" charset="utf-8" src='javascripts/game.main.js'></script>

<script type="text/javascript" charset="utf-8">
var paddle;
var gameconsole;
var game;

/* preload */
[ 'images/ani_critter_2.gif', 'images/ani_critter_3.gif', 'images/ani_critter_4.gif'
  ,'images/volcano.gif', 'images/volcano_ani.gif' 
].each( function( item ) { 
  var img = new Image(1,1);
  img.src = item;
} );



</script>

<link rel="stylesheet" type="text/css" media="all" href="css/styles.css" />

</head>

<body id="index" onload="">
  
  <div style='margin: 0 auto; width: 700px;font-size: 48px;; font-weight: bold; text-align: right;padding-right: 20px; '>
    YukYuk
  </div>  
  
	<div id="canvas">
		<div id='score'>0</div>
		
    <div id="yukyuk"></div>
    <div id="wave_mid"></div>

    <div id='volcano'></div>
    
    <div id="wave_front"></div>
    
  </div>
  
  <div style='margin: 0 auto; width: 700px;font-size: 24px; color: #DFDFDF; font-weight: bold; text-align: right;padding-right: 20px; '>
		left | right | space
		<br/>
		<input type='checkbox' onclick='window.DEBUG_COLLISION = !window.DEBUG_COLLISION;$$(".bb").invoke("hide")'/> Debug
  </div>
  
</body>

</html>
