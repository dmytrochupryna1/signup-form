import React, { useState, useId } from "react"

export default function Form() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        newsletter: false
    })
    const id = useId() // a custom hook that generates a unique id


    function handleChange(event) { // a callback function that updates the state of the form data object
        const { name, value, type, checked } = event.target // destructure the properties of the event target
        const newValue = type === "checkbox" ? checked : value
        setFormData(prevFormData => ({ // use the previous state to update the form data object
            ...prevFormData,
            [name]: newValue
        }))
    }

    function handleSubmit(event) {
        event.preventDefault() // prevent the default behavior of the form
        console.log(formData) // log the form data object
        if (formData.password === formData.confirmPassword) {
            console.log("Successfully signed up")
        } else {
            console.error("passwords do not match")
        }
        if (formData.newsletter) {
            console.log("Thanks for signing up for our newsletter!")
        }
    }

    console.log(formData)

    return (
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor={`${id}-email`}>Email</label> */}
            <input
                type="email"
                id={`${id}-email`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required />
            {/* <label htmlFor="password">Password</label> */}
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required />
            {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
            <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required />
            {/* <div className="newsletter-line">
                <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange} 
                />
                <label htmlFor="newsletter">Subscribe to Newsletter</label>
                
            </div> */}
            
            <button type="submit">Submit</button>
        </form>

    )
}