import React from 'react';

function Button(props) {
    return (<input type="button" className="button-auth" value="Enter" onClick={props.onClick} />);
}

export default Button;