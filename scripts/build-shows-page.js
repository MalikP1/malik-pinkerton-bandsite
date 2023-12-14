const formEl = document.querySelector(".ticket");

const renderShows = async () => {
  const ticket = await api.getShows();

  for (let i = 0; i < ticket.length; i++) {
    articleEl = document.createElement("article");
    articleEl.classList.add("ticket-container");

    const dateLabelEl = document.createElement("p");
    dateLabelEl.classList.add("ticket__date-label");
    dateLabelEl.innerText = "DATE";

    articleEl.appendChild(dateLabelEl);

    const dateEl = document.createElement("p");
    dateEl.classList.add("ticket__date");
    dateEl.innerText = new Date(ticket[i].date).toDateString();

    articleEl.appendChild(dateEl);

    const venueLabelEl = document.createElement("p");
    venueLabelEl.classList.add("ticket__venue-label");
    venueLabelEl.innerText = "VENUE";

    articleEl.appendChild(venueLabelEl);

    const venueEl = document.createElement("p");
    venueEl.classList.add("ticket__venue");
    venueEl.innerText = ticket[i].place;

    articleEl.appendChild(venueEl);

    const locationLabelEl = document.createElement("p");
    locationLabelEl.classList.add("ticket__location-label");
    locationLabelEl.innerText = "LOCATION";

    articleEl.appendChild(locationLabelEl);

    const locationEl = document.createElement("p");
    locationEl.classList.add("ticket__location");
    locationEl.innerText = ticket[i].location;

    articleEl.appendChild(locationEl);

    const buttonEl = document.createElement("button");
    buttonEl.classList.add("ticket__button");
    buttonEl.innerText = "BUY TICKETS";

    articleEl.appendChild(buttonEl);

    formEl.appendChild(articleEl);
  }
};

renderShows();

const handleSubmit = (event) => {
  event.preventDefault();
};

formEl.addEventListener("submit", handleSubmit);
