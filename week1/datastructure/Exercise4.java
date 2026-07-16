package week1.datastructure;
public class Exercise4 {

    static Employee[] employees = new Employee[10];
    static int size = 0;

    // Add Employee
    public static void addEmployee(Employee employee) {

        if (size == employees.length) {
            System.out.println("Array is full.");
            return;
        }

        employees[size] = employee;
        size++;

        System.out.println("Employee Added Successfully.");
    }

    // Search Employee
    public static Employee searchEmployee(int id) {

        for (int i = 0; i < size; i++) {

            if (employees[i].employeeId == id) {
                return employees[i];
            }
        }

        return null;
    }

    // Traverse Employees
    public static void traverseEmployees() {

        if (size == 0) {
            System.out.println("No Employees Found.");
            return;
        }

        for (int i = 0; i < size; i++) {
            System.out.println(employees[i]);
        }
    }

    // Delete Employee
    public static void deleteEmployee(int id) {

        int index = -1;

        for (int i = 0; i < size; i++) {

            if (employees[i].employeeId == id) {
                index = i;
                break;
            }
        }

        if (index == -1) {
            System.out.println("Employee Not Found.");
            return;
        }

        for (int i = index; i < size - 1; i++) {
            employees[i] = employees[i + 1];
        }

        employees[size - 1] = null;
        size--;

        System.out.println("Employee Deleted Successfully.");
    }

    public static void main(String[] args) {

        addEmployee(new Employee(101, "Harsh", "Software Engineer", 60000));
        addEmployee(new Employee(102, "Rahul", "Tester", 45000));
        addEmployee(new Employee(103, "Priya", "Manager", 90000));
        addEmployee(new Employee(104, "Amit", "HR", 50000));

        System.out.println("\nEmployee Records:");
        traverseEmployees();

        System.out.println("\nSearching Employee with ID 103:");
        Employee emp = searchEmployee(103);

        if (emp != null)
            System.out.println(emp);
        else
            System.out.println("Employee Not Found.");

        System.out.println("\nDeleting Employee with ID 102:");
        deleteEmployee(102);

        System.out.println("\nEmployee Records After Deletion:");
        traverseEmployees();
    }
}

class Employee {

    int employeeId;
    String name;
    String position;
    double salary;

    public Employee(int employeeId, String name, String position, double salary) {
        this.employeeId = employeeId;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Employee ID: " + employeeId +
                ", Name: " + name +
                ", Position: " + position +
                ", Salary: ₹" + salary;
    }
}
