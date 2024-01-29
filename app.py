import json
import datetime
from flask import Flask , render_template, request, send_from_directory
app = Flask("myapp")

current_datetime = datetime.datetime.now()
formatted_datetime = current_datetime.strftime("%Y-%m-%d %H:%M")

# class to bring data form the json file
class Book:
    def __init__(self, id, image, disc, title, author, pdf_book, price):
        self.id = id
        self.title = title
        self.author = author
        self.image = image
        self.disc = disc
        self.pdfBook = pdf_book
        self.price = price
    def writer(self):
        return f" Author: {self.author}"
    def prices(self):
        return f"Price: {self.price}"

# function that reads data from a JSON file
def read_json():
    file = open("book.json", "r")
    data_book = json.load(file)
    file.close()
    books = []
    for book in data_book:
        new_book = Book(book['id'],book['image'],book['disc'], book['title'], book['author'], book['pdf_book'], book['price'])
        books.append(new_book)
    return books


# signin file to wirte username in the signin.txt
def signin(name):
    write_file = open("./files/signin.txt", "+a")
    content = write_file.write(name+ "\n")
    write_file.close()
    return content


@app.route("/")
def index():
    return render_template("index.html")

# ====================================
@app.route("/home")
def home():
    read_signin = open("./files/signin.txt")
    data = read_signin.read()
    read_signin.close()
    data_list = data.split("\n")
    data_list.pop()
    books = read_json()

    name = request.args.get("name")   #this is for the signin if the is no user yet
    if name:
        signin(name)
        return render_template("home.html" , name=name, formatted_datetime=formatted_datetime, books=books)

    return render_template("home.html" , data=data_list[len(data_list) -1], formatted_datetime=formatted_datetime, books=books)


# ==================================
@app.route('/<path:pdf_book>')
def read_pdf(pdf_book):
    return send_from_directory('books', pdf_book)
# =====================================

# route for About us page
@app.route("/about")
def about():
    return render_template("about.html")

# route for testimony
@app.route("/testimony")
def testimony():
    return render_template("testimony.html")