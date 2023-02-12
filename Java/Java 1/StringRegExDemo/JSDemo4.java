package StringRegExDemo;

public class JSDemo4 {
    public static void main(String[] aa) {

        // immutable string
        String fname = "Tim";
        String lname = "Kumar";

        fname = fname + lname;

        System.out.println(fname);

        fname = fname.replace("Tim", "Test");

        System.out.println(fname);

        fname.replace("TestKumar", "Java");

        System.out.println(fname);

    }

}
