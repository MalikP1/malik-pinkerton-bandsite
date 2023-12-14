const renderComment = async () => {
  const sectionEl = document.querySelector(".comments");

  const comment = await api.getComments();
  sectionEl.innerText = "";

  const image = "";

  for (let i = 0; i < comment.length; i++) {
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
    nameEl.innerText = comment[i].name;

    divNameEl.appendChild(nameEl);

    const dateEl = document.createElement("p");
    dateEl.classList.add("comment__date");
    dateEl.innerText = new Date(comment[i].timestamp).toLocaleDateString(
      "es-pa"
    );

    divNameEl.appendChild(dateEl);

    const textEl = document.createElement("p");
    textEl.classList.add("comment__text");
    textEl.innerText = comment[i].comment;

    divCommentEl.appendChild(textEl);

    sectionEl.appendChild(articleEl);
  }
};

renderComment();

const formEl = document.querySelector(".conversation__form");

const handleSubmit = async (event) => {
  event.preventDefault();

  const nameInputEl = document.querySelector(".name__input");
  const commentInputEl = document.querySelector(".comment__input");

  if (event.target.name.value === "") {
    nameInputEl.classList.add(".name__input--error");
    return (nameInputEl.innerText = "Please enter a name");
  }
  if (event.target.comment.value === "") {
    commentInputEl.classList.add(".comment__input--error");
    return (commentInputEl.innerText = "Please enter a comment");
  }
  const newComment = {
    name: event.target.name.value,
    comment: event.target.comment.value,
  };

  // comment.unshift(newComment);
  formEl.reset();
  const post = await api.postComment(newComment);
  // comment.timestamp.sort(a, b);
  // () => {
  //   return b - a;
  // };
  renderComment();
};

formEl.addEventListener("submit", handleSubmit);
