import React from 'react';

export function Input(props) {
    return (<input className="input" name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />);
}

export function InputLabel(props) {
    return (
        <div className="wrap-InputLabel">
            <label className="label">{props.text}</label>
            <Input {...props} />
        </div>
    );
}