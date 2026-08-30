# Unconditional Cash Transfers and Asset Thresholds

## Project Overview

This project examines whether there is evidence of a productive-asset threshold among poor households participating in an unconditional cash transfer experiment in rural Kenya.

The analysis is inspired by Balboni et al. (2022), who find evidence of an unstable productive-asset threshold in rural Bangladesh. This project asks whether similar transition dynamics appear in the GiveDirectly Kenya experiment.

## Research Question

Is there evidence of a baseline productive-asset threshold above which households experience greater subsequent asset accumulation, and do these dynamics differ across control, small-transfer, and large-transfer households?

## Data

The main dataset is:

`dataverse_files/UCT_FINAL_CLEAN.dta`

The original data come from the publicly available replication materials for the GiveDirectly cash transfer study by Haushofer and Shapiro.

The `data/` folder contains a short README explaining the location and source of the dataset.

The final analysis uses one observation per household. Duplicate rows by `surveyid` were removed before estimating the household-level productive-asset transition functions.

Important variables include:

- `surveyid` — household survey identifier
- `treat` — treatment indicator
- `treatXsmall` — small-transfer treatment indicator
- `treatXlarge` — large-transfer treatment indicator
- `asset_livestock_ppp0` / `asset_livestock_ppp1` — baseline and follow-up livestock value
- `asset_ag_ppp0` / `asset_ag_ppp1` — baseline and follow-up agricultural asset value
- `asset_trans_ppp0` / `asset_trans_ppp1` — baseline and follow-up transportation asset value

The final productive-asset measure combines livestock, agricultural assets, and transportation assets, all measured in PPP-adjusted USD. Land is not included because the available land variable is measured in acres rather than monetary value.

## Code

The `code/` folder contains the notebooks used in the analysis.

### `01_load_data_analysis.ipynb`

**Input:** `dataverse_files/UCT_FINAL_CLEAN.dta`

**Purpose:**  
Loads the GiveDirectly dataset, inspects its structure, identifies treatment and asset variables, checks household identifiers and duplicate rows, and examines variables relevant to the replication.

**Output:**  
Dataset diagnostics and variable-selection information used in later analysis.

### `02_initial_visualization.ipynb`

**Input:** `dataverse_files/UCT_FINAL_CLEAN.dta`

**Purpose:**  
Performs exploratory analysis of treatment assignment and household asset variables and creates preliminary visualizations.

**Output:**  
Initial treatment-count and asset-distribution plots.

### `03_initial_replication_analysis.ipynb`

**Input:** `dataverse_files/UCT_FINAL_CLEAN.dta`

**Purpose:**  
Implements an initial Balboni-style transition analysis using broader household asset measures. This specification was later revised after the project shifted to a productive-asset measure designed to more closely match Balboni et al.

**Output:**  
Preliminary transition-function estimates and exploratory figures.

### `04_final_replication_analysis.ipynb`

**Input:** `dataverse_files/UCT_FINAL_CLEAN.dta`

**Purpose:**  
Constructs the final productive-asset measure, removes duplicate household observations, creates treatment groups, examines the baseline productive-asset distribution, and estimates asset transition functions.

The notebook estimates:

- cubic polynomial transition functions
- kernel-weighted local-linear transition functions

It also identifies crossings with the 45-degree line and calculates the local slope at each crossing.

**Output:**

- baseline productive-asset KDE
- final kernel transition figure
- cubic robustness figure
- estimated crossing locations
- local slopes by treatment group

This notebook contains the primary analysis reported in the final paper.

### `05_multivariate_regression.ipynb`

**Input:** `dataverse_files/UCT_FINAL_CLEAN.dta`

**Purpose:**  
Estimates a supplementary multivariate regression of follow-up productive assets on baseline productive assets, treatment-group indicators, and interactions between baseline assets and treatment status.

**Output:**  
Supplementary regression results reported in the appendix.

## Output

The `output/` folder contains figures and tables generated from the final analysis.

Key outputs include:

- baseline productive-asset distribution
- kernel-weighted local-linear transition functions
- cubic transition-function robustness check
- bandwidth robustness output
- supplementary regression output

## Paper

The `paper/` folder contains the final written deliverables for the project.

- `final_paper.pdf` — final scientific writeup
- `final_paper.tex` — LaTeX source for the final paper
- `references.bib` — bibliography used in the paper
- `final_appendix.pdf` — supplementary appendix containing robustness checks, additional figures, and regression output
- `final_ai_use.pdf` — Agentic Analysis / AI-use reflection and selected transcript excerpts

## Website

The `website/` folder contains the React/Vite website created to present the project and its main results.

It includes:

- `src/` — React components and styling
- `public/` — static assets used by the site
- `index.html` — main HTML entry point
- `package.json` — project dependencies and scripts
- `package-lock.json` — locked dependency versions
- `vite.config.js` — Vite configuration
- `eslint.config.js` — ESLint configuration

The website is deployed through Vercel with `website/` set as the project root directory.

## Main Finding

The estimated productive-asset transition functions cross the 45-degree line in all three treatment groups, but the local slope at each crossing is below one.

The final kernel estimates are approximately:

- Control: log crossing = 3.81, PPP crossing = \$44.14, local slope = 0.560
- Small Transfer: log crossing = 5.11, PPP crossing = \$164.80, local slope = 0.629
- Large Transfer: log crossing = 5.18, PPP crossing = \$177.34, local slope = 0.367

Because none of the estimated crossings has a slope greater than one, the analysis does not find evidence of an unstable Balboni-style productive-asset threshold in the GiveDirectly sample.

## Repository Structure

```text
.
├── README.md
├── code/
│   ├── 01_load_data_analysis.ipynb
│   ├── 02_initial_visualization.ipynb
│   ├── 03_initial_replication_analysis.ipynb
│   ├── 04_final_replication_analysis.ipynb
│   └── 05_multivariate_regression.ipynb
├── data/
│   └── README.md
├── dataverse_files/
│   └── UCT_FINAL_CLEAN.dta
├── output/
│   ├── baseline_kde.png
│   ├── kernel_transition.png
│   ├── cubic_transition.png
│   └── bandwidth_robustness.png
├── paper/
│   ├── final_paper.pdf
│   ├── final_paper.tex
│   ├── references.bib
│   ├── final_appendix.pdf
│   └── final_ai_use.pdf
├── website/
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── eslint.config.js
└── .gitignore