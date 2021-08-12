# README IN PROGRESS... ![90%](https://progress-bar.dev/80) 

 # The Plant Dispatch <h3>Plant care & cataloguing app</h3>

Final solo project for General Assembly Software Engineering Bootcamp applying the knowledge from the last module learning basics of Django Framework and Python programming language, while continuing to adapt the  knowledge of Javascript. As a plant owner I wanted to create an application that would allow users to catalogue their plant collection while adding some amount of functionality in being able to record different plant maintenance tasks. The name and design of the project has been strongly influenced by Wes Anderson color schemes as well as the name of the project, being a tribute to the new movie The French Dispatch.
 
  <img src="https://res.cloudinary.com/inetab/image/upload/v1628593336/SEI_Project_4/wor1q5qk78ru0rrqvuih.png" alt="homepage"/>
 <p align="center">The French Dispatch inspiration</p>
  <img src="https://i.guim.co.uk/img/media/e57a3a90158709f50904467f33c2b427be1b0e1e/0_275_2995_1797/master/2995.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=1cf8103b720979c1e3e5a131e0ea8921"/>
  Deployed with Heroku here https://theplantdispatch.herokuapp.com/
  
  Create an account or use these details to test out the site:
  
  email: ineta.bliu@email.com
  
  password: pass
  
  

  
 
# Overview
Responsive first Web Application for cataloguing house plant collection and giving ability to record *watering*, *fertilization*, *repotting* as well as *pest issues*. Simple CRUD application to track plant maintenance, information about specimens as well as ability to upload images of individual plants to be able to refer to the catalogue more easily.

Timeframe - 9 days

https://user-images.githubusercontent.com/81913593/128855399-1741801b-e31c-4cab-b542-e4725cecf457.mp4

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


## Installation
+ Clone or download the repo
+ ``pipenv`` to install Python packages
+ ``python manage.py loaddata jwt_auth/seeds.json`` to load user from the database
+ ``python manage.py loaddata plants/seeds.json`` to load plants from the database
+ ``cd client`` to go to the frontend directory
+ ``yarn install`` to install frontend dependencies
+  run ``yarn build``
+ go back to main directory and run ``python manage.py runserver`` to start the app



# Development process

### Preliminary work
As it has been the first time I was building a full stack application all by myself with a limited deadline, I wanted to keep things pretty simple so I can comfortably reach the MVP and leave plenty of time to finesse different features and leave time for the styling. 

I've decided to invest a full day's worth of planning user stories before jumping into writing code, so I have created a Trello board that documented it for me. I have split the user stories in different labels that would allow me to work through the project systematically, see example of Trello board and labels below. 

![Screenshot 2021-08-10 at 17 35 21](https://user-images.githubusercontent.com/81913593/128898562-4c9571ff-2b7b-4651-921a-8314a8e81488.png)
![TrelloExample](https://user-images.githubusercontent.com/81913593/128899012-ac550af6-c90a-47a9-93df-60aff9f626f1.png)
>User stories definitely have helped to organise the workflow and keep me on track throughout the project as well as deciding to build feature by feature working on the backend & frontend functionality at the same time.

### Using Cloudinary API
Since using Cloudinary has been extremely satisfying in my previous group project, I have decided to familiarise myself with it more using Cloudinary API to make post requests and store my images there. I've made sure I've tested it out first before starting to build my application in case I wasn't satisfied with the result or couldn't include the image upload feature in the way I wanted to. It was a success and I was able to start building my first solo full stack app.


```javascript
//Function that handles image upload to cloudinary
export const ImageUploadField = ({ handleImageUrl, value }) => {
  
  const handleUpload = async event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', uploadPreset)
    const res = await axios.post(uploadUrl, data)
    handleImageUrl(res.data.url)
    console.log(res.data.url)
  }
```

### Models
![ModelDiagram](https://user-images.githubusercontent.com/81913593/129183562-1ed31376-9edd-4d44-b6c3-d16853b81d5c.png)










# Challenges
  <h3 align="center">Consistent error handling throughout the site</h3>
 
> Working with nested data structures has proven to be difficult while trying to get error messages displaying on the page correctly. 

   <h3 align="center">Implementing reusable components and variables throughout the project.</h3>
   
> I have decided to try something different and complete all of my styling either using Bootstrap or creating styling variables inside my components rather than using CSS or SASS throughout the project. It has caused a fair amount of repeating variables throughout my comments and I would have definitely exported them out creating an exportable variables file from which I would be able to use them throughout my site.

  <h3 align="center">User authentication that would allow only to view, edit, delete plants only by the owner of the plant.</h3>
  
 > Authentication is definitely something that I find extremely satisfying as well as challenging to code. Having spent only 10 days learning Django Framework and just the basic fundamentals of Python, I wasn't able to focus on authentication as much as I wanted to.

 <h3 align="center">State management in different React components</h3>
 
 > Something that I found particularly difficult and had to do a lot of reading on is lifting state from one component to another, which was something I tried to implement in my Login & Register Offcanvas components, which has proven to be a hard task without Redux, so definitely looking forward getting this challenge completed.

# Wins
+ Reaching my MVP earlier than I personally anticipated and spending the time to focus on reviewing each feature and making sure everything is working as intended. Having had written great user stories at the beginning of the project has proven to be extremely useful in keeping me on track with the whole development process and continuing working through the changes while leveraging Git fully been a great win.
+ Ability to integrate Cloudinary API to my application in storing user uploaded images has been extremely satisfying.
+ Considerably smooth development process compared to my previous projects for GA. I have improved my problem solving skills in all aspects of the development process which helped me to maintain a clean and well structured code-base for my project.

# Key Learnings
+ PostgreSQL and relational databases. Working with relational databases for the first time while using Django and Python on the backend, has definitely improved my confidence building the backend of my application. Being able adapt the Javascript fundamentals I've learned in previous modules and adapt my knowledge in learning Python. 
+ Object oriented programming. I was exposed to it for the first time and looking forward learning more about in my future projects.

# Future Improvements
+ Further plan in making it an ongoing project for the future as a developer and being able to integrate automated functionality and ability to hook up plants to self watering Raspberry Pi system and record watering times automatically while uploading data to the website. 
+ Ability to upload multiple images of a plant, as well as edit currently uploaded images.
+ Make the application even more mobile friendly, especially on the plant show page.
+ Add ability for different users to view each other's plant collection, trade plant cutting as well as have statistics for users' favourite plant genera.
+ Implement login using Magic Link (something I really enjoy as a user myself and would love my application to have it)






















