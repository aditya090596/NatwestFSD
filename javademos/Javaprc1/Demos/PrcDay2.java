// Write a program that accepts the username and password and performs the following tasks:

// // Task1:   Create a password of less than 15 characters.

// // Task2: Ensure that the username is "James" and password entered is "password@123".

// // Task3: Display the welcome message with the username in an appropriate case.
/* Algo. 
 *  

 */
package Demos;

import java.util.Scanner;

public class PrcDay2 {
    String uname = "James";
    String pwrd = "password@123";
    String username = new String();
    String password = new String();
    String result;
    
    Scanner sin = new Scanner(System.in);

    public String matchdetails() {
        System.out.println("Enter your username");
        username = sin.next();
        System.out.println("Enter your password");
        password = sin.next();

        if (uname.equals(username) && pwrd.equals(password)) {
            result= "Welcome" + username;
        } else {
            result= "Don't match";
        }
         return result;
    }

    public static void main(String[] args) {
        PrcDay2 details = new PrcDay2();
        String outcome= details.matchdetails();
        System.out.println(outcome);
    }
}
