/**
* Task description:
*  
* A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
* For example:
* 9 has binary representation 1001 and contains a binary gap of length 2.
* 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3
* 20 has binary representation 10100 and contains one binary gap of length 1
* 15 has binary representation 1111 and has no binary gaps
* 32 has binary representation 100000 and has no binary gaps.

* Write a function:
* 
*     function solution(N);
* 
* that, given a positive integer N, returns the length of its longest binary gap. 
* The function should return 0 if N doesn't contain a binary gap.

* For example:
* If N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.
* If N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
* 
* Write an efficient algorithm for the following assumptions:
*        N is an integer within the range [1..2,147,483,647].
*/

// Converts from decimal to binary format.
// O(log(n))
function convert(number) {
    let result = ''
    let input = number
    while (input >= 2) {
        let ostatok = input % 2
        input = Math.floor(input / 2)
        result += ostatok.toString()
    }
    result += input
    return result.split("").reverse()
}

function solution(number) {
    let binary = convert(number)

    let result = 0
    let currentLength = 0
    let startCounting = false
    for (let i = 0; i < binary.length; i++) {
        const current = binary[i]
        if (current === '0') {
            if (startCounting) {
                currentLength++
            }
            continue
        }

        if (startCounting) {
            result = Math.max(result, currentLength)
            currentLength = 0
        } else {
            startCounting = true
        }
    }
    return result
}

const n=805306373
console.log(solution(n))