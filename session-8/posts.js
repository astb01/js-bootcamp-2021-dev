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
