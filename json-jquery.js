$(document).ready(function() {

	//load data after button is clicked
	$(".button").on("click", function() {

		//setInterval(function() {
			//ajax magic
			$.ajax({
				type: "GET",
				url: "http://www.reneinla.com/data.json",
				dataType: "json",
				beforeSend: function() {
					console.log('before ajax request starts!');
				},
				xhrFields: {
					withCredentials: false
				},
				crossDomain: true, // enable this
				success: function(data) {

					//data downloaded so we call parseJSON function
					//and pass downloaded data
					var json = data;
					//now json variable contains data in JSON format
					//lets display a few items
					//$('#here').html("my Name: " + json.quote);
					//alert(json.quote);
					$.each(json, function(idx, obj) {
						alert(obj.tagName);
					});
				}
			});
		//});
	});
});
		