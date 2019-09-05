
Tasks
1. Sit together.
2. Choose your scrum master (this person would be the designated project leader
responsible to help manage the project and the project’s GitHub repository).
3. Pick a project idea from the provided list of projects
4. Pick the features for your first sprint.
What can be completed and shipped in 3-4 days?
5. Decide your UI library: Bootstrap, Material, Ionic.
6. The scrummaster creates the github repo, grants read/write access to team members
and instructors.
7. Find a good starter/seed project to start from, and push it to github.
You may want to create a branch for each person to work in, and the scrummaster would
merge it into the master branch when features get completed.

Notes
1. K.I.S.S. principle!!
Do fewer features, and do them well! Stay focused on the simple tasks.
2. Assume ONE user type
Just build the app for basic users--do not build admin features (like store admin).
3. The product should be shippable at the end of each sprint (each sprint is 4 days long).
4. If you get stuck on something, please ask an instructor or any students for help.
Don't take too much time from students outside your team. Be patient with each other!

Important Dates
Product Kickoff: Tue 9/3/2019
Sprint 1 Complete: Fri 9/6/2019
Sprint 2 Complete: Thu 9/12/2019
Product Complete: Thu 9/12/2019
Prepare for Presentation: Fri 9/13/2019 - first half
Product Presentations: Fri 9/13/2019 - second half

Rubric
Required (2 points each)
1. Work on a team of 3 or 4 to build a production-ready web app or mobile app
2. App must support user authentication , by a service accepted through Firebase
(Google is recommended)
3. App must store user data and app data securely on Firebase.
4. App consists of all 4 pages mentioned in the API outline.
5. Use Angular app structure , including routes, components, services, interfaces,
etc.
6. App should have zero critical bugs and up to three small bugs (a critical bug is
defined as one that blocks a user from using or completing a major feature in
your app and for which there is no workaround).
7. Commit and push your work to github daily (give teachers read access.
Alberto’s github account: albertogarza, Mario’s github account: marioagarcia)
8. Publish web app on a public website (firebase, github.io, ionic.io, anywhere)
9. Submit written user feedback from at least 5 people from outside of class who
try using your app
10. Present your app and code to the class on the last day of Angular (~20 minutes)
11. Participate , and rate your team members participation (0-8). This is 25% of your
grade for this project.

FAQ
How should I rate my teammates’ participation?
Here is a good rule of thumb: You would give a teammate 8 points if you feel they did
their best, communicated timely when they were going to be absent, and collaborated on
the project by coding. You would give only 4 points to a teammate if you feel they did ok,
did not communicate with the team on a timely manner about tardies and absences, and
contributed to the project’s code in a limited fashion (only CSS or very few lines of code).
You would give 0 points to a teammate if they barely contributed to the project or nothing
at all, and showed complete disregard about communicating to the team about tardies
and absences. You can also give points in between as you see fit.



Giphy API
General Requirements:
1. Must support firebase Google Auth.
2. App must store user data and app data securely on Firebase.
3. Use Angular structure to implement routes, components, services, HTTP calls, and
observables.
4. App should have zero critical bugs and up to three small bugs (a critical bug is
defined as one that blocks a user from using or completing a major feature in your
app and for which there is no workaround).
5. Commit and push your work to GitHub daily.
6. Publish web app on public website.

App Specific Requirements:
The goal of the Giphy API is to create a conversation between multiple users only using
GIFs. Your app must have a minimum of four different pages, but you can add more
pages/details than are listed here if you would like. It is up to you how you route between
pages 2-4.
1. The first page (only page that order matters) that the user sees should be a login
page to login with Firebase Google Auth.
2. The second page should display all of the giphy chats/conversations that the current
user is involved with. Not the actual conversation, but a title or a quick reference
that can be clicked. The user should also have the ability to click a trash icon on each
of the conversations to remove them self from that conversation. Lastly, the user
should have the option to start a new chat/conversation from this page.
3. The third page should display a single giphy chat/conversation that has been clicked
on from the page that displays all the user’s giphy conversations. On this page a user
can add more users to the conversation. Opening an already created conversation
should load the previously added giphys (get GIFs by ID endpoint). There should be
an input that can allow the user to enter a single word/short phrase. Upon entering
a word/short phrase a new giphy should be added to the conversation. You will use
the giphy search endpoint to achieve this. Each person’s chat should have their own
indicating color throughout the thread. Each added chat should have the user’s
name who added the chat, the time stamp of when it was added, and an option for a
user to add/remove it as one of their favorite giphys.
4. The fourth page should be for displaying data about the current user. Display all of
the conversations that the current user started. The user should be able to click one
of those conversations and add/delete users from the conversation. Also display the
date of their last added giphy between any of their conversations. Display all of their
favorited giphys. Display one or two other user names that appear in all of your
conversations most frequently (If you have multiple conversations with different
groups of people, but there is one or two of the same people in each of those
conversations).
I would recommend (optional) using the Angular Material ‘mat-card’ to help
display/separate each chat. (“https://material.angular.io/components/card/overview”).

Setup:
1. Go to “https://developers.giphy.com/“
2. Click “Log In”
3. Go back to “https://developers.giphy.com/“
4. Click “Create an App”
5. Enter in required info
6. Click “Create New App”
7. API key should be given on left hand side
8. Store your API key in a place that is inaccessible to the public
9. Go to “https://developers.giphy.com/docs/“ for API documentation

Endpoints:
The endpoints listed below are examples only and can be altered to the way you need them.
1. Search for a giphy by keyword(s) -
“http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=YourAPIKeyHere”
1. Additional info can be found under the “Search Endpoint” section of the
documentation
2. Search for giphys by id -
“http://api.giphy.com/v1/gifs/ids=111,222,333&api_key=YourAPIKeyHere”
1. Additional info can be found under the “Get GIFs by ID Endpoint” section of
the documentation
