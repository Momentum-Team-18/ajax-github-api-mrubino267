let mainContainer = document.querySelector("#mainContainer");
console.log(mainContainer);

let header = document.querySelector("#header");
console.log(header);

let subHeader = document.querySelector("#subHeader");
console.log(subHeader);

let repoContainer = document.querySelector("#repoContainer");
console.log(repoContainer);

let gitUrl = "https://api.github.com/users/mrubino267";


fetch(gitUrl, {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})

.then((response) => {
  console.log(response)
return response.json();
})

.then((body) => {
  console.log(body)
  return body;
})

.then ((attributes) => {

  let imageUrl = document.createElement("img");
  imageUrl.src = `${attributes.avatar_url}`;
  header.appendChild(imageUrl);
  imageUrl.classList.add("profileImage")

  let location = document.createElement("p");
  location.innerText =`${attributes.location}`;
  subHeader.appendChild(location);
  location.classList.add("subHeader")

  let repoUrl = document.createElement("h2");
  repoUrl.innerText = `${attributes.repos_url}`;
  subHeader.appendChild(repoUrl);
  location.classList.add("subHeader")



}

)