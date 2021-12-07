/*
4 ----

Написать каррирование
function sum(a, b, c) {
    return a + b + c;
}

curry(sum)(1, 2, 3, 4, 5);  // 6
curry(sum)(1, 2, 3);  // 6
curry(sum)(1, 2)(3);  // 6
curry(sum)(1)(2)(3);  // 6
*/

function sum(a, b, c) {
    return a + b + c;
}

function curry(func) {

    const argsCount = func.length

    let passedArgs = []

    function iteration(...args) {

        args.forEach((el) => passedArgs.push(el))

        if (args.length < argsCount && passedArgs.length < argsCount) {

            return iteration

        }

        return func(...passedArgs)

    }

    return iteration

}

console.log(curry(sum)(1, 2, 3, 4, 5));
console.log(curry(sum)(1, 2, 3));
console.log(curry(sum)(1, 2)(3))
console.log(curry(sum)(1)(2)(3));
