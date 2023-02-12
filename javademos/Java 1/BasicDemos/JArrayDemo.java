package BasicDemos;

import java.util.Scanner;

public class JArrayDemo {
 int n;
    String[] name ;
    Scanner sin = new Scanner(System.in);

    public void acceptstdDetails() {
       
    
 System.out.println("Enter the Array length");
           n=sin.nextInt();
           name=new String[n];
        for (int i = 0; i < name.length; i++) {
            System.out.println("Enter the Name");
            name[i] = sin.next();
    
        // System.out.println("Enter the Name");
        // name[1] = sin.next();

        // System.out.println("Enter the Name");
        // name[2] = sin.next();
   
    }
}

    public void displaystdDetails() {

        for (int i = 0; i < name.length; i++) {
        
            System.out.println("Name ::" + name[i]);
        }
    

        // Advance for loop

        for(String sname:name)
        {
            System.out.println(sname);
        }
        
        
        // System.out.println("Name ::" + name[1]);
        // System.out.println("Name ::" + name[2]);
    }

}
