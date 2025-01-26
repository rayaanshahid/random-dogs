# Random Dogs Web App

A React web application that displays a gallery of random dog images from [random.dog](https://random.dog/woof.json). Users can select their favorite dogs and manage them through a favorites gallery. The app is fully responsive and optimized for both desktop and mobile devices.

---

## Features

1. **Home Page**:
   - Displays one large dog image in the center and a gallery of 6 smaller images below.
   - Clicking on a smaller image displays it as the large image.
   - "Add to Favorites" button below the large image allows users to save it to their favorites.

2. **Favorites Page**:
   - Displays all the favorite dog images in a grid format.
   - Clicking on an image highlights it, showing a "Remove" button directly below for removal from favorites.

3. **Navigation**:
   - Fixed navigation bar in the top-left corner with "Home" and "Favorites" buttons for easy access.

4. **Local Storage**:
   - Favorites are saved in the browser's local storage, so they persist across sessions.

5. **Responsive Design**:
   - Layout adjusts seamlessly for both desktop and mobile screens.

---

## Technologies Used

- **React**: Front-end library for building the UI.
- **CSS**: Custom styling with a responsive flexbox layout.
- **Local Storage**: For saving and managing favorite dog images.
- **React Router**: For navigation between the home and favorites pages.

---

## Prerequisites

Before running the app, ensure you have the following installed:

- **Node.js**: v14 or later
- **npm**: v6 or later (comes with Node.js)
- Alternatively, use **yarn** as a package manager.

---

## How to Run the Project

Follow these steps to set up and run the app locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rayaanshahid/random-dogs.git
   cd random-dogs

2. Install Dependencies:

    ```bash
    npm install
    ```

3. Start the Development Server:

    ```bash
    npm start
    ```

4.	View in Browser:

    ```
    http://localhost:3000
