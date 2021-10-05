export default function getCourierByKey(key) {
  let courierDetails = {};

  switch (key) {
    case "DHL":
      courierDetails.name = "DHL";
      courierDetails.address = {
        street: "1st DHL Street",
      };
      break;
    case "Hermes":
      courierDetails.name = "Hermes";
      courierDetails.address = {
        street: "2nd Hermes Street",
      };
      break;
  }

  return courierDetails;
}

// Node way:
//module.exports = { getCourierByKey };
