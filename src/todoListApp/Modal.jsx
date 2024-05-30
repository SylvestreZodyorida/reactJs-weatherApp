// src/components/Modal.jsx
import React from 'react';

const Modal = ({ isVisible, onClose, onSave, todo }) => {
  const [updatedText, setUpdatedText] = React.useState(todo?.text || '');

  React.useEffect(() => {
    if (todo) {
      setUpdatedText(todo.text);
    }
  }, [todo]);

  const handleSave = () => {
    onSave(todo.id, updatedText);
  };

  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Update Todo</h2>
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        /> <br />
        <button className='btn btn-success' onClick={handleSave}>Save</button><br />
        <button className='btn btn-warning' onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
