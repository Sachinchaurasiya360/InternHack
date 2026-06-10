
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
 
S
q
l
E
x
e
r
c
i
s
e
 
}
 
f
r
o
m
 
"
.
/
e
x
e
r
c
i
s
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
 
c
o
n
s
t
 
e
x
e
r
c
i
s
e
s
S
e
l
e
c
t
:
 
S
q
l
E
x
e
r
c
i
s
e
[
]
 
=
 
[


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
-
1
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
0
,


 
 
 
 
t
i
t
l
e
:
 
"
P
o
p
u
l
a
t
i
o
n
 
o
f
 
G
e
r
m
a
n
y
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
T
h
e
 
e
x
a
m
p
l
e
 
u
s
e
s
 
a
 
W
H
E
R
E
 
c
l
a
u
s
e
 
t
o
 
s
h
o
w
 
t
h
e
 
p
o
p
u
l
a
t
i
o
n
 
o
f
 
F
r
a
n
c
e
.
 
M
o
d
i
f
y
 
i
t
 
t
o
 
s
h
o
w
 
t
h
e
 
p
o
p
u
l
a
t
i
o
n
 
o
f
 
G
e
r
m
a
n
y
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
p
o
p
u
l
a
t
i
o
n
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
n
a
m
e
 
=
 
'
F
r
a
n
c
e
'
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
p
o
p
u
l
a
t
i
o
n
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
n
a
m
e
 
=
 
'
G
e
r
m
a
n
y
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
C
h
a
n
g
e
 
t
h
e
 
c
o
u
n
t
r
y
 
n
a
m
e
 
i
n
 
t
h
e
 
W
H
E
R
E
 
c
l
a
u
s
e
.
"
,


 
 
 
 
 
 
"
U
s
e
 
s
i
n
g
l
e
 
q
u
o
t
e
s
 
a
r
o
u
n
d
 
t
h
e
 
c
o
u
n
t
r
y
 
n
a
m
e
:
 
'
G
e
r
m
a
n
y
'
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
-
2
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
1
,


 
 
 
 
t
i
t
l
e
:
 
"
S
c
a
n
d
i
n
a
v
i
a
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
S
h
o
w
 
t
h
e
 
n
a
m
e
 
a
n
d
 
p
o
p
u
l
a
t
i
o
n
 
f
o
r
 
S
w
e
d
e
n
,
 
N
o
r
w
a
y
,
 
a
n
d
 
D
e
n
m
a
r
k
.
 
U
s
e
 
t
h
e
 
I
N
 
k
e
y
w
o
r
d
 
t
o
 
c
h
e
c
k
 
a
g
a
i
n
s
t
 
a
 
l
i
s
t
 
o
f
 
v
a
l
u
e
s
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
p
o
p
u
l
a
t
i
o
n
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
n
a
m
e
 
I
N
 
(
 
)
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
p
o
p
u
l
a
t
i
o
n
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
n
a
m
e
 
I
N
 
(
'
S
w
e
d
e
n
'
,
 
'
N
o
r
w
a
y
'
,
 
'
D
e
n
m
a
r
k
'
)
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
T
h
e
 
I
N
 
k
e
y
w
o
r
d
 
l
e
t
s
 
y
o
u
 
t
e
s
t
 
a
g
a
i
n
s
t
 
a
 
l
i
s
t
 
o
f
 
v
a
l
u
e
s
.
"
,


 
 
 
 
 
 
"
P
u
t
 
e
a
c
h
 
c
o
u
n
t
r
y
 
n
a
m
e
 
i
n
 
s
i
n
g
l
e
 
q
u
o
t
e
s
,
 
s
e
p
a
r
a
t
e
d
 
b
y
 
c
o
m
m
a
s
.
"
,


 
 
 
 
 
 
"
I
N
 
(
'
S
w
e
d
e
n
'
,
 
'
N
o
r
w
a
y
'
,
 
'
D
e
n
m
a
r
k
'
)
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
I
N
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
-
3
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
2
,


 
 
 
 
t
i
t
l
e
:
 
"
J
u
s
t
 
t
h
e
 
R
i
g
h
t
 
S
i
z
e
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
S
h
o
w
 
t
h
e
 
c
o
u
n
t
r
y
 
n
a
m
e
 
a
n
d
 
a
r
e
a
 
f
o
r
 
c
o
u
n
t
r
i
e
s
 
w
i
t
h
 
a
n
 
a
r
e
a
 
b
e
t
w
e
e
n
 
2
0
0
,
0
0
0
 
a
n
d
 
2
5
0
,
0
0
0
 
(
i
n
c
l
u
s
i
v
e
)
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
a
r
e
a
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
a
r
e
a
 
B
E
T
W
E
E
N
 
_
_
_
 
A
N
D
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
a
r
e
a
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
a
r
e
a
 
B
E
T
W
E
E
N
 
2
0
0
0
0
0
 
A
N
D
 
2
5
0
0
0
0
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
B
E
T
W
E
E
N
 
i
n
c
l
u
d
e
s
 
b
o
t
h
 
b
o
u
n
d
a
r
y
 
v
a
l
u
e
s
.
"
,


 
 
 
 
 
 
"
U
s
e
 
n
u
m
e
r
i
c
 
v
a
l
u
e
s
 
w
i
t
h
o
u
t
 
c
o
m
m
a
s
:
 
2
0
0
0
0
0
 
a
n
d
 
2
5
0
0
0
0
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
B
E
T
W
E
E
N
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
-
4
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
3
,


 
 
 
 
t
i
t
l
e
:
 
"
L
a
r
g
e
 
C
o
u
n
t
r
i
e
s
 
b
y
 
A
r
e
a
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
S
h
o
w
 
t
h
e
 
n
a
m
e
 
a
n
d
 
a
r
e
a
 
f
o
r
 
c
o
u
n
t
r
i
e
s
 
w
i
t
h
 
a
n
 
a
r
e
a
 
l
a
r
g
e
r
 
t
h
a
n
 
1
,
0
0
0
,
0
0
0
 
s
q
 
k
m
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
a
r
e
a
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
a
r
e
a
 
_
_
_
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
a
r
e
a
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
a
r
e
a
 
>
 
1
0
0
0
0
0
0
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
t
h
e
 
>
 
o
p
e
r
a
t
o
r
 
f
o
r
 
'
g
r
e
a
t
e
r
 
t
h
a
n
'
.
"
,


 
 
 
 
 
 
"
N
u
m
e
r
i
c
 
v
a
l
u
e
s
 
d
o
 
n
o
t
 
n
e
e
d
 
q
u
o
t
e
s
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
>
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
-
5
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
4
,


 
 
 
 
t
i
t
l
e
:
 
"
E
u
r
o
p
e
a
n
 
C
a
p
i
t
a
l
s
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
S
h
o
w
 
t
h
e
 
n
a
m
e
 
a
n
d
 
c
a
p
i
t
a
l
 
f
o
r
 
a
l
l
 
E
u
r
o
p
e
a
n
 
c
o
u
n
t
r
i
e
s
.
 
F
i
l
t
e
r
 
b
y
 
c
o
n
t
i
n
e
n
t
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
c
a
p
i
t
a
l
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
c
o
n
t
i
n
e
n
t
 
=
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
c
a
p
i
t
a
l
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
c
o
n
t
i
n
e
n
t
 
=
 
'
E
u
r
o
p
e
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
t
h
e
 
=
 
o
p
e
r
a
t
o
r
 
t
o
 
m
a
t
c
h
 
a
 
s
p
e
c
i
f
i
c
 
c
o
n
t
i
n
e
n
t
.
"
,


 
 
 
 
 
 
"
S
t
r
i
n
g
 
v
a
l
u
e
s
 
r
e
q
u
i
r
e
 
s
i
n
g
l
e
 
q
u
o
t
e
s
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
=
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
-
6
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
5
,


 
 
 
 
t
i
t
l
e
:
 
"
C
o
u
n
t
r
i
e
s
 
N
o
t
 
i
n
 
E
u
r
o
p
e
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
S
h
o
w
 
t
h
e
 
n
a
m
e
 
a
n
d
 
c
o
n
t
i
n
e
n
t
 
f
o
r
 
c
o
u
n
t
r
i
e
s
 
t
h
a
t
 
a
r
e
 
N
O
T
 
i
n
 
E
u
r
o
p
e
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
c
o
n
t
i
n
e
n
t
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
c
o
n
t
i
n
e
n
t
 
_
_
_
 
'
E
u
r
o
p
e
'
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
c
o
n
t
i
n
e
n
t
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
c
o
n
t
i
n
e
n
t
 
<
>
 
'
E
u
r
o
p
e
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
<
>
 
o
r
 
!
=
 
f
o
r
 
'
n
o
t
 
e
q
u
a
l
 
t
o
'
.
"
,


 
 
 
 
 
 
"
T
h
i
s
 
e
x
c
l
u
d
e
s
 
a
l
l
 
E
u
r
o
p
e
a
n
 
c
o
u
n
t
r
i
e
s
 
f
r
o
m
 
t
h
e
 
r
e
s
u
l
t
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
<
>
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
-
7
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
6
,


 
 
 
 
t
i
t
l
e
:
 
"
O
r
d
e
r
i
n
g
 
b
y
 
P
o
p
u
l
a
t
i
o
n
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
S
h
o
w
 
t
h
e
 
n
a
m
e
 
a
n
d
 
p
o
p
u
l
a
t
i
o
n
 
o
f
 
a
l
l
 
c
o
u
n
t
r
i
e
s
,
 
o
r
d
e
r
e
d
 
b
y
 
p
o
p
u
l
a
t
i
o
n
 
i
n
 
d
e
s
c
e
n
d
i
n
g
 
o
r
d
e
r
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
p
o
p
u
l
a
t
i
o
n
 
F
R
O
M
 
w
o
r
l
d
\
n
 
O
R
D
E
R
 
B
Y
 
p
o
p
u
l
a
t
i
o
n
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
p
o
p
u
l
a
t
i
o
n
 
F
R
O
M
 
w
o
r
l
d
 
O
R
D
E
R
 
B
Y
 
p
o
p
u
l
a
t
i
o
n
 
D
E
S
C
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
O
R
D
E
R
 
B
Y
 
c
o
l
u
m
n
_
n
a
m
e
 
D
E
S
C
 
f
o
r
 
d
e
s
c
e
n
d
i
n
g
 
o
r
d
e
r
.
"
,


 
 
 
 
 
 
"
A
S
C
 
i
s
 
a
s
c
e
n
d
i
n
g
 
(
d
e
f
a
u
l
t
)
,
 
D
E
S
C
 
i
s
 
d
e
s
c
e
n
d
i
n
g
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
O
R
D
E
R
 
B
Y
"
,
 
"
D
E
S
C
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
-
8
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
b
a
s
i
c
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
7
,


 
 
 
 
t
i
t
l
e
:
 
"
L
i
m
i
t
 
R
e
s
u
l
t
s
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
S
h
o
w
 
t
h
e
 
n
a
m
e
 
a
n
d
 
G
D
P
 
o
f
 
t
h
e
 
5
 
c
o
u
n
t
r
i
e
s
 
w
i
t
h
 
t
h
e
 
h
i
g
h
e
s
t
 
G
D
P
.
 
U
s
e
 
O
R
D
E
R
 
B
Y
 
a
n
d
 
L
I
M
I
T
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
g
d
p
 
F
R
O
M
 
w
o
r
l
d
\
n
 
O
R
D
E
R
 
B
Y
 
g
d
p
 
_
_
_
\
n
 
L
I
M
I
T
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
g
d
p
 
F
R
O
M
 
w
o
r
l
d
 
O
R
D
E
R
 
B
Y
 
g
d
p
 
D
E
S
C
 
L
I
M
I
T
 
5
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
O
r
d
e
r
 
b
y
 
g
d
p
 
D
E
S
C
 
t
o
 
g
e
t
 
t
h
e
 
h
i
g
h
e
s
t
 
f
i
r
s
t
.
"
,


 
 
 
 
 
 
"
L
I
M
I
T
 
5
 
r
e
s
t
r
i
c
t
s
 
t
h
e
 
r
e
s
u
l
t
 
t
o
 
5
 
r
o
w
s
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
O
R
D
E
R
 
B
Y
"
,
 
"
D
E
S
C
"
,
 
"
L
I
M
I
T
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
-
1
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
0
,


 
 
 
 
t
i
t
l
e
:
 
"
C
o
u
n
t
r
i
e
s
 
S
t
a
r
t
i
n
g
 
w
i
t
h
 
Y
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
F
i
n
d
 
t
h
e
 
c
o
u
n
t
r
i
e
s
 
t
h
a
t
 
s
t
a
r
t
 
w
i
t
h
 
t
h
e
 
l
e
t
t
e
r
 
Y
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
'
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
Y
%
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
t
h
e
 
L
I
K
E
 
o
p
e
r
a
t
o
r
 
f
o
r
 
p
a
t
t
e
r
n
 
m
a
t
c
h
i
n
g
.
"
,


 
 
 
 
 
 
"
T
h
e
 
%
 
w
i
l
d
c
a
r
d
 
m
a
t
c
h
e
s
 
a
n
y
 
s
e
q
u
e
n
c
e
 
o
f
 
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
.
"
,


 
 
 
 
 
 
"
'
Y
%
'
 
m
a
t
c
h
e
s
 
a
n
y
 
s
t
r
i
n
g
 
s
t
a
r
t
i
n
g
 
w
i
t
h
 
Y
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
I
K
E
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
-
2
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
1
,


 
 
 
 
t
i
t
l
e
:
 
"
C
o
u
n
t
r
i
e
s
 
E
n
d
i
n
g
 
w
i
t
h
 
y
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
F
i
n
d
 
t
h
e
 
c
o
u
n
t
r
i
e
s
 
t
h
a
t
 
e
n
d
 
w
i
t
h
 
t
h
e
 
l
e
t
t
e
r
 
y
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
'
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
%
y
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
P
u
t
 
t
h
e
 
%
 
w
i
l
d
c
a
r
d
 
b
e
f
o
r
e
 
t
h
e
 
l
e
t
t
e
r
 
t
o
 
m
a
t
c
h
 
e
n
d
i
n
g
s
.
"
,


 
 
 
 
 
 
"
'
%
y
'
 
m
a
t
c
h
e
s
 
a
n
y
 
s
t
r
i
n
g
 
e
n
d
i
n
g
 
w
i
t
h
 
y
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
I
K
E
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
-
3
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
2
,


 
 
 
 
t
i
t
l
e
:
 
"
C
o
u
n
t
r
i
e
s
 
C
o
n
t
a
i
n
i
n
g
 
x
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
F
i
n
d
 
t
h
e
 
c
o
u
n
t
r
i
e
s
 
t
h
a
t
 
c
o
n
t
a
i
n
 
t
h
e
 
l
e
t
t
e
r
 
x
.
 
L
u
x
e
m
b
o
u
r
g
 
i
s
 
o
n
e
 
s
u
c
h
 
c
o
u
n
t
r
y
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
'
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
%
x
%
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
P
l
a
c
e
 
%
 
o
n
 
b
o
t
h
 
s
i
d
e
s
 
o
f
 
t
h
e
 
c
h
a
r
a
c
t
e
r
 
t
o
 
s
e
a
r
c
h
 
a
n
y
w
h
e
r
e
 
i
n
 
t
h
e
 
s
t
r
i
n
g
.
"
,


 
 
 
 
 
 
"
'
%
x
%
'
 
m
a
t
c
h
e
s
 
x
 
i
n
 
a
n
y
 
p
o
s
i
t
i
o
n
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
I
K
E
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
-
4
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
3
,


 
 
 
 
t
i
t
l
e
:
 
"
C
o
u
n
t
r
i
e
s
 
E
n
d
i
n
g
 
w
i
t
h
 
l
a
n
d
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
F
i
n
d
 
t
h
e
 
c
o
u
n
t
r
i
e
s
 
t
h
a
t
 
e
n
d
 
w
i
t
h
 
'
l
a
n
d
'
.
 
I
c
e
l
a
n
d
 
a
n
d
 
S
w
i
t
z
e
r
l
a
n
d
 
a
r
e
 
e
x
a
m
p
l
e
s
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
'
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
%
l
a
n
d
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
t
h
e
 
L
I
K
E
 
o
p
e
r
a
t
o
r
 
w
i
t
h
 
%
 
b
e
f
o
r
e
 
t
h
e
 
p
a
t
t
e
r
n
.
"
,


 
 
 
 
 
 
"
'
%
l
a
n
d
'
 
m
a
t
c
h
e
s
 
a
n
y
 
n
a
m
e
 
e
n
d
i
n
g
 
w
i
t
h
 
'
l
a
n
d
'
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
I
K
E
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
-
5
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
4
,


 
 
 
 
t
i
t
l
e
:
 
"
C
o
u
n
t
r
i
e
s
 
S
t
a
r
t
i
n
g
 
w
i
t
h
 
C
 
E
n
d
i
n
g
 
w
i
t
h
 
i
a
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
F
i
n
d
 
t
h
e
 
c
o
u
n
t
r
i
e
s
 
t
h
a
t
 
s
t
a
r
t
 
w
i
t
h
 
'
C
'
 
a
n
d
 
e
n
d
 
w
i
t
h
 
'
i
a
'
.
 
C
o
l
o
m
b
i
a
 
i
s
 
o
n
e
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
'
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
C
%
i
a
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
Y
o
u
 
c
a
n
 
c
o
m
b
i
n
e
 
f
i
x
e
d
 
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
 
w
i
t
h
 
t
h
e
 
%
 
w
i
l
d
c
a
r
d
.
"
,


 
 
 
 
 
 
"
'
C
%
i
a
'
 
m
e
a
n
s
 
s
t
a
r
t
s
 
w
i
t
h
 
C
,
 
e
n
d
s
 
w
i
t
h
 
i
a
,
 
a
n
y
t
h
i
n
g
 
i
n
 
b
e
t
w
e
e
n
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
I
K
E
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
-
6
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
5
,


 
 
 
 
t
i
t
l
e
:
 
"
C
o
u
n
t
r
i
e
s
 
w
i
t
h
 
o
o
 
i
n
 
N
a
m
e
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
F
i
n
d
 
t
h
e
 
c
o
u
n
t
r
i
e
s
 
t
h
a
t
 
h
a
v
e
 
'
o
o
'
 
i
n
 
t
h
e
 
n
a
m
e
.
 
C
a
m
e
r
o
o
n
 
i
s
 
o
n
e
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
'
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
%
o
o
%
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
S
e
a
r
c
h
 
f
o
r
 
'
o
o
'
 
a
n
y
w
h
e
r
e
 
i
n
 
t
h
e
 
n
a
m
e
.
"
,


 
 
 
 
 
 
"
U
s
e
 
'
%
o
o
%
'
 
t
o
 
m
a
t
c
h
 
o
o
 
i
n
 
a
n
y
 
p
o
s
i
t
i
o
n
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
I
K
E
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
-
7
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
6
,


 
 
 
 
t
i
t
l
e
:
 
"
C
o
u
n
t
r
i
e
s
 
w
i
t
h
 
T
h
r
e
e
 
o
r
 
M
o
r
e
 
a
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
F
i
n
d
 
t
h
e
 
c
o
u
n
t
r
i
e
s
 
t
h
a
t
 
h
a
v
e
 
t
h
r
e
e
 
o
r
 
m
o
r
e
 
'
a
'
 
i
n
 
t
h
e
 
n
a
m
e
.
 
C
a
n
a
d
a
 
h
a
s
 
t
h
r
e
e
 
a
'
s
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
'
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
%
a
%
a
%
a
%
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
E
a
c
h
 
'
a
'
 
n
e
e
d
s
 
a
 
s
u
r
r
o
u
n
d
i
n
g
 
%
 
w
i
l
d
c
a
r
d
 
t
o
 
a
l
l
o
w
 
o
t
h
e
r
 
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
.
"
,


 
 
 
 
 
 
"
T
h
r
e
e
 
a
'
s
 
w
i
t
h
 
w
i
l
d
c
a
r
d
s
 
b
e
t
w
e
e
n
 
t
h
e
m
:
 
'
%
a
%
a
%
a
%
'
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
I
K
E
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
-
8
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
7
,


 
 
 
 
t
i
t
l
e
:
 
"
C
o
u
n
t
r
i
e
s
 
w
i
t
h
 
t
 
a
s
 
S
e
c
o
n
d
 
C
h
a
r
a
c
t
e
r
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
F
i
n
d
 
t
h
e
 
c
o
u
n
t
r
i
e
s
 
t
h
a
t
 
h
a
v
e
 
'
t
'
 
a
s
 
t
h
e
 
s
e
c
o
n
d
 
c
h
a
r
a
c
t
e
r
.
 
U
s
e
 
t
h
e
 
u
n
d
e
r
s
c
o
r
e
 
_
 
w
i
l
d
c
a
r
d
 
f
o
r
 
a
 
s
i
n
g
l
e
 
c
h
a
r
a
c
t
e
r
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
'
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
_
t
%
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
T
h
e
 
_
 
w
i
l
d
c
a
r
d
 
m
a
t
c
h
e
s
 
e
x
a
c
t
l
y
 
o
n
e
 
c
h
a
r
a
c
t
e
r
.
"
,


 
 
 
 
 
 
"
'
_
t
%
'
 
m
e
a
n
s
:
 
a
n
y
 
s
i
n
g
l
e
 
c
h
a
r
a
c
t
e
r
,
 
t
h
e
n
 
t
,
 
t
h
e
n
 
a
n
y
t
h
i
n
g
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
I
K
E
"
,
 
"
u
n
d
e
r
s
c
o
r
e
 
w
i
l
d
c
a
r
d
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
-
9
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
8
,


 
 
 
 
t
i
t
l
e
:
 
"
T
w
o
 
o
 
S
e
p
a
r
a
t
e
d
 
b
y
 
T
w
o
 
C
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
F
i
n
d
 
t
h
e
 
c
o
u
n
t
r
i
e
s
 
t
h
a
t
 
h
a
v
e
 
t
w
o
 
'
o
'
 
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
 
s
e
p
a
r
a
t
e
d
 
b
y
 
e
x
a
c
t
l
y
 
t
w
o
 
o
t
h
e
r
 
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
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
'
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
%
o
_
_
o
%
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
_
 
f
o
r
 
e
a
c
h
 
s
i
n
g
l
e
 
c
h
a
r
a
c
t
e
r
 
b
e
t
w
e
e
n
 
t
h
e
 
t
w
o
 
o
 
l
e
t
t
e
r
s
.
"
,


 
 
 
 
 
 
"
'
%
o
_
_
o
%
'
 
m
e
a
n
s
:
 
o
,
 
t
h
e
n
 
a
n
y
 
t
w
o
 
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
,
 
t
h
e
n
 
o
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
I
K
E
"
,
 
"
u
n
d
e
r
s
c
o
r
e
 
w
i
l
d
c
a
r
d
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
-
1
0
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
a
m
e
s
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
9
,


 
 
 
 
t
i
t
l
e
:
 
"
C
o
u
n
t
r
i
e
s
 
w
i
t
h
 
E
x
a
c
t
l
y
 
F
o
u
r
 
C
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
F
i
n
d
 
t
h
e
 
c
o
u
n
t
r
i
e
s
 
t
h
a
t
 
h
a
v
e
 
e
x
a
c
t
l
y
 
f
o
u
r
 
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
.
 
C
u
b
a
,
 
I
r
a
n
,
 
a
n
d
 
I
r
a
q
 
a
r
e
 
e
x
a
m
p
l
e
s
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
L
E
N
G
T
H
(
n
a
m
e
)
 
=
 
4
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
t
h
e
 
L
E
N
G
T
H
(
)
 
f
u
n
c
t
i
o
n
 
t
o
 
c
o
u
n
t
 
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
 
i
n
 
a
 
s
t
r
i
n
g
.
"
,


 
 
 
 
 
 
"
Y
o
u
 
c
o
u
l
d
 
a
l
s
o
 
u
s
e
 
L
I
K
E
 
'
_
_
_
_
'
 
(
f
o
u
r
 
u
n
d
e
r
s
c
o
r
e
s
)
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
E
N
G
T
H
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
-
1
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
0
,


 
 
 
 
t
i
t
l
e
:
 
"
I
n
t
r
o
d
u
c
t
i
o
n
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
S
h
o
w
 
t
h
e
 
n
a
m
e
,
 
c
o
n
t
i
n
e
n
t
,
 
a
n
d
 
p
o
p
u
l
a
t
i
o
n
 
o
f
 
a
l
l
 
c
o
u
n
t
r
i
e
s
 
i
n
 
t
h
e
 
w
o
r
l
d
 
t
a
b
l
e
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
_
_
_
,
 
_
_
_
,
 
_
_
_
\
n
 
F
R
O
M
 
w
o
r
l
d
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
c
o
n
t
i
n
e
n
t
,
 
p
o
p
u
l
a
t
i
o
n
 
F
R
O
M
 
w
o
r
l
d
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
L
i
s
t
 
t
h
e
 
t
h
r
e
e
 
c
o
l
u
m
n
 
n
a
m
e
s
 
s
e
p
a
r
a
t
e
d
 
b
y
 
c
o
m
m
a
s
 
a
f
t
e
r
 
S
E
L
E
C
T
.
"
,


 
 
 
 
 
 
"
T
h
e
 
c
o
l
u
m
n
s
 
a
r
e
:
 
n
a
m
e
,
 
c
o
n
t
i
n
e
n
t
,
 
p
o
p
u
l
a
t
i
o
n
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
-
2
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
1
,


 
 
 
 
t
i
t
l
e
:
 
"
L
a
r
g
e
 
C
o
u
n
t
r
i
e
s
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
S
h
o
w
 
t
h
e
 
n
a
m
e
 
o
f
 
c
o
u
n
t
r
i
e
s
 
t
h
a
t
 
h
a
v
e
 
a
 
p
o
p
u
l
a
t
i
o
n
 
o
f
 
a
t
 
l
e
a
s
t
 
2
0
0
 
m
i
l
l
i
o
n
 
(
2
0
0
0
0
0
0
0
0
)
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
p
o
p
u
l
a
t
i
o
n
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
p
o
p
u
l
a
t
i
o
n
 
>
=
 
2
0
0
0
0
0
0
0
0
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
>
=
 
f
o
r
 
'
a
t
 
l
e
a
s
t
'
.
"
,


 
 
 
 
 
 
"
2
0
0
 
m
i
l
l
i
o
n
 
i
s
 
w
r
i
t
t
e
n
 
a
s
 
2
0
0
0
0
0
0
0
0
 
(
n
o
 
c
o
m
m
a
s
 
i
n
 
S
Q
L
)
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
c
o
m
p
a
r
i
s
o
n
 
o
p
e
r
a
t
o
r
s
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
-
3
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
2
,


 
 
 
 
t
i
t
l
e
:
 
"
P
e
r
 
C
a
p
i
t
a
 
G
D
P
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
S
h
o
w
 
t
h
e
 
n
a
m
e
 
a
n
d
 
p
e
r
 
c
a
p
i
t
a
 
G
D
P
 
(
g
d
p
/
p
o
p
u
l
a
t
i
o
n
)
 
f
o
r
 
c
o
u
n
t
r
i
e
s
 
w
i
t
h
 
p
o
p
u
l
a
t
i
o
n
 
>
=
 
2
0
0
 
m
i
l
l
i
o
n
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
_
_
_
\
n
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
p
o
p
u
l
a
t
i
o
n
 
>
=
 
2
0
0
0
0
0
0
0
0
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
g
d
p
/
p
o
p
u
l
a
t
i
o
n
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
p
o
p
u
l
a
t
i
o
n
 
>
=
 
2
0
0
0
0
0
0
0
0
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
P
e
r
 
c
a
p
i
t
a
 
G
D
P
 
i
s
 
c
a
l
c
u
l
a
t
e
d
 
b
y
 
d
i
v
i
d
i
n
g
 
g
d
p
 
b
y
 
p
o
p
u
l
a
t
i
o
n
.
"
,


 
 
 
 
 
 
"
U
s
e
 
g
d
p
/
p
o
p
u
l
a
t
i
o
n
 
a
s
 
a
 
c
o
m
p
u
t
e
d
 
c
o
l
u
m
n
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
a
r
i
t
h
m
e
t
i
c
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
-
4
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
3
,


 
 
 
 
t
i
t
l
e
:
 
"
S
o
u
t
h
 
A
m
e
r
i
c
a
 
i
n
 
M
i
l
l
i
o
n
s
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
S
h
o
w
 
t
h
e
 
n
a
m
e
 
a
n
d
 
p
o
p
u
l
a
t
i
o
n
 
i
n
 
m
i
l
l
i
o
n
s
 
f
o
r
 
t
h
e
 
c
o
u
n
t
r
i
e
s
 
o
f
 
S
o
u
t
h
 
A
m
e
r
i
c
a
.
 
D
i
v
i
d
e
 
p
o
p
u
l
a
t
i
o
n
 
b
y
 
1
0
0
0
0
0
0
 
t
o
 
g
e
t
 
t
h
e
 
v
a
l
u
e
 
i
n
 
m
i
l
l
i
o
n
s
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
_
_
_
\
n
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
c
o
n
t
i
n
e
n
t
 
=
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
p
o
p
u
l
a
t
i
o
n
/
1
0
0
0
0
0
0
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
c
o
n
t
i
n
e
n
t
 
=
 
'
S
o
u
t
h
 
A
m
e
r
i
c
a
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
D
i
v
i
d
e
 
p
o
p
u
l
a
t
i
o
n
 
b
y
 
1
0
0
0
0
0
0
 
t
o
 
c
o
n
v
e
r
t
 
t
o
 
m
i
l
l
i
o
n
s
.
"
,


 
 
 
 
 
 
"
F
i
l
t
e
r
 
c
o
n
t
i
n
e
n
t
 
=
 
'
S
o
u
t
h
 
A
m
e
r
i
c
a
'
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
a
r
i
t
h
m
e
t
i
c
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
-
5
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
4
,


 
 
 
 
t
i
t
l
e
:
 
"
F
r
a
n
c
e
,
 
G
e
r
m
a
n
y
,
 
I
t
a
l
y
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
S
h
o
w
 
t
h
e
 
n
a
m
e
 
a
n
d
 
p
o
p
u
l
a
t
i
o
n
 
f
o
r
 
F
r
a
n
c
e
,
 
G
e
r
m
a
n
y
,
 
a
n
d
 
I
t
a
l
y
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
p
o
p
u
l
a
t
i
o
n
\
n
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
n
a
m
e
 
I
N
 
(
_
_
_
)
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
p
o
p
u
l
a
t
i
o
n
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
n
a
m
e
 
I
N
 
(
'
F
r
a
n
c
e
'
,
 
'
G
e
r
m
a
n
y
'
,
 
'
I
t
a
l
y
'
)
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
t
h
e
 
I
N
 
o
p
e
r
a
t
o
r
 
w
i
t
h
 
a
 
l
i
s
t
 
o
f
 
c
o
u
n
t
r
y
 
n
a
m
e
s
.
"
,


 
 
 
 
 
 
"
E
a
c
h
 
c
o
u
n
t
r
y
 
n
a
m
e
 
m
u
s
t
 
b
e
 
i
n
 
s
i
n
g
l
e
 
q
u
o
t
e
s
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
I
N
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
-
6
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
5
,


 
 
 
 
t
i
t
l
e
:
 
"
U
n
i
t
e
d
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
S
h
o
w
 
t
h
e
 
c
o
u
n
t
r
i
e
s
 
t
h
a
t
 
h
a
v
e
 
a
 
n
a
m
e
 
t
h
a
t
 
i
n
c
l
u
d
e
s
 
t
h
e
 
w
o
r
d
 
'
U
n
i
t
e
d
'
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
%
U
n
i
t
e
d
%
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
L
I
K
E
 
w
i
t
h
 
%
 
w
i
l
d
c
a
r
d
s
 
o
n
 
b
o
t
h
 
s
i
d
e
s
.
"
,


 
 
 
 
 
 
"
'
%
U
n
i
t
e
d
%
'
 
m
a
t
c
h
e
s
 
U
n
i
t
e
d
 
a
n
y
w
h
e
r
e
 
i
n
 
t
h
e
 
n
a
m
e
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
I
K
E
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
-
7
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
6
,


 
 
 
 
t
i
t
l
e
:
 
"
T
w
o
 
W
a
y
s
 
t
o
 
b
e
 
B
i
g
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
A
 
c
o
u
n
t
r
y
 
i
s
 
b
i
g
 
i
f
 
i
t
 
h
a
s
 
a
n
 
a
r
e
a
 
o
f
 
m
o
r
e
 
t
h
a
n
 
3
 
m
i
l
l
i
o
n
 
s
q
 
k
m
 
o
r
 
a
 
p
o
p
u
l
a
t
i
o
n
 
o
f
 
m
o
r
e
 
t
h
a
n
 
2
5
0
 
m
i
l
l
i
o
n
.
 
S
h
o
w
 
t
h
e
 
c
o
u
n
t
r
i
e
s
 
t
h
a
t
 
a
r
e
 
b
i
g
 
b
y
 
a
r
e
a
 
o
r
 
b
i
g
 
b
y
 
p
o
p
u
l
a
t
i
o
n
.
 
S
h
o
w
 
n
a
m
e
,
 
p
o
p
u
l
a
t
i
o
n
,
 
a
n
d
 
a
r
e
a
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
p
o
p
u
l
a
t
i
o
n
,
 
a
r
e
a
\
n
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
a
r
e
a
 
>
 
_
_
_
 
O
R
 
p
o
p
u
l
a
t
i
o
n
 
>
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
p
o
p
u
l
a
t
i
o
n
,
 
a
r
e
a
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
a
r
e
a
 
>
 
3
0
0
0
0
0
0
 
O
R
 
p
o
p
u
l
a
t
i
o
n
 
>
 
2
5
0
0
0
0
0
0
0
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
O
R
 
t
o
 
c
o
m
b
i
n
e
 
t
w
o
 
c
o
n
d
i
t
i
o
n
s
.
"
,


 
 
 
 
 
 
"
3
 
m
i
l
l
i
o
n
 
=
 
3
0
0
0
0
0
0
,
 
2
5
0
 
m
i
l
l
i
o
n
 
=
 
2
5
0
0
0
0
0
0
0
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
O
R
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
-
8
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
7
,


 
 
 
 
t
i
t
l
e
:
 
"
O
n
e
 
o
r
 
t
h
e
 
O
t
h
e
r
 
(
X
O
R
)
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
E
x
c
l
u
s
i
v
e
 
O
R
 
(
X
O
R
)
:
 
S
h
o
w
 
c
o
u
n
t
r
i
e
s
 
t
h
a
t
 
a
r
e
 
b
i
g
 
b
y
 
a
r
e
a
 
(
>
 
3
 
m
i
l
l
i
o
n
)
 
o
r
 
b
i
g
 
b
y
 
p
o
p
u
l
a
t
i
o
n
 
(
>
 
2
5
0
 
m
i
l
l
i
o
n
)
,
 
b
u
t
 
n
o
t
 
b
o
t
h
.
 
S
h
o
w
 
n
a
m
e
,
 
p
o
p
u
l
a
t
i
o
n
,
 
a
n
d
 
a
r
e
a
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
p
o
p
u
l
a
t
i
o
n
,
 
a
r
e
a
\
n
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
(
a
r
e
a
 
>
 
3
0
0
0
0
0
0
 
O
R
 
p
o
p
u
l
a
t
i
o
n
 
>
 
2
5
0
0
0
0
0
0
0
)
\
n
 
 
 
A
N
D
 
N
O
T
 
(
_
_
_
)
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
p
o
p
u
l
a
t
i
o
n
,
 
a
r
e
a
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
(
a
r
e
a
 
>
 
3
0
0
0
0
0
0
 
O
R
 
p
o
p
u
l
a
t
i
o
n
 
>
 
2
5
0
0
0
0
0
0
0
)
 
A
N
D
 
N
O
T
 
(
a
r
e
a
 
>
 
3
0
0
0
0
0
0
 
A
N
D
 
p
o
p
u
l
a
t
i
o
n
 
>
 
2
5
0
0
0
0
0
0
0
)
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
X
O
R
 
m
e
a
n
s
 
o
n
e
 
c
o
n
d
i
t
i
o
n
 
i
s
 
t
r
u
e
 
b
u
t
 
n
o
t
 
b
o
t
h
.
"
,


 
 
 
 
 
 
"
U
s
e
 
(
A
 
O
R
 
B
)
 
A
N
D
 
N
O
T
 
(
A
 
A
N
D
 
B
)
 
t
o
 
e
x
p
r
e
s
s
 
X
O
R
.
"
,


 
 
 
 
 
 
"
E
x
c
l
u
d
e
 
r
o
w
s
 
w
h
e
r
e
 
b
o
t
h
 
c
o
n
d
i
t
i
o
n
s
 
a
r
e
 
t
r
u
e
 
u
s
i
n
g
 
A
N
D
 
N
O
T
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
O
R
"
,
 
"
A
N
D
"
,
 
"
N
O
T
"
,
 
"
X
O
R
 
l
o
g
i
c
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
-
9
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
8
,


 
 
 
 
t
i
t
l
e
:
 
"
R
o
u
n
d
i
n
g
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
F
o
r
 
S
o
u
t
h
 
A
m
e
r
i
c
a
,
 
s
h
o
w
 
p
o
p
u
l
a
t
i
o
n
 
i
n
 
m
i
l
l
i
o
n
s
 
a
n
d
 
G
D
P
 
i
n
 
b
i
l
l
i
o
n
s
,
 
b
o
t
h
 
r
o
u
n
d
e
d
 
t
o
 
2
 
d
e
c
i
m
a
l
 
p
l
a
c
e
s
.
 
D
i
v
i
d
e
 
p
o
p
u
l
a
t
i
o
n
 
b
y
 
1
0
0
0
0
0
0
 
a
n
d
 
g
d
p
 
b
y
 
1
0
0
0
0
0
0
0
0
0
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
\
n
 
 
R
O
U
N
D
(
_
_
_
,
 
2
)
,
\
n
 
 
R
O
U
N
D
(
_
_
_
,
 
2
)
\
n
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
c
o
n
t
i
n
e
n
t
 
=
 
'
S
o
u
t
h
 
A
m
e
r
i
c
a
'
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
R
O
U
N
D
(
p
o
p
u
l
a
t
i
o
n
/
1
0
0
0
0
0
0
.
0
,
 
2
)
,
 
R
O
U
N
D
(
g
d
p
/
1
0
0
0
0
0
0
0
0
0
.
0
,
 
2
)
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
c
o
n
t
i
n
e
n
t
 
=
 
'
S
o
u
t
h
 
A
m
e
r
i
c
a
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
R
O
U
N
D
(
v
a
l
u
e
,
 
2
)
 
t
o
 
r
o
u
n
d
 
t
o
 
2
 
d
e
c
i
m
a
l
 
p
l
a
c
e
s
.
"
,


 
 
 
 
 
 
"
D
i
v
i
d
e
 
b
y
 
1
0
0
0
0
0
0
.
0
 
(
w
i
t
h
 
d
e
c
i
m
a
l
)
 
t
o
 
g
e
t
 
f
l
o
a
t
i
n
g
 
p
o
i
n
t
 
d
i
v
i
s
i
o
n
 
i
n
 
S
Q
L
i
t
e
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
R
O
U
N
D
"
,
 
"
a
r
i
t
h
m
e
t
i
c
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
-
1
0
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
9
,


 
 
 
 
t
i
t
l
e
:
 
"
T
r
i
l
l
i
o
n
 
D
o
l
l
a
r
 
E
c
o
n
o
m
i
e
s
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
S
h
o
w
 
t
h
e
 
p
e
r
-
c
a
p
i
t
a
 
G
D
P
 
f
o
r
 
t
h
o
s
e
 
c
o
u
n
t
r
i
e
s
 
w
i
t
h
 
a
 
G
D
P
 
o
f
 
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
 
t
r
i
l
l
i
o
n
 
(
1
0
0
0
0
0
0
0
0
0
0
0
0
)
.
 
R
o
u
n
d
 
t
h
e
 
v
a
l
u
e
 
t
o
 
t
h
e
 
n
e
a
r
e
s
t
 
$
1
0
0
0
.
 
P
e
r
-
c
a
p
i
t
a
 
G
D
P
 
i
s
 
g
d
p
/
p
o
p
u
l
a
t
i
o
n
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
R
O
U
N
D
(
_
_
_
)
\
n
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
g
d
p
 
>
=
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
R
O
U
N
D
(
g
d
p
/
p
o
p
u
l
a
t
i
o
n
,
 
-
3
)
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
g
d
p
 
>
=
 
1
0
0
0
0
0
0
0
0
0
0
0
0
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
A
 
t
r
i
l
l
i
o
n
 
i
s
 
1
0
0
0
0
0
0
0
0
0
0
0
0
.
"
,


 
 
 
 
 
 
"
R
O
U
N
D
(
v
a
l
u
e
,
 
-
3
)
 
r
o
u
n
d
s
 
t
o
 
t
h
e
 
n
e
a
r
e
s
t
 
t
h
o
u
s
a
n
d
.
"
,


 
 
 
 
 
 
"
P
e
r
-
c
a
p
i
t
a
 
G
D
P
 
=
 
g
d
p
/
p
o
p
u
l
a
t
i
o
n
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
R
O
U
N
D
"
,
 
"
a
r
i
t
h
m
e
t
i
c
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
-
1
1
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
1
0
,


 
 
 
 
t
i
t
l
e
:
 
"
N
a
m
e
 
a
n
d
 
C
a
p
i
t
a
l
 
S
a
m
e
 
L
e
n
g
t
h
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
S
h
o
w
 
t
h
e
 
n
a
m
e
 
a
n
d
 
c
a
p
i
t
a
l
 
w
h
e
r
e
 
t
h
e
 
n
a
m
e
 
a
n
d
 
t
h
e
 
c
a
p
i
t
a
l
 
h
a
v
e
 
t
h
e
 
s
a
m
e
 
n
u
m
b
e
r
 
o
f
 
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
.
 
U
s
e
 
t
h
e
 
L
E
N
G
T
H
(
)
 
f
u
n
c
t
i
o
n
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
c
a
p
i
t
a
l
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
L
E
N
G
T
H
(
_
_
_
)
 
=
 
L
E
N
G
T
H
(
_
_
_
)
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
c
a
p
i
t
a
l
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
L
E
N
G
T
H
(
n
a
m
e
)
 
=
 
L
E
N
G
T
H
(
c
a
p
i
t
a
l
)
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
L
E
N
G
T
H
(
s
t
r
i
n
g
)
 
r
e
t
u
r
n
s
 
t
h
e
 
n
u
m
b
e
r
 
o
f
 
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
.
"
,


 
 
 
 
 
 
"
C
o
m
p
a
r
e
 
L
E
N
G
T
H
(
n
a
m
e
)
 
w
i
t
h
 
L
E
N
G
T
H
(
c
a
p
i
t
a
l
)
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
E
N
G
T
H
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
-
1
2
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
1
1
,


 
 
 
 
t
i
t
l
e
:
 
"
M
a
t
c
h
i
n
g
 
N
a
m
e
 
a
n
d
 
C
a
p
i
t
a
l
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
S
h
o
w
 
t
h
e
 
n
a
m
e
 
a
n
d
 
c
a
p
i
t
a
l
 
w
h
e
r
e
 
t
h
e
 
f
i
r
s
t
 
l
e
t
t
e
r
 
o
f
 
e
a
c
h
 
m
a
t
c
h
.
 
D
o
 
n
o
t
 
i
n
c
l
u
d
e
 
c
o
u
n
t
r
i
e
s
 
w
h
e
r
e
 
t
h
e
 
n
a
m
e
 
a
n
d
 
c
a
p
i
t
a
l
 
a
r
e
 
t
h
e
 
s
a
m
e
 
w
o
r
d
.
 
U
s
e
 
S
U
B
S
T
R
(
s
t
r
,
 
s
t
a
r
t
,
 
l
e
n
)
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
c
a
p
i
t
a
l
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
S
U
B
S
T
R
(
_
_
_
,
 
1
,
 
1
)
 
=
 
S
U
B
S
T
R
(
_
_
_
,
 
1
,
 
1
)
\
n
 
 
 
A
N
D
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
,
 
c
a
p
i
t
a
l
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
S
U
B
S
T
R
(
n
a
m
e
,
 
1
,
 
1
)
 
=
 
S
U
B
S
T
R
(
c
a
p
i
t
a
l
,
 
1
,
 
1
)
 
A
N
D
 
n
a
m
e
 
<
>
 
c
a
p
i
t
a
l
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
S
U
B
S
T
R
(
n
a
m
e
,
 
1
,
 
1
)
 
g
i
v
e
s
 
t
h
e
 
f
i
r
s
t
 
l
e
t
t
e
r
 
o
f
 
n
a
m
e
.
"
,


 
 
 
 
 
 
"
U
s
e
 
<
>
 
(
n
o
t
 
e
q
u
a
l
)
 
t
o
 
e
x
c
l
u
d
e
 
c
o
u
n
t
r
i
e
s
 
w
h
e
r
e
 
n
a
m
e
 
e
q
u
a
l
s
 
c
a
p
i
t
a
l
.
"
,


 
 
 
 
 
 
"
I
n
 
S
Q
L
i
t
e
,
 
u
s
e
 
S
U
B
S
T
R
 
i
n
s
t
e
a
d
 
o
f
 
L
E
F
T
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
S
U
B
S
T
R
"
,
 
"
c
o
m
p
a
r
i
s
o
n
 
o
p
e
r
a
t
o
r
s
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
-
1
3
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
w
o
r
l
d
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
1
2
,


 
 
 
 
t
i
t
l
e
:
 
"
A
l
l
 
V
o
w
e
l
s
 
N
o
 
S
p
a
c
e
s
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
F
i
n
d
 
t
h
e
 
c
o
u
n
t
r
y
 
t
h
a
t
 
h
a
s
 
a
l
l
 
t
h
e
 
v
o
w
e
l
s
 
(
a
,
 
e
,
 
i
,
 
o
,
 
u
)
 
i
n
 
i
t
s
 
n
a
m
e
 
a
n
d
 
n
o
 
s
p
a
c
e
s
.
 
E
q
u
a
t
o
r
i
a
l
 
G
u
i
n
e
a
 
a
n
d
 
D
o
m
i
n
i
c
a
n
 
R
e
p
u
b
l
i
c
 
h
a
v
e
 
a
l
l
 
v
o
w
e
l
s
 
b
u
t
 
a
l
s
o
 
h
a
v
e
 
s
p
a
c
e
s
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
H
a
r
d
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
\
n
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
%
a
%
'
\
n
 
 
 
A
N
D
 
n
a
m
e
 
L
I
K
E
 
'
%
e
%
'
\
n
 
 
 
A
N
D
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
w
o
r
l
d
 
W
H
E
R
E
 
n
a
m
e
 
L
I
K
E
 
'
%
a
%
'
 
A
N
D
 
n
a
m
e
 
L
I
K
E
 
'
%
e
%
'
 
A
N
D
 
n
a
m
e
 
L
I
K
E
 
'
%
i
%
'
 
A
N
D
 
n
a
m
e
 
L
I
K
E
 
'
%
o
%
'
 
A
N
D
 
n
a
m
e
 
L
I
K
E
 
'
%
u
%
'
 
A
N
D
 
n
a
m
e
 
N
O
T
 
L
I
K
E
 
'
%
 
%
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
C
h
e
c
k
 
f
o
r
 
e
a
c
h
 
v
o
w
e
l
 
i
n
d
i
v
i
d
u
a
l
l
y
 
u
s
i
n
g
 
L
I
K
E
 
'
%
v
o
w
e
l
%
'
.
"
,


 
 
 
 
 
 
"
E
x
c
l
u
d
e
 
s
p
a
c
e
s
 
w
i
t
h
 
N
O
T
 
L
I
K
E
 
'
%
 
%
'
.
"
,


 
 
 
 
 
 
"
Y
o
u
 
n
e
e
d
 
f
i
v
e
 
L
I
K
E
 
c
o
n
d
i
t
i
o
n
s
 
(
o
n
e
 
p
e
r
 
v
o
w
e
l
)
 
p
l
u
s
 
o
n
e
 
N
O
T
 
L
I
K
E
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
I
K
E
"
,
 
"
A
N
D
"
,
 
"
N
O
T
 
L
I
K
E
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
w
o
r
l
d
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
-
1
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
0
,


 
 
 
 
t
i
t
l
e
:
 
"
W
i
n
n
e
r
s
 
f
r
o
m
 
1
9
5
0
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
S
h
o
w
 
t
h
e
 
y
e
a
r
,
 
s
u
b
j
e
c
t
,
 
a
n
d
 
w
i
n
n
e
r
 
f
o
r
 
N
o
b
e
l
 
p
r
i
z
e
s
 
a
w
a
r
d
e
d
 
i
n
 
1
9
5
0
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
y
r
,
 
s
u
b
j
e
c
t
,
 
w
i
n
n
e
r
\
n
 
F
R
O
M
 
n
o
b
e
l
\
n
 
W
H
E
R
E
 
y
r
 
=
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
y
r
,
 
s
u
b
j
e
c
t
,
 
w
i
n
n
e
r
 
F
R
O
M
 
n
o
b
e
l
 
W
H
E
R
E
 
y
r
 
=
 
1
9
5
0
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
F
i
l
t
e
r
 
t
h
e
 
y
r
 
c
o
l
u
m
n
 
t
o
 
1
9
5
0
.
"
,


 
 
 
 
 
 
"
N
o
 
q
u
o
t
e
s
 
n
e
e
d
e
d
 
a
r
o
u
n
d
 
n
u
m
b
e
r
s
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
n
o
b
e
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
-
2
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
1
,


 
 
 
 
t
i
t
l
e
:
 
"
1
9
6
2
 
L
i
t
e
r
a
t
u
r
e
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
S
h
o
w
 
w
h
o
 
w
o
n
 
t
h
e
 
1
9
6
2
 
p
r
i
z
e
 
f
o
r
 
L
i
t
e
r
a
t
u
r
e
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
w
i
n
n
e
r
 
F
R
O
M
 
n
o
b
e
l
\
n
 
W
H
E
R
E
 
y
r
 
=
 
_
_
_
 
A
N
D
 
s
u
b
j
e
c
t
 
=
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
w
i
n
n
e
r
 
F
R
O
M
 
n
o
b
e
l
 
W
H
E
R
E
 
y
r
 
=
 
1
9
6
2
 
A
N
D
 
s
u
b
j
e
c
t
 
=
 
'
L
i
t
e
r
a
t
u
r
e
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
C
o
m
b
i
n
e
 
t
w
o
 
c
o
n
d
i
t
i
o
n
s
 
w
i
t
h
 
A
N
D
.
"
,


 
 
 
 
 
 
"
S
u
b
j
e
c
t
 
i
s
 
a
 
s
t
r
i
n
g
,
 
s
o
 
u
s
e
 
s
i
n
g
l
e
 
q
u
o
t
e
s
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
A
N
D
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
n
o
b
e
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
-
3
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
2
,


 
 
 
 
t
i
t
l
e
:
 
"
A
l
b
e
r
t
 
E
i
n
s
t
e
i
n
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
S
h
o
w
 
t
h
e
 
y
e
a
r
 
a
n
d
 
s
u
b
j
e
c
t
 
t
h
a
t
 
A
l
b
e
r
t
 
E
i
n
s
t
e
i
n
 
w
o
n
 
h
i
s
 
p
r
i
z
e
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
y
r
,
 
s
u
b
j
e
c
t
 
F
R
O
M
 
n
o
b
e
l
\
n
 
W
H
E
R
E
 
w
i
n
n
e
r
 
=
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
y
r
,
 
s
u
b
j
e
c
t
 
F
R
O
M
 
n
o
b
e
l
 
W
H
E
R
E
 
w
i
n
n
e
r
 
=
 
'
A
l
b
e
r
t
 
E
i
n
s
t
e
i
n
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
F
i
l
t
e
r
 
b
y
 
t
h
e
 
w
i
n
n
e
r
 
c
o
l
u
m
n
.
"
,


 
 
 
 
 
 
"
U
s
e
 
s
i
n
g
l
e
 
q
u
o
t
e
s
 
a
r
o
u
n
d
 
'
A
l
b
e
r
t
 
E
i
n
s
t
e
i
n
'
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
n
o
b
e
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
-
4
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
3
,


 
 
 
 
t
i
t
l
e
:
 
"
R
e
c
e
n
t
 
P
e
a
c
e
 
P
r
i
z
e
s
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
S
h
o
w
 
t
h
e
 
w
i
n
n
e
r
s
 
o
f
 
t
h
e
 
P
e
a
c
e
 
p
r
i
z
e
 
s
i
n
c
e
 
t
h
e
 
y
e
a
r
 
2
0
0
0
 
(
i
n
c
l
u
s
i
v
e
)
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
w
i
n
n
e
r
 
F
R
O
M
 
n
o
b
e
l
\
n
 
W
H
E
R
E
 
s
u
b
j
e
c
t
 
=
 
_
_
_
 
A
N
D
 
y
r
 
>
=
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
w
i
n
n
e
r
 
F
R
O
M
 
n
o
b
e
l
 
W
H
E
R
E
 
s
u
b
j
e
c
t
 
=
 
'
P
e
a
c
e
'
 
A
N
D
 
y
r
 
>
=
 
2
0
0
0
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
>
=
 
f
o
r
 
'
s
i
n
c
e
'
 
(
i
n
c
l
u
s
i
v
e
)
.
"
,


 
 
 
 
 
 
"
F
i
l
t
e
r
 
b
y
 
s
u
b
j
e
c
t
 
=
 
'
P
e
a
c
e
'
 
a
n
d
 
y
r
 
>
=
 
2
0
0
0
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
A
N
D
"
,
 
"
c
o
m
p
a
r
i
s
o
n
 
o
p
e
r
a
t
o
r
s
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
n
o
b
e
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
-
5
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
4
,


 
 
 
 
t
i
t
l
e
:
 
"
L
i
t
e
r
a
t
u
r
e
 
i
n
 
t
h
e
 
1
9
8
0
s
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
S
h
o
w
 
a
l
l
 
d
e
t
a
i
l
s
 
(
y
r
,
 
s
u
b
j
e
c
t
,
 
w
i
n
n
e
r
)
 
o
f
 
t
h
e
 
L
i
t
e
r
a
t
u
r
e
 
p
r
i
z
e
 
w
i
n
n
e
r
s
 
f
o
r
 
1
9
8
0
 
t
o
 
1
9
8
9
 
i
n
c
l
u
s
i
v
e
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
y
r
,
 
s
u
b
j
e
c
t
,
 
w
i
n
n
e
r
 
F
R
O
M
 
n
o
b
e
l
\
n
 
W
H
E
R
E
 
s
u
b
j
e
c
t
 
=
 
'
L
i
t
e
r
a
t
u
r
e
'
\
n
 
 
 
A
N
D
 
y
r
 
B
E
T
W
E
E
N
 
_
_
_
 
A
N
D
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
y
r
,
 
s
u
b
j
e
c
t
,
 
w
i
n
n
e
r
 
F
R
O
M
 
n
o
b
e
l
 
W
H
E
R
E
 
s
u
b
j
e
c
t
 
=
 
'
L
i
t
e
r
a
t
u
r
e
'
 
A
N
D
 
y
r
 
B
E
T
W
E
E
N
 
1
9
8
0
 
A
N
D
 
1
9
8
9
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
B
E
T
W
E
E
N
 
i
s
 
i
n
c
l
u
s
i
v
e
 
o
f
 
b
o
t
h
 
e
n
d
p
o
i
n
t
s
.
"
,


 
 
 
 
 
 
"
U
s
e
 
B
E
T
W
E
E
N
 
1
9
8
0
 
A
N
D
 
1
9
8
9
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
A
N
D
"
,
 
"
B
E
T
W
E
E
N
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
n
o
b
e
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
-
6
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
5
,


 
 
 
 
t
i
t
l
e
:
 
"
P
r
e
s
i
d
e
n
t
i
a
l
 
W
i
n
n
e
r
s
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
S
h
o
w
 
a
l
l
 
d
e
t
a
i
l
s
 
o
f
 
t
h
e
 
p
r
e
s
i
d
e
n
t
i
a
l
 
w
i
n
n
e
r
s
:
 
T
h
e
o
d
o
r
e
 
R
o
o
s
e
v
e
l
t
,
 
W
o
o
d
r
o
w
 
W
i
l
s
o
n
,
 
J
i
m
m
y
 
C
a
r
t
e
r
,
 
a
n
d
 
B
a
r
a
c
k
 
O
b
a
m
a
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
*
 
F
R
O
M
 
n
o
b
e
l
\
n
 
W
H
E
R
E
 
w
i
n
n
e
r
 
I
N
 
(
_
_
_
)
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
*
 
F
R
O
M
 
n
o
b
e
l
 
W
H
E
R
E
 
w
i
n
n
e
r
 
I
N
 
(
'
T
h
e
o
d
o
r
e
 
R
o
o
s
e
v
e
l
t
'
,
 
'
W
o
o
d
r
o
w
 
W
i
l
s
o
n
'
,
 
'
J
i
m
m
y
 
C
a
r
t
e
r
'
,
 
'
B
a
r
a
c
k
 
O
b
a
m
a
'
)
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
I
N
 
w
i
t
h
 
a
 
l
i
s
t
 
o
f
 
n
a
m
e
s
.
"
,


 
 
 
 
 
 
"
E
a
c
h
 
n
a
m
e
 
g
o
e
s
 
i
n
 
s
i
n
g
l
e
 
q
u
o
t
e
s
,
 
s
e
p
a
r
a
t
e
d
 
b
y
 
c
o
m
m
a
s
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
I
N
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
n
o
b
e
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
-
7
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
6
,


 
 
 
 
t
i
t
l
e
:
 
"
W
i
n
n
e
r
s
 
N
a
m
e
d
 
J
o
h
n
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
S
h
o
w
 
t
h
e
 
w
i
n
n
e
r
s
 
w
h
o
s
e
 
f
i
r
s
t
 
n
a
m
e
 
i
s
 
J
o
h
n
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
E
a
s
y
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
w
i
n
n
e
r
 
F
R
O
M
 
n
o
b
e
l
\
n
 
W
H
E
R
E
 
w
i
n
n
e
r
 
L
I
K
E
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:
 
"
S
E
L
E
C
T
 
w
i
n
n
e
r
 
F
R
O
M
 
n
o
b
e
l
 
W
H
E
R
E
 
w
i
n
n
e
r
 
L
I
K
E
 
'
J
o
h
n
 
%
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
F
i
r
s
t
 
n
a
m
e
 
J
o
h
n
 
f
o
l
l
o
w
e
d
 
b
y
 
a
 
s
p
a
c
e
 
a
n
d
 
a
n
y
 
l
a
s
t
 
n
a
m
e
.
"
,


 
 
 
 
 
 
"
U
s
e
 
'
J
o
h
n
 
%
'
 
t
o
 
m
a
t
c
h
 
J
o
h
n
 
f
o
l
l
o
w
e
d
 
b
y
 
a
n
y
t
h
i
n
g
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
I
K
E
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
n
o
b
e
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
-
8
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
7
,


 
 
 
 
t
i
t
l
e
:
 
"
P
h
y
s
i
c
s
 
1
9
8
0
 
o
r
 
C
h
e
m
i
s
t
r
y
 
1
9
8
4
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
S
h
o
w
 
t
h
e
 
y
e
a
r
,
 
s
u
b
j
e
c
t
,
 
a
n
d
 
w
i
n
n
e
r
 
f
o
r
 
P
h
y
s
i
c
s
 
w
i
n
n
e
r
s
 
i
n
 
1
9
8
0
 
t
o
g
e
t
h
e
r
 
w
i
t
h
 
C
h
e
m
i
s
t
r
y
 
w
i
n
n
e
r
s
 
i
n
 
1
9
8
4
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
y
r
,
 
s
u
b
j
e
c
t
,
 
w
i
n
n
e
r
 
F
R
O
M
 
n
o
b
e
l
\
n
 
W
H
E
R
E
 
(
_
_
_
)
\
n
 
 
 
 
O
R
 
(
_
_
_
)
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
y
r
,
 
s
u
b
j
e
c
t
,
 
w
i
n
n
e
r
 
F
R
O
M
 
n
o
b
e
l
 
W
H
E
R
E
 
(
s
u
b
j
e
c
t
 
=
 
'
P
h
y
s
i
c
s
'
 
A
N
D
 
y
r
 
=
 
1
9
8
0
)
 
O
R
 
(
s
u
b
j
e
c
t
 
=
 
'
C
h
e
m
i
s
t
r
y
'
 
A
N
D
 
y
r
 
=
 
1
9
8
4
)
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
O
R
 
t
o
 
c
o
m
b
i
n
e
 
t
w
o
 
c
o
m
p
o
u
n
d
 
c
o
n
d
i
t
i
o
n
s
.
"
,


 
 
 
 
 
 
"
E
a
c
h
 
c
o
n
d
i
t
i
o
n
 
u
s
e
s
 
A
N
D
 
t
o
 
p
a
i
r
 
a
 
s
u
b
j
e
c
t
 
w
i
t
h
 
a
 
y
e
a
r
.
"
,


 
 
 
 
 
 
"
U
s
e
 
p
a
r
e
n
t
h
e
s
e
s
 
t
o
 
g
r
o
u
p
:
 
(
s
u
b
j
e
c
t
 
=
 
'
P
h
y
s
i
c
s
'
 
A
N
D
 
y
r
 
=
 
1
9
8
0
)
 
O
R
 
.
.
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
A
N
D
"
,
 
"
O
R
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
n
o
b
e
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
-
9
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
8
,


 
 
 
 
t
i
t
l
e
:
 
"
E
x
c
l
u
d
e
 
C
h
e
m
i
s
t
r
y
 
a
n
d
 
M
e
d
i
c
i
n
e
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
S
h
o
w
 
y
e
a
r
,
 
s
u
b
j
e
c
t
,
 
a
n
d
 
w
i
n
n
e
r
 
f
o
r
 
1
9
8
0
 
w
i
n
n
e
r
s
,
 
e
x
c
l
u
d
i
n
g
 
C
h
e
m
i
s
t
r
y
 
a
n
d
 
M
e
d
i
c
i
n
e
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
y
r
,
 
s
u
b
j
e
c
t
,
 
w
i
n
n
e
r
 
F
R
O
M
 
n
o
b
e
l
\
n
 
W
H
E
R
E
 
y
r
 
=
 
1
9
8
0
\
n
 
 
 
A
N
D
 
s
u
b
j
e
c
t
 
N
O
T
 
I
N
 
(
_
_
_
)
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
y
r
,
 
s
u
b
j
e
c
t
,
 
w
i
n
n
e
r
 
F
R
O
M
 
n
o
b
e
l
 
W
H
E
R
E
 
y
r
 
=
 
1
9
8
0
 
A
N
D
 
s
u
b
j
e
c
t
 
N
O
T
 
I
N
 
(
'
C
h
e
m
i
s
t
r
y
'
,
 
'
M
e
d
i
c
i
n
e
'
)
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
N
O
T
 
I
N
 
t
o
 
e
x
c
l
u
d
e
 
m
u
l
t
i
p
l
e
 
v
a
l
u
e
s
.
"
,


 
 
 
 
 
 
"
N
O
T
 
I
N
 
(
'
C
h
e
m
i
s
t
r
y
'
,
 
'
M
e
d
i
c
i
n
e
'
)
 
f
i
l
t
e
r
s
 
o
u
t
 
t
h
o
s
e
 
t
w
o
 
s
u
b
j
e
c
t
s
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
N
O
T
 
I
N
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
n
o
b
e
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
-
1
0
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
9
,


 
 
 
 
t
i
t
l
e
:
 
"
E
a
r
l
y
 
M
e
d
i
c
i
n
e
,
 
L
a
t
e
 
L
i
t
e
r
a
t
u
r
e
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
S
h
o
w
 
y
e
a
r
,
 
s
u
b
j
e
c
t
,
 
a
n
d
 
w
i
n
n
e
r
 
f
o
r
 
M
e
d
i
c
i
n
e
 
p
r
i
z
e
s
 
b
e
f
o
r
e
 
1
9
1
0
 
t
o
g
e
t
h
e
r
 
w
i
t
h
 
L
i
t
e
r
a
t
u
r
e
 
p
r
i
z
e
s
 
f
r
o
m
 
2
0
0
4
 
o
n
w
a
r
d
s
 
(
i
n
c
l
u
s
i
v
e
)
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
y
r
,
 
s
u
b
j
e
c
t
,
 
w
i
n
n
e
r
 
F
R
O
M
 
n
o
b
e
l
\
n
 
W
H
E
R
E
 
(
_
_
_
)
\
n
 
 
 
 
O
R
 
(
_
_
_
)
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
y
r
,
 
s
u
b
j
e
c
t
,
 
w
i
n
n
e
r
 
F
R
O
M
 
n
o
b
e
l
 
W
H
E
R
E
 
(
s
u
b
j
e
c
t
 
=
 
'
M
e
d
i
c
i
n
e
'
 
A
N
D
 
y
r
 
<
 
1
9
1
0
)
 
O
R
 
(
s
u
b
j
e
c
t
 
=
 
'
L
i
t
e
r
a
t
u
r
e
'
 
A
N
D
 
y
r
 
>
=
 
2
0
0
4
)
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
C
o
m
b
i
n
e
 
t
w
o
 
c
o
n
d
i
t
i
o
n
s
 
w
i
t
h
 
O
R
.
"
,


 
 
 
 
 
 
"
B
e
f
o
r
e
 
1
9
1
0
:
 
y
r
 
<
 
1
9
1
0
.
 
F
r
o
m
 
2
0
0
4
 
o
n
w
a
r
d
s
:
 
y
r
 
>
=
 
2
0
0
4
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
A
N
D
"
,
 
"
O
R
"
,
 
"
c
o
m
p
a
r
i
s
o
n
 
o
p
e
r
a
t
o
r
s
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
n
o
b
e
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
-
1
1
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
1
0
,


 
 
 
 
t
i
t
l
e
:
 
"
U
m
l
a
u
t
:
 
P
E
T
E
R
 
G
R
U
N
B
E
R
G
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
F
i
n
d
 
a
l
l
 
d
e
t
a
i
l
s
 
o
f
 
t
h
e
 
p
r
i
z
e
 
w
o
n
 
b
y
 
P
E
T
E
R
 
G
R
U
N
B
E
R
G
.
 
N
o
t
e
:
 
t
h
e
 
a
n
s
w
e
r
 
i
n
c
l
u
d
e
s
 
a
n
 
u
m
l
a
u
t
 
c
h
a
r
a
c
t
e
r
.
 
I
n
 
t
h
e
 
d
a
t
a
s
e
t
 
t
h
i
s
 
m
a
y
 
b
e
 
s
t
o
r
e
d
 
a
s
 
'
P
e
t
e
r
 
G
r
u
n
b
e
r
g
'
 
w
i
t
h
o
u
t
 
t
h
e
 
u
m
l
a
u
t
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
*
 
F
R
O
M
 
n
o
b
e
l
\
n
 
W
H
E
R
E
 
w
i
n
n
e
r
 
=
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
*
 
F
R
O
M
 
n
o
b
e
l
 
W
H
E
R
E
 
w
i
n
n
e
r
 
L
I
K
E
 
'
P
e
t
e
r
 
G
r
%
n
b
e
r
g
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
S
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
s
 
c
a
n
 
b
e
 
t
r
i
c
k
y
.
 
U
s
e
 
L
I
K
E
 
w
i
t
h
 
a
 
w
i
l
d
c
a
r
d
 
f
o
r
 
t
h
e
 
u
m
l
a
u
t
 
p
o
s
i
t
i
o
n
.
"
,


 
 
 
 
 
 
"
T
r
y
 
L
I
K
E
 
'
P
e
t
e
r
 
G
r
%
n
b
e
r
g
'
 
t
o
 
m
a
t
c
h
 
r
e
g
a
r
d
l
e
s
s
 
o
f
 
t
h
e
 
u
m
l
a
u
t
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
I
K
E
"
,
 
"
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
s
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
n
o
b
e
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
-
1
2
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
1
1
,


 
 
 
 
t
i
t
l
e
:
 
"
A
p
o
s
t
r
o
p
h
e
:
 
E
U
G
E
N
E
 
O
'
N
E
I
L
L
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
F
i
n
d
 
a
l
l
 
d
e
t
a
i
l
s
 
o
f
 
t
h
e
 
p
r
i
z
e
 
w
o
n
 
b
y
 
E
U
G
E
N
E
 
O
'
N
E
I
L
L
.
 
Y
o
u
 
w
i
l
l
 
n
e
e
d
 
t
o
 
h
a
n
d
l
e
 
t
h
e
 
a
p
o
s
t
r
o
p
h
e
 
i
n
 
t
h
e
 
n
a
m
e
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:
 
"
S
E
L
E
C
T
 
*
 
F
R
O
M
 
n
o
b
e
l
\
n
 
W
H
E
R
E
 
w
i
n
n
e
r
 
=
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
*
 
F
R
O
M
 
n
o
b
e
l
 
W
H
E
R
E
 
w
i
n
n
e
r
 
=
 
'
E
u
g
e
n
e
 
O
'
'
N
e
i
l
l
'
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
I
n
 
S
Q
L
,
 
t
o
 
i
n
c
l
u
d
e
 
a
 
s
i
n
g
l
e
 
q
u
o
t
e
 
i
n
s
i
d
e
 
a
 
s
t
r
i
n
g
,
 
d
o
u
b
l
e
 
i
t
:
 
'
'
.
"
,


 
 
 
 
 
 
"
U
s
e
 
'
E
u
g
e
n
e
 
O
'
'
N
e
i
l
l
'
 
(
t
w
o
 
s
i
n
g
l
e
 
q
u
o
t
e
s
 
f
o
r
 
t
h
e
 
a
p
o
s
t
r
o
p
h
e
)
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
s
t
r
i
n
g
 
e
s
c
a
p
i
n
g
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
n
o
b
e
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
-
1
3
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
1
2
,


 
 
 
 
t
i
t
l
e
:
 
"
K
n
i
g
h
t
s
 
o
f
 
t
h
e
 
R
e
a
l
m
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
L
i
s
t
 
t
h
e
 
w
i
n
n
e
r
s
,
 
y
e
a
r
,
 
a
n
d
 
s
u
b
j
e
c
t
 
w
h
e
r
e
 
t
h
e
 
w
i
n
n
e
r
 
s
t
a
r
t
s
 
w
i
t
h
 
'
S
i
r
'
.
 
S
h
o
w
 
t
h
e
 
m
o
s
t
 
r
e
c
e
n
t
 
w
i
n
n
e
r
s
 
f
i
r
s
t
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
M
e
d
i
u
m
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
w
i
n
n
e
r
,
 
y
r
,
 
s
u
b
j
e
c
t
 
F
R
O
M
 
n
o
b
e
l
\
n
 
W
H
E
R
E
 
w
i
n
n
e
r
 
L
I
K
E
 
_
_
_
\
n
 
O
R
D
E
R
 
B
Y
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
w
i
n
n
e
r
,
 
y
r
,
 
s
u
b
j
e
c
t
 
F
R
O
M
 
n
o
b
e
l
 
W
H
E
R
E
 
w
i
n
n
e
r
 
L
I
K
E
 
'
S
i
r
%
'
 
O
R
D
E
R
 
B
Y
 
y
r
 
D
E
S
C
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
U
s
e
 
L
I
K
E
 
'
S
i
r
%
'
 
t
o
 
f
i
n
d
 
n
a
m
e
s
 
s
t
a
r
t
i
n
g
 
w
i
t
h
 
S
i
r
.
"
,


 
 
 
 
 
 
"
U
s
e
 
O
R
D
E
R
 
B
Y
 
y
r
 
D
E
S
C
 
f
o
r
 
m
o
s
t
 
r
e
c
e
n
t
 
f
i
r
s
t
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
L
I
K
E
"
,
 
"
O
R
D
E
R
 
B
Y
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
n
o
b
e
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
-
1
4
"
,


 
 
 
 
s
e
c
t
i
o
n
I
d
:
 
"
s
e
l
e
c
t
-
n
o
b
e
l
"
,


 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
1
3
,


 
 
 
 
t
i
t
l
e
:
 
"
C
h
e
m
i
s
t
r
y
 
a
n
d
 
P
h
y
s
i
c
s
 
L
a
s
t
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
S
h
o
w
 
t
h
e
 
1
9
8
4
 
w
i
n
n
e
r
s
 
o
r
d
e
r
e
d
 
b
y
 
s
u
b
j
e
c
t
 
a
n
d
 
w
i
n
n
e
r
 
n
a
m
e
,
 
b
u
t
 
w
i
t
h
 
C
h
e
m
i
s
t
r
y
 
a
n
d
 
P
h
y
s
i
c
s
 
l
i
s
t
e
d
 
l
a
s
t
.
 
U
s
e
 
a
 
C
A
S
E
 
e
x
p
r
e
s
s
i
o
n
 
i
n
 
O
R
D
E
R
 
B
Y
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
H
a
r
d
"
,


 
 
 
 
s
t
a
r
t
e
r
C
o
d
e
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
w
i
n
n
e
r
,
 
s
u
b
j
e
c
t
 
F
R
O
M
 
n
o
b
e
l
\
n
 
W
H
E
R
E
 
y
r
 
=
 
1
9
8
4
\
n
 
O
R
D
E
R
 
B
Y
\
n
 
 
 
C
A
S
E
 
W
H
E
N
 
s
u
b
j
e
c
t
 
I
N
 
(
'
C
h
e
m
i
s
t
r
y
'
,
 
'
P
h
y
s
i
c
s
'
)
 
T
H
E
N
 
1
 
E
L
S
E
 
0
 
E
N
D
,
\
n
 
 
 
_
_
_
,
\
n
 
 
 
_
_
_
"
,


 
 
 
 
s
o
l
u
t
i
o
n
:


 
 
 
 
 
 
"
S
E
L
E
C
T
 
w
i
n
n
e
r
,
 
s
u
b
j
e
c
t
 
F
R
O
M
 
n
o
b
e
l
 
W
H
E
R
E
 
y
r
 
=
 
1
9
8
4
 
O
R
D
E
R
 
B
Y
 
C
A
S
E
 
W
H
E
N
 
s
u
b
j
e
c
t
 
I
N
 
(
'
C
h
e
m
i
s
t
r
y
'
,
 
'
P
h
y
s
i
c
s
'
)
 
T
H
E
N
 
1
 
E
L
S
E
 
0
 
E
N
D
,
 
s
u
b
j
e
c
t
,
 
w
i
n
n
e
r
"
,


 
 
 
 
h
i
n
t
s
:
 
[


 
 
 
 
 
 
"
C
A
S
E
 
i
n
 
O
R
D
E
R
 
B
Y
 
l
e
t
s
 
y
o
u
 
c
o
n
t
r
o
l
 
s
o
r
t
 
p
r
i
o
r
i
t
y
.
"
,


 
 
 
 
 
 
"
A
s
s
i
g
n
 
1
 
t
o
 
C
h
e
m
i
s
t
r
y
/
P
h
y
s
i
c
s
 
(
s
o
r
t
s
 
a
f
t
e
r
 
0
)
.
"
,


 
 
 
 
 
 
"
T
h
e
n
 
s
o
r
t
 
b
y
 
s
u
b
j
e
c
t
 
a
n
d
 
w
i
n
n
e
r
 
n
a
m
e
 
w
i
t
h
i
n
 
e
a
c
h
 
g
r
o
u
p
.
"
,


 
 
 
 
]
,


 
 
 
 
c
o
n
c
e
p
t
s
:
 
[
"
S
E
L
E
C
T
"
,
 
"
W
H
E
R
E
"
,
 
"
O
R
D
E
R
 
B
Y
"
,
 
"
C
A
S
E
"
]
,


 
 
 
 
d
a
t
a
s
e
t
:
 
"
n
o
b
e
l
"
,


 
 
}
,


]
;


