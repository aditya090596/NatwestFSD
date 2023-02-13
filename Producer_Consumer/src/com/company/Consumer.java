package com.company;

public class Consumer extends Thread {
    Company c;


    public Consumer(Company c) {
        this.c = c;
    }
    public void run (){
        int i=1;
        while (i<10){
            try {
                this.c.consumed_item();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            i++;
        }

    }
}
