import React, { Component } from 'react';

const task = (value) => {
    return (
      <li>{value}</li>
    );
}

const compromissos = ['Estudar', 'Pintar Portão', 'Ir ao mercado', 'Pagar internet'];

class MinhaLista extends Component {
    render() {

        return <ul>
            {compromissos.map(element => task(element))}
        </ul>
    }
}

export default MinhaLista;