
i
m
p
o
r
t
 
a
p
i
 
f
r
o
m
 
"
.
/
a
x
i
o
s
"
;




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
r
e
p
o
r
t
M
i
l
e
s
t
o
n
e
(
t
y
p
e
:
 
s
t
r
i
n
g
,
 
k
e
y
:
 
s
t
r
i
n
g
)
:
 
v
o
i
d
 
{


 
 
a
p
i
.
p
o
s
t
(
"
/
m
i
l
e
s
t
o
n
e
s
/
r
e
p
o
r
t
"
,
 
{
 
t
y
p
e
,
 
k
e
y
 
}
)
.
c
a
t
c
h
(
(
)
 
=
>
 
{
}
)
;


}


