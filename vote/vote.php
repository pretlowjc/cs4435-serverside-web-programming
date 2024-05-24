<html>
	<head>
    	<title>Results of the Vote</title>
  	</head>
  	<body bgcolor="grey" text="#465775"> 
    	<?php 
     		# 1. Uncomment the following to see errors in PHP.
      		error_reporting(E_ALL);
      		ini_set('display_errors', 1);
      		# 2. see which figure the user selected and set
      		# variable $choice to the value associated with 
      		# the radio button selected
      		$choice = $_GET['choice'];
			# 3. open the file named vote.dat for reading and writing (fopen)
      		$fp = fopen ("vote.dat", "r+b");
			# 4. lock the file so nobody else can open it right now (flock)
      		flock ($fp, LOCK_EX);
			# 5. read first number in file and put it in $f22count (fgets)
			$f22count = (int) fgets($fp, 80);
			# 6. read second number and put it in $f35count (fgets)
      		$f35count = (int) fgets($fp, 80);
			# 7. read third number and put it in $j20count (fgets)
      		$j20count = (int) fgets($fp, 80);
			# 8. read fourth number and put it in $su57count (fgets)
			$su57count = (int) fgets($fp, 80);;
			# 8. increment the right variable (big if)
      		if ($choice == "f22") {
				$f22count = $f22count + 1;
			}
			else if ($choice == "f35") {
				$f35count = $f35count + 1;
			}
			else if ($choice == "j20") {
				$j20count = $j20count + 1;
			}
			else if ($choice == "su57") {
				$su57count	= $su57count + 1;
			}
			else {
				# if the user didn't vote, don't increment anything.
			}
			# 9. put the three numbers back in the file, one per line 
			#(fseek back to start, then fwrite)
			fseek ($fp, 0);
			fwrite ($fp, "$f22count\n$f35count\n$j20count\n$su57count\n");
      		# 10. unlock and close the file (flock, fclose)
      		flock ($fp, LOCK_UN);
			fclose ($fp);
			# 11. print the user's vote acknowledgement (print you voted for ...)
			if ($choice == "f22") {
				echo "<h2>You voted for the Lockheed Martin F-22 Raptor!</h2> \n";
			}
			else if ($choice == "f35") {
				echo "<h2>You voted for the Lockheed Martin F-35 Lightning II!</h2> \n";
			}
			else if ($choice = "j20") {
				echo "<h2>You voted for the Chengdu J-20 Mighty Dragon!</h2> \n";
			}
			else if ($choice = "su57") {
				echo "<h2>You voted for the Sukhoi Su-57 Felon</h2> \n";
			}
			else {
				echo "<h2>You didn't vote!</h2> \n";
			}
      		//End the php

    	?>
			<!-- print the vote counts in a table using HTML mixed with PHP. -->
			So far the votes are as follows:<br><br>
			<table>
				<tr>
					<td>Lockheed Martin F-22 Raptor</td><td><?php echo $f22count; ?></td>
				</tr>
				<tr>
					<td>Lockheed Martin F-35 Lightning II</td><td><?php echo $f35count; ?></td>
				</tr>
				<tr>
					<td>Chengdu J-20 Mighty Dragon</td><td><?php echo $j20count; ?></td>
				</tr>
				<tr>
					<td>Sukhoi Su-57 Felon</td><td><?php echo $su57count; ?></td>
				</tr>
			</table>
	</body>
</html>