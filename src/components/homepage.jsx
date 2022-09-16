import React, { Component } from "react";
import NavBar from "./navbar";
import NewsSection  from "./newssection";
import HeadQuote from "./headquote";
import Spacer from "./spacer";
import { ParallaxProvider } from 'react-scroll-parallax';
import CarouselFestival from "./carouselfestival"


class Homepage extends Component {
    render(){
        return(
            <div className="buddy">
                    <HeadQuote 
                          quote="Cine nu suge pula, NU suge pula!"
                          author="Vasilica"
                          recommend="Dani Mocanu ~ 'Nu cad pe locu doi'"
                        />
                    <NavBar />
                    <div className="fit xtrawide col justify-center center bcg-black-color txt-white-color">
                      <Spacer height="25px"/>
                      <h5>Pozele editiei anterioare</h5>
                      <CarouselFestival></CarouselFestival>
                    </div>
                    
                    <div className="main__wrap">
                      <main className="main__container">
                        <Spacer height="25px" />

                        <div className="main__body col center">
                          <h1>Noutati </h1>
                          <Spacer height="25px" />
                          <NewsSection 
                            title={<h5>Noutate classic 4 teens!</h5>}
                            type={2}
                            img_link={"grandpiano3.jpg"}
                            text={
                                <div>
                                  <p>Va reveni zeul <b>Thanos</b> ca sa o invete pe Antonia Mirique pian, chiar daca are nume de strugure cu manusa infinitului!</p>
                                  <p>Va reveni zeul <b>Thanos</b> ca sa o invete pe Antonia Mirique pian, chiar daca are nume de strugure cu manusa infinitului!</p>

                                </div>
                            }
                            justify="start"
                            rev="reverse"
                          />
                          <NewsSection 
                            title={<h5>Noutate classic 4 teens!</h5>}
                            type={2}
                            img_link={"grandpiano3.jpg"}
                            text={
                                <div>
                                  <p>Va reveni zeul <b>Thanos</b> ca sa o invete pe Antonia Mirique pian, chiar daca are nume de strugure cu manusa infinitului!</p>
                                  <p>Va reveni zeul <b>Thanos</b> ca sa o invete pe Antonia Mirique pian, chiar daca are nume de strugure cu manusa infinitului!</p>

                                </div>
                            }
                            justify="start"
                            rev="no"
                          />
                          <NewsSection 
                            title={<h5>Noutate classic 4 teens!</h5>}
                            type={2}
                            img_link={"grandpiano3.jpg"}
                            text={
                                <div>
                                  <p>Va reveni zeul <b>Thanos</b> ca sa o invete pe Antonia Mirique pian, chiar daca are nume de strugure cu manusa infinitului!</p>
                                  <p>Va reveni zeul <b>Thanos</b> ca sa o invete pe Antonia Mirique pian, chiar daca are nume de strugure cu manusa infinitului!</p>

                                </div>
                            }
                            justify="start"
                            rev="reverse"
                          />
                          <NewsSection 
                            title={<h5>Noutate classic 4 teens!</h5>}
                            type={2}
                            img_link={"grandpiano3.jpg"}
                            text={
                                <div>
                                  <p>Va reveni zeul <b>Thanos</b> ca sa o invete pe Antonia Mirique pian, chiar daca are nume de strugure cu manusa infinitului!</p>
                                  <p>Va reveni zeul <b>Thanos</b> ca sa o invete pe Antonia Mirique pian, chiar daca are nume de strugure cu manusa infinitului!</p>

                                </div>
                            }
                            justify="start"
                          />
                        </div>
                      </main>
                    </div>
        </div>
        )
    }
}

export default Homepage;