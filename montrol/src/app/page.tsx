"use client";
import Navbar from "@/components/navbar";
import Calendar from "./pages/calendar";
import Monthly from "./pages/monthly";
import Settings from "./pages/settings";
import Yearly from "./pages/yearly";
import NewMove from "./pages/newTransaction";
import History from "./pages/history";
import { useState } from "react";

const pages = [{
  id: 0, page: <Settings/>
},
{
  id: 1, page: <Yearly/>
},
{
  id: 2, page: <Monthly/>
},
{
  id: 3, page: <Calendar/>
},
{
  id: 4, page: <History/>
},
{
  id: 5, page: <NewMove/>
}
]

export default function Home() {
  const [currentPageId, setCurrentPageId] = useState<number>(4)

  const handleNavigation = (id:number)=>{
    setCurrentPageId(id);
  }

  const pageToRender = (pageId:number)=>{

    const page = pages.find((p)=> p.id === pageId);

    return page ? page.page : null;
  }

  return (
    <div className="w-full h-full" >
      <div className="bg-custom1 flex h-[92vh]">
        {pageToRender(currentPageId)}
      </div>
      <div className="bg-custom1 h-[8vh] flex justify-center items-center">
          <Navbar onNavigate={handleNavigation}/>
      </div>
    </div>
  );
}
