import './App.css';
 function Modal({ visible, onClose, content, footer }) {
    console.log(visible)
    

    if (!visible) return null
     return (
        <div className='modal' onClick={onClose}>
        <div className='modal-dialog' onClick={e => e.stopPropagation()}>
          <div className='modal-header'>
            <h3 className='modal-title'>Oops!</h3>
            
              
            
          </div>
          <div className='modal-body'>
            <div className='modal-content'>{content}</div>
          </div>
          {footer && <div className='modal-footer'>{footer}</div>}
        </div>
      </div>
     )
 }


 export default Modal