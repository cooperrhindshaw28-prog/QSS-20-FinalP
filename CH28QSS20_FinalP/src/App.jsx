import baselineAssets from '../output/baseline_asset_distribution.png'
import baselineVsFollowup from '../output/baseline_vs_followup_assets.png'
import treatmentCounts from '../output/cash_transfer_treatment_counts.png'
import './App.css'

function App() {
  return (
    <>
      {/* ── Hero / Title ──────────────────────────────────────────── */}
      <section id="hero">
        <p className="byline">Cooper Hindshaw &middot; QSS20 Project</p>
        <h1>Unconditional Cash Transfers<br />and Asset Thresholds</h1>
        <p className="subtitle">
          Do GiveDirectly transfers in rural Kenya generate the productive-asset
          threshold dynamics identified by Balboni et&nbsp;al.&nbsp;(2022)?
        </p>
      </section>

      <div className="ticks"></div>

      {/* ── Research Question ─────────────────────────────────────── */}
      <section className="content-section" id="research-question">
        <h2>Research Question</h2>
        <p>
          Balboni et&nbsp;al.&nbsp;(2022) find that ultra-poor households face
          an <em>unstable</em> wealth threshold: without a big enough push,
          productive assets revert toward a low-level trap. I test whether
          unconditional cash transfers (UCTs) in rural Kenya produce the same
          non-linear dynamics.
        </p>
      </section>

      <div className="ticks"></div>

      {/* ── Data and Method ───────────────────────────────────────── */}
      <section className="content-section" id="data-method">
        <h2>Data &amp; Method</h2>
        <ul>
          <li><strong>Dataset:</strong> GiveDirectly Kenya UCT experiment</li>
          <li>
            <strong>Productive asset measure:</strong> livestock +
            agricultural tools + bikes/motorbikes (PPP-adjusted)
          </li>
          <li>
            <strong>Treatment groups:</strong> Control, Small Transfer,
            Large Transfer
          </li>
          <li>
            <strong>Approach:</strong> Fit cubic transition functions
            (baseline &rarr; follow-up assets) and identify 45-degree-line
            crossings; stable crossings have slope &lt;&nbsp;1, unstable
            crossings have slope &gt;&nbsp;1
          </li>
        </ul>
        <div className="figure-row">
          <figure>
            <img src={treatmentCounts} alt="Household counts by treatment group" />
            <figcaption>Fig.&nbsp;1 — Household counts by treatment group</figcaption>
          </figure>
        </div>
      </section>

      <div className="ticks"></div>

      {/* ── Results ───────────────────────────────────────────────── */}
      <section className="content-section" id="results">
        <h2>Results</h2>

        <div className="finding-block">
          <h3>Finding 1 — Large mass at zero</h3>
          <p>
            At baseline, a substantial share of households hold <em>zero</em>{' '}
            productive assets, consistent with the low-level trap story.
          </p>
          <figure>
            <img
              src={baselineAssets}
              alt="Baseline productive-asset distribution"
            />
            <figcaption>Fig.&nbsp;2 — Baseline productive-asset distribution</figcaption>
          </figure>
        </div>

        <div className="finding-block">
          <h3>Finding 2 — Unimodal, not bimodal</h3>
          <p>
            Among households with positive assets the distribution appears
            unimodal, offering no clear evidence of two stable equilibria.
          </p>
          <figure>
            <img
              src={baselineVsFollowup}
              alt="Baseline vs follow-up productive assets by treatment"
            />
            <figcaption>Fig.&nbsp;3 — Baseline vs.&nbsp;follow-up assets by treatment group</figcaption>
          </figure>
        </div>

        <div className="finding-block">
          <h3>Finding 3 — Stable crossings only</h3>
          <p>
            Cubic transition functions yield one 45-degree-line crossing per
            group, but every slope is below&nbsp;1 — indicating <em>stable</em>{' '}
            fixed points, not Balboni-style unstable thresholds.
          </p>
          <div className="threshold-table-wrap">
            <table className="threshold-table">
              <thead>
                <tr>
                  <th>Group</th>
                  <th>Crossing (PPP)</th>
                  <th>Slope at crossing</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Control</td>
                  <td>29</td>
                  <td>0.638</td>
                  <td className="stable">Stable</td>
                </tr>
                <tr>
                  <td>Small Transfer</td>
                  <td>141</td>
                  <td>0.601</td>
                  <td className="stable">Stable</td>
                </tr>
                <tr>
                  <td>Large Transfer</td>
                  <td>194</td>
                  <td>0.421</td>
                  <td className="stable">Stable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      {/* ── Limitations ───────────────────────────────────────────── */}
      <section className="content-section" id="limitations">
        <h2>Limitations</h2>
        <ul>
          <li>
            GiveDirectly provided <strong>unrestricted cash</strong>, not
            direct productive-asset transfers — this is a
            conceptual/external replication, not an exact one.
          </li>
          <li>
            Cubic functional form may obscure non-linearities at sparse
            regions of the distribution.
          </li>
          <li>
            A single follow-up wave limits the ability to detect slow-moving
            threshold dynamics.
          </li>
        </ul>
      </section>

      <div className="ticks"></div>

      {/* ── Conclusion ────────────────────────────────────────────── */}
      <section className="content-section" id="conclusion">
        <h2>Conclusion</h2>
        <p>
          Using GiveDirectly's Kenya UCT experiment, I find <strong>no strong
          evidence</strong> of Balboni-style unstable productive-asset
          thresholds. Every estimated 45-degree-line crossing is stable
          (slope&nbsp;&lt;&nbsp;1), and the follow-up asset distribution is
          unimodal. The cash transfers shift the crossing point rightward —
          larger transfers push it further — but do not appear to generate the
          non-linear poverty-trap dynamics seen in Balboni et&nbsp;al. Whether
          this reflects the unrestricted nature of the transfers, context
          differences, or a genuine absence of threshold effects remains an
          open question.
        </p>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
