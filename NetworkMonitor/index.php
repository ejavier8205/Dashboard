<?php
echo "<DOCTYPE <!DOCTYPE html>\n";
echo "<html>\n";
echo "<head>\n";
echo "    <link href=\"https://fonts.googleapis.com/css?family=Noto+Sans\" rel=\"stylesheet\">\n";
echo "    <meta charset=\"utf-8\" />\n";
echo "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n";
echo "    <title>Bench Status</title>\n";
echo "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n";
echo "    <!--<meta http-equiv=\"refresh\" content=\"10\">-->\n";
echo "    <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"css/main.css\" />\n";
echo "    <script src=\"js/main.js\"></script>\n";
echo "    <script src=\"js/jquery.min.js\"></script>\n";

echo "</head>\n";
echo "<body onload=\"setInterval('getCurrentTime()', 1000);\">\n";
echo "    <header onload=\"reloadData()\">\n";
echo "        <h1><a class=\"Production\">Production</a> Stations Connection Status<input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for customer...\" title=\"Type in a name\"><a id=\"time\"></a></h1>\n";
echo "    </header>\n";



echo "<table id=\"statusTable\" class=\"dataTable\">\n";

echo "        <thead>\n";
echo "        <tr>\n";
echo "            <th class=\"CustomerHeader\" onclick=\"sortTable(0)\">Customer</th>\n";
echo "            <th Class=\"StationHeader\" onclick=\"sortTable(1)\">Station ID</th>\n";
echo "            <th Class=\"IPHeader\">Customer IP</th>\n";
echo "            <th class=\"ConnectionHeader\">Last connection</th>\n";
echo "            <th class=\"TimeHeader\">Time</th>\n";
echo "        </tr>\n";
echo "    </thead>";
echo "        <tbody>\n";


	$file = fopen("Status.txt", "r") or die("<td>Unable to open file!</td>");


		while (!feof($file)){   
			$data = fgets($file);
			list($customer, $StationName, $ipAddress, $statusDate, $statusTime) = explode(",", $data);

			$customerID = "None";

			if($customer == "Prince William Co.") {$customerID = "PWCS";}
			if($customer == "Ghost") {$customerID = "GHOST";}
			if($customer == "Baltimore Co.") {$customerID = "BOEBCPS";}
			if($customer == "Anne Arundel Co.") {$customerID = "AACPS";}
			if($customer == "Loudoun Co.") {$customerID = "LCPS";}
			if($customer == "Fauquier Co.") {$customerID = "FaCPS";}
			if($customer == "Clientele") {$customerID = "DALY";}
			if($customer == "Not Connected") {$customerID = "NOTCONNECTED";}

			echo "<tr Id=\"Row\" class=\"tableRows\"><td id=\"$customerID\" class=\"customer\">$customer</td><td class=\"station\">$StationName</td><td class=\"ip\">$ipAddress</td><td class=\"date\">$statusDate</td><td class=\"time\">$statusTime</td></tr>\n";
		}

	
	fclose($file);
	



echo "    </tbody>\n";


echo "</table>\n";




echo "    <div class=\"sidepanel\">\n";
echo "\n";
echo "        <h2 class=\"sidePanelTitle\">Ghost imaging network</h2>\n";
echo "\n";
echo "        <div class=\"sidePanelContainer\">\n";
echo "            <p class=\"sidePanelData\">Charles Co.</p>\n";
echo "            <p class=\"sidePanelData\">Baltimore City</p>\n";
echo "            <p class=\"sidePanelData\">St. Johns</p>\n";
echo "            \n";
echo "        </div>\n";
echo "        <div class=\"imagecontainer\">\n";
echo "                <img src=\"images/network.png\" alt=\"NetworkIcon\">\n";
echo "        </div>\n";
echo "        \n";
echo "    </div>\n";
echo "    \n";
echo "</body>\n";
echo "\n";
echo "</html>";
?>