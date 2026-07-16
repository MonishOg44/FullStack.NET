create database newclass;
use newclass;

-- stored procedure
create procedure insertemployee
    @empname nvarchar(100),
    @dept nvarchar(50),
    @salary decimal(10,2)
as
begin
    insert into employees (empname, dept, salary)
    values (@empname, @dept, @salary);
end;

-- update salary by id
create procedure updatesalary
    @empid int,
    @newsalary decimal(10,2)
as
begin
    update employees
    set salary = @newsalary
    where empid = @empid;
end;

-- update stock when a new order is placed
create trigger trg_updatestock
on orders
after insert
as
begin
    update products
    set stock = stock - i.quantity
    from products p
    inner join inserted i on p.productid = i.productid;
end;

-- prevent deleting the last admin user

create trigger trg_preventlastadmindelete
on users
instead of delete
as
begin
    if (select count(*) from users where role = 'admin') = 1
       and exists (select * from deleted where role = 'admin')
    begin
        raiserror('cannot delete the last admin user.', 16, 1);
        rollback transaction;
    end
    else
    begin
        delete from users where userid in (select userid from deleted);
    end
end;

-- call a stored procedure to fetch employees
exec getemployees;

-- drop a procedure and trigger
drop procedure insertemployee;
drop trigger trg_updatestock;



