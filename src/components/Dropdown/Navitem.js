import React,{useState} from 'react';


export  function Navitem({title, children}){

    const [ open, setOpen ] = useState(false);

    return(

        <div>

            <button onClick={()=>setOpen(!open)}>{title}</button>

              ? null :

                {children}



        </div>
    )
}