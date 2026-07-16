//package week1.designAndPrinciples.factorymethod;
//
//    public abstract class WordDocumentFactory
//    {
//
//        public abstract Document createDocument();
//
//    }

package week1.designAndPrinciples.factorymethod;

public class WordDocumentFactory extends Documentfactory {

    @Override
    public Document createDocument() {
        return new WordDocument();
    }

}




