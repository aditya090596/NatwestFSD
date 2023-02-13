package Javademos;

public class Boxweight extends Box{
    double weight1;
    public Boxweight(){
        
      super.weight=10;
    //   this.weight=10;
    }

    public Boxweight(double l, double w, double h, double weight,double weight1){
        super (l,w,h,weight);
    //    super .weight=weight;
        // super.weight=weight;
        this.weight1=weight;// it willbe prioritised when the arguments pass in main class.
    }

}
