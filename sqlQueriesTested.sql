create database testmysql;

use testmysql;

show tables;

create table customer(
      custid int primary key,
      cname varchar(30),
      adharno int,
      phoneno int,
      zipcode int,
      address varchar(50),
      email varchar(50),
      cpassword varchar(30)
      );
      
insert into customer values(1,'rajesh',123456,12344,123444,'ewrg ffegr ewrr','email','password');

insert into customer values(2,'rajesh',123456,12344,123444,'ewrg ffegr ewrr','email','password');

UPDATE customer SET cname="prk",adharno=123434,phoneno=342234,zipcode=45345,address="ergerg fre",email="rgreg@gmail.com",cpassword="wxdv@4533" where custid=2;

select * from customer;