# GitHub Profile Explorer

A responsive web application built with HTML, CSS, and JavaScript that allows users to explore GitHub profiles using the GitHub REST API. Browse popular GitHub users, search for a specific profile, and navigate through profiles using pagination.

## Features

* Display 20 GitHub profiles on initial load
* Search for any GitHub user by username
* Next and Previous buttons for profile navigation
* View user avatar and username
* Direct link to each GitHub profile
* Responsive design for desktop, tablet, and mobile devices
* Clean and modern dark-themed UI
* Fetches live data from the GitHub REST API

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* GitHub REST API

## Screenshot

![Github Profile Explorer](./screenshot.png)

## Live Demo

https://ketansdev.github.io/Thunder/Projects/JS-API-Projects/01-github-profile-explorer/

## Learning Outcomes

* Fetch API
* Async/Await
* Working with REST APIs
* DOM Manipulation
* Event Handling
* Dynamic UI Rendering
* Search Functionality
* Pagination
* Responsive Web Design

## How It Works

1. The application fetches and displays 20 GitHub profiles by default.
2. Use the **Next** and **Previous** buttons to browse additional profiles.
3. Enter a GitHub username in the search bar and click **Search** to view the selected profile.
4. Click **View Profile** to open the user's GitHub profile in a new tab.

## API Used

* GitHub Users API

  * `https://api.github.com/users`
  * `https://api.github.com/users/{username}`
