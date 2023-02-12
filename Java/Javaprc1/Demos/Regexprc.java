
// Write a program to accept the phone of a user and validate the phone number by using regular expression.

// Note : The phone number must be 10 digits long. It must begin with either 7,8 or 9.
// 12:02
// Write a program to accept the email ID of a user and valid it by using the regular expression pattern matching.

package Demos;

import java.util.Scanner;
import java.util.regex.Pattern;

public class Regexprc {
    Scanner inp = new Scanner(System.in);

    

    public static void main(String[] args) {
        Regexprc obj = new Regexprc();
        System.out.println("Enter a number");
        String num1=new String(obj.inp.next());

        // boolean status1 = Pattern.matches("[7-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]", num1);
        // System.out.println(status1);
        boolean status1= Pattern.matches("[7-9][0-9]{9}",num1);
        System.out.println(status1);

    }
}

// 9012345674