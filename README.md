# 💰 Personal Expense Tracker

A simple, beginner-friendly web application for recording and managing personal expenses. This project demonstrates the use of HTML, CSS, and JavaScript to build an interactive web application with a clean interface and basic expense-management functionality.

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Project Objectives](#project-objectives)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Learning Outcomes](#learning-outcomes)
- [Future Improvements](#future-improvements)
- [Author](#author)
- [License](#license)

## 📖 About the Project

The Personal Expense Tracker is a front-end web development project designed to help users record and review their personal expenses.

The project was created to practise fundamental web development concepts, including structuring web pages with HTML, styling interfaces with CSS, and implementing application logic with JavaScript.

It also provides practical experience working with user input, form validation, JavaScript objects and arrays, and browser storage.

This project is part of my journey toward becoming a more skilled software developer and building a professional development portfolio.

## 🎯 Project Objectives

The main objectives of this project are to:

- Build an interactive web application using HTML, CSS, and JavaScript.
- Create a form for entering expense information.
- Practise collecting and validating user input.
- Understand how JavaScript processes and manages application data.
- Explore how objects and arrays can represent and organize expense records.
- Learn how browser storage can be used to preserve application data.
- Improve problem-solving, debugging, and code-organization skills.
- Build a practical project that can be presented in a software development portfolio.

## ✨ Features

The application is designed around the following expense-tracking functionality:

- **Expense Entry:** Provides a form for entering expense information.
- **Input Validation:** Helps prevent incomplete or invalid entries from being processed.
- **Expense Data Management:** Uses JavaScript to work with expense information.
- **Expense Display:** Presents expense information in the application interface.
- **Expense Total:** Supports calculating the total amount of recorded expenses.
- **Browser Storage Practice:** Explores saving application data using the browser's `localStorage` feature.
- **Simple Web Interface:** Uses HTML and CSS to organize and style the application.

*Note: The exact features available depend on the current implementation of the project.*

## 🛠️ Technologies Used

### HTML5

HTML provides the structure of the application, including its content, form elements, input fields, and page sections.

### CSS3

CSS controls the visual presentation of the application, including layout, spacing, typography, and other styling details.

### JavaScript (ES6+)

JavaScript provides the application's interactive behavior. It can be used to collect form values, validate user input, manage expense records, calculate totals, and update the page.

### Browser localStorage

The browser's `localStorage` API can store data as strings in the user's browser so that data can remain available after a page reload. JavaScript can convert structured data into JSON strings with `JSON.stringify()` and read it back with `JSON.parse()`.

## 📁 Project Structure

The project contains three main files:

```text
personal-expense-tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

This file defines the structure and content of the web application. It contains the HTML elements used to display the interface and collect user input.

### `style.css`

This file contains the styles responsible for the appearance and layout of the application.

### `script.js`

This file contains the JavaScript logic used to handle user interactions and process application data.

### `README.md`

This file documents the project, its purpose, technologies, setup instructions, and learning objectives.

## ⚙️ How It Works

A typical expense-tracking workflow can be understood through the following steps:

1. **Form Input:** The user enters expense information into the form.
2. **Validation:** JavaScript checks whether the required information is valid.
3. **Data Processing:** JavaScript converts input values into appropriate data types.
4. **Object Creation:** The expense information can be organized into a JavaScript object.
5. **Array Management:** Expense objects can be stored in an array to manage multiple records.
6. **Data Storage:** The application can use `localStorage` to preserve records in the browser.
7. **Display:** JavaScript updates the interface to show the relevant expense information.
8. **Total Calculation:** The application can calculate the combined value of recorded expenses.

This workflow illustrates how different JavaScript concepts work together in a practical application.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

You need:

- A computer with a modern web browser.
- A code editor, such as Visual Studio Code.
- Basic familiarity with opening files and folders on your computer.

### Installation

**Option 1: Download the project**

1. Open the repository on GitHub.
2. Click the **Code** button.
3. Select **Download ZIP**.
4. Extract the downloaded ZIP file.
5. Open the extracted project folder in Visual Studio Code.
6. Open `index.html` in your browser.

**Option 2: Clone the repository**

Open a terminal and run:

```bash
git clone https://github.com/REDSTAR268/personal_expense_tracker.git
```

Then enter the project directory:

```bash
cd personal_expense_tracker
```

Open the folder in Visual Studio Code and open `index.html` in your browser.

## 📝 How to Use

1. Open the application in your web browser.
2. Review the available expense-entry form.
3. Enter the required expense information.
4. Submit the form using the available button.
5. Review the application's response and any validation messages.
6. Review the displayed expense information and total, if implemented.
7. If browser storage is implemented, refresh the page to check whether previously saved records remain available.

The exact steps and available controls may vary according to the current version of the application.

## 📚 Learning Outcomes

Developing this project provides an opportunity to practise several important web development concepts.

### HTML Fundamentals

- Structuring a web page.
- Working with forms and input elements.
- Connecting external CSS and JavaScript files.
- Using appropriate HTML elements to organize content.

### CSS Fundamentals

- Styling form controls and page sections.
- Organizing layouts and spacing.
- Improving readability and consistency.
- Creating a more user-friendly interface.

### JavaScript Fundamentals

- Declaring and using variables.
- Selecting HTML elements with the DOM.
- Handling form submission and button events.
- Reading and validating input values.
- Converting strings into numbers.
- Using conditional statements and `return`.
- Creating and accessing objects.
- Managing collections with arrays.
- Calculating totals from numerical data.
- Converting data to and from JSON.
- Working with browser `localStorage`.

### Problem-Solving Skills

- Identifying errors with browser developer tools.
- Understanding how HTML, CSS, and JavaScript work together.
- Testing application behavior with valid and invalid input.
- Organizing code into separate files.
- Using Git and GitHub to publish and maintain a project.

## 🔮 Future Improvements

The project could be expanded with additional features, such as:

- **Edit Expenses:** Allow users to update existing expense records.
- **Delete Expenses:** Allow users to remove individual records.
- **Expense Categories:** Organize expenses into categories such as food, transport, education, and entertainment.
- **Date Filtering:** View expenses within a selected date range.
- **Monthly Summaries:** Display totals for individual months.
- **Search and Filtering:** Find expenses using keywords or categories.
- **Data Visualization:** Present spending patterns using charts.
- **Responsive Design:** Improve usability on phones, tablets, and desktop computers.
- **Data Export:** Allow users to export expense records to a file.
- **Accessibility Improvements:** Improve keyboard navigation, labels, and readability.

These are potential future enhancements and are not necessarily implemented in the current version.

## 🔒 Privacy and Data Storage

If the application uses browser `localStorage`, stored expense information remains in the browser profile where it was saved unless the application or another process transfers or removes it.

Browser storage is not the same as a secure, encrypted database. Users should avoid entering passwords, banking credentials, or other highly sensitive information.

Clearing browser data or using a different browser profile may affect access to locally stored records.

## 👨‍💻 Author

**REDSTAR268**

GitHub: [@REDSTAR268](https://github.com/REDSTAR268)

Explore the repository to review the project's source code and development progress.

## 📄 License

No license has been specified for this project yet. If you intend to allow others to reuse, modify, or distribute your code, consider adding an appropriate open-source license.

---

**Thank you for visiting the Personal Expense Tracker project!**

This project represents a step forward in my software development journey as I continue learning, building practical applications, and strengthening my programming skills.

<h2>Light mode</h2>

<img width="1731" height="1487" alt="Screenshot_17-10-2026_115055_127 0 0 1" src="https://github.com/user-attachments/assets/45d8868b-4972-4a19-a7ac-73b91ec6ee0d" />

<h2>Dark mode</h2>

<img width="1731" height="1487" alt="Screenshot_17-10-2026_115115_127 0 0 1" src="https://github.com/user-attachments/assets/968c1e9a-cdf4-40c9-a552-919d37bee020" />
