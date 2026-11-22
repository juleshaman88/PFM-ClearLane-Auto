// Made-up example numbers for explaining how age can shift rates. Not quotes, not carrier data, not savings.
const ROWS = [['35–40', '$110–$190'], ['41–45', '$120–$190'], ['46–50', '$120–$210'], ['51–55', '$120–$210'], ['56–60', '$120–$210'], ['61–65', '$120–$210']];
export default function IllustrativeRates() {
  return (
    <section className="wrap rates">
      <h2>Why your age range matters</h2>
      <p className="lede">Age is one factor insurers weigh. The table below is <strong>illustrative only</strong>: it shows the idea that monthly costs can differ by age, not what you would pay.</p>
      <div className="table-scroll">
        <table>
          <caption>Illustrative example monthly costs (not real quotes)</caption>
          <thead><tr><th scope="col">Age range</th><th scope="col">Example monthly range</th></tr></thead>
          <tbody>{ROWS.map(([a, r]) => <tr key={a}><th scope="row">{a}</th><td>{r}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="hint">These figures are invented for illustration. They are not ClearLane prices, carrier rates, or a promise of savings. Your results depend on many personal details.</p>
    </section>
  );
}
