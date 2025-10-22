import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../../assets/assets'
import { Context } from '../../../context/Context'
const Main =() => {



    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

    return(
        <div className='main'>
            <div className="nav">
                <p>HospiLink</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {!showResult
                ?<>
                <div className="greet">
                    <p><span>Hello, Kushagra</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest nearby hospitals</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly tell the way that I can find to my doctor</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div> 
                    <div className="card">
                        <p>Suggest neessary and preventive measures for my disease</p>
                        <img src={assets.message_icon} alt="" />
                    </div> 
                    <div className="card">
                        <p>SOS: call for an ambulance</p>
                        <img src={assets.code_icon} alt="" />
                    </div>                
                </div>

                </>
                :<div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                        ?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />

                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    
                    </div>
                </div>
                }
                
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter your prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={()=>onSent()}src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        HospiLink is an AI health assistant to navigate to the best hospitals according your conditions but it is not a health professional.We recommend speeking the help of a profesional for your health assistance
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main