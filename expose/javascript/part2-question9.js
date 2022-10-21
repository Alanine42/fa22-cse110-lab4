// Question 9
function discountedPrice(prices, discount) {
  const discounted = [];
  const length = prices.length;

  for (let i = 0; i < length; i++) {
    const discountedPrice = prices[i] * (1 - discount);
    discounted.push(discountedPrice);
  }

  // console.log(i);
  // console.log(length);

  return discounted;
}

ret = discountedPrice([100, 200, 300], 0.5);
console.log(ret);