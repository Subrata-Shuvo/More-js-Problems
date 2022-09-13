function smallestElement(numbers){
    let min = numbers[0];
    for(let i=0; i< numbers.length; i++){
        const element = numbers[i];
        if(element < min) {
            min = element;
        }
    }
    return min;
}

const smallest = [12,2,34, 567];
const smallest1 = smallestElement(smallest);
console.log('Smallest number is', smallest1);