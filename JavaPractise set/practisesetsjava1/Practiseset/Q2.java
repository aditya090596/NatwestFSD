// Write a program in Java to add, traverse and remove Employee details by using HashSet collection object.

package Practiseset;
import java.util.HashSet;
public class Q2 {
    HashSet<String> empname = new HashSet<String>();
    HashSet<Integer> empage = new HashSet<Integer>();

    HashSet<Employee> empdetails = new HashSet<Employee>();

    Employee obj1 = new Employee();
    Employee obj2 = new Employee();
    Employee obj3 = new Employee();
    Employee obj4 = new Employee();

    public void Acceptdata() 
    {
        obj1.setEmpName("Aditya");
        obj1.setEmpAge(25);

        Employee obj2 = new Employee();
        obj2.setEmpName("Vivek");
        obj2.setEmpAge(30);

        Employee obj3 = new Employee();
        obj3.setEmpName("Aashish");
        obj3.setEmpAge(30);

        Employee obj4 = new Employee();
        obj4.setEmpName("Sandy");
        obj4.setEmpAge(30);
        empdetails.add(obj1);
        empdetails.add(obj2);
        empdetails.add(obj3);
        // empdetails.remove(obj3);
    }
public void removeemp(Employee eobj){
    empdetails.remove(eobj);
    }
    
    public void Display() {
        for (String ename : empname) {
            System.out.println(ename);

        }
        for (Integer eAge : empage) {
            System.out.println(eAge);

        }
        for (Employee details : empdetails) {
            System.out.println(details);
        }
        
    }

    public static void main(String[] args) {
        Q1 obj = new Q1();
        obj.Acceptdata();
        // obj.Display();
        obj.removeemp(obj.obj1);
        obj.Display();
    }

}
