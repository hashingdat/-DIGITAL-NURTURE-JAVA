//package week1.designAndPrinciples.factorymethod;
//
//    public abstract class ExcelDocumentFactory extends Documentfactory {
//    @Override
//    public abstract Document createDocument();
//    return new ExcelDocument();
//
//
//
//}


package week1.designAndPrinciples.factorymethod;

public class ExcelDocumentFactory extends Documentfactory {

    @Override
    public Document createDocument() {
        return new ExcelDocument();
    }

}
