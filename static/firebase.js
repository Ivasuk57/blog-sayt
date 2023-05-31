// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getStorage, ref, getDownloadURL  } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwWDHR_slMwNHj0dRuzOX9I65YLVWRUwk",
    authDomain: "my-blog-b6503.firebaseapp.com",
    projectId: "my-blog-b6503",
    storageBucket: "my-blog-b6503.appspot.com",
    messagingSenderId: "587450657109",
    appId: "1:587450657109:web:351bbbf6c65f145b6aa7dc",
    measurementId: "G-95GHM0K3BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
const image = ref(storage, "posts/1/200116400592_504448.jpg")

getDownloadURL(image)
  .then((postImageSrc) => {
        var postsContainer = document.getElementById('posts-container');

        var newPost = document.createElement('div');
        newPost.classList.add('post');

        var postImageElement = document.createElement('img');
        postImageElement.src = postImageSrc;
        postImageElement.alt = 'Фото';

        var postTextElement = document.createElement('p');
        postTextElement.innerText = '';

        newPost.appendChild(postImageElement);
        newPost.appendChild(postTextElement);
        postsContainer.appendChild(newPost);

        // Очищення полів вводу
        document.getElementById('post-text').value = '';
        document.getElementById('post-image').value = '';
  })
  .catch((error) => {
    // Handle any errors
  });