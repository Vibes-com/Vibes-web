import Image from "next/image";
import { ArrowUpIcon } from "lucide-react";
import { Button3 } from "@/components/ui/button3";

interface SingleCardProps {
    id: number;
    img: string;
    title: string;
    tags: string[];
    buttonText?: string;
}
interface CaseStudiesCardProps {
    data: SingleCardProps[];
}
export default function CaseStudiesCard({ data }: CaseStudiesCardProps) {
    return (

        data.map((item: SingleCardProps, index: number) => (
            <div key={item.id} className="bg-white mb-[100px] rounded-2xl p-1 shadow-[0_8px_30px_rgba(0,0,0,0.06)] w-full " >

                {/* Image */}
                < div className="relative w-full h-[450px] rounded-xl overflow-hidden group " >
                    <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-fill transition-all duration-[900ms] ease-out group-hover:scale-110 group-hover:opacity-90"
                    />
                </div>

                {/* Title */}
                < h3 className="mt-5 text-[#1F1F1F] font-poppins font-semibold text-[24px] leading-[100%]" >
                    {item.title}
                </h3 >

                {/* Tags + Button */}
                < div className="flex items-center gap-3 mt-4 justify-between" >

                    {/* Tags */}
                    < div className="flex gap-3" >
                        {
                            item.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-[#F2F4F7] text-[10px] rounded-full"
                                >
                                    {tag}
                                </span>
                            ))
                        }
                    </div >

                    {/* Button */}
                    < Button3 className="text-[#204667] p-[5px] flex items-center gap-2 hover:text-[#F4BE00]" >
                        <span>{item.buttonText}</span>
                        <ArrowUpIcon className="transform rotate-45" />
                    </Button3 >
                </div >
            </div >
        ))
    );
}
