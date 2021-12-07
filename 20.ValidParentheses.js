https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {

    const openBrackets = { '(': true, '{': true, '[': true }
    const closeBrackets = { '}': '{', ')': '(', ']': '[' }

    const stack = []

    for (let i = 0; i < s.length; i += 1) {

        const bracket = s[i]

        if (openBrackets[bracket]) {

            stack.push(bracket)

            continue

        }

        const openBracket = closeBrackets[bracket]

        const previosBracket = stack.pop()


        if (openBracket !== previosBracket) {

            return false

        }

    }


    return stack.length === 0

};
