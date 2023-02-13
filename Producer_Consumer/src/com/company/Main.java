package com.company;

public class Main {
    public static void main(String[] args) {

        Company com=new Company();
        Producer pro= new Producer(com);

        Consumer con=new Consumer(com);
        pro.start();
        con.start();
    }
}