# WEB102 Prework - Sea Monster

Submitted by: Mignot Mesele

Sea Monster is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: 5 hours spent in total

## Required Features

The following **required** functionality is completed:

* [X] The introduction section explains the background of the company and how many games remain unfunded.
* [X] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [X] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [X] List anything else that you can get done to improve the app functionality!
* [X] Add search functionality
* [X] Add an about page for every game

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='Animation.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [ScreenToGif](https://www.screentogif.com/)

## Notes

Some challenges I faced were resizing all boxes containing each game because they started out huge which was not expected. Also had issues trying to add filtering to search bar everytime a new change in the text field was made. A huge issue was creating the about page because I was approaching for making a universal about page so that when you click on a game, it would send you to that about page but it gets changed based on the game chosen. I did this so i wouldn't have to hard code an about page for every game and instead have one about page that grabs the name of the game through the url and displays the correct information tailored to it. Figuring out how to send the name was hard at first but figure out how to add it to the url with window.location.href and urlSearchParams. To make the games clickable links, I had to place the class name, game-card, from the div I made to a new a tag, which altered the page in a bad way with elements overflowing. I was able to fix this by adding display:block and setting a fixed height to the style.css file and it went back to normal.

## License

    Copyright [2024] [Mignot Mesele]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
