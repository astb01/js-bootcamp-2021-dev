// Promises:

// Statuses:
// - Pending
// - Fullfilled/Resolved
// - Rejected

console.log("Start");

const dbPassword = 9999;

const fetchUserProfile = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 2,
        profile: "@johndoe",
      });
    }, 3000);
  });
};

const loginInUser = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching user", username);

      if (password === dbPassword) {
        // matched:
        resolve({ account: username });
      } else {
        reject({ message: "Passwords did not match" });
      }
    }, 2000);
  });
};

loginInUser("john@foo.com", 1234)
  .then((userDetails) => {
    console.log("Recieved user details", userDetails);

    return fetchUserProfile();
  })
  .then((profile) => {
    console.log("Recieved user profile", profile);
  })
  .catch((err) => console.error("Failed: ", err));

// const callbackSuccess = (userRecieved) => {
//   console.log("Recieved user", userRecieved);
// };

// const loggedInUser = loginInUser(
//   "john@foo.com",
//   1234,
//   (userRecieved) => {
//     console.log("Recieved user", userRecieved);

//     fetchUserProfile((profile) => {
//       console.log("Profile recieved", profile);
//     });
//   },
//   (errors) => {
//     console.error(errors);
//   }
// );

console.log("End");
