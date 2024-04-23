import React from 'react'

function ContactForm() {
    return (
        <div className="bg-[#394649] text-center w-screen p-4">
            <div className="w-full px-4 sm:px-6 lg:px-8 p-10">
                <h1 className='text-white font-bold text-4xl md:text-5xl lg:text-6xl py-10'>Готови ли сте да работим заедно?</h1>
                <p className='text-white md:w-3/4 lg:w-5/12 mx-auto'>
                    Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси</p>
                <form className='mt-5'>
                    <input type="text" placeholder='Мобилен Телефон' className='h-12 p-4 border rounded-l ' />
                    <button className='bg-[#E7F874] text-[#083C2F] w-24 h-12 border rounded-r border-none' >
                        Изпрати
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm