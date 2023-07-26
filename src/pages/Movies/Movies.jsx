import React from "react";
import DocumentTitle from "../../hooks/DocumentTitle";
import Content from "../../components/navigation/Content";

const Movies = () => {
  DocumentTitle("Movies");
  return (
    <Content>
      <div className="card">Movies</div>
    </Content>
  );
};

export default Movies;
