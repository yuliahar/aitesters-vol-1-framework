# Rolnopol Test Plan

## Overview

Testing strategy for Rolnopol agricultural management system based on http://localhost:3000/docs.html

**Application**: Farm management system with marketplace functionality  
**Environment**: http://localhost:3000  
**Framework**: Playwright

## Core Test Areas

### 1. Smoke Tests ✅

- [x] Homepage loads with title "Rolnopol" `@smoke` `@critical`
- [ ] Key pages accessible (login, register, docs, marketplace) `@smoke` `@navigation`
- [ ] API health check responds `@smoke` `@api`

### 2. Authentication

- [ ] User registration and login `@auth` `@registration` `@login`
- [ ] Session management and logout `@auth` `@session` `@logout`
- [ ] Role-based access (farmer, admin, superadmin) `@auth` `@rbac` `@permissions`

### 3. Farm Management

- [ ] Add/edit/delete fields, animals, staff `@crud` `@farm` `@resources`
- [ ] Create assignments between staff and fields `@farm` `@assignments` `@business-logic`
- [ ] Prevent operations on assigned resources `@farm` `@validation` `@edge-case`

### 4. Marketplace

- [ ] Create offers for unassigned resources `@marketplace` `@offers` `@crud`
- [ ] Purchase offers with sufficient funds `@marketplace` `@purchase` `@happy-path`
- [ ] Block purchases with insufficient funds `@marketplace` `@purchase` `@validation` `@edge-case`
- [ ] Transfer ownership after successful purchase `@marketplace` `@ownership` `@business-logic`

### 5. Financial Operations

- [ ] View account balance and transaction history `@financial` `@balance` `@history`
- [ ] Fund transfers between users `@financial` `@transfer` `@business-logic`
- [ ] Prevent overdraft (negative balances) `@financial` `@validation` `@edge-case`

### 6. End-to-End Scenarios

- [ ] **New Farm Setup**: Register → Login → Add resources → Create assignments `@e2e` `@farm-setup` `@user-journey`
- [ ] **Marketplace Trade**: Create offer → Browse → Purchase → Verify ownership transfer `@e2e` `@marketplace-flow` `@user-journey`
- [ ] **Insufficient Funds**: Attempt expensive purchase → Verify blocked transaction `@e2e` `@edge-case` `@validation`

## Test Priorities

- **P0**: Smoke tests, authentication, basic CRUD
- **P1**: Marketplace trading, financial operations
- **P2**: Edge cases, error handling

## Success Criteria

- All P0 and P1 tests pass
- Core user flows work as documented
- Financial transactions are accurate and secure

## Next Steps

1. Expand smoke tests for key pages
2. Add authentication test suite
3. Implement marketplace transaction tests
4. Create end-to-end user journey tests
