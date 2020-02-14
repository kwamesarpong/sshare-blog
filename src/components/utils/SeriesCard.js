import React from "react";

const SeriesCard = ({ seriesTitle, seriesAuthor, seriesPost }) => {
  return (
    <div>
      <h4 className="pb-1 pt-4">{seriesTitle}</h4>
      <h6>{seriesAuthor}</h6>
      <p className="pb-5">{seriesPost}</p>
    </div>
  );
};

export default SeriesCard;
