
const Breadcrumb = () => {
    return (
        <div className="pagetitle">
            <h1>Orders</h1>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                    <li className="breadcrumb-item">Orders</li>
                </ol>
            </nav>
        </div>
    );
}

export default Breadcrumb;