import React, { createFactory } from "react";
import '../css/paymentGateway.css';
import visa from '../images/visa.png';
import master from '../images/master.png';
import amex from '../images/amex.png';

function paymentGatway(){
    return (
        <div > <br></br>
            <div className="payment" > 
            <h3 className="topic">Insert your card details here</h3> <hr/> <br/>
        
             
            <form action="pay" method="post" className="payment-form"/>

                <div className="images">
                    <input type="radio" name="cardType" className="card-type" value="Visa" required/>
                    <label>
                        <img src={visa} alt="VISA" height="35px"/>
                    </label>
                    <input type="radio" name="cardType" className="card-type" value="Master" required/>
                    <label>
                        <img src={master} alt="MASTER" height="35px"/>
                    </label>
                    <input type="radio" name="cardType" className="card-type" value="Amex" required/>
                    <label>
                        <img src={amex} alt="AMEX" height="35px"/>
                    </label>
                </div>
                
                <br/> <br/>

				<table className="pay-table">
					<tr>
						<td>Card Holder's Name : </td>
						<td><input type="text" name="cardName" className="input-box" placeholder="Name on Card" required/></td>
					</tr>
					
					<tr>
						<td>Card Number : </td>
						<td><input type="text" name="cardNumber" className="input-box" placeholder="16 Digits Number on Card" pattern="[0-9]{16}" title="16 Digits Number" required/></td>
					</tr>

					<tr>
						<td>Expire Date : </td>
						<td><input type="text" name="expDate" className="input-box" placeholder="MM/YYYY" required/> </td>
					</tr>

					<tr>
						<td>CVV : </td>
						<td><input type="password" name="cvv" className="input-box" placeholder="3 Digits number on Card" pattern="[0-9]{3}" title="3 Digits Number" required/>
						</td>
					</tr>
				</table>
            
                <input type="submit" name="proceed" className="pay-btn" value="Proceed to Pay"/>

            <form/>
            
        </div>	
        </div>
    )
}

export default paymentGatway;