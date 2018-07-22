# Resume Microservice Example
This is the UI project for an example project I created to demonstrate the usage of a microservice design pattern. 
The objective is to serve up data for a resume website from various microservices. The services were split by typical resume organization: Profile, Education, Experience, and Skills. 

The data-providing services were written using NodeJS wtith Json-Server. The UI project was built using ReactJS with Facebook's Create-React-App. 

## Data-Providing Microservices
- Resume-Profile: https://github.com/genehynson/resume-profile
- Resume-Experience: https://github.com/genehynson/resume-experience
- Resume-Education: https://github.com/genehynson/resume-education
- Resume-Skills: https://github.com/genehynson/resume-skills

## Setup
1. Fork/clone all the repos
2. Start each of the data-providing services using `npm run dev`
3. Start the react app using `npm start`
4. Make sure the urls in `Constants.js` in the UI project point to the ports each of the data-providng services are running on. 
5. Navigate to `localhost:3000` and check it out.
6. Change the data in `db.json` in each data-providing microservices to customize to your resume. 

## Credits
- Thanks to Jason Williams for providing this excellent resume template in ReactJS. Checkout his stuff: https://github.com/jwill9999
- Thanks to Json-Server for making it so easy to build this entire example in an afternoon! https://github.com/typicode/json-server
