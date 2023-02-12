package Demos;

import java.util.Scanner;

public class Calculator {

    int num1 = 15;
    int num2 = 5;
    int result;
    int choice;
    Scanner sin = new Scanner(System.in);
    public void menu() {
        System.out.println("Enter number 1 to add numbers");
        
        System.out.println("Enter number 2 to substract numbers");
        System.out.println("Enter number 3 to pro");
        System.out.println("Enter number 4 to div");
    }
    
   public void acceptData() {
        System.out.println("Enter first number");
        num1 = sin.nextInt();
    
    
        System.out.println("Enter Second number");
        num2 = sin.nextInt();
    
    
        System.out.println("Enter your choice");
        choice = sin.nextInt();
    }

    public void add() {
        result = num1 + num2;
        System.out.println(result);
    }

    public void sub() {
        result = num1 - num2;
System.out.println(result);
    }

    public void pro() {
        result = num1 * num2;
        System.out.println(result);
    }

    public void div() {
        result = num1 / num2;
        System.out.println(result);
    }

    

    public static void main(String[] aa) {

        Calculator obj = new Calculator();
        obj.menu();
        obj.acceptData();

        if (obj.choice == 1)      
        {
            obj.add();
        }
        else if (obj.choice == 2) {
            obj.sub();
        } else if (obj.choice ==3 ) {
            obj.pro();
        } else if (obj.choice == 4) {
            obj.div();
        } else {
            System.out.println("Invalid");
        }

    }
}
