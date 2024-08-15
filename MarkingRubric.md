### Marking Rubric CSE5006-T4

---

### **Task 1 – UI Modifications** (10 Marks)
1. **Change Button Label in Contact Component** (2 Marks)
    - **2 Marks**: Button label successfully changed from "Delete" to "Delete Contact".
    - **0 - 1 Marks**: Task partially done/incorrect

2. **Change Button Label in Phone Component** (3 Marks)
    - **3 Marks**: Button label correctly updated to "Add Choiru’s Phone" or similar.
    - **0 - 2 Marks**: Task partially done/incorrect
3. **Change Placeholder Text to Drop-Down Menu** (3 Marks)
    - **3 Marks**: Placeholder text "Name" replaced with a functional drop-down menu containing 4 categories.
    - **0 - 2 Marks**: Task partially done/incorrect
4. **Change Table Label in `<tr>` Element** (2 Marks)
    - **2 Marks**: Label "Name" correctly changed to "Phone Type" in the `<tr>` element.
    - **0 - 1 Marks**: Task partially done/incorrect

5. **Deductions**
    - Up to half mark for each point without documentation

---

### **Task 2 – API Command Demonstrations** (8 Marks)
- **1 Mark Each**: Correct API command is shown and a screenshot of the output is provided for the following:
    - Show Contact
    - Add Contact
    - Delete Contact
    - Update Contact
    - Show Phone
    - Add Phone
    - Delete Phone
    - Update Phone
- **0 - 0.5 Marks**: -Task partially done/incorrect
- **Deduction Up to full mark for each**: Documentation is missing

---

### **Task 3 – Database Modeling and Testing with Sequelize** (22 Marks)
1. **Modify the Contacts Table** (5 Marks)
    - **5 Marks**: Contacts table correctly updated to include `id`, `Name`, and `Address`.
    - **0-4 Marks**: Partial or incorrect updates to the table structure.


2. **Modify the Phones Table** (5 Marks)
    - **5 Marks**: Phones table correctly updated to include `id`, `phone_type`, `phone_number`, and `contactId`.
    - **0-4 Marks**: Partial or incorrect updates to the table structure.

3. **Adjust the Front-End** (4 Marks)
    - **4 Marks**: Front-end is modified to align with the updated backend structure.
    - **0-3 Marks**: Partial or incorrect front-end alignment.

4. **Test All APIs for Contacts and Phones Tables** (8 Marks)
    - **2 Marks Each**: Each API command related to `contacts` and `phones` tables is tested and demonstrated correctly.
    - **0-1 Marks**: Incomplete or incorrect API testing.

5. **Deductions**
    - Up to half mark if the documentation does not reflect or related to your task
    - Up to full mark for each point without documentation

---

### **Task 4 – Expanding the Existing Tables (e.g., Company)** (30 Marks)
1. **Table Creation** (18 Marks)
    - **18 Marks**: `companies` table is created with attributes `company_id`, `company_name`, `company_address`, and `contact_id` with correct relationships.
    - **0-8 Marks**: Partial or incorrect table creation.

2. **API Creation** (12 Marks)
    - **12 Marks**: Four APIs for managing records in the `companies` table are correctly implemented.
    - **3 Marks Each**: Each API is implemented correctly.
    - **0-2 Marks**: Partial or incorrect API implementation.x

3. **Deductions**
    - Up to half mark if the documentation does not reflect or related to your task
    - Up to full mark for each point without documentation
---

### **Task 5 – Front-End for Companies Table** (30 Marks)
1. **30 Marks**: A fully functional front-end interface is created for managing the `companies` table, including add, edit, delete, and update operations. Changes are persisted in the database, and the process is documented with screenshots included in the `Readme.md` file.
2. **0-20 Marks**: Partial or incomplete front-end functionality, missing documentation, or improper data persistence.
3. **Deductions**
   - Up to half mark if the documentation does not reflect or related to your task
   - Up to full mark for each point without documentation

### **Other Deductions**
1. **node_modules**: A fully functional front-end interface is included in the submission: **5 marks**
2. **submission name does not follow the format**: FirstName-studentID.zip (e.g. Mario-studentID.zip): **5 marks**
3. **did not share** the git repository since week 4 to your lecturer: **5 marks**
4. **did not mention the repository link** in your readme.md file: **5 marks**
