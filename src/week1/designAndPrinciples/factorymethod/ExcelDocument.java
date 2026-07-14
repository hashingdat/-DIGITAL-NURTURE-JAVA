package week1.designAndPrinciples.factorymethod;

public class ExcelDocument implements Document{
    @Override
    public void open() {
        System.out.println("Openning ExcelDocument");

    }
}
