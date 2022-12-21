export const parseAmount = amount =>
  amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
