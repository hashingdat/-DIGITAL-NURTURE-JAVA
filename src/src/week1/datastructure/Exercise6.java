package week1.datastructure;

public class Exercise6 {

    // Linear Search
    public static Book linearSearch(Book[] books, String title) {

        for (Book book : books) {

            if (book.title.equalsIgnoreCase(title)) {
                return book;
            }
        }

        return null;
    }

    // Binary Search
    public static Book binarySearch(Book[] books, String title) {

        int low = 0;
        int high = books.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int compare = books[mid].title.compareToIgnoreCase(title);

            if (compare == 0) {
                return books[mid];
            } else if (compare < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Book[] books = {
                new Book(101, "Java", "James Gosling"),
                new Book(102, "Python", "Guido van Rossum"),
                new Book(103, "Spring Boot", "Craig Walls"),
                new Book(104, "Web Development", "Jon Duckett"),
                new Book(105, "Data Structures", "Mark Allen Weiss")
        };

        System.out.println("Linear Search:");

        Book result = linearSearch(books, "Spring Boot");

        if (result != null)
            System.out.println(result);
        else
            System.out.println("Book Not Found.");

        // Sorted array for Binary Search
        Book[] sortedBooks = {
                new Book(105, "Data Structures", "Mark Allen Weiss"),
                new Book(101, "Java", "James Gosling"),
                new Book(102, "Python", "Guido van Rossum"),
                new Book(103, "Spring Boot", "Craig Walls"),
                new Book(104, "Web Development", "Jon Duckett")
        };

        System.out.println("\nBinary Search:");

        result = binarySearch(sortedBooks, "Spring Boot");

        if (result != null)
            System.out.println(result);
        else
            System.out.println("Book Not Found.");
    }
}

class Book {

    int bookId;
    String title;
    String author;

    public Book(int bookId, String title, String author) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }

    @Override
    public String toString() {
        return "Book ID: " + bookId +
                ", Title: " + title +
                ", Author: " + author;
    }
}
