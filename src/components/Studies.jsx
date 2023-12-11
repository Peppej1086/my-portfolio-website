import studiesPhoto from "../images/studies.jpg";
function Studies() {
    return (
        <section id="studies" className="myBgColor studiesSection">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md myTextColor d-flex flex-column justify-content-center">
                        <div className="text-center">
                            <h2 className="h1 castom-h">Studies</h2>
                        </div>
                        <div className="sgd mt-4 text-center p-2">
                            <p className="mb-1">August 2021 - March 2022</p>
                            <h4>SGD Deutschlands Führende fernschule Studiengemeinschfat<br/>Darmstadt</h4>
                        </div>
                        <div className="epicode my-4 text-center p-2">
                            <p className="mb-1">March 2021 - June 2021</p>
                            <h4>Epicode School<br/>Rome</h4>
                        </div>
                    </div>
                    <div className="col-12 col-md">
                        <img src={studiesPhoto} style={{ width: "100%", borderRadius: "20px" }} alt="Studenti in gruppo" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Studies;