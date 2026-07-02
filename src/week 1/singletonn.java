class atm {

    private static atm ATM;
    private int cash =50000;

    private atm(){
        System.out.println("ATM");

    }

    public static atm getObject(){
        if(ATM==null){
            ATM=new atm();
        }
        return ATM;
    }

    public void deposit_money(int amount){
        cash +=amount;

        }

    public void withdraw(int amount){
        cash -=amount;

    }
    public void checkBalance() {
        System.out.println("ATM Cash Balance : ₹" + cash);
    }


    }
    public class singletonn {
        public static void main(String[] args) {
            atm atm4=atm.getObject();
            atm4.withdraw(8000);

            atm atm6=atm.getObject();
              atm6.withdraw(9000);

              atm6.checkBalance();

        }

    }




