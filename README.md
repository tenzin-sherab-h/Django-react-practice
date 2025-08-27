# Django + React Practice Project

A full-stack project combining **Django** for the backend and **React** for the frontend.  
This project demonstrates integration between Django and a React frontend.

---

## Features

- Django backend
- React frontend
- Integrated frontend and backend
- Example database (SQLite)
- Ready for further development

---

## Project Structure

djangopractice/
├── frontend/ # React frontend
├── practiceproject/ # Django backend
├── prenv/ # Python virtual environment (ignored by Git)
└── README.md # Project documentation

---

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/Django-react-practice.git
cd djangopractice
'''
Set up Python environment
python3 -m venv prenv
source prenv/bin/activate
pip install -r practiceproject/requirements.txt
Set up React frontend
cd frontend
npm install
npm start
Run Django server
cd ../practiceproject
python manage.py runserver
Usage
Backend server: http://127.0.0.1:8000/
Frontend: http://localhost:3000/
Screenshots
Add screenshots of your project here:


Replace path/to/screenshotX.png with your actual screenshot file paths in the repo.
.gitignore
The project ignores unnecessary files like:
# Python
__pycache__/
*.pyc
*.pyo
*.sqlite3
db.sqlite3

# Django
/static/
media/

# Virtual environment
prenv/

# Node / React
node_modules/
build/
dist/

# macOS
.DS_Store
