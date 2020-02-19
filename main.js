SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
//song1
  SC.stream('/tracks/18626108',function(sound){
    $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
//song2
SC.stream('/tracks/353766911',function(sound){
  $('#start2').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop2').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
});
//song3
SC.stream('/tracks/72513574',function(sound){
  $('#start3').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop3').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
});
//song4
SC.stream('/tracks/66061745',function(sound){
  $('#start4').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop4').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
});
//song5
  SC.stream('/tracks/76185018',function(sound){
    $('#start5').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop5').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
//song6
SC.stream('/tracks/76185018',function(sound){
  $('#start6').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop6').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
});
//song7
SC.stream('/tracks/652012811',function(sound){
  $('#start7').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop7').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
});
//song8
SC.stream('/tracks/717303730',function(sound){
  $('#start8').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop8').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
});
//song9
  SC.stream('/playlists/667147419',function(sound){
    $('#start9').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop9').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
//song10
SC.stream('/tracks/353766911',function(sound){
  $('#start10').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop10').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
});
//song11
SC.stream('/tracks/135307692',function(sound){
  $('#start11').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop11').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
});
//song12
SC.stream('/tracks/62899723',function(sound){
  $('#start12').click(function(e) {
         e.preventDefault();
         sound.start();
       });
  $('#stop12').click(function(e) {
         e.preventDefault();
         sound.stop();
      });
});


});
