interface IResume {
  name: string;
  email: string;
  phone: string;
  education: string[];
  skills: string[];
  workExperience: string[];
}

class Resume implements IResume {
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public education: string[],
    public skills: string[],
    public workExperience: string[]
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
}

const toggleSkillsButton = document.getElementById("toggle-skills");
const skillsSection = document.querySelector(".skills") as HTMLElement | null;

toggleSkillsButton?.addEventListener("click", () => {
  if (skillsSection) {
    if (skillsSection.style.display === "none") {
      skillsSection.style.display = "block";
    } else {
      skillsSection.style.display = "none";
    }
  }
});
