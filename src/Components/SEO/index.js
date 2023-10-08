import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = (props) => {
  const { title, description, keyWords } = props;

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="keywords" content={keyWords} />
      <title>{title}</title>
    </Helmet>
  );
};

export default SEO;
