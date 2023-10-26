import React from 'react';
import './Modal.css';
import html_logo from '../../assets/html_pic.png'
function Modal({ isOpen, onClose, rank, score, percentile,handleRankChange, handleScoreChange, handlePercentileChange }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
            <div className='modal-header'>
                <h2 className='header-desc'>Update Scores</h2>
                <img className='html-img' src={html_logo} />
            </div>
            <div className='modal-input-container'>
                <div className='modal-input-fields'>
                    <div className='modal-input-desc'>
                        <p className='serial-number'>1</p>
                        <p className='serial-description'>Update your <span style={{fontWeight:'bold'}}>rank</span></p>
                    </div>
                    <input className='modal-input-box' value={rank} onChange={handleRankChange}/>
                </div>
                <div className='modal-input-fields'>
                    <div className='modal-input-desc'>
                        <p className='serial-number'>2</p>
                        <p className='serial-description'>Update your <span style={{fontWeight:'bold'}}>percentile</span></p>
                    </div>
                    <input className='modal-input-box' value={percentile} onChange={handlePercentileChange}/> 
                </div>
                <div className='modal-input-fields'>
                    <div className='modal-input-desc'>
                        <p className='serial-number'>3</p>
                        <p className='serial-description'>Update your <span style={{fontWeight:'bold'}}>current score(out of 15)</span></p>
                    </div>
                    <input className='modal-input-box' value={score} onChange={handleScoreChange}/>
                </div>
            </div>
            <div className='modal-footer'>
                <button className='modal-cancel' onClick={onClose}>
                    Cancel
                </button>
                <button className='modal-save' onClick={onClose}>
                    Save
                </button>
            </div>
      </div>
    </div>
  );
}

export default Modal;
