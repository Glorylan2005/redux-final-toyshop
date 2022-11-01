function Forminput (){
    return (
        <div className="formcontainer">
                <form
            action="https://formspree.io/f/xqknqpod"
            method="POST"
            >
                <input type="hidden" name="_language" value="en" />

                <div className="label">
                    <label>Name:</label>
                    <input className="inputtext" type="textform" placeholder="Your name..." />
                </div> 

                <div className="label">
                    <label> Email: </label>
                    <input className="inputtext" type="email" name="email" placeholder="Your email..." required="" />
                </div>

                <div className="label">
                    <label>Message:</label>
                    <input className="inputtext mes" type="textform" placeholder="Type here..." />
                </div>
            
                <div className="send">
                    <button className="submit" type="submit"><b>SUBMIT</b></button>
                </div>
                </form>
                </div>
    )
}
export default Forminput;