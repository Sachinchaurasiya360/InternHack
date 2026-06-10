
i
m
p
o
r
t
 
{
 
a
p
t
i
t
u
d
e
T
h
e
o
r
y
 
}
 
f
r
o
m
 
"
.
/
a
p
t
i
t
u
d
e
-
t
h
e
o
r
y
"
;


i
m
p
o
r
t
 
{
 
l
o
g
i
c
a
l
R
e
a
s
o
n
i
n
g
T
h
e
o
r
y
 
}
 
f
r
o
m
 
"
.
/
l
o
g
i
c
a
l
-
r
e
a
s
o
n
i
n
g
-
t
h
e
o
r
y
"
;


i
m
p
o
r
t
 
{
 
v
e
r
b
a
l
A
b
i
l
i
t
y
T
h
e
o
r
y
 
}
 
f
r
o
m
 
"
.
/
v
e
r
b
a
l
-
a
b
i
l
i
t
y
-
t
h
e
o
r
y
"
;


i
m
p
o
r
t
 
{
 
d
a
t
a
I
n
t
e
r
p
r
e
t
a
t
i
o
n
T
h
e
o
r
y
 
}
 
f
r
o
m
 
"
.
/
d
a
t
a
-
i
n
t
e
r
p
r
e
t
a
t
i
o
n
-
t
h
e
o
r
y
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
T
o
p
i
c
T
h
e
o
r
y
 
}
 
f
r
o
m
 
"
.
/
t
y
p
e
s
"
;




e
x
p
o
r
t
 
t
y
p
e
 
{
 
T
o
p
i
c
T
h
e
o
r
y
,
 
F
o
r
m
u
l
a
,
 
M
e
t
h
o
d
,
 
S
o
l
v
e
d
E
x
a
m
p
l
e
 
}
 
f
r
o
m
 
"
.
/
t
y
p
e
s
"
;




c
o
n
s
t
 
a
l
l
T
h
e
o
r
y
:
 
T
o
p
i
c
T
h
e
o
r
y
[
]
 
=
 
[


 
 
.
.
.
a
p
t
i
t
u
d
e
T
h
e
o
r
y
,


 
 
.
.
.
l
o
g
i
c
a
l
R
e
a
s
o
n
i
n
g
T
h
e
o
r
y
,


 
 
.
.
.
v
e
r
b
a
l
A
b
i
l
i
t
y
T
h
e
o
r
y
,


 
 
.
.
.
d
a
t
a
I
n
t
e
r
p
r
e
t
a
t
i
o
n
T
h
e
o
r
y
,


]
;




c
o
n
s
t
 
t
h
e
o
r
y
M
a
p
 
=
 
n
e
w
 
M
a
p
<
s
t
r
i
n
g
,
 
T
o
p
i
c
T
h
e
o
r
y
>
(


 
 
a
l
l
T
h
e
o
r
y
.
m
a
p
(
(
t
)
 
=
>
 
[
t
.
s
l
u
g
,
 
t
]
)
,


)
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
 
g
e
t
T
o
p
i
c
T
h
e
o
r
y
(
s
l
u
g
:
 
s
t
r
i
n
g
)
:
 
T
o
p
i
c
T
h
e
o
r
y
 
|
 
u
n
d
e
f
i
n
e
d
 
{


 
 
r
e
t
u
r
n
 
t
h
e
o
r
y
M
a
p
.
g
e
t
(
s
l
u
g
)
;


}


