function createLicenseBadge(licenses) {
        let licenseArea = ''
        if (licenses.includes('none')) {
            return ''
        }
        for (let i = 0; i < licenses.length; i++) {
            licenseArea += writeBadge(licenses[i]) + ' '
        }
        return licenseArea
    }
    
    function writeBadge(license) {
            switch (license) {
                case 'GNU GPLv3':
                    return '![](https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen)'
                    break;
                case 'MIT':
                    return '![](https://img.shields.io/apm/l/vim-mode)'
                    break;
                case 'Apache':
                    return '![](https://img.shields.io/aur/license/android-studio)'
                    break;
                case 'ISC':
                    return '![](https://img.shields.io/badge/license-ISC-brightgreen)'
                    break;
                case 'None':
                    return '![](https://img.shields.io/badge/license-None-red)';            
            }  
    }
function generateMarkdown(data, githubInfo) {
    return `
  # **${data.title}**

  ${createLicenseBadge(data.license)}
  
  
  ## Description 
  
  ${data.description}
  
  ## Table of contents
  
  - [Description](#Description)
  - [Installation](#Installation)
  - [usage](#usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub & Questions](#GitHub_&_Questions) 
  
  
  ## Installation
  
          ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${data.license}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Test
  
  ${data.test}
  
  
  ## Repository
  
  - [Project Repo](${data.repo})
  
  ## GitHub_&_Questions
  
  ![author image](${githubInfo.githubImage})
  - ${githubInfo.name}
  - [GitHub Profile](${githubInfo.profile})
  - <${githubInfo.email}>
  
  `;
  }
  
  module.exports = generateMarkdown;
  