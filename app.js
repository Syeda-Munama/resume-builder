document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById("resumeForm");
    var resumeContainer = document.getElementById("resumeContainer");
    var addEducationButton = document.getElementById("addEducation");
    var educationSection = document.getElementById("educationSection");
    var addWorkExperienceButton = document.getElementById("addWorkExperience");
    var workExperienceSection = document.getElementById("workExperienceSection");
    var addSkillButton = document.getElementById("addSkill");
    var skillsSection = document.getElementById("skillsSection");
    // Add more education fields
    addEducationButton.addEventListener("click", function () {
        var educationEntry = document.createElement("div");
        educationEntry.classList.add("education-entry");
        educationEntry.innerHTML = "\n            <label for=\"school\">School:</label>\n            <input type=\"text\" name=\"school[]\" required>\n            <label for=\"degree\">Degree:</label>\n            <input type=\"text\" name=\"degree[]\" required>\n            <label for=\"years\">Years Attended:</label>\n            <input type=\"text\" name=\"years[]\" required>\n        ";
        educationSection.appendChild(educationEntry);
    });
    // Add more work experience fields
    addWorkExperienceButton.addEventListener("click", function () {
        var workExperienceEntry = document.createElement("div");
        workExperienceEntry.classList.add("work-experience-entry");
        workExperienceEntry.innerHTML = "\n            <label for=\"company\">Company:</label>\n            <input type=\"text\" name=\"company[]\" required>\n            <label for=\"role\">Role:</label>\n            <input type=\"text\" name=\"role[]\" required>\n            <label for=\"duration\">Duration:</label>\n            <input type=\"text\" name=\"duration[]\" required>\n            <label for=\"description\">Description:</label>\n            <textarea name=\"description[]\" required></textarea>\n        ";
        workExperienceSection.appendChild(workExperienceEntry);
    });
    // Add more skills fields
    addSkillButton.addEventListener("click", function () {
        var skillEntry = document.createElement("div");
        skillEntry.classList.add("skill-entry");
        skillEntry.innerHTML = "\n            <label for=\"skill\">Skill:</label>\n            <input type=\"text\" name=\"skill[]\" required>\n        ";
        skillsSection.appendChild(skillEntry);
    });
    // Handle form submission
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Clear previous resume content
        resumeContainer.innerHTML = '';
        // Get form data
        var formData = new FormData(resumeForm);
        // Personal Information
        var name = formData.get("name");
        var email = formData.get("email");
        var phone = formData.get("phone");
        var personalInfo = "\n            <section class=\"personal-info\">\n                <h1>".concat(name, "</h1>\n                <p>Email: ").concat(email, "</p>\n                <p>Phone: ").concat(phone, "</p>\n            </section>\n        ");
        resumeContainer.innerHTML += personalInfo;
        // Education
        var schools = formData.getAll("school[]");
        var degrees = formData.getAll("degree[]");
        var years = formData.getAll("years[]");
        var educationSection = "<section class=\"dropdown-section\">\n            <h2 class=\"dropdown-header\">Education</h2>\n            <div class=\"dropdown-content\">\n                <ul>";
        for (var i = 0; i < schools.length; i++) {
            educationSection += "\n                <li><strong>".concat(schools[i], "</strong></li>\n                <li>").concat(degrees[i], " (").concat(years[i], ")</li>");
        }
        educationSection += "</ul></div></section>";
        resumeContainer.innerHTML += educationSection;
        // Work Experience
        var companies = formData.getAll("company[]");
        var roles = formData.getAll("role[]");
        var durations = formData.getAll("duration[]");
        var descriptions = formData.getAll("description[]");
        var workExperienceSection = "<section class=\"dropdown-section\">\n            <h2 class=\"dropdown-header\">Work Experience</h2>\n            <div class=\"dropdown-content\">\n                <ul>";
        for (var i = 0; i < companies.length; i++) {
            workExperienceSection += "\n                <li>\n                    <strong>".concat(companies[i], "</strong>, ").concat(durations[i], "\n                    <ul>\n                        <li>").concat(roles[i], "</li>\n                        <li>").concat(descriptions[i], "</li>\n                    </ul>\n                </li>");
        }
        workExperienceSection += "</ul></div></section>";
        resumeContainer.innerHTML += workExperienceSection;
        // Skills
        var skills = formData.getAll("skill[]");
        var skillsSection = "<section class=\"dropdown-section\">\n            <h2 class=\"dropdown-header\">Skills</h2>\n            <div class=\"dropdown-content\">\n                <ul>";
        skills.forEach(function (skill) {
            skillsSection += "<li>".concat(skill, "</li>");
        });
        skillsSection += "</ul></div></section>";
        resumeContainer.innerHTML += skillsSection;
        // Show the resume
        resumeContainer.classList.add("show");
        // Re-attach the event listeners to the newly created headers
        attachDropdownListeners();
    });
    // Function to attach event listeners to dropdown headers
    var attachDropdownListeners = function () {
        var headers = document.querySelectorAll('.dropdown-header');
        headers.forEach(function (header) {
            header.addEventListener('click', function () {
                var content = header.nextElementSibling;
                content.classList.toggle('show'); // Toggle the 'show' class
            });
        });
    };
    // Attach listeners for the dropdown sections when the page loads
    attachDropdownListeners();
});
