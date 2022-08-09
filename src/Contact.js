import React from 'react'

const Contact=()=>{
    return(
    <>
        <h1><center>Contact Us</center></h1>
        <p><center>Fill the form below to contact us!</center></p>
        <div>
        <form action="">
            <div>
                    <label for="fname">First Name</label><br/>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/><br/>
                    <label for="lname">Last Name</label><br/>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/><br/>
                    <label for="country">Country</label><br/>
                    <select id="country" name="country"><br/>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        <option value="india">India</option>
                        <option value="uk">UK</option>
                        <option value="others">others</option>
                    </select><br/>
                    <label for="subject">Subject</label><br/>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea><br/>
                    <input  className="btn-contact" type="submit" value="Send"/>
            </div>
        </form>
    </div>
    </>
    )
}
export default Contact