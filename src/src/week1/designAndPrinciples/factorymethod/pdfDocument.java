package week1.designAndPrinciples.factorymethod;

public class pdfDocument implements Document {
    @Override
    public void open() {
        System.out.println("Openning pdfDocument");

    }
}
