import React, { useState } from 'react';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');

  const handleOnBlur = (e) => {
    const adminEmail = e.target.value;
    setEmail(adminEmail);
    e.target.value = '';
  };

  const handleSubmit = (e) => {
    const user = { email };
    fetch('https://sheltered-fortress-54983.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert('Your Have Successfully made a new Admin');
        } else {
          alert('Oops!!!!, User not found, Try again');
        }
      });

    e.preventDefault();
  };
  return (
    <div className="p-5 vh-100 bg-light">
      <h2 className="text-success"> Make A New Admin </h2>
      <form onSubmit={handleSubmit}>
        <input
          onBlur={handleOnBlur}
          placeholder="Type email here.."
          style={{ width: '75%' }}
          type="text"
          name=""
          id=""
        />
        <input type="submit" value="Make Admin" />
      </form>
    </div>
  );
};

export default MakeAdmin;
