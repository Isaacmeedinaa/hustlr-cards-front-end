export const addWidthToImgUrl = (url, width) => {
  let baseUrl = 'http://res.cloudinary.com/hustlrcards/image/upload/';
  
  let tailOfUrl = url.substring(baseUrl.length, url.length); 

  return baseUrl + 'w_' + width + '/' + tailOfUrl;
}