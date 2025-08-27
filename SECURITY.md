# Security Guidelines for Open Source

This document outlines security considerations and best practices for deploying and contributing to this project.

## Pre-deployment Security Checklist

### ✅ Completed Security Measures

- [x] **No hardcoded secrets**: No API keys, passwords, or tokens in the codebase
- [x] **Environment variables**: Sensitive configuration moved to environment variables
- [x] **Content review**: Inappropriate content removed from questions database
- [x] **Gitignore**: Proper exclusion of sensitive files (`.env`, `.env.*`)
- [x] **Dependencies**: Using official, well-maintained packages only

### 🔧 Configuration Required

Before deploying this application, ensure you:

1. **Set up analytics domain**:
   - Replace `YOUR_DOMAIN_HERE` in `src/app.html` with your actual domain
   - Or remove the analytics script entirely if not needed

2. **Environment variables**:
   - Copy `.env.example` to `.env` and configure as needed
   - Never commit `.env` files to version control

3. **Review Vercel configuration**:
   - `vercel.json` contains analytics proxy configuration
   - Modify or remove if not using Plausible analytics

## Security Best Practices

### For Contributors

- Never commit sensitive information (API keys, passwords, personal data)
- Use `.env` files for local development configuration
- Review all changes for potential information disclosure
- Keep dependencies updated and monitor for vulnerabilities

### For Deployers

- Use environment variables for all configuration
- Enable proper access controls on your hosting platform
- Regularly update dependencies with `npm audit`
- Monitor your deployment for unusual activity

### Content Guidelines

- Questions should be appropriate for general audiences
- Avoid personally identifiable information in questions
- Consider cultural sensitivity in question content

## Incident Response

If you discover a security issue:

1. **Do not** create a public issue
2. Contact the maintainers privately
3. Provide details about the vulnerability
4. Allow time for assessment and fixes before disclosure

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [Vercel Security Documentation](https://vercel.com/docs/concepts/security)
