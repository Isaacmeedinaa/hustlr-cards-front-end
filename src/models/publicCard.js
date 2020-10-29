class PublicCard {
  constructor(
    id,
    title,
    description,
    city,
    state,
    email,
    phoneNumber,
    imgUrl,
    imgId,
    backdropImgUrl,
    backdropImgId,
    pathToCard,
    isPublic,
    facebookLink,
    instagramLink,
    snapchatLink,
    twitterLink,
    themeId,
    industryId,
    userId,
    industry,
    photos,
    offerings,
    primaryColor,
    transparentColor
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.city = city;
    this.state = state;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.imgUrl = imgUrl;
    this.imgId = imgId;
    this.backdropImgUrl = backdropImgUrl;
    this.backdropImgId = backdropImgId;
    this.pathToCard = pathToCard;
    this.isPublic = isPublic;
    this.facebookLink = facebookLink;
    this.instagramLink = instagramLink;
    this.snapchatLink = snapchatLink;
    this.twitterLink = twitterLink;
    this.themeId = themeId;
    this.industryId = industryId;
    this.userId = userId;
    this.industry = industry;
    this.photos = photos;
    this.offerings = offerings;
    this.primaryColor = primaryColor;
    this.transparentColor = transparentColor;
  }
}

export default PublicCard;
