import express from 'express';


const app = express();

app.get('/',(request, response)=>{

    return response.json({message:'estou funcionando'})
});


app.listen(3000, () => {
    console.log('Estou rodando.')
})