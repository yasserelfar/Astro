import './Dash.css'
import './Res.css'

function Dashboard() {


    return (
        <section id="dash">
            <div onClick={() => { window.location.href = '/adminproducts' }}>
                <h1>Products</h1>

            </div>
            <div onClick={() => { window.location.href = '/userlist' }}>
                <h1>Users</h1>

            </div>
            <div onClick={() => { window.location.href = '/orders' }}>
                <h1>Orders</h1>

            </div>
        </section>
    );
}

export default Dashboard;
