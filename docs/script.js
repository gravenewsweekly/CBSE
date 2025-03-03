document.addEventListener("DOMContentLoaded", function() {
    loadContent("home");
});

function loadContent(page) {
    const content = document.getElementById("content");

    switch (page) {
        case "home":
            content.innerHTML = `<h2>Welcome to CBSE Mastery Hub</h2>
                                 <p>Select a section from the navigation above.</p>`;
            break;

        case "study":
            content.innerHTML = `<h2>Study Materials</h2>
                                 <button onclick="loadSubject('math')">Mathematics</button>
                                 <button onclick="loadSubject('science')">Science</button>`;
            break;

        case "quizzes":
            content.innerHTML = `<h2>Quizzes</h2>
                                 <p>Select a subject to take a quiz.</p>
                                 <button onclick="startQuiz()">Start Quiz</button>`;
            break;

        case "analytics":
            content.innerHTML = `<h2>Progress & Analytics</h2>
                                 <p>Your study progress will be shown here.</p>`;
            break;

        case "forum":
            content.innerHTML = `<h2>Doubt Forum</h2>
                                 <p>Ask your questions here.</p>
                                 <textarea id="question" placeholder="Type your question..."></textarea>
                                 <button onclick="postQuestion()">Post</button>
                                 <div id="forum-questions"></div>`;
            break;
    }
}

function loadSubject(subject) {
    alert("Loading content for " + subject);
}

function startQuiz() {
    alert("Starting Quiz...");
}

function postQuestion() {
    let questionText = document.getElementById("question").value;
    if (questionText) {
        let forumDiv = document.getElementById("forum-questions");
        let newQuestion = document.createElement("p");
        newQuestion.textContent = questionText;
        forumDiv.appendChild(newQuestion);
        document.getElementById("question").value = "";
    }
}
