import datetime
from flask import render_template, request, send_from_directory
from py.helpers import read_json, sign_in

current_datetime = datetime.datetime.now()
formatted_datetime = current_datetime.strftime("%Y-%m-%d %H:%M")

def index():
    return render_template("index.html")

# ====================================

def home():
    read_sign_in = open("./files/signin.txt")
    data = read_sign_in.read()
    read_sign_in.close()
    data_list = data.split("\n")
    data_list.pop()
    books = read_json()

    name = request.args.get("name")   #this is for the signin if the is no user yet
    if name:
        sign_in(name)
        return render_template("home.html" , name=name, formatted_datetime=formatted_datetime, books=books)

    return render_template("home.html" , data=data_list[len(data_list) -1], formatted_datetime=formatted_datetime, books=books)


# ==================================

def read_pdf(pdf_book):
    return send_from_directory('books', pdf_book)
# =====================================

# route for About us page

def about():
    return render_template("about.html")

# route for testimony

def testimony():
    return render_template("testimony.html")