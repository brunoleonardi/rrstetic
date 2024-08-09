import React from "react";
import './index.css'
import { openWhatsapp } from "../App";

const ProductsElement = ({ image, title, description }) => {
    return (
        <div className="card">
            <div className="detailsHub">
                <img src={image} className="card-image" />
                <div className="card-details">
                    <p className="text-title">{title}</p>
                    <p className="text-body" dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
            </div>
            <button className="card-button" onClick={() => openWhatsapp()}>Agendar Serviço</button>
        </div>
    )
}

export default ProductsElement