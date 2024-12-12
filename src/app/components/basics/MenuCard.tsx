// import React from 'react'

// function MenuCard({menuDataEl}) {
 
//   return (
//     <>
//     <section className='main-card--cointainer'>

//     {menuDataEl.map((menuElm)=>{
   
//    return(
//     <>
//     <div className='card-container' key={menuElm.id}>
//     <div className='card'>
//        <div className='card-body'>
//         <span className='card-number card-circle subtle'>{menuElm.id}</span>
//             <span className='card-author subtle' style={{color:"red"}}>{menuElm.category}</span>
//                <h2 className='card-title'>{menuElm.name}</h2>
//                <span className='card-description subtle'>
//                {menuElm.description}
//                </span>
//                <div className='card-read'></div>
//        </div>

//        <img src={menuElm.image} alt="" className='card-media'/>
//        <div className='card-tag subtle'>Order Now</div>
     
//     </div>
//   </div>
  
//   </>
//    )

//     })}

//     </section>
 
//     </>
//   )
// }

// export default MenuCard
import React from 'react';
import Image from 'next/image';
import { MenuItem } from '@/app/components/basics/MenuItem'

interface MenuCardProps {
    menuDataEl: MenuItem[];
}

const MenuCard: React.FC<MenuCardProps> = ({ menuDataEl }) => {
    return (
        <section className="main-card--cointainer">
            {menuDataEl.map((menuElm) => (
                <div className="card-container" key={menuElm.id}>
                    <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle subtle">
                                {menuElm.id}
                            </span>
                            <span 
                                className="card-author subtle" 
                                style={{ color: "red" }}
                            >
                                {menuElm.category}
                            </span>
                            <h2 className="card-title">{menuElm.name}</h2>
                            <span className="card-description subtle">
                                {menuElm.description}
                            </span>
                            <div className="card-read"></div>
                        </div>

                        {/* <div className="relative w-full h-48">
                            <Image
                                src={menuElm.image}
                                alt={menuElm.name}
                                fill
                                className="object-cover card-media"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                         */}

<div style={{ position: "relative", width: "100%", height: "300px" }}>
        <Image
       src={menuElm.image}
       alt={menuElm.name}
          layout="fill"
          objectFit="cover"
        />
      </div>


                        
                        <div className="card-tag subtle">Order Now</div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default MenuCard;
