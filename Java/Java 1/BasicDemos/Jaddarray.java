package BasicDemos;

public class Jaddarray {
    int arr[]={1,2,3,12,10,12,23,12,34,12};
    int sum=0;
    public void sum(){
       
    int i;
    for (i = 0; i < arr.length; i++)
    sum += arr[i];
    System.out.println(sum);
    

    }


    public static void main(String[] aa) {
       Jaddarray obj=new Jaddarray();
       obj.sum();
      
    }
}
