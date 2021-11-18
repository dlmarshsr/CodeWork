const PORT = 5500
const cheerio = require("cheerio")
const axios = require('axios')
const express = require('express')
const { response } = require("express")
const { attr } = require("cheerio/lib/api/attributes")

const app = express()


const url = 'https://www.nba.com/'

axios(url)
    .then(response => {
        const html = response.data


        console.log(html)
    
       
    }).catch(err => console.log(err))


app.listen(PORT, () => console.log('server running on PORT ${PORT}'))