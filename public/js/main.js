$(function() {

  


  		  //var socket = io();
  var socket = io("http://localhost:3001/ns2");

    console.dir("socket is ", socket);

  	socket.on('new title', function (data) {
      console.log("data title is " + data.title);
      console.log("sending data through console");
    		addData(data);
 		 });

  		  function addData(data){
          console.log("apending data " + data.tags);
            console.log("apending data " + data.title);
              console.log("apending data " + data.body);

               var x = document.querySelector("#id1");

              var template = '<div class="article"><h3><a>{{title}}</a></h3><br><div>{{body}}</div></div><br><div>{{tag}}</div></div>';

              template = template.replace('{{title}}', data.title);
              template = template.replace('{{body}}', data.body);
              template = template.replace('{{tag}}', data.tags);

              x.innerHTML += template;






  		  }

  

});