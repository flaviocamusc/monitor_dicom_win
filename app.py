from quart import Quart, render_template, websocket, send_from_directory, send_file
from quart_cors import cors
import os 
app = Quart(__name__)
app = cors(app)
@app.route("/ohif")
async def hello():
    return await render_template("ohif/index.html")



"""
@app.route('/ohif', defaults={'path': ''})
@app.route('/ohif/<path:path>')
async def index(path):
    return await  render_template('ohif/index.html')
"""
# Add a route to serve static files
@app.route('/ohif/<path:filename>')
async def serve_static(filename):
    print(f'file requested: \t{filename}')
    root_dir = os.path.dirname(os.path.realpath(__file__))  # Change this if needed
    print(root_dir)
    to_serve = os.path.join(root_dir, 'templates', 'ohif', filename)
    print(f' to serve: {to_serve}')
    return await send_file(to_serve)


@app.route("/<path:filename>")
async def serve_static2(filename):
    print(f'file requested: \t{filename}')
    root_dir = os.path.dirname(os.path.realpath(__file__))  # Change this if needed
    print(root_dir)
    to_serve = os.path.join(root_dir, 'templates', 'ohif', filename)
    print(f' to serve: {to_serve}')
    return await send_file(to_serve)

@app.route("/api")
async def json():
    return {"hello": "world"}

@app.websocket("/ws")
async def ws():
    while True:
        await websocket.send("hello")
        await websocket.send_json({"hello": "world"})

if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")