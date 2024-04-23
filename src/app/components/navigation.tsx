import React from "react";

interface NavItemProps {
    text: string;
}

const Item: React.FC<NavItemProps> = ({ text }) => {
    return (
        <li className="text-green-800 p-4">
            {text}
        </li>
    );
};

const Navigation = () => {
    return (
        <header className="mt-[-10vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-6">
                <button className="text-4xl padding-x font-medium text-[#01303A] p-10 w-54">
                    Website
                </button>

                <nav className="hidden sm:flex items-center space-x-10">
                    <ul className="flex justify-center text-dark-green hover:cursor-pointer">
                        <Item text="Начало" />
                        <Item text="За Нас" />
                        <Item text="Услуги" />
                        <Item text="Цени" />
                        <Item text="Как работи" />
                        <Item text="Контакти" />
                    </ul>
                    <div className="ml-auto flex items-end space-x-4">
                        <button className="text-lg text-[#01303A] p-4">Профил</button>
                        <button className="text-lg font-medium border border-2 border-black rounded-md p-3 text-[#01303A]">
                            Заявка за пратка
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;
