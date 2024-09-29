import { Outlet } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Navbar, Sidebar } from "../../../components";
import { useState, useEffect } from "react";

export const DashboardLayout = () => {
    const [istoggleSidebar, setistoggleSidebar] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    // Detectar si es móvil y ajustar la visibilidad del sidebar
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth <= 768) {
                setistoggleSidebar(false); // Ocultar sidebar en dispositivos móviles
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                {/* SIDEBAR */}
                <aside
                    className={`${isMobile
                        ? istoggleSidebar
                            ? "fixed left-0 w-64 h-screen overflow-y-auto transform translate-x-0 transition-transform duration-1000 ease-in-out"
                            : "fixed -translate-x-full w-64 h-screen transition-transform duration-100 ease-in"
                        : `flex ${istoggleSidebar ? "w-64" : "w-20"} h-auto duration-300`
                        } bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex-col z-50`}
                >
                    <Sidebar istoggleSidebar={istoggleSidebar} setistoggleSidebar={setistoggleSidebar} mobildevice={isMobile} />
                </aside>

                {/* MAIN CONTENT */}
                <main className="flex-1 overflow-auto">
                    {/* NAVBAR */}
                    <Disclosure as="nav" className="bg-gray-800 w-full z-10">
                        <Navbar setistoggleSidebar={setistoggleSidebar} istoggleSidebar={istoggleSidebar} mobildevice />
                    </Disclosure>
                    <section className="m-4">
                        <Outlet />
                    </section>
                </main>
            </div>
        </div>
    );
};
