
i
m
p
o
r
t
 
{
 
u
s
e
S
t
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
L
i
n
k
,
 
u
s
e
N
a
v
i
g
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{
 
E
y
e
,
 
E
y
e
O
f
f
,
 
A
r
r
o
w
R
i
g
h
t
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


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
.
/
.
.
/
.
.
/
l
i
b
/
a
x
i
o
s
"
;


i
m
p
o
r
t
 
{
 
u
s
e
A
u
t
h
S
t
o
r
e
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
a
u
t
h
.
s
t
o
r
e
"
;


i
m
p
o
r
t
 
{
 
S
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
S
E
O
"
;


i
m
p
o
r
t
 
{
 
K
i
c
k
e
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
K
i
c
k
e
r
"
;




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
R
e
c
r
u
i
t
e
r
R
e
g
i
s
t
e
r
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
(
)
;


 
 
c
o
n
s
t
 
l
o
g
i
n
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
(
s
)
 
=
>
 
s
.
l
o
g
i
n
)
;


 
 
c
o
n
s
t
 
[
f
o
r
m
,
 
s
e
t
F
o
r
m
]
 
=
 
u
s
e
S
t
a
t
e
(
{
 
n
a
m
e
:
 
"
"
,
 
e
m
a
i
l
:
 
"
"
,
 
p
a
s
s
w
o
r
d
:
 
"
"
,
 
c
o
m
p
a
n
y
:
 
"
"
 
}
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
P
a
s
s
w
o
r
d
,
 
s
e
t
S
h
o
w
P
a
s
s
w
o
r
d
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
e
r
r
o
r
,
 
s
e
t
E
r
r
o
r
]
 
=
 
u
s
e
S
t
a
t
e
(
"
"
)
;


 
 
c
o
n
s
t
 
[
l
o
a
d
i
n
g
,
 
s
e
t
L
o
a
d
i
n
g
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
f
i
e
l
d
E
r
r
o
r
s
,
 
s
e
t
F
i
e
l
d
E
r
r
o
r
s
]
 
=
 
u
s
e
S
t
a
t
e
<
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
>
>
(
{
}
)
;




 
 
/
/
 
V
a
l
i
d
a
t
i
o
n
 
f
u
n
c
t
i
o
n
s


 
 
c
o
n
s
t
 
v
a
l
i
d
a
t
e
N
a
m
e
 
=
 
(
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
)
:
 
s
t
r
i
n
g
 
=
>
 
{


 
 
 
 
i
f
 
(
!
n
a
m
e
.
t
r
i
m
(
)
)
 
r
e
t
u
r
n
 
"
N
a
m
e
 
i
s
 
r
e
q
u
i
r
e
d
"
;


 
 
 
 
i
f
 
(
n
a
m
e
.
t
r
i
m
(
)
.
l
e
n
g
t
h
 
<
 
2
)
 
r
e
t
u
r
n
 
"
N
a
m
e
 
m
u
s
t
 
b
e
 
a
t
 
l
e
a
s
t
 
2
 
c
h
a
r
a
c
t
e
r
s
 
l
o
n
g
"
;


 
 
 
 
r
e
t
u
r
n
 
"
"
;


 
 
}
;




 
 
c
o
n
s
t
 
v
a
l
i
d
a
t
e
E
m
a
i
l
 
=
 
(
e
m
a
i
l
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
 
=
>
 
{


 
 
 
 
i
f
 
(
!
e
m
a
i
l
.
t
r
i
m
(
)
)
 
r
e
t
u
r
n
 
"
E
m
a
i
l
 
i
s
 
r
e
q
u
i
r
e
d
"
;


 
 
 
 
i
f
 
(
!
/
^
[
^
\
s
@
]
+
@
[
^
\
s
@
]
+
\
.
[
^
\
s
@
]
+
$
/
.
t
e
s
t
(
e
m
a
i
l
)
)
 
r
e
t
u
r
n
 
"
I
n
v
a
l
i
d
 
e
m
a
i
l
 
a
d
d
r
e
s
s
"
;


 
 
 
 
r
e
t
u
r
n
 
"
"
;


 
 
}
;




 
 
c
o
n
s
t
 
v
a
l
i
d
a
t
e
P
a
s
s
w
o
r
d
 
=
 
(
p
a
s
s
w
o
r
d
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
 
=
>
 
{


 
 
 
 
i
f
 
(
!
p
a
s
s
w
o
r
d
)
 
r
e
t
u
r
n
 
"
P
a
s
s
w
o
r
d
 
i
s
 
r
e
q
u
i
r
e
d
"
;


 
 
 
 
i
f
 
(
p
a
s
s
w
o
r
d
.
l
e
n
g
t
h
 
<
 
8
)
 
r
e
t
u
r
n
 
"
P
a
s
s
w
o
r
d
 
m
u
s
t
 
b
e
 
a
t
 
l
e
a
s
t
 
8
 
c
h
a
r
a
c
t
e
r
s
"
;


 
 
 
 
i
f
 
(
!
/
[
A
-
Z
]
/
.
t
e
s
t
(
p
a
s
s
w
o
r
d
)
)
 
r
e
t
u
r
n
 
"
P
a
s
s
w
o
r
d
 
m
u
s
t
 
c
o
n
t
a
i
n
 
a
t
 
l
e
a
s
t
 
o
n
e
 
u
p
p
e
r
c
a
s
e
 
l
e
t
t
e
r
"
;


 
 
 
 
i
f
 
(
!
/
[
a
-
z
]
/
.
t
e
s
t
(
p
a
s
s
w
o
r
d
)
)
 
r
e
t
u
r
n
 
"
P
a
s
s
w
o
r
d
 
m
u
s
t
 
c
o
n
t
a
i
n
 
a
t
 
l
e
a
s
t
 
o
n
e
 
l
o
w
e
r
c
a
s
e
 
l
e
t
t
e
r
"
;


 
 
 
 
i
f
 
(
!
/
[
0
-
9
]
/
.
t
e
s
t
(
p
a
s
s
w
o
r
d
)
)
 
r
e
t
u
r
n
 
"
P
a
s
s
w
o
r
d
 
m
u
s
t
 
c
o
n
t
a
i
n
 
a
t
 
l
e
a
s
t
 
o
n
e
 
n
u
m
b
e
r
"
;


 
 
 
 
i
f
 
(
!
/
[
\
W
_
]
/
.
t
e
s
t
(
p
a
s
s
w
o
r
d
)
)
 
r
e
t
u
r
n
 
"
P
a
s
s
w
o
r
d
 
m
u
s
t
 
c
o
n
t
a
i
n
 
a
t
 
l
e
a
s
t
 
o
n
e
 
s
p
e
c
i
a
l
 
c
h
a
r
a
c
t
e
r
"
;


 
 
 
 
r
e
t
u
r
n
 
"
"
;


 
 
}
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
F
i
e
l
d
C
h
a
n
g
e
 
=
 
(
f
i
e
l
d
:
 
s
t
r
i
n
g
,
 
v
a
l
u
e
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
s
e
t
F
o
r
m
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
[
f
i
e
l
d
]
:
 
v
a
l
u
e
 
}
)
)
;


 
 
 
 


 
 
 
 
/
/
 
R
e
a
l
-
t
i
m
e
 
v
a
l
i
d
a
t
i
o
n


 
 
 
 
c
o
n
s
t
 
n
e
w
E
r
r
o
r
s
 
=
 
{
 
.
.
.
f
i
e
l
d
E
r
r
o
r
s
 
}
;


 
 
 
 
i
f
 
(
f
i
e
l
d
 
=
=
=
 
"
n
a
m
e
"
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
n
a
m
e
E
r
r
o
r
 
=
 
v
a
l
i
d
a
t
e
N
a
m
e
(
v
a
l
u
e
)
;


 
 
 
 
 
 
i
f
 
(
n
a
m
e
E
r
r
o
r
)
 
{


 
 
 
 
 
 
 
 
n
e
w
E
r
r
o
r
s
.
n
a
m
e
 
=
 
n
a
m
e
E
r
r
o
r
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
d
e
l
e
t
e
 
n
e
w
E
r
r
o
r
s
.
n
a
m
e
;


 
 
 
 
 
 
}


 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
f
i
e
l
d
 
=
=
=
 
"
e
m
a
i
l
"
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
e
m
a
i
l
E
r
r
o
r
 
=
 
v
a
l
i
d
a
t
e
E
m
a
i
l
(
v
a
l
u
e
)
;


 
 
 
 
 
 
i
f
 
(
e
m
a
i
l
E
r
r
o
r
)
 
{


 
 
 
 
 
 
 
 
n
e
w
E
r
r
o
r
s
.
e
m
a
i
l
 
=
 
e
m
a
i
l
E
r
r
o
r
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
d
e
l
e
t
e
 
n
e
w
E
r
r
o
r
s
.
e
m
a
i
l
;


 
 
 
 
 
 
}


 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
f
i
e
l
d
 
=
=
=
 
"
p
a
s
s
w
o
r
d
"
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
a
s
s
w
o
r
d
E
r
r
o
r
 
=
 
v
a
l
i
d
a
t
e
P
a
s
s
w
o
r
d
(
v
a
l
u
e
)
;


 
 
 
 
 
 
i
f
 
(
p
a
s
s
w
o
r
d
E
r
r
o
r
)
 
{


 
 
 
 
 
 
 
 
n
e
w
E
r
r
o
r
s
.
p
a
s
s
w
o
r
d
 
=
 
p
a
s
s
w
o
r
d
E
r
r
o
r
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
d
e
l
e
t
e
 
n
e
w
E
r
r
o
r
s
.
p
a
s
s
w
o
r
d
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
s
e
t
F
i
e
l
d
E
r
r
o
r
s
(
n
e
w
E
r
r
o
r
s
)
;


 
 
}
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
S
u
b
m
i
t
 
=
 
a
s
y
n
c
 
(
e
:
 
R
e
a
c
t
.
F
o
r
m
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
s
e
t
E
r
r
o
r
(
"
"
)
;


 
 
 
 
s
e
t
F
i
e
l
d
E
r
r
o
r
s
(
{
}
)
;


 
 
 
 


 
 
 
 
/
/
 
V
a
l
i
d
a
t
e
 
a
l
l
 
f
i
e
l
d
s


 
 
 
 
c
o
n
s
t
 
n
e
w
E
r
r
o
r
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
>
 
=
 
{
}
;


 
 
 
 
c
o
n
s
t
 
n
a
m
e
E
r
r
o
r
 
=
 
v
a
l
i
d
a
t
e
N
a
m
e
(
f
o
r
m
.
n
a
m
e
)
;


 
 
 
 
c
o
n
s
t
 
e
m
a
i
l
E
r
r
o
r
 
=
 
v
a
l
i
d
a
t
e
E
m
a
i
l
(
f
o
r
m
.
e
m
a
i
l
)
;


 
 
 
 
c
o
n
s
t
 
p
a
s
s
w
o
r
d
E
r
r
o
r
 
=
 
v
a
l
i
d
a
t
e
P
a
s
s
w
o
r
d
(
f
o
r
m
.
p
a
s
s
w
o
r
d
)
;


 
 
 
 


 
 
 
 
i
f
 
(
n
a
m
e
E
r
r
o
r
)
 
n
e
w
E
r
r
o
r
s
.
n
a
m
e
 
=
 
n
a
m
e
E
r
r
o
r
;


 
 
 
 
i
f
 
(
e
m
a
i
l
E
r
r
o
r
)
 
n
e
w
E
r
r
o
r
s
.
e
m
a
i
l
 
=
 
e
m
a
i
l
E
r
r
o
r
;


 
 
 
 
i
f
 
(
p
a
s
s
w
o
r
d
E
r
r
o
r
)
 
n
e
w
E
r
r
o
r
s
.
p
a
s
s
w
o
r
d
 
=
 
p
a
s
s
w
o
r
d
E
r
r
o
r
;


 
 
 
 


 
 
 
 
i
f
 
(
O
b
j
e
c
t
.
k
e
y
s
(
n
e
w
E
r
r
o
r
s
)
.
l
e
n
g
t
h
 
>
 
0
)
 
{


 
 
 
 
 
 
s
e
t
F
i
e
l
d
E
r
r
o
r
s
(
n
e
w
E
r
r
o
r
s
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}




 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
t
r
u
e
)
;




 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
a
y
l
o
a
d
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
>
 
=
 
{


 
 
 
 
 
 
 
 
n
a
m
e
:
 
f
o
r
m
.
n
a
m
e
,


 
 
 
 
 
 
 
 
e
m
a
i
l
:
 
f
o
r
m
.
e
m
a
i
l
,


 
 
 
 
 
 
 
 
p
a
s
s
w
o
r
d
:
 
f
o
r
m
.
p
a
s
s
w
o
r
d
,


 
 
 
 
 
 
 
 
r
o
l
e
:
 
"
R
E
C
R
U
I
T
E
R
"
,


 
 
 
 
 
 
}
;


 
 
 
 
 
 
i
f
 
(
f
o
r
m
.
c
o
m
p
a
n
y
)
 
p
a
y
l
o
a
d
.
c
o
m
p
a
n
y
 
=
 
f
o
r
m
.
c
o
m
p
a
n
y
;


 
 
 
 
 
 
c
o
n
s
t
 
{
 
d
a
t
a
 
}
 
=
 
a
w
a
i
t
 
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
a
u
t
h
/
r
e
g
i
s
t
e
r
"
,
 
p
a
y
l
o
a
d
)
;


 
 
 
 
 
 
i
f
 
(
!
d
a
t
a
.
u
s
e
r
.
i
s
V
e
r
i
f
i
e
d
)
 
{


 
 
 
 
 
 
 
 
n
a
v
i
g
a
t
e
(
`
/
v
e
r
i
f
y
-
e
m
a
i
l
?
e
m
a
i
l
=
$
{
e
n
c
o
d
e
U
R
I
C
o
m
p
o
n
e
n
t
(
f
o
r
m
.
e
m
a
i
l
)
}
`
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
l
o
g
i
n
(
d
a
t
a
.
u
s
e
r
)
;


 
 
 
 
 
 
 
 
n
a
v
i
g
a
t
e
(
"
/
r
e
c
r
u
i
t
e
r
s
"
)
;


 
 
 
 
 
 
}


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
e
r
r
o
r
 
=
 
e
r
r
 
a
s
 
{


 
 
 
 
 
 
 
 
r
e
s
p
o
n
s
e
?
:
 
{


 
 
 
 
 
 
 
 
 
 
d
a
t
a
?
:
 
{


 
 
 
 
 
 
 
 
 
 
 
 
m
e
s
s
a
g
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


 
 
 
 
 
 
 
 
 
 
 
 
e
r
r
o
r
s
?
:
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
e
l
d
E
r
r
o
r
s
?
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
[
]
>
;


 
 
 
 
 
 
 
 
 
 
 
 
}
;


 
 
 
 
 
 
 
 
 
 
}
;


 
 
 
 
 
 
 
 
}
;


 
 
 
 
 
 
}
;




 
 
 
 
 
 
/
/
 
H
a
n
d
l
e
 
f
i
e
l
d
-
l
e
v
e
l
 
e
r
r
o
r
s
 
f
r
o
m
 
b
a
c
k
e
n
d


 
 
 
 
 
 
c
o
n
s
t
 
b
a
c
k
e
n
d
F
i
e
l
d
E
r
r
o
r
s
 
=
 
e
r
r
o
r
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
e
r
r
o
r
s
?
.
f
i
e
l
d
E
r
r
o
r
s
;


 
 
 
 
 
 
i
f
 
(
b
a
c
k
e
n
d
F
i
e
l
d
E
r
r
o
r
s
 
&
&
 
t
y
p
e
o
f
 
b
a
c
k
e
n
d
F
i
e
l
d
E
r
r
o
r
s
 
=
=
=
 
"
o
b
j
e
c
t
"
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
i
e
l
d
E
r
r
o
r
s
O
b
j
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
>
 
=
 
{
}
;


 
 
 
 
 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
[
f
i
e
l
d
,
 
m
e
s
s
a
g
e
s
]
 
o
f
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
b
a
c
k
e
n
d
F
i
e
l
d
E
r
r
o
r
s
)
)
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
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
m
e
s
s
a
g
e
s
)
 
&
&
 
m
e
s
s
a
g
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
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
f
i
e
l
d
E
r
r
o
r
s
O
b
j
[
f
i
e
l
d
]
 
=
 
m
e
s
s
a
g
e
s
[
0
]
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
i
f
 
(
O
b
j
e
c
t
.
k
e
y
s
(
f
i
e
l
d
E
r
r
o
r
s
O
b
j
)
.
l
e
n
g
t
h
 
>
 
0
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
F
i
e
l
d
E
r
r
o
r
s
(
f
i
e
l
d
E
r
r
o
r
s
O
b
j
)
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}




 
 
 
 
 
 
c
o
n
s
t
 
b
a
c
k
e
n
d
M
e
s
s
a
g
e
 
=
 
e
r
r
o
r
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
m
e
s
s
a
g
e
 
|
|
 
"
R
e
g
i
s
t
r
a
t
i
o
n
 
f
a
i
l
e
d
"
;


 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
b
a
c
k
e
n
d
M
e
s
s
a
g
e
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
}


 
 
}
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
h
-
s
c
r
e
e
n
 
g
r
i
d
 
l
g
:
g
r
i
d
-
c
o
l
s
-
2
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
R
e
c
r
u
i
t
e
r
 
R
e
g
i
s
t
r
a
t
i
o
n
"


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
"
C
r
e
a
t
e
 
a
 
f
r
e
e
 
r
e
c
r
u
i
t
e
r
 
a
c
c
o
u
n
t
 
o
n
 
I
n
t
e
r
n
H
a
c
k
.
 
P
o
s
t
 
j
o
b
s
,
 
m
a
n
a
g
e
 
a
p
p
l
i
c
a
t
i
o
n
s
,
 
a
n
d
 
h
i
r
e
 
t
o
p
 
t
a
l
e
n
t
 
f
r
o
m
 
l
e
a
d
i
n
g
 
i
n
s
t
i
t
u
t
i
o
n
s
.
"


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
"
r
e
c
r
u
i
t
e
r
 
s
i
g
n
u
p
,
 
p
o
s
t
 
j
o
b
s
,
 
h
i
r
e
 
i
n
t
e
r
n
s
,
 
I
n
t
e
r
n
H
a
c
k
 
r
e
c
r
u
i
t
e
r
"


 
 
 
 
 
 
/
>




 
 
 
 
 
 
<
A
u
t
h
P
r
o
m
o
P
a
n
e
l


 
 
 
 
 
 
 
 
k
i
c
k
e
r
=
"
s
t
a
r
t
 
h
i
r
i
n
g
 
i
n
 
1
0
 
m
i
n
u
t
e
s
"


 
 
 
 
 
 
 
 
h
e
a
d
l
i
n
e
=
{


 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
r
 
f
i
r
s
t
 
h
i
r
e
.
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
L
i
v
e
 
b
y
 
t
o
m
o
r
r
o
w
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
s
u
b
=
"
S
p
i
n
 
u
p
 
a
 
r
e
c
r
u
i
t
e
r
 
w
o
r
k
s
p
a
c
e
,
 
p
o
s
t
 
a
 
r
o
l
e
,
 
a
n
d
 
s
e
e
 
r
a
n
k
e
d
 
c
a
n
d
i
d
a
t
e
s
 
i
n
s
i
d
e
 
t
h
e
 
d
a
y
.
 
S
e
v
e
n
 
d
a
y
s
 
o
n
 
t
h
e
 
h
o
u
s
e
,
 
n
o
 
c
a
r
d
 
r
e
q
u
i
r
e
d
.
"


 
 
 
 
 
 
/
>




 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
p
x
-
6
 
p
y
-
1
6
 
l
g
:
p
y
-
0
"
>


 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
t
o
=
"
/
"


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
t
o
p
-
6
 
l
e
f
t
-
6
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
s
m
 
n
o
-
u
n
d
e
r
l
i
n
e
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
m
g
 
s
r
c
=
"
/
l
o
g
o
.
p
n
g
"
 
a
l
t
=
"
I
n
t
e
r
n
H
a
c
k
"
 
c
l
a
s
s
N
a
m
e
=
"
h
-
7
 
w
-
7
 
r
o
u
n
d
e
d
-
m
d
 
o
b
j
e
c
t
-
c
o
n
t
a
i
n
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
-
b
o
t
t
o
m
-
0
.
5
 
-
r
i
g
h
t
-
0
.
5
 
h
-
1
.
5
 
w
-
1
.
5
 
b
g
-
l
i
m
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>
I
n
t
e
r
n
H
a
c
k
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
L
i
n
k
>




 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
6
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
 
}
}


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
m
a
x
-
w
-
m
d
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
5
"
>
c
r
e
a
t
e
 
a
c
c
o
u
n
t
<
/
K
i
c
k
e
r
>


 
 
 
 
 
 
 
 
 
 
<
h
1
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
3
x
l
 
m
d
:
t
e
x
t
-
4
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
R
e
c
r
u
i
t
e
r
 
s
i
g
n
u
p
.


 
 
 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
3
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
S
e
v
e
n
-
d
a
y
 
f
r
e
e
 
t
r
i
a
l
.
 
C
a
n
c
e
l
 
a
n
y
 
t
i
m
e
.


 
 
 
 
 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
8
 
s
p
a
c
e
-
y
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
e
r
r
o
r
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
-
3
 
b
g
-
r
e
d
-
5
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
0
0
/
2
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
r
e
d
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
r
e
d
-
8
0
0
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
m
 
t
e
x
t
-
r
e
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
r
r
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
<
f
o
r
m
 
n
o
V
a
l
i
d
a
t
e
 
o
n
S
u
b
m
i
t
=
{
h
a
n
d
l
e
S
u
b
m
i
t
}
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
o
r
m
F
i
e
l
d
 
l
a
b
e
l
=
"
F
u
l
l
 
n
a
m
e
"
 
e
r
r
o
r
=
{
f
i
e
l
d
E
r
r
o
r
s
.
n
a
m
e
}
 
f
i
e
l
d
N
a
m
e
=
"
n
a
m
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
h
a
n
d
l
e
F
i
e
l
d
C
h
a
n
g
e
(
"
n
a
m
e
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
i
n
v
a
l
i
d
=
{
!
!
f
i
e
l
d
E
r
r
o
r
s
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
d
e
s
c
r
i
b
e
d
b
y
=
{
f
i
e
l
d
E
r
r
o
r
s
.
n
a
m
e
 
?
 
"
e
r
r
o
r
-
n
a
m
e
"
 
:
 
u
n
d
e
f
i
n
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
3
 
b
o
r
d
e
r
 
r
o
u
n
d
e
d
-
m
d
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
p
l
a
c
e
h
o
l
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
s
t
o
n
e
-
6
0
0
 
t
e
x
t
-
s
m
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
e
l
d
E
r
r
o
r
s
.
n
a
m
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
r
e
d
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
r
e
d
-
8
0
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
r
e
d
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
J
a
n
e
 
D
o
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
o
r
m
F
i
e
l
d
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
o
r
m
F
i
e
l
d
 
l
a
b
e
l
=
"
W
o
r
k
 
e
m
a
i
l
"
 
e
r
r
o
r
=
{
f
i
e
l
d
E
r
r
o
r
s
.
e
m
a
i
l
}
 
f
i
e
l
d
N
a
m
e
=
"
e
m
a
i
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
e
m
a
i
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
e
m
a
i
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
h
a
n
d
l
e
F
i
e
l
d
C
h
a
n
g
e
(
"
e
m
a
i
l
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
i
n
v
a
l
i
d
=
{
!
!
f
i
e
l
d
E
r
r
o
r
s
.
e
m
a
i
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
d
e
s
c
r
i
b
e
d
b
y
=
{
f
i
e
l
d
E
r
r
o
r
s
.
e
m
a
i
l
 
?
 
"
e
r
r
o
r
-
e
m
a
i
l
"
 
:
 
u
n
d
e
f
i
n
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
3
 
b
o
r
d
e
r
 
r
o
u
n
d
e
d
-
m
d
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
p
l
a
c
e
h
o
l
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
s
t
o
n
e
-
6
0
0
 
t
e
x
t
-
s
m
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
e
l
d
E
r
r
o
r
s
.
e
m
a
i
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
r
e
d
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
r
e
d
-
8
0
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
r
e
d
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
y
o
u
@
c
o
m
p
a
n
y
.
c
o
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
o
r
m
F
i
e
l
d
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
o
r
m
F
i
e
l
d
 
l
a
b
e
l
=
"
C
o
m
p
a
n
y
"
 
f
i
e
l
d
N
a
m
e
=
"
c
o
m
p
a
n
y
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
c
o
m
p
a
n
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
F
o
r
m
(
{
 
.
.
.
f
o
r
m
,
 
c
o
m
p
a
n
y
:
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
3
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
p
l
a
c
e
h
o
l
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
s
t
o
n
e
-
6
0
0
 
t
e
x
t
-
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
Y
o
u
r
 
c
o
m
p
a
n
y
 
n
a
m
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
o
r
m
F
i
e
l
d
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
o
r
m
F
i
e
l
d
 
l
a
b
e
l
=
"
P
a
s
s
w
o
r
d
"
 
e
r
r
o
r
=
{
f
i
e
l
d
E
r
r
o
r
s
.
p
a
s
s
w
o
r
d
}
 
f
i
e
l
d
N
a
m
e
=
"
p
a
s
s
w
o
r
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
{
s
h
o
w
P
a
s
s
w
o
r
d
 
?
 
"
t
e
x
t
"
 
:
 
"
p
a
s
s
w
o
r
d
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
p
a
s
s
w
o
r
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
h
a
n
d
l
e
F
i
e
l
d
C
h
a
n
g
e
(
"
p
a
s
s
w
o
r
d
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
i
n
v
a
l
i
d
=
{
!
!
f
i
e
l
d
E
r
r
o
r
s
.
p
a
s
s
w
o
r
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
d
e
s
c
r
i
b
e
d
b
y
=
{
f
i
e
l
d
E
r
r
o
r
s
.
p
a
s
s
w
o
r
d
 
?
 
"
e
r
r
o
r
-
p
a
s
s
w
o
r
d
"
 
:
 
u
n
d
e
f
i
n
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
3
 
b
o
r
d
e
r
 
r
o
u
n
d
e
d
-
m
d
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
p
r
-
1
0
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
p
l
a
c
e
h
o
l
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
s
t
o
n
e
-
6
0
0
 
t
e
x
t
-
s
m
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
e
l
d
E
r
r
o
r
s
.
p
a
s
s
w
o
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
r
e
d
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
r
e
d
-
8
0
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
r
e
d
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
M
i
n
.
 
8
 
c
h
a
r
s
 
(
A
-
Z
,
 
a
-
z
,
 
0
-
9
,
 
s
y
m
b
o
l
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
L
e
n
g
t
h
=
{
8
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
S
h
o
w
P
a
s
s
w
o
r
d
(
!
s
h
o
w
P
a
s
s
w
o
r
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
{
s
h
o
w
P
a
s
s
w
o
r
d
 
?
 
"
H
i
d
e
 
p
a
s
s
w
o
r
d
"
 
:
 
"
S
h
o
w
 
p
a
s
s
w
o
r
d
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
r
i
g
h
t
-
3
 
t
o
p
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
y
-
1
/
2
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
-
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
P
a
s
s
w
o
r
d
 
?
 
<
E
y
e
O
f
f
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
 
:
 
<
E
y
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
o
r
m
F
i
e
l
d
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
s
u
b
m
i
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
l
o
a
d
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
g
r
o
u
p
 
w
-
f
u
l
l
 
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
6
 
p
y
-
3
.
5
 
b
g
-
l
i
m
e
-
4
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
5
0
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
h
o
v
e
r
:
b
g
-
l
i
m
e
-
3
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
b
o
r
d
e
r
-
0
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
?
 
"
C
r
e
a
t
i
n
g
 
a
c
c
o
u
n
t
.
.
.
"
 
:
 
"
C
r
e
a
t
e
 
a
c
c
o
u
n
t
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
l
o
a
d
i
n
g
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
R
i
g
h
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
t
r
a
n
s
i
t
i
o
n
-
t
r
a
n
s
f
o
r
m
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
y
 
c
r
e
a
t
i
n
g
 
a
n
 
a
c
c
o
u
n
t
 
y
o
u
 
a
g
r
e
e
 
t
o
 
o
u
r
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
t
e
r
m
s
"
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
2
0
 
p
b
-
0
.
5
 
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
r
m
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
d
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
p
r
i
v
a
c
y
"
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
2
0
 
p
b
-
0
.
5
 
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
i
v
a
c
y
 
p
o
l
i
c
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
f
o
r
m
>




 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
t
-
4
 
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
l
r
e
a
d
y
 
h
a
v
e
 
a
n
 
a
c
c
o
u
n
t
?
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
"
/
r
e
c
r
u
i
t
e
r
/
l
o
g
i
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
f
o
n
t
-
b
o
l
d
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
s
t
o
n
e
-
5
0
 
p
b
-
0
.
5
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
i
g
n
 
i
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
o
o
k
i
n
g
 
f
o
r
 
i
n
t
e
r
n
s
h
i
p
s
?
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
r
e
g
i
s
t
e
r
"
 
c
l
a
s
s
N
a
m
e
=
"
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
g
i
s
t
e
r
 
a
s
 
s
t
u
d
e
n
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
F
o
r
m
F
i
e
l
d
(
{


 
 
l
a
b
e
l
,


 
 
r
i
g
h
t
,


 
 
e
r
r
o
r
,


 
 
f
i
e
l
d
N
a
m
e
,


 
 
c
h
i
l
d
r
e
n
,


}
:
 
{


 
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;


 
 
r
i
g
h
t
?
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;


 
 
e
r
r
o
r
?
:
 
s
t
r
i
n
g
;


 
 
f
i
e
l
d
N
a
m
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


 
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;


}
)
 
{


 
 
c
o
n
s
t
 
e
r
r
o
r
I
d
 
=
 
f
i
e
l
d
N
a
m
e
 
?
 
`
e
r
r
o
r
-
$
{
f
i
e
l
d
N
a
m
e
}
`
 
:
 
u
n
d
e
f
i
n
e
d
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
m
b
-
1
.
5
"
>


 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
{
r
i
g
h
t
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
}


 
 
 
 
 
 
{
e
r
r
o
r
 
&
&
 
(


 
 
 
 
 
 
 
 
<
p
 
i
d
=
{
e
r
r
o
r
I
d
}
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
.
5
 
t
e
x
t
-
x
s
 
t
e
x
t
-
r
e
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
 
f
o
n
t
-
m
e
d
i
u
m
"
>


 
 
 
 
 
 
 
 
 
 
{
e
r
r
o
r
}


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
A
u
t
h
P
r
o
m
o
P
a
n
e
l
(
{


 
 
k
i
c
k
e
r
,


 
 
h
e
a
d
l
i
n
e
,


 
 
s
u
b
,


}
:
 
{


 
 
k
i
c
k
e
r
:
 
s
t
r
i
n
g
;


 
 
h
e
a
d
l
i
n
e
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;


 
 
s
u
b
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


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
h
i
d
d
e
n
 
l
g
:
f
l
e
x
 
r
e
l
a
t
i
v
e
 
f
l
e
x
-
c
o
l
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
p
-
1
2
 
x
l
:
p
-
1
6
 
b
g
-
s
t
o
n
e
-
9
0
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
<
d
i
v
 
a
r
i
a
-
h
i
d
d
e
n
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
o
p
a
c
i
t
y
-
[
0
.
0
6
]
 
a
u
t
h
-
p
r
o
m
o
-
d
o
t
s
"
 
/
>


 
 
 
 
 
 
<
d
i
v
 
a
r
i
a
-
h
i
d
d
e
n
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
a
u
t
h
-
p
r
o
m
o
-
l
i
n
e
s
"
 
/
>




 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
"
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
.
5
 
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
m
g
 
s
r
c
=
"
/
l
o
g
o
.
p
n
g
"
 
a
l
t
=
"
I
n
t
e
r
n
H
a
c
k
"
 
c
l
a
s
s
N
a
m
e
=
"
h
-
8
 
w
-
8
 
r
o
u
n
d
e
d
-
m
d
 
o
b
j
e
c
t
-
c
o
n
t
a
i
n
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
-
b
o
t
t
o
m
-
0
.
5
 
-
r
i
g
h
t
-
0
.
5
 
h
-
1
.
5
 
w
-
1
.
5
 
b
g
-
l
i
m
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
b
a
s
e
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
I
n
t
e
r
n
H
a
c
k


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
m
a
x
-
w
-
l
g
"
>


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
 
}
}


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
[
0
.
4
,
 
1
,
 
0
.
4
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
1
.
6
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,
 
e
a
s
e
:
 
"
e
a
s
e
I
n
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
h
-
1
.
5
 
w
-
1
.
5
 
b
g
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
{
k
i
c
k
e
r
}


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
6
 
t
e
x
t
-
4
x
l
 
x
l
:
t
e
x
t
-
5
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
{
h
e
a
d
l
i
n
e
}


 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
6
 
t
e
x
t
-
b
a
s
e
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
s
u
b
}
<
/
p
>




 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
2
 
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
p
x
 
b
g
-
w
h
i
t
e
/
1
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
x
l
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
s
t
o
n
e
-
9
0
0
 
p
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
2
x
l
 
x
l
:
t
e
x
t
-
3
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
7
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
i
m
e
-
4
0
0
"
>
d
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
r
e
e
 
t
r
i
a
l


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
s
t
o
n
e
-
9
0
0
 
p
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
2
x
l
 
x
l
:
t
e
x
t
-
3
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
1
4
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
i
m
e
-
4
0
0
"
>
/
<
/
s
p
a
n
>
1
4


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
 
m
o
d
u
l
e
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
s
t
o
n
e
-
9
0
0
 
p
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
2
x
l
 
x
l
:
t
e
x
t
-
3
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
1
0
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
l
i
m
e
-
4
0
0
"
>
m
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
 
f
i
r
s
t
 
p
o
s
t


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
n
o
 
c
a
r
d
 
r
e
q
u
i
r
e
d
.
 
c
a
n
c
e
l
 
a
n
y
 
t
i
m
e
.


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


