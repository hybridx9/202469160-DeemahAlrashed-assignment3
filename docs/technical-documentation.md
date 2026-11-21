# Technical Documentation

## Project Overview

This project is a personal portfolio website developed using HTML, CSS, and JavaScript. It builds on Assignments 1 and 2 by adding new JavaScript features, GitHub API integration, state management using localStorage, and performance improvements. The website includes information about me, my projects, my interests, a contact form, and a section displaying my public GitHub repositories.

## Project Structure

`index.html` contains the structure and content of the website, including the GitHub repositories section and its controls.
`css/styles.css` contains the styling, responsive design, transitions, and styling for the repository controls and links.
`js/script.js` contains the JavaScript for the greeting, Show More / Show Less button, contact form validation, GitHub API integration, filtering, sorting, and localStorage.
`assets/images` contains the images used for the projects.
`docs/technical-documentation.md` explains the implementation and testing.
`docs/ai-usage-report.md` documents how AI was used during development.
`README.md` provides an overview of the project and setup instructions.

## HTML

The website is divided into About Me, Projects, GitHub Repositories, Interests, and Contact sections. Navigation links are used to move between the main sections.

The About Me section includes a button that displays or hides additional information. The Projects section contains two projects with titles, descriptions, and images. The Contact section contains fields for name, email, and message, along with an area for displaying feedback.

The GitHub Repositories section contains two dropdown menus. The first allows visitors to filter repositories by language, while the second allows them to sort repositories alphabetically. It also includes an area for displaying the repositories and messages related to loading or errors.

## CSS and Responsive Design

CSS is used to style the navigation bar, sections, project cards, contact form, buttons, and GitHub repositories section. Flexbox is used for the navigation bar and contact form.

Media queries are used to adjust the layout for different screen sizes. For example, the navigation links are arranged vertically on smaller screens. The repository controls can also appear on separate lines when there is not enough space.

Smooth transitions are used for buttons and project cards. The GitHub repository links use a simple list layout with separators, and long repository names can wrap to avoid horizontal scrolling.

## JavaScript and Interactive Features

JavaScript displays a greeting based on the current time. It also controls the Show More / Show Less button, allowing visitors to view additional information about my interests and goals.

The contact form uses JavaScript to check whether all fields are filled in and whether the email address has a valid format. If the input is invalid, an error message appears. If the input is valid, a confirmation message is displayed and the form fields are cleared. The form does not send messages to a server.

### GitHub API Integration

The website uses the GitHub REST API to retrieve my public repositories from:

`https://api.github.com/users/hybridx9/repos`

The `loadRepositories()` function uses `fetch()` to send a request to the API. Since the request is asynchronous, the function uses `async` and `await` to wait for the response. If the request is successful, the response is converted into JSON and stored in the `repositories` array.

The `displayRepositories()` function then creates links for the repositories using their names and GitHub URLs. These links open in a new tab.

A loading message is displayed while the request is being processed. If the request fails or the response is unsuccessful, a `catch` block displays an error message.

### Filtering and Sorting

The `displayRepositories()` function also handles filtering and sorting.

Visitors can choose between All Repositories, JavaScript, and Other Languages. The function uses `filter()` to select the repositories that match the chosen option based on the `language` property returned by GitHub.

The selected repositories are then sorted by name using `sort()` and `localeCompare()`. Visitors can choose either A–Z or Z–A.

After filtering and sorting, the repository list is cleared and updated with the matching results. If no repositories match the selected filter, a message is displayed.

### State Management

The website uses `localStorage` to remember the selected repository filter and sort order.

When a visitor changes either dropdown, its selected value is saved in localStorage. When the page loads again, JavaScript retrieves the saved values and applies them to the dropdowns.

This allows the selected filter and sort options to remain the same even after the page is refreshed.

## Performance Improvements

The project images were optimized to reduce their file sizes and improve loading performance. The Company Waste image was resized from 2048 × 1365 pixels to approximately 900 × 600 pixels, reducing its file size from about 206 KB to 78 KB.

Both project images use `loading="lazy"` to delay loading until needed. I also added width and height attributes to help prevent layout shifts while the images load.

I used Chrome Lighthouse to measure mobile performance before and after these improvements. The Performance score increased from 94 to 99 out of 100. Largest Contentful Paint (LCP) also improved from 3.2 seconds to 2.3 seconds.

## Testing

I tested the original interactive features, including the Show More / Show Less button and the contact form with empty fields, invalid email addresses, spaces, and valid inputs.

For the GitHub API integration, I checked that the repositories loaded correctly and that their links opened the corresponding GitHub pages. I tested each filter option and both sorting orders to make sure the displayed repositories changed correctly.

I also refreshed the page after changing the filter and sort options to verify that localStorage restored the saved preferences. To test error handling, I simulated a network failure and checked that the error message appeared.

I checked the layout on desktop and mobile screen sizes using Chrome DevTools, including the repository dropdowns and long repository names. Finally, I used Lighthouse to measure performance and verify the improvements after optimizing the images.