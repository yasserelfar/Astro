import { createContext, useState } from 'react'
import PropTypes from 'prop-types';

export const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [userData, setUserData] = useState()
    const values = { userData, setUserData }
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AppProvider