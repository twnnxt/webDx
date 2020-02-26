import React, { Component } from 'react';
import ReactModal from 'react-modal';

import classes from './Contact.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Contact extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: '名字'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: '信箱'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: '電話'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            theme: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: '0', displayValue: '請選擇主題' },
                        { value: '專案開發', displayValue: '專案開發' },
                        { value: '技術諮詢', displayValue: '技術諮詢' },
                        { value: '企業內訓', displayValue: '企業內訓' },
                        { value: '課程詢問', displayValue: '課程詢問' },
                        { value: '其他', displayValue: '其他' }
                    ]
                },
                value: '',
                valid: false
            },
        },
        formIsValid: false,
        loading: false,
        shouldOpenModal: false,
        modalData: {}
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (!rules) {
            isValid = value !== '0' && isValid;
        }
        if (rules) {
            if (rules.required) {
                isValid = value.trim() !== '' && isValid;
            }
            if (rules.minLength) {
                isValid = value.length >= rules.minLength && isValid;
            }
            if (rules.maxLength) {
                isValid = value.length <= rules.maxLength && isValid;
            }
        }

        return isValid;
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(1123)
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }
        this.setState({ modalData: formData, shouldOpenModal: true })
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid })
    }

    handleAfterCloseFunc = () => {
        this.setState({ shouldOpenModal: false });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })

        }

        let form = (
            <form onSubmit={(e) => this.orderHandler(e)}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        valueType={formElement.config.elementConfig.placeholder}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Danger" disabled={!this.state.formIsValid}>送出</Button>
            </form>
        );

        let modalData = formElementsArray.map(formElement => {
            console.log(this.state.shouldOpenModal)
            return (
                <p key={formElement.config.value}>
                    {formElement.config.elementConfig.placeholder && formElement.config.elementConfig.placeholder + ': '}{formElement.config.value}
                </p>
            )
        });

        return (
            <>
                <div className={classes.ContactData}>
                    <p>任何問題都歡迎您透過以下表單詢問，我們會盡快回覆您！</p>
                    {form}
                </div>
                <ReactModal
                    isOpen={this.state.shouldOpenModal}
                    onRequestClose={this.handleAfterCloseFunc}
                    shouldCloseOnOverlayClick={true}
                    shouldCloseOnEsc={true}
                    ariaHideApp={false}
                    style={{
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            height: '50%',
                            width: '50%'
                        }
                    }}>
                    {modalData}
                </ReactModal>
            </>

        )
    }
}

export default Contact;