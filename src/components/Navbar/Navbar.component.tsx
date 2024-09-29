
import { useDispatch } from "react-redux"
import { onLogout } from "../../store"
import { AppDispatch } from "../../store/store"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { Bars3Icon, BellIcon, Bars3CenterLeftIcon, ChatBubbleOvalLeftEllipsisIcon, ChevronDownIcon, UserIcon, Cog8ToothIcon, ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline"
import useDarkMode from "../../hooks/useTheme"
import { ToggleProps } from "../interfaces/interfaces.components"
import userLoggin from "/user.jpg"
import { Link, useNavigate } from "react-router-dom"
import { SwitchDarkMode } from "../"
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid"

interface NavigationItem {
    id: number,
    name: string,
    action?: () => void | ((path: string) => void)
    icon?: React.JSX.Element
}

export const Navbar: React.FC<ToggleProps> = ({ istoggleSidebar, setistoggleSidebar }) => {

    const dispatch = useDispatch<AppDispatch>()

    const navigate = useNavigate()

    const { toggleTheme } = useDarkMode();

    const handleDarkMode = () => {
        toggleTheme();
    };

    const handleExpandSidebar = () => {
        setistoggleSidebar(!istoggleSidebar)
    }

    const handleGoto = (path: string) => {
        navigate(path)
    }

    const handleLogout = () => {
        dispatch(onLogout())
    }

    const userNavigation: NavigationItem[] = [
        { id: 1, name: 'Perfil', action: () => handleGoto('profile'), icon: <UserIcon aria-hidden="true" className="h-6 w-6 mr-2" /> },
        { id: 2, name: 'Configuraciones', action: () => handleGoto('/'), icon: <Cog8ToothIcon aria-hidden="true" className="h-6 w-6 mr-2" /> },
        { id: 3, name: 'Salir', action: handleLogout, icon: <ArrowLeftEndOnRectangleIcon aria-hidden="true" className="h-6 w-6 mr-2" /> },
    ]

    return (
        <>
            <div className="bg-white dark:bg-gray-900 border-b border-inherit border-gray-100 dark:border-gray-800 px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
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
                    <div className="block">
                        <div className="ml-2 flex items-center md:ml-6">

                            <SwitchDarkMode onClick={handleDarkMode} color={'indigo'} LeftIcon={<MoonIcon aria-hidden="true" className="h-5 w-5" />} RightIcon={<SunIcon aria-hidden="true" className="h-5 w-5" />} className="mr-2" />

                            {/* Notifications view */}
                            <Menu as="div" className="relative ml-1">
                                <div>
                                    <MenuButton className="relative rounded-full bg-gray-100 dark:bg-gray-800 p-1 mx-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white focus:outline-none">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon aria-hidden="true" className="h-6 w-6" />
                                        <span className="absolute top-0 right-0 inline-flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 dark:bg-red-600 opacity-75 animate-ping"></span>
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500 dark:bg-red-600"></span>
                                        </span>
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-30 mt-2 w-52 lg:w-70 xl:w-80  origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >

                                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                                        <h5 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Notifications
                                        </h5>
                                    </div>

                                    <ul className="flex-grow overflow-y-auto max-h-64">
                                        <li>
                                            <Link
                                                className="flex flex-col gap-2.5 border-b border-gray-100 dark:border-gray-800 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                                                to="#"
                                            >
                                                <p className="text-sm">
                                                    <span className="text-black dark:text-white">
                                                        Edit your information in a swipe
                                                    </span>{' '}
                                                    Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                                                </p>
                                                <p className="text-xs">12 May, 2025</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="flex flex-col gap-2.5 border-b border-gray-100 dark:border-gray-800 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                                                to="#"
                                            >
                                                <p className="text-sm">
                                                    <span className="text-black dark:text-white">
                                                        Edit your information in a swipe
                                                    </span>{' '}
                                                    Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                                                </p>
                                                <p className="text-xs">12 May, 2025</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="flex flex-col gap-2.5 border-b border-gray-100 dark:border-gray-800 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                                                to="#"
                                            >
                                                <p className="text-sm">
                                                    <span className="text-black dark:text-white">
                                                        Edit your information in a swipe
                                                    </span>{' '}
                                                    Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                                                </p>
                                                <p className="text-xs">12 May, 2025</p>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="flex flex-col gap-2.5 border-b border-gray-100 dark:border-gray-800 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                                                to="#"
                                            >
                                                <p className="text-sm">
                                                    <span className="text-black dark:text-white">
                                                        Edit your information in a swipe
                                                    </span>{' '}
                                                    Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                                                </p>
                                                <p className="text-xs">12 May, 2025</p>
                                            </Link>
                                        </li>

                                    </ul>
                                </MenuItems>
                            </Menu>
                            {/* Messages */}
                            <Menu as="div" className="relative ml-1">
                                <div>
                                    <MenuButton className="relative rounded-full bg-gray-100 dark:bg-gray-800 p-1 mx-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white focus:outline-none">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View Messages</span>
                                        <ChatBubbleOvalLeftEllipsisIcon aria-hidden="true" className="h-6 w-6" />
                                        <span className="absolute top-0 right-0 inline-flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 dark:bg-red-600 opacity-75 animate-ping"></span>
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500 dark:bg-red-600"></span>
                                        </span>
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-30 mt-2 w-52 lg:w-70 xl:w-80 rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                                        <h5 className="text-sm font-medium text-gray-900 dark:text-white">Messages</h5>
                                    </div>

                                    <ul className="max-h-60 overflow-y-auto">
                                        <li>
                                            <Link className="flex gap-4 border-t border-gray-200 dark:border-gray-700 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700" to="/messages">
                                                <div className="h-12 w-12 rounded-full">
                                                    <img src={userLoggin} alt="User" />
                                                </div>
                                                <div>
                                                    <h6 className="text-sm font-medium text-gray-900 dark:text-white">Mariya Desoja</h6>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">I like your confidence 💪</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-500">2min ago</p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="flex gap-4 border-t border-gray-200 dark:border-gray-700 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700" to="/messages">
                                                <div className="h-12 w-12 rounded-full">
                                                    <img src={userLoggin} alt="User" />
                                                </div>
                                                <div>
                                                    <h6 className="text-sm font-medium text-gray-900 dark:text-white">Robert Jhon</h6>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">Can you share your offer?</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-500">10min ago</p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="flex gap-4 border-t border-gray-200 dark:border-gray-700 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700" to="/messages">
                                                <div className="h-12 w-12 rounded-full">
                                                    <img src={userLoggin} alt="User" />
                                                </div>
                                                <div>
                                                    <h6 className="text-sm font-medium text-gray-900 dark:text-white">Mariya Desoja</h6>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">I like your confidence 💪</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-500">2min ago</p>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="flex gap-4 border-t border-gray-200 dark:border-gray-700 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700" to="/messages">
                                                <div className="h-12 w-12 rounded-full">
                                                    <img src={userLoggin} alt="User" />
                                                </div>
                                                <div>
                                                    <h6 className="text-sm font-medium text-gray-900 dark:text-white">Robert Jhon</h6>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">Can you share your offer?</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-500">10min ago</p>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </MenuItems>
                            </Menu>

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-0 lg:ml-1 xl:ml-2">
                                <div>
                                    <MenuButton className="relative flex items-center space-x-2 rounded-full p-2 text-sm focus:outline-none transition">
                                        <span className="hidden text-right lg:block mr-2">
                                            <span className="block text-sm font-medium text-black dark:text-white">
                                                Elvis Macas
                                            </span>
                                            <span className="block text-xs text-gray-500 dark:text-gray-400">Super Admin</span>
                                        </span>

                                        <span className="h-9 w-9 rounded-full overflow-hidden">
                                            <img className="h-full w-full object-cover" src={userLoggin} alt="User" />
                                        </span>

                                        <ChevronDownIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    {userNavigation.map(({ id, name, action, icon }) => (
                                        <MenuItem key={id}>
                                            <button
                                                onClick={action}
                                                className="w-full flex px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                {icon}
                                                {name}
                                            </button>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
