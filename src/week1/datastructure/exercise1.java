package week1.datastructure;
import java.util.HashMap;



 class Product {

    private int productId;
    private String productName;
    private int quantity;
    private double price;

    public Product(int productId, String productName, int quantity, double price) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }

    public int getProductId() {
        return productId;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Product ID: " + productId +
                ", Name: " + productName +
                ", Quantity: " + quantity +
                ", Price: ₹" + price;
    }
}



class Inventory {

    HashMap<Integer, Product> inventory = new HashMap<>();

    // Add Product
    public void addProduct(Product product) {
        inventory.put(product.getProductId(), product);
        System.out.println("Product Added");
    }

    // Update Product
    public void updateProduct(int id, Product product) {

        if (inventory.containsKey(id)) {
            inventory.put(id, product);
            System.out.println("Product Updated");
        } else {
            System.out.println("Product Not Found");
        }
    }

    // Delete Product
    public void deleteProduct(int id) {

        if (inventory.containsKey(id)) {
            inventory.remove(id);
            System.out.println("Product Deleted");
        } else {
            System.out.println("Product Not Found");
        }
    }

    // Display Inventory
    public void displayProducts() {

        for (Product p : inventory.values()) {
            System.out.println(p);
        }
    }
}

public class exercise1 {

        public static void main(String[] args) {

            Inventory inventory = new Inventory();

            Product p1 = new Product(101, "Laptop", 10, 65000);
            Product p2 = new Product(102, "Mouse", 50, 700);
            Product p3 = new Product(103, "Keyboard", 20, 1200);

            inventory.addProduct(p1);
            inventory.addProduct(p2);
            inventory.addProduct(p3);

            System.out.println("\nInventory");

            inventory.displayProducts();

            Product updated = new Product(102, "Mouse", 100, 750);

            inventory.updateProduct(102, updated);

            System.out.println("\nAfter Update");

            inventory.displayProducts();

            inventory.deleteProduct(101);

            System.out.println("\nAfter Delete");

            inventory.displayProducts();
        }
    }



