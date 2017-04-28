/**
 * Created by Rafael.Pinto on 27/04/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Filme1', 'Filme2'];

ReactDOM.render(
    /*<Voting pair={pair} hasVoted="Trainspotting"/>,*/
    /*<Voting pair={pair} winner="Filme1" />,*/
    <Voting pair={pair} />,
    document.getElementById('app')
);