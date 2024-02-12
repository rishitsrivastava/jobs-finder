const express = require('express');
const mainRouter = express();
const router = require('./routes/index')
// const cors = require('cors');
const Port = 3000;

mainRouter.use(express.json());

// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true,
// }));


mainRouter.use("/v1", router);

mainRouter.listen(Port, () => {
    console.log("server started on ", Port);
})