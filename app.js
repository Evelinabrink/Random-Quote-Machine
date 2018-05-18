let arr = ["quote1", "quote2", "quote3", "quote4", "quote5"];
let newArr = [];
let quote = document.getElementById('newQuote');

window.onload = function () {
    shuffle(arr);
}

// fisher-yates shuffle function
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

quote.addEventListener('click', function (){
    // if array is empty, store newArr into arr
    if (arr.length === 0) {
        arr = shuffle(newArr);
        newArr = [];
    }

    let newQuote = arr.shift();
    document.querySelector('blockquote').textContent = newQuote;

    // store newQuote into newArr
    newArr.push(newQuote);
    console.log(newArr);
})