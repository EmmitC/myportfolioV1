this is a revised Version01

<!--
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>

<style></style>

<body>
    <header class="hero">
        <div class="hero-content">
            <p>Hi</p>
            <h1>I'm <strong>Emmit</strong></h1>
            <h2>A Developer</h2>
            <nav>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </nav> -->

            <!-- <button id="darkModeToggle">Dark/Light</button> -->
        </div>

        <!-- <div class="hero-image"></div> -->
    </header>

    <main>
        <section id="about">
            <div style="text-align: center;">
                <h2>About Me</h2>
                <!--<img src="images/Me.jpg">-->

                <p>I am Emmit Christopher Ebau, a tech enthusiast currently pursuing a Bachelor's Degree in AI and
                    Machine
                    Learning at Isbat University, Main Campus.</p>
                <p>I code in HTML, CSS, C++, and am currently learning C and Python.</p>
                <p>During my free time(and to feed my curiosity),I mess around with code</p>
                <p>to hone my skills, I'm also a gamer, a songwriter and a producer</p>
                <p></p>
            </div>
        </section>

        <!-- <section id="logos">
            <div style="text-align: justify;">
                <img src="images/html-icon.png" style="padding:20px;">
                <img src="images/c-program-icon.png" style="padding:20px;">
                <img src="images/programmer.png" style="padding:20px;">
                <img src="images/python.png" style="padding:20px;">
                <img src="images/java-script.png" style="padding:20px;">
                <img src="images/mysql.png" style="padding:20px;">
                <img src="images/coding-language.png" style="padding:20px;">
            </div>
        </section> -->


        <section id="projects">
            <h2>Projects</h2>
            <div class="projects-grid">
                <div class="project-item">
                    <img src="project1.jpg" alt="Project 1" class="project-image">
                    <h3>Project 1</h3>
                    <p>My first project was in Html</p>
                </div>
                <div class="project-item">
                    <img src="project2.jpg" alt="Project 2" class="project-image">
                    <h3>Project 2</h3>
                    <p>Description of project 2...</p>
                </div>
            </div>
        </section>

        <section id="contact">
            <h2>Contact Me:</h2><!--Illl be back to try fix some random ass shit here about the image sizing-->
            <div class="logo-container">
                <!-- Mail Icon -->
                <a href="mailto:emmitchristopher@outlook.com" target="_blank">
                    <i class="fas fa-envelope fa-3x"></i> <!-- Font Awesome email icon with size 3x -->
                </a>

                <!-- GitHub Icon -->
                <a href="https://github.com/EmmitC" target="_blank">
                    <i class="fab fa-github fa-3x"></i> <!-- Font Awesome GitHub icon with size 3x -->
                </a>

                <!-- LinkedIn Icon -->
                <a href="https://linkedin.com/in/EmmitC" target="_blank">
                    <i class="fab fa-linkedin fa-3x"></i> <!-- Font Awesome LinkedIn icon with size 3x -->
                </a>

                <!-- Telegram Icon -->
                <a href="https://t.me/EmmitChristopher" target="_blank">
                    <i class="fab fa-telegram-plane fa-3x"></i> <!-- Font Awesome Telegram icon with size 3x -->
                </a>
            </div>


            <form action="https://formspree.io/f/yourFormId" method="POST">
                <div>
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div>
                    <label for="email">Your Email</label>
                    <input type="email" id="email" name="email" required>
                </div>

                <div>
                    <label for="message">Your Message</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>

            </form>
        <button type="submit">Send Message</button>
        </section>



    </main>

    <footer>
        <p>&copy; 2024 Emmit's Portfolio</p>
    </footer>

    <script src="main.js"></script>

</body>

</html>

:root {
--primary-bg: black;
--primary-color: white;
--button-bg: #ff5722;
--button-hover-bg: #e64a19;
--text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

.text-shadow {
text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
}

body {
font-size: 16px;
font-family: Arial, sans-serif;
margin: 0;
padding: 0;
background-color: var(--primary-bg);
/_ background-image: url('images/20250101_211343.jpg'); _/
color: var(--primary-color);
transition: background-color 0.3s ease, color 0.3s ease;
position: relative;
}

body::before {
content: "";
position: absolute;
/_ Make it position fixed relative to the viewport _/
top: 0;
left: 0;
width: 100%;
height: 100%;

    background-size: cover;
    background-position: center;
    opacity: 0.2;
    /* Reduced opacity for better visibility */
    z-index: -1;
    /* Ensure the content sits above the image */

}

/_ Dark Mode Styles _/
body.dark-mode {
background-color: #333;
color: white;
/_ Add a color definition for dark mode _/
}

body.dark-mode header {
background-color: rgba(0, 0, 0, 0.7);
color: white;
}

body.dark-mode nav ul li a {
color: orangered;
}

body.dark-mode footer {
background-color: #444;
}

body.dark-mode .text-shadow {
text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.5);
/_ Lighter text shadow for dark mode _/
}

section.visible {
opacity: 1;
transform: translateY(0);
transition: opacity 0.5s ease, transform 0.5s ease;
}

.hero h1 {
font-size: 4rem;
text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);

    /* Shadow effect for text readability */

}

.hero h2 {
font-size: 2rem;
text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);

    /* Shadow effect for text readability */

}

.hero p {
font-size: 1.5rem;
margin: 20px 0;
text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
/_ Shadow effect for text readability _/
}

main {
position: relative;
z-index: 1;
}

.cta-button {
background-color: #ff5722;
color: white;
padding: 10px 20px;
text-decoration: none;
border-radius: 5px;
font-size: 1.2rem;
transition: background-color 0.3s ease;
text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
/_ Shadow effect for text readability _/
}

.cta-button:hover {
background-color: #e64a19;
}

nav ul {
list-style-type: none;
padding: 0;
}

nav ul li a {
color: olive;
text-decoration: none;
}

nav ul li a:hover {
text-decoration: underline;
color: #f39c12;
}

button {
background-color: #000000;
color: whitesmoke;
padding: 10px 20px;
border: none;
cursor: pointer;
transition: background-color 0.3s ease;
justify-content: center;
position: absolute;
margin-top: auto;

}

button:hover {
background-color: gray;
color: #000000;
}

section {
padding: 2rem;
opacity: 0;
transform: translateY(50px);
transition: opacity 0.5s ease, transform 0.5s ease;
z-index: 1;
}

section.visible {
opacity: 1;
transform: translateY(0);
}

footer {
text-align: center;
padding: 1rem;
background-color: #222;
color: #fff;
position: relative;
width: 100%;
bottom: 0;
margin-top: 20px;
/_ Add margin above footer _/
}

.icon {
width: 50px;
height: 50px;
transition: transform 0.3s ease;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

}

.icon:hover {
transform: scale(1.1);
}

.project-item {
background-color: #eee;
padding: 1rem;
border-radius: 8px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease;
text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
/_ Shadow effect for text readability _/
position: relative;
}

.project-item:hover {
transform: scale(1.05);
box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
position: relative;
}

img {
max-width: 100%;
/_ Ensures images don’t overflow their container _/
height: auto;
/_ Keeps the aspect ratio intact _/
display: inline-flex;

    /* Removes extra whitespace below the image */
    width: 20%;
    flex-direction: column;

}

/_General styles for the section _/
#logos {
padding: 2rem;
text-align: center;
background-color: z-index -1;
/_Adjust as needed_/
}

#logos h2 {
font-size: 2rem;
margin-bottom: 1rem;
color: #333;
}

/_Flexbox container for logos _/
.logo-container {
display: flex;
flex-direction: row;
flex-wrap: wrap;
-ms-flex-align: center;
/_Allow logos to wrap to the next line _/
justify-content: center;
/_ center align logos_/
gap: 20px;
/_Space between logos _/
}

/_Individual logo styling_/
.logos {
max-width: 150px;
/_ Default logo size _/
height: auto;
/_Maintain aspect ratio_/
transition: transform 0.3s ease;
}

.logo:hover {
transform: scale(1.1);
/_slight zoom effect on hover_/
}

/_ Media queries for responsiveness _/

/_ Default styles for large screens (desktops)_/
@media(max-width:1920px) {
body {
font-size: 16px;
}

    header.hero {
        height: 100vh;
        /* Keep the same hero section height */
        width: 100%;
        padding: 10px;
        /* background-image: url("images/smallestscreen.jpg"); */
        background-size: cover;
        /* Ensures the background covers the entire header */
        background-position: center;
        /* Centers the image */
        background-repeat: no-repeat;
        /* Prevents the image from repeating */
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
        /* Optional: Adjust text color to stand out on the image */
        /* Optional: Center text inside the section */
    }

    .overlay h1 {
        font-size: 3rem;
        position: relative;
    }


    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        position: relative;
    }

    nav ul li {
        display: inline;
        margin-right: 0.5rem;
    }

    .icon {
        width: 100px;
        height: 100px;
        position: relative;
    }

    .logos {
        max-width: 200px;
        /* Larger logos*/
    }

    .logo-container {
        display: flex;
        justify-content: center;
        /* Centers icons horizontally */
        align-items: center;
        /* Centers icons vertically */
        flex-wrap: wrap;
        /* Allows icons to wrap on smaller screens */
        gap: 15px;
        /* Adds spacing between icons */
        padding: 20px;
        /* Adds padding around the icons */
        width: 20%;
        /* Ensures container takes full width */
        height: 20%;
        /* Ensures container takes full height */
        flex-direction: row;
        /* Adjusts space between logos */
        position: relative;
    }



    .light {
        width: 20%;
        height: 20%;
        position: relative;
        size-adjust: 20%;
        transform: scale(0.5);
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        gap: 10%;
        flex-wrap: wrap;
    }


    .projects-grid {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

}

/_ medium screens :Tablets(768px to 1024px)_/
@media (max-width: 1024px) {
header.hero {
height: 100vh;
/_ Keep the same hero section height _/
width: 100%;
padding: 0.5px;
/_ background-image: url("images/smallestscreen.jpg"); _/
background-size: cover;
/_ Ensures the background covers the entire header _/
background-position: center;
/_ Centers the image _/
background-repeat: no-repeat;
/_ Prevents the image from repeating _/
display: flex;
align-items: center;
justify-content: center;
z-index: -1;
/_ Optional: Adjust text color to stand out on the image _/
/_ Optional: Center text inside the section _/
}

    .overlay h1 {
        font-size: 3rem;
        position: relative;
    }


    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        position: relative;
    }

    nav ul li {
        display: inline;
        margin-right: 0.5rem;
    }

    .icon {
        width: 100px;
        height: 100px;
        position: relative;
        max-width: 100px;
        max-height: 100px;
    }

    .logos {
        max-width: 100px;
        /* Larger logos*/

        height: auto;
    }

    .logo-container {
        display: flex;
        flex-wrap: wrap;
        /* Allows icons to wrap on smaller screens */
        flex-direction: row;

        /* Adjusts space between logos */
        position: relative;
    }



    .light {
        width: 20%;
        height: 20%;
        position: relative;
        size-adjust: 20%;
        transform: scale(0.5);
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        gap: 10%;
        flex-wrap: wrap;
    }


    .projects-grid {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

}

/_ small screens :mobile phones (480px to 768px)_/
@media (max-width: 768px) {
header.hero {
height: 100vh;
/_ Keep the same hero section height _/
width: 100%;
padding: 0.5px;
/_ background-image: url("images/smallestscreen.jpg"); _/
background-size: cover;
/_ Ensures the background covers the entire header _/
background-position: center;
/_ Centers the image _/
background-repeat: no-repeat;
/_ Prevents the image from repeating _/
display: flex;
align-items: center;
justify-content: center;
z-index: -1;
/_ Optional: Adjust text color to stand out on the image _/
/_ Optional: Center text inside the section _/
}

    #logos {
        padding: 1rem;
        text-align: center;
    }

    .logos {
        max-width: 100px;
        /* smaller logos for mobile*/
    }

    #logos h2 {
        font-size: 1.5rem;
        /* Adjust heading size */
    }

    .logo-container {
        flex-direction: column;
        /* Stack logos vertically on small screens */
        align-items: center;
    }

    .overlay h1 {
        font-size: 2.5rem;
    }

    nav ul {
        display: flex;
        flex-direction: column;
        /*Stack navigation links vertically*/
        align-items: center;
        margin: 1rem 0;

    }

    nav ul li {
        display: inline;
        margin-right: 0.5rem;
    }


    .projects-grid {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        gap: 15px;
    }

    .project-item {
        text-align: center;
    }

    footer {
        font-size: 0.8rem;
        /*Reduce the font size*/
        position: relative;
        bottom: 0;
        width: 100%;
        padding: 1rem;
    }

}

/_extra small screens :very small mobile phones (less than 480px)_/
@media (max-width: 480px) {
header.hero {
height: 100vh;
/_ Keep the same hero section height _/
width: 100%;
padding: 0.5px;
background-image: url("images/smallestscreen.jpg");
background-size: cover;
/_ Ensures the background covers the entire header _/
background-position: center;
/_ Centers the image _/
background-repeat: no-repeat;
/_ Prevents the image from repeating _/
display: flex;
align-items: center;
justify-content: center;
z-index: -1;
/_ Optional: Adjust text color to stand out on the image _/
/_ Optional: Center text inside the section _/
}

    .logos {
        max-width: 80px;
        /* Even smaller logos */
    }

    .logo-container {
        gap: 10px;
        /* Adjust gap further */
        flex-direction: row;
    }

    body {
        font-size: 14px;
        /*Reduce body text size*/
    }

    header.hero {
        height: 70vh;
        background: url('images/smallestscreen.jpg') no-repeat center center/cover;
        /*optional mobile specific wallpaper*/

    }

    .overlay h1 {
        font-size: 2rem;
    }

    .icon {
        width: 60px;
        height: 60px;
        /*scale down icons */
    }

    .projects-grid {
        gap: 10px;
        /*smaller gap between the items*/
    }

    footer {
        padding: 0.5rem;
        /*Adjust padding*/
    }

}

/_ Extra Small Screens (less than 320px) _/
@media (max-width: 320px) {

    /* Body Text Adjustments */
    body {
        font-size: 12px;
        /* Reduce font size for readability */
    }

    /* Header Section */
    header.hero {
        height: 60vh;
        /* Reduce header height for small screens */
        padding: 5px;
        /* Add small padding */
        background-image: url("images/smallestscreen.jpg");
        background-size: cover;
        /* Ensure background scales properly */
        background-position: top;
        /* Align background for visibility */
    }

    .hero h1 {
        font-size: 1.8rem;
        /* Reduce heading size */
    }

    .hero h2 {
        font-size: 1.2rem;
        /* Smaller subheading size */
    }

    .hero p {
        font-size: 0.9rem;
        /* Adjust paragraph text */
    }

    /* Navigation */
    nav ul {
        flex-direction: column;
        /* Stack navigation links vertically */
        gap: 5px;
        /* Add space between links */
        text-align: center;
    }

    nav ul li {
        margin: 0.5rem 0;
        /* Reduce margins */
    }

    /* Buttons */
    button {
        font-size: 0.8rem;
        /* Smaller button text */
        padding: 8px 12px;
        /* Adjust button padding */
    }

    .cta-button {
        font-size: 0.9rem;
        /* Adjust call-to-action button size */
        padding: 8px 10px;
    }

    /* Logo Section */
    .logos {
        max-width: 60px;
        /* Shrink logos further */
    }

    .logo-container {
        gap: 8px;
        /* Reduce gap between logos */
    }

    /* Project Grid */
    .projects-grid {
        gap: 10px;
        /* Reduce spacing between projects */
    }

    .project-item {
        padding: 10px;
        /* Adjust padding inside project items */
        font-size: 0.8rem;
        /* Reduce font size for project text */
    }

    /* Footer */
    footer {
        font-size: 0.7rem;
        /* Make footer text smaller */
        padding: 5px;
        /* Adjust footer padding */
    }

    /* Icons */
    .icon {
        width: 50px;
        height: 50px;
        /* Smaller icon dimensions */
    }

    .icon:hover {
        transform: scale(1.05);
        /* Slightly reduce hover effect */
    }

}

form {
display: flex;
flex-direction: column;
gap: 15px;
position: relative;
}

form div {
display: flex;
flex-direction: column;
position: relative;
}

form input,
form textarea {
padding: 10px;
border-radius: 5px;
border: 1px solid #ccc;
position: relative;
}

form button {
padding: 10px 20px;
border: none;
border-radius: 5px;
background-color: #ff5722;
color: white;
cursor: pointer;
transition: background-color 0.3s ease;
}

form button:hover {
background-color: #e64a19;
}
