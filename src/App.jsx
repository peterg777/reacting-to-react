import React from "react";

const App = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    );
}

class App {
    constructor(props) {
        super(props);
        this.state = { text: "Quarantine Sucks", hasLoaded: false };
    }

    handleEvent = (text) => {
        this.setState({text})
    }
    handleClick = () => {
        this.setState({hasLoaded: this.set.state.hasLoaded})
    }
    componentDidMount = () => {
        this.setState({hasLoaded: true})
    }
    render() {

        if (this.state.hasLoaded === true) {
            return (

                <React.Fragment>
                    <h1>Hola, {this.props.name}. {this.state.text}!</h1>
                    <input
                        placeholder={this.state.text}
                        value={this.state.text}
                        onChange={(event) => this.handleEvent(event.target.value)} />
                    <button
                        value={this.state.hasLoaded}
                        onClick={this.handleClick}>Refresh</button>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                    <button
                        value={this.state.hasLoaded}
                        onClick={this.handleClick}>Click to load</button>

                </React.Fragment>
            )
            }

    }

}


export default App;