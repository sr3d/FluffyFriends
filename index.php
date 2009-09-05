<html>
<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <title>YukYuk</title>

<!-- 1)  JS Starts here -->
<script type="text/javascript" charset="utf-8">
if( typeof console == 'undefined') { console = { log: function(msg) { ; } } };
DEBUG_COLLISION = !true;
</script>

<script type="text/javascript" charset="utf-8" src='http://ajax.googleapis.com/ajax/libs/prototype/1.6.0.3/prototype.js'></script>
<!--<script type="text/javascript" charset="utf-8" src='javascripts/prototype.js'></script>-->
<script type="text/javascript" charset="utf-8" src='javascripts/utilities.js'></script>
<script type="text/javascript" charset="utf-8" src='javascripts/sprite.base.js'></script>
<script type="text/javascript" charset="utf-8" src='javascripts/sprite.volcano.js'></script>
<script type="text/javascript" charset="utf-8" src='javascripts/sprite.critter.js'></script>
<script type="text/javascript" charset="utf-8" src='javascripts/sprite.yukyuk.js'></script>

<script type="text/javascript" charset="utf-8" src='javascripts/sprite.wave.js'></script>
<script type="text/javascript" charset="utf-8" src='javascripts/sprite.cloud.js'></script>

<script type="text/javascript" charset="utf-8" src='javascripts/physics.collision.js'></script>

<script type="text/javascript" charset="utf-8" src='javascripts/game.console.js'></script>
<script type="text/javascript" charset="utf-8" src='javascripts/game.screen.js'></script>

<script type="text/javascript" charset="utf-8" src='javascripts/game.main.js'></script>

<script type="text/javascript" charset="utf-8">

/* preload */
[ 'images/ani_critter_2.gif', 'images/ani_critter_3.gif', 'images/ani_critter_4.gif'
  ,'images/volcano.gif', 'images/volcano_ani.gif' 
].each( function( item ) { 
  var img = new Image(1,1);
  img.src = item;
} );

</script>

<!-- JS Stops Here-->

<!-- 2)  Game Stylesheets -->
<link rel="stylesheet" type="text/css" media="all" href="css/styles.css" />

</head>

<body >
  
  <div id="masthead">
    <!-- 3) navigation can go in here-->
  </div><!-- #masthead -->
  
  <!-- The game -->
  <div id='canvas_wrapper'>
  	<div id="canvas">
  	  <div id="clouds">
  	    <div id="cloud1" class='cloud' style='left: 40px;'></div>
  	    <div id="cloud2" class='cloud' style='left: 680px;'></div>
  	    <div id="tagline" class='tagline'></div>
  	    <div id="tagline_buy" class='tagline' style='display: none;'>
  	      <div><a href="http://www.ohnodoom.bigcartel.com/product/ohno-dooms-fluffyyukyuk-chompin-plush-toy" target='_blank'><span>buy yukyuk</span></a></div>
  	    </div>
  	    <div id="cloud3" class='cloud' style='left: 523px;'></div>
  	    <div id="cloud4" class='cloud' style='left: 312px;'></div>
  	    <div id="cloud5" class='cloud' style='left: 478px;'></div>
  	  </div>
  	  
      <div id="yukyuk">
        <div id='score_bubble_wrapper'>
          <div id='score_bubble'><div id='score'>0</div></div>
        </div>
        <div id='mouth'></div>
      </div>

      <div id='bubbles'></div>
      <div id="wave_mid"></div>
  
      <div id='volcano'></div>
      <div id='flies'></div>
      <div id="wave_front"></div>
      
    </div><!-- #canvas -->
  </div><!-- #canvas_wrapper -->


  <div id="content_wrapper">
    <div id='content'>
      content will go here
    </div><!-- #content -->
  </div><!-- #content_wrapper -->

  <!-- Just debugging stuff 
  <div style='margin: 0 auto; width: 700px;font-size: 24px; color: #DFDFDF; font-weight: bold; text-align: right;padding-right: 20px; '>
		left | right | space
		<br/>
		<input type='checkbox' onclick='window.DEBUG_COLLISION = !window.DEBUG_COLLISION;$$(".bb").invoke("hide")'/> Debug
  </div>
  --> 
  
  
</body>

</html>
