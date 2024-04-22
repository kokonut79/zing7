import React from "react";

interface NavItemProps {
    text: string;
}

const Item: React.FC<NavItemProps> = ({ text }) => {
    return (
        <li className="text-green-800">
            {text}
        </li>
    );
};

const Navigation = () => {
    return (
        <header className="mt-[-10vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-6">
                <button className="text-4xl padding-x font-medium text-[#01303A] p-10 w-54 fixed left-0">
                    Website
                </button>

                <nav className="hidden sm:block">
                    <ul className="flex justify-center space-x-10 text-dark-green p-4 hover: cursor-pointer">
                        <Item text="Начало" />
                        <Item text="За Нас" />
                        <Item text="Услуги" />
                        <Item text="Цени" />
                        <Item text="Как работи" />
                        <Item text="Контакти" />
                    </ul>
                    <div className="flex items-center space-x-4 fixed right-0 mr-5 mt-[-3.5rem]">
                        <button className="text-lg text-[#01303A] p-5">Профил</button>
                        <button className="text-lg font-medium border border-2 border-black rounded-md p-4 text-[#01303A]">
                            Заявка за пратка
                        </button>
                    </div>
                </nav>

                <div className="sm:hidden flex items-center space-x-4 fixed right-0 mr-5">
                    {/* The button inside this div is missing its content */}
                    <button className="text-lg font-medium p-4 text-dark-blue">
                        {/* Add content for the button */}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navigation;
