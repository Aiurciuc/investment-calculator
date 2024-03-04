
const Input = ({ label, ...props }) => {

  return (
    <div>
      <label>{label}</label>
      <input {...props} type="number" />
    </div>
  );
};

export default Input;