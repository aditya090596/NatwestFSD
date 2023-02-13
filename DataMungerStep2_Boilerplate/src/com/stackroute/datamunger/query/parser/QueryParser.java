package com.stackroute.datamunger.query.parser;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*There are total 4 DataMungerTest file:
 * 
 * 1)DataMungerTestTask1.java file is for testing following 4 methods
 * a)getBaseQuery()  b)getFileName()  c)getOrderByClause()  d)getGroupByFields()
 * 
 * Once you implement the above 4 methods,run DataMungerTestTask1.java
 * 
 * 2)DataMungerTestTask2.java file is for testing following 2 methods
 * a)getFields() b) getAggregateFunctions()
 * 
 * Once you implement the above 2 methods,run DataMungerTestTask2.java
 * 
 * 3)DataMungerTestTask3.java file is for testing following 2 methods
 * a)getRestrictions()  b)getLogicalOperators()
 * 
 * Once you implement the above 2 methods,run DataMungerTestTask3.java
 * 
 * Once you implement all the methods run DataMungerTest.java.This test case consist of all
 * the test cases together.
 */

public class QueryParser {

	private QueryParameter queryParameter = new QueryParameter();

	/*
	 * This method will parse the queryString and will return the object of
	 * QueryParameter class
	 */
	public QueryParameter parseQuery(String queryString) {
		queryParameter.setFileName(getFileName(queryString));
		queryParameter.setBaseQuery(getBaseQuery(queryString));
		queryParameter.setOrderByFields(orderByFields(queryString));
		queryParameter.setGroupByFields(groupByFields(queryString));
		queryParameter.setFields(fields(queryString));
		queryParameter.setRestrictions(getRestrictions(queryString));
		queryParameter.setLogicalOperators(logicalOperators(queryString));
		queryParameter.setAggregateFunctions(aggregateFunctions( queryString));
		return queryParameter;
	}

	/*
	 * Extract the name of the file from the query. File name can be found after the
	 * "from" clause.
	 */
//	public static void main(String[] args) {
//		QueryParser obj=new QueryParser();
//		obj.getFileName("select winner,team1 from ipl.csv order by team1");
//	}
	public String getFileName(String queryString) {

		int s1 = queryString.indexOf("ipl");
		int s2 = queryString.indexOf("csv")+3;
		queryString= queryString.substring(s1,s2);
		return queryString;
	}

	/*
	 * 
	 * Extract the baseQuery from the query.This method is used to extract the
	 * baseQuery from the query string. BaseQuery contains from the beginning of the
	 * query till the where clause
	 */
	public String getBaseQuery(String queryString) {

		int indexofcsv = queryString.indexOf("csv")+3;
		String str=queryString.substring(0,indexofcsv);
		return str;
	
	}
	/*
	 * extract the order by fields from the query string. Please note that we will
	 * need to extract the field(s) after "order by" clause in the query, if at all
	 * the order by clause exists. For eg: select city,winner,team1,team2 from
	 * data/ipl.csv order by city from the query mentioned above, we need to extract
	 * "city". Please note that we can have more than one order by fields.
	 */
public List<String> orderByFields(String queryString) {
	
	int indexoforderby=queryString.indexOf("order by")+9;
	String str=queryString.substring(indexoforderby);
	List<String> newstr = new ArrayList<String>();
	newstr.add(str);
	
	return newstr;
}


	/*
	 * Extract the group by fields from the query string. Please note that we will
	 * need to extract the field(s) after "group by" clause in the query, if at all
	 * the group by clause exists. For eg: select city,max(win_by_runs) from
	 * data/ipl.csv group by city from the query mentioned above, we need to extract
	 * "city". Please note that we can have more than one group by fields.
	 */
public List<String> groupByFields(String queryString) {
	
	int indexofgroupby=queryString.indexOf("group by")+9;
	int indexofordeby=queryString.indexOf("order by")-1;
	List<String> newstr = new ArrayList<String>();
//	String str1="";
	if(queryString.contains("order by")) {
		String str=queryString.substring(indexofgroupby,indexofordeby);	
		newstr.add(str);
		return newstr;
	}
	 
	else 
	{String str1=queryString.substring(indexofgroupby);
	newstr.add(str1);
	return newstr;
	}
	
//	List<String> newstr = new ArrayList<String>();
//	newstr.add(str1);
//	return newstr;	

}
	/*
	 * Extract the selected fields from the query string. Please note that we will
	 * need to extract the field(s) after "select" clause followed by a space from
	 * the query string. For eg: select city,win_by_runs from data/ipl.csv from the
	 * query mentioned above, we need to extract "city" and "win_by_runs". Please
	 * note that we might have a field containing name "from_date" or "from_hrs".
	 * Hence, consider this while parsing.
	 */
public List<String>fields(String queryString){
	 
	int indexofselect=queryString.indexOf("select")+7;
	int indexoffrom=queryString.indexOf("from")-1;
	List<String> newstr = new ArrayList<String>();
	String []str=queryString.substring(indexofselect,indexoffrom).split(",");
	for(String newstr1:str)
	{
		newstr.add(newstr1);
	}
	
	return newstr;
		
}

//"select city,winner,player_match from ipl.csv where season > 2014 and city ='Bangalore' or city ='Delhi'";
//"select winner,season,team1,team2 from ipl.csv " + "where season > 2014"
//"select winner,season,team1,team2 from ipl.csv where " + "season = 2014 and city ='Bangalore'"
//"select winner,season,team1,team2 from ipl.csv where season = 2014 and city ='Bangalore' or city ='Delhi'"
//"select city,winner,player_match from ipl.csv where season > 2014 or city ='Bangalore'"

//season > 2014 and city = Bangalore  or city = Delhi "

//public static void main(String[] args) {
//QueryParser obj=new QueryParser();
//List<Restriction>x= obj.getRestrictions("select winner,season,team1,team2 from ipl.csv " + "where season > 2014");
//System.out.println(x);
//}

  public List<Restriction> getRestrictions(String queryString) {
	  
	  List<Restriction> newstr= new ArrayList<Restriction>();
	  int indexofwhere=queryString.indexOf("where")+6;
		if(indexofwhere-6 == -1) {
		return null;}
		String str=queryString.substring(indexofwhere).replaceAll("'"," ");
		System.out.println(str);
		
		if (str.contains (" and ") || str.contains(" or ") ) {
		String [] str1=str.split(" and | or ");
		System.out.println(Arrays.toString( str1));
		for (int i=0;i<str1.length;i++) {
		
		newstr.add(new Restriction(str1[i].split(" ")[0],str1[i].split(" ")[2],str1[i].split(" ")[1]));
		}
		}
		
//		else {
//			String []str2=queryString.substring(indexofwhere).split(" ");
//			newstr.add(new Restriction(str2[0],str2[2],str2[1]));
//			return newstr;
//		}
		else {
			String [] str2=queryString.substring(indexofwhere).split(" ");
			System.out.println(Arrays.toString( str2));
			newstr.add(new Restriction(str2[0],str2[2],str2[1]));
		}
		return newstr;
		}
//	int indexofwhere=queryString.indexOf("where")+6;
//	if(indexofwhere-6 == -1) {
//	return null;}
//	List<Restriction> newstr = new ArrayList<Restriction>();
//	if (queryString.contains (" and ") || queryString.contains(" or ") ) {
//	
////	String  [] str=queryString.substring(indexofseason).trim().split(" and | or ").toString().trim().split(" ").toString().trim().split("'");
//		
//		String  [] str=queryString.substring(indexofwhere).split(" and | or ");
//		System.out.println("split by or" + Arrays.toString(str));
//		String []cond= null;
//		
//			cond=str[0].split(" ");
////			System.out.println(Arrays.toString(cond));
//			newstr.add(new Restriction(cond[0],cond[2],cond[1]));
////			System.out.println(newstr);
//// city(0)
////=(0) =>becomes 1 position of str
////'Banglore'(1)=>becomes 1 position of str
////			for(int i=0;i<str.length;i++) {
//				String  leftofspace =str[1].split(" ")[0];
////				System.out.println("left value "+ leftofspace);
//			
//				String []rightofspace=str[1].split(" ")[1].split("'");
//				
////				System.out.println(Arrays.toString(rightofspace));
////				//after or
//				String  leftofspace2 =str[2].split(" ")[0];
//				String []rightofspace2=str[2].split(" ")[1].split("'");
////			
//				Restriction res1=new Restriction(leftofspace,rightofspace[1],rightofspace[0]);
//				Restriction res2=new Restriction(leftofspace2,rightofspace2[1],rightofspace2[0]);
//				
//				newstr.add(res1)
//;			System.out.println("final value" + newstr);
////		}
//			
//			
//		return newstr;
//
//	}
//	else {
//		String []str=queryString.substring(indexofwhere).trim().split(" ");
//		newstr.add(new Restriction(str[0],str[2],str[1]));
////		return newstr;
//	}
//	return null;
//}
  //"select city,winner,player_match from ipl.csv where season > 2014 and city ='Bangalore' or city ='Delhi'";
// "select winner,season,team1,team2 from ipl.csv " + "where season > 2014"
//"select winner,season,team1,team2 from ipl.csv where " + "season = 2014 and city ='Bangalore'"
//"select winner,season,team1,team2 from ipl.csv where season = 2014 and city ='Bangalore' or city ='Delhi'"
	/*
	 * Extract the conditions from the query string(if exists). for each condition,
	 * we need to capture the following: 1. Name of field 2. condition 3. value
	 * 
	 * For eg: select city,winner,team1,team2,player_of_match from data/ipl.csv
	 * where season >= 2008 or toss_decision != bat
	 * 
	 * here, for the first condition, "season>=2008" we need to capture: 1. Name of
	 * field: season 2. condition: >= 3. value: 2008
	 * 
	 * the query might contain multiple conditions separated by OR/AND operators.
	 * Please consider this while parsing the conditions.
	 * 
	 */

//public static void main(String[] args) {
//	QueryParser obj=new QueryParser();
//	List<String>x= obj.logicalOperators("select winner,season,team1,team2 from ipl.csv where season = 2014 and city ='Bangalore' or city ='Delhi'");
////	System.out.println(x);
//	}
  public List<String> logicalOperators(String queryString) {

		
		int indexofwhere=queryString.indexOf("where")+6;
		if(indexofwhere-6 == -1) {
		return null ;}
		List<String> newstr2 = new ArrayList<String>();
//		String words="";
		String newstr= queryString.substring(indexofwhere);
		String [] newstr1=newstr.split(" ");
		
//		System.out.println(Arrays.toString(newstr1));
//		
		
		for(int i=0; i<newstr1.length;i++) {
			if(newstr1[i].matches("and|or")){
			
				newstr2.add(newstr1[i]);
			}
			
		}
		
		return newstr2;
		
	}
  
	/*
	 * Extract the logical operators(AND/OR) from the query, if at all it is
	 * present. For eg: select city,winner,team1,team2,player_of_match from
	 * data/ipl.csv where season >= 2008 or toss_decision != bat and city =
	 * bangalore
	 * 
	 * The query mentioned above in the example should return a List of Strings
	 * containing [or,and]
	 */

  
  public List<AggregateFunction> aggregateFunctions(String queryString) {
	  
//	  int indexofselect=queryString.indexOf("select")+7;
//		int indexoffrom=queryString.indexOf("from")-1;
		List<AggregateFunction> newstr = new ArrayList<AggregateFunction>();
		
//		String str=queryString.substring(indexofselect,indexoffrom);
//		System.out.println(str);
	  if (queryString.contains("min(")||queryString.contains("max(")||queryString.contains("count(")||
			  queryString.contains("sum(")||queryString.contains("avg(")) {
	 		
	 		
//	 	String  newWords = "";
	 	String [] Agg = queryString.split(" ")[1].split(",");
	 	for (int i=0; i < Agg.length; i++) {
	 		if (Agg[i].startsWith("min(")|| Agg[i].startsWith("max(")
	 				|| Agg[i].startsWith("count(")|| Agg[i].startsWith("sum(")
	 				|| Agg[i].startsWith("avg("))
//	 		{newWords += Agg[i] + " " ;	}
	 		{
	 			newstr.add(new AggregateFunction(Agg[i].substring(Agg[i].indexOf("(")+1, Agg[i].indexOf(")")),
	 					Agg[i].substring(0,Agg[i].indexOf("("))));
	 			System.out.println(newstr);
	 		}
	 	}
	 	
	 	return newstr;
	 	
//	 	System.out.println(NewWords);
//	 	return newWords.split(" ");
	 	}
	 	else {	return null;}
	 }
	 	
	/*
	 * "select max(city),max(winner),count(team1) from ipl.csv where season > 2014 and city ='Bangalore' or city ='Delhi' group by winner";
	 * Extract the aggregate functions from the query. The presence of the aggregate
	 * functions can determined if we have either "min" or "max" or "sum" or "count"
	 * or "avg" followed by opening braces"(" after "select" clause in the query
	 * string. in case it is present, then we will have to extract the same. For
	 * each aggregate functions, we need to know the following: 1. type of aggregate
	 * function(min/max/count/sum/avg) 2. field on which the aggregate function is
	 * being applied.
	 * 
	 * Please note that more than one aggregate function can be present in a query.
	 * 
	 * 
	 */

}