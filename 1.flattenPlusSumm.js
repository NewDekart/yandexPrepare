/*
1 ----

function sum(arr) {

}

sum([1, 'x', '2x', ['3', ['x2', '5']]]);

Посчитать сумму всеъ элементов, которые приводятся к числу. В данном случае будет 11

Тут подзадача есть - flat массива, и её меня заставили решать без рекурсии ))
ну, сплющить массив можно да, циклом и стеком
*/

function sum(arr) {

    const stack = [arr]

    const flattedArray = []

    while ( stack.length > 0 ) {

        const item = stack.pop()

        if (Array.isArray(item)) {

            const lastIndex = item.length - 1

            for (let i = lastIndex; i >= 0; i -= 1) {

                stack.push(item[i])
            }

            continue
        }

        flattedArray.push(item)
    }

    return flattedArray.reduce((acc, el) => {

        const parsedEl = parseInt(el)

        return isNaN(parsedEl) ? acc : parsedEl + acc

    }, 0)
}

console.log(sum([1, 'x', '2x', ['3', ['x2', '5']]]));
