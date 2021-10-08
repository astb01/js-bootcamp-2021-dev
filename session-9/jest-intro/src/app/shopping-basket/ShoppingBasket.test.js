import ShoppingBasket from "./ShoppingBasket";

describe("ShoppingBasket", () => {
  let shoppingBasket;

  // set up:
  beforeEach(() => {
    shoppingBasket = new ShoppingBasket();
  });

  test("Should initialise with zero items", () => {
    // Instance creation:
    expect(shoppingBasket.items.length).toBe(0);
  });

  test("Should add apples to shopping basket", () => {
    // arrange:
    const item = "Apples";

    shoppingBasket.addItems(item);

    expect(shoppingBasket.items.length).toBe(1);
    expect(shoppingBasket.items).toContain(item);
  });

  // teardown:
  afterEach(() => {
    shoppingBasket = null;
  });
});
