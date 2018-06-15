from flask import Flask, Response
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/filiation")
@cross_origin()
def hello_world():
    script_text = "var accepted = 'success'"
    return Response(script_text, mimetype='application/javascript'

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000)

