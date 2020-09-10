import React from "react";
import EachFeed from "./EachFeed";

const NewsFeed = () => {
  return (
    <div className="feed-container">
      <h3 className="title mt-2">News Feed</h3>
      <EachFeed title="centralise" date="Oct 27, 2019" name="Jack" bgClr="#405aa6" />
      <EachFeed title="optimise" date="Oct 22, 2019" name="Benjamin" bgClr="#c98405" />
      <EachFeed title="track" date="Oct 20, 2019" name="Vincent" bgClr="#9dd7e0" />
    </div>
  );
};

export default NewsFeed;
