# 🎬 Movie Watchlist - Built with React

## Overview

**Movie Watchlist** is a modern, responsive web application built with **React** that enables users to manage their personal movie lists.

The primary goal of this project is to demonstrate **best practices for state management** in React, specifically by ensuring **Immutable State Updates**. This approach prevents direct state mutation, leading to predictable, bug-free UI updates. All data is persisted across browser sessions using `localStorage`.



---

## 🛠 Features

* **✨ Immutable State Management:** All actions (add, rate, toggle status, delete) are performed immutably using array methods like spread (`...`), `map()`, and `filter()`.
* **💾 Persistent Storage:** The entire movie watchlist is automatically saved to the browser's `localStorage`, ensuring data integrity across sessions.
* **🔍 Movie Filtering:** Users can effortlessly filter the displayed movies by **All**, **Watched**, or **Unwatched** status.
* **⭐ Star Rating Integration:** Movies can be rated using the interactive `react-rating-stars-component`.
* **🎨 Responsive UI:** Built with **Tailwind CSS** for a modern and mobile-friendly user experience.

---

## 🔑 Key Concepts: Immutability

The core strength of this application lies in its immutable state handling.

| Action | Immutable State Logic | Explanation |
| :--- | :--- | :--- |
| **Add** Movie | `setMovies([...movies, newMovie])` | Creates a **new array** by spreading the old movies and appending the new one. |
| **Update Rating** | `movies.map(movie => movie.id === id ? { ...movie, rating } : movie)` | Maps to a new array; only the target movie object is **cloned and updated**. |
| **Toggle Status** | `movies.map(movie => movie.id === id ? { ...movie, watched: !movie.watched } : movie)` | Maps to a new array; the target object's `watched` status is **immutably flipped**. |
| **Delete** Movie | `setMovies(movies.filter(movie => movie.id !== id))` | Filters the array to create a **new array** excluding the movie to be removed. |

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

* Node.js (LTS version recommended)
* npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Md-Asraful-Islam-Subbir/MoviesWatch.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd movie-watchlist-react
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the App

1.  **Start the development server (using Vite):**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and navigate to the displayed URL (typically `http://localhost:5173`).

---

## 📂 Project Structure

The state management logic is centralized in `MovieWatch.jsx`, while the `components` folder handles the UI presentation.

![Movie Watchlist Screenshot](public/images/WatchMovies.PNG)
