import React, { Component } from 'react';
import './home.css';
import DenseTable from '../../components/DenseTable'
import ModalAdiciona from '../../components/modalAdiciona'
class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
        this.loadEmployees = this.loadEmployees.bind(this);
    }
    
    componentDidMount() {
        this.loadEmployees()
    }

    loadEmployees() {
        let url = [
            {
                id: 1,
                name: "Yago",
                document: '18644712',
                email: 'yago.rox@hotmail.com',
                phone: '(31)99283-3367',
                birth_date: '24/07/96',
                salary: '4800',
                created_at: '13/09/2022'
            },
            {
                id: 2,
                name: "Willer",
                document: '110960',
                email: 'Will.Miranda@hotmail.com',
                phone: '(31)99110-1234',
                birth_date: '30/07/94',
                salary: '3800',
                created_at: '13/09/2022'
            }
        ];

        fetch(url)
        .then( (r) => r.json()) //se response deu sucesso, então vamos ter o json
        .then((json) => {
            this.setState({employees:json}) 
        });
    }

    

    render() {
        return(
            <div className="container">
                <h1>Funcionários</h1>
                {/* <ModalAdiciona /> */}
                <DenseTable />
            </div>
        );
    }
}

export default Home;