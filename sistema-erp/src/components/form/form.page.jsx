const FormPage = ({ insulmos }) => {
  return (
    <div>
      {insulmos.map((i) => {
        return (
          <div key={i.id}>
            <div>{i.name}</div>
            <div>{i.price}</div>
            <div>{i.unity}</div>
            <div>{i.quant}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FormPage;
