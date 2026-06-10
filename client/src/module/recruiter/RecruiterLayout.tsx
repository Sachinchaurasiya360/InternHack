
i
m
p
o
r
t
 
{
 
S
u
s
p
e
n
s
e
,
 
s
t
a
r
t
T
r
a
n
s
i
t
i
o
n
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
,
 
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
 
N
a
v
L
i
n
k
,
 
L
i
n
k
,
 
O
u
t
l
e
t
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
,
 
u
s
e
L
o
c
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
 
L
a
y
o
u
t
D
a
s
h
b
o
a
r
d
,
 
B
r
i
e
f
c
a
s
e
,
 
S
e
a
r
c
h
,
 
L
o
g
O
u
t
,
 
C
h
e
v
r
o
n
s
L
e
f
t
,
 
C
h
e
v
r
o
n
s
R
i
g
h
t
,
 
U
s
e
r
s
,
 
U
s
e
r
,
 
M
e
n
u
,
 
X
,
 
C
h
e
v
r
o
n
D
o
w
n
,
 
B
a
r
C
h
a
r
t
3
,
 
B
u
i
l
d
i
n
g
2
,
 
C
a
l
e
n
d
a
r
D
a
y
s
,
 
C
l
o
c
k
,
 
V
i
d
e
o
,
 
C
h
e
c
k
S
q
u
a
r
e
,
 
A
w
a
r
d
,
 
W
a
l
l
e
t
,
 
R
e
c
e
i
p
t
,
 
U
s
e
r
P
l
u
s
,
 
S
h
i
e
l
d
C
h
e
c
k
,
 
G
i
t
B
r
a
n
c
h
,
 
K
e
y
,
 
U
s
e
r
C
i
r
c
l
e
,
 
B
o
o
k
m
a
r
k
 
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
 
N
a
v
b
a
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
N
a
v
b
a
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




t
y
p
e
 
N
a
v
I
t
e
m
 
=
 
{


 
 
t
o
:
 
s
t
r
i
n
g
;


 
 
i
c
o
n
:
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
T
y
p
e
<
{
 
c
l
a
s
s
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
 
}
>
;


 
 
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


 
 
e
n
d
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


 
 
c
o
m
i
n
g
S
o
o
n
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


}
;




c
o
n
s
t
 
R
E
C
R
U
I
T
M
E
N
T
_
I
T
E
M
S
:
 
N
a
v
I
t
e
m
[
]
 
=
 
[


 
 
{
 
t
o
:
 
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
,
 
i
c
o
n
:
 
L
a
y
o
u
t
D
a
s
h
b
o
a
r
d
,
 
l
a
b
e
l
:
 
"
D
a
s
h
b
o
a
r
d
"
,
 
e
n
d
:
 
t
r
u
e
 
}
,


 
 
{
 
t
o
:
 
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
,
 
i
c
o
n
:
 
B
r
i
e
f
c
a
s
e
,
 
l
a
b
e
l
:
 
"
M
y
 
J
o
b
s
"
 
}
,


 
 
{
 
t
o
:
 
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
t
a
l
e
n
t
-
s
e
a
r
c
h
"
,
 
i
c
o
n
:
 
S
e
a
r
c
h
,
 
l
a
b
e
l
:
 
"
T
a
l
e
n
t
 
S
e
a
r
c
h
"
 
}
,


 
 
{
 
t
o
:
 
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
s
a
v
e
d
"
,
 
i
c
o
n
:
 
B
o
o
k
m
a
r
k
,
 
l
a
b
e
l
:
 
"
S
a
v
e
d
"
 
}
,


]
;




c
o
n
s
t
 
H
R
_
I
T
E
M
S
:
 
N
a
v
I
t
e
m
[
]
 
=
 
[


 
 
{
 
t
o
:
 
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
h
r
"
,
 
i
c
o
n
:
 
B
a
r
C
h
a
r
t
3
,
 
l
a
b
e
l
:
 
"
H
R
 
D
a
s
h
b
o
a
r
d
"
,
 
e
n
d
:
 
t
r
u
e
 
}
,


 
 
{
 
t
o
:
 
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
h
r
/
e
m
p
l
o
y
e
e
s
"
,
 
i
c
o
n
:
 
U
s
e
r
s
,
 
l
a
b
e
l
:
 
"
E
m
p
l
o
y
e
e
s
"
 
}
,


 
 
{
 
t
o
:
 
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
h
r
/
d
e
p
a
r
t
m
e
n
t
s
"
,
 
i
c
o
n
:
 
B
u
i
l
d
i
n
g
2
,
 
l
a
b
e
l
:
 
"
D
e
p
a
r
t
m
e
n
t
s
"
 
}
,


 
 
{
 
t
o
:
 
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
h
r
/
l
e
a
v
e
"
,
 
i
c
o
n
:
 
C
a
l
e
n
d
a
r
D
a
y
s
,
 
l
a
b
e
l
:
 
"
L
e
a
v
e
"
 
}
,


 
 
{
 
t
o
:
 
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
h
r
/
a
t
t
e
n
d
a
n
c
e
"
,
 
i
c
o
n
:
 
C
l
o
c
k
,
 
l
a
b
e
l
:
 
"
A
t
t
e
n
d
a
n
c
e
"
 
}
,


 
 
{
 
t
o
:
 
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
h
r
/
i
n
t
e
r
v
i
e
w
s
"
,
 
i
c
o
n
:
 
V
i
d
e
o
,
 
l
a
b
e
l
:
 
"
I
n
t
e
r
v
i
e
w
s
"
 
}
,


 
 
{
 
t
o
:
 
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
h
r
/
t
a
s
k
s
"
,
 
i
c
o
n
:
 
C
h
e
c
k
S
q
u
a
r
e
,
 
l
a
b
e
l
:
 
"
T
a
s
k
s
"
 
}
,


 
 
{
 
t
o
:
 
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
h
r
/
p
e
r
f
o
r
m
a
n
c
e
"
,
 
i
c
o
n
:
 
A
w
a
r
d
,
 
l
a
b
e
l
:
 
"
P
e
r
f
o
r
m
a
n
c
e
"
 
}
,


 
 
{
 
t
o
:
 
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
h
r
/
p
a
y
r
o
l
l
"
,
 
i
c
o
n
:
 
W
a
l
l
e
t
,
 
l
a
b
e
l
:
 
"
P
a
y
r
o
l
l
"
,
 
c
o
m
i
n
g
S
o
o
n
:
 
t
r
u
e
 
}
,


 
 
{
 
t
o
:
 
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
h
r
/
r
e
i
m
b
u
r
s
e
m
e
n
t
s
"
,
 
i
c
o
n
:
 
R
e
c
e
i
p
t
,
 
l
a
b
e
l
:
 
"
R
e
i
m
b
u
r
s
e
m
e
n
t
s
"
,
 
c
o
m
i
n
g
S
o
o
n
:
 
t
r
u
e
 
}
,


 
 
{
 
t
o
:
 
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
h
r
/
o
n
b
o
a
r
d
i
n
g
"
,
 
i
c
o
n
:
 
U
s
e
r
P
l
u
s
,
 
l
a
b
e
l
:
 
"
O
n
b
o
a
r
d
i
n
g
"
 
}
,


 
 
{
 
t
o
:
 
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
h
r
/
c
o
m
p
l
i
a
n
c
e
"
,
 
i
c
o
n
:
 
S
h
i
e
l
d
C
h
e
c
k
,
 
l
a
b
e
l
:
 
"
C
o
m
p
l
i
a
n
c
e
"
 
}
,


 
 
{
 
t
o
:
 
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
h
r
/
w
o
r
k
f
l
o
w
s
"
,
 
i
c
o
n
:
 
G
i
t
B
r
a
n
c
h
,
 
l
a
b
e
l
:
 
"
W
o
r
k
f
l
o
w
s
"
 
}
,


 
 
{
 
t
o
:
 
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
h
r
/
r
o
l
e
s
"
,
 
i
c
o
n
:
 
K
e
y
,
 
l
a
b
e
l
:
 
"
R
o
l
e
s
 
&
 
A
c
c
e
s
s
"
 
}
,


]
;




c
o
n
s
t
 
A
C
C
O
U
N
T
_
I
T
E
M
S
:
 
N
a
v
I
t
e
m
[
]
 
=
 
[


 
 
{
 
t
o
:
 
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
p
r
o
f
i
l
e
"
,
 
i
c
o
n
:
 
U
s
e
r
C
i
r
c
l
e
,
 
l
a
b
e
l
:
 
"
M
y
 
P
r
o
f
i
l
e
"
 
}
,


]
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
L
a
y
o
u
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
 
u
s
e
r
,
 
l
o
g
o
u
t
 
}
 
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
)
;


 
 
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
c
a
t
i
o
n
 
=
 
u
s
e
L
o
c
a
t
i
o
n
(
)
;


 
 
c
o
n
s
t
 
[
c
o
l
l
a
p
s
e
d
,
 
s
e
t
C
o
l
l
a
p
s
e
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
(
)
 
=
>
 
{


 
 
 
 
r
e
t
u
r
n
 
l
o
c
a
l
S
t
o
r
a
g
e
.
g
e
t
I
t
e
m
(
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
-
s
i
d
e
b
a
r
-
c
o
l
l
a
p
s
e
d
"
)
 
=
=
=
 
"
t
r
u
e
"
;


 
 
}
)
;


 
 
c
o
n
s
t
 
[
m
o
b
i
l
e
O
p
e
n
,
 
s
e
t
M
o
b
i
l
e
O
p
e
n
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
h
r
E
x
p
a
n
d
e
d
,
 
s
e
t
H
r
E
x
p
a
n
d
e
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
(
)
 
=
>
 
l
o
c
a
l
S
t
o
r
a
g
e
.
g
e
t
I
t
e
m
(
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
-
h
r
-
e
x
p
a
n
d
e
d
"
)
 
!
=
=
 
"
f
a
l
s
e
"
)
;


 
 
c
o
n
s
t
 
[
i
m
g
E
r
r
o
r
,
 
s
e
t
I
m
g
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
f
a
l
s
e
)
;




 
 
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
 
s
t
a
r
t
T
r
a
n
s
i
t
i
o
n
(
(
)
 
=
>
 
s
e
t
M
o
b
i
l
e
O
p
e
n
(
f
a
l
s
e
)
)
;
 
}
,
 
[
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
]
)
;




 
 
c
o
n
s
t
 
i
s
H
R
A
c
t
i
v
e
 
=
 
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
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
h
r
"
)
;




 
 
c
o
n
s
t
 
t
o
g
g
l
e
H
R
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
H
r
E
x
p
a
n
d
e
d
(
(
p
r
e
v
)
 
=
>
 
{


 
 
 
 
 
 
l
o
c
a
l
S
t
o
r
a
g
e
.
s
e
t
I
t
e
m
(
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
-
h
r
-
e
x
p
a
n
d
e
d
"
,
 
S
t
r
i
n
g
(
!
p
r
e
v
)
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
!
p
r
e
v
;


 
 
 
 
}
)
;


 
 
}
;




 
 
c
o
n
s
t
 
t
o
g
g
l
e
S
i
d
e
b
a
r
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
C
o
l
l
a
p
s
e
d
(
(
p
r
e
v
)
 
=
>
 
{


 
 
 
 
 
 
l
o
c
a
l
S
t
o
r
a
g
e
.
s
e
t
I
t
e
m
(
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
-
s
i
d
e
b
a
r
-
c
o
l
l
a
p
s
e
d
"
,
 
S
t
r
i
n
g
(
!
p
r
e
v
)
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
!
p
r
e
v
;


 
 
 
 
}
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
L
o
g
o
u
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
l
o
g
o
u
t
(
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
"
)
;


 
 
}
;




 
 
c
o
n
s
t
 
s
i
d
e
b
a
r
W
i
d
t
h
 
=
 
c
o
l
l
a
p
s
e
d
 
?
 
7
2
 
:
 
2
5
6
;


 
 
c
o
n
s
t
 
d
i
s
p
l
a
y
N
a
m
e
 
=
 
u
s
e
r
?
.
c
o
m
p
a
n
y
 
|
|
 
u
s
e
r
?
.
n
a
m
e
 
|
|
 
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
"
;




 
 
c
o
n
s
t
 
a
v
a
t
a
r
 
=
 
(
s
i
z
e
:
 
"
s
m
"
 
|
 
"
m
d
"
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
d
i
m
 
=
 
s
i
z
e
 
=
=
=
 
"
s
m
"
 
?
 
"
w
-
8
 
h
-
8
"
 
:
 
"
w
-
9
 
h
-
9
"
;


 
 
 
 
c
o
n
s
t
 
i
c
o
n
 
=
 
s
i
z
e
 
=
=
=
 
"
s
m
"
 
?
 
"
w
-
4
 
h
-
4
"
 
:
 
"
w
-
5
 
h
-
5
"
;


 
 
 
 
i
f
 
(
u
s
e
r
?
.
p
r
o
f
i
l
e
P
i
c
 
&
&
 
!
i
m
g
E
r
r
o
r
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
i
m
g


 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
u
s
e
r
.
p
r
o
f
i
l
e
P
i
c
}


 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
u
s
e
r
.
n
a
m
e
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
$
{
d
i
m
}
 
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
v
e
r
 
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
w
h
i
t
e
/
1
0
`
}


 
 
 
 
 
 
 
 
 
 
o
n
E
r
r
o
r
=
{
(
)
 
=
>
 
s
e
t
I
m
g
E
r
r
o
r
(
t
r
u
e
)
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
)
;


 
 
 
 
}


 
 
 
 
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
{
`
$
{
d
i
m
}
 
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
 
b
g
-
s
t
o
n
e
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
g
-
s
t
o
n
e
-
8
0
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
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
`
}
>


 
 
 
 
 
 
 
 
<
U
s
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
{
`
$
{
i
c
o
n
}
 
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
`
}
 
/
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
;




 
 
c
o
n
s
t
 
r
e
n
d
e
r
N
a
v
I
t
e
m
 
=
 
(
i
t
e
m
:
 
N
a
v
I
t
e
m
)
 
=
>
 
(


 
 
 
 
<
l
i
 
k
e
y
=
{
i
t
e
m
.
t
o
}
>


 
 
 
 
 
 
<
N
a
v
L
i
n
k


 
 
 
 
 
 
 
 
t
o
=
{
i
t
e
m
.
t
o
}


 
 
 
 
 
 
 
 
e
n
d
=
{
i
t
e
m
.
e
n
d
}


 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
c
o
l
l
a
p
s
e
d
 
?
 
i
t
e
m
.
l
a
b
e
l
 
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
M
o
b
i
l
e
O
p
e
n
(
f
a
l
s
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
(
{
 
i
s
A
c
t
i
v
e
 
}
)
 
=
>


 
 
 
 
 
 
 
 
 
 
`
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
 
g
a
p
-
3
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
l
a
p
s
e
d
 
?
 
"
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
2
 
p
y
-
2
"
 
:
 
"
p
x
-
3
 
p
y
-
2
"


 
 
 
 
 
 
 
 
 
 
}
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
i
s
A
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
5
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
9
0
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
 
h
o
v
e
r
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
1
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
s
t
o
n
e
-
9
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


 
 
 
 
 
 
 
 
 
 
}
`


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
(
{
 
i
s
A
c
t
i
v
e
 
}
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
A
c
t
i
v
e
 
&
&
 
!
c
o
l
l
a
p
s
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
l
e
f
t
-
0
 
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
 
h
-
4
 
w
-
0
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


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
i
t
e
m
.
i
c
o
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
w
-
4
 
h
-
4
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
!
c
o
l
l
a
p
s
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
r
u
n
c
a
t
e
"
>
{
i
t
e
m
.
l
a
b
e
l
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
c
o
m
i
n
g
S
o
o
n
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
m
l
-
a
u
t
o
 
s
h
r
i
n
k
-
0
 
t
e
x
t
-
[
9
p
x
]
 
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
5
 
p
x
-
1
.
5
 
p
y
-
0
.
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
o
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
N
a
v
L
i
n
k
>


 
 
 
 
<
/
l
i
>


 
 
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
 
D
a
s
h
b
o
a
r
d
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




 
 
 
 
 
 
{
/
*
 
N
a
v
b
a
r
,
 
h
i
d
d
e
n
 
o
n
 
m
o
b
i
l
e
,
 
m
o
b
i
l
e
 
t
o
p
 
b
a
r
 
r
e
p
l
a
c
e
s
 
i
t
 
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
h
i
d
d
e
n
 
l
g
:
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
<
N
a
v
b
a
r
 
s
i
d
e
b
a
r
O
f
f
s
e
t
=
{
s
i
d
e
b
a
r
W
i
d
t
h
}
 
/
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
 
M
o
b
i
l
e
 
t
o
p
 
b
a
r
 
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
i
x
e
d
 
t
o
p
-
0
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
z
-
4
0
 
l
g
:
h
i
d
d
e
n
 
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
w
h
i
t
e
/
1
0
 
p
x
-
4
 
p
y
-
3
 
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
3
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
M
o
b
i
l
e
O
p
e
n
(
t
r
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
O
p
e
n
 
m
e
n
u
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
-
2
 
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
 
h
o
v
e
r
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
1
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
o
r
d
e
r
-
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


 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
n
u
 
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
5
 
h
-
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
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
/
d
i
v
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
p
r
o
f
i
l
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


 
 
 
 
 
 
 
 
 
 
{
a
v
a
t
a
r
(
"
s
m
"
)
}


 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
{
/
*
 
M
o
b
i
l
e
 
o
v
e
r
l
a
y
 
*
/
}


 
 
 
 
 
 
{
m
o
b
i
l
e
O
p
e
n
 
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
i
x
e
d
 
i
n
s
e
t
-
0
 
z
-
4
0
 
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
/
6
0
 
l
g
:
h
i
d
d
e
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
M
o
b
i
l
e
O
p
e
n
(
f
a
l
s
e
)
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
S
i
d
e
b
a
r
 
*
/
}


 
 
 
 
 
 
<
a
s
i
d
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
{
`
f
i
x
e
d
 
t
o
p
-
0
 
l
e
f
t
-
0
 
h
-
s
c
r
e
e
n
 
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
 
b
o
r
d
e
r
-
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
w
h
i
t
e
/
1
0
 
f
l
e
x
 
f
l
e
x
-
c
o
l
 
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
a
l
l
 
d
u
r
a
t
i
o
n
-
3
0
0
 
z
-
5
0
 
$
{


 
 
 
 
 
 
 
 
 
 
c
o
l
l
a
p
s
e
d
 
?
 
"
w
-
1
8
"
 
:
 
"
w
-
6
4
"


 
 
 
 
 
 
 
 
}
 
$
{
m
o
b
i
l
e
O
p
e
n
 
?
 
"
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
"
 
:
 
"
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
x
-
f
u
l
l
"
}
 
l
g
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
`
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
M
o
b
i
l
e
 
c
l
o
s
e
 
b
u
t
t
o
n
 
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
 
j
u
s
t
i
f
y
-
e
n
d
 
p
x
-
5
 
p
t
-
4
 
p
b
-
2
 
l
g
:
h
i
d
d
e
n
 
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
w
h
i
t
e
/
1
0
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
M
o
b
i
l
e
O
p
e
n
(
f
a
l
s
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
C
l
o
s
e
 
m
e
n
u
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
-
1
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
m
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
 
h
o
v
e
r
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
1
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
o
r
d
e
r
-
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


 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
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
5
 
h
-
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
{
/
*
 
I
d
e
n
t
i
t
y
 
+
 
c
o
l
l
a
p
s
e
 
t
o
g
g
l
e
 
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
{
`
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
w
h
i
t
e
/
1
0
 
$
{
c
o
l
l
a
p
s
e
d
 
?
 
"
p
x
-
3
 
p
y
-
3
"
 
:
 
"
p
x
-
5
 
p
y
-
3
"
}
`
}
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
p
r
o
f
i
l
e
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
M
o
b
i
l
e
O
p
e
n
(
f
a
l
s
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
c
o
l
l
a
p
s
e
d
 
?
 
d
i
s
p
l
a
y
N
a
m
e
 
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
 
m
i
n
-
w
-
0
 
$
{
c
o
l
l
a
p
s
e
d
 
?
 
"
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
 
f
l
e
x
-
1
"
 
:
 
"
f
l
e
x
-
1
"
}
 
h
o
v
e
r
:
o
p
a
c
i
t
y
-
8
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
o
p
a
c
i
t
y
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
a
v
a
t
a
r
(
"
m
d
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
!
c
o
l
l
a
p
s
e
d
 
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
m
i
n
-
w
-
0
 
f
l
e
x
-
1
"
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
 
t
r
u
n
c
a
t
e
 
l
e
a
d
i
n
g
-
t
i
g
h
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
i
s
p
l
a
y
N
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
?
.
c
o
m
p
a
n
y
 
&
&
 
u
s
e
r
?
.
n
a
m
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
t
r
u
n
c
a
t
e
 
l
e
a
d
i
n
g
-
t
i
g
h
t
"
>
{
u
s
e
r
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
{
!
c
o
l
l
a
p
s
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
t
o
g
g
l
e
S
i
d
e
b
a
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
C
o
l
l
a
p
s
e
 
s
i
d
e
b
a
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
 
s
h
r
i
n
k
-
0
 
p
-
1
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
m
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
 
h
o
v
e
r
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
1
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
o
r
d
e
r
-
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
s
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


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
c
o
l
l
a
p
s
e
d
 
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
y
-
2
 
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
w
h
i
t
e
/
1
0
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
t
o
g
g
l
e
S
i
d
e
b
a
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
E
x
p
a
n
d
 
s
i
d
e
b
a
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
p
-
1
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
m
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
 
h
o
v
e
r
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
1
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
o
r
d
e
r
-
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
s
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
{
/
*
 
N
a
v
 
g
r
o
u
p
s
 
*
/
}


 
 
 
 
 
 
 
 
<
n
a
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
{
`
f
l
e
x
-
1
 
o
v
e
r
f
l
o
w
-
y
-
a
u
t
o
 
$
{
c
o
l
l
a
p
s
e
d
 
?
 
"
p
x
-
2
 
p
y
-
3
"
 
:
 
"
p
x
-
3
 
p
y
-
3
"
}
 
s
p
a
c
e
-
y
-
4
`
}
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
e
c
r
u
i
t
m
e
n
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
!
c
o
l
l
a
p
s
e
d
 
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
 
p
x
-
2
 
m
b
-
1
.
5
"
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
h
-
1
 
w
-
1
 
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
[
1
0
p
x
]
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
c
r
u
i
t
m
e
n
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
-
p
x
 
b
g
-
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
m
x
-
2
 
m
b
-
2
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
u
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
s
p
a
c
e
-
y
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
R
E
C
R
U
I
T
M
E
N
T
_
I
T
E
M
S
.
m
a
p
(
r
e
n
d
e
r
N
a
v
I
t
e
m
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
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
 
H
R
 
M
a
n
a
g
e
m
e
n
t
,
 
c
o
l
l
a
p
s
i
b
l
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
!
c
o
l
l
a
p
s
e
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
o
g
g
l
e
H
R
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
2
 
w
-
f
u
l
l
 
p
x
-
2
 
m
b
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
-
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
{
`
h
-
1
 
w
-
1
 
$
{
i
s
H
R
A
c
t
i
v
e
 
?
 
"
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
 
:
 
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
4
0
0
"
}
`
}
 
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
{
`
t
e
x
t
-
[
1
0
p
x
]
 
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
 
$
{
i
s
H
R
A
c
t
i
v
e
 
?
 
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
"
 
:
 
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
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
 
m
a
n
a
g
e
m
e
n
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
D
o
w
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
{
`
w
-
3
 
h
-
3
 
m
l
-
a
u
t
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
 
$
{
h
r
E
x
p
a
n
d
e
d
 
?
 
"
"
 
:
 
"
-
r
o
t
a
t
e
-
9
0
"
}
`
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
-
p
x
 
b
g
-
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
m
x
-
2
 
m
b
-
2
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
(
h
r
E
x
p
a
n
d
e
d
 
|
|
 
c
o
l
l
a
p
s
e
d
)
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
u
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
s
p
a
c
e
-
y
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
H
R
_
I
T
E
M
S
.
m
a
p
(
r
e
n
d
e
r
N
a
v
I
t
e
m
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
c
c
o
u
n
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
!
c
o
l
l
a
p
s
e
d
 
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
 
p
x
-
2
 
m
b
-
1
.
5
"
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
h
-
1
 
w
-
1
 
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
[
1
0
p
x
]
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
c
o
u
n
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
-
p
x
 
b
g
-
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
m
x
-
2
 
m
b
-
2
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
u
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
s
p
a
c
e
-
y
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
A
C
C
O
U
N
T
_
I
T
E
M
S
.
m
a
p
(
r
e
n
d
e
r
N
a
v
I
t
e
m
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
n
a
v
>




 
 
 
 
 
 
 
 
{
/
*
 
F
o
o
t
e
r
:
 
l
o
g
o
u
t
 
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
{
`
b
o
r
d
e
r
-
t
 
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
w
h
i
t
e
/
1
0
 
$
{
c
o
l
l
a
p
s
e
d
 
?
 
"
p
x
-
2
 
p
y
-
3
"
 
:
 
"
p
x
-
3
 
p
y
-
3
"
}
`
}
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
h
a
n
d
l
e
L
o
g
o
u
t
}


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
c
o
l
l
a
p
s
e
d
 
?
 
"
L
o
g
o
u
t
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
 
p
x
-
3
 
p
y
-
2
 
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
 
h
o
v
e
r
:
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
h
o
v
e
r
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
r
e
d
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
o
r
d
e
r
-
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
l
a
p
s
e
d
 
?
 
"
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
2
"
 
:
 
"
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
g
O
u
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
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
!
c
o
l
l
a
p
s
e
d
 
&
&
 
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
r
u
n
c
a
t
e
"
>
L
o
g
o
u
t
<
/
s
p
a
n
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
a
s
i
d
e
>




 
 
 
 
 
 
{
/
*
 
M
a
i
n
 
C
o
n
t
e
n
t
 
*
/
}


 
 
 
 
 
 
<
m
a
i
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
{
`
p
t
-
1
6
 
l
g
:
p
t
-
2
4
 
p
x
-
4
 
p
b
-
8
 
s
m
:
p
x
-
6
 
l
g
:
p
x
-
8
 
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
a
l
l
 
d
u
r
a
t
i
o
n
-
3
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
a
u
t
o
 
$
{


 
 
 
 
 
 
 
 
 
 
c
o
l
l
a
p
s
e
d
 
?
 
"
l
g
:
m
l
-
1
8
"
 
:
 
"
l
g
:
m
l
-
6
4
"


 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
S
u
s
p
e
n
s
e
 
f
a
l
l
b
a
c
k
=
{
<
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
o
u
t
e
L
o
a
d
e
r
 
/
>
}
>


 
 
 
 
 
 
 
 
 
 
<
O
u
t
l
e
t
 
/
>


 
 
 
 
 
 
 
 
<
/
S
u
s
p
e
n
s
e
>


 
 
 
 
 
 
<
/
m
a
i
n
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
o
u
t
e
L
o
a
d
e
r
(
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
m
a
x
-
w
-
7
x
l
 
m
x
-
a
u
t
o
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
m
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
 
m
b
-
3
"
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
h
-
1
 
w
-
1
 
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
[
1
0
p
x
]
 
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


 
 
 
 
 
 
 
 
 
 
l
o
a
d
i
n
g


 
 
 
 
 
 
 
 
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
1
0
 
w
-
1
/
3
 
r
o
u
n
d
e
d
 
b
g
-
s
t
o
n
e
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
h
-
4
 
w
-
2
/
3
 
r
o
u
n
d
e
d
 
b
g
-
s
t
o
n
e
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
m
t
-
6
 
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
1
 
m
d
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
s
t
o
n
e
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
s
t
o
n
e
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


 
 
 
 
 
 
 
 
 
 
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
3
 
}
)
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
5
0
 
p
x
-
4
 
p
y
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
h
-
3
 
w
-
1
6
 
r
o
u
n
d
e
d
 
b
g
-
s
t
o
n
e
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
m
t
-
2
 
h
-
5
 
w
-
1
0
 
r
o
u
n
d
e
d
 
b
g
-
s
t
o
n
e
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
"
 
/
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
1
 
m
d
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
 
x
l
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
3
 
g
a
p
-
4
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
6
 
}
)
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
h
-
4
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
w
h
i
t
e
/
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
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
/
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


