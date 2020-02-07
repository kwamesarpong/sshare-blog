import React from "react";
import ArticlesCardImg from "./ArticlesCardImg";

import cardImg1 from "../../assets/mind-and-body.png";
import cardImg2 from "../../assets/motivation.png";
import cardImg3 from "../../assets/Picture 15.png";
import cardImg4 from "../../assets/Picture 19.png";
import cardImg5 from "../../assets/Picture 24.png";

const ArticlesCardSmall = () => {
  return (
    <div className="col-md-3">
      <div className="articles__small">
        <div className="container">
          <ArticlesCardImg
            cardImg={cardImg1}
            cardTitle="LOVE ∙ SEX ∙ RELATIONSHIPS"
            cardSubtitle="Owen’s Syndrome"
          />
          <ArticlesCardImg
            cardImg={cardImg2}
            cardTitle="MOTIVATION ∙ INSPIRATION"
            cardSubtitle="The Strive"
          />
          <ArticlesCardImg
            cardImg={cardImg3}
            cardTitle="FEMINISM"
            cardSubtitle="Get Dirty"
          />
          <ArticlesCardImg
            cardImg={cardImg4}
            cardTitle="MORE MONEY"
            cardSubtitle="Hello Piggy"
          />
          <ArticlesCardImg
            cardImg={cardImg5}
            cardTitle="LIFESTYLE ∙ CULTURE"
            cardSubtitle="Lifestyle"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlesCardSmall;
