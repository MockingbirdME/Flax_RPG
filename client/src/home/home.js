import React, { Component } from 'react';
import './home.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="home">
                <h1>Welcome</h1>
                <p>This page will, with any luck, one day be home to vast stores of information about the world of Flax as I envision it. Still, for now, it's mostly a place for me to make homebrew RPG rules available to my friends, prospective players, and anyone who chances upon it.</p>
                <h3>Join the discord</h3>
                <p>If you're interested in chatting with me or other interested people about the world of Flax or its role-playing system, please feel free to join <a href="https://discord.gg/tG3bNFQ">Flax's discord</a>.</p>
                <h3>These rules aren't balanced</h3>
                <p>If you're looking at the rules here, please be aware that this system is very much in the playtest phase of its existence and will have regular updates without warning. Once the system is more stable, I hope to maintain a patch history so anyone using the rules can quickly check for recent updates.</p>
                <h3>Your table, your rules</h3>
                <p>If you happen to be playing with these rules, I encourage you to change, update, expand, or ignore anything printed here to make it work for you. If you do, I'd love to hear all about what worked for you and what didn't. With any luck, we'll update the rules as presented here, making them better together.</p>
            </div>
        );
    }
}

export default Header;
