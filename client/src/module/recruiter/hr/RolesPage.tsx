
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
M
e
m
o
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
M
u
t
a
t
i
o
n
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


 
 
K
e
y
,


 
 
P
l
u
s
,


 
 
T
r
a
s
h
2
,


 
 
E
d
i
t
2
,


 
 
S
h
i
e
l
d
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
e
a
r
c
h
,


 
 
L
o
c
k
,


 
 
U
s
e
r
s
,


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
 
h
r
K
e
y
s
 
}
 
f
r
o
m
 
"
.
/
h
r
-
q
u
e
r
y
-
k
e
y
s
"
;


i
m
p
o
r
t
 
H
R
M
o
d
a
l
 
f
r
o
m
 
"
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
H
R
M
o
d
a
l
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
 
C
u
s
t
o
m
R
o
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
h
r
-
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
 
B
u
t
t
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
b
u
t
t
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
 
l
a
b
e
l
C
l
a
s
s
 
}
 
f
r
o
m
 
"
.
/
h
r
-
u
t
i
l
s
"
;




t
y
p
e
 
T
a
b
 
=
 
"
r
o
l
e
s
"
 
|
 
"
a
s
s
i
g
n
"
;




c
o
n
s
t
 
A
L
L
_
P
E
R
M
I
S
S
I
O
N
S
 
=
 
[


 
 
"
H
R
_
R
E
A
D
"
,


 
 
"
H
R
_
W
R
I
T
E
"
,


 
 
"
H
R
_
A
D
M
I
N
"
,


 
 
"
E
M
P
L
O
Y
E
E
_
R
E
A
D
"
,


 
 
"
E
M
P
L
O
Y
E
E
_
W
R
I
T
E
"
,


 
 
"
L
E
A
V
E
_
A
P
P
R
O
V
E
"
,


 
 
"
L
E
A
V
E
_
A
D
M
I
N
"
,


 
 
"
P
A
Y
R
O
L
L
_
V
I
E
W
"
,


 
 
"
P
A
Y
R
O
L
L
_
M
A
N
A
G
E
"
,


 
 
"
P
E
R
F
O
R
M
A
N
C
E
_
V
I
E
W
"
,


 
 
"
P
E
R
F
O
R
M
A
N
C
E
_
M
A
N
A
G
E
"
,


 
 
"
A
T
T
E
N
D
A
N
C
E
_
V
I
E
W
"
,


 
 
"
A
T
T
E
N
D
A
N
C
E
_
M
A
N
A
G
E
"
,


 
 
"
C
O
M
P
L
I
A
N
C
E
_
V
I
E
W
"
,


 
 
"
C
O
M
P
L
I
A
N
C
E
_
M
A
N
A
G
E
"
,


 
 
"
A
N
A
L
Y
T
I
C
S
_
V
I
E
W
"
,


 
 
"
A
N
A
L
Y
T
I
C
S
_
A
D
M
I
N
"
,


 
 
"
R
B
A
C
_
M
A
N
A
G
E
"
,


 
 
"
T
A
S
K
_
V
I
E
W
"
,


 
 
"
T
A
S
K
_
M
A
N
A
G
E
"
,


 
 
"
O
N
B
O
A
R
D
I
N
G
_
M
A
N
A
G
E
"
,


 
 
"
R
E
I
M
B
U
R
S
E
M
E
N
T
_
A
P
P
R
O
V
E
"
,


 
 
"
W
O
R
K
F
L
O
W
_
M
A
N
A
G
E
"
,


]
;




c
o
n
s
t
 
i
n
p
u
t
C
l
a
s
s
 
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
3
 
p
y
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
1
0
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
o
l
e
s
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
t
a
b
,
 
s
e
t
T
a
b
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
T
a
b
>
(
"
r
o
l
e
s
"
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
C
r
e
a
t
e
,
 
s
e
t
S
h
o
w
C
r
e
a
t
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
d
i
t
R
o
l
e
,
 
s
e
t
E
d
i
t
R
o
l
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
<
C
u
s
t
o
m
R
o
l
e
 
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
:
 
"
"
,


 
 
 
 
p
e
r
m
i
s
s
i
o
n
s
:
 
[
]
 
a
s
 
s
t
r
i
n
g
[
]
,


 
 
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
a
v
i
n
g
,
 
s
e
t
S
a
v
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
a
s
s
i
g
n
F
o
r
m
,
 
s
e
t
A
s
s
i
g
n
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
 
u
s
e
r
I
d
:
 
"
"
,
 
r
o
l
e
I
d
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
a
s
s
i
g
n
e
d
,
 
s
e
t
A
s
s
i
g
n
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
 
{
 
d
a
t
a
:
 
r
o
l
e
s
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
 
h
r
K
e
y
s
.
r
o
l
e
s
.
l
i
s
t
(
)
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
"
/
h
r
/
r
b
a
c
/
r
o
l
e
s
"
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
r
e
s
.
d
a
t
a
 
a
s
 
C
u
s
t
o
m
R
o
l
e
[
]
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
 
c
r
e
a
t
e
M
u
t
a
t
i
o
n
 
=
 
u
s
e
M
u
t
a
t
i
o
n
(
{


 
 
 
 
m
u
t
a
t
i
o
n
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


 
 
 
 
 
 
s
e
t
S
a
v
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


 
 
 
 
 
 
i
f
 
(
e
d
i
t
R
o
l
e
)
 
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
u
t
(
`
/
h
r
/
r
b
a
c
/
r
o
l
e
s
/
$
{
e
d
i
t
R
o
l
e
.
i
d
}
`
,
 
f
o
r
m
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
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
o
s
t
(
"
/
h
r
/
r
b
a
c
/
r
o
l
e
s
"
,
 
f
o
r
m
)
;


 
 
 
 
 
 
}


 
 
 
 
}
,


 
 
 
 
o
n
S
u
c
c
e
s
s
:
 
(
)
 
=
>
 
{


 
 
 
 
 
 
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
h
r
"
,
 
"
r
o
l
e
s
"
]
 
}
)
;


 
 
 
 
 
 
s
e
t
S
h
o
w
C
r
e
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


 
 
 
 
 
 
s
e
t
E
d
i
t
R
o
l
e
(
n
u
l
l
)
;


 
 
 
 
 
 
s
e
t
F
o
r
m
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
:
 
"
"
,
 
p
e
r
m
i
s
s
i
o
n
s
:
 
[
]
 
}
)
;


 
 
 
 
}
,


 
 
 
 
o
n
S
e
t
t
l
e
d
:
 
(
)
 
=
>
 
s
e
t
S
a
v
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
,


 
 
}
)
;




 
 
c
o
n
s
t
 
d
e
l
e
t
e
M
u
t
a
t
i
o
n
 
=
 
u
s
e
M
u
t
a
t
i
o
n
(
{


 
 
 
 
m
u
t
a
t
i
o
n
F
n
:
 
a
s
y
n
c
 
(
i
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


 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
d
e
l
e
t
e
(
`
/
h
r
/
r
b
a
c
/
r
o
l
e
s
/
$
{
i
d
}
`
)
;


 
 
 
 
}
,


 
 
 
 
o
n
S
u
c
c
e
s
s
:
 
(
)
 
=
>
 
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
h
r
"
,
 
"
r
o
l
e
s
"
]
 
}
)
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
s
s
i
g
n
M
u
t
a
t
i
o
n
 
=
 
u
s
e
M
u
t
a
t
i
o
n
(
{


 
 
 
 
m
u
t
a
t
i
o
n
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


 
 
 
 
 
 
s
e
t
S
a
v
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
h
r
/
r
b
a
c
/
a
s
s
i
g
n
"
,
 
{


 
 
 
 
 
 
 
 
u
s
e
r
I
d
:
 
N
u
m
b
e
r
(
a
s
s
i
g
n
F
o
r
m
.
u
s
e
r
I
d
)
,


 
 
 
 
 
 
 
 
r
o
l
e
I
d
:
 
N
u
m
b
e
r
(
a
s
s
i
g
n
F
o
r
m
.
r
o
l
e
I
d
)
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,


 
 
 
 
o
n
S
u
c
c
e
s
s
:
 
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
A
s
s
i
g
n
F
o
r
m
(
{
 
u
s
e
r
I
d
:
 
"
"
,
 
r
o
l
e
I
d
:
 
"
"
 
}
)
;


 
 
 
 
 
 
s
e
t
A
s
s
i
g
n
e
d
(
t
r
u
e
)
;


 
 
 
 
 
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
s
e
t
A
s
s
i
g
n
e
d
(
f
a
l
s
e
)
,
 
2
0
0
0
)
;


 
 
 
 
}
,


 
 
 
 
o
n
S
e
t
t
l
e
d
:
 
(
)
 
=
>
 
s
e
t
S
a
v
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
,


 
 
}
)
;




 
 
c
o
n
s
t
 
o
p
e
n
E
d
i
t
 
=
 
(
r
o
l
e
:
 
C
u
s
t
o
m
R
o
l
e
)
 
=
>
 
{


 
 
 
 
s
e
t
E
d
i
t
R
o
l
e
(
r
o
l
e
)
;


 
 
 
 
s
e
t
F
o
r
m
(
{


 
 
 
 
 
 
n
a
m
e
:
 
r
o
l
e
.
n
a
m
e
,


 
 
 
 
 
 
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
:
 
r
o
l
e
.
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
 
|
|
 
"
"
,


 
 
 
 
 
 
p
e
r
m
i
s
s
i
o
n
s
:
 
[
.
.
.
r
o
l
e
.
p
e
r
m
i
s
s
i
o
n
s
]
,


 
 
 
 
}
)
;


 
 
 
 
s
e
t
S
h
o
w
C
r
e
a
t
e
(
t
r
u
e
)
;


 
 
}
;




 
 
c
o
n
s
t
 
o
p
e
n
C
r
e
a
t
e
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
E
d
i
t
R
o
l
e
(
n
u
l
l
)
;


 
 
 
 
s
e
t
F
o
r
m
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
:
 
"
"
,
 
p
e
r
m
i
s
s
i
o
n
s
:
 
[
]
 
}
)
;


 
 
 
 
s
e
t
S
h
o
w
C
r
e
a
t
e
(
t
r
u
e
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
P
e
r
m
i
s
s
i
o
n
 
=
 
(
p
e
r
m
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


 
 
 
 
 
 
p
e
r
m
i
s
s
i
o
n
s
:
 
p
r
e
v
.
p
e
r
m
i
s
s
i
o
n
s
.
i
n
c
l
u
d
e
s
(
p
e
r
m
)


 
 
 
 
 
 
 
 
?
 
p
r
e
v
.
p
e
r
m
i
s
s
i
o
n
s
.
f
i
l
t
e
r
(
(
p
)
 
=
>
 
p
 
!
=
=
 
p
e
r
m
)


 
 
 
 
 
 
 
 
:
 
[
.
.
.
p
r
e
v
.
p
e
r
m
i
s
s
i
o
n
s
,
 
p
e
r
m
]
,


 
 
 
 
}
)
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
t
a
l
s
 
=
 
u
s
e
M
e
m
o
(
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
 
l
i
s
t
 
=
 
r
o
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
 
{


 
 
 
 
 
 
t
o
t
a
l
:
 
l
i
s
t
.
l
e
n
g
t
h
,


 
 
 
 
 
 
c
u
s
t
o
m
:
 
l
i
s
t
.
f
i
l
t
e
r
(
(
r
)
 
=
>
 
!
r
.
i
s
S
y
s
t
e
m
)
.
l
e
n
g
t
h
,


 
 
 
 
 
 
s
y
s
t
e
m
:
 
l
i
s
t
.
f
i
l
t
e
r
(
(
r
)
 
=
>
 
r
.
i
s
S
y
s
t
e
m
)
.
l
e
n
g
t
h
,


 
 
 
 
}
;


 
 
}
,
 
[
r
o
l
e
s
]
)
;




 
 
c
o
n
s
t
 
f
i
l
t
e
r
e
d
 
=
 
u
s
e
M
e
m
o
(
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
 
q
 
=
 
s
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
.
t
o
L
o
w
e
r
C
a
s
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
i
s
t
 
=
 
r
o
l
e
s
 
?
?
 
[
]
;


 
 
 
 
i
f
 
(
!
q
)
 
r
e
t
u
r
n
 
l
i
s
t
;


 
 
 
 
r
e
t
u
r
n
 
l
i
s
t
.
f
i
l
t
e
r
(


 
 
 
 
 
 
(
r
)
 
=
>


 
 
 
 
 
 
 
 
r
.
n
a
m
e
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
q
)
 
|
|


 
 
 
 
 
 
 
 
(
r
.
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
 
|
|
 
"
"
)
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
q
)
 
|
|


 
 
 
 
 
 
 
 
r
.
p
e
r
m
i
s
s
i
o
n
s
.
s
o
m
e
(
(
p
)
 
=
>
 
p
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
q
)
)
,


 
 
 
 
)
;


 
 
}
,
 
[
r
o
l
e
s
,
 
s
e
a
r
c
h
]
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
h
e
a
d
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
t
-
6
 
m
b
-
8
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
 
h
r
 
/
 
r
o
l
e
s


 
 
 
 
 
 
 
 
 
 
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
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
i
t
e
m
s
-
s
t
a
r
t
 
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


 
 
 
 
 
 
 
 
 
 
<
d
i
v
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
 
s
m
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
o
l
e
s
 
&
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
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
c
e
s
s
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
c
a
l
e
X
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
 
s
c
a
l
e
X
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
 
0
.
2
5
,
 
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
 
h
-
0
.
7
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
 
o
r
i
g
i
n
-
l
e
f
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
a
x
-
w
-
x
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
r
o
u
p
 
p
e
r
m
i
s
s
i
o
n
s
 
i
n
t
o
 
r
o
l
e
s
,
 
t
h
e
n
 
a
s
s
i
g
n
 
t
h
e
m
 
t
o
 
t
h
e
 
p
e
o
p
l
e
 
w
h
o
 
n
e
e
d
 
t
h
e
m
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




 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
v
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
 
s
i
z
e
=
"
m
d
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
o
p
e
n
C
r
e
a
t
e
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
P
l
u
s
 
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


 
 
 
 
 
 
 
 
 
 
 
 
N
e
w
 
r
o
l
e


 
 
 
 
 
 
 
 
 
 
<
/
B
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


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
t
o
t
a
l
"
 
v
a
l
u
e
=
{
t
o
t
a
l
s
.
t
o
t
a
l
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
c
u
s
t
o
m
"
 
v
a
l
u
e
=
{
t
o
t
a
l
s
.
c
u
s
t
o
m
}
 
d
o
t
C
l
a
s
s
=
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
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
s
y
s
t
e
m
"
 
v
a
l
u
e
=
{
t
o
t
a
l
s
.
s
y
s
t
e
m
}
 
d
o
t
C
l
a
s
s
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
/
h
e
a
d
e
r
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
b
-
6
 
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
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
 
p
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
{
(


 
 
 
 
 
 
 
 
 
 
 
 
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
k
e
y
:
 
"
r
o
l
e
s
"
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
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
k
e
y
:
 
"
a
s
s
i
g
n
"
,
 
l
a
b
e
l
:
 
"
A
s
s
i
g
n
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
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
]
 
a
s
 
c
o
n
s
t


 
 
 
 
 
 
 
 
 
 
)
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
t
a
b
 
=
=
=
 
t
.
k
e
y
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
t
.
k
e
y
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
T
a
b
(
t
.
k
e
y
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
1
.
5
 
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
 
r
o
u
n
d
e
d
-
s
m
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
.
l
a
b
e
l
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


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
t
a
b
 
=
=
=
 
"
r
o
l
e
s
"
 
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
1
 
m
i
n
-
w
-
6
0
 
m
a
x
-
w
-
s
m
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
 
r
o
l
e
s
,
 
p
e
r
m
i
s
s
i
o
n
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
{
`
$
{
i
n
p
u
t
C
l
a
s
s
}
 
p
l
-
9
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
}


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
t
a
b
 
=
=
=
 
"
r
o
l
e
s
"
 
?
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
e
f
i
n
e
d
 
r
o
l
e
s


 
 
 
 
 
 
 
 
 
 
 
 
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
L
i
s
t
S
k
e
l
e
t
o
n
 
/
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
f
i
l
t
e
r
e
d
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
E
m
p
t
y
S
t
a
t
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
K
e
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
(
r
o
l
e
s
?
.
l
e
n
g
t
h
 
?
?
 
0
)
 
=
=
=
 
0
 
?
 
"
N
o
 
c
u
s
t
o
m
 
r
o
l
e
s
 
y
e
t
"
 
:
 
"
N
o
 
m
a
t
c
h
e
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
(
r
o
l
e
s
?
.
l
e
n
g
t
h
 
?
?
 
0
)
 
=
=
=
 
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
B
u
n
d
l
e
 
p
e
r
m
i
s
s
i
o
n
s
 
i
n
t
o
 
a
 
r
o
l
e
 
s
o
 
y
o
u
 
c
a
n
 
a
s
s
i
g
n
 
a
c
c
e
s
s
 
i
n
 
o
n
e
 
s
t
e
p
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
T
r
y
 
a
 
d
i
f
f
e
r
e
n
t
 
s
e
a
r
c
h
 
t
e
r
m
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
o
n
L
a
b
e
l
=
{
(
r
o
l
e
s
?
.
l
e
n
g
t
h
 
?
?
 
0
)
 
=
=
=
 
0
 
?
 
"
C
r
e
a
t
e
 
r
o
l
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
c
t
i
o
n
=
{
(
r
o
l
e
s
?
.
l
e
n
g
t
h
 
?
?
 
0
)
 
=
=
=
 
0
 
?
 
o
p
e
n
C
r
e
a
t
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


 
 
 
 
 
 
 
 
 
 
 
 
/
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
d
i
v
i
d
e
-
w
h
i
t
e
/
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
.
m
a
p
(
(
r
o
l
e
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
r
o
l
e
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
,
 
y
:
 
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
2
,
 
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
2
 
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
g
r
o
u
p
 
p
x
-
4
 
p
y
-
3
 
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
s
t
o
n
e
-
9
0
0
/
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
s
t
a
r
t
 
g
a
p
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
m
t
-
0
.
5
 
w
-
9
 
h
-
9
 
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
9
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
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
h
i
e
l
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
 
f
l
e
x
-
w
r
a
p
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
l
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
l
e
.
i
s
S
y
s
t
e
m
 
?
 
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
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
c
k
 
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
y
s
t
e
m


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
1
 
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
.
5
 
w
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
f
u
l
l
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
s
t
o
m


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
l
e
.
_
c
o
u
n
t
?
.
u
s
e
r
R
o
l
e
s
 
!
=
=
 
u
n
d
e
f
i
n
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
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
U
s
e
r
s
 
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
l
e
.
_
c
o
u
n
t
.
u
s
e
r
R
o
l
e
s
}
 
a
s
s
i
g
n
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
l
e
.
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
 
m
t
-
0
.
5
 
l
i
n
e
-
c
l
a
m
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
l
e
.
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
l
e
.
p
e
r
m
i
s
s
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
 
>
 
0
 
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
t
-
2
 
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
l
e
.
p
e
r
m
i
s
s
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
p
e
r
m
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
e
r
m
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
1
 
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
s
m
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
e
r
m
.
t
o
L
o
w
e
r
C
a
s
e
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
_
/
g
,
 
"
 
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
r
o
l
e
.
i
s
S
y
s
t
e
m
 
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
 
g
a
p
-
1
 
s
h
r
i
n
k
-
0
 
o
p
a
c
i
t
y
-
0
 
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
o
p
a
c
i
t
y
-
1
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
o
p
a
c
i
t
y
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
 
o
p
e
n
E
d
i
t
(
r
o
l
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
E
d
i
t
 
r
o
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
4
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
E
d
i
t
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
w
-
3
.
5
 
h
-
3
.
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
c
o
n
f
i
r
m
(
"
D
e
l
e
t
e
 
t
h
i
s
 
r
o
l
e
?
"
)
)
 
d
e
l
e
t
e
M
u
t
a
t
i
o
n
.
m
u
t
a
t
e
(
r
o
l
e
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
D
e
l
e
t
e
 
r
o
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
4
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
r
e
d
-
6
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
T
r
a
s
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
w
-
3
.
5
 
h
-
3
.
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
s
s
i
g
n
 
a
 
r
o
l
e


 
 
 
 
 
 
 
 
 
 
 
 
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
a
x
-
w
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
{
l
a
b
e
l
C
l
a
s
s
}
>
u
s
e
r
 
i
d
<
/
l
a
b
e
l
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
n
u
m
b
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
a
s
s
i
g
n
F
o
r
m
.
u
s
e
r
I
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
A
s
s
i
g
n
F
o
r
m
(
{
 
.
.
.
a
s
s
i
g
n
F
o
r
m
,
 
u
s
e
r
I
d
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
{
`
$
{
i
n
p
u
t
C
l
a
s
s
}
 
f
o
n
t
-
m
o
n
o
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
e
.
g
.
 
1
4
2
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
{
l
a
b
e
l
C
l
a
s
s
}
>
r
o
l
e
<
/
l
a
b
e
l
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
s
s
i
g
n
F
o
r
m
.
r
o
l
e
I
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
A
s
s
i
g
n
F
o
r
m
(
{
 
.
.
.
a
s
s
i
g
n
F
o
r
m
,
 
r
o
l
e
I
d
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
{
i
n
p
u
t
C
l
a
s
s
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
"
>
S
e
l
e
c
t
 
r
o
l
e
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
l
e
s
?
.
m
a
p
(
(
r
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
k
e
y
=
{
r
.
i
d
}
 
v
a
l
u
e
=
{
r
.
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
p
t
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
m
d
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
 
a
s
s
i
g
n
M
u
t
a
t
i
o
n
.
m
u
t
a
t
e
(
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
!
a
s
s
i
g
n
F
o
r
m
.
u
s
e
r
I
d
 
|
|
 
!
a
s
s
i
g
n
F
o
r
m
.
r
o
l
e
I
d
 
|
|
 
s
a
v
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
U
s
e
r
P
l
u
s
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
s
s
i
g
n
 
r
o
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
s
s
i
g
n
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
1
 
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
.
5
 
w
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
f
u
l
l
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
s
s
i
g
n
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
<
H
R
M
o
d
a
l


 
 
 
 
 
 
 
 
o
p
e
n
=
{
s
h
o
w
C
r
e
a
t
e
}


 
 
 
 
 
 
 
 
o
n
C
l
o
s
e
=
{
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
S
h
o
w
C
r
e
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


 
 
 
 
 
 
 
 
 
 
s
e
t
E
d
i
t
R
o
l
e
(
n
u
l
l
)
;


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
e
d
i
t
R
o
l
e
 
?
 
"
E
d
i
t
 
R
o
l
e
"
 
:
 
"
N
e
w
 
R
o
l
e
"
}


 
 
 
 
 
 
 
 
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
(
)
 
=
>
 
c
r
e
a
t
e
M
u
t
a
t
i
o
n
.
m
u
t
a
t
e
(
)
}


 
 
 
 
 
 
 
 
s
u
b
m
i
t
L
a
b
e
l
=
{
e
d
i
t
R
o
l
e
 
?
 
"
U
p
d
a
t
e
"
 
:
 
"
C
r
e
a
t
e
"
}


 
 
 
 
 
 
 
 
l
o
a
d
i
n
g
=
{
s
a
v
i
n
g
}


 
 
 
 
 
 
 
 
w
i
d
e


 
 
 
 
 
 
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
4
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
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
{
l
a
b
e
l
C
l
a
s
s
}
>
r
o
l
e
 
n
a
m
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
n
a
m
e
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
{
i
n
p
u
t
C
l
a
s
s
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
H
i
r
i
n
g
 
M
a
n
a
g
e
r
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
{
l
a
b
e
l
C
l
a
s
s
}
>
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
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
2
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
i
n
p
u
t
C
l
a
s
s
}
 
r
e
s
i
z
e
-
n
o
n
e
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
S
h
o
r
t
 
n
o
t
e
 
a
b
o
u
t
 
w
h
o
 
s
h
o
u
l
d
 
h
a
v
e
 
t
h
i
s
 
r
o
l
e
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
2
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
{
`
$
{
l
a
b
e
l
C
l
a
s
s
}
 
m
b
-
0
`
}
>
p
e
r
m
i
s
s
i
o
n
s
<
/
l
a
b
e
l
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
o
r
m
.
p
e
r
m
i
s
s
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
}
/
{
A
L
L
_
P
E
R
M
I
S
S
I
O
N
S
.
l
e
n
g
t
h
}
 
s
e
l
e
c
t
e
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
2
 
g
a
p
-
1
 
m
a
x
-
h
-
6
4
 
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
 
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
A
L
L
_
P
E
R
M
I
S
S
I
O
N
S
.
m
a
p
(
(
p
e
r
m
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
h
e
c
k
e
d
 
=
 
f
o
r
m
.
p
e
r
m
i
s
s
i
o
n
s
.
i
n
c
l
u
d
e
s
(
p
e
r
m
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
l
a
b
e
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
e
r
m
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
2
 
p
x
-
2
 
p
y
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
s
m
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
h
e
c
k
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
/
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
c
h
e
c
k
b
o
x
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
h
e
c
k
e
d
=
{
c
h
e
c
k
e
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
)
 
=
>
 
t
o
g
g
l
e
P
e
r
m
i
s
s
i
o
n
(
p
e
r
m
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
r
o
u
n
d
e
d
 
a
c
c
e
n
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
1
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
r
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
e
r
m
.
t
o
L
o
w
e
r
C
a
s
e
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
_
/
g
,
 
"
 
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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


 
 
 
 
 
 
<
/
H
R
M
o
d
a
l
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
 
S
t
a
t
(
{


 
 
l
a
b
e
l
,


 
 
v
a
l
u
e
,


 
 
d
o
t
C
l
a
s
s
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


 
 
v
a
l
u
e
:
 
n
u
m
b
e
r
 
|
 
s
t
r
i
n
g
;


 
 
d
o
t
C
l
a
s
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
3
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
1
.
5
"
>


 
 
 
 
 
 
 
 
{
d
o
t
C
l
a
s
s
 
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
{
`
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
 
$
{
d
o
t
C
l
a
s
s
}
`
}
 
/
>
}


 
 
 
 
 
 
 
 
{
l
a
b
e
l
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
m
t
-
0
.
5
 
t
e
x
t
-
l
g
 
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


 
 
 
 
 
 
 
 
{
v
a
l
u
e
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
 
L
i
s
t
S
k
e
l
e
t
o
n
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
d
i
v
i
d
e
-
w
h
i
t
e
/
5
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
 
4
 
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
s
t
a
r
t
 
g
a
p
-
4
 
p
x
-
4
 
p
y
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
p
u
l
s
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
w
-
9
 
h
-
9
 
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
f
l
e
x
-
1
 
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
3
.
5
 
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
2
.
5
 
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
h
-
2
.
5
 
w
-
1
/
2
 
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
 
E
m
p
t
y
S
t
a
t
e
(
{


 
 
i
c
o
n
:
 
I
c
o
n
,


 
 
t
i
t
l
e
,


 
 
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
,


 
 
a
c
t
i
o
n
L
a
b
e
l
,


 
 
o
n
A
c
t
i
o
n
,


}
:
 
{


 
 
i
c
o
n
:
 
t
y
p
e
o
f
 
K
e
y
;


 
 
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
s
c
r
i
p
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
a
c
t
i
o
n
L
a
b
e
l
?
:
 
s
t
r
i
n
g
;


 
 
o
n
A
c
t
i
o
n
?
:
 
(
)
 
=
>
 
v
o
i
d
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
y
-
1
6
 
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
d
a
s
h
e
d
 
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
w
-
1
2
 
h
-
1
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
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
<
I
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
5
 
h
-
5
 
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
 
/
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
h
3
 
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
s
t
o
n
e
-
5
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
{
t
i
t
l
e
}


 
 
 
 
 
 
<
/
h
3
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
5
0
0
 
m
a
x
-
w
-
x
s
 
m
b
-
5
"
>
{
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
}
<
/
p
>


 
 
 
 
 
 
{
a
c
t
i
o
n
L
a
b
e
l
 
&
&
 
o
n
A
c
t
i
o
n
 
&
&
 
(


 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
v
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
 
s
i
z
e
=
"
s
m
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
o
n
A
c
t
i
o
n
}
>


 
 
 
 
 
 
 
 
 
 
<
P
l
u
s
 
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


 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
o
n
L
a
b
e
l
}


 
 
 
 
 
 
 
 
<
/
B
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


 
 
)
;


}


