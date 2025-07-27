// Auth checks
// import { checkUserLoader } from "../loaders/loaders";

// import ProtectedRoute from "../layouts/ProtectedRoute";
import Layout from "../layouts/Layout";
import ErrorPage from "../components/ErrorPage";

// Auth feature
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
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
// import categororiesAction from "../features/categories/categoriesAction";
// Category articles feature
// import ArticleDetail from "../features/articles/ArticleDetails/ArticleDetail";
// import articleLoader from "../features/articles/ArticleDetails/articleLoader";

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
				// loader: preFetchAuth(dashboardLoader),
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
				// action: preFetchAuth(categororiesAction),
			},
			{
				path: "categories/:categoryId",
				// Component: CategoryDetail,
				// loader: preFetchAuth(categoriesLoader),
				// action: preFetchAuth(categororiesAction),
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
				// loader: checkUserLoader,
			},
			{
				path: "register",
				Component: Register,
				// loader: checkUserLoader,
			},
		]
	},
];

export default routes;
