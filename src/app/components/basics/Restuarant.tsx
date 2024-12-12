// import React, {useState} from 'react';
// import "./style.css";
// import Menu from "./MenuApi.js";
// import MenuCard from "./MenuCard.jsx";
// import Navbar from './navbar.jsx';



// const UniqueList = [...new Set(
//   Menu.map((cur)=> {
// return cur.category
//   })
// )] 

// console.log(UniqueList);


// const Restuarent = () => {
//   const [menuData, setmenuData] = useState(Menu)
//   const [menuList, SetMenuList] = useState(UniqueList)
  
//   const filterItem = (curElem) => {
//     if(curElem === "All"){
//       return setmenuData(Menu);
//     }
    
//    const upDateElm = Menu.filter((cur) =>{
//     return cur.category === curElem;

//    });
 
//   setmenuData(upDateElm);

//   }

//   return(
//    <>
//     <Navbar filterItemEl ={filterItem} menuListEl ={menuList}/>
//     <MenuCard menuDataEl={menuData}/>
//     </>
//     )
// }

// export default Restuarent
'use client'
import React, { useState } from 'react';
import Menu from "@/app/components/basics/MenuApi";  // Adjust path as needed
import MenuCard from "./MenuCard";
import Navbar from '@/app/components/basics/navbar';
import { MenuItem } from '@/app/components/basics/MenuItem'




const UniqueList = ["All"].concat(Array.from(new Set(Menu.map((cur) => cur.category))));


const Restaurant: React.FC = () => {
    const [menuData, setMenuData] = useState<MenuItem[]>(Menu);
    const [menuList] = useState<string[]>(UniqueList);

    const filterItem = (curElem: string) => {
        if (curElem === "All") {
            setMenuData(Menu);
            return;
        }

        const updatedElm = Menu.filter((cur) => cur.category === curElem);
        setMenuData(updatedElm);
    };

    return (
        <>
            <Navbar filterItemEl={filterItem} menuListEl={menuList} />
            <MenuCard menuDataEl={menuData} />
        </>
    );
};

export default Restaurant;
