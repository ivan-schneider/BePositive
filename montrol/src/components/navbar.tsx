
"use client";
import { useState } from "react";
import { Chart, Month, Settings, History, Anual, Transaction } from "./icons";
import Link from "next/link";

interface NavbarInterface {
    onNavigate: (id: number) => void;
}

export default function Navbar({onNavigate} : NavbarInterface){
    
    const [active, setActive] = useState<number>(4)

const menus = [{
        titulo: 'Config', icon: <Settings/>
    },
    {
        titulo: 'Yearly', icon: <Anual/>
    },
    {
        titulo: 'Monthly', icon: <Chart />
    },
    {
        titulo: 'Calendar', icon: <Month />
    },
    {
        titulo: 'History', icon: <History className="rotate-90"/>
    },
    {
        titulo: 'New', icon: <Transaction />
    }
]
    
    return (

        <div className=" bg-custom5 rounded-full mx-2 w-full">
            <ul className="flex relative w-full items-center justify-around">
            {menus.map((menu, i)=>(
                <li key={i} className="list-none">
                    <a className= {`cursor-pointer flex flex-col pt-4 `} onClick={()=>{
                            setActive(i);
                            onNavigate(i);
                            }}>
                        <span className={`text-2xl flex justify-center duration-500 ${i === active 
                            ? '-mt-4 text-white'
                            : 'text-custom2'
                        }`}>
                            {menu.icon}
                        </span>
                        <span className={`font-bold text-xs ${active === i 
                                        ? "translate-y-1 duration-500 opacity-100 text-white" 
                                        : "translate-y-10 opacity-0"
                                    }`}
                                    >{menu.titulo}</span>
                    </a>
                </li>
            ))}
            </ul>
        </div>

    );
}