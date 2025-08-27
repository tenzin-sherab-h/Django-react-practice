# Django + React Practice Project

A full-stack project combining **Django** for the backend and **React** for the frontend. This project demonstrates integration between a REST API and a modern frontend.

---

## Features

- Django backend with REST API endpoints
- React frontend with interactive UI
- Integrated backend and frontend
- Example database (SQLite)
- Ready for deployment

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
Backend API available at http://127.0.0.1:8000/
Frontend UI available at http://localhost:3000/
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
