import React, { Component } from 'react'

class TokokitaWeb extends React.Component {
    render() {
        return(
            <div className="web-container">
                <div className="web-atas">
                    
                     <div className="nav-container">
                        <div className="logo">
                            <img src="/images/logo-toko.png" alt="logos" />
                        </div>
                        <div className="nav-home">
                            Home
                        </div>
                        <div className="nav-news">
                            News
                        </div>
                        <div className="nav-aboutus">
                            About Us
                        </div>
                        <div className="nav-contact">
                            Contact
                        </div>
                     </div>

                     <div className="toko-explaination">
                        <div className="toko-part-1">
                            <div className="explain">
                                Satu aplikasi yang membuat hidup kita lebih efisien,  dari kemudahan berbelanja hingga kesehatan anda. <br /> segala jenis layanan dalam satu genggaman. jadikan semua lebih mudah dengan tokokita.
                            </div>
                            <div className="button">
                                Lebih Lanjut
                            </div>
                        </div>
                        <div className="toko-part-image">
                            <img src="/images/69.png" alt="69" />
                         </div>
                     </div>
                </div>

                <div className="web-tengah">
                    <div className="toko-soon">
                        Coming Soon
                    </div>

                <div className="toko-coming-soon">
                    <div className="coming-box">
                        <div className="text">
                            Coming Soon
                        </div>
                        <div className="lorem">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </div>
                    </div>

                    <div className="coming-box">
                        <div className="text">
                            Coming Soon
                        </div>
                        <div className="lorem">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </div>
                    </div>

                    <div className="toko-coming-soon-1">
                        <div className="coming-box">
                            <div className="text">
                                Coming Soon
                            </div>
                            <div className="lorem">
                            Lorem Ipsum is simply dummy text    of the printing and typesetting    industry. Lorem Ipsum has been the     industry's standard dummy text  ever since the 1500s, when an    unknown printer took a galley of   type and scrambled it to make a   type specimen book. 
                            </div>
                        </div>
                    </div>
                </div> 
                
                   
            </div>

                <style jsx>
                    {`
                        .web-atas {
                            background: linear-gradient(360deg, rgba(0, 81, 100, 0) 0%, #27AE60 100%);
                            padding: 0 0 11.57em;
                        }
                        
                        .nav-container {
                            display: flex;
                            align-items: center;
                            padding: 1.92em 0 0;
                        }

                        .logo {
                            padding: 0 27em 0 2em;
                        }

                        .logo img {
                            max-width: 63%;
                        }

                        .nav-home {
                            font-size: 20px;
                            padding: 0 2.92em 0 0;
                        }   

                        .nav-news {
                            font-size: 20px;
                            padding: 0 2.92em 0 0;
                        }

                        .nav-aboutus {
                            font-size: 20px;
                            padding: 0 2.92em 0 0;
                        }

                        .nav-contact {
                            font-size: 20px;
                        }

                        .toko-explaination {
                            display: flex;
                            align-items: center;
                            padding: 0 0 0 9.92em;
                        }

                        .toko-part-1 {
                            display: flex;
                            flex-direction: column;
                            padding: 0 7em 0 0;
                        }

                        .toko-part-image img {
                            max-width: 80%;
                            min-width: 50%;
                        }

                        .explain {
                            font-size: 20px;
                        }

                        .button {
                            margin: 4.64em 6.5em 0 1.5em;
                            color: #fff;
                            background: #27AE60;
                            box-shadow: 5px 10px 20px rgba(53, 110, 173, 0.2);
                            border-radius: 10px;
                            padding: 0.5em 0 0.5em;
                            text-align: center;
                            font-size: 16px;

                        }

                        .web-tengah {
                            background: linear-gradient(180deg, rgba(117, 219, 159, 0.7) 0%, rgba(40, 202, 107, 0) 94.69%);
                            border-radius: 0px 200px;
                            margin: 0 0 4.92em;
                        }

                        .toko-soon {
                            padding: 5.78em 0 0 15em;
                            margin: 0 0 8.21em;
                        }
                       
                        .coming-box {
                            background: #FFFFFF;
                            box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
                            border-radius: 10px;
                            padding: 16em 1em 1em 1em;
                            margin: 0 81em 2em 17em;

                        }

                        .text {
                            padding: 0 0 0 3.28em;
                            font-size: 20px;
                        }

                        .lorem {
                            padding: 3.28em 3.28em 0 3.28em;
                            font-size: 16px;
                        }

                        .toko-coming-soon-1 {
                            display: flex;
                            align-items: center;
                        }
                    `}
                </style>
            </div>
        )
    }
}
export default TokokitaWeb