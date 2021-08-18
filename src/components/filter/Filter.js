const Filter = ({ contactFilter, onChange }) => {
  return (
    <input
      type="text"
      onChange={target => onChange(target.target.value)}
      value={contactFilter}
      placeholder="Enter name "
    />
  );
};

export default Filter;
