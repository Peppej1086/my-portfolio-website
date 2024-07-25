import { ReactComponent as HtmlIcon } from "../images/skills-icons/file-type-html.svg";
import { ReactComponent as CssIcon } from "../images/skills-icons/file-type-css.svg";
import { ReactComponent as JsIcon } from "../images/skills-icons/file-type-js-official.svg";
import { ReactComponent as AngularIcon } from "../images/skills-icons/file-type-angular.svg";
import { ReactComponent as ReactIcon } from "../images/skills-icons/file-type-reactjs.svg";
import { ReactComponent as PhpIcon } from "../images/skills-icons/file-type-php.svg";
import { ReactComponent as WpIcon } from "../images/skills-icons/wordpress.svg";
import { ReactComponent as WooIcon } from "../images/skills-icons/woocommerce.svg";
import { ReactComponent as GhIcon } from "../images/skills-icons/github.svg";
import { ReactComponent as VsCodeIcon } from "../images/skills-icons/file-type-vscode.svg";
import { ReactComponent as BootIcon } from "../images/skills-icons/bootstrap.svg";
import { ReactComponent as FileZillaIcon } from "../images/skills-icons/filezilla.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);

function Skills() {
    useGSAP(() => {
        gsap.from(".card", {
            opacity:0,
            y:20,
            duration:2,
            ease: "power3.out",
            stagger:0.2,
            scrollTrigger: {
                trigger: ".card",
                start: "top 70%"
            }
        });
    });
    return (
        <section id="tecnologie" className="myBgColor skillsSection">
            <div className="container myTextColor">
                <div className="d-flex justify-content-center mb-3">
                    <h2 className="h1 castom-h">Tecnologie & Skills</h2>
                </div>
                <div className="row d-flex">
                <div className="col-12 col-md">
                    <p className="text-justify first-justify-p">Nel mio percorso come Web developer, ho avuto l'opportunità di acquisire profonde competenze in una varietà di tecnologie. La mia esperienza si estende dall'uso di linguaggi fondamentali come <a className="myLinkStyle" href="#html-icon">HTML</a> e <a className="myLinkStyle" href="#css-icon">CSS</a>, che formano la base di tutti i miei progetti web, a framework più complessi come <a className="myLinkStyle" href="#angular-icon">Angular</a> e <a className="myLinkStyle" href="#react-icon">React</a>, che mi permettono di costruire applicazioni web interattive e responsive.
                    Ho migliorato la mia competenza con <a className="myLinkStyle" href="#php-icon">PHP</a>, un linguaggio di scripting lato server essenziale per lo sviluppo web dinamico. Le mie conoscenze in <a className="myLinkStyle" href="#js-icon">JavaScript</a> giocano un ruolo cruciale in questo, permettendomi di animare siti e applicazioni con funzionalità dinamiche e coinvolgenti.
                    Accanto allo sviluppo Frontend, ho acquisito solide competenze nel campo dei CMS, in particolare con <a className="myLinkStyle" href="#wordpress-icon">WordPress</a>, che utilizzo per creare siti web personalizzati, da blog a piattaforme di e-commerce, supportati da <a className="myLinkStyle" href="#woo-icon">WooCommerce</a> per una</p>
                </div>
                <div className="col-12 col-md">
                    <p className="text-justify">gestione ottimale del commercio online. La mia efficienza nel codice è ulteriormente migliorata dall'uso di strumenti di sviluppo come <a className="myLinkStyle" href="#vsc-icon">VScode</a>, che ottimizza il mio flusso di lavoro, e <a className="myLinkStyle" href="#gh-icon">GitHub</a>,
                    che utilizzo per la gestione di progetti in collaborazione con altri programmatori. <a className="myLinkStyle" href="#fz-icon">FileZilla</a> è diventato uno strumento indispensabile nel mio kit per le sue capacità efficienti di trasferimento file tramite FTP.
                    Inoltre, possiedo una forte competenza in <a className="myLinkStyle" href="#boot-icon">Bootstrap</a>, che mi permette di creare layout responsive compatibili con tutti i dispositivi e browser, velocizzando significativamente il processo di sviluppo Frontend. Questa combinazione di tecnologie avanzate e competenze versatili mi consente di affrontare progetti web complessi con creatività e precisione, garantendo risultati di alta qualità per ogni cliente.</p>
                </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-4 col-md-2 mb-4" id="html-icon">
                        <div className="card" style={{ border: "3px solid #ECD06F" }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <HtmlIcon />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-2 mb-4" id="css-icon">
                        <div className="card" style={{ border: "3px solid #ECD06F" }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <CssIcon />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-2 mb-4" id="js-icon">
                        <div className="card" style={{ border: "3px solid #ECD06F" }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <JsIcon />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-2 mb-4" id="angular-icon">
                        <div className="card" style={{ border: "3px solid #ECD06F" }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <AngularIcon />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-2 mb-4" id="react-icon">
                        <div className="card" style={{ border: "3px solid #ECD06F" }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <ReactIcon />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-2 mb-4" id="php-icon">
                        <div className="card" style={{ border: "3px solid #ECD06F" }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <PhpIcon />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-2 mb-4" id="wordpress-icon">
                        <div className="card" style={{ border: "3px solid #ECD06F" }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <WpIcon />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-2 mb-4" id="woo-icon">
                        <div className="card" style={{ border: "3px solid #ECD06F" }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <WooIcon />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-2 mb-4" id="gh-icon">
                        <div className="card" style={{ border: "3px solid #ECD06F" }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <GhIcon />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-2" id="vsc-icon">
                        <div className="card" style={{ border: "3px solid #ECD06F" }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <VsCodeIcon />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-2" id="boot-icon">
                        <div className="card" style={{ border: "3px solid #ECD06F" }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <BootIcon />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-2" id="fz-icon">
                        <div className="card" style={{ border: "3px solid #ECD06F" }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <FileZillaIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills