const commentsEl = document.querySelector(".comments");

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = `api_key: 530f64ae-746e-46b1-8d28-808d12b9b596`;
    this.baseUrl = `https://project-1-api.herokuapp.com/`;
  }
}

async function getComments() {
  const response = await axios.get("");
  const comment = response.data;

  commentsEl.innerHTML = "";

  comments.forEach((comment) => {});
}
