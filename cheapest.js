const phones = [
    {name : 'Samsung', camera: 12, storage: '32GB', price: 36000, color: 'silver'},
    {name : 'Vivo', camera: 12, storage: '32GB', price: 30000, color: 'silver'},
    {name : 'Oppo', camera: 12, storage: '32GB', price: 28000, color: 'silver'},
    {name : 'Xaomi', camera: 12, storage: '32GB', price: 35000, color: 'silver'},
    {name : 'Walton', camera: 12, storage: '32GB', price: 26000, color: 'silver'},
    {name : 'Nokia', camera: 12, storage: '32GB', price: 62000, color: 'silver'},
    {name : 'Poco', camera: 12, storage: '32GB', price: 31000, color: 'silver'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);
