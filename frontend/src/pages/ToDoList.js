import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const ToDoList = () => {
  const [ list, setList ] = useState([]);
  const [ editing, setEditing ] = useState(null);

  const onSubmitList = async e => {
    e.preventDefault()
    const {title, description } = e.target
    await axios.post('/api/list', {
      title: title.value,
      description: description.value,
    })
    title.value = ''
    description.value = ''
    getList()
  }

  const getList = async () => {
    const res = await axios.get('/api/list')
    const data = res.data
    setList(data)
  }

  const onSubmitEdits = async (e, id) => {
    e.preventDefault()
    const { title, description } = e.target
    await axios.post(`/api/list/update/${id}`, {
      title: title.value,
      description: description.value,
    })
    setEditing(null)
    getList()
  }

  const deleteList = async itemToDelete => {
    await axios({
      method: 'DELETE',
      url: '/api/list/',
      data: {
        id: itemToDelete,
      },
    })
    await getList()
  }

  useEffect(() => {
    getList();
  }, [])

  return (
    <div className="App">
      <div className="DataInput">
        <h2>To Do List:</h2>
        <form onSubmit={e => onSubmitList(e)}>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" />
          <label htmlFor="description">Description:</label>
          <input type="text" name="description" />
          <button>+</button>
        </form>
      </div>
      <div className="DataOutput">
        {list.map(item => (
          <div key={item._id}>
            {editing !== item._id ? (
              <div key={item._id} className="DataOutput__card">
                <div className="DataOutput__card--details">
                  <div>
                    <span>Title:</span>
                    {item.title}
                  </div>
                  <div>
                    <span>Description:</span>
                    {item.description}
                  </div>
                </div>
                <div className="DataOutput__card--options">
                  <button onClick={() => setEditing(item._id)}>Edit</button>
                  <button onClick={() => deleteList(item._id)}>Delete</button>
                </div>
              </div>
            ) : (
        <div key={item._id} className="DataOutput__editing">
          <form onSubmit={e => onSubmitEdits(e, item._id)}>
            <div className="DataOutput__editing--option">
              <label htmlFor="title">Title:</label>
              <input type="text" name="title" defaultValue={item.title} />
            </div>
            <div className="DataOutput__editing--option">
              <label htmlFor="description">Description:</label>
              <input type="text" name="description" defaultValue={item.description} />
            </div>
            <div>
              <button type="Submit">Submit</button>
              <button
                className="DataOutput__editing--cancel"
                onClick={() => setEditing(null)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  ))}
</div>
    </div>
  );
}

export default ToDoList;
