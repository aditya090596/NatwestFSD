
// 1) Write a program to read the query string as input and split them into words. Print the output on the console as given below:

// Input String : 	select * from ipl.csv where season > 2014 and city = 'Bangalore'

// Output String: select
//                      * 
//                  from 
//                  ipl.csv  
//                  where  
//                  season
//                  > 
//                  2014
//                  and 
//                  city
//                  =
//                  'bangalore'

package StringRegExDemo;

public class Munger1 {
    String s1="select * from ipl.csv where season > 2014 and city = 'Bangalore'";
    // public String[] getSplitStrings(String queryString) {

	// 	return 
	// }
    public String[] getSplitStrings(){
for(String s:s1.split("\\s",0)){
    return s;
}
    }
    public static void main(String[] args) {
        Munger1 obj=new Munger1();
        obj.s();
    }
}
