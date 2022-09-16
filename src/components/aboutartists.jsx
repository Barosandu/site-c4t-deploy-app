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


const AboutArtists = ()=>{
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
        <div className="about-artists col center txt-white-color" style={{background: "black"}}>
        <div className=""><Spacer height="50px"></Spacer></div>
        <Overlay bcg="linear-gradient(0deg, rgb(255, 255, 255, 0.9), rgb(255, 255, 255, 0.95)), url(musicalnotes.jpg)" invert></Overlay>

        <NewsSection 
                title={<h3><b>Mara Dobrescu</b> - director artistic Classic for Teens 2022</h3>}
                type={w_width > threshold ? 2 : 1}
                img_link={"maradobrescu.jpg"}
                text={
                    <div>
                        <p>"Sonoritatea cristalină și fluiditatea articulațiilor sunt demne de apreciat. Mereu preocupată de
rigoare, echilibru și eleganță" (Michel Le Naour – Le Monde de la Musique).</p>
                      <p>Renumita pianistă de origine română Mara Dobrescu, stabilită în Franța, și-a început studiile muzicale
la Liceul de Muzică George Enescu, la clasa prof. Gabriela Stepan.</p>
                    <p> Foarte repede este remarcată de
public și critici pentru calitatea interpretărilor sale pline de temperament, dar și eleganța și finețea
frazărilor sale. Acordarea unei burse de studiu de către Guvernul Francez pe o perioadă de trei ani îi
permite să absolve studiile Conservatorului Național Superior din Paris cu cele mai înalte distincții, ea
devenind foarte repede laureată a numeroase Concursuri Internaționale și bursieră a Fundațiilor
Yamaha, Meyer, Tarazzi, Nadia și Lili Boulanger. </p>
<p>Obține de asemeni un master în muzică
contemporană la Conservatorul Național Superior din Geneva. Mara Dobrescu este invitată să
concerteze în recital sau ca solistă atât pe cele mai importante scene din Paris: Théâtre Mogador,
Théâtre de Chatelet, l'Auditorium du Musée d'Orsay, Cité de la Musique, Salle Cortot, Orangerie de
Bagatelle, cât și în numeroase festivaluri ca Festivalul din Aix en Provence, PianoLille Festival,
Saintonge Festival, ArsTerra Festival, dar și pe scena Concertgebouw din Amsterdam, Bozar și La
Monnaie din Bruxelles.</p>
<p> Susține recitaluri și concerte în Italia, Spania, Germania, Austria, Bulgaria, Rusia, Cehia, Japonia, Argentina, Australia, iar debutul său în Statele Unite ale Americii la Chicago și
New York se bucură de un mare succes. Înregistrează pentru Radio și Televiziunea Română, pentru
Radio France și Radio Swiss-Romande, iar discografia sa este foarte apreciată de presa de specialitate
(Le Monde de la Musique, Classica, Repertoire). În paralel cu cariera solistică, Mara Dobrescu este
pasionată de dramaturgia gestului muzical și participă la numeroase proiecte bazate pe îmbinarea între
literatură, muzică și teatru. </p>
<p>Fiind o mare iubitoare de muzică de cameră, evoluează în compania celor
mai talentați muzicieni din generația sa, făcând parte și din Quartetul Face à Face (2 piane și 2 percuții)
cu care concertează în întreaga lume. Mara Dobresco se bucură de îndrumarea unor mari maeștri
precum Martha Argerich, Jean Claude Pennetier, Pierre-Laurent Aimard și Dominique Merlet.</p>
                    <p>Site: <a className="link-a" href="https://www.maradobresco.com/">www.maradobresco.com</a></p>
                    </div>
                }
                justify="start"
                imgstyle={fitToSquare(sq_lim_img)}
                />

    <NewsSection 
                    title={<h3><b>Rodica Vică</b></h3>}
                    type={w_width > threshold ? 2 : 1}
                    img_link={"rodicavica.jpg"}
                    text={
                        <div>
                            Rodica VICĂ este solist invitat al multor opere și filarmonici atât din România cât și din
    străinătate. Soprana debutează pe scena Operei bucureștene în 2010, urmând mai apoi să
    colaboreze permanent cu această instituție, interpretând roluri principale în operele Flautul
    fermecat (Regina Nopții) și Don Giovanni (Donna Anna) de W. A. Mozart, Rita de G. Donizetti,
    Rosina din Bărbierul din Sevilla de G.Rossini, Alcina de G. Fr. Haendel, etc. Rodica Vică este
    câștigatoarea a numeroase premii la concursuri naționale si internaționale: Premiul I la Concursul
    Internaţional de muzicabarocă „La Stravaganza” Cluj- Napoca, Premiul II la Concursul
    Radiodifuziunii Române „Drumul spre celebritate”, Premiul pentru cea mai Buna Interpretare
    Muzicală în cadrul Trofeului „Ion Dacian” pentru Tineri Interpreţi, ș.a. Activitatea artistică actuală
    a sopranei Rodica Vică include premiera mondială a oratoriului Strigoii de George Enescu alături
    de Rundfunk Sinfonieorchester Berlin la Konzerthaus Berlin, Gala OTP Bank la Sala Bela Bartók
    de la Müpa Budapesta, Canto Barocco la Teatro La Fenice, Gloria de Antonio Vivaldi alături de
    Accademia Bizantina condusă de Ottavio Dantone la deschiderea Festivalului Baroc Varazdin, La
    Lumiere Comique la Festivalul de Muzică Veche de la Budapesta și BaRockIN’ Transylvania cu
    orchestra Musica Ricercata, Matthäus Passion de J.S. Bach sub conducerea dirijorală a lui Cristian
    Măcelaru la Ateneul Român, Poemes pour mi de Olivier Messiaen alături de Filarmonica
    Transilvania sub conducerea dirijorului Cristian Mandeal, concert în cadrul Lunii Oedip la Londra,
    serată inclusă în evenimentele premergătoare premierei operei enesciene la Royal Opera House
    Covent Garden. De asemenea, angajamentele recente și viitoare includ debutul în Violetta Valery
    din La Traviata de Giuseppe Verdi la Opera Națională din București, un turneu internațional
    inovator având-o ca solistă și intitulat JAZZT Vivaldi care comemorează 280 de ani de la dispariția
    lui Antonio Vivaldi, participarea deosebită la Festivalul internațional George Enescu cu premiera
    românească a oratoriului Strigoii de George Enescu și un turneu internațional cameral menit să
    celebreze genialitatea compozitorilor români “Romanian Music Journey”. Discografia Rodicăi
    Vică include două CD-uri, primul produs de casa de discuri Capriccio cu înregistrarea absolută a
    oratoriului Strigoii de George Enescu (The Ghosts) și al doilea, Stars in the Sky lansat la sfârșitul
    anului 2018 la Musikverein Vienna- un proiect multicultural și unic care cuprinde o colecție de
    cântece de leagăn din întreaga lume, alături de celebra țiteristă, Barbara Laister- Ebner, solista
    Concertului de Anul Nou de la Viena din 2018. 
    <p>Site: <a className="link-a" href="https://www.rodicavica.com/">www.rodicavica.com</a></p>
                        </div>
                    }
                    justify="start"
                    imgstyle={fitToSquare(sq_lim_img)}
                    rev="reverse"
                />

                    <ImageDiv bcg="#17252a" parallax={0} height="auto" flexdirection="column">
                    <Spacer height="55px"></Spacer>
                    <NewsSection 
                    title={<h3><b>Clara CERNAT</b></h3>}
                    type={w_width > threshold ? 2 : 1}
                    img_link={"claracernat.jpg"}
                    text={
                        <div>
                            Clara CERNAT, violonistă – recunoscută drept ambasadoare a culturii române peste hotare, Clara
Cernat s-a născut pe malurile Dunării, la Turnu-Măgurele. Ea s-a afirmat foarte tânără pe plan
internațional, imediat după absolvirea Universității de Muzică din București, la clasa reputatului
Maestru Stefan Gheorghiu, a fost selectată printre cele «8 Mari Talente ale Europei», ceea ce i-a
permis să-și desăvârșească arta interpretativă cu renumitul violonist Tibor Varga. Cariera sa a
evoluat pe importante scene ale lumii: Opera din Beijing NCPA, Seoul Arts Center, Centrul

Cultural Kirschner din Buenos-Aires, Filarmonica din Roma, Teatrul Liceo, Palatul muzicii şi
Auditorim-ul din Barcelona, Salle Gaveau din Paris etc. Este des invitată la importante
festivaluri muzicale: Festivalul Internațional George Enescu, Croisements (China), Suona
Francese (Italia), Sylvanes (Franta), Kings Place Festival (Londra), etc. A înregistrat numeroase
discuri cu muzică de Enescu, Bloch, Turina, Porumbescu, Gershwin etc. acestea fiind primite cu
entuziast atât de publicul larg, cât și de critica de specialitate. Înregistrările sale video i-au adus
milioane de fani în lumea întreaga. 
    <p>Site: <a className="link-a" href="http://www.pianoviolon.com/index.html">http://www.pianoviolon.com/index.html/</a></p>
                        </div>
                    }
                    justify="start"
                    imgstyle={fitToSquare(sq_lim_img)}
                    rev="no-reverse"
                />
            <NewsSection 
                    title={<h3><b>Thierry HUILLET</b></h3>}
                    type={w_width > threshold ? 2 : 1}
                    img_link={"thierryhuillet.jpg"}
                    text={
                        <div>
                            Thierry HUILLET, pianist și compozitor – născut la Toulouse, pe malurile Garonei, cel mai
important fluviu al Occitaniei, Thierry Huillet este un muzician cu multiple fațete, care a atins
excelența în domeniile creației și interpretării muzicale. Important compozitor francez, cu peste
100 de opusuri, lucrările sale se bucură de mare succes, un exemplu fiind «Micul Prinț» pentru
orchestră simfonică a fost interpretat de peste 20 de ori de către : Orchestre National du Capitole
de Toulouse (Franța 2019 și 2020), Orchestre du Pays de Béarn (Franța 2019), Orchestre National
de Lille (Franța 2021), Orchestra Națională a Patagoniei (Argentina 2019), Orchestra de Cameră
din Chișinău (Republica Moldova 2019). Ca pianist, a câștigat Marele Premiu al celebrului
«Cleveland International Piano Competition USA», unul din concursurile de «Mare Şlem» ale
pianului, dacă l-am compara cu lumea tenisului. Este de asemenea laureat al Concursurilor
Internaționale de pian Busoni (Italia) și Tokyo (Japonia). Thierry Huillet a absolvit Conservatorul
National Superior din Paris, unde a obținut cele mai înalte distincții la pian și alte discipline
muzicale. A cântat pe marile scene ale lumii, în recital și solist cu orchestra, alături de Orchestra
de la RAI (Italia), Cleveland Orchestra (SUA), Orchestre de Paris, Koreean Chamber Orchestra
etc. Formează împreuna cu soția sa Clara Cernat, un Duo reputat care a concertat pretutindeni, de
la Paris la Lima, trecând prin Londra, Madrid, Santiago de Chile, Tokyo și alte mari metropole ale
muzicii. 
    <p>Site: <a className="link-a" href="https://musique21.com/">https://musique21.com/</a></p>
                        </div>
                    }
                    justify="start"
                    imgstyle={fitToSquare(sq_lim_img)}
                    rev="reverse"
                />
            <img src="clarasihulliet.jpg" style={{ marginBottom: "75px",maxWidth: "80vw", maxHeight: "80vw", width: "600px"}}></img>
            
                    </ImageDiv>
                    <Spacer height="55px"></Spacer>

    <NewsSection 
                    title={<h3><b>Ștefan CAZACU</b></h3>}
                    type={w_width > threshold ? 2 : 1}
                    img_link={"stefancazacu.jpg"}
                    text={
                        <div>
                            Ștefan CAZACU, violoncelist: Un talent muzical de excepţie ce îşi găseşte exprimarea prin
sunetele violoncelului este ceea ce reprezintă deja Ştefan Cazacu, un tânăr artist ce reuşeşte să
se impună pe scenele naţionale şi internaționale. Născut în anul 1994, Ştefan Cazacu şi-a
început formarea muzicală alături de tatăl său, distinsul violoncelist Marin Cazacu, în prezent
fiind student în anul l Master la Universitatea Natională de Muzică din Bucuresti, la clasa
profesorului Răzvan Suma si la Universitatea de Muzică din Viena. Talentul său a fost răsplătit
prin numeroasele premii 1 obţinute în diverse competiţii naţionale, totodată fiind distins cu:
Premiul I la Concursul Internaţional de la Liezen – Austria (2008), Premiul al II-lea
la Concursul Antonio Janigro – Croaţia (2008), Marele Premiu la Concursul Eurovision
Young Musicians (2010 Bucureşti), Marele Premiu la Concursul Paul Constantinescu 2015,
Marele Premiu la Concursul George Georgescu, Marele Premiu la Concursul Mihail
Jora 2016, Premiul Tânărului Interpret oferit de Revista Actualitatea Muzicală 2009. A
susţinut recitaluri în România, Olanda, Israel, Austria, Ungaria, Germania şi a colaborat ca
solist cu toate Orchestrele simfonice din România, dar și cu orchestra Filarmonicii din
Chișinău, Orchestra sinfonică din Valencia, Orchestra sinfonică din Alicante. Dintre dirijorii
care l-au acompaniat amintim pe Cristian Mandeal, Horia Andreescu, Cristian Măcelaru,
Camil Marinescu, și Theo Wolters. 
    <p>Site: <a className="link-a" href="http://stefancazacu.com/biografie.html">http://stefancazacu.com/biografie.html</a></p>
                        </div>
                    }
                    justify="start"
                    imgstyle={fitToSquare(sq_lim_img)}
                    rev="no-reverse"
                />


            <NewsSection 
                    title={<h3><b>Mircea MARIAN</b></h3>}
                    type={w_width > threshold ? 2 : 1}
                    img_link={"mirceamarian.jpg"}
                    text={
                        <div>
                            Mircea MARIAN este licențiat în violoncel și absolvent al cursurilor de master ale Universității
Naționale de Muzică din București la clasa prof. univ. dr. Marin Cazacu. Doctor în muzică, acesta
ocupă postul de lector universitar în cadrul Universității Naționale de Muzică din București la catedra de muzică de cameră, lector în cadrul Facultații de Muzică și Teatru din Timișoara –
specialitatea violoncel, profesor de violoncel la Colegiul Național de Arte Dinu Lipatti, este solist
instrumentist al Orchestrei de Cameră Radio a Societății Române de Radiodifuziune, membru al
ansamblului PlaCello, Duo Cello Jaya, Trio Larson, Violoncellissimo și Profil. Câștigă
numeroase premii precum: premiul I la concursul internațional Liezen-Austria, premiul I și
premiul special al concursul internațional Eugen Coca – Chișinău, premiul I la concursul Victor
Giuleanu – secția muzică de cameră, premiul II la concursul Drumul spre celebritate, marele
premiu la concursul Paul Constantinescu și premiul I la concursul Mihail Jora. Pe parcursul
dezvoltării sale artistice a studiat și a susținut recitaluri alături de muzicieni de prestigiu precum:
Marin Cazacu, Jan-Erik Gustaffson, Alexandra Guțu, Frans Helmerson, Diana Ketler, Aage
Kvalbein, Fenyo Laszlo, Olsi Leka, Robin Pharo, Răzvan Popovici, Marcin Sieniawski, Răzvan
Suma. Mircea Marian a susținut concerte în calitate de solist alături de orchestrele: Filarmonica
din Gera – Germania, Orchestra Națională Radio – București, Orchestra de Cameră Radio –
București, Filarmonica de Stat Arad, Filarmonica Botoșani, Filarmonica de Stat Ion
Dumitrescu din Râmnicu Vâlcea, Orchestra de Cameră Focșani, Filarmonica de
Stat Muntenia din Târgoviște, Orchestra Universitaria a U.N.M.B., Orchestra Universității din
Graz-Austria și Filarmonica Oltenia din Craiova. De asemenea, a realizat înregistrări în cadrul
Societății Române de Radiodifuziune, atât în calitate de solist, cât și alături de Duo Cello Jaya. A
participat la master class-uri și festivaluri precum: Festivalul ICon Arts, Festivalul
Internațional George Enescu, Festivalul Internațional Sergiu Celibidache,
Festivalul SoNoRo, SoNoRo Interferențe, Nocturne Baroce, Festivalul Meridian, Festivalul IS
Potsdamer Innenstadt, Simn Festival, Festivalul Enescu și muzica lumii.
    <p>Site: <a className="link-a" href="https://duocellojaya.ro">duocellojaya.ro </a></p>
                        </div>
                    }
                    justify="start"
                    imgstyle={fitToSquare(sq_lim_img)}
                    rev="reverse"
                />

<img src="STCAZACU-MMARIAN.jpg" style={{zIndex: "1", marginBottom: "75px",maxWidth: "80vw", maxHeight: "80vw", width: "600px"}}></img>
                    <ImageDiv bcg="#17252a" parallax={0} height="auto" flexdirection="column">
                    <Spacer height="55px"></Spacer>

                            
<NewsSection 
                    title={<h3><b>Matei IOACHIMESCU</b></h3>}
                    type={w_width > threshold ? 2 : 1}
                    img_link={"mateiioachimescu.jpg"}
                    text={
                        <div>
                            Matei IOACHIMESCU, flautist: Celebrul compozitor finlandez Kalevi Aho afirma despre Matei
Ioachimescu: „Cântatul lui a impresionat profund publicul, după fiecare concert mai mulți spectatori
au izbucnit în lacrimi, iar aplauzele au fost neobișnuit de lungi. Matei Ioachimescu face parte dintre cei
mai mari flautiști pe care i-am ascultat.”
Flautistul Matei Ioachimescu este recunoscut pentru interpretările repertoriului baroc, modern, dar
și pentru recitaluri cross-over, susținând o activitate concertistică impresionantă. Este absolvent al
Universității de Muzică din Viena, oraș în care s-a și stabilit. De-a lungul carierei sale a obținut
mai multe importante distincții și burse (precum cele de la Fundația Thyll-Dürr sau Yehudi
Menuhin Foundation), a colaborat cu unii dintre cei mai interesanți muzicieni internaționali și a
concertat pe renumite scene din Europa și Japonia, precum: Konzerthaus Wien, Ateneul Român,
Conservatorio Santa Cecilia din Roma, Budapest Music Center sau Suntory Hall. Albumul de
debut, intitulat "Lumiere" și realizat în colaborare cu pianista Cătălina Butcaru, este considerat de
către criticii de specialitate un produs de referință pentru aceste două instrumente. Pentru
activitatea sa intensă și înalta calitate a proiectelor susținute, i-a fost încredințat titlul de
„Ambasador al Integrării" în anul 2013 de către actualul Cancelar al Austriei, Sebastian Kurz. Este
invitat ca membru al juriului în competiții internaționale și susține workshop-uri în Austria,
Japonia, Ungaria, România și Croația.
    <p>Site: <a className="link-a" href="https://www.mateiioachimescu.com/">https://www.mateiioachimescu.com/ </a></p>
                        </div>
                    }
                    justify="start"
                    imgstyle={fitToSquare(sq_lim_img)}
                    rev="reverse"
                />
               


                <NewsSection 
                    title={<h3><b>Igor SAVA</b></h3>}
                    type={w_width > threshold ? 2 : 1}
                    img_link={"igorsavapoza.jpg"}
                    text={
                        <div>
                            Igor SAVA, acuarelist, artist de renume mondial, nominalizat și premiat în ultimii cinci ani, în
cadrul a numeroase expoziții și festivaluri din întreaga lume. Igor Sava s-a născut în 1973 în
Hâncești (Republica Moldova), a absolvit Școala de Pictură din Hâncești, după care a urmat cursurile
Colegiului de Arte Plastice „Ilya Repin” din Chișinău. În 1999 a absolvit Facultatea de Design și
Grafică a Universității de Vest din Timișoara și, în același an, decide să mute în Italia. La Roma
se înscrie și frecventează cursurile de pictură ale Academiei de Arte Frumoase. Igor Sava este unul
dintre fondatorii școlii de acuareliști „Aquarelle Art Studio”. Își petrece timpul pictând și predând
acuarela în Roma și în întreaga lume. Mai multe informații despre activitatea acuarelistului Igor
Sava pot fi găsite pe &nbsp;
     <a className="link-a" href="https://www.slon.it/">https://www.slon.it/ </a>.
                        </div>
                    }
                    justify="start"
                    imgstyle={fitToSquare(sq_lim_img)}
                    rev="no-reverse"
                /> 
                <div className="row center justify-space-evenly fit xtrawide">
                    <ImageDiv parallax={0} height="200px" maxWidth="300px" bcg="url(igorpainting1.jpg)"></ImageDiv>
                    <ImageDiv parallax={0} height="200px" maxWidth="300px" bcg="url(igorpainting2.jpg)"></ImageDiv>
                    <ImageDiv parallax={0} height="200px" maxWidth="300px" bcg="url(igorpainting3.jpg)"></ImageDiv>
                    <ImageDiv parallax={0} height="200px" maxWidth="300px" bcg="url(igorpainting4.jpg)"></ImageDiv>

                </div>
                <Spacer height="55px"></Spacer>

                </ImageDiv>
                <Spacer height="55px"></Spacer>

                <NewsSection 
                    title={<h3><b>Lea PAVARINI</b></h3>}
                    type={w_width > threshold ? 2 : 1}
                    img_link={"grandpiano3.jpg"}
                    text={
                        <div>
                           Lea PAVARINI, pianistă și profesor de pian la Conservatorul de Muzică Santa Cecilia din Roma:
în perioada 1985-2004 a fost directorul artistic al Concursului Internațional de Cameră organizat
de Provincia Trapani – Italia; în 1992, prin decret ministerial, este numită președintele catedrei de
pian din cadrul Conservatorului de Muzică din Trapani; în perioada 1994-2000 este membru în
Juriul Internațional Rai pentru selecția membrilor Orchestrei Europene (ECYO); în perioada 2014-
2018 face parte din Comisia de Evaluare a Conservatorului Licinio Refice din Frosinone, iar din
2015 face parte din Comisia de Relații Internaționale a Conservatorului Santa Cecilia din Roma
implicându-se activ în promovarea cooperării europene și internaționale și din 2016, în cadrul
EUNIC Roma, se ocupă de proiectul EUROPA IN MUSICA.
La nivel solistic se prezintă pentru prima dată în fața publicului la vârsta de 8 ani și-și termină
studiile la vârsta de 18 ani beneficiind de îndrumarea profesorilor Carlo Zecchi (pentru partea
solistică) și Jean Fournier (pentru partea camerală). De asemenea, a urmat cursurile Academiei din
Salszburg. De-a lungul carierei sale a susținut concerte în cele mai importante săli de concerte din
Europa și America: Mozart Grosse Sall, Wiener Sall, Salle Pleyel, Bavaria Klassik, Laeiszhalle,
Music Center, Di Kirchner, Sala Conservatorului din Caen, colaborând cu muzicieni de renume
internațional precum Helmut Zangerle, Cornelius Hermann, Marianne Berendth, Giovanni
Sollima, Aldo Bennici, etc. De asemenea, în calitate de solistă, a susținut un turneu în cele mai
importante orașe austriece alături de Orchestra Simfonică din Salzburg, iar în perioada 1983-1985
a fost asistentă la clasa de muzică de cameră a lui Jean Fournier de la Mozarteum din Salzburg. În
1997 a primit Premiul Federației Italiene Unesco, iar în 1998 a primit din partea Fundației Rotary
International Premiul Paul Harris Fellow.  
                        </div>
                    }
                    justify="start"
                    imgstyle={fitToSquare(sq_lim_img)}
                    rev="reverse"
                /> 

               
                <NewsSection 
                    title={<h3><b>Daniele TERRIBILE</b></h3>}
                    type={w_width > threshold ? 2 : 1}
                    img_link={"grandpiano3.jpg"}
                    text={
                        <div>
                            Daniele TERRIBILE, s-a născut la Roma în 1996, a început să studieze pianul la vârsta de 12 ani
și încă din primii ani, a dat dovadă de abilități remarcabile, primind premii și distincții la
numeroase concursuri naționale și internaționale, la care a participat. În 2010, a participat la
festivalurile de muzică "Giovani talenti, futuri concertisti", cântând în săli importante precum Aula
Magna a Facultății de Teologie Valdese și Oratorio dell'Arciconfraternita dei Bergamaschi, din
Roma. Sub îndrumarea lui M° Desirée Scuccuglia, s-a pregătit pentru admiterea la Conservatorio
Santa Cecilia, unde a fost admis cu note maxime în anul universitar 2018-19. Elev al maestrului
Antonella Ceravolo, a participat, remarcându-se, la numeroase festivaluri de concerte organizate
de Conservator, atât în interiorul, cât și în afara acestuia: a susținut concertul "Pianiști la Operă"
în cadrul revistei "Tineri artiști pentru spital" la Policlinico Gemelli; la Sala Academică a
Conservatorului Santa Cecilia a concertat în cadrul revistei "Claviaturi în... Germania Franța
Anglia Italia" și a participat la proiectul de producție artistică realizat de instituție cu ocazia
aniversării a 250 de ani de la nașterea lui Beethoven. De asemenea, a reprezentat Conservatorio
Santa Cecilia, împreună cu alți trei pianiști selectați, la Scarlatti Forum, în cadrul Piano CityNaples 2020.
În 2021, a concertat la Sala Casella a Accademia filarmonica Romana într-un concert dedicat în
întregime compozitorului rus Dmitri Șostakovici.
A participat la cursuri de măiestrie în calitate de student cu maeștrii Michele Marvulli, Emanuele
Arciuli, Pierluigi Camicia.
A urmat un curs de pian de doi ani la clasa profesoarei Antonella Ceravolo, sub îndrumarea căreia
a obținut Diploma Academică de Nivel I cu note maxime și mențiune. 
                         </div>
                    }
                    justify="start"
                    imgstyle={fitToSquare(sq_lim_img)}
                    rev="no-reverse"
                /> 
            <NewsSection 
                    title={<h3><b>Eugenio ABRUZZESE</b></h3>}
                    type={w_width > threshold ? 2 : 1}
                    img_link={"grandpiano3.jpg"}
                    text={
                        <div>
                           Eugenio ABRUZZESE s-a născut la Roma în 2000. În prezent este student la Conservatorio di
S. Cecilia, unde studiază sub îndrumarea maestrului Stella Quadrini.
Printre diversele sale activități și stagiuni de concerte, a cântat ca solist la Accademia Filarmonica
Romana, într-o seară dedicată în întregime compozitorului Dmitri Șostakovici.
De asemenea, a luat parte la mai multe inițiative organizate de Conservator: a fost selectat să
participe la Festivalul " Tastiere in....." organizat de Departamentul "Claviaturi și instrumente de
percuție" și a cântat în cadrul serii dedicate Angliei interpretând compoziții rare de J.Ireland.
De asemenea, a reprezentat Conservatorul în cadrul stagiunii de concerte "Tineri artiști pentru
spital", în colaborare cu Policlinico "A.Gemelli".
În anul universitar în curs, a participat la cursuri de măiestrie susținute de Maestro Andrea
Lucchesini și Enrico Pace. 
                         </div>
                    }
                    justify="start"
                    imgstyle={fitToSquare(sq_lim_img)}
                    rev="reverse"
                /> 
    </div>
    )
}


export default AboutArtists;