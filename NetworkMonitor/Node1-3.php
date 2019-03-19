<?php


echo "<DOCTYPE <!DOCTYPE html>\n";
echo "<html  class=\"nodeHtml\">\n";
echo "<head>\n";
echo "    <link href=\"https://fonts.googleapis.com/css?family=Noto+Sans\" rel=\"stylesheet\">\n";
echo "    <meta charset=\"utf-8\" />\n";
echo "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n";
echo "    <title>Bench Status</title>\n";
echo "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n";
echo "    <!--<meta http-equiv=\"refresh\" content=\"10\">-->\n";
echo "    <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"css/nodes.css\" />\n";
echo "    <script src=\"js/nodes.js\"></script>\n";
echo "</head>\n";
echo "<body  class=\"nodeBody\" onload=\"setInterval('getCurrentTime()', 1000);\">\n";
echo "    <header onload=\"reloadData()\">\n";
echo "        <h1><a class=\"nodeTitle\">STATIONS: 1 - 2</a><a id=\"time\"></a></h1>\n";
echo "    </header>\n";
include ('css/nodes.css');
echo "<div class=\"nodeContainer\">";
	$file = fopen("Status.txt", "r") or die("<td>Unable to open file!</td>");


		while (!feof($file)){   
			$data = fgets($file);
			list($customer, $stationName, $ipAddress, $statusDate, $statusTime) = explode(",", $data);

			if($stationName == "RACK 1-3 LINE B11") {echo "<div class=\"stationContainer\"><p class=\"stationName\">$stationName<p class=\"customerName\">$customer</p></div>\n";}
			if($stationName == "RACK 4-5 LINE B12") {echo "<div class=\"stationContainer\"><p class=\"stationName\">$stationName<p class=\"customerName\">$customer</p></div>\n";}
			if($stationName == "RACK 6-7 LINE B10") {echo "<div class=\"stationContainer\"><p class=\"stationName\">$stationName<p class=\"customerName\">$customer</p></div>\n";}
			}


	fclose($file);


echo "</div>";
echo "</body>";

echo "</html>";
?>