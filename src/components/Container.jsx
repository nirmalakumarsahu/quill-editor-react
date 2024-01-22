let Container = (props) => {
  return (
    <div
      className="data"
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  );
};

export default Container;
