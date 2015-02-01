
			$(document).ready(function() {

				//load data after button is clicked
				$(".button").on("click", function() {


					//ajax magic
					$.ajax({
						type: "GET",
						url: "http://www.reneinla.com/data.json",
						dataType: "json",
						xhrFields: {
							withCredentials: false
						},
						headers:{

						},
						crossDomain: true, // enable this
						success: function(data) {

							//data downloaded so we call parseJSON function
							//and pass downloaded data
							var json = data;
							//now json variable contains data in JSON format
							//lets display a few items
							$('#here').html("First Name: " + json.firstName + "<br />Last Name: " + json.lastName);
						}
					});
				});
			});
		