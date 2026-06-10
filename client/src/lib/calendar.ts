
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
o
o
g
l
e
C
a
l
e
n
d
a
r
U
r
l
(
{
 
t
i
t
l
e
,
 
d
e
t
a
i
l
s
,
 
s
t
a
r
t
,
 
e
n
d
,
 
l
o
c
a
t
i
o
n
 
}
:
 
{


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
d
e
t
a
i
l
s
:
 
s
t
r
i
n
g
;


 
 
s
t
a
r
t
:
 
D
a
t
e
;


 
 
e
n
d
:
 
D
a
t
e
;


 
 
l
o
c
a
t
i
o
n
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
 
f
m
t
 
=
 
(
d
:
 
D
a
t
e
)
 
=
>
 
d
.
t
o
I
S
O
S
t
r
i
n
g
(
)
.
r
e
p
l
a
c
e
(
/
[
-
:
]
/
g
,
 
"
"
)
.
r
e
p
l
a
c
e
(
/
\
.
\
d
{
3
}
/
,
 
"
"
)
;


 
 
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
 
n
e
w
 
U
R
L
S
e
a
r
c
h
P
a
r
a
m
s
(
{


 
 
 
 
a
c
t
i
o
n
:
 
"
T
E
M
P
L
A
T
E
"
,


 
 
 
 
t
e
x
t
:
 
t
i
t
l
e
,


 
 
 
 
d
a
t
e
s
:
 
`
$
{
f
m
t
(
s
t
a
r
t
)
}
/
$
{
f
m
t
(
e
n
d
)
}
`
,


 
 
 
 
d
e
t
a
i
l
s
,


 
 
 
 
.
.
.
(
l
o
c
a
t
i
o
n
 
&
&
 
{
 
l
o
c
a
t
i
o
n
 
}
)
,


 
 
}
)
;


 
 
r
e
t
u
r
n
 
`
h
t
t
p
s
:
/
/
c
a
l
e
n
d
a
r
.
g
o
o
g
l
e
.
c
o
m
/
c
a
l
e
n
d
a
r
/
r
e
n
d
e
r
?
$
{
p
a
r
a
m
s
}
`
;


}




c
o
n
s
t
 
A
P
I
_
B
A
S
E
 
=
 
(
i
m
p
o
r
t
.
m
e
t
a
.
e
n
v
.
V
I
T
E
_
A
P
I
_
U
R
L
 
a
s
 
s
t
r
i
n
g
 
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
)
 
?
?
 
"
h
t
t
p
:
/
/
l
o
c
a
l
h
o
s
t
:
3
0
0
0
/
a
p
i
"
;




e
x
p
o
r
t
 
a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
d
o
w
n
l
o
a
d
I
C
S
(
p
a
t
h
:
 
s
t
r
i
n
g
,
 
f
i
l
e
n
a
m
e
:
 
s
t
r
i
n
g
 
=
 
"
e
v
e
n
t
.
i
c
s
"
)
 
{


 
 
/
/
 
U
s
e
 
f
e
t
c
h
 
w
i
t
h
 
c
r
e
d
e
n
t
i
a
l
s
 
s
o
 
t
h
e
 
a
u
t
h
 
c
o
o
k
i
e
 
i
s
 
i
n
c
l
u
d
e
d


 
 
c
o
n
s
t
 
u
r
l
 
=
 
p
a
t
h
.
s
t
a
r
t
s
W
i
t
h
(
"
h
t
t
p
"
)
 
?
 
p
a
t
h
 
:
 
`
$
{
A
P
I
_
B
A
S
E
}
$
{
p
a
t
h
}
`
;


 
 
c
o
n
s
t
 
r
e
s
p
o
n
s
e
 
=
 
a
w
a
i
t
 
f
e
t
c
h
(
u
r
l
,
 
{
 
c
r
e
d
e
n
t
i
a
l
s
:
 
"
i
n
c
l
u
d
e
"
 
}
)
;


 
 
i
f
 
(
!
r
e
s
p
o
n
s
e
.
o
k
)
 
t
h
r
o
w
 
n
e
w
 
E
r
r
o
r
(
`
F
a
i
l
e
d
 
t
o
 
d
o
w
n
l
o
a
d
 
I
C
S
:
 
$
{
r
e
s
p
o
n
s
e
.
s
t
a
t
u
s
T
e
x
t
}
`
)
;


 
 
c
o
n
s
t
 
b
l
o
b
 
=
 
a
w
a
i
t
 
r
e
s
p
o
n
s
e
.
b
l
o
b
(
)
;


 
 
c
o
n
s
t
 
o
b
j
e
c
t
U
r
l
 
=
 
U
R
L
.
c
r
e
a
t
e
O
b
j
e
c
t
U
R
L
(
b
l
o
b
)
;


 
 
c
o
n
s
t
 
a
 
=
 
d
o
c
u
m
e
n
t
.
c
r
e
a
t
e
E
l
e
m
e
n
t
(
"
a
"
)
;


 
 
a
.
h
r
e
f
 
=
 
o
b
j
e
c
t
U
r
l
;


 
 
a
.
d
o
w
n
l
o
a
d
 
=
 
f
i
l
e
n
a
m
e
;


 
 
d
o
c
u
m
e
n
t
.
b
o
d
y
.
a
p
p
e
n
d
C
h
i
l
d
(
a
)
;


 
 
a
.
c
l
i
c
k
(
)
;


 
 
d
o
c
u
m
e
n
t
.
b
o
d
y
.
r
e
m
o
v
e
C
h
i
l
d
(
a
)
;


 
 
U
R
L
.
r
e
v
o
k
e
O
b
j
e
c
t
U
R
L
(
o
b
j
e
c
t
U
r
l
)
;


}




