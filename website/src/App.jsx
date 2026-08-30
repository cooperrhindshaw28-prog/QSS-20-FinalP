import "./App.css";

import productiveDistribution from "../output/replication_log_passet_distribution.png";
import transitionFigure from "../output/productive_asset_transition_by_transfer.png";

const thresholdRows = [
  {
    group: "Control",
    crossing: "29 PPP",
    slope: "0.638",
    interpretation: "Stable",
  },
  {
    group: "Small transfer",
    crossing: "141 PPP",
    slope: "0.601",
    interpretation: "Stable",
  },
  {
    group: "Large transfer",
    crossing: "194 PPP",
    slope: "0.421",
    interpretation: "Stable",
  },
];

function App() {
  return (
    <main className="paper">
      <header className="hero">
        <p className="eyebrow">Cooper Hindshaw · QSS 20 · August 2026</p>

        <h1>Unconditional Cash Transfers and Asset Thresholds</h1>

        <p className="dek">
          Testing whether GiveDirectly cash transfers in rural Kenya reproduce
          the productive-asset poverty-trap dynamics identified by Balboni et
          al. (2022).
        </p>

        <div className="headline-finding">
          <p className="finding-label">Headline finding</p>
          <p className="finding-text">
            I find <strong>no clear evidence of a Balboni-style unstable
            productive-asset threshold</strong> in the GiveDirectly Kenya data.
          </p>
          <p className="finding-subtext">
            Larger transfers correspond to higher estimated crossing points,
            but every estimated slope remains below one.
          </p>
        </div>
      </header>

      <section className="section intro-grid">
        <div>
          <p className="section-number">01</p>
          <h2>The question</h2>
        </div>

        <div className="section-copy">
          <p>
            Balboni et al. (2022) find that households below a productive-asset
            threshold tend to fall back toward a low-asset state, while
            households pushed above it accumulate assets over time.
          </p>
          <p>
            I test whether a similar pattern appears in GiveDirectly's
            randomized unconditional cash-transfer experiment in rural Kenya.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-number">02</p>
          <h2>Data &amp; measure</h2>
        </div>

        <div className="metadata-grid">
          <div className="metadata-item">
            <span className="metadata-label">Data</span>
            <span>GiveDirectly Kenya cash-transfer experiment</span>
          </div>

          <div className="metadata-item">
            <span className="metadata-label">Groups</span>
            <span>Control · Small transfer · Large transfer</span>
          </div>

          <div className="metadata-item">
            <span className="metadata-label">Productive assets</span>
            <span>Livestock + agricultural tools + bikes/motorbikes</span>
          </div>

          <div className="metadata-item">
            <span className="metadata-label">Main comparison</span>
            <span>Baseline vs. follow-up productive assets</span>
          </div>
        </div>

        <p className="method-note">
          Unlike Balboni, the GiveDirectly intervention transfers unrestricted
          cash rather than productive assets directly, so this is a conceptual
          external replication rather than an exact replication.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-number">03</p>
          <h2>Baseline assets are not clearly bimodal</h2>
        </div>

        <figure className="figure figure-medium">
          <img
            src={productiveDistribution}
            alt="Histogram of log baseline household productive assets"
          />
          <figcaption>
            <strong>Figure 1.</strong> Log baseline productive assets. A large
            share of households begin with zero measured productive assets.
            Among households with positive holdings, the distribution does not
            show the pronounced bimodality that motivates the Balboni poverty-
            trap result.
          </figcaption>
        </figure>
      </section>

      <section className="section main-result">
        <div className="section-heading">
          <p className="section-number">04</p>
          <h2>Transition dynamics do not reveal an unstable threshold</h2>
        </div>

        <p className="result-intro">
          I estimate cubic transition functions separately for control,
          small-transfer, and large-transfer households and compare them with
          the 45-degree line. A Balboni-style poverty threshold requires an
          <strong> unstable crossing</strong>—a crossing where the slope exceeds
          one.
        </p>

        <figure className="figure figure-large">
          <img
            src={transitionFigure}
            alt="Productive asset transition curves for control, small transfer, and large transfer groups"
          />
          <figcaption>
            <strong>Figure 2.</strong> Estimated productive-asset transition
            functions by transfer size. The dashed 45-degree line marks points
            where predicted follow-up assets equal baseline assets.
          </figcaption>
        </figure>

        <div className="results-layout">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Group</th>
                  <th>Crossing</th>
                  <th>Slope</th>
                  <th>Interpretation</th>
                </tr>
              </thead>
              <tbody>
                {thresholdRows.map((row) => (
                  <tr key={row.group}>
                    <td>{row.group}</td>
                    <td>{row.crossing}</td>
                    <td>{row.slope}</td>
                    <td className="stable">{row.interpretation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside className="key-number">
            <span className="key-number-value">0 / 3</span>
            <span className="key-number-label">
              estimated crossings have slope &gt; 1
            </span>
          </aside>
        </div>
      </section>

      <section className="section conclusion-grid">
        <div>
          <p className="section-number">05</p>
          <h2>Interpretation</h2>
        </div>

        <div className="section-copy">
          <p>
            The estimated crossing point rises from the control group to the
            small- and large-transfer groups, but the slopes are 0.638, 0.601,
            and 0.421—each below one.
          </p>
          <p>
            These are therefore stable crossings, not the unstable threshold
            predicted by a Balboni-style poverty trap. My preliminary evidence
            does not show a short-run replication of the Bangladesh result.
          </p>
        </div>
      </section>

      <section className="section limitations">
        <div className="section-heading">
          <p className="section-number">06</p>
          <h2>Why might the results differ?</h2>
        </div>

        <div className="limitation-grid">
          <article>
            <h3>Different treatment</h3>
            <p>
              Balboni's intervention directly supplied productive assets,
              primarily livestock. GiveDirectly supplied unrestricted cash.
            </p>
          </article>

          <article>
            <h3>Different asset distribution</h3>
            <p>
              The Kenya sample has a large mass at zero and does not display
              clear positive-asset bimodality at baseline.
            </p>
          </article>

          <article>
            <h3>Shorter horizon</h3>
            <p>
              Balboni's strongest evidence follows households for many years.
              This analysis tests much shorter-run asset dynamics.
            </p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div>
          <p className="footer-label">Preliminary conclusion</p>
          <p className="footer-finding">
            No clear short-run evidence of a Balboni-style unstable
            productive-asset threshold in the GiveDirectly Kenya experiment.
          </p>
        </div>

        <p className="references">
          Balboni, C., Bandiera, O., Burgess, R., Ghatak, M., &amp; Heil, A.
          (2022). “Why Do People Stay Poor?” <em>Quarterly Journal of
          Economics</em>, 137(2), 785–844.
        </p>
      </footer>
    </main>
  );
}

export default App;
