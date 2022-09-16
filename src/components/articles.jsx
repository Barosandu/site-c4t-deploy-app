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

const Articles = ()=>{
    const {width: w_width, height: w_h} = useWindowDimensions();
    const threshold = 900;
    const sq_lim_img="300px"
    function fitToSquare(len){
        var style = {maxWidth: `${len}`, maxHeight: `${len}`, width: `${len}`}
        return style;
    }
    function fitToSquare(len, fixed_h){
        var style
        if(fixed_h)
            style = {maxWidth: `${len}`, maxHeight: `${len}`, height: `${len}`}
        return style;
    }
    return(
        <div>
                    <ImageDiv bcg="#17252a" parallax={0} height="auto" flexdirection="column">
        <div className="container txt-white-color">

            <Spacer height="50px"></Spacer>

            <NewsSection 
                        title={<h3><b>Igor Sava</b></h3>}
                        type={1}
                        img_link={"igorsavapoza.jpg"}
                        text={
                            <div>
            <p>                    
            Acuarelist de renume mondial, Igor Sava face parte dintre distinşii artişti prezenţi în cadrul festivalului Classic for teens, aducând culoare prin vernisajul său ce va asigura o minunată experienţă vizuală iubitorilor de artă.
            </p><p>Născut în 1973 la Hâncești, Moldova, parcursul său artistic l-a purtat mai departe de hotarele plaiurilor de baştină, astfel că, în 1999, în urma terminării studiilor la liceul „Ilya Repin” din Chișinău, acesta îşi continuă cursurile în Timişoara, la Academia de Arte Frumoase, absolvind design grafic și industrial, urmând ca, în acelaşi an, Roma să devină noua gazdă a pictorului care va absolvi aici, în cadrul Academiei de Arte Frumoase.
            </p><p>Calea parcursă de artist a asigurat conturarea unui caracter deosebit picturilor sale.  Tablourile acestuia oferă o fluiditate aparte materiei în contextele arhitecturale si transformă natura într-un cadru predispus la întrepatrunderea elementelor compoziţionale  prin măiestria cu care acesta îşi ghidează pensulele. Graniţa contrastelor între cald si rece este transformată într-o împletire a acestora,  prin fuziuni de culoare atent controlate, tablourile sale inspirând o armonizare a extremelor.
            </p><p>Vasta experienţă acumulată în cei 30 de ani de activitate l-a condus spre reuşite notabile în lumea artei. Igor Sava este un nume adesea întâlnit în mari expoziţii de grup din întreaga lume şi participant activ la concursuri internaţionale. Lista expoziţiilor notabile ale lui Igor Sava începe cu "La pittura a Roma dal Futurismo ai nostri giorni" la Fondazione Franz Ludwig Catel din Roma în 2012, iar cea mai recentă expoziție a fost "European Masters of Watercolor"  din Tirana, Albania, în 2019. O altă expoziţie de o mare importanţă a fost reprezentată de "1ª Exposición Internacional de Acuarela Ciudad de México" la Museo de la Ciudad de Mexicodin Mexico City în 2015 . Alte spectacole însemnate au fost "Ratchadamnoen Contemporary Art Center (RCAC)" din Bangkok și "International Watercolor Biennial Belgrad" din Belgrad , cele mai frecvente expoziţii fiind ţinute în Italia.
            </p><p>Se remarcă, de asemenea, rolul său esenţial în fondarea școlii de acuareliști „Aquarelle Art Studio”, unde tehnicile prin care acuarela şi apa se unesc, dând vibraţie peisajelor de pe hârtie, sunt aprofundate spre o înţelegere la un nivel superior.
            </p><p>Astfel, prezenţa acestui pictor bine-cunoscut reprezintă un prilej de îmbogăţire culturală pentru consumatorii de frumos şi o ocazie unică pentru tinerii ce au ca pasiune pictura, Igor Sava găzduind masterclassul ce va deschide poarta către secretele acuarelei. 

            </p><p>Surse: https://artfacts.net/artist/igor-sava/504625
            https://www.slon.it/?fbclid=IwAR1qXAkaUJ8oTGZUpx5BIV_YRegm2yCcPNe-CF0v8i9MmNJcafL-xzgA4x8
            https://m.moldovenii.md/md/people/1338#ma și în întreaga lume.</p>

                            </div>
                        }
                        justify="start"
                        imgstyle={fitToSquare(sq_lim_img)}
                        rev="no-reverse"
                    />
                    </div>
                    </ImageDiv>
                    <ImageDiv bcg="white" parallax={0} height="auto" flexdirection="column">
        <div className="container">

            <Spacer height="50px"></Spacer>

            <NewsSection 
                        title={<h3><b>Clara Cernat – un reper al muzicii clasice românești
                        </b></h3>}
                        type={1}
                        img_link={"claracernat.jpg"}
                        text={
                            <div>

	<p>Vioara este unul dintre cele mai expresive instrumente muzicale, care redă la perfecție trăirile și sentimentele umane. A cânta la vioară necesită o postură impecabilă, mai mult decât orice alt instrument muzical, precum și un om puternic, la propriu și figurat. Clara Cernat, violonistă de origini române, este întruchiparea perfectă a unui astfel de artist.
	</p><p>Născută pe malurile Dunării, la Turnu-Măgurele, Clara Cernat a absolvit cursurile Universității de Muzică din București, la clasa celebrului Maestru Stefan Gheorghiu. A debutat, însă, încă din adolescență, de la vârsta de 15 ani, în cadrul Orchestrei Simfonice din Arad, moment din care a cunoscut o evoluție spectaculoasă. Pe durata studiilor a primit note maxime la numeroase discipline, cum ar fi vioară, muzică de cameră, istoria muzicii, și studiul folclorului. A câștigat mai multe burse și și-a putut aprofunda arta viorii la Academia Internațională de Muzică din Bonn, Germania, câștigând diploma programului special „Cele mai mari talente ale Europei” (profesor Igor Ozim), apoi la Ecole Supérieure de Violon Tibor Varga din Sion, Elveția (profesor Tibor Varga).
    </p><p>Excelența Clarei Cernat în vioară este dovedită și de diversele premii pe care le-a primit pe parcursul carierei sale. Printre acestea se găsesc premiul I la concursurile J.S. Bach și Citta di Andria, premiul al II-lea și premiul special Mozart la Concursul Internațional Kloster Schontal. Astfel, nu e surprinzător faptul că a evoluat pe marile scene internaționale, din Franța, Italia și Spania până în China, Coreea de Sud sau Argentina, fiind invitată și la festivaluri muzicale cunoscute, Kings Place Festival Londra, Festivalul Internațional George Enescu, Croisements fiind doar câteva exemple. 
    </p><p>Nu putem să vorbim despre Clara Cernat fără a menționa duetul cu Thierry Huillet, pianistul și compozitorul francez alături de care a concertat în toată lumea, cei doi fiind deseori descriși ca fiind “inseparabili în viață și pe scenă”. Succesul perechii poate fi cel mai bine evidențiat prin compunerea unei versiuni proprii a piesei Ciocârlia (originalul de Angheluş Dinicu), care a fost interpretată pentru prima dată la inaungurarea Turnului Eiffel în anul 1889. Împreună ei au înregistrat și lansat mai multe CD-uri și DVD-uri, toate fiind lăudate de critici.
    </p><p>Nu există un singur cuvânt care să descrie violonista pe deplin. Am avea de ales dintre ambiție, deschidere, talent și multe altele. Clara Cernat este, însă, cel mai important, un adevărat ambasador al României în lume, un adevărat conector între diversele culturi ale lumii, unindu-le prin pasiunea profundă pentru vioară și muzică clasică.
    </p>


                            </div>
                        }
                        justify="start"
                        imgstyle={fitToSquare(sq_lim_img)}
                        rev="no-reverse"
                    />
                    </div>
                    </ImageDiv>
        </div>
        

    )
}

export default Articles