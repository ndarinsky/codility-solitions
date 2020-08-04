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

function solution(input) {
    let minSlice = null
    let minAvg = 0
    let minIndex = 0
    for (let i=0; i<input.length; i++) {
        for (let j=i+1; j<input.length; j++) {
            if(!minSlice) {
                minSlice = input.slice(i,j+1)
                minAvg = getAvg(minSlice)
                minIndex = i
            }
            slice = input.slice(i,j+1)
            avg = getAvg(slice)
            // if (input[j+1]>avg) {
                if (avg<minAvg || (avg===minAvg && slice.length === minSlice.length)){
                    minSlice = slice
                    minAvg = avg
                    minIndex = i
                }
            // }
        }
    }
    return minIndex
}

console.log(solution(input3))