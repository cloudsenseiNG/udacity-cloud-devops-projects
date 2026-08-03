## Udapeople Continuous Integration and Continuous Deployment

This project helped in mastering CI/CD concepts. The detailed description can be found in [Introduction](./Instructions.md).

## Project Submission Items
### Presentation
The following [slides](./instructions/presentation.pdf) explain the key benefits of CI/CD for Cloud-based software products.

### Tools
- AWS - Cloud Service
- Ansible - Configuration Management
- CircleCI - Continuous Integration / Continuous Deployment
- Prometheus - Infrastructure Monitoring
- AlertManager - Alerts and Notifications
- CloudFormation - Infrastructure Provisioning

### Urls
- Public Url to GitHub repository [URL01]
  - [GitHub Repo](./)

- Public URL for the S3 Bucket (the green candidate frontend [URL02]
  - http://udapeople-4befed5.s3-website-us-east-1.amazonaws.com 

- Public URL for the CloudFront distribution (the blue production frontend) [URL03]
  - http://d7664v7mi0i8i.cloudfront.net/

- Public URLs to deployed application backend in EC2 [URL04]
  - http://18.208.221.137:3030/api/status

- Public URL to the Prometheus server [URL05]
  - http://ec2-44-204-62-145.compute-1.amazonaws.com:9090

### Screenshots
1. Backend build failed: ![SCREENSHOT01](instructions/screenshots/[SCREENSHOT01].png)
2. Backend test failed: ![SCREENSHOT02](instructions/screenshots/[SCREENSHOT02].png)
3. Backend scan failed: ![SCREENSHOT03](instructions/screenshots/[SCREENSHOT03].png)
4. CircleCI Email Notification: ![SCREENSHOT04](instructions/screenshots/[SCREENSHOT04].png)
5. Deploy backend infrastructure failed: ![SCREENSHOT05](instructions/screenshots/[SCREENSHOT05].png)
6. Frontend smoke test failed: ![SCREENSHOT06](instructions/screenshots/[SCREENSHOT06].png)
7. Rollback after failed smoke test succeeded: ![SCREENSHOT07](instructions/screenshots/[SCREENSHOT07].png)
8. Promotion of infrastructure succeeded: ![SCREENSHOT08](instructions/screenshots/[SCREENSHOT08].png)
9. Cleanup old stack succeeded: ![SCREENSHOT09](instructions/screenshots/[SCREENSHOT09].png)
10. Skip deployment for non-`main` branch: ![SCREENSHOT10](instructions/screenshots/[SCREENSHOT10].png)
11. Graphs in Prometheus for backend EC2 server that monitor disk I/O, available memory, available disk space, and CPU usage.
    1. Disk I/O ![SCREENSHOT11-1](instructions/screenshots/[SCREENSHOT11-1].png)
    2. CPU Usage ![SCREENSHOT11-2](instructions/screenshots/[SCREENSHOT11-2].png)
    3. Available Memory ![SCREENSHOT11-3](instructions/screenshots/[SCREENSHOT11-3].png)
12. Alert Manager Email Notification: ![SCREENSHOT12](instructions/screenshots/[SCREENSHOT12].png)