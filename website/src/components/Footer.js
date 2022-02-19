import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg className="bi" width="30" height="24"></svg> {/*<use xlink:href="#bootstrap"/>*/}
            </a>
            <span className="text-muted">&copy; 2022 Mariano Acebal</span>
            </div>
        </footer>
    );
}

export default Footer;