---
title:  Camera Configuration
layout: pagetoc
---

## HTTP cameras Resource path examples

Below are some examples of cameras and their corresponding configuration. Fill this [form](https://forms.gle/gmnRyVcy7sTrGjGy7) to add your configuration to the table and help others to configure their own cameras!

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<table class="table">
</table>

<script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js"></script>

<script type="text/javascript">
    var apiUrl = 'https://script.google.com/macros/s/AKfycbxcPLbjdRw8CdAyu_RBzAU3O8Mjx_Yd2J3enCykGcv1GmRu5JpxohSsDMza7BcxmLkPmg/exec';
    fetch(apiUrl).then(response => {
      return response.json();
    }).then(data => {
		let table = document.querySelector("table");
		let datos = Object.keys(data[0]);
		generateTableHead(table, datos);
		generateTable(table, data);

    }).catch(err => {
      console.log('ERROR:', err)
    });

    function generateTableHead(table, data) {
	 	let thead = table.createTHead();
	 	let row = thead.insertRow();
	  	for (let key of data) {
		  	if (key != "Setup Comments") {
		  		if (key == "Raw Config.") {
		  			let th = document.createElement("th");
		  			th.setAttribute('style', "text-align:center")
	    			let text = document.createTextNode("Includes");
	    			th.appendChild(text);
	    			row.appendChild(th);
		  		}
		    	let th = document.createElement("th");
		    	let text = document.createTextNode(key);
		    	th.appendChild(text);
		    	row.appendChild(th);
		  	}
	    }
	}

	function generateTable(table, data) {
		let raw = 0
		let message = 0
		for (let element of data) {
	    	let row = table.insertRow();
	    	for (key in element) {
	    		if ((key == "Name") && (element[key] == "")) {
	    			element[key] = "Community"
	    		}
	    		if ((key != "Raw Config.") && (key != "Setup Comments")) {
	    			let cell = row.insertCell();
	    			cell.setAttribute('style', "text-align:center")
	      			let text = document.createTextNode(element[key]);
	      			cell.appendChild(text);
	      		} else if (key == "Raw Config.") {
	      			raw = element[key]
	      		} else if (key == "Setup Comments") {
	      			message = element[key]
	      		}
	    	}
	    	new ClipboardJS('.btn');

	    	let tick_cell = row.insertCell();
	      	let list = document.createElement("ul");
			CreateListItems(list,raw);

	       	tick_cell.appendChild(list);

	    	let button_cell = row.insertCell();
	      	let button = document.createElement("BUTTON");
			button.setAttribute('data-clipboard-text', raw)
			button.setAttribute('class', "btn")
			var onclick = "SetupComment(\""+message+"\")"
			console.log(onclick)
			button.setAttribute('onclick', onclick)
			var title = "Copy Raw Configuration to Clipboard"
			if (message != "") {
				title = title + "\nSetup Comments: \n" + message
			}
			button.setAttribute('title',title)
			var icon = document.createElement("i");
			icon.classList.add("fa", "fa-clipboard");
			button.appendChild(icon)
			button_cell.setAttribute('style', "text-align:center")
	      	button_cell.appendChild(button);
	  	}
	}

	function SetupComment(msg) {
		if (msg != "") {
			alert("Setup Comments: \n" + msg);
		} 
	}


	var TypesConverter = {highResolutionMjpegPath:"MJPEG", lowResolutionMjpegPath:"MJPEG", highResolutionSnapshotPath:"JPEG", lowResolutionSnapshotPath:"JPEG", rtspPath:"RTSP", panLeftPath: "PAN1",panRightPath: "PAN2", panStopPath: "PAN3", presetPath: "PAN4", tiltDownPath: "PAN5", tiltStopPath: "PAN6", tiltUpPath: "PAN7", zoomInPath: "ZOOM1", zoomOutPath: "ZOOM2", zoomStopPath: "ZOOM3"}

	var rawEditionVariables=[ "highResolutionMjpegPath", "highResolutionSnapshotPath", "lowResolutionMjpegPath", "lowResolutionSnapshotPath", "panLeftPath", "panRightPath", "panStopPath", "presetPath", "rtspPath", "tiltDownPath", "tiltStopPath", "tiltUpPath", "zoomInPath", "zoomOutPath", "zoomStopPath" ];

  	var syncRawToModel = function(rawContent) {
  		var RawConfig = {};
    	var lines = rawContent.split('\n');
    	lines.forEach(function( l ) {
      		var tmp = l.split(':');
      		var vname = (tmp.length >0 ? tmp[0] : '');
      		tmp.shift();
      		var vval  =  tmp.join(':').replace(/^\ */,'');
      		if (vname.length > 0 && rawEditionVariables.indexOf(vname) >= 0) {
      			if (vval != "") {
      				RawConfig[TypesConverter[vname]] = vval;
      			}
      		}
    	});
    	return RawConfig
  	};

	var CameraTypes = ["JPEG", "MJPEG", "RTSP","PAN","ZOOM"];

	function CreateListItems(list, rawContent) {
		RawConfig = syncRawToModel(rawContent);
		PAN = RawConfig["PAN1"] && RawConfig["PAN2"] && RawConfig["PAN3"] && RawConfig["PAN4"] && RawConfig["PAN5"] && RawConfig["PAN6"] && RawConfig["PAN7"];
		ZOOM = RawConfig["ZOOM1"] && RawConfig["ZOOM2"] && RawConfig["ZOOM3"];
    	for (let type of CameraTypes) {
    		if ((typeof RawConfig[type] !== 'undefined') || ((type == "PAN") && (typeof PAN !== 'undefined')) || ((type == "ZOOM") && (typeof ZOOM !== "undefined"))) {
    			list.setAttribute('class', "fa-ul")
		      	let list_item = document.createElement("li");
		      	var bullet = document.createElement("i");
	  			bullet.classList.add("fa-li","fa", "fa-check");
	  			list_item.innerHTML = type
	  			list_item.appendChild(bullet)
	  			list.appendChild(list_item)
	  		}
      	}
	}

</script>