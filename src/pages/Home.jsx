import React, { useState } from "react";

import WelcomeVideo from "../components/WelcomeVideo";


const Home = () => {
  const [showDefinition, setShowDefinition] = useState(false);
  const [showIdentity, setShowIdentity] = useState(false);
  const [showPassive, setShowPassive] = useState(false);
  const [showTactics, setShowTactics] = useState(false);
  const [showEmotional, setShowEmotional] = useState(false);
  
  // Toggle one section at a time. Clicking an already-open section will close it.
  const handleToggle = (section) => {
    setShowIdentity(prev => (section === 'identity' ? !prev : false));
    setShowPassive(prev => (section === 'passive' ? !prev : false));
    setShowTactics(prev => (section === 'tactics' ? !prev : false));
    setShowEmotional(prev => (section === 'emotional' ? !prev : false));
  };

    return(
  <div className="pb-16 px-4 font-sans text-gray-900 dark:text-white">
        <WelcomeVideo />
    {/* divider between video and other stuff */}
    <hr className="my-8 border-t border-gray-300 dark:border-gray-700 w-full max-w-4xl mx-auto" />

    <h1 className="text-4xl md:text-5xl font-bold mt-6">What is Social Engineering?</h1>
  <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto"><strong>...Hacking Humans</strong></p>

        <div className="flex justify-center">
          <button
            onClick={() => setShowDefinition(d => !d)}
            aria-expanded={showDefinition}
            aria-controls="social-eng-definition"
            className="mt-4 mb-8 px-6 py-3 bg-red-300 text-white rounded-md text-base font-semibold shadow-sm hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-200"
          >
            What do you mean by that?
          </button>
        </div>

        {showDefinition && (
          <section id="social-eng-definition" className="mt-6 mb-10 max-w-3xl mx-auto text-left px-4">
            <p className="text-center mb-4">Social engineering is when someone uses lies or tricks to get people to share private information or do something they shouldn’t.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-6 justify-items-center">
              <button
                onClick={() => handleToggle('identity')}
                aria-expanded={showIdentity}
                aria-controls="identity-section"
                className="w-72 px-5 py-3 bg-red-300 text-white rounded-md text-sm font-semibold shadow-sm hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-200 text-center"
              >
                Who are YOU (online)?
              </button>

              <button
                onClick={() => handleToggle('passive')}
                aria-expanded={showPassive}
                aria-controls="passive-section"
                className="w-72 px-5 py-3 bg-red-300 text-white rounded-md text-sm font-semibold shadow-sm hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-200 text-center"
              >
                How Data Sneaks Out
              </button>

              <button
                onClick={() => handleToggle('tactics')}
                aria-expanded={showTactics}
                aria-controls="tactics-section"
                className="w-72 px-5 py-3 bg-red-300 text-white rounded-md text-sm font-semibold shadow-sm hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-200 text-center"
              >
                How They Make You Click
              </button>

              <button
                onClick={() => handleToggle('emotional')}
                aria-expanded={showEmotional}
                aria-controls="emotional-section"
                className="w-72 px-5 py-3 bg-red-300 text-white rounded-md text-sm font-semibold shadow-sm hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-200 text-center"
              >
                How Feelings Get Hacked
              </button>
            </div>

            {showIdentity && (
              <div id="identity-section" className="mt-2 mb-6">
                <h3 className="text-xl font-semibold mb-2">Your Online Identity = Your Digital DNA 🕶️</h3>
                <ul className="list-disc ml-6">
                  <li><strong>💅 Your details:</strong> name, birthday, school, contact info</li>
                  <li><strong>🔐 Your keys:</strong> usernames and passwords that open your accounts</li>
                  <li><strong>🌀 Your vibe:</strong> what you post, play, and share</li>
                  <li><strong>🌐 Your circle:</strong> everyone you talk to or follow</li>
                </ul>
              </div>
            )}

            {showPassive && (
              <div id="passive-section" className="mt-2 mb-6">
                <h3 className="text-xl font-semibold mb-2">How you "accidentally" spill the tea</h3>
                <ul className="list-disc ml-6">
                  <li><strong>☕ Oversharing = easy clues:</strong>every post, pic, and tag tells your story</li>
                  <li><strong>🎯 Those “fun” quizzes? </strong>Total data traps. they collect your answers and your habits</li>
                  <li><strong>🧃 Fake sign-ups:</strong>looks cute, is shady. hackers sip your data in seconds</li>
                  <li><strong>💀 Leaked lists:</strong>hackers scroll public sites like it’s their FYP</li>
                </ul>
              </div>
            )}

            {showTactics && (
              <div id="tactics-section" className="mt-2 mb-6">
                <h3 className="text-xl font-semibold mb-2">Scam Playbook: Don’t Fall For It</h3>
                <ul className="list-disc ml-6">
                  <li><strong>Phishing 🎣</strong>Fake messages or sites that look real so you’ll type your password or click a link</li>
                  <li><strong>Baiting 🧲</strong>Free stuff or downloads that actually steal your info. “Free game skins?”. nope, trap</li>
                  <li><strong>Curiosity traps 👀</strong>“You won’t believe this…” posts or links that make you click and regret it</li>
                  <li><strong>Authority & urgency ⏰</strong>“Do this now!” messages pretending to be a boss or admin to freak you into acting.</li>
                  <li><strong>Peer pressure 🤝</strong>Friends, trends, or DMs pushing you to share or click so you don’t feel left out</li>
                </ul>
              </div>
            )}

            {showEmotional && (
              <div id="emotional-section" className="mt-2 mb-6">
                <h3 className="text-xl font-semibold mb-2">They Play Your Emotions</h3>
                <p>Humans have emotions and social engineers like to exploit these:</p>
                <ul className="list-disc ml-6">
                  <li><strong>⏰ Urgency / Fear</strong></li>
                  <li><strong>🤑 Greed / Reward</strong></li>
                  <li><strong>👀 Curiosity</strong></li>
                  <li><strong>🎩 Authority</strong></li>
                  <li><strong>🤝 Trust</strong></li>
                </ul>
              </div>
            )}
          </section>
        )}

    </div>
    );
}

export default Home;