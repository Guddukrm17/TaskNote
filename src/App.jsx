import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = [...task];
    newTask.push({ title, details });
    setTask(newTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const newTask = [...task];
    newTask.splice(idx, 1);
    setTask(newTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        className="flex gap-4 lg:w-1/2 p-10 item-start flex-col "
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Title"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          type="text"
          placeholder="Enter your Description"
          className="px-5 w-full h-32 py-2 border-2 rounded outline-none flex items-start flex-row font-medium"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-white w-full text-black px-5 py-2 rounded outline-none font-medium active:scale-95">
          Add Note
        </button>
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 p-10 ">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap item-start justify-start gap-5 mt-6 overflow-auto h-[90%]">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative h-52 w-40 rounded-xl text-black pt-9 px-4 pb-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover flex justify-between flex-col item-start"
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-4 leading-tight text-xs font-semibold text-gray-600">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-xs rounded font-bold text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
