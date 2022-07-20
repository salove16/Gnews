const express = require('express')
const axios = require('axios')
const routes=express.Router()



// routes.get('/',async(req,res)=>{
//     try {
//         var url = 'https://gnews.io/api/v4/search?q=example&token=b8e1cf378f744c119c1ac7b44faed332&lang=en';

//         const news_get =await axios.get(url)
//         let newsData=news_get.data.articles
//         // console.log(news_get.data.articles)i
//        res.status(200).send(newsData)
        
//     } catch (error) {
//         if(error.response){
//             console.log(error)
//         }
        
//     }
// })

routes.get('/search',async(req,res)=>{
    const search=req.query.q||"example"
    // console.log("search",search)

    try {
        var url = `https://gnews.io/api/v4/search?q=${search}&token=b8e1cf378f744c119c1ac7b44faed332&lang=en`

        const news_get =await axios.get(url)
        let newsData=news_get.data.articles
        // console.log(news_get.data.articles)
       res.status(200).send(newsData)
        
        

        } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})


module.exports=routes