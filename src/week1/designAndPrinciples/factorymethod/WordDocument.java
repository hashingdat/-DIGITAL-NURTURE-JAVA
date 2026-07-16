package week1.designAndPrinciples.factorymethod;

public class WordDocument implements Document {
    @Override
    public void open() {
        System.out.println("Openning WordDocument");
    }
}
