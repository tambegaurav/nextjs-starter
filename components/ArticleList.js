import React from "react";
import articleStyles from "../styles/Article.module.css";
import Article from "./Article";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
