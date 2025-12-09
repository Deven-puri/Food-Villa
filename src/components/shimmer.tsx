const Shimmer = ({ count = 10 }) => {
    return (
        <div className="body">
            <div className="filter-btn-container">
                <div className="search">
                    <div className="shimmer-input"></div>
                    <div className="shimmer-button"></div>
                </div>
                <div className="shimmer-filter-btn"></div>
            </div>

            <div className="shimmer-container">
                {Array(count).fill(0).map((_, index) => (
                    <div key={index} className="shimmer-card"></div>
                ))}
            </div>
        </div>
    );
};
export default Shimmer;
