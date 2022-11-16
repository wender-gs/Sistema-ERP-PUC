import "./index.css";

export const Table = ({ dataHeader, dataValues }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {dataHeader.map((element) => {
              return <th key={element}>{element}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataValues.map((element) => {
            return (
              <tr key={element.n}>
                <td>{element.n}</td>
                <td>{element.nome}</td>
                <td>{element.quant}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
