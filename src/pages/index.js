import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Scroll from '../components/Scroll';

import bountiful from '../assets/images/bountiful.png';
import devdeskqueue from '../assets/images/devdeskqueue.png';
import mypropsplus from '../assets/images/mypropsplus.png';
import yodaspeak from '../assets/images/yodaspeak.png';


const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Xavier, </strong>
              <br />
              a Full Stack Web Developer
            </h2>
            <p>I have made few things check it out.</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
          </a>

          <p>
            Experienced Customer Service Specialist with a
            demonstrated history of working in call centers
            (3+ years)and extensive customer service experience
            (5+ years). Skilled in Full-Stack Development.
            Passionate about learning new skills and
            implementing them successfully.
          </p>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <div className="row">
            <div className="col-6 col-12-mobile">
              <article className="item">
                <a href="https://mypropsplus.com" className="image fit">
                  <img src={mypropsplus} alt="" />
                </a>
                <header>
                  <h3>My Props Plus</h3><br/>
                  <a href="https://mypropsplus.com"><h4>Live Site</h4></a>
                  <a href="https://github.com/props-plus"><h4>Code</h4></a>
                </header>
              </article>
              <article className="item">
                <a href="https://suspicious-yalow-77c7a7.netlify.com" className="image fit">
                  <img src={devdeskqueue} alt="" />
                </a>
                <header>
                  <h3>DevDesk Queue</h3><br/>
                  <a href="https://suspicious-yalow-77c7a7.netlify.com"><h4>Live Site</h4></a>
                  <a href="https://github.com/lambdadevdesk"><h4>Code</h4></a>
                </header>
              </article>
            </div>
            <div className="col-6 col-12-mobile">
              <article className="item">
                <a href="https://bountifulapp.netlify.com" className="image fit">
                  <img src={bountiful} alt="" />
                </a>
                <header>
                  <h3>Bountiful</h3><br/>
                  <a href="https://bountifulapp.netlify.com"><h4>Live Site</h4></a>
                  <a href="https://github.com/coordinator-storytelling"><h4>Code</h4></a>
                </header>
              </article>
              <article className="item">
                <a href="https://yodatts.herokuapp.com" className="image fit">
                  <img src={yodaspeak} alt="" />
                </a>
                <header>
                  <h3>Yoda Speak</h3><br/>
                  <a href="https://yodatts.herokuapp.com"><h4>Live Site</h4></a>
                  <a href="https://github.com/xpuentes/Yoda-Speak"><h4>Code</h4></a>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
