const customers = [
  {
    id: 1,
    name: "Tim Hope",
    address: {
      street: "1st customer street",
    },
  },
];

export function getCustomerById(id) {
  const customer = customers.filter((customer) => customer.id === id);
  console.log(customer);

  return addPrivileges(id, customer);
}

function addPrivileges(id, customer) {
  let customerWithPrivilege = { ...customer };

  if (id === 1) {
    customerWithPrivilege.rank = "Gold";
  }

  return customerWithPrivilege;
}
