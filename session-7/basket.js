import getCourierByKey from "./courier-utils.js";
import { getCustomerById as customerRetrievalById } from "./customer-utils.js";

const transactionDetails = {
  courier: "DHL",
  product: { name: "Jeans", price: 12.0 },
  customerId: 1,
};

const customer = customerRetrievalById(transactionDetails.customerId);

console.log(customer);

const courierAddress = getCourierByKey(transactionDetails.courier);

console.log(courierAddress);
