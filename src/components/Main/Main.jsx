import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {


    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-containeer">
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Jyoti.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>You are a social trend expert on the latest internet slang and memes.</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>

                            <div className="card">
                                <p>Suggest Python libraries I should use if I want to perform a k-means clustering analysis on a dataset</p>
                                <img src={assets.code_icon} alt="" />
                            </div>

                            <div className="card">
                                <p>Generate 10 interesting ideas for a presentation about biology. Provide your response in the form of a list.</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>

                            <div className="card">
                                <p>Rewrite the text below to fix any grammar and spelling mistakes: isnt it intrsintg how u can still rd this despit all the mistakez?</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                        </div>


                    </>
                    : <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ?
                                <div className='Loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="serach-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                    <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>

                </div>
            </div>

        </div>
    )
}

export default Main
