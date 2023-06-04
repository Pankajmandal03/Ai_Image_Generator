// // import express from 'express'
// // import cors from 'cors'
// // import bodyParser from 'body-parser'
// // import env from 'dotenv'
// // import {Configuration, OpenAIApi} from 'openai'

// // const app = express()

// // env.config()

// // app.use(cors())
// // app.use(bodyParser.json())


// // // Configure open api
// // const configuration = new Configuration({
// //     organization: "org-6V6bXamwAzussIQYT9pusDSe",
// //     apiKey: process.env.API_KEY // VISIT .env AND MAKE CHANGES
// // })
// // const openai = new OpenAIApi(configuration)


// // // listeninng
// // app.listen("3080", ()=>console.log("listening on port 3080"))


// // // dummy route to test
// // app.get("/", (req, res) => {
// //     res.send("Hello World!")
// // })


// // //post route for making requests
// // app.post('/', async (req, res)=>{
// //     const {message} = req.body

// //     // try{
// //     //     const response = await openai.createCompletion({
// //     //         model: "text-davinci-003",
// //     //         prompt: `${message}`,
// //     //         max_tokens: 100,
// //     //         temperature: .5
// //     //     })
// //     try {
// //         const prompt = req.body.prompt;
    
// //         const response = await openai.createCompletion({
// //           model: "text-davinci-003",
// //           prompt: `${message}`,
// //           temperature: 0, // Higher values means the model will take more risks.
// //           max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
// //           top_p: 1, // alternative to sampling with temperature, called nucleus sampling
// //           frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
// //           presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
// //         });

// //         res.json({message: response.data.choices[0].text})

// //     }catch(e){
// //         console.log(e)
// //         res.send(e).status(400)
// //     }
// // })


// const {Configuration,OpenAIApi} = require('openai');
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const configuration = new Configuration({
//     apiKey: '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'
// });

// const openAi = new OpenAIApi(configuration);
// const app = express()
// app.use(bodyParser.json())
// app.use(cors())

// const port = 5500;

// //to get chat related data
// app.get("/",(req,res)=>{
// res.send("Hello")
// })

// app.post('/', async (req,res)=>{
//     const {body} = req;
//     const {query} = body
//     const response = await openAi.createCompletion({
//         model: "text-davinci-003",
//         prompt: query,
//         max_tokens: 1000,
//         temperature: 0,
//       });
      

//       res.json({
//         data : response.data.choices[0].text
//       })
// })


// //to get image related data

// app.post('/createimage', async (req,res)=>{
//     const {body} = req;
//     const {query} = body
//     const response = await openAi.createImage({
//         prompt: query,
//         n: 2,
//         size: "1024x1024",
//       });
      

//       res.json({
//         data : response.data.data[0].url
//       })
// })



// app.listen(port,()=>{
//     console.log(`listening to port ${port}`)
// })