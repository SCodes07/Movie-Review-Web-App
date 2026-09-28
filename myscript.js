// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

// Add SDKs for Firebase products that you want to use
import {
    collection,
    getFirestore,
    onSnapshot,
    query,
    orderBy,
    addDoc,
    doc,
    deleteDoc,
    updateDoc
} from 'https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdU9RfvJyDcJil6I4XdzxRu_81MN0mV4E",
    authDomain: "movies-review-web-app-82c6b.firebaseapp.com",
    projectId: "movies-review-web-app-82c6b",
    storageBucket: "movies-review-web-app-82c6b.firebasestorage.app",
    messagingSenderId: "817482921528",
    appId: "1:817482921528:web:65191f9dc8e97e346b58cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// State variables
let currentEditId = null;
let currentSortField = "movie_name";
let unsubscribe = null;

// Function to attach listener and load reviews
function loadReviews() {
    // Unsubscribe from previous listener if changing sort
    if (unsubscribe) {
        unsubscribe();
    }

    const q = query(collection(db, "Reviews"), orderBy(currentSortField));
    unsubscribe = onSnapshot(q, (snapshot) => {
        // Empty HTML table
        $('#reviewList').empty();

        // Loop through snapshot data and add to HTML table
        let tableRows = '';
        snapshot.forEach((doc) => {
            const data = doc.data();
            tableRows += `
            <tr>
                <td>${data.movie_name || ''}</td>
                <td>${data.director_name || ''}</td>
                <td>${data.release_date || ''}</td>
                <td>${data.movie_rating}/5</td>
                <td>
                    <button class="btn btn-sm btn-warning edit-btn" 
                        data-id="${doc.id}"
                        data-name="${data.movie_name || ''}"
                        data-director="${data.director_name || ''}"
                        data-date="${data.release_date || ''}"
                        data-rating="${data.movie_rating || 0}">Edit</button>
                    <button class="btn btn-sm btn-danger delete-btn" data-id="${doc.id}">Delete</button>
                </td>
            </tr>`;
        });
        $('#reviewList').append(tableRows);

        // Display review count
        $('#mainTitle').html(snapshot.size + " movie reviews in the list");
    });
}

// Initial load
loadReviews();

// Handle Sort change
$('#sortSelect').change(function () {
    currentSortField = $(this).val();
    loadReviews();
});

// Handle Add/Update button pressed
$("#addButton").click(async function () {
    const movieData = {
        movie_name: $("#movieName").val().trim(),
        director_name: $("#directorName").val().trim(),
        release_date: $("#releaseDate").val(),
        movie_rating: parseInt($("#movieRating").val())
    };

    if (!movieData.movie_name) {
        alert("Please enter at least the movie name before adding a review.");
        return;
    }

    if (currentEditId) {
        // Update existing document
        const docRef = doc(db, "Reviews", currentEditId);
        await updateDoc(docRef, movieData);
        resetForm();
    } else {
        // Add new document
        await addDoc(collection(db, "Reviews"), movieData);
        resetForm();
    }
});

// Handle Edit button click (delegated since buttons are dynamically added)
$(document).on('click', '.edit-btn', function () {
    currentEditId = $(this).attr('data-id');

    // Populate form fields
    $("#movieName").val($(this).attr('data-name'));
    $("#directorName").val($(this).attr('data-director'));
    $("#releaseDate").val($(this).attr('data-date'));
    $("#movieRating").val($(this).attr('data-rating'));

    // Change UI state to editing
    $("#formTitle").text("Edit Review");
    $("#addButton").text("Update").removeClass('btn-primary').addClass('btn-success');
    $("#cancelButton").removeClass('d-none');
});

// Handle Delete button click
$(document).on('click', '.delete-btn', async function () {
    if (confirm("Are you sure you want to delete this review?")) {
        const id = $(this).attr('data-id');
        await deleteDoc(doc(db, "Reviews", id));
    }
});

// Handle Cancel button click
$("#cancelButton").click(function () {
    resetForm();
});

// Reset form function
function resetForm() {
    currentEditId = null;
    $("#movieName").val('');
    $("#directorName").val('');
    $("#releaseDate").val('');
    $("#movieRating").val('1');

    // Reset UI state
    $("#formTitle").text("Add New Review");
    $("#addButton").text("Add").removeClass('btn-success').addClass('btn-primary');
    $("#cancelButton").addClass('d-none');
}
