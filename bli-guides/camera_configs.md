---
title:  Camera Configuration
layout: pagetoc
---

## HTTP cameras Resource path examples

Below are some examples of cameras and their corresponding configuration. Fill this [form](https://forms.gle/gmnRyVcy7sTrGjGy7) to add your configuration to the table and help others to configure their own cameras!


<table class="table">
</table>


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
	}

	function generateTable(table, data) {
	  for (let element of data) {
	    let row = table.insertRow();
	    for (key in element) {
	      let cell = row.insertCell();
	      let text = document.createTextNode(element[key]);
	      cell.appendChild(text);
	    }
	  }
	}
</script>

