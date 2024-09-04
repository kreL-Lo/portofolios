import React, { useEffect, useState } from 'react'
import './WriteMeCard.css'
import { Card } from '../../card/Card'
import emailjs from '@emailjs/browser'
import { Mail, RotateRightOutlined, WarningAmber } from '@mui/icons-material'
import gsap from 'gsap'

const serviceId = 'service_tzakflm'
const templateId = 'template_h1kqygh'
export const Input = ({ label, type, placeholder, required, name }) => {
    return (
        <div className="input-container">
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                required={required}
                name={name} // Added name attribute
            />
        </div>
    )
}

export const TextArea = ({ label, required, name }) => {
    return (
        <div className="input-container">
            <label>{label}</label>

            <textarea
                name={name} // Added name attribute
                // remove movable text area
                style={{ resize: 'none' }}
            />
        </div>
    )
}

export const WriteMeCard = ({ onClose }) => {
    const [isSend, setIsSend] = useState(false)
    const [notify, setNotify] = useState(-1) // 4 state 0: warning, 1: error, 2: success, -1: none
    const [countDown, setCountDown] = useState(3)
    //const animate aleart
    const animateAllert = () => {
        const alertContainer = document.querySelector('.alert-container')
        const tl = gsap.timeline()
        tl.from(alertContainer, {
            duration: 0.5,
            opacity: 0,
            y: 50,
        })
    }
    const onSubmit = (event) => {
        event.preventDefault() // Prevent the default form submission behavior

        if (!isSend) {
            const formData = new FormData(event.target) // Using event.target to access the form
            const formObject = {}

            formData.forEach((value, key) => {
                formObject[key] = value
            })
            var localCount = 3
            const interval = setInterval(() => {
                localCount -= 1
                setCountDown((prev) => prev - 1)
                if (localCount === 0) {
                    clearInterval(interval)
                    setCountDown(3)
                    setIsSend(false)
                    setNotify(-1)
                    onClose()
                }
            }, [1000])
            // send formObject to the server here

            try {
                setNotify(2)
                emailjs.send(serviceId, templateId, formObject)
                setIsSend(true)
            } catch (e) {
                setNotify(1)
            }
        }
        // force the scroll to submit button position

        animateAllert()
    }
    const styleIcon = {
        fontSize: '1rem',
        marginLeft: '5px',
    }

    return (
        <Card
            title="write-me"
            onClose={() => {
                onClose()
            }}
        >
            <div className="write-me-container">
                <form onSubmit={onSubmit}>
                    <Input
                        label="Name"
                        type="text"
                        required={true}
                        name="name"
                    />
                    <Input label="Email" type="email" name="email" />
                    <Input label="Phone" type="tel" name="phone" />
                    <TextArea label="Message" type="text" name="message" />
                    <button type="submit" className="button-submit">
                        {!isSend ? (
                            <>
                                <div>Submit </div>
                                <Mail style={styleIcon} />
                            </>
                        ) : (
                            <>
                                <RotateRightOutlined
                                    style={{
                                        marginRight: 5,
                                        fontSize: '1.3rem',
                                    }}
                                    className="rotate"
                                />
                                <div
                                    style={{
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {countDown}
                                </div>
                            </>
                        )}
                    </button>
                </form>
                <div style={{ paddingTop: 20 }} className="alert-container">
                    {
                        notify === 0 ? (
                            <WarningAlert />
                        ) : notify === 1 ? (
                            <ErrorAlert />
                        ) : notify === 2 ? (
                            <SuccessAlert />
                        ) : (
                            <></>
                        ) // notify === -1
                    }
                </div>
            </div>
        </Card>
    )
}

const warningText =
    'It seems that not all fields were filled correctly. Will you please check and try again?'
export const WarningAlert = () => {
    return (
        <div className="warning-alert">
            <WarningAmber />
            <p>{warningText}</p>
        </div>
    )
}

const errorText = 'An error occurred. Please try again later.'

export const ErrorAlert = () => {
    return (
        <div className="warning-error">
            <WarningAmber />
            <p>{errorText}</p>
        </div>
    )
}

const successText = 'Message send!'

export const SuccessAlert = () => {
    return (
        <div className="warning-success">
            <p>{successText}</p>
        </div>
    )
}
