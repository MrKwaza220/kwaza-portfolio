import React from 'react'

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
                            
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}