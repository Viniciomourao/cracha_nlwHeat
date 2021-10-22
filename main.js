const linksSocialMedia = {
  github: 'viniciomourao',
  instagram: 'viniciomourao',
  facebook: 'viniciomourao',
  youtube: 'UCp_SWOYEhTBW54svcDVFu7Q'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.userName
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImages.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
