const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:true, credentials:true}));

app.get('/training', function(req, res){
   try{
       console.log("asdfadsf")
       res.status(200).json({
           data: "fucking AWS EC2!!!"
       });
    } catch(error){
        res.status(400).json({
            message: "조회 실패!"
        });
    }
});

app.listen(PORT, () => {
    console.log(`server is listening at localhost:${PORT}`);
});

module.exports = app;