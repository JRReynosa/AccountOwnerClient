import React, { Component } from 'react';
import Input from '../../../UI/Inputs/Input';
import { Form, Card, Button, FormGroup, Col } from 'react-bootstrap';
import { returnInputConfiguration } from '../../../Utility/InputConfiguration';
import * as formUtilityActions from '../../../Utility/FormUtility';
import { connect } from 'react-redux';
import * as repositoryActions from '../../../store/actions/repositoryActions';
import * as errorHandlerActions from '../../../store/actions/errorHandlerActions';
import SuccessModal from '../../../components/Modals/SuccessModal/SuccessModal';
import ErrorModal from '../../../components/Modals/ErrorModal/ErrorModal';

class CreateOwner extends Component {
    state = {
        ownerForm: {},
        isFormValid: false
    }

    componentWillMount = () => {
        this.setState({ ownerForm: returnInputConfiguration() });
    }

    handleChangeEvent = (event, id) => {
        const updatedOwnerForm = { ...this.state.ownerForm };
        updatedOwnerForm[id] = formUtilityActions.executeValidationAndReturnFormElement(event, updatedOwnerForm, id);

        const counter = formUtilityActions.countInvalidElements(updatedOwnerForm);
        this.setState({ownerForm: updatedOwnerForm, isFormValid: counter === 0})
    }

    createOwner = (event) => {
        event.preventDefault();

        const ownerToCreate = {
            name: this.state.ownerForm.name.value,
            address: this.state.ownerForm.address.value,
            dateOfBirth: this.state.ownerForm.dateOfBirth.value
        }

        const url = '/api/owner';
        this.props.onCreateOwner(url, ownerToCreate, { ...this.props });
    }

    redirectToOwnerList = () => {
        this.props.history.push('/owner-list');
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

                    <SuccessModal show={this.props.showSuccessModal} 
                        modalHeaderText={'Success message'}
                        modalBodyText={'Action completed successfully'}
                        okButtonText={'OK'}
                        successClick={() => this.props.onCloseSuccessModal('/owner-list', { ...this.props })} />
                    <ErrorModal show={this.props.showErrorModal}
                        modalHeaderText={'Error Message'}
                        modalBodyText={this.props.errorMessage}
                        okButtonText={'OK'} closeModal={() => this.props.onCloseErrorModal} />
                </Form>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showSuccessModal: state.repository.showSuccessModal,
        showErrorModal: state.repository.showErrorModal,
        errorMessage: state.errorHandler.errorMessage
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        onCreateOwner: (url, owner, props) => dispatch(repositoryActions.postData(url, owner, props)),
        onCloseSuccessModal: (url, props) => dispatch(repositoryActions.closeSuccessModal(props, url)),
        onCloseErrorModal: () => dispatch(errorHandlerActions.closeErrorModal())
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateOwner);