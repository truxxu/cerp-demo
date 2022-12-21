export const parseAmount = amount =>
  (amount / 100)
    .toFixed()
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
