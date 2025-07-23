import { useNavigate } from "react-router-dom";
import formatDate from "../../../utils/formatDate";

export default function ArticleListItem({
	article,
}) {
  const navigate = useNavigate();

  return (
		<article 
			className="cursor-pointer"
			onClick={() => navigate(`/articles/${article.id}`)}
		>
			<h2>{article.title}</h2>
			<p>Category: {article.category.name}</p>
			<p>Written by: {article.user.username}</p>
			<p>Created: {formatDate(article.createdAt)}</p>
		</article>
  )
};
