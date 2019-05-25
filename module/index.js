const module = (() => {
	let value = 10;
  
  const sum = (number) => value + number;
  
  return {
  	sum: sum,
  }
  
})();

console.log(module.sum(5));