import React from 'react'

const Main = () => {
  return (
    <>
    <section className="style-cards">
    <div className="card-0">
        <img src="Images/2.jpg" alt="Netflix Mobile"/>
        <div className="desc-0">
            <h1>Create profiles for kids.</h1>
            <h3>Send kids on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
        </div>
    </div>
    <div className="card-1">
        <div className="desc-1">
            <h1>Enjoy on your TV.</h1>
            <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
        </div>
        <img src="Images/tv.png" alt="Netflix TV"/>
        <video className="video-1" autoPlay  muted loop src="Images/2.m4v" type="video/m4v"></video>
    </div>
    <div className="card-2">
        <img src="Images/3.jpg" alt="Netflix Mobile"/>
        <div className="desc-2">
            <h1>Download your shows to watch offline.</h1>
            <h3>Save your favourites easily and always have something to watch.</h3>
        </div>
    </div>
    <div className="card-3">
        <div className="desc-3">
            <h1>Watch everywhere.</h1>
            <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
        </div>
        <img src="Images/4.png" alt="Device-Pile-In"/>
        <video className="video-2" autoPlay  muted loop src='Images/1.m4v' type="video/m4v"></video>
    </div>
</section>

<section className="lastsec">
        <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <ul className="questions">
                <li>What is Netflix?</li>
                <li>How much does Netflix cost?</li>
                <li>Where can I watch?</li>
                <li>How do I cancel?</li>
                <li>What can I watch on Netflix?</li>
                <li>Is Netflix good for kids?</li>
            </ul>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input">
                <input type="email" name="email" placeholder="Email Address"/>
                <a href="#" className="btn-rounded"><button>GET STARTED </button></a>
            </div>
        </div>
    </section>
</>


  )
}

export default Main
