package week1;


//A company has a current annual revenue of ₹R. Every year, the revenue grows by G%.
//
//Write a recursive function to calculate the expected revenue after N years.
//
//Input
//        R = Initial revenue (double)
//G = Annual growth rate in percentage (double)
//N = Number of years (int)
//Output
//
//Return the forecasted revenue after N years.{
//        }

import java.util.Scanner;

public class financialforecasting{

    public double forecaster(double revenue,double growth,int year){

        if(year==0){
            return revenue;
        }

            revenue=revenue+(growth/100*revenue);
            year--;
            return forecaster(revenue,growth,year);
    }




    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        System.out.println("enter revenue");
        double revenue= input.nextDouble();

        System.out.println("enter growth");
        double growth= input.nextDouble();

        System.out.println("enter year");
        int year= input.nextInt();

        financialforecasting one=new financialforecasting();
        System.out.println(one.forecaster(revenue,growth,year));



    }
}


