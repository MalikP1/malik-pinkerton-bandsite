const nameInputEl = document.querySelector(".name__input");
const commentInputEl = document.querySelector(".comment__input");

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = `api_key=530f64ae-746e-46b1-8d28-808d12b9b596`;
    this.baseUrl = `https://project-1-api.herokuapp.com/`;
    this.comment = `comments?`;
    this.show = `showdates?`;
  }

  async getComments() {
    try {
      const response = await axios.get(
        this.baseUrl + this.comment + this.apiKey
      );
      const commentsData = response.data;
      return commentsData;
    } catch (error) {
      console.log(error);
      commentInputEl.innerText = "Failed to get comments.";
    }
  }

  async getShows() {
    try {
      const response = await axios.get(this.baseUrl + this.show + this.apiKey);
      const showsData = response.data;
      return showsData;
    } catch (error) {
      console.log(error);
    }
  }

  async postComment(comment) {
    try {
      const response = await axios.post(
        this.baseUrl + this.comment + this.apiKey,
        comment
      );
      return comment;
    } catch (error) {
      console.log(error);
      commentInputEl.innerText = "Failed to post comment.";
    }
  }
}
const api = new BandSiteApi();
