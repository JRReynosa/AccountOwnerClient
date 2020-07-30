﻿import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import { FormGroup, Col, FormControl, FormLabel } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Input.css';

const input = (props) => {
    let inputField = null;
    let errorMessage = null;

    if (props.invalid && props.shouldValidate && props.touched) {
        errorMessage = (<em>{props.errorMessage}</em>);
    }

    switch (props.elementType) {
        case 'input':
            inputField = (
                <FormGroup controlId={props.id}>
                    <Col className={FormLabel} sm={2}>
                        {props.label}
                    </Col>
                    <Col sm={6}>
                        <FormControl type={props.type} value={props.value} onChange={props.changed} onBlur={props.blur} />
                    </Col>
                    <Col>
                        <em>{errorMessage}</em>
                    </Col>
                </FormGroup>
            )
            break;
        case 'datePicker':
            console.log(props.value);
            inputField = (
                <FormGroup controlId={props.id}>
                    <Col className={FormLabel} sm={2}>
                        {props.label}
                    </Col>
                    <Col sm={6}>
                        <DatePicker selected={props.value.toDate()} dateFormat="MM/dd/yyyy" readOnly onChange={props.changed} className='datePickerControl' showYearDropDown dropdownMode="select" />
                    </Col>
                    <Col>
                        <em>{errorMessage}</em>
                    </Col>
                </FormGroup>
            )
          break;
        default:
            inputField = null;
    }

    return (
        <Aux>
            {inputField}
        </Aux>
    )
}

export default input;