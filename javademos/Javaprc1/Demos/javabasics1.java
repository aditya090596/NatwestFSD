//Initialization  through reference

package Demos;
// class Student
class Student{
   public int id;
   public String name;
   
   }
     public class javabasics1 {

        public static void main(String args[]) {
            Student obj= new Student();// taking reference of studnet class . It can be considered in another file but within same package
            // obj.id=10;
            // obj.name="Aditya";
            // System.out.println(obj.id);
            // System.out.println(obj.name);
            obj.id=12;
            obj.name="Adi";
            System.out.println(obj.id);
            System.out.println(obj.name);

        }
       
        

    }

