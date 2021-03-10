export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://hustlr.azurewebsites.net/api/v1"
    : "http://localhost:5000/api/v1";

export const FETCH_REVIEWS_BY = {
  userId: 'USER_ID',
  cardPath: 'CARD_PATH'
}

export const DefaultReviewPageSize = 25;
