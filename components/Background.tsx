import { SandPaper_backdrop } from "@/public";
import Image from "next/image";

const Background = () => {
    return (
        <div className="fixed inset-0 bg-[--clr-bg] -z-10">
            <Image
                src={SandPaper_backdrop}
                alt="backdrop"
                className="w-full h-full mix-blend-multiply"
            />
        </div>
    );
};

export default Background;
