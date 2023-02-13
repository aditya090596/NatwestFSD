//Create a class Employee with the following properties and methods:
//        Salary (property) (int)
//        getSalary (method returning int)
//        name (property) (String)
//        getName (method returning String)
//        setName (method changing name)
//        Create a class cellphone with methods to print “ringing…”, “vibrating…”, etc.
//        Create a class Square with a method to initialize its side, calculating area, perimeter etc.
//        Create a class Rectangle & problem 3.
//        Create a class TommyVecetti for Rockstar Games capable of hitting (print hitting…), running, firing, etc.
//        Repeat problem 4 for a circle.
package Practiseset;
class Employee {
    int salary;
    String name;

    public int getSalary() {
        return salary;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
    class cellphone {
        public void vibrating() {
            System.out.println("Vibrating...");
        }

        public void ringing() {
            System.out.println("ringing...");


        }
    }
    class square {
        int side;

        public int area(int side) {
            return side * side;
        }

        public int perimeter(int side) {
            return 4 * side;
        }
    }


    public class Oops1 {
        public static void main(String[] args) {
            Employee obj = new Employee();
            obj.setName("Aditya");// setting employee name
//        obj.getName();
            System.out.println(obj.getName());
            obj.salary = 22; // setting employee salary
            System.out.println(obj.salary = 22);
            cellphone obj1 = new cellphone();
            obj1.ringing();
            obj1.vibrating();

            square squ = new square();

            System.out.println(squ.perimeter(5));
            System.out.println(squ.area(5));

        }
    }

