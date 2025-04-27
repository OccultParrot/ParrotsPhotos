import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ReactElement } from "react";

// Layout Elements
import { Footer, Sidebar } from "./component/LayoutElements.tsx";

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";

function App() {
	const Layout = (): ReactElement => {
		return (
			<div className="flex h-screen flex-col">
				<div className="flex h-screen flex-row">
					<Sidebar content={ [
							<p> Home </p>,
							<p> Photos </p>,
							<p> API </p>,
							<p> About </p>
						] } tabPosition="middle"/>
					<main className="grow">
						<Outlet/>
					</main>
				</div>
				{/*<Footer/>*/}
			</div>
		)
	}


	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Layout/> }>
					<Route index element={ <Home/> }/>
					<Route path="about" element={ <About/> }/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
