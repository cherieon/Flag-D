import React from "react";
import { useNavigate } from "react-router-dom";

function PhishingDebrief() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col items-center justify-between py-12 px-4">
            <main className="w-full max-w-3xl mx-auto text-center">
                <p className="mb-6 text-lg">
                    Okay, you crushed that simulation 🔥
                    <br />
                    Now you know how to call out those red flags before they get you                
                    </p>

                <div className="flex justify-center mb-6">
                    <button
                        type="button"
                        className="px-6 py-3 bg-red-300 text-white rounded-full shadow hover:bg-red-200 transition"
                        onClick={() => navigate('/')}
                    >
                        Return Home
                    </button>
                </div>

                <section className="mt-6 bg-white/5 dark:bg-black/5 rounded-lg p-4 text-left">
                    <h2 className="text-2xl font-semibold mb-2">🚩 Top 4 Things to Do When You Spot a Red Flag</h2>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Pause & disconnect — close the site or app</li>
                        <li>Change passwords — especially for accounts that might be at risk</li>
                        <li>Tell a trusted adult or IT — parents, teachers, or school IT</li>
                        <li>Report & scan safely — report the message, run antivirus, and open stuff from trusted sources</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default PhishingDebrief;