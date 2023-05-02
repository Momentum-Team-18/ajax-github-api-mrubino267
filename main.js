let mainContainer = document.querySelector("#mainContainer");
let firstDiv = document.querySelector("#firstDiv");
let secondDiv = document.querySelector("#secondDiv");
let thirdDiv = document.querySelector("#thirdDiv");

let gitUrl = "https://api.github.com/users/mrubino267";
console.log(gitUrl);

fetch(gitUrl, {
    method: "GET",
    headers: {"Content-Type": "application/json" },
})

.then(function(response) {
    return response.json();
})

.then(function(info) {
    
    //profile pic

    let gitHubPic = document.createElement('img');
    gitHubPic.src = info.avatar_url;
    gitHubPic.classList.add("gitHubPic")
    // firstDiv.classList.add("#firstDiv");

    firstDiv.appendChild(gitHubPic);

    //location
    let locationGit = document.createElement('h5');
    locationGit.innerText = `Location : ${info.location} \n GitHub Username: ${info.login} \n GitHub Url: `;

    secondDiv.appendChild(locationGit);

    let gitUrl = document.createElement('a');
    gitUrl.href = info.html_url;
    gitUrl.innerText = info.html_url;
    gitUrl.classList.add('gitUrl');
    locationGit.appendChild(gitUrl);
}
);
   
fetch("https://api.github.com/users/mrubino267/repos",
    {   method: "GET",
        headers: {"Content-Type": "application/json"},
})

.then(function(response) {
    return response.json();
})

.then(function(info) {
for(let i=0; i < info.length; i++) {
    let repoLink = document.createElement('a');
    let repoName = document.createTextNode(info[i].name);
    repoLink.appendChild(repoName);
    repoLink.title = info[i].name;
    repoLink.href = info[i].html_url;
    thirdDiv.appendChild(repoLink);
};
});




// let mainContainer = document.querySelector("#mainContainer");
// console.log(mainContainer);

// let header = document.querySelector("#header");
// console.log(header);

// let subHeader = document.querySelector("#subHeader");
// console.log(subHeader);

// let repoContainer = document.querySelector("#repoContainer");
// console.log(repoContainer);


// let gitUrl = "https://api.github.com/users/mrubino267";


// fetch(gitUrl, {
//   method: "GET",
//   headers: { "Content-Type": "application/json" },
// })c

// .then((response) => {
//   console.log(response)
// return response.json();
// })

// .then((body) => {
//   console.log(body)
//   return body;
// })

// .then ((attributes) => {

//   let imageUrl = document.createElement("img");
//   imageUrl.src = `${attributes.avatar_url}`;
//   header.appendChild(imageUrl);
//   imageUrl.classList.add("profileImage");

//   let location = document.createElement("p");
//   location.innerText =`${attributes.location}`;
//   subHeader.appendChild(location);
//   location.classList.add("subHeader");

// //   let repos = document.createElement("h2");
// //   repos.innerText = `${attributes.repos_url}`;
// //   subHeader.appendChild(repos);
// //   repos.classList.add("subHeader");

//   let urlContainer = document.createElement("h3");
//     middleBox.appendChild(urlContainer)
//     urlContainer.classList.add("urlText")
//     urlContainer.innerText = "GitHub URL:"

//     let gitUrl = document.createElement("a");
//     gitUrl.href = gitData.html_url
//     gitUrl.innerText = `${gitData.html_url}`;
//     gitUrl.classList.add('gitUrl');
//     urlContainer.appendChild(gitUrl);

// })
