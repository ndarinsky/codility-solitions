
//Complexity o(n*m)
function solution1(numberOfElements, operations) {
    let data = []
    for(let i = 0; i < numberOfElements; i++) {
        data.push(0);
    }

    let max = 0
    operations.forEach(operation => {
        if (operation >= 1 && operation<=numberOfElements) {
            data[operation-1]++
            max = Math.max(max, data[operation-1])
        } else {
            data = data.map(item => max)
        }
    });

    return data
}

//Complexity O(n+m)
function solution(N, A) {
    var counters = [], 
    size = N, 
    max = 0,
    forValue = 0,
    counter = 0,
    lastUpdate = 0;
    // init zeros
    for (var i = 0; i < N; i++){
        counters[i] = 0;
    }
    
    for (var i = 0; i < A.length; i++){
        if (A[i] <= N){
            position = A[i] -1;
            if (counters[position] < lastUpdate){
                counters[position] = lastUpdate + 1;
            } else {
                counters[position] = counters[position]+1;
            }
            if (counters[position] > max) {
                max = counters[position];
            }
        } else {
            lastUpdate = max;
        }
    }
    
    for (var i = 0; i < N; i++){
        if (counters[i] < lastUpdate)
            counters[i] = lastUpdate;
    }
    
    return counters;
}

console.log(solution(5, [3,4,4,6,1,4,4]))