// document.addEventListener("DOMContentLoaded", () => {
//     const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
//     const resumeContainer = document.getElementById("resumeContainer") as HTMLDivElement;

//     const addEducationButton = document.getElementById("addEducation") as HTMLButtonElement;
//     const educationSection = document.getElementById("educationSection") as HTMLDivElement;

//     const addWorkExperienceButton = document.getElementById("addWorkExperience") as HTMLButtonElement;
//     const workExperienceSection = document.getElementById("workExperienceSection") as HTMLDivElement;

//     const addSkillButton = document.getElementById("addSkill") as HTMLButtonElement;
//     const skillsSection = document.getElementById("skillsSection") as HTMLDivElement;

//     // Add more education fields
//     addEducationButton.addEventListener("click", () => {
//         const educationEntry = document.createElement("div");
//         educationEntry.classList.add("education-entry");
//         educationEntry.innerHTML = `
//             <label for="school">School:</label>
//             <input type="text" name="school[]" required>
//             <label for="degree">Degree:</label>
//             <input type="text" name="degree[]" required>
//             <label for="years">Years Attended:</label>
//             <input type="text" name="years[]" required>
//         `;
//         educationSection.appendChild(educationEntry);
//     });

//     // Add more work experience fields
//     addWorkExperienceButton.addEventListener("click", () => {
//         const workExperienceEntry = document.createElement("div");
//         workExperienceEntry.classList.add("work-experience-entry");
//         workExperienceEntry.innerHTML = `
//             <label for="company">Company:</label>
//             <input type="text" name="company[]" required>
//             <label for="role">Role:</label>
//             <input type="text" name="role[]" required>
//             <label for="duration">Duration:</label>
//             <input type="text" name="duration[]" required>
//             <label for="description">Description:</label>
//             <textarea name="description[]" required></textarea>
//         `;
//         workExperienceSection.appendChild(workExperienceEntry);
//     });

//     // Add more skills fields
//     addSkillButton.addEventListener("click", () => {
//         const skillEntry = document.createElement("div");
//         skillEntry.classList.add("skill-entry");
//         skillEntry.innerHTML = `
//             <label for="skill">Skill:</label>
//             <input type="text" name="skill[]" required>
//         `;
//         skillsSection.appendChild(skillEntry);
//     });

//     // Handle form submission
//     resumeForm.addEventListener("submit", (event) => {
//         event.preventDefault();

//         // Clear previous resume content
//         resumeContainer.innerHTML = '';

//         // Get form data
//         const formData = new FormData(resumeForm);

//         // Personal Information
//         const name = formData.get("name") as string;
//         const email = formData.get("email") as string;
//         const phone = formData.get("phone") as string;

//         const personalInfo = `
//             <section class="personal-info">
//                 <h1>${name}</h1>
//                 <p>Email: ${email}</p>
//                 <p>Phone: ${phone}</p>
//             </section>
//         `;
//         resumeContainer.innerHTML += personalInfo;

//         // Education
//         const schools = formData.getAll("school[]") as string[];
//         const degrees = formData.getAll("degree[]") as string[];
//         const years = formData.getAll("years[]") as string[];

//         let educationSection = `<section class="dropdown-section">
//             <h2 class="dropdown-header">Education</h2>
//             <div class="dropdown-content">
//                 <ul>`;
//         for (let i = 0; i < schools.length; i++) {
//             educationSection += `
//                 <li><strong>${schools[i]}</strong></li>
//                 <li>${degrees[i]} (${years[i]})</li>`;
//         }
//         educationSection += `</ul></div></section>`;
//         resumeContainer.innerHTML += educationSection;

//         // Work Experience
//         const companies = formData.getAll("company[]") as string[];
//         const roles = formData.getAll("role[]") as string[];
//         const durations = formData.getAll("duration[]") as string[];
//         const descriptions = formData.getAll("description[]") as string[];

//         let workExperienceSection = `<section class="dropdown-section">
//             <h2 class="dropdown-header">Work Experience</h2>
//             <div class="dropdown-content">
//                 <ul>`;
//         for (let i = 0; i < companies.length; i++) {
//             workExperienceSection += `
//                 <li>
//                     <strong>${companies[i]}</strong>, ${durations[i]}
//                     <ul>
//                         <li>${roles[i]}</li>
//                         <li>${descriptions[i]}</li>
//                     </ul>
//                 </li>`;
//         }
//         workExperienceSection += `</ul></div></section>`;
//         resumeContainer.innerHTML += workExperienceSection;

//         // Skills
//         const skills = formData.getAll("skill[]") as string[];

//         let skillsSection = `<section class="dropdown-section">
//             <h2 class="dropdown-header">Skills</h2>
//             <div class="dropdown-content">
//                 <ul>`;
//         skills.forEach(skill => {
//             skillsSection += `<li>${skill}</li>`;
//         });
//         skillsSection += `</ul></div></section>`;
//         resumeContainer.innerHTML += skillsSection;

//         // Show the resume
//         resumeContainer.classList.add("show");

//         // Re-attach the event listeners to the newly created headers
//         attachDropdownListeners();
//     });

//     // Function to attach event listeners to dropdown headers
//     const attachDropdownListeners = () => {
//         const headers = document.querySelectorAll('.dropdown-header');

//         headers.forEach(header => {
//             header.addEventListener('click', () => {
//                 const content = header.nextElementSibling as HTMLElement;
//                 content.classList.toggle('show'); // Toggle the 'show' class
//             });
//         });
//     };

//     // Attach listeners for the dropdown sections when the page loads
//     attachDropdownListeners();
// });

