
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
 
F
l
a
s
k
L
e
s
s
o
n
 
}
 
f
r
o
m
 
"
.
.
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
f
l
a
s
k
/
d
a
t
a
/
t
y
p
e
s
"
;




f
u
n
c
t
i
o
n
 
c
a
l
c
R
e
a
d
i
n
g
M
i
n
u
t
e
s
(
t
e
x
t
:
 
s
t
r
i
n
g
)
:
 
n
u
m
b
e
r
 
{


 
 
c
o
n
s
t
 
t
r
i
m
m
e
d
 
=
 
t
e
x
t
.
t
r
i
m
(
)
;


 
 
i
f
 
(
!
t
r
i
m
m
e
d
)
 
r
e
t
u
r
n
 
0
;


 
 
c
o
n
s
t
 
w
o
r
d
s
 
=
 
t
r
i
m
m
e
d
.
s
p
l
i
t
(
/
\
s
+
/
)
.
l
e
n
g
t
h
;


 
 
r
e
t
u
r
n
 
M
a
t
h
.
c
e
i
l
(
w
o
r
d
s
 
/
 
2
0
0
)
;


}




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
R
e
a
d
i
n
g
T
i
m
e
(
t
e
x
t
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
c
o
n
s
t
 
m
i
n
u
t
e
s
 
=
 
c
a
l
c
R
e
a
d
i
n
g
M
i
n
u
t
e
s
(
t
e
x
t
)
;


 
 
i
f
 
(
!
m
i
n
u
t
e
s
)
 
r
e
t
u
r
n
 
"
~
0
 
m
i
n
 
r
e
a
d
"
;


 
 
r
e
t
u
r
n
 
`
~
$
{
m
i
n
u
t
e
s
}
 
m
i
n
 
r
e
a
d
`
;


}




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
R
e
a
d
i
n
g
M
i
n
u
t
e
s
(
t
e
x
t
:
 
s
t
r
i
n
g
)
:
 
n
u
m
b
e
r
 
{


 
 
r
e
t
u
r
n
 
c
a
l
c
R
e
a
d
i
n
g
M
i
n
u
t
e
s
(
t
e
x
t
)
;


}




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
 
c
o
u
n
t
C
o
d
e
B
l
o
c
k
s
(
l
e
s
s
o
n
:
 
F
l
a
s
k
L
e
s
s
o
n
)
:
 
n
u
m
b
e
r
 
{


 
 
c
o
n
s
t
 
e
x
a
m
p
l
e
s
 
=
 
l
e
s
s
o
n
?
.
c
o
n
t
e
n
t
?
.
c
o
d
e
E
x
a
m
p
l
e
s
 
?
?
 
[
]
;


 
 
r
e
t
u
r
n
 
e
x
a
m
p
l
e
s
.
l
e
n
g
t
h
;


}




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
 
h
a
s
E
x
e
r
c
i
s
e
s
(
l
e
s
s
o
n
:
 
F
l
a
s
k
L
e
s
s
o
n
)
:
 
b
o
o
l
e
a
n
 
{


 
 
r
e
t
u
r
n
 
A
r
r
a
y
.
i
s
A
r
r
a
y
(
l
e
s
s
o
n
?
.
e
x
e
r
c
i
s
e
s
)
 
&
&
 
l
e
s
s
o
n
.
e
x
e
r
c
i
s
e
s
.
l
e
n
g
t
h
 
>
 
0
;


}


