const sum = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    }
    return arr[0] + sum(arr.slice(1, arr.length))
}

const sum1 = (arr) => arr.length === 1 ? arr[0]: arr[0] + sum1(arr.slice(1,arr.length));
console.log(sum1([1,4,7,2,3]))

console.log(sum([1,4,7,2,3]))