import { ReactElement, ReactNode } from "react";

export interface SidebarProps {
	defaultOpen?: boolean;
	content?: SidebarContentProps[];
	tabOptions?: boolean;
	tabPosition: 'top' | 'middle' | 'bottom';
}

export interface SidebarContentProps {
	content: ReactNode;
	autoClose?: boolean;
}

export interface RouteProps {
	name: string;
	route: string;
	element: ReactElement;
}