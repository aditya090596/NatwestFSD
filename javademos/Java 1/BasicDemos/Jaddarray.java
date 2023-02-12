package BasicDemos;

public class Jaddarray {
    int arr[]={1,2,3,12,10,12,23,12,34,12};
    int sum=0;
    int sum1;
    public void sum(){
       
    // int i;
    // for (i = 0; i < arr.length; i++)
    // // sum += arr[i];
    // sum=sum+ arr[i];
    // System.out.println(sum);
    
    // for (int sum:arr){
    //        sum1 += sum;
        
    // }
// int i=0;
    // while (i < arr.length) {
    //     sum+=arr[i];
       
    //     System.out.println(sum);
    //     i++;
    // }
    int i=0;
    
   
   do {
    sum+=arr[i];
   
    System.out.println(sum);
    i++;
}
    while (i < arr.length) ;
    
    }


    public static void main(String[] aa) {
       Jaddarray obj=new Jaddarray();
       obj.sum();
      
    }
}
