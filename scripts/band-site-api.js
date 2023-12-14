class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = `api_key=530f64ae-746e-46b1-8d28-808d12b9b596`;
    this.baseUrl = `https://project-1-api.herokuapp.com/`;
    this.comment = `comments?`;
  }

  async getComments() {
    const response = await axios.get(this.baseUrl + this.comment + this.apiKey);
    const commentsData = response.data;
    return commentsData;
  }

  async postComment(comment) {}
}
const api = new BandSiteApi();
