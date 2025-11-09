import { useContext, useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

import { weatherCodeBox, getCast } from "../utils/function"

import { GlobalContext } from "../App";
import Loader from "../component/Loader";

function Home() {

    const { globalData, setGlobalData } = useContext(GlobalContext);

    const [loader, setLoader] = useState(true);


    const [daysShow, setDaysShow] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            const data = await getCast();
            setGlobalData(data);
            setLoader(false);
        }
        fetchData();
    }, []);

    return (
        <>

            <Loader loader={loader} />

            <Header />

            <section
                className="dorne-welcome-area bg-img bg-overlay"
                style={{ backgroundImage: `url('./img/weather_bg/${weatherCodeBox(globalData?.current_weather?.weathercode).img}.jpg')` }}
            >

                <div className="mrbing_box">
                    <img className="img-res" src="./img/mrbing.png" alt="" />
                </div>

                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center">
                        <div className="col-12 col-md-10">


                            <div className="city_weather_box">
                                <div className="city_box_cover">
                                    <h4><i className="fa fa-map-marker" aria-hidden="true"></i>{globalData.city}</h4>
                                </div>
                                <button className="btn border-btn hide_me">Get My Weather</button>
                            </div>


                            <div className="weather_box_cover">
                                <ul className="list_box">
                                    <li><span>Weather</span>
                                        {(() => {
                                            const weather = weatherCodeBox(globalData?.current_weather?.weathercode);

                                            return (<>

                                                <div className="box">
                                                    <img src={`./img/weather_img/${weather.img}.svg`} alt="" />
                                                    {weather.box}
                                                </div>

                                            </>)

                                        })()}
                                    </li>
                                    <li><span>Temp</span><div className="box"><img src={`./img/weather_img/thermometer.svg`} alt="" />{globalData?.current_weather?.temperature}{globalData?.current_weather_units?.temperature}</div></li>
                                    <li><span>Wind</span><div className="box"><img src={`./img/weather_img/wind.svg`} alt="" />{globalData?.current_weather?.windspeed}{globalData?.current_weather_units?.windspeed}</div></li>
                                    <li><span>Now</span><div className="box"><img src={`./img/weather_img/clear-${globalData?.current_weather?.is_day ? "day" : "night"}.svg`} alt="" />{globalData?.current_weather?.is_day ? "Day" : "Night"}</div></li>
                                </ul>
                                <div className="seven_box">
                                    <ul className={`ui_list ${daysShow ? "show" : ""}`}>
                                        <li>
                                            <span className="day_box">{globalData?.daily?.time[0]}</span>
                                            <div className="text_box">
                                                <span className="img_box"><img className="img-res" src={`./img/weather_img/${weatherCodeBox(globalData?.daily?.weathercode[0]).img}.svg`} alt="" /></span>
                                                <span className="temp_box">{globalData?.daily?.temperature_2m_max[0]}°C</span>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="day_box">{globalData?.daily?.time[1]}</span>
                                            <div className="text_box">
                                                <span className="img_box"><img className="img-res" src={`./img/weather_img/${weatherCodeBox(globalData?.daily?.weathercode[1]).img}.svg`} alt="" /></span>
                                                <span className="temp_box">{globalData?.daily?.temperature_2m_max[1]}°C</span>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="day_box">{globalData?.daily?.time[2]}</span>
                                            <div className="text_box">
                                                <span className="img_box"><img className="img-res" src={`./img/weather_img/${weatherCodeBox(globalData?.daily?.weathercode[2]).img}.svg`} alt="" /></span>
                                                <span className="temp_box">{globalData?.daily?.temperature_2m_max[2]}°C</span>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="day_box">{globalData?.daily?.time[3]}</span>
                                            <div className="text_box">
                                                <span className="img_box"><img className="img-res" src={`./img/weather_img/${weatherCodeBox(globalData?.daily?.weathercode[3]).img}.svg`} alt="" /></span>
                                                <span className="temp_box">{globalData?.daily?.temperature_2m_max[3]}°C</span>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="day_box">{globalData?.daily?.time[4]}</span>
                                            <div className="text_box">
                                                <span className="img_box"><img className="img-res" src={`./img/weather_img/${weatherCodeBox(globalData?.daily?.weathercode[4]).img}.svg`} alt="" /></span>
                                                <span className="temp_box">{globalData?.daily?.temperature_2m_max[4]}°C</span>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="day_box">{globalData?.daily?.time[5]}</span>
                                            <div className="text_box">
                                                <span className="img_box"><img className="img-res" src={`./img/weather_img/${weatherCodeBox(globalData?.daily?.weathercode[5]).img}.svg`} alt="" /></span>
                                                <span className="temp_box">{globalData?.daily?.temperature_2m_max[5]}°C</span>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="day_box">{globalData?.daily?.time[6]}</span>
                                            <div className="text_box">
                                                <span className="img_box"><img className="img-res" src={`./img/weather_img/${weatherCodeBox(globalData?.daily?.weathercode[6]).img}.svg`} alt="" /></span>
                                                <span className="temp_box">{globalData?.daily?.temperature_2m_max[6]}°C</span>
                                            </div>
                                        </li>
                                    </ul>

                                    <button onClick={() => { setDaysShow(!daysShow); }} className="btn days_btn">See 7 day forcast</button>

                                </div>
                            </div>



                            <div className="hero-content">
                                <h2>Should I Go Out?</h2>
                                <h4>Because apparently, this site knows my city better than I do.</h4>
                                <button className="ask_btn btn dorne-btn" type="button" data-toggle="modal" data-target="#exampleModal">Ask Mr Bing</button>
                            </div>


                        </div>
                    </div>
                </div>

            </section>
            {/* ***** Welcome Area End ***** */}
            {/* ***** Catagory Area Start ***** */}
            <section className="dorne-catagory-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="all-catagories">
                                <div className="row">
                                    {/* Single Catagory Area */}
                                    <div className="col-12 col-sm-6 col-md">
                                        <div
                                            className="single-catagory-area wow fadeInUpBig"
                                            data-wow-delay="0.2s"
                                        >
                                            <div className="catagory-content">
                                                <img src="img/core-img/icon-1.png" alt="" />
                                                <a href="#">
                                                    <h6>Hotels</h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Catagory Area */}
                                    <div className="col-12 col-sm-6 col-md">
                                        <div
                                            className="single-catagory-area wow fadeInUpBig"
                                            data-wow-delay="0.4s"
                                        >
                                            <div className="catagory-content">
                                                <img src="img/core-img/icon-2.png" alt="" />
                                                <a href="#">
                                                    <h6>Restaurants</h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Catagory Area */}
                                    <div className="col-12 col-sm-6 col-md">
                                        <div
                                            className="single-catagory-area wow fadeInUpBig"
                                            data-wow-delay="0.6s"
                                        >
                                            <div className="catagory-content">
                                                <img src="img/core-img/icon-3.png" alt="" />
                                                <a href="#">
                                                    <h6>Shopping</h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Catagory Area */}
                                    <div className="col-12 col-sm-6 col-md">
                                        <div
                                            className="single-catagory-area wow fadeInUpBig"
                                            data-wow-delay="0.8s"
                                        >
                                            <div className="catagory-content">
                                                <img src="img/core-img/icon-4.png" alt="" />
                                                <a href="#">
                                                    <h6>Beauty &amp; Spa</h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Catagory Area */}
                                    <div className="col-12 col-md">
                                        <div
                                            className="single-catagory-area wow fadeInUpBig"
                                            data-wow-delay="1s"
                                        >
                                            <div className="catagory-content">
                                                <img src="img/core-img/icon-5.png" alt="" />
                                                <a href="#">
                                                    <h6>Cinema</h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ***** Catagory Area End ***** */}
            {/* ***** About Area Start ***** */}
            <section className="dorne-about-area section-padding-0-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="about-content text-center">
                                <h2>
                                    Discover your city with <br /><span>Mr. Bing’s</span> Forecast <br />
                                </h2>
                                <p>
                                    Could this be any more accurate? Stay prepared for every sarcastic sunshine, moody drizzle, and could-use-a-sweater breeze. From sunny strolls to oh-my-God-why-is-it-raining-again moments, Chandler’s got the weather—and the commentary—to match.
                                    Check the forecast, pack an umbrella (or don't), and let the Bing-style humor guide your day.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="quote_box modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Mr Bing Advice</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {weatherCodeBox(globalData?.current_weather?.weathercode).quote}
                        </div>
                    </div>
                </div>
            </div>


            {/* ***** Clients Area End ***** */}

            <Footer />

        </>
    );

}


export default Home;