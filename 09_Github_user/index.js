
function fetchUser() {
    const username = document.getElementById('username').value.trim();
    if (username === "") {
        console.log("Please enter a GitHub username!");
        return;
    }

    const requestUrl = `https://api.github.com/users/${username}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl)

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
        const data = JSON.parse(this.responseText);
        console.log(data);
        console.log(data.name);

        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('name').innerText = data.name || "No Name Provided";
        document.getElementById('followers').innerText = `Followers: ${data.followers}`;
        document.getElementById('profile').style.display = "flex";
    }else if (xhr.status === 404) { 
        // Handle user not found
        console.log("User not found! Please enter a valid GitHub username.");
    } else {
        // Handle other errors
        console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
    }

    }
}
xhr.send();
}
