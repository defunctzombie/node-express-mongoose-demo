$(function() {

  


  		  var socket = io();
 

  	socket.on('new title', function (data) {
      console.log("data is " + data.message);
      console.log("sending data through console");
    		addData(data.message);
 		 });

  		  function addData(data){
          console.log("apending data" + data);
         // console.log($id1);
  		  	//${"id1"}.data(data);
       // var x = document.createElement( data);
      //  id1.addData(x);
      var x = document.querySelector("#id1")

      x.innerHTML = x.innerHTML + data;
       // x.append("<p>" + data + "</p>");



  		  }

  

});