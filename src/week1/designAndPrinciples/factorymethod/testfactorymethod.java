package week1.designAndPrinciples.factorymethod;

public class testfactorymethod{

    public static void main(String[] args) {

        Documentfactory wordFactory = new WordDocumentFactory();
        Document word = wordFactory.createDocument();
        word.open();

        Documentfactory pdfFactory = new pdfDocumentFactory();
        Document pdf = pdfFactory.createDocument();
        pdf.open();

        Documentfactory excelFactory = new ExcelDocumentFactory();
        Document excel = excelFactory.createDocument();
        excel.open();
    }
}