import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'

function Profile(props) {

    if(props.authData.data.successEnter === false) {
        return <Redirect from="/profile" to="/login" />;
    }

    return (
        <div className="container">
            <h1>Профиль</h1>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        authData: state.authReducer.authData
    }
}

export default connect(
    mapStateToProps,
    null
)(Profile)