class Card {
  constructor(
    id,
    title,
    services,
    city,
    state,
    email,
    phoneNumber,
    imgUrl,
    pathToCard,
    isPublic,
    facebookLink,
    instagramLink,
    twitterLink,
    snapchatLink,
    themeId,
    industry,
    userId,
    photos
  ) {
    this.id = id;
    this.title = title;
    this.services = services;
    this.city = city;
    this.state = state;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.imgUrl = imgUrl;
    this.pathToCard = pathToCard;
    this.isPublic = isPublic;
    this.facebookLink = facebookLink;
    this.instagramLink = instagramLink;
    this.twitterLink = twitterLink;
    this.snapchatLink = snapchatLink;
    this.themeId = themeId;
    this.industry = industry;
    this.userId = userId;
    this.photos = photos;
  }
}

export default Card;
