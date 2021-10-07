console.log("Start");

const dbPassword = 1234;

const fetchUserProfile = (callback) => {
  setTimeout(() => {
    callback({
      id: 2,
      profile: "@johndoe",
    });
  }, 3000);
};

const loginInUser = (username, password, callback, failureCallback) => {
  setTimeout(() => {
    console.log("Fetching user", username);

    if (password === dbPassword) {
      // matched:
      callback({ account: username });
    } else {
      failureCallback({ message: "Passwords did not match" });
    }
  }, 2000);
};

// const callbackSuccess = (userRecieved) => {
//   console.log("Recieved user", userRecieved);
// };

const loggedInUser = loginInUser(
  "john@foo.com",
  1234,
  (userRecieved) => {
    console.log("Recieved user", userRecieved);

    fetchUserProfile((profile) => {
      console.log("Profile recieved", profile);
    });
  },
  (errors) => {
    console.error(errors);
  }
);

console.log("End");

// CALLBACK HELL

/*
retrieveUserLikedProgrammes(userDataReceived.account, (likedProgrammes) => {
        console.log("likedProgrammes", likedProgrammes);
        retrieveProgrammeDetail(likedProgrammes[0], (details) => {
            console.log("Details for programme", details);
            retrieveBlahA(..., () => {
// A ...
                retrieveBlahB(..., () => {
/// B ...
                    retrieveBlahC(..., () => {
// C ...
                        retrieveBlahD(..., () => {
/// D ..
                            }) 
                        })
                        }) 
                    })
                }) 
            })
*/
