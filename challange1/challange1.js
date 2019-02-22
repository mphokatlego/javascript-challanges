

 function calcArea(a,b,c) {
 	var s=1/2*(a+b+c);
 	var area=Math.sqrt(s(s - a)(s - b)(s - c))
 	return area;
 }
 console.log(calcArea(9,8,7))