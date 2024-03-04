import Input from "./Input";

const InputArea = ({ investmentParams, onChange }) => {
  const inputKeys = Object.keys(investmentParams);

  function handleChange(event) {
    onChange({
      ...investmentParams,
      [event.target.id]: +event.target.value,
    });
  }

  const durationMessage = investmentParams.duration <0 ? "Duration must be at least 0" : null;

  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          id={inputKeys[0]}
          onChange={handleChange}
          value={investmentParams[inputKeys[0]]}
          label="Initial Investment"
        />

        <Input
          id={inputKeys[1]}
          onChange={handleChange}
          value={investmentParams[inputKeys[1]]}
          label="Annual Investment"
        />
      </div>

      <div className="input-group">
        <Input
          id={inputKeys[2]}
          onChange={handleChange}
          value={investmentParams[inputKeys[2]]}
          label="Expected Return"
        />

        <Input
          id={inputKeys[3]}
          value={investmentParams[inputKeys[3]]}
          onChange={handleChange}
          label="Duration"
          message={durationMessage}
        />
      </div>
        
    </section>
  );
};

export default InputArea;
