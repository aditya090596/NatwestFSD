package Javademos;

public class Main {
    public static void main(String[] args) {
       Boxweight b=new Boxweight(2, 3, 4, 5,6);
System.out.println(b.l);

System.out.println(b.w);
System.out.println(b.h);


System.out.println(b.weight);
System.out.println(b.weight1);

Box b5=new Boxweight(2, 4, 3, 4, 5);
System.out.println(b5.weight);
Boxweight b1=new Boxweight();// it's not initiating object for base class hence it will give value for this (child).weight not super (base).weight. For base it gives null

// System.out.println(b1.weight);
// Boxweight weight = new Boxweight();
// Box w=new Boxweight();
// System.out.println(w.weight);
// Box w2=new Box();

// System.out.println(w2.weight);

    }
}
