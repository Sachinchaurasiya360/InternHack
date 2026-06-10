
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
F
u
n
c
t
i
o
n
s
S
e
t
o
p
s
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
U
p
p
e
r
c
a
s
e
 
N
a
m
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
 
e
v
e
r
y
 
c
o
u
n
t
r
y
 
i
n
 
u
p
p
e
r
c
a
s
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
(
n
a
m
e
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
 
U
P
P
E
R
(
n
a
m
e
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
P
P
E
R
(
t
e
x
t
)
 
c
o
n
v
e
r
t
s
 
t
e
x
t
 
t
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
.
"
,


 
 
 
 
 
 
"
A
l
s
o
 
k
n
o
w
n
 
a
s
 
U
C
A
S
E
 
i
n
 
s
o
m
e
 
d
a
t
a
b
a
s
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
U
P
P
E
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
L
o
w
e
r
c
a
s
e
 
C
o
n
t
i
n
e
n
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
 
e
a
c
h
 
c
o
n
t
i
n
e
n
t
 
i
n
 
l
o
w
e
r
c
a
s
e
,
 
w
i
t
h
o
u
t
 
d
u
p
l
i
c
a
t
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
 
D
I
S
T
I
N
C
T
 
_
_
_
(
c
o
n
t
i
n
e
n
t
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
 
D
I
S
T
I
N
C
T
 
L
O
W
E
R
(
c
o
n
t
i
n
e
n
t
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
O
W
E
R
(
t
e
x
t
)
 
c
o
n
v
e
r
t
s
 
t
e
x
t
 
t
o
 
l
o
w
e
r
c
a
s
e
.
"
,


 
 
 
 
 
 
"
D
I
S
T
I
N
C
T
 
r
e
m
o
v
e
s
 
d
u
p
l
i
c
a
t
e
 
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
L
O
W
E
R
"
,
 
"
D
I
S
T
I
N
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
N
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
 
i
n
 
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
.
 
O
r
d
e
r
 
b
y
 
l
e
n
g
t
h
 
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
(
n
a
m
e
)
 
A
S
 
n
a
m
e
_
l
e
n
g
t
h
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
O
R
D
E
R
 
B
Y
 
n
a
m
e
_
l
e
n
g
t
h
 
D
E
S
C
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
 
A
S
 
n
a
m
e
_
l
e
n
g
t
h
 
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
 
n
a
m
e
_
l
e
n
g
t
h
 
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
L
E
N
G
T
H
(
t
e
x
t
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
U
s
e
 
a
n
 
a
l
i
a
s
 
(
A
S
 
n
a
m
e
_
l
e
n
g
t
h
)
 
t
o
 
r
e
f
e
r
e
n
c
e
 
i
t
 
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
L
E
N
G
T
H
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
a
l
i
a
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
F
i
r
s
t
 
T
h
r
e
e
 
L
e
t
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
S
h
o
w
 
t
h
e
 
f
i
r
s
t
 
3
 
l
e
t
t
e
r
s
 
o
f
 
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
 
a
s
 
'
c
o
d
e
'
 
a
n
d
 
t
h
e
 
f
u
l
l
 
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
 
_
_
_
,
 
_
_
_
)
 
A
S
 
c
o
d
e
,
 
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
 
3
)
 
A
S
 
c
o
d
e
,
 
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
t
e
x
t
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
g
t
h
)
 
e
x
t
r
a
c
t
s
 
a
 
s
u
b
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
P
o
s
i
t
i
o
n
 
1
 
i
s
 
t
h
e
 
f
i
r
s
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
U
B
S
T
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
R
e
p
l
a
c
e
 
i
n
 
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
 
c
a
p
i
t
a
l
 
o
f
 
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
,
 
b
u
t
 
r
e
p
l
a
c
e
 
a
l
l
 
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
 
h
y
p
h
e
n
s
.
 
S
h
o
w
 
t
h
e
 
o
r
i
g
i
n
a
l
 
n
a
m
e
 
t
o
o
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
E
P
L
A
C
E
(
c
a
p
i
t
a
l
,
 
_
_
_
,
 
_
_
_
)
 
A
S
 
h
y
p
h
e
n
a
t
e
d
_
c
a
p
i
t
a
l
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
 
R
E
P
L
A
C
E
(
c
a
p
i
t
a
l
,
 
'
 
'
,
 
'
-
'
)
 
A
S
 
h
y
p
h
e
n
a
t
e
d
_
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
R
E
P
L
A
C
E
(
t
e
x
t
,
 
o
l
d
,
 
n
e
w
)
 
r
e
p
l
a
c
e
s
 
a
l
l
 
o
c
c
u
r
r
e
n
c
e
s
.
"
,


 
 
 
 
 
 
"
R
E
P
L
A
C
E
(
c
a
p
i
t
a
l
,
 
'
 
'
,
 
'
-
'
)
 
s
w
a
p
s
 
s
p
a
c
e
s
 
f
o
r
 
h
y
p
h
e
n
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
R
E
P
L
A
C
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
n
c
a
t
e
n
a
t
e
 
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
 
a
 
c
o
l
u
m
n
 
t
h
a
t
 
r
e
a
d
s
 
'
T
h
e
 
c
a
p
i
t
a
l
 
o
f
 
F
r
a
n
c
e
 
i
s
 
P
a
r
i
s
'
 
f
o
r
 
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
.
 
U
s
e
 
t
h
e
 
|
|
 
c
o
n
c
a
t
e
n
a
t
i
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
 
'
T
h
e
 
c
a
p
i
t
a
l
 
o
f
 
'
 
|
|
 
_
_
_
 
|
|
 
'
 
i
s
 
'
 
|
|
 
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
 
'
T
h
e
 
c
a
p
i
t
a
l
 
o
f
 
'
 
|
|
 
n
a
m
e
 
|
|
 
'
 
i
s
 
'
 
|
|
 
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
|
|
 
c
o
n
c
a
t
e
n
a
t
e
s
 
s
t
r
i
n
g
s
 
i
n
 
S
Q
L
.
"
,


 
 
 
 
 
 
"
C
o
m
b
i
n
e
 
l
i
t
e
r
a
l
 
s
t
r
i
n
g
s
 
w
i
t
h
 
c
o
l
u
m
n
 
v
a
l
u
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
|
|
"
,
 
"
c
o
n
c
a
t
e
n
a
t
i
o
n
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
 
L
o
n
g
 
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
 
c
a
p
i
t
a
l
 
n
a
m
e
 
i
s
 
l
o
n
g
e
r
 
t
h
a
n
 
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
 
>
 
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
c
a
p
i
t
a
l
)
 
>
 
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
 
o
f
 
t
w
o
 
c
o
l
u
m
n
s
 
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
 
>
 
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
 
f
i
n
d
s
 
l
o
n
g
e
r
 
c
a
p
i
t
a
l
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
L
E
N
G
T
H
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
t
r
i
n
g
-
f
u
n
c
t
i
o
n
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
a
p
i
t
a
l
 
S
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
o
u
n
t
r
y
 
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
 
c
a
p
i
t
a
l
 
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
 
(
l
i
k
e
 
'
M
e
x
i
c
o
'
 
→
 
'
M
e
x
i
c
o
 
C
i
t
y
'
)
.
 
S
h
o
w
 
b
o
t
h
 
c
o
l
u
m
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
a
p
i
t
a
l
 
L
I
K
E
 
_
_
_
 
|
|
 
'
%
'
\
n
 
 
 
A
N
D
 
c
a
p
i
t
a
l
 
<
>
 
n
a
m
e
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
a
p
i
t
a
l
 
L
I
K
E
 
n
a
m
e
 
|
|
 
'
%
'
 
A
N
D
 
c
a
p
i
t
a
l
 
<
>
 
n
a
m
e
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
I
K
E
 
n
a
m
e
 
|
|
 
'
%
'
 
m
a
t
c
h
e
s
 
c
a
p
i
t
a
l
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
.
"
,


 
 
 
 
 
 
"
A
N
D
 
c
a
p
i
t
a
l
 
<
>
 
n
a
m
e
 
e
x
c
l
u
d
e
s
 
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
 
c
a
p
i
t
a
l
 
e
q
u
a
l
s
 
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
L
I
K
E
"
,
 
"
|
|
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
G
D
P
 
p
e
r
 
C
a
p
i
t
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
 
G
D
P
 
p
e
r
 
c
a
p
i
t
a
 
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
 
1
0
 
m
i
l
l
i
o
n
.
 
R
o
u
n
d
 
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
 
w
h
o
l
e
 
n
u
m
b
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
)
 
A
S
 
g
d
p
_
p
e
r
_
c
a
p
i
t
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
)
 
A
S
 
g
d
p
_
p
e
r
_
c
a
p
i
t
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
 
1
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
 
i
n
t
e
g
e
r
.
"
,


 
 
 
 
 
 
"
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
 
g
i
v
e
s
 
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
R
o
u
n
d
 
t
o
 
2
 
D
e
c
i
m
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
)
 
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
 
f
o
r
 
A
s
i
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
 
_
_
_
)
 
A
S
 
p
o
p
_
m
i
l
l
i
o
n
s
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
A
s
i
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
 
A
S
 
p
o
p
_
m
i
l
l
i
o
n
s
 
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
A
s
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
 
r
o
u
n
d
s
 
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
n
o
t
 
1
0
0
0
0
0
0
)
 
t
o
 
g
e
t
 
d
e
c
i
m
a
l
 
r
e
s
u
l
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
,
 
"
d
e
c
i
m
a
l
 
d
i
v
i
s
i
o
n
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
A
b
s
o
l
u
t
e
 
D
i
f
f
e
r
e
n
c
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
 
t
h
e
 
a
b
s
o
l
u
t
e
 
d
i
f
f
e
r
e
n
c
e
 
b
e
t
w
e
e
n
 
a
 
c
o
u
n
t
r
y
'
s
 
a
r
e
a
 
a
n
d
 
1
,
0
0
0
,
0
0
0
.
 
O
r
d
e
r
 
b
y
 
t
h
i
s
 
d
i
f
f
e
r
e
n
c
e
 
a
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
 
A
B
S
(
a
r
e
a
 
-
 
_
_
_
)
 
A
S
 
a
r
e
a
_
d
i
f
f
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
O
R
D
E
R
 
B
Y
 
a
r
e
a
_
d
i
f
f
 
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
 
A
B
S
(
a
r
e
a
 
-
 
1
0
0
0
0
0
0
)
 
A
S
 
a
r
e
a
_
d
i
f
f
 
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
 
a
r
e
a
_
d
i
f
f
 
A
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
A
B
S
(
v
a
l
u
e
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
 
a
b
s
o
l
u
t
e
 
(
n
o
n
-
n
e
g
a
t
i
v
e
)
 
v
a
l
u
e
.
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
 
a
r
e
a
_
d
i
f
f
 
A
S
C
 
p
u
t
s
 
t
h
e
 
c
l
o
s
e
s
t
 
t
o
 
1
M
 
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
A
B
S
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
 
D
e
n
s
i
t
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
 
d
e
n
s
i
t
y
 
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
 
a
r
e
a
)
 
r
o
u
n
d
e
d
 
t
o
 
1
 
d
e
c
i
m
a
l
.
 
S
h
o
w
 
o
n
l
y
 
t
h
e
 
1
0
 
m
o
s
t
 
d
e
n
s
e
l
y
 
p
o
p
u
l
a
t
e
d
 
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
,
\
n
 
 
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
 
*
 
1
.
0
 
/
 
a
r
e
a
,
 
_
_
_
)
 
A
S
 
d
e
n
s
i
t
y
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
 
0
\
n
O
R
D
E
R
 
B
Y
 
d
e
n
s
i
t
y
 
D
E
S
C
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
 
*
 
1
.
0
 
/
 
a
r
e
a
,
 
1
)
 
A
S
 
d
e
n
s
i
t
y
 
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
 
0
 
O
R
D
E
R
 
B
Y
 
d
e
n
s
i
t
y
 
D
E
S
C
 
L
I
M
I
T
 
1
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
M
u
l
t
i
p
l
y
 
b
y
 
1
.
0
 
t
o
 
f
o
r
c
e
 
d
e
c
i
m
a
l
 
d
i
v
i
s
i
o
n
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
.
.
.
,
 
1
)
 
k
e
e
p
s
 
o
n
e
 
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
.
"
,


 
 
 
 
 
 
"
L
I
M
I
T
 
1
0
 
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
o
 
t
o
p
 
1
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
T
r
i
l
l
i
o
n
-
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
 
i
n
 
t
r
i
l
l
i
o
n
s
 
(
g
d
p
 
/
 
1
e
1
2
)
 
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
 
G
D
P
 
>
 
1
 
t
r
i
l
l
i
o
n
.
 
O
r
d
e
r
 
b
y
 
G
D
P
 
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
g
d
p
 
/
 
_
_
_
,
 
2
)
 
A
S
 
g
d
p
_
t
r
i
l
l
i
o
n
s
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
 
g
d
p
_
t
r
i
l
l
i
o
n
s
 
D
E
S
C
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
0
,
 
2
)
 
A
S
 
g
d
p
_
t
r
i
l
l
i
o
n
s
 
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
t
r
i
l
l
i
o
n
s
 
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
1
 
t
r
i
l
l
i
o
n
 
=
 
1
,
0
0
0
,
0
0
0
,
0
0
0
,
0
0
0
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
0
0
0
0
0
0
.
0
 
f
o
r
 
d
e
c
i
m
a
l
 
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
P
e
r
c
e
n
t
a
g
e
 
o
f
 
W
o
r
l
d
 
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
 
t
h
e
 
p
e
r
c
e
n
t
a
g
e
 
o
f
 
w
o
r
l
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
 
r
e
p
r
e
s
e
n
t
s
.
 
R
o
u
n
d
 
t
o
 
4
 
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
 
U
s
e
 
a
 
s
u
b
q
u
e
r
y
 
f
o
r
 
t
o
t
a
l
 
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
,
\
n
 
 
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
 
*
 
1
0
0
.
0
 
/
 
(
S
E
L
E
C
T
 
_
_
_
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
)
,
 
4
)
 
A
S
 
p
c
t
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
O
R
D
E
R
 
B
Y
 
p
c
t
 
D
E
S
C
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
 
*
 
1
0
0
.
0
 
/
 
(
S
E
L
E
C
T
 
S
U
M
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
)
,
 
4
)
 
A
S
 
p
c
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
 
O
R
D
E
R
 
B
Y
 
p
c
t
 
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
S
U
M
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
)
 
i
n
 
a
 
s
u
b
q
u
e
r
y
 
g
i
v
e
s
 
t
h
e
 
w
o
r
l
d
 
t
o
t
a
l
.
"
,


 
 
 
 
 
 
"
M
u
l
t
i
p
l
y
 
b
y
 
1
0
0
.
0
 
b
e
f
o
r
e
 
d
i
v
i
d
i
n
g
 
f
o
r
 
a
 
p
e
r
c
e
n
t
a
g
e
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
.
.
.
,
 
4
)
 
k
e
e
p
s
 
4
 
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
R
O
U
N
D
"
,
 
"
S
U
M
"
,
 
"
s
u
b
q
u
e
r
y
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
G
D
P
 
R
a
n
k
i
n
g
 
C
a
t
e
g
o
r
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
 
n
a
m
e
,
 
g
d
p
,
 
a
n
d
 
a
 
c
a
t
e
g
o
r
y
:
 
'
H
i
g
h
'
 
i
f
 
G
D
P
 
>
 
1
 
t
r
i
l
l
i
o
n
,
 
'
M
e
d
i
u
m
'
 
i
f
 
G
D
P
 
>
 
1
0
0
 
b
i
l
l
i
o
n
,
 
e
l
s
e
 
'
L
o
w
'
.
 
U
s
e
 
C
A
S
E
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
,
 
g
d
p
,
\
n
 
 
C
A
S
E
\
n
 
 
 
 
W
H
E
N
 
g
d
p
 
>
 
_
_
_
 
T
H
E
N
 
'
H
i
g
h
'
\
n
 
 
 
 
W
H
E
N
 
g
d
p
 
>
 
_
_
_
 
T
H
E
N
 
'
M
e
d
i
u
m
'
\
n
 
 
 
 
E
L
S
E
 
'
L
o
w
'
\
n
 
 
E
N
D
 
A
S
 
g
d
p
_
c
a
t
e
g
o
r
y
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
,
 
C
A
S
E
 
W
H
E
N
 
g
d
p
 
>
 
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
 
T
H
E
N
 
'
H
i
g
h
'
 
W
H
E
N
 
g
d
p
 
>
 
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
 
T
H
E
N
 
'
M
e
d
i
u
m
'
 
E
L
S
E
 
'
L
o
w
'
 
E
N
D
 
A
S
 
g
d
p
_
c
a
t
e
g
o
r
y
 
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
 
W
H
E
N
 
e
v
a
l
u
a
t
e
s
 
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
 
i
n
 
o
r
d
e
r
.
"
,


 
 
 
 
 
 
"
T
h
e
 
f
i
r
s
t
 
m
a
t
c
h
i
n
g
 
W
H
E
N
 
w
i
n
s
.
"
,


 
 
 
 
 
 
"
1
 
t
r
i
l
l
i
o
n
 
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
,
 
1
0
0
 
b
i
l
l
i
o
n
 
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
C
A
S
E
"
,
 
"
W
H
E
N
"
,
 
"
T
H
E
N
"
,
 
"
E
L
S
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
n
u
m
e
r
i
c
-
f
u
n
c
t
i
o
n
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
M
I
N
 
a
n
d
 
M
A
X
 
A
r
e
a
 
p
e
r
 
C
o
n
t
i
n
e
n
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
F
o
r
 
e
a
c
h
 
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
 
s
h
o
w
 
t
h
e
 
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
 
t
h
e
 
s
m
a
l
l
e
s
t
 
c
o
u
n
t
r
y
 
a
r
e
a
 
(
m
i
n
_
a
r
e
a
)
,
 
a
n
d
 
t
h
e
 
l
a
r
g
e
s
t
 
c
o
u
n
t
r
y
 
a
r
e
a
 
(
m
a
x
_
a
r
e
a
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
\
n
 
 
M
I
N
(
_
_
_
)
 
A
S
 
m
i
n
_
a
r
e
a
,
\
n
 
 
M
A
X
(
_
_
_
)
 
A
S
 
m
a
x
_
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
G
R
O
U
P
 
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
 
M
I
N
(
a
r
e
a
)
 
A
S
 
m
i
n
_
a
r
e
a
,
 
M
A
X
(
a
r
e
a
)
 
A
S
 
m
a
x
_
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
 
G
R
O
U
P
 
B
Y
 
c
o
n
t
i
n
e
n
t
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
M
I
N
(
a
r
e
a
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
 
s
m
a
l
l
e
s
t
 
a
r
e
a
.
"
,


 
 
 
 
 
 
"
M
A
X
(
a
r
e
a
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
 
l
a
r
g
e
s
t
 
a
r
e
a
.
"
,


 
 
 
 
 
 
"
G
R
O
U
P
 
B
Y
 
c
o
n
t
i
n
e
n
t
 
a
g
g
r
e
g
a
t
e
s
 
p
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
M
I
N
"
,
 
"
M
A
X
"
,
 
"
G
R
O
U
P
 
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
B
a
s
i
c
 
U
N
I
O
N
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
s
 
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
 
i
n
 
E
u
r
o
p
e
 
a
n
d
 
t
h
e
 
n
a
m
e
s
 
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
 
i
n
 
A
s
i
a
 
i
n
 
a
 
s
i
n
g
l
e
 
r
e
s
u
l
t
 
s
e
t
 
u
s
i
n
g
 
U
N
I
O
N
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
\
n
_
_
_
\
n
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
A
s
i
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
 
U
N
I
O
N
 
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
A
s
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
U
N
I
O
N
 
c
o
m
b
i
n
e
s
 
t
w
o
 
S
E
L
E
C
T
 
s
t
a
t
e
m
e
n
t
s
 
i
n
t
o
 
o
n
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


 
 
 
 
 
 
"
B
o
t
h
 
S
E
L
E
C
T
s
 
m
u
s
t
 
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
o
l
u
m
n
s
.
"
,


 
 
 
 
 
 
"
U
N
I
O
N
 
r
e
m
o
v
e
s
 
d
u
p
l
i
c
a
t
e
s
 
a
u
t
o
m
a
t
i
c
a
l
l
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
U
N
I
O
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
U
N
I
O
N
 
A
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
S
h
o
w
 
a
l
l
 
c
o
n
t
i
n
e
n
t
 
v
a
l
u
e
s
 
f
r
o
m
 
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
 
u
s
i
n
g
 
t
w
o
 
q
u
e
r
i
e
s
:
 
o
n
e
 
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
 
1
0
0
M
 
a
n
d
 
o
n
e
 
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
r
e
a
 
>
 
1
M
.
 
U
s
e
 
U
N
I
O
N
 
A
L
L
 
t
o
 
k
e
e
p
 
d
u
p
l
i
c
a
t
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
 
1
0
0
0
0
0
0
0
0
\
n
U
N
I
O
N
 
_
_
_
\
n
S
E
L
E
C
T
 
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
 
1
0
0
0
0
0
0
0
0
 
U
N
I
O
N
 
A
L
L
 
S
E
L
E
C
T
 
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
N
I
O
N
 
A
L
L
 
k
e
e
p
s
 
a
l
l
 
r
o
w
s
 
i
n
c
l
u
d
i
n
g
 
d
u
p
l
i
c
a
t
e
s
.
"
,


 
 
 
 
 
 
"
U
N
I
O
N
 
A
L
L
 
i
s
 
f
a
s
t
e
r
 
t
h
a
n
 
U
N
I
O
N
 
b
e
c
a
u
s
e
 
i
t
 
s
k
i
p
s
 
d
e
d
u
p
l
i
c
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
U
N
I
O
N
 
A
L
L
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
U
N
I
O
N
 
w
i
t
h
 
L
a
b
e
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
C
r
e
a
t
e
 
a
 
c
o
m
b
i
n
e
d
 
l
i
s
t
 
w
i
t
h
 
a
 
'
s
o
u
r
c
e
'
 
c
o
l
u
m
n
:
 
s
h
o
w
 
N
o
b
e
l
 
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
 
w
i
n
n
e
r
s
 
l
a
b
e
l
e
d
 
'
N
o
b
e
l
'
 
a
n
d
 
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
 
5
0
0
M
 
l
a
b
e
l
e
d
 
'
C
o
u
n
t
r
y
'
.
 
S
h
o
w
 
s
o
u
r
c
e
 
a
n
d
 
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
 
'
_
_
_
'
 
A
S
 
s
o
u
r
c
e
,
 
w
i
n
n
e
r
 
A
S
 
n
a
m
e
 
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
\
n
U
N
I
O
N
\
n
S
E
L
E
C
T
 
'
_
_
_
'
 
A
S
 
s
o
u
r
c
e
,
 
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
 
5
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
 
'
N
o
b
e
l
'
 
A
S
 
s
o
u
r
c
e
,
 
w
i
n
n
e
r
 
A
S
 
n
a
m
e
 
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
 
U
N
I
O
N
 
S
E
L
E
C
T
 
'
C
o
u
n
t
r
y
'
 
A
S
 
s
o
u
r
c
e
,
 
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
 
5
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
 
a
 
l
i
t
e
r
a
l
 
s
t
r
i
n
g
 
a
s
 
a
 
c
o
l
u
m
n
:
 
'
N
o
b
e
l
'
 
A
S
 
s
o
u
r
c
e
.
"
,


 
 
 
 
 
 
"
B
o
t
h
 
S
E
L
E
C
T
s
 
m
u
s
t
 
h
a
v
e
 
m
a
t
c
h
i
n
g
 
c
o
l
u
m
n
 
c
o
u
n
t
s
 
a
n
d
 
t
y
p
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
U
N
I
O
N
"
,
 
"
l
i
t
e
r
a
l
 
c
o
l
u
m
n
"
,
 
"
a
l
i
a
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
U
N
I
O
N
 
w
i
t
h
 
O
R
D
E
R
 
B
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
C
o
m
b
i
n
e
 
t
h
e
 
n
a
m
e
s
 
o
f
 
A
f
r
i
c
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
 
a
n
d
 
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
 
i
n
t
o
 
o
n
e
 
l
i
s
t
,
 
o
r
d
e
r
e
d
 
a
l
p
h
a
b
e
t
i
c
a
l
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
A
f
r
i
c
a
'
\
n
U
N
I
O
N
\
n
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
A
f
r
i
c
a
'
 
U
N
I
O
N
 
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
 
O
R
D
E
R
 
B
Y
 
n
a
m
e
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
R
D
E
R
 
B
Y
 
a
p
p
l
i
e
s
 
t
o
 
t
h
e
 
f
i
n
a
l
 
c
o
m
b
i
n
e
d
 
r
e
s
u
l
t
.
"
,


 
 
 
 
 
 
"
P
l
a
c
e
 
O
R
D
E
R
 
B
Y
 
a
f
t
e
r
 
t
h
e
 
l
a
s
t
 
S
E
L
E
C
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
U
N
I
O
N
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
I
N
T
E
R
S
E
C
T
-
s
t
y
l
e
 
Q
u
e
r
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
 
t
h
a
t
 
a
p
p
e
a
r
 
i
n
 
b
o
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
 
5
0
M
 
A
N
D
 
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
i
e
s
 
w
i
t
h
 
G
D
P
 
>
 
5
0
0
 
b
i
l
l
i
o
n
.
 
U
s
e
 
I
N
T
E
R
S
E
C
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
 
5
0
0
0
0
0
0
0
\
n
_
_
_
\
n
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
 
g
d
p
 
>
 
5
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
 
5
0
0
0
0
0
0
0
 
I
N
T
E
R
S
E
C
T
 
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
 
g
d
p
 
>
 
5
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
I
N
T
E
R
S
E
C
T
 
r
e
t
u
r
n
s
 
o
n
l
y
 
r
o
w
s
 
t
h
a
t
 
a
p
p
e
a
r
 
i
n
 
b
o
t
h
 
r
e
s
u
l
t
 
s
e
t
s
.
"
,


 
 
 
 
 
 
"
I
t
 
i
s
 
t
h
e
 
s
e
t
 
i
n
t
e
r
s
e
c
t
i
o
n
 
o
f
 
t
w
o
 
q
u
e
r
i
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
I
N
T
E
R
S
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
E
X
C
E
P
T
 
Q
u
e
r
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
 
t
h
a
t
 
d
o
 
N
O
T
 
h
a
v
e
 
a
 
G
D
P
 
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
 
5
0
0
 
b
i
l
l
i
o
n
.
 
U
s
e
 
E
X
C
E
P
T
 
t
o
 
s
u
b
t
r
a
c
t
 
t
h
e
 
h
i
g
h
-
G
D
P
 
s
e
t
 
f
r
o
m
 
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
\
n
_
_
_
\
n
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
 
g
d
p
 
>
 
5
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
 
E
X
C
E
P
T
 
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
 
g
d
p
 
>
 
5
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
E
X
C
E
P
T
 
r
e
t
u
r
n
s
 
r
o
w
s
 
f
r
o
m
 
t
h
e
 
f
i
r
s
t
 
q
u
e
r
y
 
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
 
t
h
e
 
s
e
c
o
n
d
.
"
,


 
 
 
 
 
 
"
I
t
 
i
s
 
t
h
e
 
s
e
t
 
d
i
f
f
e
r
e
n
c
e
:
 
A
 
m
i
n
u
s
 
B
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
E
X
C
E
P
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
T
h
r
e
e
-
W
a
y
 
U
N
I
O
N
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
C
o
m
b
i
n
e
 
t
h
r
e
e
 
l
i
s
t
s
:
 
(
1
)
 
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
 
2
0
0
M
,
 
(
2
)
 
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
r
e
a
 
>
 
5
M
 
s
q
 
k
m
,
 
(
3
)
 
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
 
G
D
P
 
>
 
5
 
t
r
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
 
n
a
m
e
 
o
n
l
y
,
 
n
o
 
d
u
p
l
i
c
a
t
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
 
2
0
0
0
0
0
0
0
0
\
n
U
N
I
O
N
\
n
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
 
a
r
e
a
 
>
 
5
0
0
0
0
0
0
\
n
_
_
_
\
n
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
 
g
d
p
 
>
 
5
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
 
2
0
0
0
0
0
0
0
0
 
U
N
I
O
N
 
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
 
a
r
e
a
 
>
 
5
0
0
0
0
0
0
 
U
N
I
O
N
 
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
 
g
d
p
 
>
 
5
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
Y
o
u
 
c
a
n
 
c
h
a
i
n
 
m
u
l
t
i
p
l
e
 
U
N
I
O
N
 
s
t
a
t
e
m
e
n
t
s
.
"
,


 
 
 
 
 
 
"
U
N
I
O
N
 
a
u
t
o
m
a
t
i
c
a
l
l
y
 
r
e
m
o
v
e
s
 
d
u
p
l
i
c
a
t
e
s
 
a
c
r
o
s
s
 
a
l
l
 
s
e
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
U
N
I
O
N
"
,
 
"
m
u
l
t
i
p
l
e
 
s
e
t
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
u
n
i
o
n
-
o
p
e
r
a
t
i
o
n
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
U
N
I
O
N
 
w
i
t
h
 
A
g
g
r
e
g
a
t
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
 
a
 
s
u
m
m
a
r
y
:
 
t
h
e
 
t
o
t
a
l
 
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
 
A
s
i
a
 
l
a
b
e
l
e
d
 
'
A
s
i
a
 
P
o
p
'
,
 
a
n
d
 
t
h
e
 
t
o
t
a
l
 
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
 
E
u
r
o
p
e
 
l
a
b
e
l
e
d
 
'
E
u
r
o
p
e
 
P
o
p
'
.
 
E
a
c
h
 
r
o
w
 
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
 
a
 
l
a
b
e
l
 
a
n
d
 
a
 
t
o
t
a
l
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
 
'
A
s
i
a
 
P
o
p
'
 
A
S
 
l
a
b
e
l
,
 
S
U
M
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
)
 
A
S
 
t
o
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
 
_
_
_
\
n
U
N
I
O
N
\
n
S
E
L
E
C
T
 
'
_
_
_
'
 
A
S
 
l
a
b
e
l
,
 
S
U
M
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
)
 
A
S
 
t
o
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
 
'
A
s
i
a
 
P
o
p
'
 
A
S
 
l
a
b
e
l
,
 
S
U
M
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
)
 
A
S
 
t
o
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
A
s
i
a
'
 
U
N
I
O
N
 
S
E
L
E
C
T
 
'
E
u
r
o
p
e
 
P
o
p
'
 
A
S
 
l
a
b
e
l
,
 
S
U
M
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
)
 
A
S
 
t
o
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
E
a
c
h
 
S
E
L
E
C
T
 
c
a
n
 
u
s
e
 
a
g
g
r
e
g
a
t
e
 
f
u
n
c
t
i
o
n
s
 
i
n
d
e
p
e
n
d
e
n
t
l
y
.
"
,


 
 
 
 
 
 
"
T
h
e
 
U
N
I
O
N
 
c
o
m
b
i
n
e
s
 
t
h
e
 
t
w
o
 
s
u
m
m
a
r
y
 
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
U
N
I
O
N
"
,
 
"
S
U
M
"
,
 
"
a
g
g
r
e
g
a
t
e
"
,
 
"
l
i
t
e
r
a
l
 
c
o
l
u
m
n
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
c
t
e
-
p
r
a
c
t
i
c
e
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
c
t
e
-
p
r
a
c
t
i
c
e
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
B
a
s
i
c
 
C
T
E
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
U
s
e
 
a
 
C
T
E
 
c
a
l
l
e
d
 
'
b
i
g
'
 
t
o
 
f
i
n
d
 
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
 
1
0
0
 
m
i
l
l
i
o
n
,
 
t
h
e
n
 
S
E
L
E
C
T
 
a
l
l
 
f
r
o
m
 
t
h
e
 
C
T
E
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
W
I
T
H
 
b
i
g
 
A
S
 
(
\
n
 
 
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
\
n
)
\
n
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
 
b
i
g
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
W
I
T
H
 
b
i
g
 
A
S
 
(
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
 
1
0
0
0
0
0
0
0
0
)
 
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
 
b
i
g
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
W
I
T
H
 
n
a
m
e
 
A
S
 
(
q
u
e
r
y
)
 
d
e
f
i
n
e
s
 
a
 
C
T
E
.
"
,


 
 
 
 
 
 
"
Y
o
u
 
c
a
n
 
t
h
e
n
 
S
E
L
E
C
T
 
f
r
o
m
 
t
h
e
 
C
T
E
 
l
i
k
e
 
a
 
r
e
g
u
l
a
r
 
t
a
b
l
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
W
I
T
H
"
,
 
"
C
T
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
c
t
e
-
p
r
a
c
t
i
c
e
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
c
t
e
-
p
r
a
c
t
i
c
e
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
T
E
 
w
i
t
h
 
A
g
g
r
e
g
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
U
s
e
 
a
 
C
T
E
 
c
a
l
l
e
d
 
'
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
s
t
a
t
s
'
 
t
o
 
c
o
m
p
u
t
e
 
t
h
e
 
t
o
t
a
l
 
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
n
d
 
a
v
e
r
a
g
e
 
G
D
P
 
p
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
.
 
T
h
e
n
 
s
h
o
w
 
o
n
l
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
s
 
w
i
t
h
 
t
o
t
a
l
 
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
 
5
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
W
I
T
H
 
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
s
t
a
t
s
 
A
S
 
(
\
n
 
 
S
E
L
E
C
T
 
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
\
n
 
 
 
 
S
U
M
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
)
 
A
S
 
t
o
t
a
l
_
p
o
p
,
\
n
 
 
 
 
R
O
U
N
D
(
A
V
G
(
g
d
p
)
)
 
A
S
 
a
v
g
_
g
d
p
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
 
 
G
R
O
U
P
 
B
Y
 
_
_
_
\
n
)
\
n
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
s
t
a
t
s
\
n
W
H
E
R
E
 
t
o
t
a
l
_
p
o
p
 
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
W
I
T
H
 
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
s
t
a
t
s
 
A
S
 
(
S
E
L
E
C
T
 
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
 
S
U
M
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
)
 
A
S
 
t
o
t
a
l
_
p
o
p
,
 
R
O
U
N
D
(
A
V
G
(
g
d
p
)
)
 
A
S
 
a
v
g
_
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
 
G
R
O
U
P
 
B
Y
 
c
o
n
t
i
n
e
n
t
)
 
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
s
t
a
t
s
 
W
H
E
R
E
 
t
o
t
a
l
_
p
o
p
 
>
 
5
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
G
R
O
U
P
 
B
Y
 
c
o
n
t
i
n
e
n
t
 
i
n
s
i
d
e
 
t
h
e
 
C
T
E
 
a
g
g
r
e
g
a
t
e
s
 
p
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
.
"
,


 
 
 
 
 
 
"
T
h
e
 
o
u
t
e
r
 
q
u
e
r
y
 
f
i
l
t
e
r
s
 
t
h
e
 
C
T
E
 
r
e
s
u
l
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
W
I
T
H
"
,
 
"
C
T
E
"
,
 
"
S
U
M
"
,
 
"
A
V
G
"
,
 
"
G
R
O
U
P
 
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
c
t
e
-
p
r
a
c
t
i
c
e
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
c
t
e
-
p
r
a
c
t
i
c
e
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
M
u
l
t
i
p
l
e
 
C
T
E
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
D
e
f
i
n
e
 
t
w
o
 
C
T
E
s
:
 
'
r
i
c
h
'
 
(
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
 
G
D
P
 
>
 
1
 
t
r
i
l
l
i
o
n
)
 
a
n
d
 
'
b
i
g
'
 
(
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
 
1
0
0
M
)
.
 
T
h
e
n
 
f
i
n
d
 
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
 
i
n
 
b
o
t
h
 
C
T
E
s
 
u
s
i
n
g
 
a
 
J
O
I
N
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
W
I
T
H
 
r
i
c
h
 
A
S
 
(
\
n
 
 
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
 
g
d
p
 
>
 
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
\
n
)
,
\
n
b
i
g
 
A
S
 
(
\
n
 
 
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
 
_
_
_
\
n
)
\
n
S
E
L
E
C
T
 
r
i
c
h
.
n
a
m
e
 
F
R
O
M
 
r
i
c
h
\
n
J
O
I
N
 
b
i
g
 
O
N
 
r
i
c
h
.
n
a
m
e
 
=
 
b
i
g
.
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
W
I
T
H
 
r
i
c
h
 
A
S
 
(
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
 
g
d
p
 
>
 
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
,
 
b
i
g
 
A
S
 
(
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
 
1
0
0
0
0
0
0
0
0
)
 
S
E
L
E
C
T
 
r
i
c
h
.
n
a
m
e
 
F
R
O
M
 
r
i
c
h
 
J
O
I
N
 
b
i
g
 
O
N
 
r
i
c
h
.
n
a
m
e
 
=
 
b
i
g
.
n
a
m
e
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
p
a
r
a
t
e
 
m
u
l
t
i
p
l
e
 
C
T
E
s
 
w
i
t
h
 
c
o
m
m
a
s
,
 
n
o
 
e
x
t
r
a
 
W
I
T
H
 
k
e
y
w
o
r
d
.
"
,


 
 
 
 
 
 
"
J
O
I
N
 
t
h
e
 
t
w
o
 
C
T
E
s
 
o
n
 
t
h
e
 
c
o
m
m
o
n
 
c
o
l
u
m
n
 
(
n
a
m
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
W
I
T
H
"
,
 
"
C
T
E
"
,
 
"
m
u
l
t
i
p
l
e
 
C
T
E
s
"
,
 
"
J
O
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
c
t
e
-
p
r
a
c
t
i
c
e
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
c
t
e
-
p
r
a
c
t
i
c
e
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
T
E
 
f
o
r
 
R
a
n
k
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
U
s
e
 
a
 
C
T
E
 
t
o
 
a
d
d
 
a
 
r
a
n
k
 
c
o
l
u
m
n
 
t
o
 
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
)
.
 
T
h
e
n
 
s
h
o
w
 
o
n
l
y
 
t
h
e
 
t
o
p
 
5
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
W
I
T
H
 
r
a
n
k
e
d
 
A
S
 
(
\
n
 
 
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
\
n
 
 
 
 
R
O
W
_
N
U
M
B
E
R
(
)
 
O
V
E
R
 
(
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
)
 
A
S
 
r
n
k
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
E
u
r
o
p
e
'
\
n
)
\
n
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
 
r
n
k
 
F
R
O
M
 
r
a
n
k
e
d
\
n
W
H
E
R
E
 
r
n
k
 
<
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
W
I
T
H
 
r
a
n
k
e
d
 
A
S
 
(
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
 
R
O
W
_
N
U
M
B
E
R
(
)
 
O
V
E
R
 
(
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
)
 
A
S
 
r
n
k
 
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
)
 
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
 
r
n
k
 
F
R
O
M
 
r
a
n
k
e
d
 
W
H
E
R
E
 
r
n
k
 
<
=
 
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
R
O
W
_
N
U
M
B
E
R
(
)
 
O
V
E
R
 
(
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
)
 
a
s
s
i
g
n
s
 
1
 
t
o
 
t
h
e
 
l
a
r
g
e
s
t
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
 
r
n
k
 
<
=
 
5
 
i
n
 
t
h
e
 
o
u
t
e
r
 
q
u
e
r
y
 
t
o
 
g
e
t
 
t
o
p
 
5
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
W
I
T
H
"
,
 
"
C
T
E
"
,
 
"
R
O
W
_
N
U
M
B
E
R
"
,
 
"
O
V
E
R
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
c
t
e
-
p
r
a
c
t
i
c
e
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
c
t
e
-
p
r
a
c
t
i
c
e
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
T
E
 
R
e
p
l
a
c
i
n
g
 
S
u
b
q
u
e
r
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
R
e
w
r
i
t
e
 
t
h
i
s
 
q
u
e
r
y
 
u
s
i
n
g
 
a
 
C
T
E
:
 
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
 
(
S
E
L
E
C
T
 
A
V
G
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
)
.
 
N
a
m
e
 
t
h
e
 
C
T
E
 
'
a
v
g
_
p
o
p
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
W
I
T
H
 
a
v
g
_
p
o
p
 
A
S
 
(
\
n
 
 
S
E
L
E
C
T
 
A
V
G
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
)
 
A
S
 
a
v
g
_
v
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
)
\
n
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
,
 
a
v
g
_
p
o
p
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
W
I
T
H
 
a
v
g
_
p
o
p
 
A
S
 
(
S
E
L
E
C
T
 
A
V
G
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
)
 
A
S
 
a
v
g
_
v
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
)
 
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
,
 
a
v
g
_
p
o
p
 
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
 
a
v
g
_
p
o
p
.
a
v
g
_
v
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
C
r
o
s
s
 
j
o
i
n
 
t
h
e
 
C
T
E
 
w
i
t
h
 
w
o
r
l
d
 
t
o
 
a
c
c
e
s
s
 
t
h
e
 
a
v
g
_
v
a
l
.
"
,


 
 
 
 
 
 
"
a
v
g
_
p
o
p
.
a
v
g
_
v
a
l
 
r
e
f
e
r
e
n
c
e
s
 
t
h
e
 
c
o
m
p
u
t
e
d
 
a
v
e
r
a
g
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
W
I
T
H
"
,
 
"
C
T
E
"
,
 
"
A
V
G
"
,
 
"
c
r
o
s
s
 
j
o
i
n
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
c
t
e
-
p
r
a
c
t
i
c
e
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
c
t
e
-
p
r
a
c
t
i
c
e
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
T
E
 
w
i
t
h
 
C
A
S
E
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
U
s
e
 
a
 
C
T
E
 
c
a
l
l
e
d
 
'
c
l
a
s
s
i
f
i
e
d
'
 
t
o
 
a
d
d
 
a
 
'
s
i
z
e
'
 
c
o
l
u
m
n
:
 
'
L
a
r
g
e
'
 
i
f
 
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
 
1
0
0
M
,
 
'
M
e
d
i
u
m
'
 
i
f
 
>
 
1
0
M
,
 
e
l
s
e
 
'
S
m
a
l
l
'
.
 
T
h
e
n
 
c
o
u
n
t
 
c
o
u
n
t
r
i
e
s
 
p
e
r
 
s
i
z
e
 
c
a
t
e
g
o
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
W
I
T
H
 
c
l
a
s
s
i
f
i
e
d
 
A
S
 
(
\
n
 
 
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
 
 
 
 
C
A
S
E
\
n
 
 
 
 
 
 
W
H
E
N
 
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
 
1
0
0
0
0
0
0
0
0
 
T
H
E
N
 
'
_
_
_
'
\
n
 
 
 
 
 
 
W
H
E
N
 
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
 
1
0
0
0
0
0
0
0
 
T
H
E
N
 
'
_
_
_
'
\
n
 
 
 
 
 
 
E
L
S
E
 
'
_
_
_
'
\
n
 
 
 
 
E
N
D
 
A
S
 
s
i
z
e
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
)
\
n
S
E
L
E
C
T
 
s
i
z
e
,
 
C
O
U
N
T
(
*
)
 
A
S
 
c
n
t
\
n
F
R
O
M
 
c
l
a
s
s
i
f
i
e
d
\
n
G
R
O
U
P
 
B
Y
 
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
 
c
n
t
 
D
E
S
C
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
W
I
T
H
 
c
l
a
s
s
i
f
i
e
d
 
A
S
 
(
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
 
C
A
S
E
 
W
H
E
N
 
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
 
1
0
0
0
0
0
0
0
0
 
T
H
E
N
 
'
L
a
r
g
e
'
 
W
H
E
N
 
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
 
1
0
0
0
0
0
0
0
 
T
H
E
N
 
'
M
e
d
i
u
m
'
 
E
L
S
E
 
'
S
m
a
l
l
'
 
E
N
D
 
A
S
 
s
i
z
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
)
 
S
E
L
E
C
T
 
s
i
z
e
,
 
C
O
U
N
T
(
*
)
 
A
S
 
c
n
t
 
F
R
O
M
 
c
l
a
s
s
i
f
i
e
d
 
G
R
O
U
P
 
B
Y
 
s
i
z
e
 
O
R
D
E
R
 
B
Y
 
c
n
t
 
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
C
A
S
E
 
i
n
 
t
h
e
 
C
T
E
 
c
l
a
s
s
i
f
i
e
s
 
e
a
c
h
 
r
o
w
.
"
,


 
 
 
 
 
 
"
T
h
e
 
o
u
t
e
r
 
q
u
e
r
y
 
g
r
o
u
p
s
 
b
y
 
t
h
e
 
c
o
m
p
u
t
e
d
 
'
s
i
z
e
'
 
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
W
I
T
H
"
,
 
"
C
T
E
"
,
 
"
C
A
S
E
"
,
 
"
C
O
U
N
T
"
,
 
"
G
R
O
U
P
 
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
c
t
e
-
p
r
a
c
t
i
c
e
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
c
t
e
-
p
r
a
c
t
i
c
e
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
h
a
i
n
e
d
 
C
T
E
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
D
e
f
i
n
e
 
C
T
E
 
'
e
u
r
o
p
e
a
n
'
 
f
o
r
 
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
,
 
t
h
e
n
 
C
T
E
 
'
r
a
n
k
e
d
_
e
u
r
o
p
e
a
n
'
 
t
h
a
t
 
r
a
n
k
s
 
t
h
e
m
 
b
y
 
G
D
P
.
 
S
h
o
w
 
t
h
e
 
t
o
p
 
3
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
W
I
T
H
 
e
u
r
o
p
e
a
n
 
A
S
 
(
\
n
 
 
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
 
A
N
D
 
g
d
p
 
I
S
 
N
O
T
 
N
U
L
L
\
n
)
,
\
n
r
a
n
k
e
d
_
e
u
r
o
p
e
a
n
 
A
S
 
(
\
n
 
 
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
,
\
n
 
 
 
 
R
A
N
K
(
)
 
O
V
E
R
 
(
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
)
 
A
S
 
r
n
k
\
n
 
 
F
R
O
M
 
e
u
r
o
p
e
a
n
\
n
)
\
n
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
,
 
r
n
k
 
F
R
O
M
 
r
a
n
k
e
d
_
e
u
r
o
p
e
a
n
\
n
W
H
E
R
E
 
r
n
k
 
<
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
W
I
T
H
 
e
u
r
o
p
e
a
n
 
A
S
 
(
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
 
A
N
D
 
g
d
p
 
I
S
 
N
O
T
 
N
U
L
L
)
,
 
r
a
n
k
e
d
_
e
u
r
o
p
e
a
n
 
A
S
 
(
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
,
 
R
A
N
K
(
)
 
O
V
E
R
 
(
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
)
 
A
S
 
r
n
k
 
F
R
O
M
 
e
u
r
o
p
e
a
n
)
 
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
,
 
r
n
k
 
F
R
O
M
 
r
a
n
k
e
d
_
e
u
r
o
p
e
a
n
 
W
H
E
R
E
 
r
n
k
 
<
=
 
3
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
 
s
e
c
o
n
d
 
C
T
E
 
c
a
n
 
r
e
f
e
r
e
n
c
e
 
t
h
e
 
f
i
r
s
t
 
C
T
E
.
"
,


 
 
 
 
 
 
"
T
h
i
s
 
c
r
e
a
t
e
s
 
a
 
p
i
p
e
l
i
n
e
:
 
f
i
l
t
e
r
 
→
 
r
a
n
k
 
→
 
s
e
l
e
c
t
 
t
o
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
W
I
T
H
"
,
 
"
C
T
E
"
,
 
"
c
h
a
i
n
e
d
 
C
T
E
s
"
,
 
"
R
A
N
K
"
,
 
"
O
V
E
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
c
t
e
-
p
r
a
c
t
i
c
e
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
c
t
e
-
p
r
a
c
t
i
c
e
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
T
E
 
f
o
r
 
C
o
n
t
i
n
e
n
t
 
S
u
m
m
a
r
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
U
s
e
 
a
 
C
T
E
 
'
c
o
n
t
_
s
u
m
m
a
r
y
'
 
t
o
 
g
e
t
 
e
a
c
h
 
c
o
n
t
i
n
e
n
t
'
s
 
t
o
t
a
l
 
G
D
P
 
a
n
d
 
c
o
u
n
t
r
y
 
c
o
u
n
t
.
 
T
h
e
n
 
f
i
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
s
 
w
h
e
r
e
 
t
h
e
 
a
v
e
r
a
g
e
 
G
D
P
 
p
e
r
 
c
o
u
n
t
r
y
 
e
x
c
e
e
d
s
 
5
0
0
 
b
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
W
I
T
H
 
c
o
n
t
_
s
u
m
m
a
r
y
 
A
S
 
(
\
n
 
 
S
E
L
E
C
T
 
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
\
n
 
 
 
 
S
U
M
(
g
d
p
)
 
A
S
 
t
o
t
a
l
_
g
d
p
,
\
n
 
 
 
 
C
O
U
N
T
(
*
)
 
A
S
 
c
o
u
n
t
r
y
_
c
o
u
n
t
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
 
I
S
 
N
O
T
 
N
U
L
L
\
n
 
 
G
R
O
U
P
 
B
Y
 
c
o
n
t
i
n
e
n
t
\
n
)
\
n
S
E
L
E
C
T
 
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
 
t
o
t
a
l
_
g
d
p
,
 
c
o
u
n
t
r
y
_
c
o
u
n
t
,
\
n
 
 
R
O
U
N
D
(
t
o
t
a
l
_
g
d
p
 
*
 
1
.
0
 
/
 
c
o
u
n
t
r
y
_
c
o
u
n
t
)
 
A
S
 
a
v
g
_
g
d
p
_
p
e
r
_
c
o
u
n
t
r
y
\
n
F
R
O
M
 
c
o
n
t
_
s
u
m
m
a
r
y
\
n
W
H
E
R
E
 
t
o
t
a
l
_
g
d
p
 
*
 
1
.
0
 
/
 
c
o
u
n
t
r
y
_
c
o
u
n
t
 
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
W
I
T
H
 
c
o
n
t
_
s
u
m
m
a
r
y
 
A
S
 
(
S
E
L
E
C
T
 
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
 
S
U
M
(
g
d
p
)
 
A
S
 
t
o
t
a
l
_
g
d
p
,
 
C
O
U
N
T
(
*
)
 
A
S
 
c
o
u
n
t
r
y
_
c
o
u
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
 
g
d
p
 
I
S
 
N
O
T
 
N
U
L
L
 
G
R
O
U
P
 
B
Y
 
c
o
n
t
i
n
e
n
t
)
 
S
E
L
E
C
T
 
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
 
t
o
t
a
l
_
g
d
p
,
 
c
o
u
n
t
r
y
_
c
o
u
n
t
,
 
R
O
U
N
D
(
t
o
t
a
l
_
g
d
p
 
*
 
1
.
0
 
/
 
c
o
u
n
t
r
y
_
c
o
u
n
t
)
 
A
S
 
a
v
g
_
g
d
p
_
p
e
r
_
c
o
u
n
t
r
y
 
F
R
O
M
 
c
o
n
t
_
s
u
m
m
a
r
y
 
W
H
E
R
E
 
t
o
t
a
l
_
g
d
p
 
*
 
1
.
0
 
/
 
c
o
u
n
t
r
y
_
c
o
u
n
t
 
>
 
5
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
t
o
t
a
l
_
g
d
p
 
/
 
c
o
u
n
t
r
y
_
c
o
u
n
t
 
g
i
v
e
s
 
t
h
e
 
a
v
e
r
a
g
e
 
G
D
P
 
p
e
r
 
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


 
 
 
 
 
 
"
M
u
l
t
i
p
l
y
 
b
y
 
1
.
0
 
f
o
r
 
d
e
c
i
m
a
l
 
d
i
v
i
s
i
o
n
.
"
,


 
 
 
 
 
 
"
5
0
0
 
b
i
l
l
i
o
n
 
=
 
5
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
W
I
T
H
"
,
 
"
C
T
E
"
,
 
"
S
U
M
"
,
 
"
C
O
U
N
T
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
G
R
O
U
P
 
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
w
o
r
l
d
"
,


 
 
}
,


]
;


