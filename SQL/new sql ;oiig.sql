create database newclass;
use newclass;

delimiter //

-- prevent salary reduction
create trigger before_salary_update
before update on employees
for each row
begin
    if new.salary < old.salary then
        signal sqlstate '650';
    end if;
end //

-- archive deleted records
create trigger after_employee_delete
after delete on employees
for each row
begin
    insert into employees_archive
    values (old.id, old.name, old.salary, old.department, now());
end //

-- auto update timestamp
create trigger before_employee_update_timestamp
before update on employees
for each row
begin
    set new.last_modified = now();
end //

-- prevent null values
create trigger before_employee_insert_not_null
before insert on employees
for each row
begin
    if new.name is null or new.department is null then
        signal sqlstate '650';
    end if;
end //

-- check stock before order
create trigger before_order_insert_check_stock
before insert on orders
for each row
begin
    if (select stock from products where product_id = new.product_id) < new.quantity then
        signal sqlstate '650';
    end if;
end //

delimiter ;

-- test insert
insert into employees(name, salary, department) values ('test',5,'it');

-- test update
update employees set salary = 3 where name = 'test';

-- test delete
delete from employees where name = 'test';

-- check archive
select * from employees_archive;