package com.company;
// Company has producer n consumer. Producer produce item and consumer consumes simaltaneously
// Creates two methods for producer n consumer
public class Company {
    int item ;
    Boolean f=false;
    // f: false chance: Producer produce the item.
    // f:true, consumer consume the item.

    synchronized public void produced_item(int n) throws Exception{
if (f){wait();}

this.item=n;    // n gives the value to this.item and that will consumer receive n return to the method
        System.out.println("Produced item"+ this.item);

f=true;
notify();
    }
     synchronized public int consumed_item() throws InterruptedException {
        if(!f){  // false as a true
            wait();
        }
         System.out.println("Consumed item"+ this.item); // true and
        f=false; // will change f to false n notify that work is done
        notify();
         return this. item;

     }
}
