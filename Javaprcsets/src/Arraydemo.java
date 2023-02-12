import java.util.Arrays;

public class Arraydemo {
    public static void main(String[] args) {
        int [] arr= {3,12,34,13,24,43};
    swap(arr,0,5);
        System.out.println(Arrays.toString(arr));

        // print array in reverse order

        int start=0;
        int end=arr.length-1;
        while (start<end){
        swap(arr,start,end);
        start ++;
        end--;
          }
        System.out.println(Arrays.toString(arr));

    }

      static void swap(int [] arr ,int index1,int index2){
int temp=arr[index1];
arr[index1]=arr[index2];
arr[index2]=temp;
        }


}
