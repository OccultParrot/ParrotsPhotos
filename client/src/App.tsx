import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import {ReactElement} from "react";
import Home from "./pages/Home.tsx";



function App() {
	const Layout = () => {
		return (
			<>
				<main className="grow bg-white">
					<Outlet />
				</main>
			</>
		)
	}


	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
