import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Form, FormControl} from 'react-bootstrap';
import Navigasi from './Navigasi';
// import Search from './Search';



export default class TugasApi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    search(key) {
        fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=0b8c578de6fc4d2e86c12ce07a9f691e&q=' + key)
        .then(respon => respon.json())
        .then(respon => this.setState({items: respon.articles}))
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=0b8c578de6fc4d2e86c12ce07a9f691e&i')
        .then(respon => respon.json())
        .then(respon => this.setState({items: respon.articles}))
    }

    render () {
        return (
            <div className='container-fluid mt-4'>
              <Navigasi />
              <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                <Form className="d-flex mt-3" style={{width: '1000px', height: '45px'}}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => this.search(e.target.value)}
                    />
                    <Button variant="outline-success" style={{width: '100px'}}>Search</Button>
                </Form>
                </div>
                {
                    this.state.items ?
                    <div className= "row">
                        {
                            this.state.items.map((data, index)=>
                            <Card key={index} style={{ width: '19rem'}} className='mx-auto mt-4'>
                                <Card.Img variant="top" src={data.urlToImage} />
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <h6 className="card-subtitle mb-2 text-muted mt-2">${data.author} - ${data.publishedAt}</h6>
                                    <p className="card-text mt-3">${data.description}</p>
                                    <Button variant="primary" href={data.url}>Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        )}
                    </div>
                    :""
                   }
            </div>
        )
    }
}