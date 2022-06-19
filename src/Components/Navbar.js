import React from "react";

function Navbar({unique, filter}){

    return(

        <>
         <nav className="navbar">
        <div className="btn-group">
          {unique.map((curElem) => {
            return (
              <button
                className="btn-group__item" onClick={(()=>{filter(curElem)})}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
        
        </>
    )
}


export {Navbar};