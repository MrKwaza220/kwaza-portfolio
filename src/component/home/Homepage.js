import React from 'react'
import Typical from 'react-typical'

export default function Homepage(){
    return (
        <div className='homepage_container'>
            <div className='homepage_parent'>
                <div className='homepage_details'>
                    <div className='colz'>
                        <a href='#'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-instagram-square'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/sakhumzi-kwaza-2690351b9/'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href='https://github.com/MrKwaza220?tab=repositories'>
                            <i className='fa fa-github'></i>
                        </a>
                    </div>

                    <div className="homepage_details_name">
                        <span className="primary_text">
                            {" "}
                            Hello, I'm <span className="highlighted_text">Sakhumzi</span>
                        </span>
                    </div>
                    <div className='homepage_details_role'>
                        <span>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                  loop={Infinity}
                                  steps={[
                                    "Front End Dev",
                                    1000,
                                    "Software Dev",
                                    1000,
                                    "Backend Dev",
                                    1000, 
                                  ]}

                                />
                            </h1>
                        </span>
                    </div>
                    <div className='homepageButtons'>
                        <a href='images/large_devices.pdf' download='large_device.pdf'>
                        <button className='download_button'>
                            {" "}
                            download cv {" "}
                        </button>
                        </a>
                    </div>
                    <div className='homepage_picture'>
                        <div className='homepage_picture_background'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}