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

function solution(input) {
    calculatePrefix(input)
    console.log(prefix)
    
    let flag = true
    let minAvg = 0
    let minIndex = 0
    let length = -1
    for (let i=0; i<input.length; i++) {
        for (let j=i+1; j<input.length; j++) {
            let avg = getSliceTotal(i,j)/(j-i+1)
            if (flag || avg<minAvg || (avg===minAvg && (j-i+1)<length)){
                flag = false
                minAvg = avg
                minIndex = i
                length = (j-i+1)
            }
        }
    }
    return minIndex
}

console.log(solution(input))