function reducePreview() {
    const array1 = [1, 2, 3, 4];

    // accumulator represents always the same variable; currentValue is a value from the array
    // reduce works as a loop over the whole array
    // in this case every array value will be added to the accumulator
    // at the end of the loop accumulator will be returned
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
    // 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer));
    // expected output: 10
    
    // you can also set the initial value of the accumulator (in this case, it is 5)
    
    // 5 + 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer, 5));
    // expected output: 15
}

function mapPreview() {
    var array1 = [1, 4, 9, 16];

    // every value of the array will be changed (overwritten) by a function
    // in this case every value will be doubled
    // pass a function to map
    
    const map1 = array1.map(x => x * 2);
    
    console.log(map1);
    // expected output: Array [2, 8, 18, 32]
}

function forEachPreview() {
    var array1 = ['a', 'b', 'c'];

    // every value be used by a function
    // in this every value will be printed
    
    array1.forEach(function(element) {
      console.log(element);
    });
    
    // expected output: "a"
    // expected output: "b"
    // expected output: "c"
}

function filterPreview() {
    var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    // an array will be returned but only with the values that return a true by applying a function
    // in this case only elements with a length > 6 will be returned

    const result = words.filter(word => word.length > 6);
    
    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]

}

function everyPreview() {
    
    function isBelowThreshold(currentValue) {
      return currentValue < 40;
    }
    
    var array1 = [1, 30, 39, 29, 10, 13];
    
    // returns an boolean based on the result of a function applied on every element of an array
    // in this case every element has to be 39 or smaller to return a true
    
    console.log(array1.every(isBelowThreshold));
    // expected output: true
}

function somePreview() {
    var array = [1, 2, 3, 4, 5];

    // returns true if at least 1 element fulfills the function
    // in this case at least 1 element has to be an even number

    var even = function(element) {
      // checks whether an element is even
      return element % 2 === 0;
    };
    
    console.log(array.some(even));
    // expected output: true
}

function findPreview() {
    var array1 = [5, 12, 8, 130, 44];

    // returns the first element that fulfills the function or undefined if no fitting element exists
    // in this case first element that is higher than 10 will be returned

    var found = array1.find(function(element) {
      return element > 10;
    });
    
    console.log(found);
    // expected output: 12

}

function sortPreview() {
    // sorts in place based of UTF-16 representations of given elements
    
    // in this case the array is sorted alphabetical
    var months = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort();
    console.log(months);
    // expected output: Array ["Dec", "Feb", "Jan", "March"]
    
    //in this case the array is sorted by the first digit
    var array1 = [1, 30, 4, 21];
    array1.sort();
    console.log(array1);
    // expected output: Array [1, 21, 30, 4]

}

