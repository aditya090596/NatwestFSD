package Practiseset;
//select city,winner,team1,team2 from ipl.csv

public class munger {

    public String getFileName(String queryString){
        int s1=queryString.indexOf("ipl");
        System.out.println(s1);
        int s2=queryString.indexOf("csv");
        System.out.println(s2);
        queryString=queryString.substring(s1, (s2+3));
        // System.out.println(queryString);
 return queryString;
    }

//  public String[] getSplitStrings(String queryString){
// // String s="select city,winner,team1,team2 from ipl.csv group by city";
//     String  []words=queryString.split(" ");
//     //  String w=words.toString();
//     //  System.out.println();
//    for( String w:words){
//    System.out.println(w);
//         }
// //    String str=words.toString();
   
//     return words;
//  }
 public void getConditions() {
    String s = "select city,winner,player_match from ipl.csv where season > 2014 and city 'Bangalore' or india order by this";
    int s1 = s.indexOf("where") +6;
    String newstring = s.substring(s1).toLowerCase();
    System.out.println(newstring);


    // String[] words = newstring.split("and");
    // System.out.println(Arrays.toString(words));
    // String[] b1 = words[0].split(" ");
    // for (String a : b1){
    //     System.out.println(a);
    //     }
    // return s2;
    }
    public String getBaseQuery(String queryString) {

		int s1=queryString.indexOf("select");
		int s2=queryString.indexOf("csv")+3;
		queryString=queryString.substring(s1,s2);
		return queryString;
	}

    public String[] getFields(String queryString) {

		String words=queryString.split(" ")[1];
		System.out.println(words);
		String []Newwords=words.split(",");
		return Newwords;
	}

    public static void main(String[] args) {
        munger obj=new munger();
    //    String x= obj.getFileName("select city,winner,team1,team2 from ipl.csv group by city");
    //    System.out.println(x);
    // String x=obj.getSplitStrings("select city,winner,team1,team2 from ipl.csv group by city").toString();
    // System.out.println(x);
    // String x=obj.getSplitStrings("select city,winner,team1,team2 from ipl.csv group by city").toString();
    //     System.out.println(x);
    obj.getConditions();

//        int num1,num2;
        int num1,num2=0;

    }

   
}
