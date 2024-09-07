// Create a Resume class implementing IResume
var Resume = /** @class */ (function () {
    function Resume(name, email, phone, education, skills, workExperience) {
        this.name = name;
        this.email = email;
        this.phone = phone;
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
    return Resume;
}());
// TypeScript code to toggle the visibility of the skills section
var toggleSkillsButton = document.getElementById("toggle-skills");
var skillsSection = document.querySelector(".skills");
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener("click", function () {
    if (skillsSection) {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
        }
        else {
            skillsSection.style.display = "none";
        }
    }
});
