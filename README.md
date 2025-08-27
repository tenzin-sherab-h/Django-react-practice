# Practice Project (Django + React + MySQL)

A simple full-stack web application with a **Django backend** connected to **MySQL** and a **React frontend**.  
Currently, the app **fetches and displays a list of books**.

---

## Features
- Django backend serving JSON data  
- MySQL database for storing book data  
- React frontend for displaying books  
- CORS enabled for frontend-backend communication  

---

## ⚙Tech Stack
- **Backend**: Django  
- **Database**: MySQL  
- **Frontend**: React (with Axios for API calls)  

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
### 2. Backend Setup (Django + MySQL)
#### Navigate to the backend folder:
```bash
cd practiceproject
```
#### Create and activate a virtual environment:
```bash
python3 -m venv prenv
source prenv/bin/activate   # Mac/Linux
prenv\Scripts\activate      # Windows
```
#### Install dependencies:
```bash
pip install -r requirements.txt
```
#### Configure MySQL Database in settings.py:
```bash
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_db_name',
        'USER': 'your_mysql_user',
        'PASSWORD': 'your_mysql_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```
#### Run migrations:
```bash
python manage.py migrate
```
#### Start the backend server:
```bash
python manage.py runserver
```
### 3. Frontend Setup (React)
Open a new terminal and go to the frontend folder:
cd frontend
Install dependencies:
npm install
Start the React development server:
npm start
4. Access the Application
Backend JSON endpoint: http://127.0.0.1:8000/books/ (example endpoint)
Frontend: http://localhost:3000/
📂 Project Structure
practiceproject/
│── backend (Django project files)
│   ├── manage.py
│   ├── practiceproject/
│   └── ...
│
├── frontend (React app)
│   ├── package.json
│   ├── src/
│   └── ...
│
├── images/          # Screenshots folder
│   ├── react_frontend.png
│   └── django_backend.png
│
├── requirements.txt
└── README.md
📸 Screenshots
React Frontend
Django Backend
✅ Notes
Ensure MySQL service is running before starting the backend.
Only commit code, not node_modules/ or virtual environments.
The app currently only fetches and displays books; CRUD operations can be added later.
The backend returns JSON data which the React frontend consumes.
