document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  class Resume {
    constructor(
      public name: string = "",
      public email: string = "",
      public phone: string = "",
      public linkedin: string = "",
      public education: string[] = [],
      public skills: string[] = [],
      public workExperience: string[] = []
    ) {}

    addEducation(newEducation: string) {
      this.education.push(newEducation);
    }

    addSkill(newSkill: string) {
      this.skills.push(newSkill);
    }

    addExperience(newExperience: string) {
      this.workExperience.push(newExperience);
    }

    updatePersonalInfo(
      name: string,
      email: string,
      phone: string,
      linkedin: string
    ) {
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
      const nameDisplay = document.getElementById("name-display");
      const emailDisplay = document.getElementById("email-display");
      const phoneDisplay = document.getElementById("phone-display");
      const linkedinDisplay = document.getElementById("linkedin-display");

      if (nameDisplay && emailDisplay && phoneDisplay && linkedinDisplay) {
        nameDisplay.textContent = name;
        emailDisplay.textContent = email;
        phoneDisplay.textContent = phone;
        linkedinDisplay.setAttribute("href", linkedin);
        linkedinDisplay.textContent = linkedin;
      } else {
        console.error("Some DOM elements are missing.");
      }
    }

    updateLists() {
      // Update work experience list
      const experienceList = document.getElementById("experience-list")!;
      experienceList.innerHTML = "";
      this.workExperience.forEach((exp) => {
        const newExperience = document.createElement("li");
        newExperience.textContent = exp;
        experienceList.appendChild(newExperience);
      });

      // Update skills list
      const skillsList = document.getElementById("skills-list")!;
      skillsList.innerHTML = "";
      this.skills.forEach((skill) => {
        const newSkill = document.createElement("li");
        newSkill.textContent = skill;
        skillsList.appendChild(newSkill);
      });

      // Update education list
      const educationList = document.getElementById("education-list")!;
      educationList.innerHTML = "";
      this.education.forEach((edu) => {
        const newEducation = document.createElement("li");
        newEducation.textContent = edu;
        educationList.appendChild(newEducation);
      });
    }
  }

  // Initialize an empty resume
  const resume = new Resume();

  document
    .getElementById("resume-form")!
    .addEventListener("submit", function (event) {
      event.preventDefault();

      console.log("Form submitted");

      const nameInput = (document.getElementById("name") as HTMLInputElement)
        .value;
      const emailInput = (document.getElementById("email") as HTMLInputElement)
        .value;
      const phoneInput = (document.getElementById("phone") as HTMLInputElement)
        .value;
      const linkedinInput = (
        document.getElementById("linkedin") as HTMLInputElement
      ).value;
      const experienceInput = (
        document.getElementById("experience") as HTMLInputElement
      ).value;
      const skillInput = (document.getElementById("skill") as HTMLInputElement)
        .value;
      const educationInput = (
        document.getElementById("education") as HTMLInputElement
      ).value;

      // Validation Check
      if (!nameInput || !emailInput || !phoneInput || !linkedinInput) {
        alert("Please fill in all the required fields.");
        return;
      }

      resume.updatePersonalInfo(
        nameInput,
        emailInput,
        phoneInput,
        linkedinInput
      );

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
      (document.getElementById("resume-form") as HTMLFormElement).reset();
    });

  // Toggle skills visibility
  const toggleSkillsButton = document.getElementById("toggle-skills")!;
  toggleSkillsButton.addEventListener("click", () => {
    const skillsList = document.getElementById("skills-list")!;
    if (skillsList.style.display === "none") {
      skillsList.style.display = "block";
    } else {
      skillsList.style.display = "none";
    }
  });
});
