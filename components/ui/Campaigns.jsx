import Image from "next/image"
import Title from "./Title"
import { FiShoppingCart } from 'react-icons/fi'

const CampaignItem = () => {
    return (
        <div className="bg-secondary flex-1 rounded-md 
        py-[20px] px-[15px] flex items-center gap-x-4">
            <div className="relative w-36 md:w-44 h-36 md:h-44 after:content-[''] border-[5px]
             border-primary rounded-full overflow-hidden">
                <Image
                    src={"/images/o1.jpg"}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-110 transition-all"
                />
            </div>
            <div className="text-white my-1">
                <Title addClass={'text-2xl'}>Tasty Thursdays</Title>
                <div className="font-dancing">
                    <span className="text-[40px]">%20</span>
                    <span className="text-sm ml-2">Off</span>
                </div>
                <button className="btn-primary flex items-center gap-x-2">
                    Order Now <FiShoppingCart size={20} />
                </button>

            </div>
        </div>
    )
}
const Campaigns = () => {
    return (
        <div className='flex justify-between container 
        gap-6 mx-auto py-20 flex-wrap'>
            <CampaignItem />
            <CampaignItem />
        </div>
    )
}

export default Campaigns