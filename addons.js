$(document).ready(function(){
   $('.carousel').carousel({
       interval: 7000 // 3 sec
   });




});

(function () {
  var options = {
      facebook: "100006788590901", // Facebook page ID
      whatsapp: "+249991624313", // WhatsApp number
      call_to_action: "", // Call to action
      button_color: "#E74339", // Color of button
      position: "right", // Position may be 'right' or 'left'
      order: "facebook,whatsapp", // Order of buttons
      pre_filled_message: "", // WhatsApp pre-filled message
  };
  var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
  var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
  s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
  var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 7000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 



