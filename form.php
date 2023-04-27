<?php 
 
	 if($_SERVER['REQUEST_METHOD'] === 'POST') {
	 	echo('REQUEST METHOD' . ' ' . $_SERVER['REQUEST_METHOD']);
	 }else {
	 	echo('no');
	 }
 ?> 