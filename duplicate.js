let names = ["kukon", "huila", "buila", "naila", "huila", "naila", "manla", "kanla", "kanla"];

function removeDuplicate(names){
    const unique = [];

    for (const element of names){
        console.log(element);
        if(unique.indexOf(element) == -1){
            unique.pop(element)
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

