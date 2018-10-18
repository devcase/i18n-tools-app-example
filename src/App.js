import React from 'react'
import ReactDOM from 'react-dom'
import MyComponent from './components/MyComponent'
import {selectLocale} from 'i18n-tools'

ReactDOM.render(
    <main>
        <h1>Hello, world! From App</h1>
        <MyComponent/>
        <div>
            Trocar para: <a href="#" onClick={(e) => {e.preventDefault(); selectLocale("pt-BR")}}>pt-BR</a>, <a href="#" onClick={(e) => {e.preventDefault(); selectLocale("en-US")}}>en-US</a>
        </div>
    </main>,
    document.getElementById('root')
);