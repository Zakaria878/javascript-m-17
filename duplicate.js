const names = ['abul', 'babul', 'chabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'babul', 'abul', 'abul' ];
// function removeDuplicate(names){
//     for(let i = 0; i<names.length; i++){
//         const name = names[i];
//         console.log(name);
//     }
// }
// const uniqueNames = removeDuplicate(names); // এইটা না দিলে output দেখাবে না

function removeDuplicate(names){
    const uniqe = [];
    for(let i = 0; i<names.length; i++){
        const name = names[i];
        if(uniqe.includes(name) == false){
            uniqe.push(name);
        }
    }
    return uniqe;
}
const uniqueNames = removeDuplicate(names); // এইটা না দিলে output দেখাবে না
console.log(uniqueNames);