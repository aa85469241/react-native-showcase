import { Box, BoxLid, BoxTape_1, BoxTape_2 } from "@/public";
import Image from "next/image";

type DeliveryBoxProps = {
    className?: string;
};

const Delivery_box = ({ className }: DeliveryBoxProps) => {
    return (
        <div
            className={`box relative max-w-[400px] h-auto pt-6 overflow-visible ${className}`}
        >
            <div className="bg-[#4e2e35] w-[400px] h-[20px] rounded-[50%] absolute -bottom-[10px]" />
            <div className="relative w-[400px]">
                <Image
                    src={Box}
                    alt="box"
                    className="w-[336px] h-[160px] m-auto"
                />
                <div className="box-shadow w-[336px] h-[20px] bg-black absolute top-0 left-[32px]" />
            </div>
            <Image
                src={BoxLid}
                alt="lid"
                className="box-lid w-[376px] h-[40px] absolute top-0 left-[12px]"
            />
            <Image
                src={BoxTape_1}
                alt="tape-1"
                className="box-tape-1 w-[40px] h-[64px] absolute top-[15px] left-[84px]"
            />
            <Image
                src={BoxTape_2}
                alt="tape-2"
                className="box-tape-2 w-[40px] h-[64px] absolute top-[15px] right-[84px]"
            />
        </div>
    );
};

export default Delivery_box;
