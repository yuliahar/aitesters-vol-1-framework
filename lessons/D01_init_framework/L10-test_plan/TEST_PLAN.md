# Rolnopol Test Plan

## Overview

Testing strategy for Rolnopol agricultural management system based on http://localhost:3000/docs.html

**Application**: Farm management system with marketplace functionality  
**Environment**: http://localhost:3000  
**Framework**: Playwright

## Core Test Areas

### 1. Smoke Tests ✅

- [x] Homepage loads with title "Rolnopol"
- [ ] Key pages accessible (login, register, docs, marketplace)
- [ ] API health check responds

### 2. Authentication

- [ ] User registration and login
- [ ] Session management and logout
- [ ] Role-based access (farmer, admin, superadmin)

### 3. Farm Management

- [ ] Add/edit/delete fields, animals, staff
- [ ] Create assignments between staff and fields
- [ ] Prevent operations on assigned resources

### 4. Marketplace

- [ ] Create offers for unassigned resources
- [ ] Purchase offers with sufficient funds
- [ ] Block purchases with insufficient funds
- [ ] Transfer ownership after successful purchase

### 5. Financial Operations

- [ ] View account balance and transaction history
- [ ] Fund transfers between users
- [ ] Prevent overdraft (negative balances)

### 6. End-to-End Scenarios

- [ ] **New Farm Setup**: Register → Login → Add resources → Create assignments
- [ ] **Marketplace Trade**: Create offer → Browse → Purchase → Verify ownership transfer
- [ ] **Insufficient Funds**: Attempt expensive purchase → Verify blocked transaction

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
