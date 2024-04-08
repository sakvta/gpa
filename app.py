from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    credits = request.form.getlist('credit')  # Get list of credits
    grades = request.form.getlist('result')  # Get list of grades (Дүн)

    total_credit = sum(int(credit) for credit in credits)  # Calculate total credit

    weighted_sum = sum(int(credit) * float(grade) for credit, grade in zip(credits, grades))

    if total_credit == 0:
        average_grade = 0  # Avoid division by zero
    else:
        average_grade = weighted_sum / total_credit

    return f"Таны голч: {average_grade:.2f}"

if __name__ == '__main__':
    app.run(debug=True)
