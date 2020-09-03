import React from 'react';


export default  function Navyasmin(){



    function handleState(){
        setProjetcts([...project, `novo Projetos ' ${Date.now()}`]);
    }

    
    const  [project, setProjetcts] = useState ([Yasmin, Mag, Messi]);

    return(
        <>

     
           <ul>
               {project.map(project => <li key={project}>{project}</li>)}
               </ul>
        

        


        </>
    )
};