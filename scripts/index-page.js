const comment = [
  {
    name: "Connor Walton",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "02/17/2021",
    image: "",
  },
  {
    name: "Emilie Beach",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    date: "01/09/2021",
    image: "",
  },
  {
    name: "Miles Acosta",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "12/20/2020",
    image: "",
  },
];

const renderComment = () => {
  const sectionEl = document.querySelector(".comments");

  sectionEl.innerHTML = "";

  for (let i = 0; i < comment.length; i++) {
    const articleEl = document.createElement("article");
    articleEl.classList.add("comment");

    const divAvatarEl = document.createElement("div");
    divAvatarEl.classList.add("comment__avatar");
    divAvatarEl.innerHTML = comment[i].image;

    articleEl.appendChild(divAvatarEl);

    const divCommentEl = document.createElement("div");
    divCommentEl.classList.add("comment__container");

    articleEl.appendChild(divCommentEl);

    const divNameEl = document.createElement("div");
    divNameEl.classList.add("comment__name-container");

    divCommentEl.appendChild(divNameEl);

    const nameEl = document.createElement("h4");
    nameEl.classList.add("comment__name");
    nameEl.innerHTML = comment[i].name;

    divNameEl.appendChild(nameEl);

    const dateEl = document.createElement("p");
    dateEl.classList.add("comment__date");
    dateEl.innerHTML = comment[i].date;

    divNameEl.appendChild(dateEl);

    const textEl = document.createElement("p");
    textEl.classList.add("comment__text");
    textEl.innerHTML = comment[i].comment;

    divCommentEl.appendChild(textEl);

    sectionEl.appendChild(articleEl);
  }
};

renderComment();

const formEl = document.querySelector(".conversation__form");

const handleSubmit = (event) => {
  event.preventDefault();

  // if (event.target.name.value === "" || event.target.comment.value === "") {
  //   return "Please enter a name and comment";
  // }
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
    image: "",
    date: new Date().toLocaleDateString("es-pa"),
  };

  comment.unshift(newComment);
  renderComment();
  formEl.reset();
};

formEl.addEventListener("submit", handleSubmit);
