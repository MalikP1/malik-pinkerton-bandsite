const createComment = function (comment) {
  const sectionEl = document.querySelector(".comments");

  const image = "";

  const articleEl = document.createElement("article");
  articleEl.classList.add("comment");

  const divAvatarEl = document.createElement("div");
  divAvatarEl.classList.add("comment__avatar");
  divAvatarEl.innerText = image;

  articleEl.appendChild(divAvatarEl);

  const divCommentEl = document.createElement("div");
  divCommentEl.classList.add("comment__container");

  articleEl.appendChild(divCommentEl);

  const divNameEl = document.createElement("div");
  divNameEl.classList.add("comment__name-container");

  divCommentEl.appendChild(divNameEl);

  const nameEl = document.createElement("h4");
  nameEl.classList.add("comment__name");
  nameEl.innerText = comment.name;

  divNameEl.appendChild(nameEl);

  const dateEl = document.createElement("p");
  dateEl.classList.add("comment__date");
  dateEl.innerText = new Date(comment.timestamp).toLocaleDateString("es-pa");

  divNameEl.appendChild(dateEl);

  const textEl = document.createElement("p");
  textEl.classList.add("comment__text");
  textEl.innerText = comment.comment;

  divCommentEl.appendChild(textEl);

  sectionEl.appendChild(articleEl);
};

const renderComment = async () => {
  const sectionEl = document.querySelector(".comments");

  const comments = await api.getComments();
  sectionEl.innerText = "";

  const image = "";
  comments.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  console.log(comments);
  comments.forEach(createComment);
};

renderComment();

const formEl = document.querySelector(".conversation__form");

const handleSubmit = async (event) => {
  event.preventDefault();

  if (event.target.name.value === "" && event.target.comment.value === "") {
    nameInputEl.classList.add("name__input--error");
    nameInputEl.placeholder = "Please enter a name";
    commentInputEl.classList.add("comment__input--error");
    commentInputEl.placeholder = "Please enter a comment";
    return;
  } else if (event.target.name.value === "") {
    nameInputEl.classList.add("name__input--error");
    nameInputEl.placeholder = "Please enter a name";
    return;
  } else if (event.target.comment.value === "") {
    commentInputEl.classList.add("comment__input--error");
    commentInputEl.placeholder = "Please enter a comment";
    return;
  }
  const newComment = {
    name: event.target.name.value,
    comment: event.target.comment.value,
  };

  formEl.reset();
  const post = await api.postComment(newComment);
  renderComment();
};

const onClick = async (event) => {
  nameInputEl.classList.remove("name__input--error");
  commentInputEl.classList.remove("comment__input--error");
};

formEl.addEventListener("submit", handleSubmit);
formEl.addEventListener("click", onClick);
