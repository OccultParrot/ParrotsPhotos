import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { ReactElement } from "react";

// Layout Elements
import { Sidebar } from "./component/LayoutElements.tsx";

import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import APIPage from "./pages/APIPage.tsx";
import PhotosPage from "./pages/PhotosPage.tsx";

interface RouteProps {
	name: string;
	route: string;
	element: ReactElement;
}

const routes: RouteProps[] = [
	{
		name: 'Home',
		route: '/',
		element: <HomePage/>
	},
	{
		name: 'Photos',
		route: '/photos',
		element: <PhotosPage/>
	},
	{
		name: 'API',
		route: '/api',
		element: <APIPage/>
	},
	{
		name: 'About',
		route: '/about',
		element: <AboutPage/>
	}
]

function App() {
	const Layout = (): ReactElement => {
		return (
			<div className="flex h-screen flex-col">
				<div className="flex h-screen flex-row">
					<Sidebar content={ routes.map(( item: RouteProps ) => {
						return (
							<Link
								to={ item.route }
								className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
								key={ item.name }
							>
								{ item.name }
							</Link>
						)
					}) } tabPosition="top" tabOptions/>
					<main className="grow">
						<Outlet/>
					</main>
				</div>
				{/*<Footer/>*/ }
			</div>
		)
	}


	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Layout/> }>
					{
						routes.map(( item: RouteProps, index: number ) => (
							<Route path={ item.route } element={ item.element } index={ index === 0 }/>
						))
					}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
