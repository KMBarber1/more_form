import React, {useState} from 'react';

const UserForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    
    const processSubmit = (e) => {
        e.preventDefault();
        // const newUser = {firstName, lastName, email, password, confirmPassword}
        setHasBeenSubmitted(true)
        clearForm ()
    }

    const processFirstName = (e) => {
        setFirstName(e.target.value)
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError("First Name must be at least 2 characters")
        } else {
            setFirstNameError("")
        }
    }

    const processLastName = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError("Last Name must be at least 2 characters")
        } else {
            setLastNameError("")
        }
    }

    const processEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError("Email must be at least 5 characters")
        } else {
            setEmailError("")
        }
    }

    const processPassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be at least 8 characters")
        } else {
            setPasswordError("")
        }
    }

    const processConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if (e.target.value !== password) {
            setConfirmPasswordError("Passwords must match!")
        } else {
            setConfirmPasswordError("")
        }
    }

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    }


    return(

        <div>

            {
                hasBeenSubmitted?
                <h1>Thank you for submitting the form!</h1>:
                <h1>Please fill in the form!</h1>
            }

            <h3>Form</h3>

            <form onSubmit={processSubmit}>

                <div>
                    <label> First Name: </label>
                    <input type="text" name="firstName" onChange={processFirstName} value={firstName}></input>
                    
        
                        <p style={{color:'red'}}>{firstNameError}</p>
                        
                    
                </div>

                <div>
                    <label> Last Name: </label>
                    <input type="text" name="" onChange={processLastName} value={lastName}></input>
                    {
                        lastNameError?
                        <p style={{color:'red'}}>{lastNameError}</p>:
                        ""
                    }
                </div>

                <div>
                    <label> Email: </label>
                    <input type="text" name="" onChange={processEmail} value={email}></input>
                    {
                        emailError?
                        <p style={{color:'red'}}>{emailError}</p>:
                        ""
                    }
                </div>

                <div>
                    <label> Password: </label>
                    <input type="password" name="password" onChange={processPassword} value={password}></input>
                    {
                        passwordError?
                        <p style={{color:'red'}}>{passwordError}</p>:
                        ""
                    }
                </div>

                <div>
                    <label> Confirm Password: </label>
                    <input type="password" name="confirmPassword" onChange={processConfirmPassword} value={confirmPassword}></input>
                    {
                        confirmPasswordError?
                        <p style={{color:'red'}}>{confirmPasswordError}</p>:
                        ""
                    }
                </div>

                {/* <button>Submit</button> */}

                {/* or */}

                <input type="submit" value="Submit"></input>

            </form>

        </div>

    );
}

export default UserForm;