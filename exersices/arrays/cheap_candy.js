let products = [
    {product: "Gummy Rings", price: 5.79},
    {product: "Kit-Kat", price: 3.00},
    {product: "Reese", price: 2.80},
    {product: "Hershey", price: 3.79},
    {product: "Gummy Bear", price: 5.99},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Gummy Worms", price: 5.79},
    {product: "Caramel M&Ms", price: 3.89},
   ];
   for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.price < 4.00) {
        console.log(product.product);
    }
   }