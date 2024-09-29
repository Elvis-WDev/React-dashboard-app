
interface InfoCardProps {
    title: string;
    description: string;
    icon: JSX.Element;
    helptext: JSX.Element;
    helptextError?: boolean
    className?: string;
}


export const InfoCard = ({ title, description, icon, helptext, helptextError, className }: InfoCardProps) => {


    return (
        <div className={`${className} rounded-lg p-6 bg-white shadow-md dark:bg-gray-900 py-6 px-6`}>
            {/* <!-- Icono --> */}
            <div className="animate__animated animate__bounceIn animate__delay-400ms w-fit p-2 items-start justify-start rounded-full bg-gray-100 dark:bg-gray-800">
                {icon}
            </div>

            {/* <!-- Contenido --> */}
            <div className="mt-4 flex items-end justify-between">
                <div>
                    <h4 className="animate__animated animate__bounceIn animate__delay-400ms text-xl font-bold text-black dark:text-white">
                        {title}
                    </h4>
                    <span className="text-sm font-medium">{description}</span>
                </div>

                <span className={`animate__animated animate__bounceIn animate__delay-400ms flex items-center gap-1 text-sm font-medium ${helptextError ? 'text-red-500' : 'text-emerald-500'}`}>
                    {helptext}
                </span>
            </div>
        </div>
    )
}
