# **📂 React Directory App**
A simple and modern web application built with React and Vite for managing a directory of personal entries. This app allows users to add new individuals, manage their details, and retrieve information efficiently, all within a responsive and elegant interface.
## **🚀 Live Demo**
[Link to your deployed application](https://directory-app-eosin.vercel.app/)

**✨ Features**

- **Add New Entries:**
  - Seamlessly add new person records with fields for **Name, Date of Birth, Aadhar Number, and Mobile Number**.
  - **Automatic Age Calculation** based on the provided Date of Birth.
  - **Input Validation:** Ensures all required fields are filled, Aadhar numbers are 12 digits, and Mobile numbers are 10 digits.
- **Manage Entries:**
  - Ability to **save individual person records** after editing.
  - Option to **delete existing person records** from the directory.
- **Retrieve & Display Data:**
  - Search for specific individuals by their **Aadhar Number**.
  - Clearly displays all stored person details if a match is found.
- **Local Storage Persistence:** All directory data is saved directly in the browser's local storage, ensuring data persists even after the browser is closed and reopened.
- **Responsive Design:** Adapts seamlessly to various screen sizes (mobile, tablet, desktop) for optimal user experience.
- **Modern & Elegant UI:** Features a refreshed CSS design with a subtle gradient header, rounded corners, and smooth transitions and animations for a polished look and feel.
## **🚀 Tech Stack**
- **Frontend:**
  - [React.js](https://react.dev/) (Library for building user interfaces)
  - [Vite](https://vitejs.dev/) (Next Generation Frontend Tooling)
- **Styling:**
  - Custom Modern CSS (with responsive breakpoints, animations, and transitions)
  - Google Fonts (EB Garamond, Inter)
## **📁 Project Structure**
The application is organized into a few key React components within the src/ directory:

- src/App.jsx:
  - The main application component. It manages the active view (Add Person or Retrieve Data) and renders the overall layout, including the application header and the dynamic content areas.
- src/Components/AddPerson/AddPerson.jsx:
  - This component handles the functionality and UI for adding and managing new person entries. It includes a dynamic table for inputting data, along with save and delete actions for each row.
- src/Components/RetrieveData/RetrieveData.jsx:
  - This component is responsible for searching and displaying individual person records based on their Aadhar Number. It provides a dedicated search input and presents the details in a readable card format.
## **⚙️ Installation**
To get this project up and running on your local machine, follow these steps:

1. **Clone the repository** (if your project is in a Git repository):
   git clone <your-repository-url>
   cd <your-project-folder>

   (If you are starting from scratch, navigate to your project directory.)
1. **Install dependencies:**
   npm install
   # OR
   yarn install
1. **Run the development server:**
   npm run dev
   # OR
   yarn dev

   This will start the Vite development server, usually at http://localhost:5173/ (or another available port). Open this URL in your web browser to see the app in action.
## **💡 Usage**
Once the application is running in your browser:

1. **Add Person:**
   1. Click the "Add Person" button.
   1. A table will appear, allowing you to add new rows with "Name", "Date of Birth", "Aadhar Number", and "Mobile Number" fields.
   1. Fill in the details. The "Age" field will automatically calculate based on the Date of Birth.
   1. Click the "Save" button next to each row to store the entry in your browser's local storage.
   1. Use the "Delete" button to remove an entry.
   1. Note on Validation: If you enter invalid data (e.g., incorrect Aadhar/Mobile format or missing fields), you will receive an alert message.
1. **Retrieve Data:**
   1. Click the "Retrieve Data" button.
   1. Enter an "Aadhar Number" in the input field.
   1. Click "Search."
   1. If a matching Aadhar Number is found, the person's details will be displayed in a card below. If no match is found, a "No match found" message will appear.
## **🛠️ Limitations & Future Improvements**
- **User Feedback for Validation:** Currently, input validation in AddPerson.jsx uses alert() messages. For a better user experience, these could be replaced with more non-intrusive UI feedback (e.g., inline error messages, toast notifications).
- **Data Persistence:** Data is currently stored in localStorage. For a more robust application, consider integrating a backend database (e.g., Firebase, MongoDB, PostgreSQL) to allow multi-device access and more complex data management.
- **Sorting and Filtering:** Implement sorting options for table columns and more advanced filtering capabilities in the "Retrieve Data" section.
- **Edit Functionality:** Enhance the "Retrieve Data" section to allow editing of existing records directly from the search result or adding a dedicated edit button to the table in AddPerson.jsx.
