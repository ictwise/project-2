# Fitness Quiz

The fitness quiz is a browser-based quiz game constructed with JavaScript, CSS and HTML5. It is mobile first and can be added as an interactive section to a sports/fitness site. The main aim of this project is to engage the user and provide basic information on fitness techniques/facts. Questions can be easily added to or updated by the developer by changing the questions in the questions.js file.

[Live link to website](https://ictwise.github.io/project-2/)

<img src="assets\images\responsive.jpg" width="200" alt="screen shots of the site" >

## Features

The quiz is meant to be simple and clean. It’s not a test more a tool for engaging a user of the site, an add in section for a more complex site.

## UX

The concept for the quiz was that it should be simple, clean, an add on to an existing site, something that could provide interaction and keep the interest of any user. My initial design began on paper. Inspiration was taken from various websites with similar concepts.

<img src="assets\images\wireframe.jpg" width="200" alt="initial drawing" >

Figma was used to design the pages and pen and paper to create wireframes.

#### Mock start screen

Start screen - this contains an image, a large start quiz button and a short set of instructions.

<img src="assets\images\mobileStart.png" width="200" alt="mock start screen" >

#### Mock Question screen

The question screen - has a progress bar showing if answered questions have been correct or incorrect, the next question and four possible answers.

<img src="assets\images\question.png" width="200" alt="mock question screen" >

#### Mock Result screen

The result screen - has the progress bar showing which questions were answered correctly, the users total score as a percentage and a repeat of the image.

<img src="assets\images\result.png" width="200" alt="mock question screen" >

This is quiz is created using an index.html page a style.css and a javascript file containing functions that; hide the start button and image, reveal the question, options, progress bar and the restart buttons. It also assesses if the correct answer has been selected, changes the colour of the prog divs (which it generated) and calculates the score percentage. The questions are stored in a questions.js file.

### Features Left to Implement

The quiz was primarily designed to meet the criteria for milestone project 2. Future enhancements include the  following:-

* change image to something appropriate depending on pass or fail Score.
*display correct or incorrect image each time an answer is selected.
*number the questions and the prog divs.
*improve layout and CSS
*generate a final report showing the questions, the answer selected and the right answer.
*seo improvements

## Testing

### User Stories

1. As a user visiting the site I want to test my fitness knowledge and be engaged by interesting facts.

* The quiz has a simple clean design and provides interaction with a site to engage users.

2. As  a visiting user I want to be able to rate my understanding.

* At the end of the quiz users are provided with their score as a percentage.

3. As a site owner I want to be able to update/change/add to the question bank.

* Questions are stored in a separate file that can be easily edited.

4. As a user I want the site to be responsive and usable on a variety of devices.

* The site is responsive, mobile first as it is anticipated most users will be accessing from a mobile device.

### Manual Testing

The site was tested manually across a range of devices to ensure all links and styling work correctly and to ensure responsiveness across a range of devices. All features on the page were tested, especially the javascript element, to ensure functionality was not impacted in any way. Testing was carried out on multiple browsers. Testing was carried out on an Apple iPhone, Apple iPhone 13, Samsung Galaxy S20 FE, Apple iPad Pro & Windows 11 Desktops.
Specific checks were:

1. Buttons - check on all screen sizes, for all pages and sections.
    * Check all buttons are active and do what they should.
    * Check that the restart button resets the score and the welcome heading.
    * Check that the next button is disabled until an answer is clicked by the user.
    * Check that the answer buttons are disabled once an answer is selected.
2. Responsive
    * Using chrome developer tools, verify that
    the site is fully responsive with no overflow and no scroll.
    * Ensure answer buttons display 1 fr grid in mobile screens.
3. Score
    * Check that the score only increments for correct answers.
    * Check that the score resets once the quiz is restarted.
    * Check that the result displayed is accurate.
*Percentage shown correct.

### Validator Testing

The website was tested using the tools made available by "W3C".
The two tools used were the [W3C Markup validator](https://validator.w3.org/) and the [Jigsaw](https://jigsaw.w3.org/css-validator/). Both tools were used to test the website by URL and also by direct input, with the results shown below.
No errors were returned for all HTML or CSS across all tests. Some warnings were displayed.

1. HTML

* I tested after I first created the index.html, occasionally throughout. On the penultimate test a rouge </P> was identified, probably I accidently left this when I converted the instructions to a list.
<img src="assets\images\NuHtmlCheck1Error.jpg" width="600" alt="html validator first test" >
This was fixed and the final test showed no errors.
<img src="assets\images\NuHtmlCheck2NoError.jpg" width="600" alt="html validator  second test" >

2. CSS
    * CSS Validation was done using [Jigsaw](https://jigsaw.w3.org/css-validator/)

    * Tested throughout production, the final test showed no errors.

<img src="assets\images\w3cCSSvalidation.jpg" width="600" alt="css validator" >

3. Lighthouse
*As a result of testing I added alt to images and optimised the image for the web.
<img src="assets\images\lighthouseReport.jpg" width="600" alt="html validator first test" >

### Code fixes

Initially when the user completed the quiz if they continued to click answers then more prog divs would appear, I fixed this by setting the quiz display to none when the score rendered and resetting all the variables when either the home or reset button was clicked.

CSS was adjusted thoughout the project. I started designing for mobile first. The variety of screen sizes available mean that just mobile is a challenge in its own right. I did not consider larger screens till late in the project. In future even with a mobile first approach I would consider larger screens earlier in the workflow. I would also deploy earlier.

### Deployment

* Navigate to the repository on GitHub.com
* Select 'Settings' from the navigation bar near the top of the page.
* Select 'Pages' from the sidebar on the left of the page.
* Under the 'Sources' heading, select the 'Branch' dropdown menu and select the main branch.
* Once selected, click the 'Save' button to the right of the dropdown menu.
* Deployment should be confirmed by a message on a green background - The message should have a green tick mark followed by "Your site is published at" followed by the web address.
* Confirm deployment by navigating to the displayed web address.

## Credits

### Languages

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries and Tools

* [Am I Responsive](http://ami.responsivedesign.is/) - Used to verify responsiveness of website on different devices.
* [Figma]( https://www.figma.com/) - Used to generate Wireframe images.
* [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) - Used for overall development and tweaking, including testing responsiveness and performance.
* [GitHub](https://github.com/) - Used for version control and hosting.
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Used for consistent code formatting.
* [Slack](https://slack.com/) - Used for support and advice from the Code Insitute Community.
* [TinyPNG](https://tinypng.com/) - Used to compress images to reduce filesize without a reduction in quality.
* [Visual Studio Code](https://code.visualstudio.com/) - Application used for development of this site.
* [W3C](https://www.w3.org/) - Used for HTML & CSS Validation.

### Content

Questions developed from various google searches and websites.

#### Code and Tutorials

Many tutorials were followed and visited but the most useful and those which I based my code and jest script upon were:

[Quiz Tutorial](https://www.youtube.com/watch?v=rFWbAj40JrQ)

[Quiz Tutorial](https://www.youtube.com/watch?v=49pYIMygIcU&t=1s)

[Jest Tutorial](https://www.youtube.com/watch?v=FgnxcUQ5vho)

[Article on Jest](https://levelup.gitconnected.com/how-to-unit-test-html-and-vanilla-javascript-without-a-ui-framework-c4c89c9f5e56)

The code institute tutorials.

Special thanks to my mentor, Chris Quinn and the student support team whos help was invaluable and the Slack study_group channel particulary Daisy Mc Girr.

### Media

* The photo used on the home and scores page is from freepik.com
