import React from 'react'
import './Otp.css'
import { TiMessages } from "react-icons/ti";




const Otp = ()=>{
    return(
        <div className='otpHold'>
        <div className='otpWrap'>
            <div className='otpLines'>
                <div className='otpline'></div>
                <div className='otpline' style={{backgroundColor: "rgb(254, 76, 80)"}}></div>
                <div className='otpline'></div>
            </div>
            <div className='otpMid'>
                <div className='imag'>
                <TiMessages style={{fontSize: "70px", color: "rgb(254, 76, 80)"}}/>
                </div>
                <div className='text'>
                    <p>Verification</p>
                </div>
                <div className='lowerText'>
                    <p>Enter the OTP code sent to your number 
                
                    </p>
                </div>
            </div>
            <div className='otpBox'>
                <div className='otpBoxes'>
                    <div className='tiny'>
                        <p>0</p>
                    </div>
                    <div className='tiny'>
                        <p>0</p>
                    </div>
                    <div className='tiny'>
                        <p>2</p>
                    </div>
                    <div className='tiny'>
                        <p>2</p>
                    </div>
                </div>
                <div className='cont'>
                    <button>Continue</button>
                </div>
            </div>

            <p style={{fontSize: "12px", fontWeight: "500"}}> didn't get a message? <span style={{color: "rgb(254, 76, 80)"}}>Resend</span></p>
        </div>
        </div>
    )
}




export default Otp