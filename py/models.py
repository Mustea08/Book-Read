
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