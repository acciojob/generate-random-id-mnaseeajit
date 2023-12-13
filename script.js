function makeid(l) {
  // write your code here
	let res = " ";
	for(i = 1;i<=l;i++)
		{
			res = res + 'a';
		}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
