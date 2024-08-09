import React from "react";
import './index.css'

const Contact = ({ ContactComponentRef }) => {
    return (
        <div className="contactHub" ref={ContactComponentRef}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.6489218690663!2d-46.45673591378443!3d-23.68850992382484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6bee8e0c04eb%3A0x3ecc97e8d61594c!2sR.%20Justino%20Cardoso%20da%20Silveira%2C%2078a%20-%20Jardim%20Guapituba%2C%20Mau%C3%A1%20-%20SP%2C%2009360-350!5e0!3m2!1spt-BR!2sbr!4v1722626798958!5m2!1spt-BR!2sbr"
                className="gpsIframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className="contactContent">
                <div className="contact">
                    <strong style={{ marginBottom: '30px' }}>Funcionamento</strong>
                    <div> Segunda a sexta, das 9h às 19h.</div>
                    <div> Sábado, das 9h às 16h </div>
                </div>
                <div className="contact">
                    <strong style={{ marginBottom: '30px' }}>Fale Conosco</strong>
                    <div>(11) 97404-1594</div>
                    <div>R. Justino Cardoso da Silveira, 78a - Jardim Guapituba</div>
                </div>
            </div>
        </div>
    )
}

export default Contact