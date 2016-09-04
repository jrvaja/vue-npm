<?php 

return [
	'database'=>[
		'name'=>'openxcell53',
		'connection'=>'mysql:host=app.dev',
		'username'=>'root',
		'password'=>'root',
		'options'=>[
			PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION
		]
	]
];