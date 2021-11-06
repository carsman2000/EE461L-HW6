__author__ = "Robert Scott"
__date__ = "11/05/2021"

from flask import Flask, jsonify
from flask.helpers import send_from_directory

# from flask_cors import CORS

app = Flask(__name__, static_folder="frontend/build", static_url_path="")

# CORS(app)

@app.route("/identify/<inputName>", methods=["GET"])
def findName(inputName: str):
    returnName = ""
    if(inputName == "Robert"):
        returnName = "Scott"
    else:
        returnName = "User Not Found"
    return jsonify(returnName=returnName)

@app.route("/")

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")
    
if __name__ == "__main__":
    app.run(host="0.0.0.0")