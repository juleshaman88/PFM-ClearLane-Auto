const ROWS = [['35–40', '$110–$190'], ['41–45', '$120–$190'], ['46–50', '$120–$210'], ['51–55', '$120–$210'], ['56–60', '$120–$210'], ['61–65', '$120–$210']];
export default function IllustrativeRates({ selectedAge }) {
  return (
    <section className="wrap rates">
      <h2>Why Age Matters</h2>
      <p className="lede">Age is one factor insurers weigh when determining rates. The table below shows the age ranges and how general monthly costs can differ by age, not what you would pay.</p>
      <div className="table-scroll">
        <table>
          <caption>Monthly Costs Based on Age Range (not real quotes)</caption>
          <thead><tr><th scope="col">Age Range</th><th scope="col">Monthly Range</th></tr></thead>
          <tbody>{ROWS.map(([a, r]) => {
            const selected = a.replace('–', '-') === selectedAge;
            return <tr key={a} className={selected ? 'rates-selected' : undefined}><th scope="row">{a}{selected && <span className="rates-selected-label">Your selected range</span>}</th><td>{r}</td></tr>;
          })}</tbody>
        </table>
      </div>
      <p className="hint">These figures are invented for illustration. They are not carrier rates, or a promise of savings. Your results depend on many personal details. ClearLane Auto is not an insurance company.</p>
    </section>
  );
}
