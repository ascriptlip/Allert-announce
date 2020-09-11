	
$(function () {	
	function setDsiplay(){
		$("#container").hide();	
	}	
	setDsiplay();

		
		window.addEventListener('message', (event) => {
			var item = event.data;
			var tempo1;
			

			document.onkeyup = function (data) {
				if (data.which == 27) { // Escape key
					$.post('http://Allert/exit', JSON.stringify({}));
					return
				}
			};
			if (event.data.spegni == true) {
				document.getElementById("annunci1").style.display = "none";
				document.getElementById("allert1").style.display = "none";
				document.getElementById("pannunci").style.display = "none";
				document.getElementById("pallert").style.display = "none";
				document.getElementById("menu").style.display = "none";
				setTimeout(() => {document.getElementById("container").style.display = "none";}, 10000);
			}
			
			if (event.data.pippo == true) {
				setTimeout(() => {document.getElementById("allert").style.bottom = "82%"; }, 500);
				setTimeout(() => {document.getElementById("scritta").style.bottom = "84%";}, 500);
				setTimeout(() => {document.getElementById("scritta").style.bottom = "102%";}, 9000);
				setTimeout(() => {document.getElementById("allert").style.bottom = "100%";}, 9000);
			}        
			if (event.data.on == true) {
				setTimeout(() => {document.getElementById("annunci").style.bottom = "82%"; }, 500);
				setTimeout(() => {document.getElementById("scritta1").style.bottom = "82%";}, 500);
				setTimeout(() => {document.getElementById("scritta1").style.bottom = "102%";}, 9000);
				setTimeout(() => {document.getElementById("annunci").style.bottom = "100%";}, 9000);
			}        
				
				if (item.display === true ) {
					
					
					$("#container").show();
					$("#menu").show();
					$("#pallert").show();
					$("#pannunci").show();
					$("#allert1").hide();
					$("#annunci1").hide();
					
					$("#pallert").click(function () {
						$("#allert1").show();
						$("#cop").hide();
						document.getElementById("annunci1").style.display = "none";
						document.getElementById("numero").value = "";
						tempo1 = "";
						
					})
					$("#pannunci").click(function () {
						$("#annunci1").show();
						document.getElementById("scrittaa").value = "";
						$("#allert1").hide();
						
					})
					$("#copertura").click(function () {
						$("#copertur2").hide();
						$("#copertur1").hide();
						$("#copertura2").show();
						$("#copertura1").show();
						$("#cop").show();
					})
					$("#copertura1").click(function () {	
						document.getElementById("copertur1").style.display = "block";
    					document.getElementById("copertura2").style.display = "none";
    					document.getElementById("copertura1").style.display = "none";
						tempo1 = "MINUTES";
						
					})
					$("#copertura2").click(function () {	
						document.getElementById("copertur2").style.display = "block";
   						document.getElementById("copertura2").style.display = "none";
   					 	document.getElementById("copertura1").style.display = "none";										
						tempo1 = "HOURS";
					})
					document.getElementById("pesegui").onclick = function(){
						$.post('http://Allert/viaa1', JSON.stringify({}));
						$.post('http://Allert/exit', JSON.stringify({}));
						document.getElementById("scritta1").innerHTML = document.getElementById("scrittaa").value;
					};
					
					document.getElementById("pesegui1").onclick = function(){
						$.post('http://Allert/exit', JSON.stringify({}));
						$.post('http://Allert/viaa', JSON.stringify({}));
						if (tempo1 == "HOURS" ){
							document.getElementById("scritta").innerText = "IN " /* changeable */+ document.getElementById("numero").value /* this is the inserted time not to touch*/+" " +tempo1+ " THERE WILL BE A RESTART"; /* changeable */
							document.getElementById("scritta").style.left = "663";
							} else if (tempo1 == "MINUTES"){
							document.getElementById("scritta").innerText = "IN " /* changeable */+ document.getElementById("numero").value +/* this is the inserted time not to touch*/" " +tempo1+ " THERE WILL BE A RESTART";/* changeable */
							document.getElementById("scritta").style.left = "655";
							document.getElementById("scritta").style.fontSize = "155%";
							}						
																																						
					};
					     
				} 	
                
	});
})
