# techEffect

## Description
This application is a CMS-style blog designed as a resource for developers of all skill levels for staying abreast of current technical concepts, recent advancements, and new technologies. Developers can publish their blog posts and comment on other developers’ posts. 

Build this site completely from scratch and deploy it to Heroku. 
Follow the MVC paradigm in its architectural structure.
Use Handlebars.js as the templating language.
Use Sequelize as the ORM.
Use express-session npm package for authentication.

WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

WHEN I choose to sign up
THEN I am prompted to create a username and password

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation
THEN I am signed out of the site

WHEN I am idle on the page for more than a set time
THEN I am automatically signed out of the site 

Mock-Up
The following animation demonstrates the application functionality:
Animation cycles through signing into the app, clicking on buttons, and updating blog posts.

Getting Started
Your application’s folder structure must follow the Model-View-Controller paradigm. You’ll need to use the express-handlebars (Links to an external site.) package to use Handlebars.js for your Views, use the MySQL2 (Links to an external site.) and Sequelize (Links to an external site.) packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the dotenv package (Links to an external site.) to use environment variables, the bcrypt package (Links to an external site.) to hash passwords, and the express-session (Links to an external site.) and connect-session-sequelize (Links to an external site.) packages to add authentication.


Grading Requirements

Uses the express-handlebars (Links to an external site.) package to use Handlebars.js for your Views.

Application must be deployed to Heroku.


How to Submit the Challenge
You are required to submit BOTH of the following for review:

The URL of the functional, deployed application.

The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.


### Languages used:
- MySQL
- Node.js
- ES6
- Javascript

### NPM Packages:
- MySQL2
- Sequelize
- Express
- express-handlebars
- express-session
- connect-session-equalize
- dotenv
- bcrypt


## Table of Contents:
- [Instructions for Installation](#instructions-for-installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Questions?](#questions?)


## <a name="instructions-for-installation">Instructions for Installation</a>:
1. clone techEffect repository
1. enter your MySQL user name and password into .env file
1. install Node.js 'npm init --y'
(currently: login in to MySQL and "source db/tech_effect")
1. from the terminal, run 'npm start' to instantiate the server and trigger creation of the database
1. close the server, if needed, and again from the terminal, run "npm run seed"
1. from the terminal, run 'npm start'


## <a name="usage">Usage</a>:
[![Application Screenshot](./assets/Walkthrough-screenshot.jpg)*Click the image-link to access a video walkthrough of the application:*](https://drive.google.com/file/d/1CLjxrXYo8OLtx0Et6v7oRI7EM2dxlzKD/view)

    
## <a name="contribution-guidelines">Contribution Guidelines</a>:
Made with ☕+❤️ by Sara Krizan and in consultation with several LAs, TA, and learning instructor through the University of Wisconsin Extended Campus Coding Bootcamp.

Please feel free to contact me via my GitHub account below with any requests to contribute to this project or collaborate on future works.
    

## <a name="questions?">Questions?</a> 
Sara Krizan    
[GitHub](https://github.com/SMKrizan)
    
