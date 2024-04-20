import UseWishList from "../../../Hooks/wishList/UseWishList";

const UserWhichlist = () => {

    const [wishlist, refetch] = UseWishList(null);
    console.log(wishlist.length);

    refetch();
    return (
        <div>

            {
                wishlist.map(res => <div>
                    <p>{res?.email}</p>
                </div>)
            }


            <p>m </p>

        </div>
    );
};

export default UserWhichlist;