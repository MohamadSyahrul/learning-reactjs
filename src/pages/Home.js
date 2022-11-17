import React, { Component } from 'react'
import Hitung from '../component/Hitung.js'

export default class Home extends Component {
  render() {
    return (
      <div style={{ padding: '50px' }}>
            <header>
                <h2>Aplikasi perhitungan jumlah pengunjung Fashion Forth</h2>
            </header>

            <hr />
            <Hitung />
            <hr />

            <footer>
                <p>
                    Created By Sahrul
                </p>
            </footer>
      </div>
    )
  }
}
