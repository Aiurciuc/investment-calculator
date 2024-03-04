import Input from "./Input";

const InputArea = () => {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input label="Initial Investment" />

        <Input label="Annual Investment" />
      </div>
      
      <div className="input-group">
        <Input label="Expected Return" />

        <Input label="Duration" />
      </div>
    </div>
  );
};

export default InputArea;
