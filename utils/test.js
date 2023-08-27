const str = "Hello my name is Sergio my email is sergio.Rojas@gmail.com"

function strToUpperCase(string) {
    return string.toUpperCase()
}

function firstLetterUpperCase(string){
    const strArray = string.split(' ')
    const final = strArray.map(e => {
        const capitalLetter = e[0].toUpperCase()
        const wordSplitArray = e.split('')
        wordSplitArray[0].toUpperCase()
        wordSplitArray.shift()
        wordSplitArray.unshift(capitalLetter)
        return wordSplitArray.join('')
    });
    return final.join(' ')
}

console.log(firstLetterUpperCase(str))
console.log(strToUpperCase(str))


const thingArray = [ 'a','b','c','d']
