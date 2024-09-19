import React from 'react'
import './AboutMe.css'
import { Card } from '../../card/Card'

export const AboutMe = (props) => {
    return (
        <Card title="about-me" {...props}>
            <ol className="about-me-container">
                <p>
                    <span className="gr">1 </span> 👨🏻‍💻 Nice to meet you! I'm
                    Ciprian, I'm a{' '}
                    <span className="g">Freelance Web Developer </span>
                </p>
                <p>
                    <span className="gr">2 </span> 🛠️ I'm passionate about both
                    <span className="b"> web design</span> and{' '}
                    <span className="r">web development </span>, with a
                    particular focus on front-end technologies.
                </p>
            </ol>
        </Card>
    )
}

export const WhereIWork = (props) => {
    return (
        <Card title="where-i-work" {...props}>
            <ol className="where-i-work-container">
                <p>
                    <span className="gr">1 </span> I work from my home office in
                    <span className="b"> Iasi, Romania </span> 💼
                </p>
                <p>
                    <span className="gr">2 </span> I'm available for{' '}
                    <span className="g">Freelance </span>
                    work, so if you need a website or a web application, feel
                    free to contact me. 📞
                    {/* add work emoji */}
                </p>
            </ol>
        </Card>
    )
}

export const Hobbies = (props) => {
    return (
        <Card title="hobbies" {...props}>
            <ol className="hobbies-container">
                <p>
                    <span className="gr">1 </span> 🎸Guitar
                </p>
                <p>
                    <span className="gr">2 </span> 🏋️‍♂️ Work Out
                </p>

                <p>
                    <span className="gr">3 </span> 🎮 Video Games
                </p>

                <p>
                    <span className="gr">4 </span> 📚 Reading
                </p>
            </ol>
        </Card>
    )
}
