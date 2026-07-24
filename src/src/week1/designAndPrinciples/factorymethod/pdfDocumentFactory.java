//package week1.designAndPrinciples.factorymethod;
//
// public class PdfDocumentFactory extends Documentfactory {
//
//    @Override
//    public Document createDocument() {
//        return new PdfDocument();
//    }
//
//}{
//}

package week1.designAndPrinciples.factorymethod;

public class pdfDocumentFactory extends Documentfactory {

    @Override
    public Document createDocument() {
        return new pdfDocument();
    }

}
