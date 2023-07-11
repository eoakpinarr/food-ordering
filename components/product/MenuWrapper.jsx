import Title from "../ui/Title"
import MenuItem from "./MenuItem"

const MenuWrapper = () => {
    return (
        <div className="container mx-auto min-h-[calc(100vh_-_273px)]">
            <div className="flex flex-col items-center w-full">
                <Title addClass={'text-[40px]'}>Our Menu</Title>
                <div className="">
                    <button className="text-white rounded-3xl px-6 py-2 bg-secondary">All</button>
                    <button className="px-6 py-2">Burger</button>
                    <button className="px-6 py-2">Pizza</button>
                    <button className="px-6 py-2">Drink</button>
                </div>
            </div>
            <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </div>
    )
}

export default MenuWrapper