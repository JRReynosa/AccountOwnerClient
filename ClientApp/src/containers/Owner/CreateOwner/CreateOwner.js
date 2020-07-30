import React, { Component } from 'react';
import Input from '../../../UI/Inputs/Input';
import { Form, Card, Button, FormGroup, Col } from 'react-bootstrap';
import { returnInputConfiguration } from '../../../Utility/InputConfiguration';
import * as formUtilityActions from '../../../Utility/FormUtility';

class CreateOwner extends Component {
    state = {
        ownerForm: {},
        isFormValid: false
    }

    componentWillMount = () => {
        this.setState({ ownerForm: returnInputConfiguration() });
    }

    render() {
        const formElementsArray = formUtilityActions.convertStateToArrayOfFormObjects({ ...this.state.ownerForm });
        return (
            <Card>
                <Form onSubmit={this.createOwner}>
                    {
                        formElementsArray.map(element => {
                            return <Input key={element.id} elementType={element.config.element}
                                id={element.id} label={element.config.label}
                                type={element.config.type} value={element.config.value}
                                changed={(event) => this.handleChangeEvent(event, element.id)}
                                errorMessage={element.config.errorMessage}
                                invalid={!element.config.valid} shouldValidate={element.config.validation}
                                touched={element.config.touched}
                                blur={(event) => this.handleChangeEvent(event, element.id)} />
                        })
                    }
                    <br />
                    <FormGroup>
                        <Col md={8}>
                            <Button className="d-inline-block" type='submit' variant='success' disabled={!this.state.isFormValid}>Create</Button>
                            <Button className="d-inline-block ml-1" variant='danger' onClick={this.redirectToOwnerList}>Cancel</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Card>
        )
    }
}

export default CreateOwner;