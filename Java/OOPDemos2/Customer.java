package OOPDemos2;

import java.util.Scanner;

public class Customer {

    public int custId;
    public String custName;
    public int custAge;

    // Customer Has-A address
    public Address custAddress;

    public Customer() {
        this.custAddress = new Address();// this => current class instance variable
    }

    // Accept all the details related to customer
    public void accept() {

        Scanner sin = new Scanner(System.in);

        System.out.println("Enter Customer Id");
        custId = sin.nextInt();

        System.out.println("Enter Customer Name");
        custName = sin.next();

        System.out.println("Enter Customer Age");
        custAge = sin.nextInt();

        System.out.println("Enter Customer Streetno");
        custAddress.StreetNo = sin.next();

        System.out.println("Enter Customer City");
        custAddress.City = sin.next();

        System.out.println("Enter Customer Country");
        custAddress.Country = sin.next();

        System.out.println("Enter Customer Zip Code");
        custAddress.ZipCode = sin.next();

    }
}
