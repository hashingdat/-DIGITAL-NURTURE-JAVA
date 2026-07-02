package week1;

import java.util.*;

class Product {
    int id;
    String name;

    Product(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

public class Ecommerce {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<Product> products = new ArrayList<>();
        products.add(new Product(1, "iPhone"));
        products.add(new Product(2, "Samsung"));
        products.add(new Product(3, "Laptop"));
        products.add(new Product(4, "Headphones"));

        System.out.print("Enter product name: ");
        String search = sc.nextLine();

        boolean found = false;

        for (Product p : products) {
            if (p.name.equalsIgnoreCase(search)) {
                System.out.println("Product Found");
                System.out.println("ID: " + p.id);
                System.out.println("Name: " + p.name);
                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("Product Not Found");
        }
    }
}