function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

// exporting module
module.exports = average;


// exporting object module 

// module.exports = {
//     avg: average,
//     name: "Ramesh Sharma",
//     city: "Delhi"
// }

// We can export single property like
module.exports.movie = "Gravity";
