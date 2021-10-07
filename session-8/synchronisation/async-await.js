// ES6:

// async/await
console.log("Start");

const dbPassword = 1234;

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

//

const retrieveUserDetails = async () => {
  const password = 1234;

  try {
    // call to retrieve user details:
    const loggedInUser = await loginInUser("john@foo.com", password);
    console.log("Received user", loggedInUser);

    const profileForUser = await fetchUserProfile();
    console.log("Recieved profile", profileForUser);
  } catch (err) {
    console.error(err);
  }
};

async function retrieveUserUsingDeclaration() {
  const password = 1234;

  try {
    // call to retrieve user details:
    const loggedInUser = await loginInUser("john@foo.com", password);
    console.log("Received user", loggedInUser);

    const profileForUser = await fetchUserProfile();
    console.log("Recieved profile", profileForUser);
  } catch (err) {
    console.error(err);
  }
}

retrieveUserDetails();
// retrieveUserUsingDeclaration();

console.log("END");
