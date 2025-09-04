DashBoard‑Task

An admin dashboard that combines powerful data visualization with intuitive user management. This dashboard features interactive charts showing user growth trends, avatar distribution, and signup time analytics—plus a robust user management panel with CRUD operations, filtering, sorting, and pagination.

Tech Stack

Frontend: React + Vite (or similar modern framework)

Styling: Tailwind CSS

Charts: Chart.js / Recharts / ECharts

Data Fetching: Axios or Fetch API

API Source: MockAPI Users Endpoint

Features
1. Dashboard Overview

Total Users Tile: Shows the total number of registered users.

Users Created Per Day (Last 30 Days): Visualized via line or bar chart based on createdAt.

Avatar Distribution: Pie chart showing users with avatars vs without.

Signup Time of Day Distribution (Optional): Heatmap or pie chart displaying signup hour patterns.

Recently Joined Users: Horizontal list featuring the 5 newest users with avatar, name, and signup date.

2. User List Management

User Table: Displays avatar, name, email, and signup date.

In-Memory Pagination: Displays 10 users per page.

Sorting & Searching: Sort by name/date; search by name or email.

Clickable Rows: Opens user details in modal or separate route.

Optional Enhancements:

Create / Edit User functionality (modal forms).

Live avatar preview within forms.

Setup & Usage

Clone the Repo

git clone https://github.com/yashhhYB/DashBoard-Task.git
cd DashBoard-Task


Install Dependencies

npm install
# or
yarn install


Run the App

npm run dev
# or
yarn dev


Access at http://localhost:3000 (default Vite port).

Build for Production

npm run build
# or
yarn build
