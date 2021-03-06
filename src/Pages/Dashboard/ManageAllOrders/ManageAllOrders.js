import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isShipped, setIsShipped] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  //Load all the orders
  useEffect(() => {
    fetch('https://sheltered-fortress-54983.herokuapp.com/allOrders')
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [isShipped, isApproved]);

  // Update pending status to shipped
  const handleShipped = (id) => {
    const status = {
      status: 'Shipped',
    };

    fetch(
      `https://sheltered-fortress-54983.herokuapp.com/upadateOrders/${id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(status),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert('Order Status updated to Shipped Successfully');
          setIsShipped(true);
          setIsApproved(false);
        }
      })
      .catch((err) => console.log(err.message));
  };
  // Update status to Approve
  const handleApprove = (id) => {
    const status = {
      status: 'Approved',
    };

    fetch(
      `https://sheltered-fortress-54983.herokuapp.com/upadateOrders/${id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(status),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert('Order Status updated to Approved Successfully');
          setIsApproved(true);
          setIsShipped(false);
        }
      })
      .catch((err) => console.log(err.message));
  };

  // Deleted or cancel booking by id
  const handleDelete = (id) => {
    if (window.confirm('Are you sure to Cancel Order?')) {
      const url = `https://sheltered-fortress-54983.herokuapp.com/deleteMyOrder/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('You have successfully Canceled Booking!!');
            const remainingOrders = allOrders.filter(
              (Order) => Order._id !== id
            );
            setAllOrders(remainingOrders);
          }
        })
        .catch((err) => console.log(err.message));
    }
  };

  if (isLoading) {
    return (
      <div className="text-center m-5">
        <Spinner animation="border" variant="secondary" />
      </div>
    );
  } else {
    return (
      <div className="overflow-auto p-2">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Order List</th>
              <th>Order date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order.UserName}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>{order.name}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>

                <td>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-danger m-1"
                  >
                    Cancel <i className="fas fa-trash-alt "></i>
                  </button>
                  <button
                    onClick={() => handleShipped(order._id)}
                    className="btn btn-warning m-1"
                  >
                    Ship
                  </button>
                  <button
                    onClick={() => handleApprove(order._id)}
                    className="btn btn-success m-1"
                  >
                    Approve
                  </button>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
};

export default ManageAllOrders;
