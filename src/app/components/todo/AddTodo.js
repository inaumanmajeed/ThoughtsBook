import React, { useState } from "react";
import { db } from "app/firebase/index";
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "app/assets/css/styles.css";
import CustomInput from "../shared/Input";
import DoneIcon from "app/assets/images/dashboard/done.svg";
import { toast } from "react-toastify";

const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState("");

  const auth = getAuth();

  const handleAddTodo = async () => {
    const userId = auth.currentUser ? auth.currentUser.uid : null;
    if (!userId) {
      // alert("You must be logged in to add todos.");
      toast.error("You must be logged in to add todos.");
      return;
    }

    if (!todoText.trim()) {
      setError("Todo text cannot be empty.");
      return;
    }

    try {
      await addDoc(collection(db, `todos/${userId}/items`), {
        text: todoText,
        completed: false,
      });
      setTodoText("");
      setError("");
      // alert("Todo added successfully!");
      toast.success("Todo added successfully!");
    } catch (err) {
      console.error("Error adding todo: ", err);
      // alert("Failed to add todo. Please try again.");
      toast.error("Failed to add todo. Please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <>
      <h1 className="add-todo-title">Lemme Listen to your Thoughts</h1>
      <div className="add-todo">
        <CustomInput
          noMargin
          width={"80%"}
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new Thought"
          error={error}
        />
        <img
          src={DoneIcon}
          onClick={handleAddTodo}
          className="add-btn"
          alt="Add Todo"
        />
      </div>
    </>
  );
};

export default AddTodo;
