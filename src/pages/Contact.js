import github from '../images/github.png'
import gmail from '../images/gmail.png'

export default function Contact() {
    return(
        <div class='column1'>
            <div class='row1'> 
                <a href="https://github.com/ChristianMendez1" target="_blank">
                    <img class='ContactImage' src={github} />
                </a>
            </div>
            <div class='row1'>
                <a href="mailto: christianmendez1213@gmail.com" target="_blank">  
                    <img class='ContactImage' src={gmail} />
                </a>
            </div>
        </div>
    )
}