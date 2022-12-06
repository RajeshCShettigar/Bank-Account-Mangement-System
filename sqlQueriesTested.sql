create database testmysql;

use testmysql;

show tables;

create table customer(
      custid bigint primary key,
      cname varchar(200),
      adharno bigint,
      phoneno bigint,
      address varchar(200),
      balance bigint
      );

drop table customer;
insert into customer values(1,'rajesh',809645671234,9980095963,'3-90/1 yedapadavu mangalore',10000);


select * from customer;
UPDATE customer SET cname="prk",adharno=123434,phoneno=342234,zipcode=45345,address="ergerg fre",email="rgreg@gmail.com",cpassword="wxdv@4533" where custid=2;

select * from customer;

create table employee(
   empid int primary key,
   ename varchar(200),
   epassword varchar(100)
   );

insert into employee values(1,'pradeep','password');
insert into employee values(2,'shailesh','password');
insert into employee values(3,'ganesh','password');
select * from employee;

/*withdraw amount*/
update customer set balance=balance-1000 where custid=1;

/*employee login*/
select ename,password from employee where ename='pradeep';

/*deposit amount */
update customer set balance=balance+100 where custid=1;

/*transfer amount */
  /* 
  deposit +withdraw 
  */

select custid,balance from customer where custid in (1,133);


create table admin(
      username varchar(200),
      password varchar(200)
      );
insert into admin values('Admin1','admin@123');
insert into admin values('Admin2','admin@123');

select * from admin;
