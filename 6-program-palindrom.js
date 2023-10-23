// 1. Deteksi Palindrom

let kata = "malam"
let kataReverse = ""
let typeKata = typeof kata

let palindrom = (kata) => {
    for (let x = kata.length-1; x >= 0; x--) {
        kataReverse += kata[x]
    }

    console.log(kata)
    console.log(kataReverse)
            
    if(kata === kataReverse){
        console.log("palindrom")
    }else{
        console.log("bukan palindrom")
    }
}

palindrom(kata)





// Reverse Word
let words = "rumah saya disini"
let wordsReverse = ""
let separator = words.split(" ")

let reverseWords = (words) => {
    for(let x = separator.length-1; x >= 0; x--){
        wordsReverse += `${separator[x]} `
    }

    console.log(words)
    console.log(separator)
    console.log(wordsReverse)
}

reverseWords(words)