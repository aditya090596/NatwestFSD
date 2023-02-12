// Check whether two strigs are equal or not

// Covert all the characters of string in upper case

// Delete 5th character from a given string

// Replace the 7th character of the given string with 'A'

// Given two string with any value take first two characters from
// each string and cncatenate them as third string

// Given two string with with alphanumeric value take all the
// numbers from them and display the sum of all the numbers
// present in both the strings
package Demos;

public class strprc {
    
    public static void main(String[]aa) {
        String name = new String("AdityaS");
        //  System.out.println(name);
        //  // To get length of string 
        //  int value=name.length();
        //  System.out.println(value);
        
        //  // to change it to lowercase
        // String lstring=name.toLowerCase();
        // System.out.println(lstring);
        // String ustring = name.toUpperCase();
        // System.out.println(ustring);

        // //trim/nontrim
        // String nonTrimmedString= "     Aditya    ";
        // System.out.println(nonTrimmedString);
        // System.out.println(nonTrimmedString.trim());
        
        // Replacing name.replace (a,b)
       System.out.println(name.replace('S', 'K'));
       String name1= "AdityaSharma";
       String name2= "SharmaAditya";
       String name3= "AdityaSharma";
       System.out.println(name1==name2);
       System.out.println(name1==name3);
      
       //q5
       String newstr= name1.substring(0, 2);
       String newstr1=name2.substring(0, 2);
       System.out.println(newstr+newstr1);
String Alph= "@!asbhd12i%";
String Alph1="@!54%*#ndr8";



    }

}
