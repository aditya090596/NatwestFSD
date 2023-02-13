package com.company;

public class Producer extends Thread{

    // Here we need to produce the items n to call the produce method need Company object as reference
    Company c; // Aggregation

// Creating constructor
    public Producer(Company c) {
        this.c = c;
    }
    public void run(){
        int i=1;
        while (i<10){
            try {
                this.c.produced_item(i);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            i++;
        }
    }
}
