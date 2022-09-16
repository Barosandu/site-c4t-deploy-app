import React, { Component } from "react";
import NavBar from "./navbar";
import NewsSection  from "./newssection";
import HeadQuote from "./headquote";
import Spacer from "./spacer";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import CarouselFestival from "./carouselfestival"
import { Chrono } from "react-chrono";
import Overlay from "./overlay";
import ImageDiv from "./imagediv";
import useWindowDimensions from "./wdim";
import { useState, useEffect } from 'react';
import AboutArtists from "./aboutartists";

const ProgramPage = () => {
        const {width: w_width, height: w_h} = useWindowDimensions();
        const threshold = 900;

        const items = [
            {
                title: "22 Septembrie, Ora 11:00",
                cardTitle: "Deschidere Classic for Teens",
                url: "",
                cardSubtitle:"Locație în curs de confirmare",
                cardDetailedText: "Conferință de presă dedicată deschiderii festivalului Classic for Teens 2022",
                media: {
                    type: "IMAGE",
                    source: {
                        url: "/C4T.png"
                    }
                    }
            },
            {
                title: "22 Septembrie, Ora 17:00",
                cardTitle: "Vernisaj expo GEORGE ENESCU ȘI CASA REGALĂ A ROMÂNIEI (23 septembrie - 2 Octombrie 2022) ",
                url: "",
                cardSubtitle:"Locatie: foyerul Teatrului Municipal Maior Gh. Pastia Focșani",
                cardDetailedText: `Expoziție dedicată violonistului, compozitorului și dirijorului George Enescu.
                Expoziția este organizată în parteneriat cu Muzeul Național George Enescu din București.
                `,
                media: {
                type: "IMAGE",
                source: {
                    url: "/george-enescu.jpg"
                }
                }
            },
            {
                title: "22 Septembrie, Ora 19:00",
                cardTitle: "ROMANIAN MUSIC JOURNEY ",
                url: "",
                cardSubtitle:"Locatie: Teatrul Municipal Maior Gh. Pastia Focșani",
                cardDetailedText: `Concert inaugural susținut de soprana Rodica Vică (România-Austria), violonista Clara Cernat (România-Franța) și pianistul și compozitorul Thierry Huillet(Franța). 
                `,
                media: {
                type: "IMAGE",
                source: {
                    url: "/romanian-music-journey.jpg"
                }
                }
            },
            {
                title: "25 septembrie - 2 Octombrie 2022",
                cardTitle: "Igor Sava și George Cristea - Expoziție de pictura",
                url: "",
                cardSubtitle:`Sediul Universității Alexandru Ioan Cuza Iași, filiala
                Focșani ( locație în curs de confirmare).`,
                cardDetailedText: [`Expoziție de pictura - Igor Sava (Italia-Republica Moldova), acuarele si George Cristea (România),
                pictură în ulei.`, "Vernisaj: 26 Septembrie, ora 17:00", "-------------------------"],
                media: {
                type: "IMAGE",
                source: {
                    url: "/painting-abstract.jpg"
                }
                }
            },
            {
                title: "27 Septembrie, Ora 19:00",
                cardTitle: "MEMORII SONORE - Muzica românească în trecut şi prezent",
                url: "https://www.facebook.com/MemoriiSonore/",
                cardSubtitle:`Locatie: Ateneul Popular Maior Gheorghe Pastia Focșani`,
                cardDetailedText: [`Spectacol de sunet şi imagine
                Proiect finantat de AFCN, realizat de Andreea Butnaru - povestitor şi pianist; Adrian
                Florescu – violonist solist; Florin Mitrea – violoncelist solist; Alin Chelărescu – tânăr
                compozitor și Andrei Nicolescu – regizor muzical, creator de content vizual.`, "Spectacol gazduit          in cadrul festivalului CFT "],
                media: {
                type: "IMAGE",
                source: {
                    url: "/memorii-sonore.jpg"
                }
                }
            },
            {
                title: "28 Septembrie, Ora 19:00",
                cardTitle: "Daniele Terribili - Recital de pian",
                url: "",
                cardSubtitle:`Locatie: Ateneul Popular Maior Gheorghe Pastia Focșani`,
                cardDetailedText: [`Recital de pian sustinut de Daniele Terribili, Conservatorul de Muzică Santa Cecilia din Roma (Italia)`],
                
            },
            {
                title: "28 Septembrie, Ora 19:00",
                cardTitle: "ROMANIAN RHAPSODY",
                url: "",
                cardSubtitle:`Locatie: Ateneul Popular Maior Gheorghe Pastia Focșani`,
                cardDetailedText: [`Concert susținut de flautistul Matei Ioachimescu (România-Austria)
                și pianista Mara Dobrescu (România-Franța).`],
                media: {
                type: "IMAGE",
                source: {
                    url: "/ro-rhap.jpeg"
                }
                }
            },
            {
                title: "1 octombrie 2022, Ora 19:00",
                cardTitle: "Ziua Internațională a Muzicii",
                url: "",
                cardSubtitle:`Locatie: Ateneul Popular Maior Gheorghe Pastia Focșani`,
                cardDetailedText: [`Recital de pian susținut de Eugenio Abruzzese, Conservatorul de Muzică Santa Cecilia din Roma (Italia).`],
                media: {
                type: "IMAGE",
                source: {
                    url: "/music-day.jpeg"
                }
                }
            },
            {
                title: "1 octombrie 2022, Ora 19:00",
                cardTitle: `Finisaj expoziție si prezentarea lucrărilor realizate în cadrul masterclassului
                susținut de artistul Igor Sava (Republica Moldova-Italia) cu elevii Liceului de Artă Gheorghe
                Tăttărăscu din Focșani. `,
                url: "https://www.facebook.com/igorsavaart",
                media: {
                type: "IMAGE",
                source: {
                    url: "/igor-sava-2.jpg"
                }
                }
            }

        ];

        const masterclassitems=[
            {
                title: "26 - 28 august 2022",
                cardTitle: "Masterclass de video-jurnalism",
                url: "",
                cardSubtitle:"Locație: Liceul de Artă Gheorghe Tăttărăscu",
                cardDetailedText: `Cursul de training este susţinut de Doru Ionescu (jurnalist senior,
                    TVR 2) şi Bogdan Sterpu (editor audio-video, TVR), fiecare cu peste 25 de ani de experienţă
                    zilnică în Televiziunea Română.`,
                media: {
                    type: "IMAGE",
                    source: {
                        url: "/C4T.png"
                    }
                    }
            },
            {
                title: "26 - 30 septembrie 2022",
                cardTitle: "Masterclass de pictură - Igor Sava",
                url: "",
                cardSubtitle:"Locație: Liceul de Artă Gheorghe Tăttărăscu",
                cardDetailedText: `Masterclass de pictură susținut de acuarelistul Igor Sava (Italia-Republica Moldova) 
                `,
                media: {
                    type: "IMAGE",
                    source: {
                        url: "/igorsava.jpg"
                    }
                    }
            },
            {
                title: "27 - 29 septembrie 2022",
                cardTitle: `Masterclass susținut de pianista Mara Dobrescu (România-Franța) și flautistul Matei Ioachimescu
                (România-Austria).`,
                url: "",
                cardSubtitle:"Locație: Ateneul Popular Maior Gheorghe Pastia Focșani",
                cardDetailedText: ``,
                media: {
                    type: "IMAGE",
                    source: {
                        url: "/C4T.png"
                    }
                    }
            },
            {
                title: "28 septembrie - 1 octombrie 2022",
                cardTitle: `Masterclass susținut de pianista Lea Pavarini`,
                url: "",
                cardSubtitle:"Locație: Ateneul Popular Maior Gheorghe Pastia Focșani",
                cardDetailedText: `Masterclass susținut de pianista Lea Pavarini, profesor și director al Departamentului de Relații
                Internaționale din cadrul Conservatorului de Muzică Santa Cecilia din Roma (Italia)`,
                media: {
                    type: "IMAGE",
                    source: {
                        url: "/C4T.png"
                    }
                    }
            },
        ]
        return (
            <div className="buddy full col center program-overlay">
                
                 
    
                <ImageDiv bcg="#17252a" parallax={0} flexdirection="column">
                    <div className="fit xtrawide"><Spacer height="25px"/></div>
                    <h3 className="txt-white-color">PROGRAM CFT</h3>
                    <h5 className="txt-white-color">CONCERTE și EXPOZIȚII</h5>
                    
                    <div className="fit xtrawide"><Spacer height="25px"/></div>
                    <div style={{ width: '700px', maxWidth: "80vw", height: '600px', minHeight: "600px" }}>
                        <Chrono id="oood"  items={items}  mode="VERTICAL" onItemSelected={(item)=>{ }} theme={{
                            primary: "#2b7a78",
                            secondary: 'black',
                            titleColor: 'white',
                            titleColorActive: 'white',
                        }}>
                            <div className="chrono-icons">
                                <img src="/icons_instruments/icons81.png" alt="image1" />
                                <img src="/icons_instruments/icons82.png" alt="image2" />
                                <img src="/icons_instruments/icons83.png" alt="image1" />
                                <img src="/icons_instruments/icons84.png" alt="image2" />
                                <img src="/icons_instruments/icons85.png" alt="image1" />                        
                                <img src="/icons_instruments/icons81.png" alt="image1" />
                                <img src="/icons_instruments/icons82.png" alt="image2" />
                                <img src="/icons_instruments/icons83.png" alt="image1" />
                                <img src="/icons_instruments/icons84.png" alt="image2" />
                                <img src="/icons_instruments/icons85.png" alt="image1" />                        
                            
                            </div>
                        </Chrono>
                    </div>
                    <div className="fit xtrawide"><Spacer height="55px"/></div>

                </ImageDiv>

                <ImageDiv fixed bcg="url(orchestra.jpg)" parallax={0} flexdirection="column">
                    
                    <div className="fit xtrawide"><Spacer height="55px"/></div>
                    <h3 className="txt-white-color" style={{zIndex: "1"}}>PROGRAM CFT</h3>
                    <h5 className="txt-white-color" style={{zIndex: "1"}}>MASTERCLASS</h5>
                    {/**<Overlay bcg="#17252a">
                        <ImageDiv bcg="url(orchestra.jpg)" height="900px" flexdirection="column" parallax={0}></ImageDiv>
                    </Overlay>**/}
                    <div className="fit xtrawide"><Spacer height="25px"/></div>
                    <div style={{ width: '700px', maxWidth: "80vw", height: '600px', minHeight: "600px" }}>
                        <Chrono  disableAutoScrollOnClick focusActiveItemOnLoad={false} id="ooo" items={masterclassitems}  mode="VERTICAL" theme={{
                            primary: "#2b7a78",
                            secondary: 'black',
                            titleColor: 'white',
                            titleColorActive: 'white',
                        }}>
                            <div className="chrono-icons">
                                <img src="/icons_instruments/icons81.png" alt="image1" />
                                <img src="/icons_instruments/icons82.png" alt="image2" />
                                <img src="/icons_instruments/icons83.png" alt="image1" />
                                <img src="/icons_instruments/icons84.png" alt="image2" />
                                <img src="/icons_instruments/icons85.png" alt="image1" />                        
                                <img src="/icons_instruments/icons81.png" alt="image1" />
                                <img src="/icons_instruments/icons82.png" alt="image2" />
                                <img src="/icons_instruments/icons83.png" alt="image1" />
                                <img src="/icons_instruments/icons84.png" alt="image2" />
                                <img src="/icons_instruments/icons85.png" alt="image1" />                        
                            
                            </div>
                        </Chrono>
                    </div>
                    <div className="fit xtrawide"><Spacer height="55px"/></div>

                </ImageDiv>

                <AboutArtists></AboutArtists>
               
                
            </div>
        )
    
}

export default ProgramPage;