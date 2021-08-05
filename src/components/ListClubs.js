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
        return (
            <div>
                <p>Lista natjecanja prema državi</p>
                <ul>
                    {this.state.ligues.map((ligue, index) => (
                        <li key={index}>Ligue: {ligue.country_name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}