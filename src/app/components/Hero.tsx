import React from 'react'
import containers from "../../../public/containers.jpg";
import manCarringSomething from "../../../public/manCariingSomething.jpg";
import containersOnShip from "../../../public/containersOnShip.jpg";
import Image from "next/image";

function Hero() {
    return (
        <div className="p-10">
            <h2 className="text-[#01303A] w-2/4 ml-6 text-3xl ml-[3rem] font-medium">Други Услуги</h2>
            <div className="flex flex-wrap justify-center md:flex-nowrap">
                <div className="p-2 sm:p-10">
                    <Image src={containers} alt="Image 1" className="w-full max-w-xs sm:max-w-none" layout="responsive" width={492} height={558} />
                </div>
                <div className="p-2 sm:p-10">
                    <Image src={manCarringSomething} alt="Image 2" className="w-full max-w-xs sm:max-w-none" layout="responsive" width={492} height={558} />
                </div>
                <div className="p-2 sm:p-10">
                    <Image src={containersOnShip} alt="Image 3" className="w-full max-w-xs sm:max-w-none" layout="responsive" width={492} height={558} />
                </div>
            </div>
        </div>
    )
}

export default Hero