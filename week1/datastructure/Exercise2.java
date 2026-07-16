package week1.datastructure;

public class Exercise2{

    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.productId == targetId) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (products[mid].productId == targetId) {
                return products[mid];
            }

            if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(105, "Laptop", "Electronics"),
                new Product(101, "Shoes", "Fashion"),
                new Product(103, "Phone", "Electronics"),
                new Product(104, "Watch", "Accessories"),
                new Product(102, "Bag", "Fashion")
        };

        Product result1 = linearSearch(products, 104);

        System.out.println("Linear Search Result:");
        System.out.println(result1);

        Product[] sortedProducts = {
                new Product(101, "Shoes", "Fashion"),
                new Product(102, "Bag", "Fashion"),
                new Product(103, "Phone", "Electronics"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Laptop", "Electronics")
        };

        Product result2 = binarySearch(sortedProducts, 104);

        System.out.println("\nBinary Search Result:");
        System.out.println(result2);
    }
    static class Product {
        int productId;
        String productName;
        String category;

        public Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        @Override
        public String toString() {
            return "Product ID: " + productId +
                    ", Name: " + productName +
                    ", Category: " + category;
        }
    }
}

