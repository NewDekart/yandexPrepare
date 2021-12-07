// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {

    if (s.length !== t.length) {

        return false

    }

    const map = {}

    for (let i = 0; i < s.length; i += 1) {

        const letter = s[i]

        const mapValue = map[letter]

        if (mapValue === undefined) {

            map[letter] = 1

            continue

        }

        map[letter] = mapValue + 1
    }

    for (let i = 0; i < t.length; i += 1) {

        const letter = t[i]

        const mapValue = map[letter]

        if (mapValue === undefined) {

            return false

        }

        map[letter] = mapValue - 1
    }

    return Object.values(map).every(el => el === 0)

};
