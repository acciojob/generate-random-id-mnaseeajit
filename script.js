function makeid(l) {
  // write your code here
	let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	let res = " ";
	for(i = 0;i<l;i++)
		{
			res = res + char[i];
		}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
