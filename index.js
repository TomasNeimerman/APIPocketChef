import 'dotenv/config';
import express from "express"

const app = express();
app.use(express.json());
const port = 4200;
app.listen(port, () =>{
    console.log(`Server working, port: ${port}`)
})