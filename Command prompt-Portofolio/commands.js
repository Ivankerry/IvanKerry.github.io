const commands = {
  help: "Available commands: about, skills, education, projects, interests, contact, theme, clear, joke, ascii",
  about: "Hi, I'm KERRY A passionate developer specializing in creative problem-solving.",
  skills: "Languages: HTML, CSS, JavaScript, C#, Python\nTools: Node.js, Java, C++, SEO",
  education: "B.Sc. in Computer Science from Kibabii University.\n<a href='https://drive.google.com/uc?export=download&id=1xvtYFk3bLz4MVK-xTtqFYEplt3vyNyTb' target='_blank'>Download CV</a>",
  projects: `Type the number of a project for more details:\n1. Portfolio Website\n2. Financial Tracker`,
  interests: "I love coding, solving puzzles, and exploring new tech like AI,Data analysis,Machine learning and blockchain.",
  contact: "Email: kerrymukoya2005@gmail.com \nGitHub: <a href= 'https://github.com/Ivankerry'  target='_blank'>Github</a>",
  joke: "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
  ascii: `
______
/      \\
|  😃  |
\\______/
  `,
  clear: () => { document.getElementById('output').innerHTML = ''; return ''; },
};

// Additional Commands
commands["1"] = "Portfolio Website: A terminal-style site showcasing my skills click link. <a href= 'https://github.com/Ivankerry/CommandTerminalPortofolio'  target='_blank'>VIEW PROJECT</a>" ;
commands["2"] = "Financial Tracker: A robust C# app for tracking expenses click link. <a href= 'https://github.com/Ivankerry/FinancialTracker'  target='_blank'>VIEW PROJECT</a>";
commands.theme = "Available themes: dark, neon, crt. Use `theme [name]` to switch.";
commands["theme dark"] = () => switchTheme('');
commands["theme neon"] = () => switchTheme('neon');
commands["theme crt"] = () => switchTheme('crt');
