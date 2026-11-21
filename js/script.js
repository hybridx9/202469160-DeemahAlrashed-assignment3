//Display a greeting based on the current time
const greeting = document.getElementById("greeting");
const hour = new Date().getHours(); //Get the current hour

//Change greeting based on time
if (hour < 12) {
    greeting.textContent = "Good morning!";
} else if (hour < 18) {
    greeting.textContent = "Good afternoon!";
} else {
    greeting.textContent = "Good evening!";
}

//Show or hide additional information
const toggleButton = document.getElementById("toggle-info");
const moreInfo = document.getElementById("more-info");

toggleButton.addEventListener("click", function () {
    if (moreInfo.hidden) {
        moreInfo.hidden = false;
        toggleButton.textContent = "Show Less";
    } else {
        moreInfo.hidden = true;
        toggleButton.textContent = "Show More";
    }
});

// Validate the contact form and display feedback
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Your message has been validated successfully!";
        formMessage.style.color = "green";
        contactForm.reset();
    }
});

// Fetch public repositories from GitHub
const repoList = document.getElementById("repo-list");
const repoMessage = document.getElementById("repo-message");

async function loadRepositories() {
    repoMessage.textContent = "Loading repositories...";

    try {
        const response = await fetch("https://api.github.com/users/hybridx9/repos");

        if (!response.ok) {
            throw new Error("Failed to fetch repositories");
        }

        const repositories = await response.json();

        repoList.innerHTML = "";

        repositories.forEach(function (repo) {
            const repoItem = document.createElement("div");

            const repoLink = document.createElement("a");
            repoLink.href = repo.html_url;
            repoLink.textContent = repo.name;
            repoLink.target = "_blank";
            repoLink.rel = "noopener noreferrer";

            repoItem.appendChild(repoLink);
            repoList.appendChild(repoItem);
        });

        repoMessage.textContent = "";
    } catch (error) {
        repoMessage.textContent = "Unable to load repositories. Please try again later.";
    }
}

loadRepositories();