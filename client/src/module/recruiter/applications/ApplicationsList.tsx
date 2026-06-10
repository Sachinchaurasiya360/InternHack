
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
,
 
u
s
e
E
f
f
e
c
t
 
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
 
t
o
a
s
t
 
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
t
o
a
s
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
 
g
e
t
S
t
a
t
u
s
C
o
l
o
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
l
i
b
/
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
-
c
o
l
o
r
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
P
a
r
a
m
s
,
 
L
i
n
k
 
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
 
A
r
r
o
w
L
e
f
t
,
 
S
e
a
r
c
h
,
 
F
i
l
t
e
r
,
 
L
o
a
d
e
r
2
,
 
U
p
l
o
a
d
 
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
 
{
 
u
s
e
Q
u
e
r
y
,
 
u
s
e
Q
u
e
r
y
C
l
i
e
n
t
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
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
 
t
y
p
e
 
{
 
A
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
,
 
P
a
g
i
n
a
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
t
y
p
e
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
 
u
s
e
D
e
b
o
u
n
c
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
h
o
o
k
s
/
u
s
e
D
e
b
o
u
n
c
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
 
C
o
n
f
i
r
m
D
i
a
l
o
g
 
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
C
o
n
f
i
r
m
D
i
a
l
o
g
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
 
A
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
L
i
s
t
(
)
 
{


 
 
c
o
n
s
t
 
{
 
i
d
:
 
j
o
b
I
d
 
}
 
=
 
u
s
e
P
a
r
a
m
s
(
)
;


 
 
c
o
n
s
t
 
q
u
e
r
y
C
l
i
e
n
t
 
=
 
u
s
e
Q
u
e
r
y
C
l
i
e
n
t
(
)
;


 
 
c
o
n
s
t
 
[
s
e
a
r
c
h
,
 
s
e
t
S
e
a
r
c
h
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
 
d
e
b
o
u
n
c
e
d
S
e
a
r
c
h
 
=
 
u
s
e
D
e
b
o
u
n
c
e
(
s
e
a
r
c
h
,
 
3
0
0
)
;


 
 
c
o
n
s
t
 
[
s
t
a
t
u
s
F
i
l
t
e
r
,
 
s
e
t
S
t
a
t
u
s
F
i
l
t
e
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
p
a
g
e
,
 
s
e
t
P
a
g
e
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
1
)
;


 
 
c
o
n
s
t
 
[
u
p
d
a
t
i
n
g
I
d
,
 
s
e
t
U
p
d
a
t
i
n
g
I
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
<
n
u
m
b
e
r
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
a
d
v
a
n
c
i
n
g
I
d
s
,
 
s
e
t
A
d
v
a
n
c
i
n
g
I
d
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
S
e
t
<
n
u
m
b
e
r
>
>
(
(
)
 
=
>
 
n
e
w
 
S
e
t
(
)
)
;


 
 
c
o
n
s
t
 
[
p
e
n
d
i
n
g
A
d
v
a
n
c
e
A
p
p
,
 
s
e
t
P
e
n
d
i
n
g
A
d
v
a
n
c
e
A
p
p
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
A
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
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;




 
 
/
/
 
R
e
s
e
t
 
t
o
 
p
a
g
e
 
1
 
w
h
e
n
 
s
e
a
r
c
h
 
o
r
 
f
i
l
t
e
r
 
c
h
a
n
g
e
s


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
s
e
t
P
a
g
e
(
1
)
;


 
 
}
,
 
[
d
e
b
o
u
n
c
e
d
S
e
a
r
c
h
,
 
s
t
a
t
u
s
F
i
l
t
e
r
]
)
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
,
 
i
s
L
o
a
d
i
n
g
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
[
"
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
"
,
 
j
o
b
I
d
,
 
p
a
g
e
,
 
s
t
a
t
u
s
F
i
l
t
e
r
,
 
d
e
b
o
u
n
c
e
d
S
e
a
r
c
h
]
,


 
 
 
 
q
u
e
r
y
F
n
:
 
a
s
y
n
c
 
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
 
p
a
g
e
:
 
S
t
r
i
n
g
(
p
a
g
e
)
,
 
l
i
m
i
t
:
 
"
1
0
"
 
}
)
;


 
 
 
 
 
 
i
f
 
(
d
e
b
o
u
n
c
e
d
S
e
a
r
c
h
.
t
r
i
m
(
)
)
 
p
a
r
a
m
s
.
s
e
t
(
"
s
e
a
r
c
h
"
,
 
d
e
b
o
u
n
c
e
d
S
e
a
r
c
h
.
t
r
i
m
(
)
)
;


 
 
 
 
 
 
i
f
 
(
s
t
a
t
u
s
F
i
l
t
e
r
)
 
p
a
r
a
m
s
.
s
e
t
(
"
s
t
a
t
u
s
"
,
 
s
t
a
t
u
s
F
i
l
t
e
r
)
;


 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
 
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
g
e
t
(
`
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
j
o
b
s
/
$
{
j
o
b
I
d
}
/
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
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
 
 
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
:
 
r
e
s
.
d
a
t
a
.
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
 
a
s
 
A
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
[
]
,


 
 
 
 
 
 
 
 
p
a
g
i
n
a
t
i
o
n
:
 
r
e
s
.
d
a
t
a
.
p
a
g
i
n
a
t
i
o
n
 
a
s
 
P
a
g
i
n
a
t
i
o
n
,


 
 
 
 
 
 
}
;


 
 
 
 
}
,


 
 
}
)
;




 
 
c
o
n
s
t
 
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
 
=
 
d
a
t
a
?
.
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
 
?
?
 
[
]
;


 
 
c
o
n
s
t
 
p
a
g
i
n
a
t
i
o
n
 
=
 
d
a
t
a
?
.
p
a
g
i
n
a
t
i
o
n
 
?
?
 
n
u
l
l
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
t
a
t
u
s
C
h
a
n
g
e
 
=
 
a
s
y
n
c
 
(
a
p
p
I
d
:
 
n
u
m
b
e
r
,
 
s
t
a
t
u
s
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


 
 
 
 
i
f
 
(
u
p
d
a
t
i
n
g
I
d
 
=
=
=
 
a
p
p
I
d
)
 
r
e
t
u
r
n
;


 
 
 
 
s
e
t
U
p
d
a
t
i
n
g
I
d
(
a
p
p
I
d
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
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
a
t
c
h
(
`
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
/
$
{
a
p
p
I
d
}
/
s
t
a
t
u
s
`
,
 
{
 
s
t
a
t
u
s
 
}
)
;


 
 
 
 
 
 
q
u
e
r
y
C
l
i
e
n
t
.
i
n
v
a
l
i
d
a
t
e
Q
u
e
r
i
e
s
(
{
 
q
u
e
r
y
K
e
y
:
 
[
"
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
"
]
 
}
)
;


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
S
t
a
t
u
s
 
u
p
d
a
t
e
d
"
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
u
p
d
a
t
e
 
s
t
a
t
u
s
"
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
U
p
d
a
t
i
n
g
I
d
(
n
u
l
l
)
;


 
 
 
 
}


 
 
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
A
d
v
a
n
c
e
 
=
 
a
s
y
n
c
 
(
a
p
p
I
d
:
 
n
u
m
b
e
r
)
 
=
>
 
{


 
 
 
 
i
f
 
(
a
d
v
a
n
c
i
n
g
I
d
s
.
h
a
s
(
a
p
p
I
d
)
)
 
r
e
t
u
r
n
;


 
 
 
 
s
e
t
A
d
v
a
n
c
i
n
g
I
d
s
(
(
c
u
r
r
e
n
t
)
 
=
>
 
n
e
w
 
S
e
t
(
c
u
r
r
e
n
t
)
.
a
d
d
(
a
p
p
I
d
)
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
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
a
t
c
h
(
`
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
/
$
{
a
p
p
I
d
}
/
a
d
v
a
n
c
e
`
)
;


 
 
 
 
 
 
q
u
e
r
y
C
l
i
e
n
t
.
i
n
v
a
l
i
d
a
t
e
Q
u
e
r
i
e
s
(
{
 
q
u
e
r
y
K
e
y
:
 
[
"
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
"
]
 
}
)
;


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
A
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
 
a
d
v
a
n
c
e
d
"
)
;


 
 
 
 
 
 
s
e
t
P
e
n
d
i
n
g
A
d
v
a
n
c
e
A
p
p
(
n
u
l
l
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
a
d
v
a
n
c
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
"
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
A
d
v
a
n
c
i
n
g
I
d
s
(
(
c
u
r
r
e
n
t
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
 
=
 
n
e
w
 
S
e
t
(
c
u
r
r
e
n
t
)
;


 
 
 
 
 
 
 
 
n
e
x
t
.
d
e
l
e
t
e
(
a
p
p
I
d
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
x
t
;


 
 
 
 
 
 
}
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
A
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
"
 
n
o
I
n
d
e
x
 
/
>


 
 
 
 
 
 
<
C
o
n
f
i
r
m
D
i
a
l
o
g


 
 
 
 
 
 
 
 
o
p
e
n
=
{
p
e
n
d
i
n
g
A
d
v
a
n
c
e
A
p
p
 
!
=
=
 
n
u
l
l
}


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
A
d
v
a
n
c
e
 
C
a
n
d
i
d
a
t
e
?
"


 
 
 
 
 
 
 
 
c
o
n
f
i
r
m
L
a
b
e
l
=
"
C
o
n
f
i
r
m
 
A
d
v
a
n
c
e
"


 
 
 
 
 
 
 
 
c
a
n
c
e
l
L
a
b
e
l
=
"
C
a
n
c
e
l
"


 
 
 
 
 
 
 
 
c
o
n
f
i
r
m
V
a
r
i
a
n
t
=
"
p
r
i
m
a
r
y
"


 
 
 
 
 
 
 
 
l
o
a
d
i
n
g
=
{
p
e
n
d
i
n
g
A
d
v
a
n
c
e
A
p
p
 
?
 
a
d
v
a
n
c
i
n
g
I
d
s
.
h
a
s
(
p
e
n
d
i
n
g
A
d
v
a
n
c
e
A
p
p
.
i
d
)
 
:
 
f
a
l
s
e
}


 
 
 
 
 
 
 
 
o
n
C
a
n
c
e
l
=
{
(
)
 
=
>
 
s
e
t
P
e
n
d
i
n
g
A
d
v
a
n
c
e
A
p
p
(
n
u
l
l
)
}


 
 
 
 
 
 
 
 
o
n
C
o
n
f
i
r
m
=
{
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
p
e
n
d
i
n
g
A
d
v
a
n
c
e
A
p
p
 
&
&
 
!
a
d
v
a
n
c
i
n
g
I
d
s
.
h
a
s
(
p
e
n
d
i
n
g
A
d
v
a
n
c
e
A
p
p
.
i
d
)
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
h
a
n
d
l
e
A
d
v
a
n
c
e
(
p
e
n
d
i
n
g
A
d
v
a
n
c
e
A
p
p
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
p
e
n
d
i
n
g
A
d
v
a
n
c
e
A
p
p
 
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
r
e
 
y
o
u
 
s
u
r
e
 
y
o
u
 
w
a
n
t
 
t
o
 
a
d
v
a
n
c
e
 
<
s
t
r
o
n
g
 
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
s
e
m
i
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
w
h
i
t
e
"
>
{
p
e
n
d
i
n
g
A
d
v
a
n
c
e
A
p
p
.
s
t
u
d
e
n
t
?
.
n
a
m
e
}
<
/
s
t
r
o
n
g
>
 
t
o
 
t
h
e
 
n
e
x
t
 
h
i
r
i
n
g
 
s
t
a
g
e
?


 
 
 
 
 
 
 
 
 
 
 
 
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
 
t
e
x
t
-
a
m
b
e
r
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
a
m
b
e
r
-
4
0
0
 
b
g
-
a
m
b
e
r
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
a
m
b
e
r
-
9
5
0
/
2
0
 
p
-
2
.
5
 
r
o
u
n
d
e
d
-
l
g
 
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
a
m
b
e
r
-
2
0
0
/
3
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
a
m
b
e
r
-
9
0
0
/
3
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
r
m
a
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
a
r
n
i
n
g
:
 
A
d
v
a
n
c
i
n
g
 
t
h
i
s
 
c
a
n
d
i
d
a
t
e
 
w
i
l
l
 
u
p
d
a
t
e
 
t
h
e
i
r
 
h
i
r
i
n
g
 
s
t
a
g
e
 
a
n
d
 
c
r
e
a
t
e
 
a
 
n
e
w
 
r
o
u
n
d
 
s
u
b
m
i
s
s
i
o
n
.


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
C
o
n
f
i
r
m
D
i
a
l
o
g
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
/
j
o
b
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
 
t
e
x
t
-
g
r
a
y
-
5
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
g
r
a
y
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
b
l
a
c
k
 
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
w
h
i
t
e
 
m
b
-
4
 
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
A
r
r
o
w
L
e
f
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
"
 
/
>
 
B
a
c
k
 
t
o
 
J
o
b
s


 
 
 
 
 
 
<
/
L
i
n
k
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
2
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
e
x
t
-
g
r
a
y
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
w
h
i
t
e
 
m
b
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
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
A
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


 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
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
/
j
o
b
s
/
$
{
j
o
b
I
d
}
/
i
m
p
o
r
t
-
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
`
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
1
.
5
 
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
m
e
d
i
u
m
 
p
x
-
4
 
p
y
-
2
 
b
g
-
b
l
a
c
k
 
d
a
r
k
:
b
g
-
w
h
i
t
e
 
t
e
x
t
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
t
e
x
t
-
g
r
a
y
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
x
l
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
8
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
b
g
-
g
r
a
y
-
2
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
U
p
l
o
a
d
 
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
 
I
m
p
o
r
t
 
C
a
n
d
i
d
a
t
e
s


 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
<
/
h
1
>




 
 
 
 
 
 
{
/
*
 
F
i
l
t
e
r
s
 
*
/
}


 
 
 
 
 
 
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
 
g
a
p
-
3
 
m
b
-
6
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
f
l
e
x
-
1
 
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
S
e
a
r
c
h
 
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
 
l
e
f
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
 
w
-
4
 
h
-
4
 
t
e
x
t
-
g
r
a
y
-
4
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
g
r
a
y
-
5
0
0
"
 
/
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
s
e
a
r
c
h
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
S
e
a
r
c
h
(
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
l
a
b
e
l
=
"
S
e
a
r
c
h
 
a
p
p
l
i
c
a
n
t
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
w
-
f
u
l
l
 
p
l
-
1
0
 
p
r
-
4
 
p
y
-
2
.
5
 
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
g
r
a
y
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
g
r
a
y
-
6
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
x
l
 
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
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
t
e
x
t
-
s
m
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
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
g
r
a
y
-
5
0
0
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
S
e
a
r
c
h
 
b
y
 
n
a
m
e
 
o
r
 
e
m
a
i
l
.
.
.
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
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
<
F
i
l
t
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
w
-
4
 
h
-
4
 
t
e
x
t
-
g
r
a
y
-
4
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
g
r
a
y
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t
 
v
a
l
u
e
=
{
s
t
a
t
u
s
F
i
l
t
e
r
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
 
{
 
s
e
t
S
t
a
t
u
s
F
i
l
t
e
r
(
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
;
 
s
e
t
P
a
g
e
(
1
)
;
 
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
p
x
-
3
 
p
y
-
2
.
5
 
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
g
r
a
y
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
g
r
a
y
-
6
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
x
l
 
t
e
x
t
-
s
m
 
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
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
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
w
h
i
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
"
>
A
l
l
 
S
t
a
t
u
s
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
A
P
P
L
I
E
D
"
>
A
p
p
l
i
e
d
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
I
N
_
P
R
O
G
R
E
S
S
"
>
I
n
 
P
r
o
g
r
e
s
s
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
S
H
O
R
T
L
I
S
T
E
D
"
>
S
h
o
r
t
l
i
s
t
e
d
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
R
E
J
E
C
T
E
D
"
>
R
e
j
e
c
t
e
d
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
H
I
R
E
D
"
>
H
i
r
e
d
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
W
I
T
H
D
R
A
W
N
"
>
W
i
t
h
d
r
a
w
n
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
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




 
 
 
 
 
 
{
i
s
L
o
a
d
i
n
g
 
?
 
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
g
r
a
y
-
9
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
x
l
 
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
g
r
a
y
-
1
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
g
r
a
y
-
8
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
n
i
m
a
t
e
-
p
u
l
s
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
[
.
.
.
A
r
r
a
y
(
5
)
]
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
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
 
p
x
-
6
 
p
y
-
5
 
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
g
r
a
y
-
1
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
g
r
a
y
-
8
0
0
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
-
4
 
w
-
3
2
 
b
g
-
g
r
a
y
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
g
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
"
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
h
-
3
 
w
-
4
8
 
b
g
-
g
r
a
y
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
g
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
"
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
h
-
6
 
w
-
2
4
 
b
g
-
g
r
a
y
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
g
-
g
r
a
y
-
7
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
f
u
l
l
"
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
h
-
4
 
w
-
1
6
 
b
g
-
g
r
a
y
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
g
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
"
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
h
-
4
 
w
-
2
0
 
b
g
-
g
r
a
y
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
g
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
"
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
f
l
e
x
 
g
a
p
-
2
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
h
-
8
 
w
-
2
0
 
b
g
-
g
r
a
y
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
g
-
g
r
a
y
-
7
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
l
g
"
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
h
-
8
 
w
-
1
6
 
b
g
-
g
r
a
y
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
g
-
g
r
a
y
-
7
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
l
g
"
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


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
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
 
:
 
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
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
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
t
e
x
t
-
c
e
n
t
e
r
 
p
y
-
1
6
 
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
g
r
a
y
-
9
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
x
l
 
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
g
r
a
y
-
1
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
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
-
5
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
g
r
a
y
-
5
0
0
"
>
N
o
 
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
 
f
o
u
n
d
<
/
d
i
v
>


 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
<
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
g
r
a
y
-
9
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
x
l
 
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
g
r
a
y
-
1
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
g
r
a
y
-
8
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
t
a
b
l
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
f
u
l
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
g
r
a
y
-
1
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
g
r
a
y
-
8
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
s
c
o
p
e
=
"
c
o
l
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
l
e
f
t
 
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
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
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
g
r
a
y
-
5
0
0
 
u
p
p
e
r
c
a
s
e
 
p
x
-
6
 
p
y
-
3
"
>
C
a
n
d
i
d
a
t
e
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
s
c
o
p
e
=
"
c
o
l
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
l
e
f
t
 
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
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
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
g
r
a
y
-
5
0
0
 
u
p
p
e
r
c
a
s
e
 
p
x
-
6
 
p
y
-
3
"
>
S
t
a
t
u
s
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
s
c
o
p
e
=
"
c
o
l
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
l
e
f
t
 
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
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
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
g
r
a
y
-
5
0
0
 
u
p
p
e
r
c
a
s
e
 
p
x
-
6
 
p
y
-
3
"
>
R
o
u
n
d
s
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
s
c
o
p
e
=
"
c
o
l
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
l
e
f
t
 
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
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
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
g
r
a
y
-
5
0
0
 
u
p
p
e
r
c
a
s
e
 
p
x
-
6
 
p
y
-
3
"
>
A
p
p
l
i
e
d
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
s
c
o
p
e
=
"
c
o
l
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
l
e
f
t
 
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
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
5
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
g
r
a
y
-
5
0
0
 
u
p
p
e
r
c
a
s
e
 
p
x
-
6
 
p
y
-
3
"
>
A
c
t
i
o
n
s
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
b
o
d
y
 
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
d
i
v
i
d
e
-
y
 
d
i
v
i
d
e
-
g
r
a
y
-
5
0
 
d
a
r
k
:
d
i
v
i
d
e
-
g
r
a
y
-
8
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
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
.
m
a
p
(
(
a
p
p
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
d
v
a
n
c
i
n
g
 
=
 
a
d
v
a
n
c
i
n
g
I
d
s
.
h
a
s
(
a
p
p
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
t
r
 
k
e
y
=
{
a
p
p
.
i
d
}
 
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
e
l
a
y
:
 
i
 
*
 
0
.
0
3
 
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
o
v
e
r
:
b
g
-
g
r
a
y
-
5
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
b
g
-
g
r
a
y
-
8
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
x
-
6
 
p
y
-
4
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
{
`
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
/
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
/
$
{
a
p
p
.
i
d
}
`
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
 
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
 
b
l
o
c
k
 
m
a
x
-
w
-
[
2
0
0
p
x
]
 
t
r
u
n
c
a
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
a
p
p
.
s
t
u
d
e
n
t
?
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
p
p
.
s
t
u
d
e
n
t
?
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
m
 
t
e
x
t
-
g
r
a
y
-
5
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
g
r
a
y
-
5
0
0
 
b
l
o
c
k
 
m
a
x
-
w
-
[
2
0
0
p
x
]
 
t
r
u
n
c
a
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
a
p
p
.
s
t
u
d
e
n
t
?
.
e
m
a
i
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
p
p
.
s
t
u
d
e
n
t
?
.
e
m
a
i
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
x
-
6
 
p
y
-
4
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
a
p
p
.
s
t
a
t
u
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
u
p
d
a
t
i
n
g
I
d
 
=
=
=
 
a
p
p
.
i
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
S
t
a
t
u
s
C
h
a
n
g
e
(
a
p
p
.
i
d
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
t
e
x
t
-
x
s
 
p
x
-
2
.
5
 
p
y
-
1
 
r
o
u
n
d
e
d
-
f
u
l
l
 
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
 
b
o
r
d
e
r
-
0
 
$
{
g
e
t
S
t
a
t
u
s
C
o
l
o
r
(
a
p
p
.
s
t
a
t
u
s
)
}
 
$
{
u
p
d
a
t
i
n
g
I
d
 
=
=
=
 
a
p
p
.
i
d
 
?
 
"
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
 
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
"
 
:
 
"
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
A
P
P
L
I
E
D
"
>
A
p
p
l
i
e
d
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
I
N
_
P
R
O
G
R
E
S
S
"
>
I
n
 
P
r
o
g
r
e
s
s
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
S
H
O
R
T
L
I
S
T
E
D
"
>
S
h
o
r
t
l
i
s
t
e
d
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
R
E
J
E
C
T
E
D
"
>
R
e
j
e
c
t
e
d
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
H
I
R
E
D
"
>
H
i
r
e
d
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
W
I
T
H
D
R
A
W
N
"
>
W
i
t
h
d
r
a
w
n
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
p
d
a
t
i
n
g
I
d
 
=
=
=
 
a
p
p
.
i
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
v
g
 
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
n
i
m
a
t
e
-
s
p
i
n
 
m
l
-
1
.
5
 
h
-
3
 
w
-
3
 
t
e
x
t
-
g
r
a
y
-
5
0
0
"
 
x
m
l
n
s
=
"
h
t
t
p
:
/
/
w
w
w
.
w
3
.
o
r
g
/
2
0
0
0
/
s
v
g
"
 
f
i
l
l
=
"
n
o
n
e
"
 
v
i
e
w
B
o
x
=
"
0
 
0
 
2
4
 
2
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
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
o
p
a
c
i
t
y
-
2
5
"
 
c
x
=
"
1
2
"
 
c
y
=
"
1
2
"
 
r
=
"
1
0
"
 
s
t
r
o
k
e
=
"
c
u
r
r
e
n
t
C
o
l
o
r
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
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
o
p
a
c
i
t
y
-
7
5
"
 
f
i
l
l
=
"
c
u
r
r
e
n
t
C
o
l
o
r
"
 
d
=
"
M
4
 
1
2
a
8
 
8
 
0
 
0
1
8
-
8
V
0
C
5
.
3
7
3
 
0
 
1
2
 
0
 
1
2
 
1
2
H
4
z
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
v
g
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
x
-
6
 
p
y
-
4
 
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
g
r
a
y
-
5
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
g
r
a
y
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
p
p
.
r
o
u
n
d
S
u
b
m
i
s
s
i
o
n
s
?
.
l
e
n
g
t
h
 
|
|
 
0
}
 
c
o
m
p
l
e
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
x
-
6
 
p
y
-
4
 
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
g
r
a
y
-
5
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
g
r
a
y
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
e
w
 
I
n
t
l
.
D
a
t
e
T
i
m
e
F
o
r
m
a
t
(
"
e
n
-
U
S
"
,
 
{
 
y
e
a
r
:
 
"
n
u
m
e
r
i
c
"
,
 
m
o
n
t
h
:
 
"
s
h
o
r
t
"
,
 
d
a
y
:
 
"
n
u
m
e
r
i
c
"
,
 
t
i
m
e
Z
o
n
e
:
 
"
U
T
C
"
 
}
)
.
f
o
r
m
a
t
(
n
e
w
 
D
a
t
e
(
a
p
p
.
c
r
e
a
t
e
d
A
t
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
x
-
6
 
p
y
-
4
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
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
P
e
n
d
i
n
g
A
d
v
a
n
c
e
A
p
p
(
a
p
p
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
i
s
A
d
v
a
n
c
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
{
`
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
 
m
i
n
-
w
-
2
1
.
5
 
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
 
p
x
-
3
 
p
y
-
1
.
5
 
b
g
-
b
l
a
c
k
 
d
a
r
k
:
b
g
-
w
h
i
t
e
 
t
e
x
t
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
t
e
x
t
-
g
r
a
y
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
l
g
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
8
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
b
g
-
g
r
a
y
-
2
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
 
$
{
i
s
A
d
v
a
n
c
i
n
g
 
?
 
"
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
 
o
p
a
c
i
t
y
-
7
0
"
 
:
 
"
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
A
d
v
a
n
c
i
n
g
 
&
&
 
<
L
o
a
d
e
r
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
h
-
3
 
w
-
3
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
A
d
v
a
n
c
i
n
g
 
?
 
"
A
d
v
a
n
c
i
n
g
"
 
:
 
"
A
d
v
a
n
c
e
"
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
L
i
n
k
 
t
o
=
{
`
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
/
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
/
$
{
a
p
p
.
i
d
}
`
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
t
e
x
t
-
x
s
 
p
x
-
3
 
p
y
-
1
.
5
 
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
g
r
a
y
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
g
r
a
y
-
6
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
l
g
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
5
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
b
g
-
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
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
g
r
a
y
-
4
0
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
V
i
e
w


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
/
t
d
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
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
a
b
l
e
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
a
g
i
n
a
t
i
o
n
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
p
a
g
i
n
a
t
i
o
n
 
&
&
 
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
P
a
g
e
s
 
>
 
1
 
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
 
m
t
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
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
P
a
g
e
(
M
a
t
h
.
m
a
x
(
1
,
 
p
a
g
e
 
-
 
1
)
)
}
 
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
p
a
g
e
 
=
=
=
 
1
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
"
G
o
 
t
o
 
p
r
e
v
i
o
u
s
 
p
a
g
e
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
p
x
-
3
 
p
y
-
1
.
5
 
t
e
x
t
-
s
m
 
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
g
r
a
y
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
g
r
a
y
-
6
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
l
g
 
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
3
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
g
r
a
y
-
3
0
0
"
>
P
r
e
v
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
m
 
t
e
x
t
-
g
r
a
y
-
5
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
g
r
a
y
-
5
0
0
"
>
P
a
g
e
 
{
p
a
g
e
}
 
o
f
 
{
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
P
a
g
e
s
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
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
P
a
g
e
(
M
a
t
h
.
m
i
n
(
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
P
a
g
e
s
,
 
p
a
g
e
 
+
 
1
)
)
}
 
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
p
a
g
e
 
=
=
=
 
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
P
a
g
e
s
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
`
G
o
 
t
o
 
n
e
x
t
 
p
a
g
e
,
 
p
a
g
e
 
$
{
p
a
g
e
 
+
 
1
}
`
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
p
x
-
3
 
p
y
-
1
.
5
 
t
e
x
t
-
s
m
 
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
g
r
a
y
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
g
r
a
y
-
6
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
l
g
 
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
3
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
g
r
a
y
-
3
0
0
"
>
N
e
x
t
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


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
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
