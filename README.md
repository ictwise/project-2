# Fitness Quiz

The fitness quiz is a browser based quiz game constructed with JavaScript, CSS and HTML5. It is mobile first and can be added as an interactive section to a sports/fitness site. The main aim of this project is to engage the user and provde basic information on fitness techniques. Questions can be easily added to/updated by the developer by changing the questions in the questions.js file.

[Live link to website](https://ictwise.github.io/project-2/)

<img src="assets\readMe\images\quiz_home_mobile.jpg" width="200" alt="woman doing yoga" >

## Features 

The quiz is meant to be simple and clean. The answers can be viewed in 

Home screen - this contains an image a large start quiz button and a short set of instructions.

The question screen - has a progress bar showing if answered questions have been correct or incorrect, the next question and four possible answers.

The end of quiz screen - has the progress bar showing which questions were answered correctly, the users total score as a percentage.


### Features Left to Implement

- change image if pass or fail

## Testing

### User Stories

1. As a user visiting the site I want to test my fitness knowledge and be engaged by interesting facts..
  * The quiz has a simple clean design and provides interaction with a site to engage users.

2. As  a visiting user I want to be able to rate my understanding.
  * At the end of the quiz users are provided with their score as a percentage.

3. As a site owner I want to be able to update/change/add to the question bank.
  * Questions are stored in a separate file that can be easily edited.

4. As a user I want the site to be responsive and usable on a variety of devices.
  * The site is responsive, mobile first as it is anticipated most users will be accessing from a mobile device.


### Manual Testing

1. Buttons - check on all screen sizes, for all pages and sections.
    * Check all buttons are acitve and do what they should. 
    * Check that the restart button resets the score and the welcome heading.
    * Check that the next button is disabled until an answer is clicked by the user.
    * Check that the answer buttons are disabled once an answer is selected.
2. Responsive
    * Using chrome develper tools, verify that
    the site is fully responsive with no overflow and no scroll. 
    * Ensure answer buttons display 1 fr grid in mobile screens.
3. Score
    * Check that the score only increments for correct answers.
    * Check that the score resets once the quiz is restarted.
    * Check that the result displayed is accurate.


### Code Validation
1. HTML
* HTML validation was done using [W3C Markup validator](https://validator.w3.org/)

code passes

2. CSS
    * CSS Validation was done using [Jigsaw](https://jigsaw.w3.org/css-validator/)

    * Tested throughout production 


3. Lighthouse
as a result of testing added alt to image and optimised image for the web
#### Lighthouse results


as a result of testing added alt to image and optimised image for the web













### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-running-2.0/index.html 


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site




## future enhancements

lcp image
random question bank
number questions
results sheet with answers
