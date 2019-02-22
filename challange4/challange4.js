function time_convert(num){
	var hours = Math.floor(num / 60);
	var mintutes = num % 60;
	return hours + ":" + mintutes;}
	console.log(time_convert(214));