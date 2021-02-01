import leaf from './Img/leaf.jpg';
import lemon from './Img/lemon.jpg';
import flower from './Img/flower.png';
import evie from './Img/Evie.jpg';
import Slide1 from './Img/Slide1.jpg';
import Slide2 from './Img/Slide8.jpg';
import Slide3 from './Img/Slide12.jpg';
import Slide4 from './Img/Slide4.jpg';
import Slide5 from './Img/Slide13.jpg';
import Slide6 from './Img/Slide14.jpg';

import './interactions/interactions.js';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul className="menu">
            <li className="menu-item"><a href="#home" >Home</a></li>
            <li className="menu-item"><a href="#praca" >Moja praca</a></li>
            <li className="menu-item"><a href="#aboutme" >About me</a></li>
            <li className="menu-item"><a href="#contact" >Contact</a></li>
          </ul>
        </nav>
      </header>
    


    <div id='home' className="intro">
      <div className="intro-left show1">
        <h1 className="intro-left-title ">EVIE DE GALA</h1>
        <h2 className="intro-left-subtitle ">ECO CONCIARGE</h2>
        <p className="intro-left-text">
          Ekologiczne życie jest o wiele łatwiejsze, <br>
        </br>gdy masz osobistego opiekuna środowiskowego.</p>
      </div>
      <div className="intro-right">
        <div className="intro-img show2">
          <img src={leaf} alt="leaf" className="intro-img-leaf"/>
        </div>
      </div>
      <div className="intro-circle showcircle1"></div>
    </div>

    <div className="tendencia">
      <h2 className="tendencia-title show3">TREND</h2>
      <div className="tendencia-image show4">
          <img src={lemon} alt="lemon" className="tendencia-image-lemon"/>
        </div>
      <div className="tendencia-text show5">
        <p className="tendencia-text-parrafo">
        “Są ludzie, którzy są podekscytowani i chcą dokonać gruntownej zmiany stylu życia”.<br></br>
        Eco usługi są coraz bardziej popularne.
        </p>
      </div>
      <div className="tendencia-circle show6">
        
        </div>
    </div>
        <div className="tendencia-work">
          <div className="tendencia-work-box">
            <h2 className="tendencia-work-title">USŁUGI</h2> 
          </div>
          <div className="tendencia-work-info">
            <p className="tendencia-work-text1">
            -&gt;organizacja imprezy / spotkania w twoim domu, <br></br>ogrodzie lub u nas w Zielonym Domu 
            <br></br>
            -&gt;Dekoracja twojej imprezy w stylu Eko-naturalnym-minimalistycznym , pomoc w układaniu menu i robienia zakupów 
            </p>
            <p className="tendencia-work-text2">
            -&gt;warsztaty kulinarne dla dzieci <br></br>
            -&gt;warsztaty robienia mydła <br></br>
            -&gt;pomoc w wypełnianiu wniosku Czyste Powietrze  
            </p>
            <p className="tendencia-work-text3">
            -&gt;pomoc w znalezieniu specjalistów do modernizacji domów lub mieszkań ( elektryka, hydraulika, płytkarze, sprzedaż / wymiana okien, dekarze, specjaliści od tarasów, altany, wiat)
            </p>
          </div>
      </div>

    <div id='praca' className="slider">

      <h2 className='slider-text'> Moja praca </h2>
      <section className="slider-box">

        <img src={Slide1} alt='slide1'></img>
        <img src={Slide2} alt='slide2'></img>
        <img src={Slide3} alt='slide3'></img>
        <img src={Slide4} alt='slide4'></img>
        <img src={Slide5} alt='slide5'></img>
        <img src={Slide6} alt='slide6'></img>

      </section>
    </div>

    <div id='aboutme'  className="aboutme">
        <div className="show7">
          <h2 className="aboutme-title ">ABOUT ME</h2>
          <p className="aboutme-bio">Nazywam się Iwona Domagała artystycznie Evie De Gala. Uwielbiam planować, tworzyć i doradzać. 
          
Jestem tutaj, aby pomóc Ci zrozumieć, że środowisko naturalne, zdrowe odżywianie jest dla Ciebie bardzo ważne i musimy zastosować specjalną „synergię”, jeśli chcemy mieć wokół siebie lepsze życie i pozytywną energię.
Jestem zakochana w naturze, jedzeniu, zdrowiu i świadomym życiu.
<br></br>
Organizuję imprezy okolicznościowe dla dzieci i dorosłych. 2021 roku rozpoczynamy działalność w Paniowicach przy ul. Głównej 66, dzięki czemu będzie można wynająć naszą powierzchnię na zorganizowanie spotkania lub swojego warsztatu , 
<br></br>
zapraszam na stronę <a href= "https://zielonydom.org/" target='_blank' rel="noreferrer">www.zielonydom.org</a>
<br></br>
Uwielbiam dzielić się wiedzą, którą posiadam. Wierzę, że dobry i wspólny czas łączy ludzi.
<br></br>
Moim zamiarem jest, abyś po współpracy ze mną czuł/a się zdrowy/a i naładowany/a pozytywną energią.
          </p>
        </div>
        <div className="aboutme-img show8">
          <img src={evie} alt="leaf" className="intro-img-leaf"/>
        </div>
        <div className="aboutme-circle">
          <div className="aboutme-circle-shape show9"></div>
        </div>
    </div>

    <div id='contact' className="contact">
      <h2 className="contact-title show10">KONTAKT</h2>
      <div className="contact-image show11">
        <img src={flower} alt="flower" className="contact-image-flower"/>
      </div>
      <p className="contact-detail show12">
        Tel.: +48 607 246 115
        <br></br>
        Email.: hello@eviedegala.com
      </p>
      <div className="contact-circle show13"></div>
    </div>



    </div>
  );
}

export default App;
