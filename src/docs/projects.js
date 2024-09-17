import bloggy from "../images/bloggy.png"
import webweather from "../images/webweather.png"
import qr from "../images/qrcode.png"
import url from "../images/url.png"
import expense from "../images/expense.png"
import mernblog from '../images/mernblog.png'
import backendlogo from "../images/backend.jpg"
import foodZies from "../images/foodzies.png"
import netflixapp from "../images/netflixapp.png" 

const projects=[
    {
        name:"NetFlixApp",
        description:"Developed a Netflix clone having the basic functionality of browsing and searching different movies, series and content over the internet.(Tech Stack - React, Rest APIs, Tailwind CSS, HTML)",
        projectlink:"https://netflix-app-navy.vercel.app/",
        thumbnail:netflixapp
    },
    {
        name:"FoodZies",
        description:"This is a food ordering platform, get location based searches and recommendations, view curated menus and hotels. (Tech Stack - React, Rest APIs, Tailwind CSS, HTML)",
        projectlink:"https://foodzies.vercel.app/",
        thumbnail:foodZies
    },
    {
    name:"Bloggy",
    description:"This is a website for everyone to manage their blogs (Tech Stack - Express, Node, MongoDB, HTML, CSS)",
    projectlink:"https://bloggy-i6jh.onrender.com",
    thumbnail:bloggy
},
{
  
    name:"Web Weather",
    description:"Web App to get weather in a given area using geolocation, city and country (Tech Stack - React, Weather API, HTML, CSS)",
    projectlink:"https://webweather-two.vercel.app/",
    thumbnail:webweather
},
{
    name:"MERN Blog (Main website/Front end)",
    description:"New Blog website compared to the previous ejs one. (Tech Stack - React, Nodejs, HTML, CSS) ",
    projectlink:"https://mern-blogs-seven.vercel.app/",
    thumbnail:mernblog 
},
{
    name:"MERN Blog (Backend)",
    description:"Backend for MERN blog website. Developed apis for the React Web Applicaton. (Tech Stack - Nodejs, Expressjs)",
    projectlink:"https://github.com/ameya699/MERN_SERVER",
    thumbnail:backendlogo
},
{
  
    name:"QR Code Generator",
    description:"Generate QR Codes on the go (Tech Stack - React, API for qr and quotes, HTML, CSS)",
    projectlink:"https://qr-code-app-lac.vercel.app/",
    thumbnail:qr
},
{
  
    name:"URL Shrinker",
    description:"Shrink long urls and manage them with ease (Tech Stack - Express, Node, MongoDB, HTML, CSS)",
    projectlink:"https://short-url-c3iy.onrender.com",
    thumbnail:url
},
{
  
    name:"Expense App",
    description:"Track your day to day expenses (Tech Stack - Express, Node, MongoDB, HTML, CSS)",
    projectlink:"https://expense-app-6kxa.onrender.com",
    thumbnail:expense
},
{
  
    name:"Clothing Managment",
    description:"E-commerce and inventory management(Tech Stack - React, Express, Node, Session, HTML, CSS, Material UI)",
    projectlink:"https://github.com/ameya699/ronak-mern-site",
    thumbnail:undefined
},
{
  
    name:"To-Do App",
    description:"Create , edit and delete tasks (Tech Stack - React, Express, Node, HTML, CSS)",
    projectlink:"https://github.com/ameya699/todoApp",
    thumbnail:undefined 
}
]

export  {projects};