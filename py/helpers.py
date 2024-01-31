import json
from py.models import Book

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


# sign_in file to write username in the sign_in.txt
def sign_in(name):
    write_file = open("./files/sign_in.txt", "+a")
    content = write_file.write(name+ "\n")
    write_file.close()
    return content