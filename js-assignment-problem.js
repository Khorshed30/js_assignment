//Problem-1

function anaToVori(ana) {
    if (typeof ana != 'number' || ana <= 0) {
        return 'Please give a number and which will be positive!!';
    }
    var vori = ana * 0.0625;
    return vori;
}
const totalVori1 = anaToVori(5);
console.log(totalVori1);
const totalVori2 = anaToVori('5');
console.log(totalVori2);
const totalVori3 = anaToVori(-1);
console.log(totalVori3);



//Problem-2

function pandaCost(singgara, samoca, jilapi) {
    if (typeof singgara != 'number' || singgara < 0 ) {
        return 'Please give a number and which will be positive!!';
    }
    if (typeof samoca != 'number' || samoca < 0 ) {
        return 'Please give a number and which will be positive!!';
    }
    if (typeof jilapi != 'number' || jilapi < 0 ) {
        return 'Please give a number and which will be positive!!';
    }
    const singgaraPrice = singgara * 7;
    const samocaPrice = samoca * 10;
    const jilapiPrice = jilapi * 15;
    const totalPrice = singgaraPrice + samocaPrice + jilapiPrice;
    return totalPrice;
}
const totalCost1 = pandaCost(10, '101', 5);
console.log(totalCost1);
const totalCost2 = pandaCost(10, 10, 5);
console.log(totalCost2);
const totalCost3 = pandaCost(10, -1, 5);
console.log(totalCost3);
const totalCost4 = pandaCost(10, 0, 5);
console.log(totalCost4);
const totalCost5 = pandaCost(10, 120, 5);
console.log(totalCost5);



// Problem-3


function picnicBudget(numbers) {
    var cost1 = 0;
    var cost2 = 0;
    var cost3 = 0;
    var totalBudget;

    if (typeof numbers != 'number' || numbers <= 0) {
        return 'Please give a number and which will be positive!!';
    }

    if (numbers <= 100) {
        cost1 = numbers * 5000;
    }
    else if (numbers <= 200) {
        cost2 = (100 * 5000) + (numbers - 100) * 4000;
    }
    else {
        cost3 = (100 * 5000) + (100 * 4000) + (numbers - 200) * 3000;
    }

    totalBudget = cost1 + cost2 + cost3;

    return totalBudget;

}

const totalPicnicBudget = picnicBudget(350);
console.log(totalPicnicBudget);
const totalPicnicBudget1 = picnicBudget('350');
console.log(totalPicnicBudget1);
const totalPicnicBudget2 = picnicBudget(-1);
console.log(totalPicnicBudget2);
const totalPicnicBudget3 = picnicBudget(30);
console.log(totalPicnicBudget3);


//Problem-4

function oddFriend(names) {
    
    for (let i = 0; i < names.length; i++) {
        if(typeof names[i]!='string'){
            console.log('Here have some numbers');
            continue;
        }
        if (names[i].length % 2 != 0) {
            const odd = names[i];
            // console.log(odd);
            return odd;
            break;
        }
    }

}
const namelist = ['rafi','safi',2, 'khorshed', 'kalam', 'akash', 56,'asif', 'sumi', 'robi'];
const namelist2 = ['saki', 'titas', 'rafi', 'safi', 'khorshed', 'kalam', 'akash', 'asif', 'sumi', 'robi'];
const oddName = oddFriend(namelist);
const oddName2 = oddFriend(namelist2);
console.log(oddName);
console.log(oddName2);