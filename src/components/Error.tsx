import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError() as any;
    console.error("Routing Error:", error);
    
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Oops! Something went wrong :(</h1>
            <h2>Please try again later.</h2>
            {error?.status && <h3>{error.status}: {error.statusText}</h3>}
            {error?.message && <p>{error.message}</p>}
        </div>
    );
};

export default Error;
