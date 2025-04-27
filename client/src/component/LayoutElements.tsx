import { ChevronRight, VerticalAlignBottom, VerticalAlignCenter, VerticalAlignTop } from '@mui/icons-material';
import { ReactNode, useState } from 'react';

interface SidebarProps {
	defaultOpen?: boolean;
	content?: ReactNode[];
	tabPosition: 'top' | 'middle' | 'bottom';
}

export function Sidebar( props: SidebarProps ) {
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
	const sidebarListContent = ( content: ReactNode, index: number ) => {
		return (
			<li className="mt-2" key={ index }>
				{ content }
			</li>
		);
	}


	return (
		<>
			{/* Overlay that darkens the rest of the screen when sidebar is open */ }
			<div
				className={ `fixed inset-0 bg-black ${ open ? "opacity-20 z-40" : "opacity-0 z-0 pointer-events-none" } transition-all duration-300` }
				onClick={ () => setOpen(false) }
			/>

			{/* Sidebar content */ }
			<div
				className={ `fixed left-0 top-0 h-full bg-white shadow-lg z-50 transition-all duration-800 ease-in-out ${
					open ? 'w-64 translate-x-0' : 'w-64 -translate-x-full'
				}` }
			>
				<div className="p-4 flex flex-col h-full justify-between">
					<div>
						<h2 className="text-xl font-bold mb-4">Sidebar</h2>
						<ul>
							{ props.content?.map(( item, index ) => (
								sidebarListContent(item, index)
							)) }
						</ul>
					</div>

					{/* Buttons for changing sidebar position */ }
					<ul className="mt-4 flex flex-row justify-between">
						{ sidebarListContent(
							<button className="rounded-md p-2 cursor-pointer bg-gray-200 hover:bg-gray-300 transition duration-400"
							        onClick={ () => setSidebarTabPosition('top') }><VerticalAlignTop/></button>,
							0) }
						{ sidebarListContent(
							<button className="rounded-md p-2 cursor-pointer bg-gray-200 hover:bg-gray-300 transition duration-400"
							        onClick={ () => setSidebarTabPosition('middle') }><VerticalAlignCenter/>
							</button>,
							1) }
						{ sidebarListContent(
							<button className="rounded-md p-2 cursor-pointer bg-gray-200 hover:bg-gray-300 transition duration-400"
							        onClick={ () => setSidebarTabPosition('bottom') }><VerticalAlignBottom/>
							</button>,
							2) }
					</ul>
				</div>
			</div>

			{/* Sidebar toggle button that follows the sidebar */ }
			<div
				className={ `fixed ${ translatePosition(sidebarTabPosition) } z-50 transition-all duration-800 ${
					open ? 'left-64' : 'left-0'
				}` }
			>
				<div
					className="bg-gray-200 p-2 rounded-r-md cursor-pointer shadow-md"
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