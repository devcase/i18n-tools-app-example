import React from 'react'
import ReactDOM from 'react-dom'
import MyComponent from './components/MyComponent'


class AsyncLoadedComponentWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        import('./components/DynamicImportComponent').then(t => {
            var Component = t.default;
            this.setState({
                render: () => <Component/>
            })
        })
    }

    render() {
        if(!this.state.render)
            return <div>Loading...</div>
        else
            return this.state.render()
    }
}

ReactDOM.render(
    <main>
        <h1>i18n:Hello, world! From App</h1>
        <MyComponent/>
        <AsyncLoadedComponentWrapper/>
        <div>
            Trocar para: 
            <a href="#" onClick={(e) => {e.preventDefault(); selectLocale("pt-BR")}}>pt-BR</a>, <a href="#" onClick={(e) => {e.preventDefault(); selectLocale("en-US")}}>en-US</a>
        </div>
    </main>,
    document.getElementById('root')
);