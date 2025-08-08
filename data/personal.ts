export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  greeting: string;
  profileImage: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Syahrul Apriansyah",
  title: "AI Engineer & Software Engineer",
  greeting: "Hello Everyone 👋, I am",
  description: "I build robust software and intelligent systems. Passionate about leveraging AI to solve real-world problems.",
  profileImage: "/profile-photo.png",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/syahrul-apriansyah-257bab207/",
    github: "https://github.com/SyahrulApr86",
    email: "apriansyah.syahrul@gmail.com"
  }
};