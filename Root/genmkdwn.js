function generateMarkdown(data, githubInfo) {
    return `
  # **${data.title}**
  
  ${data.badge}
  
  ## Description 
  
  ${data.description}
  
  ## Table of contents
  
  - [Description](#Description)
  - [Installation](#Installation)
  - [objective](#objective)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 
  
  
  ## Installation
  
          ${data.installation}
  
  ## Objective
  
  ${data.usage}
  
  ## License
  
  ${data.license}
  
  ## Contributors
  
  ${data.contributing}
  
  ## Test
  
  ${data.test}
  
  
  ## Repository
  
  - [Project Repo](${data.repo})
  
  ## GitHub
  
  ![author image](${githubInfo.githubImage})
  - ${githubInfo.name}
  - [GitHub Profile](${githubInfo.profile})
  - <${githubInfo.email}>
  
  `;
  }
  
  module.exports = generateMarkdown;
  