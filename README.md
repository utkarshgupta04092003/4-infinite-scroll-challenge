# React Infinite Scroll Project


## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [How to Use](#how-to-use)
4. [Screenshots](#screenshots)
5. [Project Structure](#project-structure)
6. [Technologies Used](#technologies-used)
7. [Contributions](#contributions)
8. [License](#license)

## Overview

The React Infinite Scroll Project is a web application built with React, Vite, and Tailwind CSS, leveraging the [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component) package and the Unsplash API. This project implements infinite scroll, dynamically fetching and displaying images from Unsplash as the user scrolls down the page.

## Features

- **Infinite Scroll:** Automatically loads additional images from the Unsplash API as the user scrolls down the page.

- **React, Vite, and Tailwind CSS:** Utilizes React for dynamic UI updates, Vite for a fast development experience, and Tailwind CSS for modern styling.

- **Unsplash API Integration:** Fetches high-quality images from Unsplash to provide a diverse and visually appealing collection.

## How to Use

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/utkarshgupta04092003/4-infinite-scroll-challenge.git
   ```

2. Navigate to the project directory.

   ```bash
   cd 4-infinite-scroll-challenge
   ```

3. Install dependencies.

   ```bash
   npm install
   ```

4. Set up your [Unsplash API key](https://unsplash.com/developers) and replace `"REACT_APP_UNPLASH_ACCESS_KEY"` in `src/App.js` with your actual access key.

5. Start the development server.

   ```bash
   npm run dev
   ```

6. Open your browser and visit [http://localhost:5173](http://localhost:5173) to explore the React Infinite Scroll.

## Screenshots

![React Infinite Scroll Screenshot](./screenshot.png)

## Project Structure

- **src/App.js:** React component implementing the infinite scroll and fetching images from Unsplash.

- **src/components/Header.js:** Display the total number of images.

- **src/components/Image:** Display the image

## Technologies Used

- React
- Vite
- Tailwind CSS
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component)
- Unsplash API

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE), allowing you to use and modify the code for personal and commercial purposes.

---

Feel free to customize this template according to your project's specific details and structure. Add more sections if needed, and make sure to update the screenshot and project structure details accordingly.