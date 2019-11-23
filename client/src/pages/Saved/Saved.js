import React, { Component } from "react";
import API from "../../utils/API";

class Saved extends Component {
    state = {
        savedBooks: []
    }

    render () {
        return (
            <h1>Saved page</h1>
        )
    }
}

export default Saved;