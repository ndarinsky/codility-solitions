const input = [4, 2, 2, 5, 1, 5, 8] //1
const input2 = [4, 2, 6, 2, 5, 1, 5, 8] //1
const input3 = [-3, -5, -8, -4, -10]

function getAvg(arr) {
    let sum = 0
    arr.forEach(element => {
        sum+=element    
    });
    return sum/arr.length
}

const prefix = []
function calculatePrefix(input) {
    for(let i=0; i<input.length; i++) {
        if (i===0) {
            prefix.push(input[i])
        } else {
            prefix.push(input[i]+prefix[i-1])
        }
    }
}

function getSliceTotal(x,y) {
    if (x > 0) 
        return prefix[y]-prefix[x-1]
    if (x <= 0) {
        return prefix[y]
    }
}

/**
 * Solution based on the following fact, which was proved:
 * Every slice must be of size two or three.
 * Slices of bigger sizes are created from such smaller slices. 
 * @param {*} input 
 */
function solution(input) {
    let minValue = 10001
    let minIndex = 0
    for (let i=0; i<input.length-1; i++) {
        if ((input[i] + input[i+1])/2.0 < minValue){
            minIndex = i
            minValue = (input[i] + input[i+1])/2.0
        }
        if (i < input.length-2 && (input[i] + input[i+1] + input[i+2])/3.0 < minValue){
            minIndex = i
            minValue = (input[i] + input[i+1] + input[i+2])/3.0
        }
    }
    return minIndex
}

// console.log(solution(input))