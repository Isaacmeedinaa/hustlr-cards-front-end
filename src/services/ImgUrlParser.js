export const addWidthToImgUrl = (url, width) => {
  let baseUrl = 'https://res.cloudinary.com/hustlrcards/image/upload/';
  
  let tailOfUrl = url.substring(baseUrl.length - 1, url.length); 

  return baseUrl + 'w_' + width + '/' + tailOfUrl;
}