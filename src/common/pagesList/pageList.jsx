
import { BsHouseDoorFill, BsFillInfoCircleFill, BsFillTelephoneFill } from "react-icons/bs";
import { GiLeatherBoot } from "react-icons/gi";

export const pageList = [
    {
        path: "/",
        name: "Home",
        icon: <BsHouseDoorFill />
    },
    {
        path: "/product",
        name: "Product",
        icon: <GiLeatherBoot />
    },
    {
        path: "/about",
        name: "About us",
        icon: <BsFillInfoCircleFill />
    },
    {
        path: "/contact",
        name: "Contact",
        icon: <BsFillTelephoneFill />
    },

]