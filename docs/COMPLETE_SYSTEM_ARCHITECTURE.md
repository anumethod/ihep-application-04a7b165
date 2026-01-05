# COMPLETE SYSTEM ARCHITECTURE

```
ihep-platform/
│
├── frontend/                          # Next.js 14 React Application
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── mfa/
│   │   ├── (dashboard)/
│   │   │   ├── overview/
│   │   │   ├── clinical-twin/
│   │   │   ├── behavioral-twin/
│   │   │   ├── social-twin/
│   │   │   └── financial-twin/          # NEW
│   │   ├── digital-twin-viewer/         # 3D Visualization
│   │   ├── opportunities/               # NEW - Income Generation
│   │   ├── benefits/                    # NEW - Benefits Matching
│   │   ├── resources/
│   │   ├── calendar/
│   │   ├── messages/
│   │   ├── community/
│   │   └── research-portal/
│   ├── components/
│   │   ├── auth/
│   │   ├── digital-twin/
│   │   │   ├── DigitalTwinCanvas.tsx    # Three.js Renderer
│   │   │   ├── ManifoldProjector.ts     # Dimensionality Reduction
│   │   │   └── USDZLoader.ts            # OpenUSD Integration
│   │   ├── financial/                   # NEW
│   │   │   ├── FinancialHealthScore.tsx
│   │   │   ├── OpportunityMatcher.tsx
│   │   │   ├── BenefitsOptimizer.tsx
│   │   │   └── IncomeStreamManager.tsx
│   │   ├── charts/
│   │   └── layout/
│   ├── lib/
│   │   ├── api-client.ts
│   │   ├── auth-provider.tsx
│   │   └── websocket-client.ts
│   ├── styles/
│   │   └── globals.css
│   └── public/
│       ├── models/                      # USD scene files
│       └── assets/
│
├── backend/                             # Microservices
│   ├── api-gateway/                     # Next.js API Routes
│   │   └── pages/api/
│   │       ├── auth/
│   │       ├── twins/
│   │       │   ├── clinical.ts
│   │       │   ├── behavioral.ts
│   │       │   ├── social.ts
│   │       │   └── financial.ts         # NEW
│   │       ├── opportunities/           # NEW
│   │       └── benefits/                # NEW
│   ├── services/                        # Python Microservices
│   │   ├── clinical-twin-service/
│   │   │   ├── app.py
│   │   │   ├── models.py
│   │   │   └── requirements.txt
│   │   ├── behavioral-twin-service/
│   │   ├── social-twin-service/
│   │   ├── financial-twin-service/      # NEW
│   │   │   ├── app.py
│   │   │   ├── financial_twin.py
│   │   │   ├── opportunity_matcher.py
│   │   │   ├── benefits_optimizer.py
│   │   │   └── health_finance_predictor.py
│   │   ├── digital-twin-synthesis/
│   │   │   ├── manifold_projection.py
│   │   │   ├── usd_generator.py
│   │   │   └── incremental_updater.py
│   │   ├── ml-inference/
│   │   │   ├── adherence_predictor.py
│   │   │   ├── risk_stratification.py
│   │   │   └── federated_trainer.py
│   │   └── morphogenetic-healing/
│   │       ├── reaction_diffusion.py
│   │       ├── anomaly_detector.py
│   │       └── self_healer.py
│   └── shared/
│       ├── database/
│       │   ├── models.py
│       │   └── migrations/
│       ├── auth/
│       └── utils/
│
├── infrastructure/                      # Terraform IaC
│   ├── modules/
│   │   ├── networking/
│   │   ├── security/
│   │   ├── compute/
│   │   ├── database/
│   │   ├── healthcare-api/
│   │   └── monitoring/
│   ├── environments/
│   │   ├── dev/
│   │   ├── staging/
│   │   └── production/
│   ├── main.tf
│   ├── variables.tf
│   └── terraform.tfvars
│
├── ml-models/                           # AI/ML Training
│   ├── adherence-prediction/
│   ├── risk-stratification/
│   ├── opportunity-matching/            # NEW
│   ├── health-finance-correlation/      # NEW
│   ├── federated-learning/
│   └── model-registry/
│
├── data/                                # Data Engineering
│   ├── etl-pipelines/
│   ├── fhir-transformers/
│   ├── data-quality/
│   └── synthetic-data-generation/
│
├── docs/                                # Comprehensive Documentation
│   ├── architecture/
│   │   ├── IHEP_Complete_Architecture_v2.docx
│   │   ├── IHEP_Phase_III_Security_Architecture.md
│   │   ├── IHEP_Phase_IV_Digital_Twin_Testing.md
│   │   └── Phase_4_Deployment_Architecture.docx
│   ├── financial/
│   │   ├── ihep-financial-health-twins.docx
│   │   ├── IHEP_30Year_Financial_Projections.md
│   │   └── ihep-financial-models.docx
│   ├── implementation/
│   │   ├── IHEP_PRODUCTION_VALIDATION_ROADMAP.docx
│   │   ├── IHEP_Phase_III_Implementation_Plan.md
│   │   └── morphogenetic-implementation.md
│   ├── business/
│   │   ├── IHEP_PROJECT_CHARTER.docx
│   │   ├── IHEP_Investor_Pitch_Deck.pdf
│   │   └── ihep-grant-applications.docx
│   ├── api/
│   │   └── api-reference.md
│   └── user-guides/
│
├── tests/                               # Comprehensive Testing
│   ├── unit/
│   ├── integration/
│   ├── e2e/
│   ├── security/
│   └── performance/
│
├── scripts/                             # Automation
│   ├── deployment/
│   ├── database/
│   └── monitoring/
│
├── .github/
│   └── workflows/                       # CI/CD Pipelines
│       ├── test.yml
│       ├── security-scan.yml
│       ├── deploy-dev.yml
│       ├── deploy-staging.yml
│       └── deploy-production.yml
│
├── docker-compose.yml                   # Local Development
├── Dockerfile
├── .env.example
├── .gitignore
├── README.md
├── PROJECT_SUMMARY.md                   # This Document
└── LICENSE
```

## Additions (canonical locations)
- Application logic and digital twin dependencies (`three.js-master`, `OpenUSD`) plus the agentic workforce (`swarm`) are maintained under `ihep-application/` as the single source of truth.
- Platform-level shared assets (`workspaces`, `training_datasets`) remain at the repository root.
- Live entry points implemented in `ihep-application/`:
  - 5-Pillar twins: `/digital-twin-viewer`, `/dashboard/digital-twin/{clinical,behavioral,social,financial,personal}`, backed by `/api/twins/*`.
  - Peer Mediators: `/research-portal/peer-mediators`, `/admin/peer-mediators`, backed by `/api/peer-mediators/{curriculum,admin}`.
  - Financial module: `/financial-twin`, backed by `/api/financial/{opportunities,benefits,personal-finance,focus-groups}`.
  - Calendar: `/dashboard/calendar` wired to `/api/calendar/events`.
  - Personal Health Monitor: `/dashboard/health-monitor`, backed by `/api/health/monitor`.
  - Provider comms: `/dashboard/providers`, backed by `/api/providers/{list,contact}`.
  - Resources & support: `/dashboard/resources` (proximity search via `/api/resources/search`), `/support`, `/support/kb/[slug]` with `/api/support/{kb,contact}`.
  - Compliance: `/legal/compliance` referencing `docs/legal/compliance.md`.
