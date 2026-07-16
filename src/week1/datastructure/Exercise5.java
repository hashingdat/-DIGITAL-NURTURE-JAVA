package week1.datastructure;

public class Exercise5 {

    static Task head = null;

    // Add Task
    public static void addTask(int id, String name, String status) {

        Task newTask = new Task(id, name, status);

        if (head == null) {
            head = newTask;
        } else {

            Task temp = head;

            while (temp.next != null) {
                temp = temp.next;
            }

            temp.next = newTask;
        }

        System.out.println("Task Added Successfully.");
    }

    // Search Task
    public static Task searchTask(int id) {

        Task temp = head;

        while (temp != null) {

            if (temp.taskId == id) {
                return temp;
            }

            temp = temp.next;
        }

        return null;
    }

    // Traverse Tasks
    public static void traverseTasks() {

        if (head == null) {
            System.out.println("No Tasks Found.");
            return;
        }

        Task temp = head;

        while (temp != null) {
            System.out.println(temp);
            temp = temp.next;
        }
    }

    // Delete Task
    public static void deleteTask(int id) {

        if (head == null) {
            System.out.println("List is Empty.");
            return;
        }

        if (head.taskId == id) {
            head = head.next;
            System.out.println("Task Deleted Successfully.");
            return;
        }

        Task temp = head;

        while (temp.next != null && temp.next.taskId != id) {
            temp = temp.next;
        }

        if (temp.next == null) {
            System.out.println("Task Not Found.");
            return;
        }

        temp.next = temp.next.next;

        System.out.println("Task Deleted Successfully.");
    }

    public static void main(String[] args) {

        addTask(101, "Complete Assignment", "Pending");
        addTask(102, "Study DSA", "In Progress");
        addTask(103, "Practice Java", "Pending");
        addTask(104, "Submit Project", "Completed");

        System.out.println("\nTask List:");
        traverseTasks();

        System.out.println("\nSearching Task with ID 103:");
        Task task = searchTask(103);

        if (task != null)
            System.out.println(task);
        else
            System.out.println("Task Not Found.");

        System.out.println("\nDeleting Task with ID 102:");
        deleteTask(102);

        System.out.println("\nTask List After Deletion:");
        traverseTasks();
    }
}

class Task {

    int taskId;
    String taskName;
    String status;

    Task next;

    public Task(int taskId, String taskName, String status) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.status = status;
        this.next = null;
    }

    @Override
    public String toString() {
        return "Task ID: " + taskId +
                ", Task Name: " + taskName +
                ", Status: " + status;
    }
}
