import React, { Component } from 'react'

export default class ListClubs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ligues: []
        }
    }

    componentDidMount () {
        fetch(`https://apiv2.apifootball.com/?action=get_countries&APIkey=5f990ce48ebc7388ba775b57240a09e34a74f3ac19ce1d51ee35839a1e2ce4e2`)
        .then(response => response.json())
        .then(response => this.setState({
            ligues: response
        }))
    }
    
    render() {
        console.log(this.state.ligues);
        return (
            <section className="section">
                <div className="inner-sec bcg-image">
                    <div className="sec-ligues d-flex">
                        <h2 className="text-uppercase w-100 text-center">Ligues</h2>
                        <ul className="w-100 d-flex">
                            {this.state.ligues.map((ligue, index) => (
                                <li className="text-center d-flex position-relative" key={index}>
                                    <div className="img-frame"><img src={ligue.country_logo} alt={ligue.country_name}/></div>
                                    <p className="w-100">{ligue.country_name}</p></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}