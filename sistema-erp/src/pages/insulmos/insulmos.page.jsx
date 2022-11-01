import FormPage from "../../components/form/form.page";

const InsulmosPage = () => {
  let insulmo = [
    {
      id: 1,
      name: "Semente de Feijão",
      price: "22,00",
      unity: "kg",
      quant: "100,00",
    },
  ];

  return (
    <>
      <div>Insulmos Page</div>
      <div>
        <FormPage insulmos={insulmo} />
      </div>
    </>
  );
};

export default InsulmosPage;
