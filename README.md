
# The Plant Dispatch <h3>Plant care & catalogueing app</h3>
Final solo project for General Assembly Software Engineering Bootcamp applying the knowledge from the last module learning basics of Django Framework and Python programming language, while continuing to adapt the  knowledge of Javascript. As a plant owner I wanted to create an application that would allow users to calatogue their plant collection while adding some amount of functionality in being able to record different plant maintenance tasks. The name and design of the project has been strongly influenced by Wes Anderson color schemes as well as the name of the project, being a tribute to the new movie The French Dispatch.
 
  <img src="https://res.cloudinary.com/inetab/image/upload/v1628593336/SEI_Project_4/wor1q5qk78ru0rrqvuih.png" alt="homepage"/>
 <p align="center">The French Dispatch inspiration</p>
  <img src="https://i.guim.co.uk/img/media/e57a3a90158709f50904467f33c2b427be1b0e1e/0_275_2995_1797/master/2995.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=1cf8103b720979c1e3e5a131e0ea8921"/>
  Deployed with Heroku. Here is deployed version The Plant Dispatch App >>> https://theplantdispatch.herokuapp.com/
 
# Overview
Responsive first Web Application for cataloguing house plant collection and giving ability to record *watering*, *fertilization*, *repotting* as well as *pest issues*. Simple CRUD application to track plant maintenance, information about specimens as well as ability to upload images of individual plants to be able to refer to the catalogue more easily.

Timeframe - 9 days

# Goal
Simple mobile friendly CRUD application to catalogue users plant collection and maintenance. Main purpose of the application is to allow user to create a plant record, edit a plant or delete it, as well as record different maintenance tasks and display it on plant show page. As a logged in user you would be able to view only your own plant collection. Due to it being a solo project and me working with Python programming lannguage for the first time, I wanted to keep the application extremely simple and execute basic functionally before working on different features. 

# Technologies used 
+ Django
+ Rest_Framework
+ Python
+ Axios
+ React.js
+ Yarn
+ PostgreSQL
+ Bootstrap/React Bootstrap
+ Git/Github
+ FontAwesome
+ Figma
+ Cloudinary

# Challenges
  <h3 align="center">Consistent error handling thrughout the site</h3>
 
> Working with nested data structures has proven to be dificult while trying to get error messages displaying on the page correctly. 

   <h3 align="center">Implementing reusable components and variables thoughout the project.</h3>
   
> I have decided to try something different and complete all of my styling either using Bootstrap or creating styling variables inside my components rather than using CSS or SASS throughout the project. It has caused a fair amount of repeating variables thuought my commonents and I ould have definitely exported them out creating an exportable variables file from which I would be able to use them thoughout my site.

  <h3 align="center">User authentication that would allow only to view, edit, delete plants only by the owner of the plant.</h3>
 > Authentication is definitely something that I find extremely satisfying as well as challening to code. Having have spent only 10 days 

 <h3 align="center">State management in different React components</h3>
 > Something that I found particularly difficult and had to do a lot of reading on is lifting state from one component to another, which was something I tried to implement in my Login & Register Offcanvas components, which has proven to be a hard task without Redux, so definetly looking forward getting this challenge completed.

# Wins

# Key Learnings
+ Working with relational database for the first time while using Django and Python on the backend, has definitely imporoved my confidence building the backend of 

# Future Improvements
+ Further plan in making it an ongoing project for the future as a developer and being able to integrate automated functionality and ability to hook up plants to self watering Raspberry Pi system and record watering times automatically while uploading data to the website. 
+ Ability to upload multiple images of a plant, as well as edit currently uploaded image.
+ Make the application even more mobile friendly, especially on plant show page.
+ Add ability for different users to view each others plant collection, trade plant cutting as well as have statistics for users favourite plant genera.


# Mobile walkthrough

https://user-images.githubusercontent.com/81913593/128855399-1741801b-e31c-4cab-b542-e4725cecf457.mp4






























