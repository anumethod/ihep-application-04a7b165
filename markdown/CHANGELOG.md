# Changelog

All notable changes to the IHEP Prospectus and related repository files will be documented in this file.

## [Unreleased]
- Future edits, compliance updates, and structural adjustments.

## [2026-01-04] - Repository consolidation
### Changed
- Canonicalized application source under `ihep-application/` (Next.js app, shared components, libs, types, assets, package manifests).
- Relocated digital-twin dependencies `three.js-master`, `OpenUSD`, and agentic workforce `swarm` into `ihep-application/`; removed redundant root copies.
- Removed root duplicates of app folders (`src`, `components`, `lib`, `public`, `types`) and package manifests now mirrored inside `ihep-application/`.
- Left platform-level `workspaces` and `training_datasets` at repo root as shared assets outside the app bundle.

## [2025-08-24] - Initial Release
### Added
- Created GCP migration architecture with serverless React frontend and BigQuery database
- Configured Terraform infrastructure, Cloud Functions backend, and BigQuery schema for serverless deployment
- Added comprehensive migration guide and deployment scripts for GCP transition
- Implemented enterprise-grade high availability architecture with 6-layer load balancing
- Added multi-zone deployment, auto-scaling, database clustering, and comprehensive monitoring

## [2025-06-13]
### Added
- Initial setup
### Changed
- Updated header logo to new Health Insight Ventures banner design with tree logo
- Updated to refined logo version with golden frame, doubled header height (py-6) and logo size (h-24) for better visibility

## [2025-08-24] - Initial Release
### Added
- **IHEP_Prospectus_TextHeavy_Final.pdf** with full Appendix (Compliance + Framework Mapping Ledger).
- **IHEP_Prospectus_TextHeavy_Final.docx** with full Appendix.
- **IHEP_Compliance_Mapping.xlsx** (flat single-sheet ledger).
- **README.md** updated to reference Appendix inclusion.
- Initial repo scaffold with `/docs/compliance/` folder.
