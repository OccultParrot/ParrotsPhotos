import { ChevronRight, VerticalAlignBottom, VerticalAlignCenter, VerticalAlignTop } from '@mui/icons-material';
import { ReactNode, useState } from 'react';
import { Link } from "react-router-dom";
import { SidebarProps } from "../types.ts";

export function Sidebar( props: SidebarProps ) {

	const tabPosButtonClasses: string = "rounded-md p-2 cursor-pointer bg-[var(--light)] hover:bg-[var(--text-secondary)] transition duration-400";

	const translatePosition = ( position: string | null ): string => {
		if (position == 'middle')
			return 'top-1/2 -translate-y-1/2';
		else if (position == 'bottom')
			return 'top-full -translate-y-[150%]';
		else
			return 'top-0 translate-y-1/2';
	}

	const [open, setOpen] = useState(props.defaultOpen ?? false);

	const [sidebarTabPosition, setSidebarTabPosition] = useState(translatePosition(props.tabPosition));

	// Function to render the content of the sidebar
	const sidebarListContent = ( content: ReactNode, index: number, autoClose: boolean = true ) => {
		return (
			<li className="mt-2" key={ index } onClick={ autoClose ? () => setOpen(false) : undefined }>
				{ content }
			</li>
		);
	}


	return (
		<>
			{/* Overlay that darkens the rest of the screen when sidebar is open */ }
			<div
				className={ `fixed inset-0 bg-yellow-950 ${ open ? "opacity-20 z-40" : "opacity-0 z-0 pointer-events-none" } transition-all duration-800` }
				onClick={ () => setOpen(false) }
			/>

			{/* Sidebar content */ }
			<div
				className={ `fixed left-0 top-0 h-full bg-[var(--primary)] shadow-lg z-50 transition-all duration-800 ease-in-out ${
					open ? 'w-64 translate-x-0' : 'w-64 -translate-x-full'
				}` }
			>
				<div className="p-4 flex flex-col h-full justify-between">
					<div>
						<h2 className="text-[var(--text-primary)]  text-xl font-bold mb-4">Sidebar</h2>
						<ul>
							{ props.content?.map(( item, index ) => (
								sidebarListContent(item.content, index)
							)) }
						</ul>
					</div>

					<div>
						<div className="mt4 text-[var(--text-secondary)] flex flex-col items-center text-sm">
							<p>Made by <Link className="font-semibold text-[var(--text-primary)]" target="_blank"
							                 rel="noopener noreferrer" to="https://github.com/OccultParrot">OccultParrot</Link></p>
							<Link to="https://github.com/OccultParrot/ParrotsPhotos" target="_blank" rel="noopener noreferrer"
							      className="text-[var(--text-secondary)] italic"> Source Code</Link>
						</div>

						{/* Buttons for changing sidebar position */ }
						<ul className={ `${ props.tabOptions ? "" : "hidden" } mt-4 flex flex-row justify-between` }>
							{ sidebarListContent(
								<button className={ tabPosButtonClasses }
								        onClick={ () => setSidebarTabPosition('top') }><VerticalAlignTop/></button>,
								0, false) }
							{ sidebarListContent(
								<button className={ tabPosButtonClasses }
								        onClick={ () => setSidebarTabPosition('middle') }><VerticalAlignCenter/>
								</button>,
								1, false) }
							{ sidebarListContent(
								<button className={ tabPosButtonClasses }
								        onClick={ () => setSidebarTabPosition('bottom') }><VerticalAlignBottom/>
								</button>,
								2, false) }
						</ul>
					</div>
				</div>
			</div>

			{/* Sidebar toggle button that follows the sidebar */ }
			<div
				className={ `fixed ${ translatePosition(sidebarTabPosition) } z-50 transition-all duration-800 ${
					open ? 'left-64' : 'left-0'
				}` }
			>
				<div
					className="bg-[var(--light)] hover:bg-[var(--text-secondary)] transition duration-300 p-2 rounded-r-md cursor-pointer shadow-md"
					onClick={ () => setOpen(!open) }
				>
					<ChevronRight
						className="transition-all duration-300"
						sx={ {
							transform: open ? "rotate(0deg)" : "rotate(180deg)",
							transition: "transform 300ms"
						} }
					/>
				</div>
			</div>
		</>
	);
}

export function Footer() {
	return (
		<>
			temp
		</>
	)
}