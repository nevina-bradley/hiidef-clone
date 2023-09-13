import React from 'react';

const HiidefFooter = () => {
    return (
        <div>
            <div>
                <h4>THE EMAIL LIST WILL ALWAYS KNOW ABOUT DROPS BEFORE<br></br>
                EVERYONE ELSE - SUBSCRIBE HERE
                </h4>
            </div>

            <div>
                <input type="email"  placeholder="Email address" class="email"/>
                <span>
                    <button type="submit" class="subscribe">
                        <span>SUBSCRIBE</span>
                    </button>
                </span>
            </div>

            <div>
                <a href="mailto:orders@mddn.co" class="nav">Contact</a>
                <a href="../../containers/Shipping/Shipping" class="nav">Shipping</a>
                <a href="../../containers/Terms/Terms" class="nav">Terms</a>
            </div>
        </div>
    );
};

export default HiidefFooter;