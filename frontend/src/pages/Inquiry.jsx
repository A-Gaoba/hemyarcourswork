// src/pages/Inquiry.jsx

import { useState, useEffect } from "react";
import InquiryForm from "../components/Inquiry/InquiryForm";
import InquiryList from "../components/Inquiry/InquiryList";
import EditInquiryForm from "../components/Inquiry/EditInquiryForm"; // Import the Edit Inquiry Form
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify

function InquiryPage() {
  const [inquiries, setInquiries] = useState([]);
  const [editingInquiry, setEditingInquiry] = useState(null);

  useEffect(() => {
    const fetchInquiries = async () => {
      const token = localStorage.getItem("token"); // Retrieve token from local storage
      if (!token) {
        console.error("No token found. User might not be authenticated.");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/inquiries", {
          headers: {
            Authorization: `Bearer ${token}`, // Use the token for the request
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch inquiries");
        }

        const data = await response.json();
        setInquiries(data);
      } catch (error) {
        console.error("Error fetching inquiries:", error);
        toast.error("Error fetching inquiries"); // Notify error
      }
    };

    fetchInquiries();
  }, []);

  const handleAddInquiry = async (newInquiry) => {
    const token = localStorage.getItem("token"); // Retrieve token
    try {
      const response = await fetch("http://localhost:5000/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use the token for the request
        },
        body: JSON.stringify(newInquiry),
      });

      if (!response.ok) {
        throw new Error("Failed to add inquiry");
      }

      const addedInquiry = await response.json();
      setInquiries((prevInquiries) => [...prevInquiries, addedInquiry]);
      toast.success("Inquiry added successfully!"); // Notify success
    } catch (error) {
      console.error("Error adding inquiry:", error);
      toast.error("Error adding inquiry"); // Notify error
    }
  };

  const handleDeleteInquiry = async (inquiryId) => {
    const token = localStorage.getItem("token"); // Retrieve token
    try {
      const response = await fetch(
        `http://localhost:5000/api/inquiries/${inquiryId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`, // Use the token for the request
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete inquiry");
      }

      setInquiries((prevInquiries) =>
        prevInquiries.filter((inquiry) => inquiry.id !== inquiryId)
      );
      toast.success("Inquiry deleted successfully!"); // Notify success
    } catch (error) {
      console.error("Error deleting inquiry:", error);
      toast.error("Error deleting inquiry"); // Notify error
    }
  };

  const handleEditInquiry = (inquiry) => {
    setEditingInquiry(inquiry); // Set the inquiry to edit
  };

  const handleUpdateInquiry = async (updatedInquiry) => {
    const token = localStorage.getItem("token"); // Retrieve token
    try {
      const response = await fetch(
        `http://localhost:5000/api/inquiries/${updatedInquiry.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Use the token for the request
          },
          body: JSON.stringify(updatedInquiry),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update inquiry");
      }

      const updatedData = await response.json();
      setInquiries((prevInquiries) =>
        prevInquiries.map((inquiry) =>
          inquiry.id === updatedData.id ? updatedData : inquiry
        )
      );
      setEditingInquiry(null); // Reset the editing state
      toast.success("Inquiry updated successfully!"); // Notify success
    } catch (error) {
      console.error("Error updating inquiry:", error);
      toast.error("Error updating inquiry"); // Notify error
    }
  };

  const handleCancelEdit = () => {
    setEditingInquiry(null); // Reset the editing state
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <ToastContainer /> {/* Include ToastContainer for notifications */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mb-6">
        <h1 className="text-2xl font-bold mb-4">Submit Inquiry</h1>
        <InquiryForm onSubmit={handleAddInquiry} />
      </div>
      {editingInquiry ? (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mb-6">
          <h1 className="text-2xl font-bold mb-4">Edit Inquiry</h1>
          <EditInquiryForm
            inquiry={editingInquiry}
            onSubmit={handleUpdateInquiry}
            onCancel={handleCancelEdit}
          />
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4">Inquiries</h2>
          <InquiryList
            inquiries={inquiries}
            onDelete={handleDeleteInquiry}
            onEdit={handleEditInquiry}
          />
        </div>
      )}
    </div>
  );
}

export default InquiryPage;
