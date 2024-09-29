import { Link } from "react-router-dom";

export interface Chat {
    avatar: string;
    name: string;
    text: string;
    time: number;
    textCount: number;
    color: string;
};


const chatData: Chat[] = [
    {
        avatar: './users/user-05.png',
        name: 'Devid Heilo',
        text: 'How are you?',
        time: 12,
        textCount: 3,
        color: '#10B981',
    },
    {
        avatar: './users/user-03.png',
        name: 'Henry Fisher',
        text: 'Waiting for you!',
        time: 12,
        textCount: 0,
        color: '#DC3545',
    },
    {
        avatar: './users/user-08.png',
        name: 'Jhon Doe',
        text: "What's up?",
        time: 32,
        textCount: 0,
        color: '#10B981',
    },
    {
        avatar: './users/user-09.png',
        name: 'Jane Doe',
        text: 'Great',
        time: 32,
        textCount: 2,
        color: '#FFBA00',
    },
    {
        avatar: './users/user-05.png',
        name: 'Jhon Doe',
        text: 'How are you?',
        time: 32,
        textCount: 0,
        color: '#10B981',
    },
    {
        avatar: './users/user-07.png',
        name: 'Jhon Doe',
        text: 'How are you?',
        time: 32,
        textCount: 3,
        color: '#FFBA00',
    },
];


export const ChatUsers = () => {
    return (

        <>

            <h4 className="mb-6 px-6 text-xl font-semibold text-black dark:text-white">
                Chats
            </h4>

            <div>
                {chatData.map((chat, key) => (
                    <Link
                        to="/"
                        className="flex items-center gap-5 py-3 px-6 hover:bg-gray-100 dark:hover:bg-gray-800"
                        key={key}
                    >
                        <div className="relative h-14 w-14 rounded-full">
                            <img src={chat.avatar} alt="User" />
                            <span
                                className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 bg-white dark:bg-gray-900"
                                style={{ backgroundColor: chat.color }}
                            ></span>
                        </div>

                        <div className="flex flex-1 items-center justify-between">
                            <div>
                                <h5 className="font-medium text-black dark:text-white">
                                    {chat.name}
                                </h5>
                                <p>
                                    <span className="text-sm text-black dark:text-white">
                                        {chat.text}
                                    </span>
                                    <span className="text-xs"> . {chat.time} min</span>
                                </p>
                            </div>
                            {chat.textCount !== 0 && (
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-700">
                                    <span className="text-sm font-medium text-white">
                                        {' '}
                                        {chat.textCount}
                                    </span>
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>

        </>
    )
}
