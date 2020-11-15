export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://hustlr.azurewebsites.net/api/v1"
    : "http://192.168.1.12:5000/api/v1";
