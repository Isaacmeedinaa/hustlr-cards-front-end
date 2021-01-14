import React from "react";
import { useSelector } from "react-redux";

import { Helmet } from "react-helmet";

const RouteHead = () => {
  const publicCard = useSelector((state) => state.publicCard);

  if (!publicCard) {
    return null;
  }

  return (
    <div>
      <Helmet>
        <title>
          {!publicCard.title || publicCard.title === ""
            ? "Hustlr Cards"
            : publicCard.title}
        </title>
        <meta
          property="og:title"
          content={
            !publicCard.title || publicCard.title === ""
              ? "Hustlr Cards"
              : publicCard.title
          }
        />
        <meta
          property="og:description"
          content={
            !publicCard.description || publicCard.description === ""
              ? "Hustlr Cards is the app for side hustlers. Create your hustlr card today and showcase what your side hustle is all about!"
              : publicCard.description
          }
        />
        <meta
          property="og:image"
          content={
            !publicCard.imgUrl || publicCard.imgUrl === ""
              ? null
              : publicCard.imgUrl
          }
        />
        <meta
          name="description"
          content={
            !publicCard.description || publicCard.description === ""
              ? "Hustlr Cards is the app for side hustlers. Create your hustlr card today and showcase what your side hustle is all about!"
              : publicCard.description
          }
        />
      </Helmet>
    </div>
  );
};

export default RouteHead;
