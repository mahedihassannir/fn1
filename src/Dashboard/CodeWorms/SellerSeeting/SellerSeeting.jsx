import { Link } from 'react-router-dom';

const SellerSeeting = () => {

    return (
        <div>


            <Link to={'/dashboard/sellertools'}>
                <button className="btn">
                    go
                </button>

            </Link>



        </div>
    );
};

export default SellerSeeting;