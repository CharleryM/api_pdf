export function Formulaire() {
  return (
    <div className='form-facture'>
      <h1>Formulaire de facture</h1>
      <form action="http://localhost:3000/facture/add" method="post">
        <ul>
          <li>
            <label htmlFor="title">title:</label>
            <input type="text" id="title" value={""} name="title_facture" />
          </li>
          <li>
            <label htmlFor="ouwner">ouwner:</label>
            <input type="text" id="ouwner" value={""} name="ouwner_name" />
          </li>
          <li>
            <label htmlFor="client">client:</label>
            <input type="text" id="client" value={""} name="client_facture" />
          </li>
          <li>
            <label htmlFor="sold">price:</label>
            <input type="number" id="sold" value={""} name="price_facture" />
          </li>
          <button type='submit'>générer le PDF</button>
        </ul>
      </form>
    </div>
  );
}
