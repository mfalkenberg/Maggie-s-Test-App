var projectId = "582161658715865";
var personalToken = "Bearer 0/167e4605531a4b342010a8304f445612"; // for sample code only


$(document).ready(function() {
	$.ajax({
      	url: "https://app.asana.com/api/1.0/projects/" + projectId,
      	method: "GET",
      	beforeSend: function(xhr){xhr.setRequestHeader('Authorization', personalToken);},
    	}).done(function(response) {
    		var data = response.data.name;
    		$("#task").text(data); 
    	});

    $.ajax({
      	url: "https://app.asana.com/api/1.0/projects/" + projectId + "/tasks",
      	method: "GET",
      	beforeSend: function(xhr){xhr.setRequestHeader('Authorization', personalToken);},
    	}).done(function(response) {
    		var data = response.data;

    		// iterate through the results and create a div with a hide button
    		// right next to it
    		for (var i = 0; i < data.length; i++) {
    			var button = $("<button></button>").text("Hide").click(function() {
    				// the button's parent is the div
    				$(this).parent().hide();
    			});
    			var taskUrl = "https://app.asana.com/0/"+projectId+"/"+data[i].id;
    			$("#task-name").append($("<div/>").append("<a href='"+taskUrl+"'>" + data[i].name + "</a> ").append(button));
    		}
    	});
});
