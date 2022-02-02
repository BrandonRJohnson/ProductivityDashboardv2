import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [ epics, setEpics ] = useState([]);
  const [ editing, setEditing ] = useState(null);

  const onSubmitList = async e => {
    e.preventDefault()
    const {project, description, tickets } = e.target
    await axios.post('http://localhost:5000/api/epics', {
      project: project.value,
      description: description.value,
      tickets: [
        {
          ticketId: tickets.ticketId.value,
          issue: tickets.issue.value
        }
      ],
    })
    project.value = ''
    description.value = ''
    tickets.value = []
    getList()
  }

  const getList = async () => {
    const res = await axios.get('http://localhost:5000/api/epics')
    const data = res.data
    setEpics(data)
  }

  const onSubmitEdits = async (e, id) => {
    e.preventDefault()
    const { project, description, tickets } = e.target
    await axios.post(`http://localhost:5000/api/epics/update/${id}`, {
      project: project.value,
      description: description.value,
      tickets: {
        ticketId: tickets.ticketId.value,
        issue: tickets.issue.value
      },
    })
    setEditing(null)
    getList()
  }

  const deleteList = async itemToDelete => {
    await axios({
      method: 'DELETE',
      url: 'http://localhost:5000/api/list',
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
          <label htmlFor="project">Project:</label>
          <input type="text" name="project" />
          <label htmlFor="description">Description:</label>
          <input type="text" name="description" />
          <button>+</button>
        </form>
      </div>
      <div className="DataOutput">
        {epics.map(item => (
          <div key={item._id}>
            {editing !== item._id ? (
              <div key={item._id} className="DataOutput__card">
                <div className="DataOutput__card--details">
                  <div>
                    <span>Projects:</span>
                    {item.project}
                  </div>
                  <div>
                    <span>Description:</span>
                    {item.description}
                  </div>
                  <div>
                    <span>tickets:</span>
                    {item.tickets.issue}
                    <form onSubmit={e => onSubmitList(e)}>
                      <input type="text" name="tickets" />
                    <button>+</button>
        </form>
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
              <label htmlFor="project">project:</label>
              <input type="text" name="project" defaultValue={item.project} />
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

export default Projects;
