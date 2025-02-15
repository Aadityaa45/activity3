import React from "react";
import Cards from "./cards";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <div className="container-fluid"
            style={{ 
                backgroundImage: "url('https://img.freepik.com/premium-photo/hidden-gems-udaipur-uncovering-secrets_902820-38836.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                width: "100vw"
            }}
        >
            {/* Heading Section */}
            <div className="row text-white">
                <div className="col-xl-12 col-md-6 p-2 d-flex align-items-center justify-content-center text-center">
                    <h1 style={{
                        fontSize: "4rem",
                        fontWeight: "bold",
                        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.7)",
                        textTransform: "uppercase"
                    }}>
                        Udaipur
                    </h1>
                </div>
                <div className="col-xl-12 col-md-6 d-flex align-items-center justify-content-center text-center">
                    <h1 style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.7)",
                        textTransform: "uppercase"
                    }}>
                        The City Of Lakes
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="container p-1 mt-5"
                style={{
                    borderRadius: "8px",
                    background: "rgba(0, 0, 0, 0.6)",
                    height:"auto"
                }}
            >
                <div className="row">
                    {/* Image Column */}
                    <div className="col-md-4" style={{height:"80%",borderRadius:"10px"}}>
                        <img src="https://th.bing.com/th/id/R.35d1e70a93ccb6765e8383cdc4403e41?rik=r%2fCSWOsWWOin8w&riu=http%3a%2f%2fwww.eternalmewar.in%2fuploads%2fcollaboration%2faw4.jpg&ehk=iLgcAhcwgGnAaEvfExEQ7BiZV2SeP%2bQjlFiGmwt%2bsdo%3d&risl=&pid=ImgRaw&r=0"
                            className="img-fluid p-5"
                            alt="Udaipur Palace"
                        />
                    </div>
                    {/* Text Column */}
                    <div className="col-md-8 col-xl-6 text-white d-flex align-items-center justify-content-center text-center p-3 mr-2"
                    style={{fontSize:"1.5rem"}}
                    >
                        <p>Udaipur, also known as the "City of Lakes," was founded in 1559 by Maharana Udai Singh II, 
                    the ruler of Mewar. It became the new capital of Mewar after the Mughal emperor Akbar 
                    captured Chittorgarh. Udaipur remained an independent kingdom under the Sisodia Rajputs, 
                    who fiercely resisted Mughal and later British rule. After India’s independence in 1947, 
                    Udaipur became part of Rajasthan. Today, it is one of India’s most beautiful and historically 
                    rich cities, known for its palaces, lakes, and cultural heritage.</p>
                    </div>
                </div>
            </div>
            <div className="container p-1 mt-5">
                <div className="row text-white text-center">
                    <div className="col-md-12 col-xl-12 col-lg-12 ">
                        <h1 style={{fontSize:"3rem",fontWeight:"bold",textTransform:"uppercase",textShadow:"4px 4px 10px rgba(0, 0, 0, 0.7)"}}>Places To Visit</h1>
                    </div>
                </div>
                <div className="row d-flex align-item-center justify-content-center">
                    <div className="col-xl-4 col-md-6 col-sm-12 mt-3">
                    <Cards image="https://th.bing.com/th/id/OIP.MQEowcn60jjwj2ZIVbZPkQHaE6?rs=1&pid=ImgDetMain" tittle="Chittaur" content="Chittaur, also known as Chittorgarh, is a historic city in Rajasthan, India, renowned for its majestic Chittorgarh Fort, the largest fort in India" />
                    </div>
                    <div className="col-xl-4 col-md-6 mt-3">
                    <Cards image="https://img.veenaworld.com/wp-content/uploads/2021/07/Kumbhalgarh-Fort-Entry-Fees-History-Architecture-Timings.jpg" tittle="Kumbalgarh" content="Kumbhalgarh, a majestic fortress in Rajasthan, India, is renowned for its massive walls stretching over 36 km, the second-longest in the world after the Great Wall of China." />
                    </div>
                    <div className="col-xl-4 col-md-6 mt-3">
                        <Cards image="https://thrillingtravel.in/wp-content/uploads/2018/11/City-Palace-Udaipur-at-night.jpg" tittle="City Palace" content="Chittaur, also known as Chittorgarh, is a historic city in Rajasthan, India, renowned for its majestic Chittorgarh Fort, the largest fort in India" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
