import Avengers from "../../Components/Avengers/Avengers";
import CodeWorms from "../../Components/CodeWorms/CodeWorms";
import TeamArrow from "../../Components/TeamArrow/TeamArrow";




const Home = () => {
    return (
        <div>


            {/* banner section starts  team codehubs */}

            <section>

           <Avengers></Avengers>

            </section>

            {/* banner section ends */}

            {/* ------------------------------------------------- */}



            {/* team arrow starts */}
            <section>

                <TeamArrow></TeamArrow>


            </section>
            {/* 2nd banner section ends */}

            {/* ------------------------------------------------- */}


            {/* team cidewoms starts */}

            <section>
                <CodeWorms></CodeWorms>
            </section>

            {/* team cidewoms ends */}
        

        </div>
    );
};

export default Home;