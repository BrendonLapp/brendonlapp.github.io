export const KnowledgeItem = ({ name, Icon, color }) => {
  return (
    <div className="left" style={{ paddingRight: '1rem' }}>
      <span
        style={{
          color: color,
          fontSize: '1.5rem',
          paddingRight: '5px',
        }}
      >
        <Icon />
      </span>
      {name}
    </div>
  );
};
