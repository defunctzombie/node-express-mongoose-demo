$(function() {

  


  		  var socket = io();
 

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



         // console.log($id1);
  		  	//${"id1"}.data(data);
       // var x = document.createElement( data);
      //  id1.addData(x);
      //var x = document.querySelector("#id1")

      /*x.innerHTML = x.innerHTML + data.tags;

      x.innerHTML = x.innerHTML + data.body;

      x.innerHTML = x.innerHTML + data.title;
      */


   /*   document.querySelector("#id1").prepend("this");
      document.querySelector("#id1").prepend(data.body);
      document.querySelector("#id1").prepend(data.title);
      */


       // x.append("<p>" + data + "</p>");



  		  }

  

});