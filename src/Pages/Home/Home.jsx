import Banner from "../../Components/Banner.jsx/banner";
import TeamCodeWoms from "../../Components/CodeWoms/TeamCodeWoms";
import TeamArrowTeams from "../../Components/TeamArrow/TeamArrowTeams";

const Home = () => {
    return (
        <div>

            {/* banner section starts  team codehubs */}

            <section>

                <Banner></Banner>

            </section>

            {/* banner section ends */}

            {/* ------------------------------------------------- */}



            {/* team arrow starts */}
            <section>


                <TeamArrowTeams></TeamArrowTeams>

            </section>
            {/* 2nd banner section ends */}

            {/* ------------------------------------------------- */}


            {/* team cidewoms starts */}

            <section>


                <TeamCodeWoms></TeamCodeWoms>
            </section>

            {/* team cidewoms ends */}




        </div>
    );
};

export default Home;
