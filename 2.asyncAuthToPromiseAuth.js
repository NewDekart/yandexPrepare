/**2 ----


 * Функция asyncAuth() принимает колбек, в который
 * может быть передана ошибка (1-м аргументом) или
 * данные от бекенда (2-м аргументом).
 *
 * Необходимо реализовать функцию auth(),
 * которая выполняет asyncAuth(), но возвращает Promise.
 *
 * @returns {Promise}
 */

function asyncAuth(callback) {

    const error = 'error'
    const data = 'data'

    setTimeout(() => callback(error, data), 1000)
}

function callback(err, data) {
    console.log(err, data)
}

function auth(callback) {

    return new Promise((resolve, reject) => {
        const callbackWrapper = (error, data) => {
            if (!error) {
                return resolve(callback(error, data))
            }

            return reject(callback(error))
        }

        asyncAuth(callbackWrapper)
    }
    )
}

auth(callback)
