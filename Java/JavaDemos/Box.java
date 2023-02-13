package Javademos;

public class Box {
      double l;
      double h;
      double w;
      double weight;


      Box(){
        
      }
        // cube
        Box (double side){
            this.w=side;
            this.l=side;
            this.h=side;
        }
        Box(double l, double w, double h,double weight){
            this.w=w;
            this.l=l;
            this.h=h;
            this.weight=weight;
        }
      }

