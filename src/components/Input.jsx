
const Input = ({ label,message, ...props }) => {

  return (
    <div>
      <label>{label}</label>
      <input {...props} type="number" />
      <p className="error-message">{message}</p>
    </div>
  );
};

export default Input;