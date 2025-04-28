import { RouteProps } from "./types.ts";
import HomePage from "./pages/HomePage.tsx";
import PhotosPage from "./pages/PhotosPage.tsx";
import APIPage from "./pages/APIPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";

export const routes: RouteProps[] = [
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