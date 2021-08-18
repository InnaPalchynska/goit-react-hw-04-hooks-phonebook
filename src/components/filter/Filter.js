const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      onChange={target => onChange(target.target.value)}
      value={filter}
      placeholder="Enter name "
    />
  );
};

export default Filter;
