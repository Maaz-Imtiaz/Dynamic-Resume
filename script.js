document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    var Resume = /** @class */ (function () {
        function Resume(name, email, phone, linkedin, education, skills, workExperience) {
            if (name === void 0) { name = ""; }
            if (email === void 0) { email = ""; }
            if (phone === void 0) { phone = ""; }
            if (linkedin === void 0) { linkedin = ""; }
            if (education === void 0) { education = []; }
            if (skills === void 0) { skills = []; }
            if (workExperience === void 0) { workExperience = []; }
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.linkedin = linkedin;
            this.education = education;
            this.skills = skills;
            this.workExperience = workExperience;
        }
        Resume.prototype.addEducation = function (newEducation) {
            this.education.push(newEducation);
        };
        Resume.prototype.addSkill = function (newSkill) {
            this.skills.push(newSkill);
        };
        Resume.prototype.addExperience = function (newExperience) {
            this.workExperience.push(newExperience);
        };
        Resume.prototype.updatePersonalInfo = function (name, email, phone, linkedin) {
            console.log("Updating personal info...");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Phone:", phone);
            console.log("LinkedIn:", linkedin);
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.linkedin = linkedin;
            // Update DOM elements
            var nameDisplay = document.getElementById("name-display");
            var emailDisplay = document.getElementById("email-display");
            var phoneDisplay = document.getElementById("phone-display");
            var linkedinDisplay = document.getElementById("linkedin-display");
            if (nameDisplay && emailDisplay && phoneDisplay && linkedinDisplay) {
                nameDisplay.textContent = name;
                emailDisplay.textContent = email;
                phoneDisplay.textContent = phone;
                linkedinDisplay.setAttribute("href", linkedin);
                linkedinDisplay.textContent = linkedin;
            }
            else {
                console.error("Some DOM elements are missing.");
            }
        };
        Resume.prototype.updateLists = function () {
            // Update work experience list
            var experienceList = document.getElementById("experience-list");
            experienceList.innerHTML = "";
            this.workExperience.forEach(function (exp) {
                var newExperience = document.createElement("li");
                newExperience.textContent = exp;
                experienceList.appendChild(newExperience);
            });
            // Update skills list
            var skillsList = document.getElementById("skills-list");
            skillsList.innerHTML = "";
            this.skills.forEach(function (skill) {
                var newSkill = document.createElement("li");
                newSkill.textContent = skill;
                skillsList.appendChild(newSkill);
            });
            // Update education list
            var educationList = document.getElementById("education-list");
            educationList.innerHTML = "";
            this.education.forEach(function (edu) {
                var newEducation = document.createElement("li");
                newEducation.textContent = edu;
                educationList.appendChild(newEducation);
            });
        };
        return Resume;
    }());
    // Initialize an empty resume
    var resume = new Resume();
    document
        .getElementById("resume-form")
        .addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Form submitted");
        var nameInput = document.getElementById("name")
            .value;
        var emailInput = document.getElementById("email")
            .value;
        var phoneInput = document.getElementById("phone")
            .value;
        var linkedinInput = document.getElementById("linkedin").value;
        var experienceInput = document.getElementById("experience").value;
        var skillInput = document.getElementById("skill")
            .value;
        var educationInput = document.getElementById("education").value;
        // Validation Check
        if (!nameInput || !emailInput || !phoneInput || !linkedinInput) {
            alert("Please fill in all the required fields.");
            return;
        }
        resume.updatePersonalInfo(nameInput, emailInput, phoneInput, linkedinInput);
        if (experienceInput) {
            resume.addExperience(experienceInput);
        }
        if (skillInput) {
            resume.addSkill(skillInput);
        }
        if (educationInput) {
            resume.addEducation(educationInput);
        }
        resume.updateLists(); // Update lists after adding new data
        // Clear the form after submission
        document.getElementById("resume-form").reset();
    });
    // Toggle skills visibility
    var toggleSkillsButton = document.getElementById("toggle-skills");
    toggleSkillsButton.addEventListener("click", function () {
        var skillsList = document.getElementById("skills-list");
        if (skillsList.style.display === "none") {
            skillsList.style.display = "block";
        }
        else {
            skillsList.style.display = "none";
        }
    });
});
