import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import appActions from './redux/App/appAction'
import exempleActions from './redux/Exemple/exempleAction';

class Children extends Component {
    setText() {
        this.props.dispatch(appActions.setText('Aquele texto'))
    }
    setSubtitle(){
      this.props.dispatch(exempleActions.setSubtitle('Aqui também rolou!'))
    }
    render() {
        return (
            <Fragment>
                <button onClick={() => this.setText()}>Mudar texto</button>
                <button onClick={() => this.setSubtitle()}>Subtitle</button>
            </Fragment>
        )
    }
}

const ChildrenConnected = connect(store => ({ text: store.text }))(Children)

class App extends Component {
    render() {
        return (
            <Fragment>
                <h1>{this.props.text}</h1>
                <h1>{this.props.subtitle}</h1>
                <ChildrenConnected />
            </Fragment>
        )
    }
}

export default connect(store => ({ text: store.appReducer.text, subtitle: store.exempleReducer.subtitle }))(App)