const ticket = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const formEl = document.querySelector(".ticket");

const renderShows = () => {
  for (let i = 0; i < ticket.length; i++) {
    articleEl = document.createElement("article");
    articleEl.classList.add("ticket-container");

    const dateLabelEl = document.createElement("p");
    dateLabelEl.classList.add("ticket__date-label");
    dateLabelEl.innerText = "DATE";

    articleEl.appendChild(dateLabelEl);

    const dateEl = document.createElement("p");
    dateEl.classList.add("ticket__date");
    dateEl.innerHTML = ticket[i].date;

    articleEl.appendChild(dateEl);

    const venueLabelEl = document.createElement("p");
    venueLabelEl.classList.add("ticket__venue-label");
    venueLabelEl.innerText = "VENUE";

    articleEl.appendChild(venueLabelEl);

    const venueEl = document.createElement("p");
    venueEl.classList.add("ticket__venue");
    venueEl.innerHTML = ticket[i].venue;

    articleEl.appendChild(venueEl);

    const locationLabelEl = document.createElement("p");
    locationLabelEl.classList.add("ticket__location-label");
    locationLabelEl.innerText = "LOCATION";

    articleEl.appendChild(locationLabelEl);

    const locationEl = document.createElement("p");
    locationEl.classList.add("ticket__location");
    locationEl.innerHTML = ticket[i].location;

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
