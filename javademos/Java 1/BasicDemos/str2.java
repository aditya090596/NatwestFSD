package BasicDemos;

public class str2 {
 

    public static void main(String[] aa) {

        String fname = "Tim";
        String lname = "Kumar";

        // Concatenate the String

        String name = fname + " " + lname;

        System.out.println(name);

        // Check the length of string
        int count = 0;

        name = name + '\0';

        for (int i = 0; name.charAt(i) != '\0'; i++) {
            count++;
            // System.out.println(count);
        }

        System.out.println(count);

        // for (char mychar : fname.toCharArray()) {
        // count++;
        // }

        // System.out.println(count);
    }
    }