const phones = [
    {
        name : 'Samsung',
        price : '55000',
        camera : '108 mp',
        storage : '256 gb'
    },
    {
        name : 'Xiaomi',
        price : '51000',
        camera : '64 mp',
        storage : '128 gb'
    },
    {
        name : 'Sony',
        price : '65000',
        camera : '33 mp',
        storage : '256 gb'
    },
    {
        name : 'Vivo',
        price : '34000',
        camera : '48 mp',
        storage : '64 gb'
    },
    {
        name : 'Apple',
        price : '155000',
        camera : '12 mp',
        storage : '256 gb'
    },
    {
        name : 'Oppo',
        price : '45000',
        camera : '64 mp',
        storage : '256 gb'
    }    
];

let cheapest = phones[0];
for (const phone of phones){
    // compare price only
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);