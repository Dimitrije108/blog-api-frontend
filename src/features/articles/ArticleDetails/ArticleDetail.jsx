import { useLoaderData } from "react-router-dom";
import ErrorMessage from "../../../components/ErrorMessage";
import formatDate from "../../../utils/formatDate";

// TODO:
// - Position all elements properly

export default function ArticleDetail() {
	const { data, error } = useLoaderData();
	const content = { __html: data.content };

	return (
		<div className="flex justify-center items-center">
			{error && <ErrorMessage error={error} />}
			<article className="tinymce-content max-w-[70ch]">
				<h1 className="self-center">{data.title}</h1>
				{!data.published && <p className="text-xl text-red-400">Unpublished</p>}
				<div className="w-full flex justify-between items-end">
					<p className="mt-2 font-['Aulieny'] text-2xl self-start">By {data.user.username}</p>
					<div className="flex flex-col text-sm">
						<span>Category: {data.category.name}</span>
						<span>{formatDate(data.createdAt)}</span>
					</div>
				</div>
				<hr className="mt-0" />
				<section dangerouslySetInnerHTML={content}></section>
			</article>
		</div>
	);
};
