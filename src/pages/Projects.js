import Project1 from '../images/Project1.png'
import Project2 from '../images/Project2.png'

export default function Projects(){
    return(
        <div id='Projects'>
            <div class='Row'>
                <div class = 'Column'>
                    <div class='Project' id='Pokemon'>
                        <a href="https://christianmendez1.github.io/Project2_PokemonWeakness/" target="_blank">
                            <img class='ProjectImage' src={Project2} />
                        </a>
                        <a href="https://christianmendez1.github.io/Project2_PokemonWeakness/" target="_blank">
                            <p> Pokemon Type Chart <br></br> (React, Javascript, HTML, and CSS) </p>
                        </a>
                            <p class='ProjectDescription'>Uses React to fetch data from Pokemon API. Uses CSS flexbox to make app accessable through mobile. Javascript functions and in line conditions are used to show images and change colors. Browser router is used to set urls and Links are used to send the user to specified urls.</p>
                       
                    </div>
                </div>
                <div class = 'Column'>
                    <div class='Project'>
                        <a class = 'ClickProject' href="https://christianmendez1.github.io/Project1_kill_the_flying_monsters_CM/" target="_blank">
                            <img class='ProjectImage' src={Project1} />
                        </a>
                        <a class = 'ClickProject' href="https://christianmendez1.github.io/Project1_kill_the_flying_monsters_CM/" target="_blank">
                            <p> Click The Dragons Game<br></br> ( HTML Canvas Graphics, Javascript, and CSS ) </p>
                        </a>
                            <p class='ProjectDescription'>Uses HTML's canvas to make a click based game. Uses the pythagorean theorem to calculate clicks and make sure you clicked the correct monster. You have to click all of the monsters before they leave the screen. If you don't you lose. If you do you go on to the next level. If you pass level 3 you win.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}