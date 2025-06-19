// Write your code here!

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        displayPosts(posts); 
    } catch (error) {
        console.error("Failed to fetch posts:", error);
    }
}

function displayPosts(posts) {
    const postList = document.getElementById('post-list');

    posts.forEach(post => {
        const li = document.createElement('li');
        const title = document.createElement('h1');
        const body = document.createElement('p');

        title.textContent = post.title;
        body.textContent = post.body;

        li.appendChild(title);
        li.appendChild(body);

        postList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchPosts();
});
