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


function Skills() {
    return (
        <section id="technology-skills" className="myBgColor skillsSection">
            <div className="container myTextColor">
                <div className="d-flex justify-content-center mb-3">
                    <h2 className="h1 castom-h">Technology & Skills</h2>
                </div>
                <div className="row d-flex">
                <div className="col-12 col-md">
                    <p className="text-justify first-justify-p">In my journey as a web developer, I've had the opportunity to acquire deep competence in a variety of technologies and skills. My experience extends from using fundamental languages like <a className="myLinkStyle" href="#html-icon">HTML</a> and <a className="myLinkStyle" href="#css-icon">CSS</a>, which form the basis of all my web projects, to more complex frameworks like <a className="myLinkStyle" href="#angular-icon">Angular</a> and <a className="myLinkStyle" href="#react-icon">React</a>, which allow me to build interactive and responsive web applications.
                        I've augmented my expertise with <a className="myLinkStyle" href="#php-icon">PHP</a>, an essential server-side scripting language for dynamic web development. My mastery of <a className="myLinkStyle" href="#js-icon">JavaScript</a> plays a crucial role in this, enabling me to animate sites and applications with dynamic and engaging functionalities.
                        Alongside front-end development, I've developed solid competencies in the CMS field, particularly with <a className="myLinkStyle" href="#wordpress-icon">WordPress</a>, which I use to create customized websites, from blogs to e-commerce platforms,</p>
                </div>
                <div className="col-12 col-md">
                    <p className="text-justify">supported by <a className="myLinkStyle" href="#woo-icon">WooCommerce</a> for optimal online commerce management. My coding efficiency is further enhanced by using development tools like <a className="myLinkStyle" href="#vsc-icon">Vscode</a>, which optimizes my workflow, and <a className="myLinkStyle" href="#gh-icon">GitHub</a>,
                        which I use for code management and collaboration with other developers. <a className="myLinkStyle" href="#fz-icon">FileZilla</a> has become an indispensable asset in my toolkit for its efficient file transfer capabilities via FTP.
                        Moreover, I have strong competence in <a className="myLinkStyle" href="#boot-icon">Bootstrap</a>, which allows me to create responsive layouts compatible across all devices and browsers, significantly speeding up the front-end development process. This combination of advanced technologies and versatile skills enables me to tackle complex web projects with creativity and precision, ensuring high-quality results for every client.</p>
                </div>
                </div>
            </div>
            <div className="container mt-4" id="html-icon">
                <div className="row">
                    <div className="col-4 col-md-2 mb-4">
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