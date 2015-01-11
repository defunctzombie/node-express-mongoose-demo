$(function() {


	  var $window = $(window);
	    var $messages = $('.messages'); // Messages area
  var $inputMessage = $('.inputMessage'); // Input message input box
  		var $form-control = $('.form-control');
  		var $btn-primary = $('.btn btn-primary');
  		var $id1 = $('#id1');


  		  var newMessage;

  var connected = false;

  		  var socket = io();
  		

  		   socket.on('new title', function (data) {

    		addData(data);
 		 });

  		  function addData(data){
  		  	id1.append(data);

  		  }

  

}