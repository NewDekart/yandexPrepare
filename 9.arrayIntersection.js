/*
9 ----

Даны два массива: [1, 2, 3, 2, 0] и [5, 1, 2, 7, 3, 2]
Надо вернуть [1, 2, 2, 3] (порядок неважен)
*/

function getIntersection(first, second) {

    const map = {}

    const result = []

    for (let i = 0; i < first.length; i += 1) {

        const value = first[i]

        const mappedValue = map[value]

        if (mappedValue === undefined) {

            map[value] = 1

            continue

        }

        map[value] = mappedValue + 1
    }

    for (let i = 0; i < second.length; i += 1) {

        const value = second[i]

        const mappedValue = map[value]

        if (mappedValue === undefined || mappedValue === 0) {

            continue

        }

        result.push(value)

        map[value] = mappedValue - 1

    }


    return result
}

console.log(getIntersection([1, 2, 3, 2, 0], [5, 1, 2, 7, 3, 2]))
