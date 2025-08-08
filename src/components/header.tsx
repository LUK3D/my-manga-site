import { Link } from "@tanstack/react-router";

export default function HeaderComponent() {
    return (
        <div className="w-full  text-gray-300 bg-gray-950/95  flex flex-col  items-center p-4 fixed top-0 right-0 z-30">
            <div className="max-w-[1200px] flex justify-between items-center w-full">
                <div className="flex items-center space-x-8">
                    <Link to={"/"} className="font-bold outfit-bold ">NOX</Link>
                    <Link to={"/about"} className="">Sobre nós</Link>
                    <Link to={"."} className="">Mangás</Link>
                    <Link to={"."} className="">Blog</Link>
                </div>
            </div>
        </div>
    )
}
