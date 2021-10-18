function discountPrices(prices,discount){
    const discounted = [];
    const length = prices.length
    for(let i = 0; i < length; ++i){
        const discountedPrice = prices[i] * (1-discount);
        discounted.push(discountedPrice);
    }
    // console.log(i);
    console.log(length);
    // console.log(discountedPrice);
    // console.log(finalPrice)
    return discounted;
}
// arr = discountPrices([100,200,300],0.5);
// console.log(arr)

let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};
console.log(student.name);
console.log(student['Grad Year']);
console.log(student.greeting());
console.log(student['Favorite Teacher'].name);
console.log(student.courseLoad[0]);