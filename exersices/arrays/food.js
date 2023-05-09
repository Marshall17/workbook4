let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

function lunchCost(lunch) {
  let total = 0;
  for (let i = 0; i < lunch.length; i++) {
    total += lunch[i].price;
  }
  return total;
}

console.log(lunchCost(lunch));

console.log(lunchCost(lunch)*.08);

console.log(lunchCost(lunch)*.18);