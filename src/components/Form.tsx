import React, { ChangeEvent } from 'react';
import '../style/Form.css';

const Form = () => {
  const [text, setText] = React.useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  return (
    <div className='Form'>
      <div className='ui comments'>
        <div className='comment'>
          <div className='content'>
            <span className='author'>Add comment</span>
            <form className='ui reply form'>
              <div className='field'>
                <textarea
                  data-testid='textArea'
                  value={text}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div
                className='ui primary submit labeled icon button'
                role='button'
              >
                <i className='icon edit'></i> Reply
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
