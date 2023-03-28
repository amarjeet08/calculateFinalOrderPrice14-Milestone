const calculateTotalCost = (cart) => {
  let totalCost = 0;
  cart.forEach(item => {
    totalCost += item.price * item.quantity;
  });
  return totalCost;
};
const cart = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 },
    { price: 3, quantity: 6 }
  ];
  
  const totalCost = calculateTotalCost(cart);
  document.write(totalCost); // Output: 53