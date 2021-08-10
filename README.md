
# The Plant Dispatch <h3>Plant care & cataloguing app</h3>
Final solo project for General Assembly Software Engineering Bootcamp applying the knowledge from the last module learning basics of Django Framework and Python programming language, while continuing to adapt the  knowledge of Javascript. As a plant owner I wanted to create an application that would allow users to catalogue their plant collection while adding some amount of functionality in being able to record different plant maintenance tasks. The name and design of the project has been strongly influenced by Wes Anderson color schemes as well as the name of the project, being a tribute to the new movie The French Dispatch.
 
  <img src="https://res.cloudinary.com/inetab/image/upload/v1628593336/SEI_Project_4/wor1q5qk78ru0rrqvuih.png" alt="homepage"/>
 <p align="center">The French Dispatch inspiration</p>
  <img src="https://i.guim.co.uk/img/media/e57a3a90158709f50904467f33c2b427be1b0e1e/0_275_2995_1797/master/2995.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=1cf8103b720979c1e3e5a131e0ea8921"/>
  Deployed with Heroku. Here is deployed version The Plant Dispatch App >>> https://theplantdispatch.herokuapp.com/
 
# Overview
Responsive first Web Application for cataloguing house plant collection and giving ability to record *watering*, *fertilization*, *repotting* as well as *pest issues*. Simple CRUD application to track plant maintenance, information about specimens as well as ability to upload images of individual plants to be able to refer to the catalogue more easily.

Timeframe - 9 days

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

# Development process

## Preliminary work
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

Model relationship initial diagram

![ModelDiagram](https://res.cloudinary.com/inetab/image/upload/c_scale,w_600/v1628614750/SEI_Project_4/Readme/ego2dl0czzstuathwxqp.png)

Simple user Model

![UserModel](https://res.cloudinary.com/inetab/image/upload/c_scale,w_600/v1628614773/SEI_Project_4/Readme/hkxogz4mgj1k0osypivp.png)

Maintenance Model with one to many relationship with plant model 

![MaintenanceModel](https://res.cloudinary.com/inetab/image/upload/c_scale,w_600/v1628614743/SEI_Project_4/Readme/edvnf1jwlnd51pc0zbx5.png)

Plant Model with One to Many relationship with user that added the plant

![PlantModel](https://res.cloudinary.com/inetab/image/upload/c_scale,w_600/v1628614756/SEI_Project_4/Readme/ev79lqbmf08r37qew4mu.png)







# Challenges
  <h3 align="center">Consistent error handling throughout the site</h3>
 
> Working with nested data structures has proven to be difficult while trying to get error messages displaying on the page correctly. 

   <h3 align="center">Implementing reusable components and variables throughout the project.</h3>
   
> I have decided to try something different and complete all of my styling either using Bootstrap or creating styling variables inside my components rather than using CSS or SASS throughout the project. It has caused a fair amount of repeating variables throughout my comments and I would have definitely exported them out creating an exportable variables file from which I would be able to use them throughout my site.

  <h3 align="center">User authentication that would allow only to view, edit, delete plants only by the owner of the plant.</h3>
  
 > Authentication is definitely something that I find extremely satisfying as well as challenging to code. Having have spent only 10 days 

 <h3 align="center">State management in different React components</h3>
 
 > Something that I found particularly difficult and had to do a lot of reading on is lifting state from one component to another, which was something I tried to implement in my Login & Register Offcanvas components, which has proven to be a hard task without Redux, so definitely looking forward getting this challenge completed.

# Wins

# Key Learnings
+ Working with relational database for the first time while using Django and Python on the backend, has definitely improved my confidence building the backend of 

# Future Improvements
+ Further plan in making it an ongoing project for the future as a developer and being able to integrate automated functionality and ability to hook up plants to self watering Raspberry Pi system and record watering times automatically while uploading data to the website. 
+ Ability to upload multiple images of a plant, as well as edit currently uploaded images.
+ Make the application even more mobile friendly, especially on the plant show page.
+ Add ability for different users to view each other's plant collection, trade plant cutting as well as have statistics for users favourite plant genera.


# Mobile walkthrough

https://user-images.githubusercontent.com/81913593/128855399-1741801b-e31c-4cab-b542-e4725cecf457.mp4






















