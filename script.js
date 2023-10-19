const byteSize = (str) => {
  // write your code here
	const blob= new blob([str]);
	const sizeInByte = blob.size; 

	return sizeInByte;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));

