// Fetch API:

const url = `https://jsonplaceholder.typicode.com/posts`;

const displayPosts = (posts) => {
  console.log(posts);

  const postsList = document.getElementById("posts");

  posts.forEach(function (post) {
    const { id, body } = post;

    const listItem = document.createElement("li");

    listItem.innerHTML = `ID: ${id}, Body: ${body}`;

    postsList.appendChild(listItem);
  });
};

fetch(url)
  .then((response) => response.json())
  .then((json) => displayPosts(json));

// Create Post:
const formElement = document.getElementById("new-post-form");

const addNewPost = async (event) => {
  // prevent form from refreshing:
  event.preventDefault();

  const userField = document.getElementById("user");
  const titleField = document.getElementById("title");
  const bodyField = document.getElementById("body");

  const requestBody = {
    userId: userField.value,
    title: titleField.value,
    body: bodyField.value,
  };

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(requestBody),
  });

  const data = await response.json();

  // reset fields:
  userField.value = "";
  titleField.value = "";
  bodyField.value = "";

  document.getElementById("status").innerHTML = "Successfully created post";
};

formElement.addEventListener("submit", addNewPost);
