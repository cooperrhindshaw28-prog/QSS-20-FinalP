# Unconditional Cash Transfers and Asset Thresholds
## Project Overview

This project examines whether there is evidence of an asset threshold among poor households receiving unconditional cash transfers in rural Kenya. I am interested in whether households with different initial asset levels experience different patterns of later asset accumulation.

The project uses data from the GiveDirectly unconditional cash transfer experiment in Kenya.

## Research Question

Is there evidence of a baseline asset threshold above which households experience greater subsequent asset accumulation, and can unconditional cash transfers help households cross that threshold?

## Data

The main dataset used in this project is:

`UCT_FINAL_CLEAN.dta` found in `dataverse_files/`

`data/` includes a smaller README.md that explains that the data is located in `dataverse_files/`

Important variables include:

- `surveyid` — survey or household identifier
- `treat` — cash transfer treatment status
- `asset_total_ppp0` — baseline household assets
- `asset_total_ppp1` — follow-up household assets

The original data come from the publicly available replication materials for the GiveDirectly cash transfer study.

## Code

The `code/` folder contains the notebooks used in this project.

- `01_data_prep.ipynb` — loads and explores the dataset and identifies relevant variables.
- `02_visualizations.ipynb` — creates initial visualizations of treatment status and household assets.

## Output

The `output/` folder contains figures generated from the analysis.

Current figures include:

- cash transfer treatment counts
- distribution of baseline household assets
- relationship between baseline and follow-up household assets

## Project Status

This project is still in progress. Future analysis will examine whether the relationship between baseline and follow-up assets shows evidence consistent with an asset threshold or poverty trap.