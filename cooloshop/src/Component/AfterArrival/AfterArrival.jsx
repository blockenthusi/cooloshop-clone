import React from 'react'
import './AfterArrival.css'

const AfterArrival = () => {
    return(
        <div className='pageHolder'>
            <img src="./deal_ofthe_week.png" style={{width: "100%", height: "100%", objectFit:"contain"}}/>
            <div className='side'>
                <div className='header'>
                    <h1>Deal of the week</h1>
                </div>
                <div className='timer'>
                    <div className='circles'>
                        <h5>2</h5>
                        <h6>days</h6>

                    </div>
                    <div className='circles'>
                    <h5>36</h5>
                        <h6>Hours</h6>
                    </div>
                    <div className='circles'>
                    <h5>26</h5>
                        <h6>Mins</h6>
                    </div>
                    <div className='circles'>
                    <h5>10</h5>
                        <h6>Secs</h6>
                    </div>
                </div>
                <div className='btnn'>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    )
}


export default AfterArrival