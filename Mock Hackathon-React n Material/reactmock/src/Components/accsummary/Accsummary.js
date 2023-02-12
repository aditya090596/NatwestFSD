import React from 'react'
import image1 from "../image/appimage2.jpg"

export default function Accsummary() {
  return (<div>
    <div>
      <div className="conatiner text-center mt-1 mb-5">
            <h2>Account Summary</h2>
        </div>
        <div className="container mt-2 ">
            <table class="table table-hover">

                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Accounts</th>
                        <th scope="col">Debits</th>
                        <th scope="col">Credits</th>
                        <th scope="col">Balance left</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Select Account</td>
                        <td>- £50.00</td>
                        <td>+ £150.00</td>
                        <td>+ £100.00 </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Instant saver</td>
                        <td> </td>
                        <td>+ £2000.00</td>
                        <td>+ £2000.00</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Personal Loan</td>
                        <td></td>
                        <td>+ £15000.00</td>
                        <td>+ £15000.00</td>
                    </tr>


                </tbody>
            </table>
        </div>
    </div>
    <div className="container img-fluid text-wrap">
    <img src='./images/accountimg.PNG' className=' img-fluid w-100' ></img>
    <h1> Now use mobile app to check your banking activities </h1>
    
    <h3>Mobile use is growing & completely secure
        Whether it's biometrics, new apps or your mobile phone having new features. </h3>
            <a href="https://www.natwest.com/banking-with-natwest/natwest-app/app-download.html" className="btn btn-primary mb-5">Don't have app?</a>
            
</div>

</div>
  )
}

