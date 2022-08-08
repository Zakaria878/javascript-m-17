function woodCalculator(charQuantity, tableQuantity, bedQuantity){
    const perCharWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = perCharWood * charQuantity;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = perBedWood * bedQuantity;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
const totalWood = woodCalculator(20, 10, 5);
console.log('total wood required: ', totalWood);