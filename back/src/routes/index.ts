import { Router } from 'express';


const routes = Router();

routes.get('/',(request,response )=>{

  console.log({Message:'teste'});
})

export default routes;
