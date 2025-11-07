
function Footer() {
    return (
        <>

            {/* ****** Footer Area Start ****** */}
            <footer className="dorne-footer-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="footer-text">
                                <p>Copyright © All rights reserved</p>
                            </div>
                            <div className="footer-social-btns hide_me">
                                <a href="#">
                                    <i className="fa fa-linkedin" aria-haspopup="true" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-behance" aria-hidden="true" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-dribbble" aria-hidden="true" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-twitter" aria-haspopup="true" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-facebook" aria-haspopup="true" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* ****** Footer Area End ****** */}

        </>
    );
}

export default Footer;