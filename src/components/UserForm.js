import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
  });
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => setFormData(response.data))
        .catch(() => setError("Failed to load user data."));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError("Name and email are required.");
      return;
    }

    const request = id
      ? axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, formData)
      : axios.post("https://jsonplaceholder.typicode.com/users", formData);

    request
      .then(() => navigate("/"))
      .catch(() => setError("Failed to submit form."));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border">
      <h2 className="text-xl font-bold mb-4">{id ? "Edit" : "Add"} User</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div>
        <label className="block">Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="border p-2 w-full mb-4"
        />
      </div>
      <div>
        <label className="block">Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="border p-2 w-full mb-4"
        />
      </div>
      <div>
        <label className="block">Department:</label>
        <input
          type="text"
          value={formData.department}
          onChange={(e) =>
            setFormData({ ...formData, department: e.target.value })
          }
          className="border p-2 w-full mb-4"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
