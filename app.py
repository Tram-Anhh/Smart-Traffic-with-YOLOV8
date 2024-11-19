from flask import Flask, jsonify, render_template
import json
import os

app = Flask(__name__)

# Route to get vehicle counts as JSON
@app.route('/vehicle_counts')
def vehicle_counts():
    try:
        with open("vehicle_counts.json", "r") as f:
            counts = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        # In case the file is not found or not readable, return zeroed counts
        counts = {
            "lane_4": 0,
            "lane_2": 0,
            "lane_3": 0,
            "lane_1": 0
        }
    return jsonify(counts)

# Route to render the main page
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
