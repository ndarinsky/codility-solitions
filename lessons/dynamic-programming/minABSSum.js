function solution(A) {
    const sorted = A.map(e => Math.abs(e)).sort()
    let sum = sorted.reduce((a, b) => a + b, 0)

    const flag = true
    let i = sorted.length - 1
    while (sum > 0) {
        sum = sum - A[i]
        i--
    }
}

const A = [1,5,2,2] 
console.log(solution(A))