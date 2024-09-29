import { useEffect, useState } from 'react';
import { UserIcon, ChevronDownIcon, ChevronUpIcon, Squares2X2Icon, Bars3Icon, ChartPieIcon, TableCellsIcon, RectangleGroupIcon, Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import { ToggleProps } from '../interfaces/interfaces.components';
import { Link, useNavigate, useLocation } from 'react-router-dom';

type LinkName = 'Dashboard' | 'Profile'
    | 'Forms' | 'Forms elements' | 'Forms Layouts'
    | 'Ui elements' | 'Alerts' | 'Buttons'
    | 'Tables'
    | 'Charts' | null

export const Sidebar: React.FC<ToggleProps> = ({ istoggleSidebar, setistoggleSidebar, mobildevice }) => {
    const [activeLink, setActiveLink] = useState<LinkName>('Dashboard');
    const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({
        forms: false,
        uiElements: false,
    });

    const navigate = useNavigate();

    const location = useLocation();

    const [hoveredLink, setHoveredLink] = useState<LinkName>(null);

    useEffect(() => {
        const savedActiveLink = localStorage.getItem('activeLink') as LinkName;
        if (savedActiveLink) {
            setActiveLink(savedActiveLink);
            navigate(location.pathname)
        }
    }, [location.pathname, navigate]);

    const handleLinkClick = (linkName: LinkName): void => {

        if (linkName) localStorage.setItem('activeLink', linkName);

        setActiveLink(linkName);

        if (mobildevice) {
            setistoggleSidebar(!istoggleSidebar)
        }

        handleMouseLeave()

    };

    const toggleSubmenu = (submenu: string): void => {
        setOpenSubmenus(prev => ({
            ...prev,
            [submenu]: !prev[submenu],
        }));
    };

    const handleMouseEnter = (linkName: LinkName): void => {
        setHoveredLink(linkName);
    };

    const handleMouseLeave = (): void => {
        setHoveredLink(null);
    };

    const handleExpandSidebar = () => {
        setistoggleSidebar(!istoggleSidebar)
    }

    return (
        <>
            <div className="flex items-center justify-between p-4 border-b border-inherit border-gray-100 dark:border-gray-800">
                <div className="flex-grow flex justify-center">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        className="h-8 w-8"
                    />
                </div>
                <div className="flex-shrink-0 lg:hidden xl:hidden ml-4">
                    <button
                        onClick={handleExpandSidebar}
                        type="button"
                        className="relative bg-gray-100 dark:bg-gray-800 p-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white focus:outline-none">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Tema</span>
                        {istoggleSidebar ? (
                            <Bars3CenterLeftIcon aria-hidden="true" className="h-6 w-6" />
                        ) : (
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            <nav className="p-4 flex-1">
                <ul>
                    {/* Dashboard*/}
                    <li>
                        <Link
                            to="/dashboard"
                            className={`flex items-center p-2 rounded-md cursor-pointer transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${!istoggleSidebar && 'justify-center'} ${activeLink === 'Dashboard' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                            onClick={() => handleLinkClick('Dashboard')}
                            onMouseEnter={() => handleMouseEnter('Dashboard')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Squares2X2Icon className="animate__animated animate__jackInTheBox animate__delay-500ms h-6 w-6" />
                            {istoggleSidebar && <span className="ml-4">Dashboard</span>}
                        </Link>
                    </li>

                    {/* Profile*/}
                    <li>
                        <Link
                            to="profile"
                            className={`flex items-center p-2 my-1 rounded-md cursor-pointer transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${!istoggleSidebar && 'justify-center'} ${activeLink === 'Profile' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                            onClick={() => handleLinkClick('Profile')}
                            onMouseEnter={() => handleMouseEnter('Profile')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <UserIcon className="animate__animated animate__jackInTheBox animate__delay-500ms h-6 w-6" />
                            {istoggleSidebar && <span className="ml-4">Profile</span>}
                        </Link>
                    </li>

                    {/* Forms*/}
                    <li
                        className={`relative ${hoveredLink === 'Forms' && !istoggleSidebar ? 'group' : ''}`}
                        onMouseEnter={() => handleMouseEnter('Forms')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            onClick={() => toggleSubmenu('forms')}
                            className={`w-full flex items-center rounded-md ${!istoggleSidebar ? 'justify-center' : 'justify-between'} p-2 my-1 cursor-pointer transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none`}
                        >
                            <div className="flex items-center">
                                <Bars3Icon className="animate__animated animate__jackInTheBox animate__delay-500ms h-6 w-6" />
                                {istoggleSidebar && <span className="ml-4">Forms</span>}
                            </div>
                            {istoggleSidebar && (
                                <span className="ml-2">
                                    {openSubmenus.forms ? (
                                        <ChevronUpIcon className="h-5 w-5" />
                                    ) : (
                                        <ChevronDownIcon className="h-5 w-5" />
                                    )}
                                </span>
                            )}
                        </button>

                        {/* Submenu Links - visible on hover when sidebar is collapsed */}
                        {(istoggleSidebar && openSubmenus.forms) || (!istoggleSidebar && hoveredLink === 'Forms') ? (
                            <ul className={`p-2 top-0 z-10 ${!istoggleSidebar ? 'absolute rounded-md left-full w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700' : 'pl-8'}`}>
                                <li>
                                    <Link
                                        to="forms/elements"
                                        className={`block p-2 rounded-md cursor-pointer transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${activeLink === 'Forms elements' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                                        onClick={() => handleLinkClick('Forms elements')}
                                    >
                                        Forms elements
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="forms/layouts"
                                        className={`block p-2 mt-1 rounded-md cursor-pointer transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${activeLink === 'Forms Layouts' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                                        onClick={() => handleLinkClick('Forms Layouts')}
                                    >
                                        Forms Layouts
                                    </Link>
                                </li>
                            </ul>
                        ) : null}
                    </li>

                    {/* Ui elements*/}
                    <li
                        className={`relative ${hoveredLink === 'Ui elements' && !istoggleSidebar ? 'group' : ''}`}
                        onMouseEnter={() => handleMouseEnter('Ui elements')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            onClick={() => toggleSubmenu('uiElements')}
                            className={`w-full flex items-center rounded-md ${!istoggleSidebar ? 'justify-center' : 'justify-between'} p-2 my-1 cursor-pointer transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none`}
                        >
                            <div className="flex items-center">
                                <RectangleGroupIcon className="animate__animated animate__jackInTheBox animate__delay-500ms h-6 w-6" />
                                {istoggleSidebar && <span className="ml-4">UI elements</span>}
                            </div>
                            {istoggleSidebar && (
                                <span className="ml-2">
                                    {openSubmenus.uiElements ? (
                                        <ChevronUpIcon className="h-5 w-5" />
                                    ) : (
                                        <ChevronDownIcon className="h-5 w-5" />
                                    )}
                                </span>
                            )}
                        </button>

                        {/* Submenu Links - visible on hover when sidebar is collapsed */}
                        {(istoggleSidebar && openSubmenus.uiElements) || (!istoggleSidebar && hoveredLink === 'Ui elements') ? (
                            <ul className={`p-2 top-0 z-10 ${!istoggleSidebar ? 'absolute rounded-md left-full w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700' : 'pl-8'}`}>
                                <li>
                                    <Link
                                        to="ui_elements/alerts"
                                        className={`block p-2 rounded-md cursor-pointer transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${activeLink === 'Alerts' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                                        onClick={() => handleLinkClick('Alerts')}
                                    >
                                        Alerts
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="ui_elements/buttons"
                                        className={`block p-2 mt-1 rounded-md cursor-pointer transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${activeLink === 'Buttons' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                                        onClick={() => handleLinkClick('Buttons')}
                                    >
                                        Buttons
                                    </Link>
                                </li>
                            </ul>
                        ) : null}
                    </li>

                    {/* Tables*/}
                    <li>
                        <Link
                            to="tables"
                            className={`flex items-center p-2 my-1 rounded-md cursor-pointer transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${!istoggleSidebar && 'justify-center'} ${activeLink === 'Tables' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                            onClick={() => handleLinkClick('Tables')}
                            onMouseEnter={() => handleMouseEnter('Tables')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <TableCellsIcon className="animate__animated animate__jackInTheBox animate__delay-500ms h-6 w-6" />
                            {istoggleSidebar && <span className="ml-4">Tables</span>}
                        </Link>
                    </li>

                    {/* Charts*/}
                    <li>
                        <Link
                            to="charts"
                            className={`flex items-center p-2 my-1 rounded-md cursor-pointer transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${!istoggleSidebar && 'justify-center'} ${activeLink === 'Charts' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                            onClick={() => handleLinkClick('Charts')}
                            onMouseEnter={() => handleMouseEnter('Charts')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <ChartPieIcon className="animate__animated animate__jackInTheBox animate__delay-500ms h-6 w-6" />
                            {istoggleSidebar && <span className="ml-4">Charts</span>}
                        </Link>
                    </li>
                </ul >
            </nav >
        </>
    );
};

