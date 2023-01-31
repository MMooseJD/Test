/*
Write a function that sorts string. Each word in the string will contain some digit.
This number will mean the position that the word will take as a result. Numbers can be from 1 to 9. 
1 will be the first word (not 0). If the tape is empty - return the empty tape. 
Words in the input stream will contain only valid values.
Tests:
sortString(‘g5et ski3lls on6 use1 your2 to4 7top’)
Output: ‘use1 your2 ski3lls to4 g5et on6 7top’

sortString(‘’)
Output: ‘’

sortString(‘practic3 h4rder yo1u 2hould’)
Output: ‘yo1u 2hould practic3 h4rder’
*/

const sortString = (argument) =>{
    //if the string is empty, returns and empty string
    if(!argument){
        return '';
    }else{
        //split string into words
        let words = argument.split(' ');
        //Order words according to the number in them
        words.sort((a,b)=>{
            //Extract the number of each word
            let numA = parseInt(a.replace(/[^0-9]/g,''))
            let numB = parseInt(b.replace(/[^0-9]/g,''))
            //return the dierence between the numbers to order the words
            return numA -numB;
        });
        //join the sorted words with a blank space and return the result
        return words.join(' ');
    }
}
const resultado = sortString('practic3 h4rder yo1u 2hould');

console.log(resultado);