# Personal Bio Site

## Description
This is a personal biography site that will detail information about the developer. It will hold a short introduction about the developer, technologies that have been learned and used in various projects, as well as cards showing off said projects with screenshots and links to the projects.
---
### Features
* Will have a well developed nav-bar and footer
* Page will be styled in a manner that attracts viewers eyes
* a short introduction biography statment introducing viewers to the developer
* a banner or box of some form stating technologies that have been learned over the course of the NSS program
* cards that are being printed to the dom by a loop printToDom function
---
### How to run
1. clone down the repo
2. using hs command in console load server and choose from the two
3. in browser go to local host where it is being held
---
## Contributors
* [Joshua Medlen](https://github.com/medlenmage)
---
## To-Do
- [] Build a nav-bar with links that will open up to future pages that are in being developed
- [] build a footer that contains contact information as well as social media information
- [] Type up and style a short biographical statment to present at the type of the page
- [] create and style a banner showing technologies learned and being used with icons and names of them
- [] build cards using javascript and other technologies showcasing various projects with their respective repo links form git hub as well as screenshots
---
## Code Example
```
<div class="main-container">
    <div class="fullPage" id="bioPage">
      <!-- TODO: Fill in bio info here: What is your background? Why do you want to go into development? What do you love about development? -->
      <h3 class="bio-page-header">Biopage</h3>
      <p>
        My name is Joshua Medlen. I was born and raised in the Middle Tennessee area. Lived here all of my life and have loved it here.
        I currently work for Metro Nashville Goverment in the Public Works department. I drive and operate various equipment but, mostly a tractor mower from spring to fall.
        I want to get into development mostly for a career change. My current change is still pretty physicall intensive and, has alot of of stresses that come with working for a goverment department.
        What i love about devlopment is multiple things. I've alway loved playing with technology and this gives a avenue to continue learning and devloping in the technological world.
        I also love how creative it can be. From designing the webpage to discovering diffirent ways to apply code to websites and achieve the same or diffirent results. 
      </p>
    </div>




const createProjectCards = () => {
  let domString = '';

    for (let i = 0; i < projects.length; i++) {
    if (projects[i].available === true) {
      domString += '<div class="projectCards">'
      domString += `<header class="projectTitle"><h4 class="projectTitleHeader">${projects[i].title}</header>`
      domString += `<img class="projectScreenShot" rel="project screen shot" src="${projects[i].screenshot}">`
      domString += `<p class="projectDescription">${projects[i].description}</p>`
      domString += `<p class="techUsed">${projects[i].technologiesUsed}</p>` 
      domString += `<p class="url">${projects[i].url}</p>`
      domString += `<p class="githubUrl">${projects[i].githubUrl}</p>`
      domString += '</div>'  
  }
}
  printToDom('#projectsPage', domString);

}
```
