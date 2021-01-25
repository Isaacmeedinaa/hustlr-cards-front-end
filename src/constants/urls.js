export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://hustlr.azurewebsites.net/api/v1"
    : "http://10.0.0.137:5000/api/v1";
