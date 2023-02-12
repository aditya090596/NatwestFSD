import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        // 5 students' roll nos.
        int[] rno = new int[5];
        float[] marks = new float[5];
//        Student std1 = new Student();
//        Student std2 = new Student();

//        Aditya.rno=1;
//        Aditya.marks=90.4f;
//        System.out.println(std1.rno);
//        System.out.println(std2.rno);
//        System.out.println(Aditya.marks);
        Student std3=new Student(12,85.2f,"Adi");




        System.out.println(std3);
// 5 studnets name
        Student[] students = new Student[5];
        System.out.println(Arrays.toString(students));


        // Student Aditya; // Decalring an object
//        Student Aditya =new Student();
//        Student Vivek= new Student();
//        Student Sandy=new Student (88.7f);
////        System.out.println(Aditya); // gives some random value
//        System.out.println(Aditya.rno);
//        System.out.println(Aditya.name);
//        Aditya.rno=3;
//        Aditya.marks=85.5f;

//        System.out.println(Aditya.rno);
//        System.out.println(Aditya.marks);// Avoiding the above steps (17-21) we need constructor

//        Aditya.students(); // not initialized
//        System.out.println(Arrays.toString(students));// give null bcz not initialised

//        System.out.println(Aditya.rno);
//        System.out.println(Aditya.marks);
//        System.out.println(Vivek.marks);
//        System.out.println(Sandy.marks);
    }
}
       // if I need data of all stud. then we have to create a class having all the details. Classes help in defining the datatype.
      class Student {
       int rno;
       String name;
       float marks;
//       Student(){
//
//      }
     Student (){ // constructor . It is not a default constructor
//           Aditya.rno=3;
//           Aditya.marks=85.5f;
//           Aditya.name="Aditya Sharma"; Not to do this way so we use this keyword.
          this.rno=3;
         this.marks=95.5f;
         this.name="Sandy";
       }
       Student (int rno, float Marks, String name){
        rno=rno;
        marks=Marks;
        name=name;
       }

       }
    // need our own datatype like Student have to create class

