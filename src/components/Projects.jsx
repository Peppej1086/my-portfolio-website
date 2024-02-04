import Capovilla from '../images/impresaCapovilla.png';
import Donato from '../images/donatoRinaldi.png';

function Projects() {
    return (
        <section id="progetti" className="myBgColor projectsSection">
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
                        <h2 className="h1 castom-h">Progetti</h2>
                        <p className='mt-3 text-justify'>
                            Nella sezione dedicata ai miei progetti personali, sono orgoglioso di presentare due siti web che ho sviluppato per persone a me vicine: "Donato Rinaldi - Psicologo" e "Impresa edile Capovilla".
                            Questi progetti sono stati sviluppati con la massima cura e attenzione ai dettagli, riflettendo le specifiche esigenze dei miei clienti. Il sito web <a className='myLinkStyle' href="https://dottordonatorinaldi.it/" target='_blank' rel="noreferrer">"Donato Rinaldi - Psicologo"</a> è stato realizzato per offrire un'interfaccia accogliente e professionale, consentendo ai pazienti di scoprire i servizi offerti dallo psicologo. D'altro canto, <a className='myLinkStyle' href="https://impresacapovilla.it/" target='_blank' rel="noreferrer">"Impresa edile Capovilla"</a> è stato ideato per mettere in mostra l'esperienza e la competenza dell'azienda, con una galleria di progetti completati e informazioni dettagliate sui servizi offerti. Entrambi i siti sono esempi del mio impegno nella creazione di soluzioni web personalizzate che non solo soddisfano, ma superano le aspettative dei miei clienti.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;