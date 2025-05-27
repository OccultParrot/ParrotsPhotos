import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import {ReactElement} from "react";

// Layout Elements
import {Sidebar} from "./components/LayoutElements.tsx";

// Config
import {RouteProps} from "./types.ts";
import {routes} from "./config.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

function App() {
    const Layout = (): ReactElement => {
        return (
            <div className="flex h-screen flex-col">
                <div className="flex h-screen flex-row">
                    <Sidebar content={routes.map((item: RouteProps) => {
                        return {
                            content: <Link
                                to={item.route}
                                className="text-[var(--text-secondary)] hover:text-[var(--dark)] hover:animate-select transition-colors duration-300"
                                key={item.name}
                            >
                                {item.name}
                            </Link>,
                            autoClose: true
                        }

                    })} tabPosition="top"/>
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
                <Route path="/" element={<Layout/>}>
                    {
                        routes.map((item: RouteProps, index: number) => (
                            <Route path={item.route} element={item.element} index={index === 0}/>
                        ))
                    }
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
