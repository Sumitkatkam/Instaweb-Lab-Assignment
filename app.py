from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name')
    email = request.form.get('email')

    if not name or not email or '@' not in email:
        return "Error: Invalid input."

    print(f"Received data: Name - {name}, Email - {email}")

    with open("submissions.txt", "a") as f:
        f.write(f"Name: {name}, Email: {email}\n")

    return f"Success! Received: Name - {name}, Email - {email}"

if __name__ == '__main__':
    app.run(debug=True)
