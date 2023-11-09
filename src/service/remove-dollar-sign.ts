export function removeDollarSignConvertToNumber(price: string) {
  return +price.substring(1);
}
