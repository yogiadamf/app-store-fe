import React from "react";
import Content from "../../components/navigation/Content";
import DocumentTitle from "../../hooks/DocumentTitle";

const Gaming = () => {
  DocumentTitle("Gaming");
  return (
    <Content>
      <div className="card">Gaming</div>
    </Content>
  );
};

export default Gaming;
