// Imagine that you wish to purchase a mobile phone with specifications that include the brand name, cost, screen size, battery life, storage space and camera pixels. You have a list of the latest models available. Create a program that performs the following activities given in the list:
//     1. Find phones of a particular brand.
//     2. Find the phones whose cost is $500 and above.
//     3. Enlist the phones which have camera specification as 12 MP and more.

package Practiseset;

import java.util.ArrayList;

public class Q4 {
    
ArrayList<String> brand = new ArrayList<String>();
ArrayList<Integer> price = new ArrayList<Integer>();
ArrayList<Integer>camera=new ArrayList<Integer>();
ArrayList<Mobile>devices=new ArrayList<Mobile>();
Mobile mb1=new Mobile();
Mobile mb2=new Mobile();
Mobile mb3=new Mobile();
Mobile mb4=new Mobile();
public void mobspec(){
    Mobile mb1=new Mobile();
    mb1.setBrand("Samsung");
    mb1.setPrice(10000);
    mb1.setCamera(10);
    mb1.setModel("GalaxyS");

    mb2.setBrand("Oneplus");
    mb2.setPrice(15000);
    mb2.setCamera(12);
    mb2.setModel("CE2");

    mb3.setBrand("Samsung");
    mb3.setPrice(20000);
    mb3.setCamera(15);
    mb3.setModel("GalaxyX");

    mb4.setBrand("Redmi");
    mb4.setPrice(25000);
    mb4.setCamera(16);
    mb4.setModel("Note");

    devices.add(mb1);
    devices.add(mb2);
    devices.add(mb3);
    devices.add(mb4);
    

}
public void filterbrand(){


for(Mobile brd:devices){
    System.out.println(brd);
}

}
}
