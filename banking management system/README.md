# Bank Management RDBMS

This project is a production-level relational database management system (RDBMS) for managing bank operations.

## Prerequisites

- PostgreSQL or MySQL installed.

## Setup Instructions

1. **Create Schema**:
   - Execute `01_create_tables.sql` from the `/schema` directory.
   - Execute `02_create_constraints.sql` from the `/schema` directory.
   - Execute `03_create_indexes.sql` from the `/schema` directory.

2. **Insert Data**:
   - Execute the files in the `/data` directory in the order specified:
     1. `01_insert_customers.sql`
     2. `02_insert_branches.sql`
     3. `03_insert_accounts.sql`
     4. `04_insert_loans.sql`
     5. `05_insert_services.sql`
     6. `06_insert_employees.sql`
     7. `07_insert_bankers.sql`
     8. `08_insert_cards.sql`
     9. `09_insert_transactions.sql`
     10. `10_insert_payments.sql`
     11. `11_insert_card_transactions.sql`
     12. `12_insert_credit_card_details.sql`
     13. `13_insert_customer_services.sql`

3. **Create Triggers, Procedures, Views, and Functions**:
   - Execute `create_triggers.sql` from the `/triggers` directory.
   - Execute `create_procedures.sql` from the `/procedures` directory.
   - Execute `create_views.sql` from the `/views` directory.
   - Execute `create_functions.sql` from the `/functions` directory.

## Directory Structure

- `/schema`: Contains SQL files for creating tables, constraints, and indexes.
- `/data`: Contains SQL files for inserting initial data into the tables.
- `/triggers`: Contains SQL files for creating triggers.
- `/procedures`: Contains SQL files for creating stored procedures.
- `/views`: Contains SQL files for creating views.
- `/functions`: Contains SQL files for creating functions.

## File Descriptions

- **01_create_tables.sql**: Creates all the tables.
- **02_create_constraints.sql**: Adds constraints like foreign keys to the tables.
- **03_create_indexes.sql**: Adds indexes to the tables to improve performance.
- **01_insert_customers.sql**: Inserts initial data into the `Customers` table.
- **...**
- **create_triggers.sql**: Creates all triggers for the database.
- **create_procedures.sql**: Creates all stored procedures for the database.
- **create_views.sql**: Creates all views for the database.
- **create_functions.sql**: Creates all functions for the database.

