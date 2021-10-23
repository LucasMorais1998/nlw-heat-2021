// let accept = true
// let user = {name: "Lucas", phone: 123456789, age: 22// }
// alert(user.age)
      
// function showMeSomething(){}
        
const linksSocialMedia = {
    github: "LucasMorais1998",
    youtube: "maykbrito",
    facebook: "maykbrito",
    instagram: "lucasms98_",
    twitter: "lucasmds198",
}

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href =`https://${social}.com/${linksSocialMedia[social]}`
        console.log(li.children[0].href)
    }
}
changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userGitHub.href = data.html_url
            userPhoto.src = data.avatar_url
            userLogin.textContent = data.login
        })
    
}
      
getGitHubProfileInfos()