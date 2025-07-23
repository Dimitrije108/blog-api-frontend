import { useLoaderData } from "react-router-dom";
import ErrorMessage from "../../../components/ErrorMessage";
import ArticleListItem from "../components/ArticleListItem";

// TODO:
// - Clicking on author displays user page with all of their articles listed

export default function ArticleList() {
  const { data, error } = useLoaderData();

  console.log(data);

  return (
    <>
      <h1>Articles</h1>
      {error && <ErrorMessage error={error} />}
      {data && data.map((article) => (
        <ArticleListItem
          key={article.id}
          article={article}
        />
      ))}
    </>
  )
};
