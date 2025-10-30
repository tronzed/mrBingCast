
function Footer() {
    return (
        <>

            {/* ****** Footer Area Start ****** */}
            <footer className="dorne-footer-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-md-flex align-items-center justify-content-between">
                            <div className="footer-text">
                                <p>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright © All rights reserved | Made with{" "}
                                    <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                                    <a href="https://colorlib.com" target="_blank">
                                        Colorlib
                                    </a>{" "}
                                    &amp; distributed by{" "}
                                    <a href="https://themewagon.com" target="_blank">
                                        ThemeWagon
                                    </a>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </p>
                            </div>
                            <div className="footer-social-btns">
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