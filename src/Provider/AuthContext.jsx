import { createContext } from "react";
import PropTypes from 'prop-types';
export const ContextAuth =createContext(null);
const AuthContext = ({children}) => {
 
    const contxtInfo = {name:'ananda manada chananda kananda'}
    return (
        <ContextAuth.Provider value={contxtInfo}>
            {children}
        </ContextAuth.Provider>
    );
};

AuthContext.propTypes = {
    children:PropTypes.node
};
export default AuthContext;





