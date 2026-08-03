# udacity-cloud-devops-projects

The four projects from the Udacity Cloud DevOps Engineer Nanodegree (2022), kept
together in one repo.

## Why

This is coursework, and it's labelled as coursework — but it's the coursework the
rest of my AWS work was built on, so it stays public rather than getting quietly
archived. The CloudFormation and CircleCI projects in particular are where the
infrastructure-as-code habits came from.

The repo also does one thing the course never asked for: it scans all four
projects in CI as separate Semgrep projects, which is the monorepo pattern I
later spent a lot of time explaining to customers.

## The projects

| | What it covers |
|---|---|
| **1** | [Static website on S3](cloud-devops-static-website) — S3 static hosting. Screenshots only; the site itself is long gone. |
| **2** | [CloudFormation — Udagram](cloud-devops-cloudformation) — a two-stack build (network, then app servers) covering VPC, public/private subnet pairs, NAT gateways, ALB, autoscaling, and SSM-based instance access instead of SSH. |
| **3** | [CI/CD — UdaPeople](cloud-devops-ci-cd-udapeople) — the big one. CircleCI pipeline with Ansible configuration management, CloudFormation stacks for frontend/backend/database/CloudFront, and `destroy-environment` / `revert-migrations` commands for rollback. Prometheus node-exporter for monitoring. |
| **4** | [Operationalizing ML](cloud-devops-operationalizing-ml) — containerising a Flask prediction service and running it on Kubernetes, with `hadolint` and `pylint` wired into a Makefile. |

Projects 3 and 4 start from Udacity's provided application code; the pipeline,
infrastructure and deployment configuration are mine.

## The CI here

[`.github/workflows/semgrep.yml`](.github/workflows/semgrep.yml) scans each
project directory as its own Semgrep project via `SEMGREP_REPO_DISPLAY_NAME`,
then merges the per-directory JSON reports into one artifact with `jq`. Without
that variable a monorepo reports as a single project and per-directory triage
isn't possible.

It needs a `SEMGREP_APP_TOKEN` repository secret to run.

## Notes

- Nothing here is currently deployed. The AWS resources were destroyed after
  grading, so the templates are readable but the links in the sub-project READMEs
  point at infrastructure that no longer exists.
- Project 1 is three screenshots. It's included for completeness, not because
  there's anything to read.
- The pipeline configs pin tool versions from 2022 and will need updating before
  they run — the CircleCI images in particular have moved on.
