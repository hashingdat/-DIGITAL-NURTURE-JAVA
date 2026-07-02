//interface enemy{
//    void attack();
//    void spawn();
//}
//class goblin implements enemy{
//    @Override
//    public void attack() {
//        System.out.println(" attacking with a rusty dagger");
//    }
//
//    @Override
//    public void spawn() {
//        System.out.println("hehehe");
//
//    }
//}
//class Dragon implements enemy{
//
//    @Override
//    public void attack() {
//        System.out.println("breadthing fire ");
//
//    }
//
//    @Override
//    public void spawn() {
//        System.out.println("roaring");
//
//    }
//}
//public class factorymethod
//{
//    public static void main(String[] args) {
//        goblin goblin1=new goblin();
//        Dragon dragon1=new Dragon();
//        goblin1.attack();
//        goblin1.spawn();
//        dragon1.attack();
//        dragon1.spawn();
//
//    }
//}


//class burger {
//    void prepare(){
//
//    }
//}
//class basicburger extends burger{
//    @Override
//    void prepare(){
//        System.out.println("i am a basic burger ");
//    }
//}
//class standardburger extends burger{
//    @Override
//    void prepare(){
//        System.out.println("i am a standard burger ");
//    }
//}
//class premiumburger extends burger{
//    @Override
//    void prepare(){
//        System.out.println("i am a premium burger  ");
//    }
//}
//
//class burgerfactory {
//    burger burgerchooser(String type) {
//        if (type == "basic burger") {
//            return new basicburger();
//        }
//        if (type == "standard burger") {
//            return new standardburger();
//        }
//        if (type == "premium burger") {
//            return new premiumburger();
//
//        }
//        return null;
//    }
//}
//public class factorymethod{
//    public static void main(String[] args) {
//        burgerfactory burger1=new burgerfactory();
//        burger burger2=burger1.burgerchooser("premium burger");
//        burger2.prepare();
//
//
//
//    }
//}



abstract class burgers  {
    void prepare(){

    }
}
class basicburger extends burgers {
    @Override
    void prepare(){
        System.out.println("i am a basic burger ");
    }
}
class standardburger extends burgers {
    @Override
    void prepare(){
        System.out.println("i am a standard burger ");
    }
}
class premiumburger extends burgers {
    @Override
    void prepare(){
        System.out.println("i am a premium burger  ");
    }
}

class basicwheatburger extends burgers {
    @Override
    void prepare(){
        System.out.println("i am a basic wheat burger ");
    }
}
class standardwheatburger extends burgers {
    @Override
    void prepare(){
        System.out.println("i am a standard wheat burger ");
    }
}
class premiumwheatburger extends burgers {
    @Override
    void prepare(){
        System.out.println("i am a premium wheat burger  ");
    }
}
abstract class Burgerfactory {

    abstract burgers createBurger(String type);
}

    class burgersingh extends Burgerfactory{

        @Override
        burgers createBurger(String type) {
            if (type == "basic burger") {
                return new basicburger();
            }
            if (type == "standard burger") {
                return new standardburger();
            }
            if (type == "premium burger") {
                return new premiumburger();

            }
            return null;
        }
        }
class burgerking extends Burgerfactory{

    @Override
    burgers createBurger(String type) {
        if (type == "basic wheat burger") {
            return new basicwheatburger();
        }
        if (type == "standard wheat burger") {
            return new standardwheatburger();
        }
        if (type == "premium wheat burger") {
            return new premiumwheatburger();

        }
        return null;

        }
    }

public class factorymethod{
    public static void main(String[] args) {
        Burgerfactory factory1=new burgerking();
        burgers burger1=factory1.createBurger("basic wheat burger");
        burger1.prepare();

        }

    }












