
import './DetailPage.css'

const CheckboxOptions = ({checked}) => {

  return (
    <div className='sizes'>
      <label>
        <input
          type="checkbox"
        />
        S
      </label>
      <label>
        <input
          type="checkbox"
        />
        M
      </label>
      <label>
        <input
          type="checkbox"
        />
        L
      </label>
      <label>
        <input
          type="checkbox"
        />
        XL
      </label>
    </div>
  );
};

export default CheckboxOptions;