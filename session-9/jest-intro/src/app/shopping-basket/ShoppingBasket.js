export default class ShoppingBasket {
  constructor() {
    this.items = [];
  }

  addItems(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const tempItems = [...this.items];

    this.items = tempItems.filter((currentItem) => currentItem !== item);
  }
}
