# Simple Form Submission Project

## 📌 What I Built

This is a basic web form that collects a user's Name and Email with the following features:

- HTML form styled using Tailwind CSS
- JavaScript validation:
  - Both fields are required
  - Email must contain `@`
  - Name must start with a letter (e.g., `John123` is allowed, but `123John` is not)
- Form submits to a Python Flask backend
- Data is printed in the terminal and saved in `submissions.txt`
- After submission, the response opens in a new tab and the form resets

---

## 🛠️ Tools Used

- **HTML5**
- **Tailwind CSS (via CDN)**
- **JavaScript**
- **Python 3**
- **Flask** (lightweight web framework)

---

## ▶️ How to Run

### Prerequisites

- Python 3 installed
- Flask installed (`pip install flask`)

### 🧪 Steps to Run This Project Locally

1. **Clone this repository:**
   ```bash
   git clone https://github.com/Sumitkatkam/Instaweb-Lab-Assignment.git
   cd Instaweb-Lab-Assignment

2. **Create and activate a virtual environment:**
    python -m venv venv
    venv\Scripts\activate      # On Windows
    # OR
    source venv/bin/activate   # On macOS/Linux

3. **Install Flask:**
   pip install flask

4. **Run the Flask app:**
   python app.py

5. **Open the app in your browser:**
   http://127.0.0.1:5000/
