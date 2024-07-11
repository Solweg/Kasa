import React from "react";
import "../styles/banner.scss";
import imgBannerHome from "../assets/banner_Img1.svg";
import imgBannerAbout from "../assets/banner_Img2.png";
import PropTypes from "prop-types";

function Banner({ currentPage }) {
    const bannerImage = currentPage === 'about' ? imgBannerAbout : imgBannerHome;
    const bannerClass = currentPage === 'about' ? 'banner banner--about' : 'banner banner--home';

    return (
        <div className={bannerClass}>
            <img className="img__banner" src={bannerImage} alt="bannière" />
            <p className="banner__text">Chez vous, partout et ailleurs</p>
        </div>
    );
}

Banner.propTypes = {
    currentPage: PropTypes.string.isRequired,
};

export default Banner;
