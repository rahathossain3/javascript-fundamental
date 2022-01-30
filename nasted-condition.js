var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 7;
var packedWell = false;

// একটা  কন্ডিশনের মধ্যে আর একটি কন্ডিশন  লিখলে তাকে  Nasted condition বলে
//  danishPrice এর দাম myBudget এর থেকে কম হলে
// if (danishPrice < myBudget) {
//     console.log('Danish Kheye danish jabo')
// }
// else if (butterBreadPrice < myBudget) {
//     console.log('butter Bon diya cha Khamu')
// }
// else if (toastBiscuitPrice < myBudget) {
//     console.log('toast biscute khamu')
// }
// else {
//     console.log('batasha diya cha khamy')

// }


// কন্ডিশনের মধ্যে কন্ডিশন apply kora jay 

if (danishPrice < myBudget) {
    if (packedWell == true) {
        console.log('danished khabo')
    }
    else {
        console.log('Danish khamu na! karon ami khaoyar ayge masi khaiya felche ordek')
    }
}