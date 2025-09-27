// import ProtectedRoute from "../layouts/ProtectedRoute";
import Layout from "../layouts/Layout";
import ErrorPage from "../components/ErrorPage";

// Auth feature
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import redirectIfAuthenticated from "../features/auth/redirectIfAuthenticated";
// Homepage feature
import Homepage from "../features/Homepage";
// Article list feature
import ArticleList from "../features/articles/ArticleList/ArticleList";
import articleListLoader from "../features/articles/ArticleList/articleListLoader";
// Article detail view feature
import ArticleDetail from "../features/articles/ArticleDetails/ArticleDetail";
import articleLoader from "../features/articles/ArticleDetails/articleLoader";
// Categories feature
import Categories from "../features/Categories";
// import categoriesLoader from "../features/categories/categoriesLoader";

// ProtectedRoute component is for loading UI
// authLoader stops loaders from executing if auth fails
// because loader fetches before the component is rendered

const routes = [
	{
		path: "/",
		Component: Layout,
		ErrorBoundary: ErrorPage,
		children: [
			{
				index: true,
				Component: Homepage,
			},
			{
				path: "articles", 
				Component: ArticleList,
				loader: articleListLoader,
			},
			{
				path: "articles/:articleId", 
				Component: ArticleDetail,
				loader: articleLoader,
			},
			{
				path: "categories",
				Component: Categories,
				// loader: preFetchAuth(categoriesLoader),
			},
			{
				path: "categories/:categoryId",
				// Component: CategoryDetail,
				// loader: preFetchAuth(categoriesLoader),
			},
		]
	},
	{
		path: "/auth",
		ErrorBoundary: ErrorPage,
		children: [
			{
				path: "login",
				Component: Login,
				loader: redirectIfAuthenticated,
			},
			{
				path: "register",
				Component: Register,
				loader: redirectIfAuthenticated,
			},
		]
	},
];

export default routes;
