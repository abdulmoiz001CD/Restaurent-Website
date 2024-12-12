// import React from 'react'
// import "./style.css"



// const Navbar = ({filterItemEl,menuListEl}) => {
//   return (
//     <>
//       <nav className= "navbar">
//       <div className= "btn-group">
//         {
//           menuListEl.map((cur)=> {
//             return(
//             <button className= "btn-group_item" onClick={()=> filterItemEl(cur)}>{cur}</button>
//           )
//           })
//         }
      
//       </div>
//      </nav>
//     </>
//   )
// }

// export default Navbar

import React from 'react';

interface NavbarProps {
    filterItemEl: (category: string) => void;
    menuListEl: string[];
}

const Navbar: React.FC<NavbarProps> = ({ filterItemEl, menuListEl }) => {
    return (
        <nav className="navbar">
            <div className="btn-group">
                {menuListEl.map((cur, index) => (
                    <button
                        key={index}
                        className="btn-group_item"
                        onClick={() => filterItemEl(cur)}
                    >
                        {cur}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
