import Capovilla from '../images/impresaCapovilla.png';
import Donato from '../images/donatoRinaldi.png';

function Projects() {
    return (
        <section id="projects" className="myBgColor projectsSection">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md myTextColor">
                        <div className='capovillaContainer'>
                            <a href="https://impresacapovilla.it/" target='_blank' rel="noreferrer">
                                <img src={Capovilla} alt="Impresa Edile Capovilla" style={{ width: "50%", borderRadius: "8px" }} />
                            </a>
                        </div>
                        <div className='donatoContainer'>
                            <a className='d-flex justify-content-end' href="https://dottordonatorinaldi.it/" target='_blank' rel="noreferrer">
                                <img src={Donato} alt="Donato Rinaldi Psicologo" style={{ width: "50%", borderRadius: "8px" }} />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md myTextColor">
                        <h2 className="h1 castom-h">Projects</h2>
                        <p className='mt-3 text-justify'>
                        In the section dedicated to my personal projects, I am proud to present two websites that I have developed for people close to me: "Donato Rinaldi - Psychologist" and "Capovilla Construction Company". These sites have been developed with the utmost care and attention to detail, reflecting the specific needs of my clients. The website <a className='myLinkStyle' href="https://dottordonatorinaldi.it/" target='_blank' rel="noreferrer">"Donato Rinaldi - Psychologist"</a> was designed to offer a welcoming and professional interface, allowing patients to discover the services offered by the psychologist. On the other hand, <a className='myLinkStyle' href="https://impresacapovilla.it/" target='_blank' rel="noreferrer">"Capovilla Construction Company"</a> was designed to showcase the experience and competence of the company, with a gallery of completed projects and detailed information on the services offered. Both sites are examples of my commitment to creating customized web solutions that not only meet but exceed my clients' expectations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;