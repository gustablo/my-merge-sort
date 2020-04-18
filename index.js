const unsortedArr = [5, 1, 2, 6, 7, 8, 3, 4];

function merge(left, right) {
    const sortedArr = [];

    while (left.length && right.length) {

        if (left[0] <= right[0]) {
            sortedArr.push(left[0]);
            left = left.slice(1)
        } else {
            sortedArr.push(right[0]);
            right = right.slice(1);
        }
    }

    while (left.length) {
        sortedArr.push(left.shift());
    }
    while (right.length) {
        sortedArr.push(right.shift());
    }

    return sortedArr;
}

function mergesort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const midpoint = parseInt(arr.length / 2);
    const left = arr.slice(0, midpoint);
    const right = arr.slice(midpoint, arr.length);
    return merge(mergesort(left), mergesort(right));
}

console.log(mergesort(unsortedArr));