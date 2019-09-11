# JPMCSummer2019-Thoughts
[JPMC 2019 Summer] - Project: A website on my Summer 2019
- A React Application where I share my thoughts and experiences on my internship at JPMorgan Chase & Co at the Chicago, IL office. This application served as a way for me to practice React and JavaScript.

# Summary
- This project seemed simple, but it did have its challenges. The challenge came when I wanted to figure out how to structure the project. Thanks to this [article](https://medium.com/@Preda/getting-started-on-building-a-personal-website-with-react-b44ee93b1710) I got an idea and was able to create the components I need.

- Then I wanted to try something new in the way I display pictures of my adventures in Chicago. My first attempt was to use a [images side by side](https://www.w3schools.com/howto/howto_css_images_side_by_side.asp) and use [image modals](https://www.w3schools.com/howto/howto_css_modal_images.asp). This approach did not work. I noticed that I was only able to use the modal effect on one picture. I tried using a built in library since maybe I was implementing incorrectly by doing it manually. I tried using [react-bootstrap](https://react-bootstrap.github.io). I successfully implemented the modal effect, but it only worked on one picture.

- I looked up to see if other people try to do same thing as me. I found this [stackoverflow post](https://stackoverflow.com/questions/35060594/react-bootstrap-multiple-modal) then it took me to this [GitHup Repo](https://github.com/AgileVentures/agile-ventures-website-react-front-end/blob/4_homepage_changes_mob/src/App.js#L26). But I was not able to implement it.

- So I looked up a different way to display images and I found [bootstrap carousel](https://getbootstrap.com/docs/4.3/components/carousel/). This solution worked for me and I was able to display a brief description of the picture which is what I wanted.

- Also, I learned how to deploy this website using Surge. Surge is great tool that allows easy deployment of simple, single-command web publishing. I will start using this for my projects.

- Also, I tried something new in the differences between font when applied to heading and paragraph text. I used [Open Sans](https://fonts.google.com/?query=open+sans) for headings and [Merriweather](https://fonts.google.com/?query=merr&selection.family=Merriweather) for paragraph text.

# Technology
- HTML
- CSS
- React
- JavaScript
- Surge (For Deployment)
- Git
