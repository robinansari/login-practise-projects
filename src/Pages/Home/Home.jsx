import { useContext } from "react";
import { ContextAuth } from "../../Provider/AuthContext";



const Home = () => {
    
   const useAuth = useContext(ContextAuth);
   console.log(useAuth)
    return (
        <div>
            Dekhi ki aslo:{useAuth.name}
        </div>
    );
};

export default Home;