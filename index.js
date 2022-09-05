const Box = (props) => {
  //  Write your code here.
  const { className, name } = props;
  const classN = `Box ${className}`;
  return (
    <div className={classN}>
      <p className="Box_con">{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="Con">
    <h1 className="heading">Boxes</h1>
    <div className="Boxes">
      <Box className="Box1" name="small" />
      <Box className="Box2" name="medium" />
      <Box className="Box3" name="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
