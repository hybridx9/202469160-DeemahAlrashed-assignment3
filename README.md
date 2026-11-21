# Personal Portfolio – Assignment 3

This is my personal portfolio website developed for Assignment 3. It builds on my previous assignments by adding advanced functionality, API integration, and performance improvements.

## Features

The website includes an About Me section, two projects with images, an Interests section, and a Contact section.

The About Me section has a Show More / Show Less button that displays additional information when clicked. The contact form uses JavaScript to validate user input and display feedback messages. The website also includes smooth hover transitions and a greeting based on the current time.

A GitHub Repositories section uses the GitHub API to fetch and display my public repositories. Visitors can filter repositories by programming language and sort them by name. The selected filter and sort order are saved using localStorage, so they remain selected after refreshing the page. An error message is displayed if the repositories cannot be loaded.

The project images were also optimized to improve loading performance.

## Technologies Used

HTML, CSS, and JavaScript were used to develop the website. The project also uses the GitHub REST API and localStorage.

## Setup

1.Clone or download this repository.
2.Open the project folder.
3.Run `python3 -m http.server 8000 --bind 127.0.0.1` in the terminal.
4.Open `http://localhost:8000` in a web browser.
5.An internet connection is required to load the GitHub repositories.

## AI Usage

ChatGPT was used for guidance, explanations, code suggestions, and reviewing the implementation. I made decisions about the features, adjusted the code to fit my portfolio, and tested the functionality and performance.

More details about AI use are provided in `docs/ai-usage-report.md`.

## Documentation

Technical details about the website are provided in `docs/technical-documentation.md`.