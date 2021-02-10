import React, { Component } from "react";
import { Table, Button, Modal } from "react-bootstrap";

import { vehicleData } from "../constants/Constant";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

class Home extends Component {
  state = {
    tableData: [...vehicleData],
    ownerName: "",
    wheeler: "One Wheeler",
    type: "Private",
    brand: "",
    show: false,
    edit: false,
    id: "",
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleSave = () => {
    const { ownerName, wheeler, type, brand } = this.state;
    this.setState({
      tableData: [
        ...this.state.tableData,
        { id: Math.random(50), ownerName, wheeler, type, brand },
      ],
    });

    this.setState({ show: false });
  };
  handleShow = () => this.setState({ show: true });

  handleEdit = (id) => {
    const currentData = this.state.tableData.find((item) => item.id === id);

    this.setState({
      edit: true,
      id: currentData.id,
      ownerName: currentData.ownerName,
      wheeler: currentData.wheeler,
      type: currentData.type,
      brand: currentData.brand,
      show: true,
    });
  };

  handleEditSave = (id) => {
    const { ownerName, wheeler, type, brand } = this.state;

    const currentData = this.state.tableData.find((item) => item.id === id);
    const editedData = { id, ownerName, wheeler, type, brand };

    let editedTable = this.state.tableData.map(function (vehicle) {
      if (currentData.id === vehicle.id) {
        return editedData;
      }
      return vehicle;
    });

    this.setState({ show: false, tableData: editedTable });
  };

  myChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDelete = (id) => {
    this.setState({
      tableData: this.state.tableData.filter((item) => item.id !== id),
    });
  };

  render() {
    const { ownerName, wheeler, type, brand } = this.state;

    return (
      <>
        <div style={{ padding: "50px 10%" }}>
          <div className="text-right mb-2">
            <Button onClick={this.handleShow}>Add Vehicle</Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Vehicles</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Owner Name</label>
                    <input
                      name="ownerName"
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Enter Owner Name"
                      required
                      onChange={this.myChangeHandler}
                      value={ownerName}
                    />
                    <br />

                    <label for="exampleFormControlInput1">Wheeler</label>
                    <select
                      name="wheeler"
                      class="custom-select my-1 mr-sm-2"
                      id="inlineFormCustomSelectPref"
                      placeholder="Select wheeler"
                      required
                      onChange={this.myChangeHandler}
                      value={wheeler}
                    >
                      <option value="One Wheeler">One Wheeler</option>
                      <option value="Two Wheeler">Two Wheeler</option>
                      <option value="Three Wheeler">Three Wheeler</option>
                      <option value="Four Wheeler">Four Wheeler</option>
                      <option value="Six Wheeler">Six Wheeler</option>
                    </select>
                    <br />

                    <label for="exampleFormControlInput1">Type</label>
                    <select
                      name="type"
                      class="custom-select my-1 mr-sm-2"
                      id="inlineFormCustomSelectPref"
                      placeholder="Select type"
                      required
                      onChange={this.myChangeHandler}
                      value={type}
                    >
                      <option value="Private">Private</option>
                      <option value="Passenger">Passenger</option>
                    </select>
                    <br />
                    <label for="exampleFormControlInput1">Brand</label>
                    <input
                      name="brand"
                      class="form-control form-control-sm"
                      type="text"
                      placeholder="Enter brand Name"
                      required
                      onChange={this.myChangeHandler}
                      value={brand}
                    />
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                {this.state.edit && (
                  <Button
                    variant="primary"
                    onClick={() => this.handleEditSave(this.state.id)}
                  >
                    Save Changes
                  </Button>
                )}
                {!this.state.edit && (
                  <Button variant="primary" onClick={this.handleSave}>
                    Submit
                  </Button>
                )}
              </Modal.Footer>
            </Modal>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Owner Name</th>
                  <th>Wheeler</th>
                  <th>Type</th>
                  <th>Brand</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tableData.map((vehicle, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{vehicle.ownerName}</td>
                    <td>{vehicle.wheeler}</td>
                    <td>{vehicle.type}</td>
                    <td>{vehicle.brand}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          width: "80%",
                        }}
                      >
                        <p
                          className="text-success"
                          onClick={() => this.handleEdit(vehicle.id)}
                        >
                          <AiFillEdit />
                        </p>
                        <p
                          className="text-danger"
                          onClick={() => this.handleDelete(vehicle.id)}
                        >
                          <AiFillDelete />
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
