let arr = ['Tajmahal', 'Victoria Memorial', 'The Virupaksha Temple'];
// let updatedList = arr.map((element) => {
// 	// ["a", "some", "one"]
// 	let words = element.split(" ") ;
// 	let updatedString = words.reduce((prev, current, index) => {
// 		if(current != "The" && current != "an" && current != "a"){
// 			return prev + " " + current ;
// 		}
// 		return prev ;
// 	}, "")

// 	return updatedString ;
// }) ;
// let mp = {} ; // {"some one" : "a some one"}
// updatedList.forEach( (element, index) => {
// 	mp[element] = arr[index] ;
// })
// updatedList.sort(); 

// let finalAns = updatedList.map((element) => {
//     return map[element] ;
// })

// console.log(finalAns); 

function strip(bandName){
	return bandName.replace(/^(a |the |an)/i, '').trim();
}

const sortBands = arr.sort((a, b) => strip(a) > strip(b) / 1:-1);

document.querySelector('#band').innerHTML =
	sortedBands
.map(band => '<li>$[arr]<li>')
.join('')

console.log(sortedBands);
