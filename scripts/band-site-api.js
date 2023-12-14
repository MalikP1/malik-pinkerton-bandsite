class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = `api_key=530f64ae-746e-46b1-8d28-808d12b9b596`;
    this.baseUrl = `https://project-1-api.herokuapp.com/`;
    this.comment = `comments?`;
    this.show = `showdates?`;
  }

  async getComments() {
    const response = await axios.get(this.baseUrl + this.comment + this.apiKey);
    const commentsData = response.data;
    return commentsData;
  }

  async getShows() {
    const response = await axios.get(this.baseUrl + this.show + this.apiKey);
    const showsData = response.data;
    return showsData;
  }

  async postComment(comment) {
    const response = await axios.post(
      this.baseUrl + this.comment + this.apiKey,
      comment
    );
    return comment;
  }
}
const api = new BandSiteApi();

api.postComment();
