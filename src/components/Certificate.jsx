import React from "react";
import certi from "../assets/image/certi.jpg";

const Certificate = () => {
    return (
        <div className="w-full bg-black py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center gap-8">
                <img
                    src={certi}
                    alt="Certificate"
                    className="w-[500px] mx-auto my-4 h-auto rounded-lg shadow-lg"
                />
                <div className="text-gray-300 flex flex-col justify-center">
                    <p className="text-3xl font-bold text-[#00df9a] mb-4">Сертификат</p>
                    <p className="text-lg mb-4 leading-relaxed">
                        Фенстер Монгол ХХК нь 2015 оноос хойш монголын хамгийн том хаалга, цонх, хаалга, хаалт
                        болон хаалгын аксессуарын бүтээгдэхүүн үйлдвэрлэж байна.
                    </p>
                    <button className="bg-[#00df9a] text-white my-6  mx-auto w-[200px] py-3 hover:bg-[#49dfb2ef] rounded-md font-bold">...</button>
                </div>
            </div>
        </div>
    );
};

export default Certificate;
