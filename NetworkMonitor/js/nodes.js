function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("statusTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


function getCurrentTime()
{
	var myDate = new Date();
	var mySecs = myDate.getSeconds();
	var curHour = myDate.getHours();
	var curMin = myDate.getMinutes();
	var suffix = "AM";

	if(mySecs < 10)
		mySecs = "0" + mySecs;

	if(curMin < 10)
		curMin = "0" + curMin;

	if(curHour == 12 && curMin >= 1)
	{
		suffix = "PM";
	}
	if(curHour == 24 && curMin >= 1)
	{
		curHour-= 12;
		suffix = "AM";
	}
	if(curHour > 12)
	{
		curHour-= 12;
		suffix = "PM";
	}

	var time = curHour + ":" + curMin + ":" + mySecs + " " + suffix;
	document.getElementById('time').innerHTML=(time);


    if(time == curHour + ":" + curMin + ":" + "30" + " " + suffix) {//Change this to whatever time you want
      
      /** /http://192.168.2.68/networkmonitor/images/network.png **/
      
       /** location.reload();*/ 
       var img = new Image();
       var url = "images/network.png";
              
              img.src = url;

              img.onload = function()
              {
                // If the server is up, do this.
                location.reload();
              }

              img.onerror = function()
              {
                // If the server is down, do that.
              }
        
    
  }
} 



function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("statusTable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc"; 
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++; 
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }


