/*
3 ----

Написать функцию tryAuth, которая принимает N - количество попыток и в случае неудачи пробует N раз перевызвать функцию asyncAuth
*/

const asyncAuth = () => new Promise((resolve, rejsect) => {
    setTimeout(() => rejsect('error'), 500)
})

function tryAuth(count) {
    let countTry = 0

    const subTry = async () => {
        asyncAuth()
        .then(() => console.log('Success'))
        .catch(() => {
            if (countTry < count) {
                console.log('Попытка')
                countTry += 1
                subTry()
            } else {
                throw('Authentification Error')
            }
        })
    }

    subTry()
}

tryAuth(5)
