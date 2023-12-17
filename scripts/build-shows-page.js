const formEl = document.querySelector(".ticket");

const createTicket = function (ticket) {
  articleEl = document.createElement("article");
  articleEl.classList.add("ticket-container");

  const dateLabelEl = document.createElement("p");
  dateLabelEl.classList.add("ticket__date-label");
  dateLabelEl.innerText = "DATE";

  articleEl.appendChild(dateLabelEl);

  const dateEl = document.createElement("p");
  dateEl.classList.add("ticket__date");
  dateEl.innerText = new Date(ticket.date).toDateString();

  articleEl.appendChild(dateEl);

  const venueLabelEl = document.createElement("p");
  venueLabelEl.classList.add("ticket__venue-label");
  venueLabelEl.innerText = "VENUE";

  articleEl.appendChild(venueLabelEl);

  const venueEl = document.createElement("p");
  venueEl.classList.add("ticket__venue");
  venueEl.innerText = ticket.place;

  articleEl.appendChild(venueEl);

  const locationLabelEl = document.createElement("p");
  locationLabelEl.classList.add("ticket__location-label");
  locationLabelEl.innerText = "LOCATION";

  articleEl.appendChild(locationLabelEl);

  const locationEl = document.createElement("p");
  locationEl.classList.add("ticket__location");
  locationEl.innerText = ticket.location;

  articleEl.appendChild(locationEl);

  const buttonEl = document.createElement("button");
  buttonEl.classList.add("ticket__button");
  buttonEl.innerText = "BUY TICKETS";

  articleEl.appendChild(buttonEl);

  formEl.appendChild(articleEl);
};

const renderShows = async () => {
  const tickets = await api.getShows();

  tickets.forEach(createTicket);
};

renderShows();

const handleSubmit = (event) => {
  event.preventDefault();
};
// const ticketContainer = document.querySelectorAll(".ticket-container");

// const whenActive = (event) => {
//   ticketContainer.forEach((item) => {
//     if (item !== formEl) {
//       item.classList.remove("ticket-container--active");
//     }
//   });
//   ticketContainer.classList.toggle("ticket-container--active");
// };

// formEl.addEventListener("click", whenActive());

formEl.addEventListener("submit", handleSubmit);
