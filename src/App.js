import React, { Component } from 'react';
import logo from './logo-white.png';
import './App.css';
import Tabletop from 'tabletop';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import CookieConsent from "react-cookie-consent";

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1AeXuaMOwYZ268MYEOCAMSwp-hQl0CkPUGamQ2p9vsWE',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }



  render() {
    const { data } = this.state;
    const columns = [{
    Header: 'Atleta',
    accessor: 'atleta' // String-based value accessors!
    },
    {
      Header: 'Prova',
      accessor: 'prova',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'hora', // Required because our accessor is not a string
      Header: 'Hora',
      accessor: d => d.hora // Custom value accessors!
    },
    {
      Header: props => <span>Resultat</span>, // Custom header components!
      accessor: 'resultado'
    }]
    console.log(data);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">UNIDA: Resultats Olimpíades  - Barcelona 2019 </h1>
        </header>
        <div id="employee-details">
        <ReactTable
          data={data}
          columns={columns}
        />
          {/*
            data.map((obj, key) => {
              return (
                <div key={obj.atleta}>
                  <p>{obj.atleta}</p>
                  <p>{obj.prova}</p>
                  <p>{obj.hora}</p>
                  <p>{obj.marca}</p>
                  <p>{obj.resultado}</p>
                </div>
              )
            })
          */}
        </div>
        <CookieConsent
          location="bottom"
          buttonText="Sure!!"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
      >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}>
          This bit of text is smaller :O
          </span>
      </CookieConsent>
      </div>
    );
  }
}

export default App;
