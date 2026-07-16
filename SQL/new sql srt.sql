create database newclass;
use newclass;
-- 1. create procedure with multiple input parameters
create procedure addemployee(
    in emp_name varchar(100),
    in emp_salary decimal(10,2),
    in emp_dept varchar(50)
)
begin
    insert into employees(name, salary, department)
    values (emp_name, emp_salary, emp_dept);
end //

-- 2. create procedure with out parameter returning employee count
create procedure getemployeecount(out emp_count int)
begin
    select count(*) into emp_count from employees;
end //

-- 3. procedure to log changes into audit table
create procedure logaudit(
    in emp_id int,
    in action_type varchar(50)
)
begin
    insert into audit_log(employee_id, action, action_time)
    values (emp_id, action_type, now());
end //

-- 4. before insert trigger to validate data
create trigger before_employee_insert
before insert on employees
for each row
begin
    if new.salary <= 0 then
        signal sqlstate '45000'
        set message_text = 'salary must be greater than 0';
    end if;
end //

-- 5. after insert trigger to update stock when order is placed
create trigger after_order_insert
after insert on orders
for each row
begin
    update products
    set stock = stock - new.quantity
    where product_id = new.product_id;
end //

-- 6. after update trigger to log changes into another table
create trigger after_employee_update
after update on employees
for each row
begin
    insert into employee_log(emp_id, old_salary, new_salary, change_time)
    values (old.id, old.salary, new.salary, now());
end //

delimiter ;

-- 7. drop a trigger
drop trigger if exists after_employee_update;