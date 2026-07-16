# Rolnopol Test Plan

## Overview

Testing strategy for Rolnopol agricultural management system based on http://localhost:3000/docs.html

**Application**: Farm management system with marketplace functionality
**Environment**: http://localhost:3000
**Framework**: Playwright

## Core Test Areas

### 1. Smoke Tests

- [x] Homepage loads with title "Rolnopol" `@smoke` `@critical`
- [x] Welcome heading is visible on homepage `@smoke` `@critical`
- [x] Login link is visible on homepage `@smoke` `@navigation`
- [x] Login page loads with correct subtitle `@smoke` `@navigation` `@auth`
- [x] Register page loads with correct subtitle `@smoke` `@navigation` `@auth`
- [x] Docs page loads with correct subtitle `@smoke` `@navigation`
- [ ] Alerts page accessible `@smoke` `@navigation`
- [ ] Marketplace page accessible `@smoke` `@navigation`
- [x] API Explorer (Swagger UI) page loads `@smoke` `@navigation`
- [ ] API health check endpoint responds with healthy status `@smoke` `@api`

### 2. Authentication

- [x] User registration with valid data `@auth` `@registration` `@smoke`
- [x] Registration form has email input with placeholder `@registration` `@ui`
- [x] Display name field is visible on registration form `@registration` `@ui`
- [ ] Registration succeeds without display name (field is optional) `@registration` `@validation`
- [x] Password field is visible on registration form `@registration` `@ui`
- [ ] Password validation rejects input shorter than 3 characters `@registration` `@validation`
- [ ] Login with valid credentials redirects to /profile.html `@auth` `@login`
- [ ] Login sets rolnopolToken and rolnopolLoginTime cookies `@auth` `@login` `@session`
- [ ] Token usable in Authorization header (Bearer) `@auth` `@session`
- [ ] Logout clears cookies and invalidates session `@auth` `@logout`
- [ ] Role-based access (farmer, admin, superadmin) `@auth` `@rbac` `@permissions`
- [ ] Session expiration (24h for users, 1h for admin) `@auth` `@session` `@edge-case`
- [ ] Invalid credentials return error message `@auth` `@login` `@validation`
- [ ] Deactivated account returns error message `@auth` `@login` `@validation`
- [ ] Rate limiting applied to login attempts `@auth` `@login` `@edge-case`

### 3. Farm Management

- [ ] Add/edit/delete fields `@farm` `@crud` `@fields`
- [ ] Add/edit/delete animals `@farm` `@crud` `@animals`
- [ ] Add/edit/delete staff `@farm` `@crud` `@staff`
- [ ] Create assignments (staff to fields) `@farm` `@assignments` `@business-logic`
- [ ] Assign animals to fields `@farm` `@assignments` `@animals`
- [ ] Prevent operations on assigned resources `@farm` `@validation` `@edge-case`

### 4. Marketplace

- [ ] Create offers for unassigned resources (fields, animals) `@marketplace` `@offers` `@crud`
- [ ] Offer status set to "unavailable" for assigned resources `@marketplace` `@offers` `@validation`
- [ ] Purchase offers with sufficient funds `@marketplace` `@purchase` `@happy-path`
- [ ] Block purchases with insufficient funds `@marketplace` `@purchase` `@validation` `@edge-case`
- [ ] Transfer ownership after successful purchase `@marketplace` `@ownership` `@business-logic`
- [ ] Cancel offer by seller `@marketplace` `@offers` `@cancel`
- [ ] Offer statuses: active, sold, cancelled, unavailable `@marketplace` `@offers` `@status`

### 5. Financial Operations

- [ ] View account balance and transaction history `@financial` `@balance` `@history`
- [ ] Fund transfers between users `@financial` `@transfer` `@business-logic`
- [ ] Balance updates after marketplace transactions `@financial` `@balance` `@marketplace`
- [ ] Prevent overdraft (no negative balances) `@financial` `@validation` `@edge-case`
- [ ] Transaction types: income, expense `@financial` `@transactions`

### 6. End-to-End Scenarios

- [ ] **New Farm Setup**: Register → Login → Add fields, animals, staff → Create assignments `@e2e` `@farm-setup` `@user-journey`
- [ ] **Marketplace Trade**: Create offer → Browse → Purchase → Verify ownership transfer and balance update `@e2e` `@marketplace-flow` `@user-journey`
- [ ] **Insufficient Funds**: Attempt purchase exceeding balance → Verify blocked transaction `@e2e` `@edge-case` `@validation`

## Test Priorities

- **P0**: Smoke tests, authentication, basic CRUD
- **P1**: Marketplace trading, financial operations
- **P2**: Edge cases, error handling, role-based access

## Success Criteria

- All P0 and P1 tests pass
- Core user flows work as documented
- Financial transactions are accurate and consistent
