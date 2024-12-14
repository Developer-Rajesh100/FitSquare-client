"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/member/")
      .then((res) => {
        setMembers(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

  //   console.log(members);

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Emergency contact</th>
            <th>Gender</th>
            <th>Dob</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Blood Group</th>
            <th>Is Staff</th>
            <th>
              {/* <button className="btn btn-neutral btn-sm">Edit</button> */}
              Edit
            </th>
            <th>
              Delete
              {/* <button className="btn btn-error btn-sm">Error</button> */}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {members.map((member) => (
            <tr key={member.id}>
              <th>{member.id}</th>
              <td>{member.user.username}</td>
              <td>{member.user.first_name}</td>
              <td>{member.user.last_name}</td>
              <td>{member.user.email}</td>
              <td>{member.mobile ? member.mobile : "NULL"}</td>
              <td>
                {member.emergency_contact ? member.emergency_contact : "NULL"}
              </td>
              <td>{member.gender}</td>
              <td>{member.dob}</td>
              <td>{member.height}</td>
              <td>{member.weight}</td>
              <td>{member.blood_group}</td>
              <td>{member.is_staff ? "True" : "False"}</td>
              <td>
                <button className="btn btn-neutral btn-sm">Edit</button>
              </td>
              <td>
                <button className="btn btn-error btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
