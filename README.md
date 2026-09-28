# 🎬 Movie Review Web App

A web-based **Movie Review Web App** built using HTML, CSS, JavaScript, jQuery, and Firebase Firestore. The application allows users to add, view, edit, delete, and sort movie reviews stored in a Firebase Firestore database.

This project was developed for **Task 2 – Cloud Systems** and demonstrates CRUD operations and cloud database integration using Firebase Firestore.

## 📌 Project Overview

The Movie Review Web App provides a simple interface for managing movie review records.

Each review contains:

- Movie name
- Director name
- Release date
- Movie rating

The application connects directly to **Firebase Firestore** and dynamically displays the stored reviews on the webpage.

The project documentation confirms that the application implements **Create, Read, Update, Delete, and Sort** functionality using Firestore. fileciteturn0file0L53-L60

## ✨ Features

### ➕ Create Reviews

Users can add a new movie review by entering:

- Movie name
- Director name
- Release date
- Rating from 0/5 to 5/5

The review is saved as a document in the Firestore `Reviews` collection. fileciteturn0file2L32-L56

### 👀 Read Reviews

The application retrieves reviews from Firestore and displays them dynamically in a table.

The application uses Firestore's real-time `onSnapshot()` listener, so the displayed review list can update when database data changes. fileciteturn0file3L36-L51

### ✏️ Update Reviews

Users can select an existing review, edit its information, and save the changes.

The application uses Firestore's `updateDoc()` function to update the selected document. fileciteturn0file3L99-L107

### 🗑️ Delete Reviews

Users can delete an existing movie review after confirming the deletion.

The application uses Firestore's `deleteDoc()` function to remove the selected review. fileciteturn0file3L127-L131

### 🔃 Sort Reviews

Reviews can be sorted using the dropdown menu.

Available sorting options are:

- Movie Name
- Rating
- Director
- Release Date

These options are defined in the application's HTML interface and are used to change the Firestore query ordering. fileciteturn0file2L18-L29 fileciteturn0file3L79-L83

## 🖥️ User Interface

The main page contains:

- Movie review heading
- Sort dropdown
- Add/Edit review form
- Movie name input
- Director input
- Release date input
- Rating selector
- Add button
- Cancel button
- Reviews table
- Edit and Delete actions

The interface is defined in `index.html`. fileciteturn0file2L18-L73

## 🗃️ Firestore Database

The application uses **Firebase Firestore** as its cloud database.

The Firestore collection used by the application is:

```text
Reviews
```

Each review document contains fields such as:

```text
movie_name
director_name
release_date
movie_rating
```

The JavaScript application initializes Firebase and obtains a Firestore database instance before performing database operations. fileciteturn0file3L17-L29

## 🏗️ System Workflow

```text
              MOVIE REVIEW WEB APP
                       |
                       ▼
              ┌─────────────────┐
              │   Web Interface │
              │    index.html   │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │   JavaScript    │
              │   myscript.js   │
              └────────┬────────┘
                       │
             Firebase Firestore
                       │
                       ▼
              ┌─────────────────┐
              │ Reviews         │
              │ Collection      │
              └─────────────────┘
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
        Create        Read       Update/Delete
                       │
                       ▼
                    Sort
```

## 🔄 CRUD Workflow

### Create

```text
Enter Movie Details
        ↓
Click Add
        ↓
Create Firestore Document
        ↓
Review Saved
```

### Read

```text
Open Application
        ↓
Query Reviews Collection
        ↓
Retrieve Firestore Data
        ↓
Display Reviews
```

### Update

```text
Click Edit
        ↓
Load Existing Review
        ↓
Modify Information
        ↓
Click Update
        ↓
Update Firestore Document
```

### Delete

```text
Click Delete
        ↓
Confirm Deletion
        ↓
Delete Firestore Document
        ↓
Review Removed
```

### Sort

```text
Select Sorting Field
        ↓
Movie Name / Rating /
Director / Release Date
        ↓
Update Firestore Query
        ↓
Display Sorted Reviews
```

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript
- jQuery

The HTML page loads the custom `index.css` stylesheet and the JavaScript module `myscript.js`. fileciteturn0file2L9-L13 fileciteturn0file2L77-L81

### Cloud / Backend Service

- Firebase
- Firebase Firestore

The project uses Firebase SDK version `12.13.0` and imports Firestore functions including `collection`, `getFirestore`, `onSnapshot`, `query`, `orderBy`, `addDoc`, `deleteDoc`, and `updateDoc`. fileciteturn0file3L1-L15

### Styling

The application uses a custom CSS stylesheet for layout, forms, buttons, tables, and responsive spacing. fileciteturn0file1L16-L45

## 📂 Project Structure

```text
Movie-Review-Web-App/
│
├── index.html
├── index.css
├── myscript.js
└── README.md
```

### `index.html`

Contains the structure of the Movie Review Web App, including the review form, sorting controls, and review table. fileciteturn0file2L18-L73

### `index.css`

Contains the styling for the application's layout, typography, form controls, buttons, and review table. fileciteturn0file1L49-L61 fileciteturn0file1L105-L196

### `myscript.js`

Contains the Firebase configuration and application logic for:

- Loading reviews
- Adding reviews
- Updating reviews
- Deleting reviews
- Sorting reviews
- Updating the user interface

fileciteturn0file3L27-L34

## 🚀 How to Run

### 1. Download or Clone the Repository

```bash
git clone https://github.com/your-username/movie-review-web-app.git
```

### 2. Open the Project

Open the project folder in a code editor such as Visual Studio Code.

### 3. Firebase Configuration

The application requires a Firebase project with Firestore enabled.

The JavaScript file contains the Firebase web application configuration and initializes Firestore. fileciteturn0file3L17-L29

### 4. Run the Application

Because the application uses JavaScript modules and Firebase services, it is recommended to run it through a local development server rather than opening the HTML file directly.

For example, using VS Code Live Server:

```text
Open index.html
        ↓
Run with Live Server
        ↓
Open the local URL
```

## 🔐 Firebase Security

Do not treat the Firebase web configuration as a secret. However, Firestore access should be protected using appropriate **Firestore Security Rules**.

Before deploying the application publicly, configure rules that restrict who can read and write data according to the intended application requirements.

## ☁️ Cloud Systems Implementation

This project demonstrates the use of a cloud-based backend through Firebase.

The project documentation records the following Firebase workflow:

1. Log in to Firebase
2. Create a Firebase project
3. Enable Google Analytics
4. Access the Firebase project dashboard
5. Use Firestore for movie review data
6. Implement CRUD operations
7. Implement sorting

The project documentation identifies the Firebase project as `2548318SapanaMovieReview` and describes Firestore as the backend used by the application. fileciteturn0file0L30-L49

## 📚 Learning Outcomes

This project demonstrates practical experience with:

- Cloud-based application development
- Firebase project setup
- Firebase Firestore
- CRUD operations
- Real-time database listeners
- JavaScript modules
- jQuery event handling
- HTML form handling
- CSS styling
- Dynamic table generation
- Sorting cloud database records

## ⚠️ Limitations

The current implementation focuses on movie review CRUD and sorting functionality.

Based on the provided project files, the application does not include:

- User registration
- User login
- Authentication
- Movie image upload
- Comments
- Advanced search
- Movie recommendation
- Admin dashboard

These features can be considered for future development if required.

## 🔮 Future Improvements

Possible improvements include:

- Firebase Authentication
- User profiles
- Movie search
- Movie posters
- Review comments
- Review validation
- Advanced filtering
- Pagination
- User-specific reviews
- Rating statistics
- Responsive mobile improvements
- Improved Firestore security rules
  
The academic project documentation identifies this work as a Google Firestore Movie Review Web App. fileciteturn0file0L2-L15

## 👩‍💻 Author

**Sapana Chaudhary**

Movie Review Web App  

