 package BasicDemos;
import java.util.Scanner;

public class calculation {

    int num1 = 10;
    int num2 = 5;

    int result = 0;
    int choice;

    Scanner sin = new Scanner(System.in);

    public void menu() {
        System.out.println("Enter 1 to add numbers ");
        System.out.println("Enter 2 to subtract numbers ");
        System.out.println("Enter 3 to multiply numbers ");
        System.out.println("Enter 4 to divide numbers ");
       
    }
    
    public void acceptData() {
       
       System.out.println("Enter you choice as per menu");
       choice = sin.nextInt();

        System.out.println("Enter first Number");
        num1 = sin.nextInt();

        System.out.println("Enter second Number");
        num2 = sin.nextInt();

       
        
        if (choice == 1) {
            add();
        } else if (choice == 2) {
            sub();
        } else if (choice == 3) {
            mul();
        } else if (choice == 4) {
            div();
        } else {
            System.out.println("Invalid choice!!");
        }

    }

    // functionn to add the number

    // Function declaration and defination

    public void add() {

        result = num1 + num2;

        System.out.println("SUM  " + result);
    }

    public void sub() {

        result = num1 - num2;

        System.out.println("DIFF  " + result);
    }

    public void mul() {

        result = num1 * num2;

        System.out.println("PRODUCT  " + result);
    }

    public void div() {

        result = num1 / num2;

        System.out.println("DIV-QUOTIENT  " + result);
    }

    public static void main(String[] aa) {

        calculation obj = new calculation();
    
        obj.menu();
        obj.acceptData();
       

        
    }
 
    
}