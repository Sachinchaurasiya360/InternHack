
/
*
*


 
*
 
U
n
i
t
 
t
e
s
t
s
 
f
o
r
 
s
i
g
n
a
l
s
 
l
i
s
t
 
q
u
e
r
y
 
p
a
r
a
m
 
b
u
i
l
d
i
n
g
 
(
n
o
 
n
e
t
w
o
r
k
 
/
 
D
B
)
.


 
*
 
R
u
n
:
 
n
p
x
 
v
i
t
e
s
t
 
r
u
n
 
s
r
c
/
m
o
d
u
l
e
/
s
t
u
d
e
n
t
/
s
i
g
n
a
l
s
/
s
i
g
n
a
l
s
-
a
p
i
.
p
a
r
a
m
s
.
t
e
s
t
.
t
s


 
*
/


i
m
p
o
r
t
 
{
 
d
e
s
c
r
i
b
e
,
 
e
x
p
e
c
t
,
 
i
t
 
}
 
f
r
o
m
 
"
v
i
t
e
s
t
"
;




/
*
*
 
M
i
r
r
o
r
s
 
q
u
e
r
y
S
i
g
n
a
l
s
 
p
a
r
a
m
 
l
o
g
i
c
 
i
n
 
s
i
g
n
a
l
s
-
a
p
i
.
t
s
 
*
/


f
u
n
c
t
i
o
n
 
b
u
i
l
d
L
i
s
t
P
a
r
a
m
s
(
q
:
 
{


 
 
p
a
g
e
:
 
n
u
m
b
e
r
;


 
 
l
i
m
i
t
:
 
n
u
m
b
e
r
;


 
 
s
o
r
t
?
:
 
"
r
e
c
e
n
t
"
 
|
 
"
a
m
o
u
n
t
"
;


 
 
s
e
a
r
c
h
?
:
 
s
t
r
i
n
g
;


 
 
s
o
u
r
c
e
?
:
 
s
t
r
i
n
g
;


 
 
k
i
n
d
?
:
 
"
f
u
n
d
i
n
g
"
 
|
 
"
h
i
r
i
n
g
"
 
|
 
"
a
l
l
"
;


 
 
h
i
r
i
n
g
O
n
l
y
?
:
 
b
o
o
l
e
a
n
;


 
 
s
t
a
t
u
s
?
:
 
s
t
r
i
n
g
;


}
)
 
{


 
 
c
o
n
s
t
 
p
a
r
a
m
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
b
o
o
l
e
a
n
>
 
=
 
{


 
 
 
 
p
a
g
e
:
 
q
.
p
a
g
e
,


 
 
 
 
l
i
m
i
t
:
 
q
.
l
i
m
i
t
,


 
 
 
 
s
o
r
t
:
 
q
.
s
o
r
t
 
?
?
 
"
r
e
c
e
n
t
"
,


 
 
}
;


 
 
i
f
 
(
q
.
s
e
a
r
c
h
)
 
p
a
r
a
m
s
[
"
s
e
a
r
c
h
"
]
 
=
 
q
.
s
e
a
r
c
h
;


 
 
i
f
 
(
q
.
s
o
u
r
c
e
)
 
p
a
r
a
m
s
[
"
s
o
u
r
c
e
"
]
 
=
 
q
.
s
o
u
r
c
e
;


 
 
i
f
 
(
q
.
k
i
n
d
 
&
&
 
q
.
k
i
n
d
 
!
=
=
 
"
a
l
l
"
)
 
p
a
r
a
m
s
[
"
k
i
n
d
"
]
 
=
 
q
.
k
i
n
d
;


 
 
i
f
 
(
q
.
h
i
r
i
n
g
O
n
l
y
)
 
p
a
r
a
m
s
[
"
h
i
r
i
n
g
O
n
l
y
"
]
 
=
 
t
r
u
e
;


 
 
i
f
 
(
q
.
s
t
a
t
u
s
)
 
p
a
r
a
m
s
[
"
s
t
a
t
u
s
"
]
 
=
 
q
.
s
t
a
t
u
s
;


 
 
r
e
t
u
r
n
 
p
a
r
a
m
s
;


}




d
e
s
c
r
i
b
e
(
"
s
i
g
n
a
l
s
 
l
i
s
t
 
p
a
r
a
m
s
"
,
 
(
)
 
=
>
 
{


 
 
i
t
(
"
o
m
i
t
s
 
k
i
n
d
 
w
h
e
n
 
a
l
l
 
(
d
e
f
a
u
l
t
 
t
a
b
)
"
,
 
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
p
a
r
a
m
s
 
=
 
b
u
i
l
d
L
i
s
t
P
a
r
a
m
s
(
{
 
p
a
g
e
:
 
1
,
 
l
i
m
i
t
:
 
1
2
,
 
k
i
n
d
:
 
"
a
l
l
"
 
}
)
;


 
 
 
 
e
x
p
e
c
t
(
p
a
r
a
m
s
.
k
i
n
d
)
.
t
o
B
e
U
n
d
e
f
i
n
e
d
(
)
;


 
 
 
 
e
x
p
e
c
t
(
p
a
r
a
m
s
.
p
a
g
e
)
.
t
o
B
e
(
1
)
;


 
 
 
 
e
x
p
e
c
t
(
p
a
r
a
m
s
.
l
i
m
i
t
)
.
t
o
B
e
(
1
2
)
;


 
 
}
)
;




 
 
i
t
(
"
s
e
n
d
s
 
k
i
n
d
=
f
u
n
d
i
n
g
 
f
o
r
 
f
u
n
d
i
n
g
 
t
a
b
"
,
 
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
p
a
r
a
m
s
 
=
 
b
u
i
l
d
L
i
s
t
P
a
r
a
m
s
(
{
 
p
a
g
e
:
 
1
,
 
l
i
m
i
t
:
 
1
2
,
 
k
i
n
d
:
 
"
f
u
n
d
i
n
g
"
 
}
)
;


 
 
 
 
e
x
p
e
c
t
(
p
a
r
a
m
s
.
k
i
n
d
)
.
t
o
B
e
(
"
f
u
n
d
i
n
g
"
)
;


 
 
}
)
;




 
 
i
t
(
"
s
e
n
d
s
 
k
i
n
d
=
h
i
r
i
n
g
 
f
o
r
 
h
i
r
i
n
g
 
t
a
b
"
,
 
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
p
a
r
a
m
s
 
=
 
b
u
i
l
d
L
i
s
t
P
a
r
a
m
s
(
{
 
p
a
g
e
:
 
1
,
 
l
i
m
i
t
:
 
1
2
,
 
k
i
n
d
:
 
"
h
i
r
i
n
g
"
 
}
)
;


 
 
 
 
e
x
p
e
c
t
(
p
a
r
a
m
s
.
k
i
n
d
)
.
t
o
B
e
(
"
h
i
r
i
n
g
"
)
;


 
 
}
)
;




 
 
i
t
(
"
f
o
r
w
a
r
d
s
 
s
e
a
r
c
h
 
a
n
d
 
s
o
u
r
c
e
 
f
i
l
t
e
r
s
"
,
 
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
p
a
r
a
m
s
 
=
 
b
u
i
l
d
L
i
s
t
P
a
r
a
m
s
(
{


 
 
 
 
 
 
p
a
g
e
:
 
2
,


 
 
 
 
 
 
l
i
m
i
t
:
 
1
2
,


 
 
 
 
 
 
k
i
n
d
:
 
"
h
i
r
i
n
g
"
,


 
 
 
 
 
 
s
e
a
r
c
h
:
 
"
a
c
m
e
"
,


 
 
 
 
 
 
s
o
u
r
c
e
:
 
"
h
n
-
h
i
r
i
n
g
"
,


 
 
 
 
}
)
;


 
 
 
 
e
x
p
e
c
t
(
p
a
r
a
m
s
.
s
e
a
r
c
h
)
.
t
o
B
e
(
"
a
c
m
e
"
)
;


 
 
 
 
e
x
p
e
c
t
(
p
a
r
a
m
s
.
s
o
u
r
c
e
)
.
t
o
B
e
(
"
h
n
-
h
i
r
i
n
g
"
)
;


 
 
 
 
e
x
p
e
c
t
(
p
a
r
a
m
s
.
k
i
n
d
)
.
t
o
B
e
(
"
h
i
r
i
n
g
"
)
;


 
 
 
 
e
x
p
e
c
t
(
p
a
r
a
m
s
.
p
a
g
e
)
.
t
o
B
e
(
2
)
;


 
 
}
)
;


}
)
;


