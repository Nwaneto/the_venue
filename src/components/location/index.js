import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31706.36320789859!2d3.363790911679327!3d6.610169756730766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92579bd0f625%3A0x9af271d5abf6a334!2sTavia%20Technologies%20Limited!5e0!3m2!1sen!2sng!4v1568215805155!5m2!1sen!2sng" 
                width="100%" 
                height="500" 
                frameborder="0" 
                style={{border: 0}} 
                allowfullscreen
                ></iframe>
            
                <div className="location_tag">
                     <div>Location</div>
                </div>

        </div>
    );
};

export default Location;