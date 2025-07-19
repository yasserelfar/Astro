import { useNavigate } from 'react-router-dom';
import './Dash.css'
import './Res.css'
function AllData() {
    const navigate = useNavigate()

    return (
        <section id="dash">
            <div onClick={() => { navigate('/userPage') }}>
                <h1>Your Information</h1>

            </div>
            <div onClick={() => { navigate('/userorder') }}>
                <h1>Previous Order</h1>

            </div>

        </section>
    );
}
export default AllData