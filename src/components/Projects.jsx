import Capovilla from '../images/impresaCapovilla.png';
import Donato from '../images/donatoRinaldi.png';
import Signorino from '../images/signorino.png';
import Marydo from '../images/fuoriDiTesta.png';

function Projects() {
    return (
        <section id="progetti" className="myBgColor projectsSection">
            <div className="mb-5 container myTextColor">
                <div className="mb-3 text-center">
                    <h2 className="h1 castom-h text-center">Progetti</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <p className='text-justify col-lg-8'>
                        Nella sezione dedicata ai miei progetti personali, sono orgoglioso di presentare alcuni siti web che ho sviluppato per persone a me vicine. Questi progetti sono stati sviluppati con la massima cura e attenzione ai dettagli, sono esempi del mio impegno nella creazione di soluzioni web personalizzate che non solo soddisfano, ma superano le aspettative dei miei clienti.
                    </p>
                </div>
            </div>
            <div className='container mb-5'>
                <div className="row d-flex">
                    <div className="imgContainer col-12 col-md d-flex flex-column justify-content-center mb-3">
                        <a href="https://dottordonatorinaldi.it/" target='_blank' rel="noreferrer">
                            <img src={Donato} style={{ width: "100%", borderRadius: "20px" }} alt="Donato Rinaldi Psicologo" />
                        </a>
                    </div>
                    <div className="col-12 col-md myTextColor d-flex flex-column justify-content-center">
                        <h4>
                            <a className='myLinkStyle' href="https://dottordonatorinaldi.it/" target='_blank' rel="noreferrer">Donato Rinaldi - Psicologo</a>
                        </h4>
                        <p className='text-justify'>
                            Il sito è stato realizzato per offrire un'interfaccia accogliente e professionale, consentendo ai pazienti di scoprire i servizi offerti dallo psicologo.
                        </p>
                    </div>
                </div>
            </div>
            <div className='container mb-5'>
                <div className="row d-flex flex-column-reverse flex-md-row">
                    <div className="col-12 col-md myTextColor d-flex flex-column justify-content-center">
                        <h4>
                            <a className='myLinkStyle' href="https://impresacapovilla.it/" target='_blank' rel="noreferrer">Impresa Edile Capovilla</a>
                        </h4>
                        <p className='text-justify'>
                            Questo progetto è stato ideato per mettere in mostra l'esperienza e la competenza dell'azienda, con una galleria di progetti completati e informazioni dettagliate sui servizi offerti.
                        </p>
                    </div>
                    <div className="imgContainer col-12 col-md d-flex flex-column justify-content-center">
                        <a href="https://impresacapovilla.it/" target='_blank' rel="noreferrer">
                            <img src={Capovilla} style={{ width: "100%", borderRadius: "20px" }} alt="Impresa Edile Capovilla" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='container mb-5'>
                <div className="row d-flex">
                    <div className="imgContainer col-12 col-md d-flex flex-column justify-content-center">
                        <a href="https://signorinopizza.com.au/" target='_blank' rel="noreferrer">
                            <img src={Signorino} style={{ width: "100%", borderRadius: "20px" }} alt="Signorino Pizza" />
                        </a>
                    </div>
                    <div className="col-12 col-md myTextColor d-flex flex-column justify-content-center">
                        <h4>
                            <a className='myLinkStyle' href="https://signorinopizza.com.au/" target='_blank' rel="noreferrer">Signorino Pizza</a>
                        </h4>
                        <p className='text-justify'>
                            Sito web per una pizzeria food truck a Melbourne che offre l'autentica pizza napoletana cotta in forno a legna. Con un focus su ingredienti freschi e di alta qualità, Signorino Pizza porta il sapore della tradizione italiana direttamente ai suoi clienti, combinando passione e autenticità in ogni fetta.
                        </p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row d-flex flex-column-reverse flex-md-row">
                    <div className="col-12 col-md myTextColor d-flex flex-column justify-content-center">
                        <h4>
                            <a className='myLinkStyle' href="https://salonefuoriditesta.it/" target='_blank' rel="noreferrer">Salone "Fuori di Testa"</a>
                        </h4>
                        <p className='text-justify'>
                            Il salone offre un ambiente accogliente e vivace, dove i clienti possono usufruire di una vasta gamma di servizi di acconciatura e trattamenti innovativi. Marydò, con la sua passione per la bellezza e lo stile, si impegna a garantire un'esperienza personalizzata e memorabile per ogni cliente.
                        </p>
                    </div>
                    <div className="imgContainer col-12 col-md d-flex flex-column justify-content-center">
                        <a href="https://salonefuoriditesta.it/" target='_blank' rel="noreferrer">
                            <img src={Marydo} style={{ width: "100%", borderRadius: "20px" }} alt="Salone Fuori di Testa" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;