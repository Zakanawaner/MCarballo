from flask import Flask, send_from_directory
from utils import createApp

app = Flask(__name__, static_url_path='', static_folder='frontend/build')

app = createApp(app)


@app.route("/", methods=["GET"])
def index():
    return send_from_directory(app.static_folder, "index.html")


if __name__ == '__main__':
    app.run(host="localhost", port=3000)
