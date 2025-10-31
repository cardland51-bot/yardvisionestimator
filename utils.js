function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function getCurrentDate() {
  const today = new Date();
  return today.toISOString().split('T')[0]; // Returns date as YYYY-MM-DD
}
