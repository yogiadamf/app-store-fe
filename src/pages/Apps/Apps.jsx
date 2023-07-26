import React from "react";
import Content from "../../components/navigation/Content";
import DocumentTitle from "../../hooks/DocumentTitle";

const Apps = () => {
  DocumentTitle("Apps");
  return (
    <Content>
      <div className="card">Apps</div>
    </Content>
  );
};

export default Apps;
