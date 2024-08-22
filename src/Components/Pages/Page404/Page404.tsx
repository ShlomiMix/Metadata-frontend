import "./Page404.css";

export function Page404(): JSX.Element {
    return (
        <div className="page404-container">
            <div className="page404-content">
                <h1 className="page404-title">404</h1>
                <h2 className="page404-subtitle">Oops! Page Not Found</h2>
                <p className="page404-description">
                    The page you are looking for does not exist. <br />
                    You can go back to the <a href="/home">homepage</a>.
                </p>
                <div className="page404-icon">
                    <span role="img" aria-label="confused face">😕</span>
                </div>
            </div>
        </div>
    );
}
