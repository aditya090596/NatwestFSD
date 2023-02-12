package OOPDemos2;

import java.util.Scanner;

public class Customer extends Address {

    public int custId;
    public String custName;
    public int custAge;
   

    void print() {
        System.out.println("hi there");
    }

    // public Address custAddress=new Address();
    // public datatype can be used or avoid . It is taking reference of address class like we do in main class

    // Customer Has-A address
    // public Address custAddress;
// It's also called aggregation ( Has-a property ). We're not using extends here.
    // public Customer() {
    //     this.custAddress = new Address();}// this => current class instance variable
    // }
    // void print(){
    //   System.out.println("I m customer class");
    // }
    // Accept all the details related to customer
    // public void accept() {
    //     // Address custAddress=new Address();

    //     Scanner sin = new Scanner(System.in);

    //     System.out.println("Enter Customer Id");
    //     custId = sin.nextInt();

    //     System.out.println("Enter Customer Name");
    //     custName = sin.next();

    //     System.out.println("Enter Customer Age");
    //     custAge = sin.nextInt();

    //     System.out.println("Enter Customer Streetno");
    //     custAddress.StreetNo = sin.next();

    //     System.out.println("Enter Customer City");
    //     custAddress.City = sin.next();

    //     System.out.println("Enter Customer Country");
    //     custAddress.Country = sin.next();

    //     System.out.println("Enter Customer Zip Code");
    //     custAddress.ZipCode = sin.next();

    // }
}
