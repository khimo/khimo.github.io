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
	    	let th = document.createElement("th");
	    	let text = document.createTextNode(key);
	    	th.appendChild(text);
	    	row.appendChild(th);
	  	}
  		let th = document.createElement("th");
    	let text = document.createTextNode("Includes");
    	th.appendChild(text);
    	row.appendChild(th);
	}

	function generateTable(table, data) {
		let raw = 0;
		for (let element of data) {
	    	let row = table.insertRow();
	    	for (key in element) {
	    		if (key != "Timestamp" && key != "RawConfig") {
	    			let cell = row.insertCell();
	      			let text = document.createTextNode(element[key]);
	      			cell.appendChild(text);
	      		} else if (key == "RawConfig") {
	      			raw = element[key]
	      		}
	    	}
	    	new ClipboardJS('.btn');

	    	let button_cell = row.insertCell();
	      	let button = document.createElement("BUTTON");
			button.setAttribute('data-clipboard-text', raw)
			button.setAttribute('class', "btn")
			var icon = document.createElement("i");
			icon.classList.add("fa", "fa-clipboard");
			button.appendChild(icon)
			button_cell.setAttribute('style', "text-align:center")
	      	button_cell.appendChild(button);

	      	let tick_cell = row.insertCell();
	      	let list = document.createElement("ul");
			CreateListItems(list,raw);

	       	tick_cell.appendChild(list);
	  	}
	}


	var TypesConverter = {highResolutionMjpegPath:"MJPEG", lowResolutionMjpegPath:"MJPEG", highResolutionSnapshotPath:"JPEG", lowResolutionSnapshotPath:"JPEG", rtspPath:"RTSP"}
	var rawEditionVariables=[ "highResolutionMjpegPath", "highResolutionSnapshotPath", "homePath", "lowResolutionMjpegPath", "lowResolutionSnapshotPath", "panLeftPath", "panRightPath", "panStopPath", "presetPath", "rtspPath", "tiltDownPath", "tiltStopPath", "tiltUpPath", "zoomInPath", "zoomOutPath", "zoomStopPath" ];
	var someRawEditionVaribales = ["highResolutionMjpegPath", "lowResolutionMjpegPath", "highResolutionSnapshotPath","lowResolutionSnapshotPath","rtspPath"]
  //keep synchronized raw <-> model
  	var syncRawToModel = function(rawContent) {
  		var RawConfig = {};
    	var lines = rawContent.split('\n');
    	lines.forEach(function( l ) {
      		var tmp = l.split(':');
      		var vname = (tmp.length >0 ? tmp[0] : '');
      		tmp.shift();
      		var vval  =  tmp.join(':').replace(/^\ */,'');

      		if (vname.length > 0 && someRawEditionVaribales.indexOf(vname) >= 0) {
          		RawConfig[TypesConverter[vname]] = vval;
      		}
    	});
    	return RawConfig
  	};

	var CameraTypes = ["JPEG", "MJPEG", "RTSP"];

	function CreateListItems(list, rawContent) {
		RawConfig = syncRawToModel(rawContent);
    	for (let type of CameraTypes) {
    		if (typeof RawConfig[type] !== 'undefined') {
		      	let list_item = document.createElement("li");
		      	list_item.innerHTML = type
	  			icon = document.createElement("i");
	  			icon.classList.add("fa", "fa-check");
	  			list_item.appendChild(icon)
	  			list.appendChild(list_item)
	  		}
      	}
	}

</script>