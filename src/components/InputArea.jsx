import Input from "./Input";

const InputArea = ({ investmentParams, onChange }) => {
  function handleChange(event) {
    onChange({
      ...investmentParams,
      [event.target.id]: +event.target.value,
    });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          id="initial"
          onChange={handleChange}
          value={investmentParams.initial}
          label="Initial Investment"
        />

        <Input
          id="annual"
          onChange={handleChange}
          value={investmentParams.annual}
          label="Annual Investment"
        />
      </div>

      <div className="input-group">
        <Input
          id="expected"
          onChange={handleChange}
          value={investmentParams.expected}
          label="Expected Return"
        />

        <Input
          id="duration"
          value={investmentParams.duration}
          onChange={handleChange}
          label="Duration"
        />
      </div>
    </div>
  );
};

export default InputArea;
