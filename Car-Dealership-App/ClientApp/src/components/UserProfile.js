import React from "react";
import { Card, Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";

export class UserProfile extends React.Component {
    state = {
        name: "",
        carsList: []
    };

    componentDidMount() {
<<<<<<< HEAD
        this.getCars();
        this.setState({
            name: this.props.location.state.name,
        })
=======
    
    fetch("https://localhost:5001/api/Inventory", {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then((result) => result.json())
      .then((result) => 
      {
          this.setState({
            name: this.props.username,
            carsList: result,
          });
      })
      .catch((e) => console.log(e))
>>>>>>> bef0e356bb613a5583149ce0464cc3c66e64936e
    }
 
    

    getCars = () => {
        fetch("https://localhost:5001/api/Inventory", {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    carsList: result
                })
            })
            .catch((e) => console.log(e))
    }


    getUserCars = (ownerName) => {
        console.log("inside getUserCars, this.state.carsList", this.state.carsList)
        console.log("inside getUsersCars");
        console.log(ownerName);

        const result = this.state.carsList.filter((car) => {
            console.log("inside filter func");
            console.log("car owner: ", car.owner);
            return (car.owner === ownerName);
        })
        console.log("result: ", result);
        return result;
    }

    displayCars = (ownerName) => {
        const result = this.getUserCars(ownerName).map((car, i) => {
            console.log("inside map func");
            return (
                <div key={i}>
                    <Container width="100vh">
                        <Card style={{ width: '30vw' }}>
                            <Card.Body>
                                <Card.Title>Car: {i + 1}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Owner: {car.owner}
                                </Card.Subtitle>
                                <Card.Text>
                                    <Container>
                                        <Row>Make: {car.make}</Row>
                                        <Row>Model: {car.model}</Row>
                                        <Row>Year: {car.year}</Row>
                                        <Row>Color: {car.color}</Row>
                                    </Container>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
            );
        });
        return result;
    }


    render() {

       return this.props.loggedIn ? (
         <>
           <h1>Welcome {this.props.location.state.name}!</h1>
           <br></br>
           <br></br>
           {this.displayCars(this.state.name)}
         </>
       ) : (
         <>
           <> please log in first</>
           <Link
             to={{
               pathname: "/Login",
             }}
           >
             Log in
           </Link>
         </>
       )
    }
}

export default UserProfile;