import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCreate } from '../../features/Authentication/authenticationSlice'
import { ValidError } from "../../components"
import "./CreateForm.sass"

const CreateForm = () => {

    const [submit, setSubmit] = useState(false)
    const { create, emailRegex, phoneRegex } = useSelector(store => store.authentication)
    const [validUsername, setValidUsername] = useState(false)
    const [validPassword, setValidPassword] = useState(false)
    const [validConfirm, setValidConfirm] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [validAddress, setValidAddress] = useState(false)
    const [validPhone, setValidPhone] = useState(false)

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true)
        if (create.username === "") {
            setValidUsername(false)
        }
        else {
            setValidUsername(true)
        }
        if (create.password === "") {
            setValidPassword(false)
        }
        else {
            setValidPassword(true)
        }
        if (create.confirm === "" || create.confirm === create.password) {
            setValidConfirm(false)
        }
        else {
            setValidConfirm(true)
        }
        if (create.email === "" || String(create.email).match(new RegExp(emailRegex))) {
            setValidEmail(false)
        }
        else {
            setValidEmail(true)
        }
        if (create.address === "") {
            setValidAddress(false)
        }
        else {
            setValidAddress(true)
        }
        if (create.phone === "" || String(create.phone).match(new RegExp(phoneRegex))) {
            setValidPhone(false)
        }
        else {
            setValidPhone(true)
        }
    }
    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <div className="form-title">
                Create account
            </div>
            <div className="form-content">
                <div className="form-input-container">
                    <input type="text" className="form-input" placeholder='Enter your username' value={create.username} onChange={(e) => dispatch(setCreate({ ...create, username: e.target.value }))} />
                    {validUsername == false && submit && <ValidError field="Username" />}
                </div>
                <div className="form-input-container">
                    <input type="hiden" className="form-input" placeholder='Enter your password' value={create.password} onChange={(e) => dispatch(setCreate({ ...create, password: e.target.value }))} />
                    {validPassword == false && submit && <ValidError field="Password" />}
                </div>
                <div className="form-input-container">
                    <input type="hiden" className="form-input" placeholder='Confirm your password' value={create.confirm} onChange={(e) => dispatch(setCreate({ ...create, confirm: e.target.value }))} />
                    {validConfirm == false && submit && <ValidError field="Confirm" />}
                </div>
                <div className="form-input-container">
                    <input type="text" className="form-input" placeholder='Enter your email' value={create.email} onChange={(e) => dispatch(setCreate({ ...create, email: e.target.value }))} />
                    {validEmail == false && submit && <ValidError field="Email" />}
                </div>
                <div className="form-input-container">
                    <input type="text" className="form-input" placeholder='Enter your address' value={create.address} onChange={(e) => dispatch(setCreate({ ...create, address: e.target.value }))} />
                    {validAddress == false && submit && <ValidError field="Address" />}
                </div>
                <div className="form-input-container">
                    <input type="text" className="form-input" placeholder='Enter your phone number' value={create.phone} onChange={(e) => dispatch(setCreate({ ...create, phone: e.target.value }))} />
                    {validPhone == false && submit && <ValidError field="Phone number" />}
                </div>
                <div className="form-btn-container">
                    <button type="submit" className='form-btn'>Create</button>
                </div>
            </div>
        </form>
    )
}

export default CreateForm