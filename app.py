from flask import Flask
from py.routes import index, home, read_pdf, about, testimony

app = Flask("myapp")

app.route("/")(index)
app.route("/home")(home)
app.route('/<path:pdf_book>')(read_pdf)
app.route("/about")(about)
app.route("/testimony")(testimony)