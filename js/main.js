
var a1 = [-1, 3, 8, 2, 9, 5, 4];
var a2 = [4, 1, 2, 10, 5, 20]
var aTarget = 24;
// closestSumPair(a1, a2, aTarget) should return {5, 20} or {3, 20}

function closestSumPair(a1, a2, target) {
    console.log(`Dados os arrays: Array 1: ${a1} e Array 2: ${a2}, ache os valores cujo a soma dê perto de ${target}`)
    var a1Sorted = a1.sort(function (a, b) { return a - b })
    var a2Sorted = a2.sort(function (a, b) { return a - b })

    var i = 0;
    var j = a2Sorted.length - 1;
    var smallestDiff = Math.abs(a1Sorted[0] + a2Sorted[0] - target)
    var closestPair = []

    while( i < a1Sorted.length && a1Sorted.length >= 0) {
        var value1 = a1Sorted[i]
        var value2 = a2Sorted[j]
        var currentDiff = value1 + value2 - target

        if(Math.abs(currentDiff) < smallestDiff) {
            smallestDiff = Math.abs(currentDiff)
        }

        if(currentDiff === 0){
            closestPair.push({v1: value1, v2: value2})
            i += 1
        }
        else if(currentDiff === 1){
            closestPair.push({v1: value1, v2: value2})
            i += 1
        }
        else if(currentDiff === -1){
            closestPair.push({v1: value1, v2: value2})
            i += 1
        }
        
        else if (currentDiff < 0){
            i += 1
        }
        else {
            j -= 1
        }
    }
    return closestPair
}

console.log(closestSumPair(a1, a2, aTarget))