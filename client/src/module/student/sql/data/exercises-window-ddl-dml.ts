
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
W
i
n
d
o
w
D
d
l
D
m
l
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
w
i
n
d
o
w
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
w
i
n
d
o
w
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
C
o
n
s
t
i
t
u
e
n
c
y
 
V
o
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
 
t
h
e
 
l
a
s
t
N
a
m
e
,
 
p
a
r
t
y
,
 
a
n
d
 
v
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
 
c
o
n
s
t
i
t
u
e
n
c
y
 
'
S
1
4
0
0
0
0
2
4
'
 
i
n
 
2
0
1
7
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
 
l
a
s
t
N
a
m
e
,
 
p
a
r
t
y
,
 
v
o
t
e
s
\
n
 
F
R
O
M
 
g
e
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
s
t
i
t
u
e
n
c
y
 
=
 
_
_
_
\
n
 
 
 
A
N
D
 
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
 
l
a
s
t
N
a
m
e
,
 
p
a
r
t
y
,
 
v
o
t
e
s
 
F
R
O
M
 
g
e
 
W
H
E
R
E
 
c
o
n
s
t
i
t
u
e
n
c
y
 
=
 
'
S
1
4
0
0
0
0
2
4
'
 
A
N
D
 
y
r
 
=
 
2
0
1
7
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
 
c
o
n
s
t
i
t
u
e
n
c
y
 
a
n
d
 
y
e
a
r
.
"
,


 
 
 
 
 
 
"
T
h
e
 
g
e
 
t
a
b
l
e
 
h
a
s
 
c
o
l
u
m
n
s
:
 
y
r
,
 
f
i
r
s
t
N
a
m
e
,
 
l
a
s
t
N
a
m
e
,
 
c
o
n
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
,
 
v
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
e
l
e
c
t
i
o
n
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
w
i
n
d
o
w
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
w
i
n
d
o
w
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
A
N
K
 
i
n
 
a
 
C
o
n
s
t
i
t
u
e
n
c
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
 
c
o
n
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
,
 
v
o
t
e
s
,
 
a
n
d
 
R
A
N
K
(
)
 
f
o
r
 
c
o
n
s
t
i
t
u
e
n
c
y
 
'
S
1
4
0
0
0
0
2
4
'
 
i
n
 
2
0
1
7
.
 
R
a
n
k
 
b
y
 
v
o
t
e
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
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
,
 
v
o
t
e
s
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
 
v
o
t
e
s
 
D
E
S
C
)
 
A
S
 
p
o
s
n
\
n
 
F
R
O
M
 
g
e
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
s
t
i
t
u
e
n
c
y
 
=
 
'
S
1
4
0
0
0
0
2
4
'
\
n
 
 
 
A
N
D
 
y
r
 
=
 
2
0
1
7
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
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
,
 
v
o
t
e
s
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
 
v
o
t
e
s
 
D
E
S
C
)
 
A
S
 
p
o
s
n
 
F
R
O
M
 
g
e
 
W
H
E
R
E
 
c
o
n
s
t
i
t
u
e
n
c
y
 
=
 
'
S
1
4
0
0
0
0
2
4
'
 
A
N
D
 
y
r
 
=
 
2
0
1
7
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
 
v
o
t
e
s
 
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
 
a
 
r
a
n
k
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
 
h
i
g
h
e
s
t
 
v
o
t
e
s
 
g
e
t
 
r
a
n
k
 
1
.
"
,


 
 
 
 
 
 
"
E
q
u
a
l
 
v
o
t
e
s
 
g
e
t
 
t
h
e
 
s
a
m
e
 
r
a
n
k
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
A
N
K
"
,
 
"
w
i
n
d
o
w
 
f
u
n
c
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
e
l
e
c
t
i
o
n
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
w
i
n
d
o
w
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
w
i
n
d
o
w
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
P
A
R
T
I
T
I
O
N
 
B
Y
 
Y
e
a
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
S
h
o
w
 
t
h
e
 
c
o
n
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
,
 
v
o
t
e
s
,
 
a
n
d
 
R
A
N
K
 
f
o
r
 
c
o
n
s
t
i
t
u
e
n
c
y
 
'
S
1
4
0
0
0
0
2
4
'
 
a
c
r
o
s
s
 
a
l
l
 
y
e
a
r
s
.
 
U
s
e
 
P
A
R
T
I
T
I
O
N
 
B
Y
 
y
r
 
t
o
 
r
a
n
k
 
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
 
y
e
a
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
 
y
r
,
 
c
o
n
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
,
 
v
o
t
e
s
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
P
A
R
T
I
T
I
O
N
 
B
Y
 
_
_
_
 
O
R
D
E
R
 
B
Y
 
v
o
t
e
s
 
D
E
S
C
)
 
A
S
 
p
o
s
n
\
n
 
F
R
O
M
 
g
e
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
s
t
i
t
u
e
n
c
y
 
=
 
'
S
1
4
0
0
0
0
2
4
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
 
y
r
,
 
p
o
s
n
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
 
c
o
n
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
,
 
v
o
t
e
s
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
P
A
R
T
I
T
I
O
N
 
B
Y
 
y
r
 
O
R
D
E
R
 
B
Y
 
v
o
t
e
s
 
D
E
S
C
)
 
A
S
 
p
o
s
n
 
F
R
O
M
 
g
e
 
W
H
E
R
E
 
c
o
n
s
t
i
t
u
e
n
c
y
 
=
 
'
S
1
4
0
0
0
0
2
4
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
,
 
p
o
s
n
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
A
R
T
I
T
I
O
N
 
B
Y
 
d
i
v
i
d
e
s
 
t
h
e
 
d
a
t
a
 
i
n
t
o
 
g
r
o
u
p
s
 
f
o
r
 
r
a
n
k
i
n
g
.
"
,


 
 
 
 
 
 
"
P
A
R
T
I
T
I
O
N
 
B
Y
 
y
r
 
c
r
e
a
t
e
s
 
a
 
s
e
p
a
r
a
t
e
 
r
a
n
k
i
n
g
 
f
o
r
 
e
a
c
h
 
e
l
e
c
t
i
o
n
 
y
e
a
r
.
"
,


 
 
 
 
 
 
"
E
a
c
h
 
y
e
a
r
 
r
e
s
t
a
r
t
s
 
t
h
e
 
r
a
n
k
i
n
g
 
f
r
o
m
 
1
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
A
N
K
"
,
 
"
P
A
R
T
I
T
I
O
N
 
B
Y
"
,
 
"
w
i
n
d
o
w
 
f
u
n
c
t
i
o
n
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
e
l
e
c
t
i
o
n
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
w
i
n
d
o
w
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
w
i
n
d
o
w
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
E
d
i
n
b
u
r
g
h
 
2
0
1
7
 
R
a
n
k
i
n
g
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
 
c
o
n
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
,
 
v
o
t
e
s
,
 
a
n
d
 
r
a
n
k
 
f
o
r
 
E
d
i
n
b
u
r
g
h
 
c
o
n
s
t
i
t
u
e
n
c
i
e
s
 
(
c
o
n
s
t
i
t
u
e
n
c
y
 
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
1
4
0
0
0
'
)
 
i
n
 
2
0
1
7
.
 
R
a
n
k
 
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
 
c
o
n
s
t
i
t
u
e
n
c
y
 
b
y
 
v
o
t
e
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
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
,
 
v
o
t
e
s
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
P
A
R
T
I
T
I
O
N
 
B
Y
 
_
_
_
 
O
R
D
E
R
 
B
Y
 
v
o
t
e
s
 
D
E
S
C
)
 
A
S
 
p
o
s
n
\
n
 
F
R
O
M
 
g
e
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
s
t
i
t
u
e
n
c
y
 
L
I
K
E
 
'
S
1
4
0
0
0
%
'
\
n
 
 
 
A
N
D
 
y
r
 
=
 
2
0
1
7
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
o
n
s
t
i
t
u
e
n
c
y
,
 
p
o
s
n
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
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
,
 
v
o
t
e
s
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
P
A
R
T
I
T
I
O
N
 
B
Y
 
c
o
n
s
t
i
t
u
e
n
c
y
 
O
R
D
E
R
 
B
Y
 
v
o
t
e
s
 
D
E
S
C
)
 
A
S
 
p
o
s
n
 
F
R
O
M
 
g
e
 
W
H
E
R
E
 
c
o
n
s
t
i
t
u
e
n
c
y
 
L
I
K
E
 
'
S
1
4
0
0
0
%
'
 
A
N
D
 
y
r
 
=
 
2
0
1
7
 
O
R
D
E
R
 
B
Y
 
c
o
n
s
t
i
t
u
e
n
c
y
,
 
p
o
s
n
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
A
R
T
I
T
I
O
N
 
B
Y
 
c
o
n
s
t
i
t
u
e
n
c
y
 
r
a
n
k
s
 
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
 
c
o
n
s
t
i
t
u
e
n
c
y
.
"
,


 
 
 
 
 
 
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
1
4
0
0
0
%
'
 
t
o
 
f
i
l
t
e
r
 
E
d
i
n
b
u
r
g
h
 
c
o
n
s
t
i
t
u
e
n
c
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
A
N
K
"
,
 
"
P
A
R
T
I
T
I
O
N
 
B
Y
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
w
i
n
d
o
w
 
f
u
n
c
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
e
l
e
c
t
i
o
n
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
w
i
n
d
o
w
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
w
i
n
d
o
w
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
W
i
n
n
e
r
s
 
O
n
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
 
c
o
n
s
t
i
t
u
e
n
c
y
 
a
n
d
 
p
a
r
t
y
 
f
o
r
 
E
d
i
n
b
u
r
g
h
 
c
o
n
s
t
i
t
u
e
n
c
i
e
s
 
i
n
 
2
0
1
7
 
w
h
e
r
e
 
t
h
e
 
p
a
r
t
y
 
w
o
n
 
(
r
a
n
k
 
=
 
1
)
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
 
t
o
 
f
i
l
t
e
r
 
b
y
 
r
a
n
k
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
 
c
o
n
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
 
F
R
O
M
 
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
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
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
P
A
R
T
I
T
I
O
N
 
B
Y
 
c
o
n
s
t
i
t
u
e
n
c
y
 
O
R
D
E
R
 
B
Y
 
v
o
t
e
s
 
D
E
S
C
)
 
A
S
 
p
o
s
n
\
n
 
 
F
R
O
M
 
g
e
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
s
t
i
t
u
e
n
c
y
 
L
I
K
E
 
'
S
1
4
0
0
0
%
'
\
n
 
 
 
 
A
N
D
 
y
r
 
=
 
2
0
1
7
\
n
)
 
A
S
 
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
 
p
o
s
n
 
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
 
c
o
n
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
 
F
R
O
M
 
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
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
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
P
A
R
T
I
T
I
O
N
 
B
Y
 
c
o
n
s
t
i
t
u
e
n
c
y
 
O
R
D
E
R
 
B
Y
 
v
o
t
e
s
 
D
E
S
C
)
 
A
S
 
p
o
s
n
 
F
R
O
M
 
g
e
 
W
H
E
R
E
 
c
o
n
s
t
i
t
u
e
n
c
y
 
L
I
K
E
 
'
S
1
4
0
0
0
%
'
 
A
N
D
 
y
r
 
=
 
2
0
1
7
)
 
A
S
 
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
 
p
o
s
n
 
=
 
1
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
i
n
d
o
w
 
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
a
n
n
o
t
 
b
e
 
u
s
e
d
 
d
i
r
e
c
t
l
y
 
i
n
 
W
H
E
R
E
.
"
,


 
 
 
 
 
 
"
W
r
a
p
 
t
h
e
 
q
u
e
r
y
 
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
,
 
t
h
e
n
 
f
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
.
"
,


 
 
 
 
 
 
"
p
o
s
n
 
=
 
1
 
g
i
v
e
s
 
t
h
e
 
w
i
n
n
e
r
 
o
f
 
e
a
c
h
 
c
o
n
s
t
i
t
u
e
n
c
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
R
A
N
K
"
,
 
"
P
A
R
T
I
T
I
O
N
 
B
Y
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
w
i
n
d
o
w
 
f
u
n
c
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
e
l
e
c
t
i
o
n
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
w
i
n
d
o
w
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
w
i
n
d
o
w
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
S
c
o
t
t
i
s
h
 
S
e
a
t
s
 
p
e
r
 
P
a
r
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
 
h
o
w
 
m
a
n
y
 
s
e
a
t
s
 
e
a
c
h
 
p
a
r
t
y
 
w
o
n
 
i
n
 
S
c
o
t
l
a
n
d
 
(
c
o
n
s
t
i
t
u
e
n
c
y
 
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
'
)
 
i
n
 
2
0
1
7
.
 
A
 
p
a
r
t
y
 
w
i
n
s
 
a
 
s
e
a
t
 
w
h
e
n
 
i
t
 
h
a
s
 
r
a
n
k
 
1
 
i
n
 
a
 
c
o
n
s
t
i
t
u
e
n
c
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
S
E
L
E
C
T
 
p
a
r
t
y
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
 
s
e
a
t
s
 
F
R
O
M
 
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
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
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
P
A
R
T
I
T
I
O
N
 
B
Y
 
c
o
n
s
t
i
t
u
e
n
c
y
 
O
R
D
E
R
 
B
Y
 
v
o
t
e
s
 
D
E
S
C
)
 
A
S
 
p
o
s
n
\
n
 
 
F
R
O
M
 
g
e
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
s
t
i
t
u
e
n
c
y
 
L
I
K
E
 
'
S
%
'
\
n
 
 
 
 
A
N
D
 
y
r
 
=
 
2
0
1
7
\
n
)
 
A
S
 
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
 
p
o
s
n
 
=
 
1
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
 
s
e
a
t
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
 
p
a
r
t
y
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
 
s
e
a
t
s
 
F
R
O
M
 
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
s
t
i
t
u
e
n
c
y
,
 
p
a
r
t
y
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
P
A
R
T
I
T
I
O
N
 
B
Y
 
c
o
n
s
t
i
t
u
e
n
c
y
 
O
R
D
E
R
 
B
Y
 
v
o
t
e
s
 
D
E
S
C
)
 
A
S
 
p
o
s
n
 
F
R
O
M
 
g
e
 
W
H
E
R
E
 
c
o
n
s
t
i
t
u
e
n
c
y
 
L
I
K
E
 
'
S
%
'
 
A
N
D
 
y
r
 
=
 
2
0
1
7
)
 
A
S
 
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
 
p
o
s
n
 
=
 
1
 
G
R
O
U
P
 
B
Y
 
p
a
r
t
y
 
O
R
D
E
R
 
B
Y
 
s
e
a
t
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
F
i
r
s
t
 
r
a
n
k
 
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
 
c
o
n
s
t
i
t
u
e
n
c
y
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
 
f
o
r
 
w
i
n
n
e
r
s
 
(
p
o
s
n
 
=
 
1
)
 
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
.
"
,


 
 
 
 
 
 
"
G
r
o
u
p
 
b
y
 
p
a
r
t
y
 
a
n
d
 
c
o
u
n
t
 
t
o
 
g
e
t
 
s
e
a
t
s
 
p
e
r
 
p
a
r
t
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
R
A
N
K
"
,
 
"
P
A
R
T
I
T
I
O
N
 
B
Y
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
w
i
n
d
o
w
 
f
u
n
c
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
e
l
e
c
t
i
o
n
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
w
i
n
d
o
w
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
w
i
n
d
o
w
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
R
u
n
n
i
n
g
 
T
o
t
a
l
 
o
f
 
V
o
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
F
o
r
 
t
h
e
 
c
o
n
s
t
i
t
u
e
n
c
y
 
'
S
1
4
0
0
0
0
2
1
'
 
i
n
 
2
0
1
7
,
 
s
h
o
w
 
e
a
c
h
 
c
a
n
d
i
d
a
t
e
'
s
 
l
a
s
t
N
a
m
e
,
 
p
a
r
t
y
,
 
v
o
t
e
s
,
 
a
n
d
 
a
 
r
u
n
n
i
n
g
 
t
o
t
a
l
 
o
f
 
v
o
t
e
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
 
v
o
t
e
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
 
l
a
s
t
N
a
m
e
,
 
p
a
r
t
y
,
 
v
o
t
e
s
,
\
n
 
 
S
U
M
(
v
o
t
e
s
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
 
v
o
t
e
s
 
_
_
_
)
 
A
S
 
r
u
n
n
i
n
g
_
t
o
t
a
l
\
n
F
R
O
M
 
g
e
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
s
t
i
t
u
e
n
c
y
 
=
 
'
S
1
4
0
0
0
0
2
1
'
\
n
 
 
A
N
D
 
y
r
 
=
 
2
0
1
7
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
 
l
a
s
t
N
a
m
e
,
 
p
a
r
t
y
,
 
v
o
t
e
s
,
 
S
U
M
(
v
o
t
e
s
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
 
v
o
t
e
s
 
D
E
S
C
)
 
A
S
 
r
u
n
n
i
n
g
_
t
o
t
a
l
 
F
R
O
M
 
g
e
 
W
H
E
R
E
 
c
o
n
s
t
i
t
u
e
n
c
y
 
=
 
'
S
1
4
0
0
0
0
2
1
'
 
A
N
D
 
y
r
 
=
 
2
0
1
7
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
 
.
.
.
)
 
c
r
e
a
t
e
s
 
a
 
r
u
n
n
i
n
g
 
t
o
t
a
l
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
 
v
o
t
e
s
 
D
E
S
C
 
g
i
v
e
s
 
h
i
g
h
e
s
t
 
v
o
t
e
s
 
f
i
r
s
t
.
"
,


 
 
 
 
 
 
"
E
a
c
h
 
r
o
w
'
s
 
r
u
n
n
i
n
g
_
t
o
t
a
l
 
i
n
c
l
u
d
e
s
 
a
l
l
 
p
r
i
o
r
 
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
U
M
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
,
 
"
w
i
n
d
o
w
 
f
u
n
c
t
i
o
n
"
,
 
"
r
u
n
n
i
n
g
 
t
o
t
a
l
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
e
l
e
c
t
i
o
n
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
w
i
n
d
o
w
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
w
i
n
d
o
w
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
V
o
t
e
 
S
h
a
r
e
 
w
i
t
h
 
L
A
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
o
r
 
c
o
n
s
t
i
t
u
e
n
c
y
 
'
S
1
4
0
0
0
0
2
2
'
 
i
n
 
2
0
1
7
,
 
s
h
o
w
 
e
a
c
h
 
c
a
n
d
i
d
a
t
e
'
s
 
l
a
s
t
N
a
m
e
,
 
v
o
t
e
s
,
 
a
n
d
 
t
h
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
 
i
n
 
v
o
t
e
s
 
c
o
m
p
a
r
e
d
 
t
o
 
t
h
e
 
n
e
x
t
 
c
a
n
d
i
d
a
t
e
 
(
o
r
d
e
r
e
d
 
b
y
 
v
o
t
e
s
 
D
E
S
C
)
.
 
U
s
e
 
L
A
G
 
t
o
 
g
e
t
 
t
h
e
 
p
r
e
v
i
o
u
s
 
r
o
w
'
s
 
v
o
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
 
l
a
s
t
N
a
m
e
,
 
v
o
t
e
s
,
\
n
 
 
v
o
t
e
s
 
-
 
L
A
G
(
v
o
t
e
s
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
 
v
o
t
e
s
 
_
_
_
)
 
A
S
 
v
o
t
e
_
g
a
p
\
n
F
R
O
M
 
g
e
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
s
t
i
t
u
e
n
c
y
 
=
 
'
S
1
4
0
0
0
0
2
2
'
\
n
 
 
A
N
D
 
y
r
 
=
 
2
0
1
7
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
 
l
a
s
t
N
a
m
e
,
 
v
o
t
e
s
,
 
v
o
t
e
s
 
-
 
L
A
G
(
v
o
t
e
s
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
 
v
o
t
e
s
 
D
E
S
C
)
 
A
S
 
v
o
t
e
_
g
a
p
 
F
R
O
M
 
g
e
 
W
H
E
R
E
 
c
o
n
s
t
i
t
u
e
n
c
y
 
=
 
'
S
1
4
0
0
0
0
2
2
'
 
A
N
D
 
y
r
 
=
 
2
0
1
7
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
A
G
(
c
o
l
u
m
n
)
 
O
V
E
R
 
(
.
.
.
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
 
v
a
l
u
e
 
f
r
o
m
 
t
h
e
 
p
r
e
v
i
o
u
s
 
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
 
f
i
r
s
t
 
r
o
w
 
w
i
l
l
 
h
a
v
e
 
N
U
L
L
 
f
o
r
 
v
o
t
e
_
g
a
p
 
s
i
n
c
e
 
t
h
e
r
e
'
s
 
n
o
 
p
r
e
v
i
o
u
s
 
r
o
w
.
"
,


 
 
 
 
 
 
"
O
r
d
e
r
 
b
y
 
v
o
t
e
s
 
D
E
S
C
 
t
o
 
c
o
m
p
a
r
e
 
e
a
c
h
 
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
t
h
 
t
h
e
 
o
n
e
 
a
b
o
v
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
A
G
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
,
 
"
w
i
n
d
o
w
 
f
u
n
c
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
e
l
e
c
t
i
o
n
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
w
i
n
d
o
w
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
w
i
n
d
o
w
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
 
8
,


 
 
 
 
t
i
t
l
e
:
 
"
N
T
I
L
E
 
Q
u
a
r
t
i
l
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
D
i
v
i
d
e
 
t
h
e
 
2
0
1
7
 
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
 
c
o
n
s
t
i
t
u
e
n
c
y
 
'
S
1
4
0
0
0
0
2
1
'
 
i
n
t
o
 
2
 
g
r
o
u
p
s
 
(
h
a
l
v
e
s
)
 
b
a
s
e
d
 
o
n
 
v
o
t
e
s
.
 
S
h
o
w
 
l
a
s
t
N
a
m
e
,
 
v
o
t
e
s
,
 
a
n
d
 
t
h
e
 
g
r
o
u
p
 
n
u
m
b
e
r
 
u
s
i
n
g
 
N
T
I
L
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
 
l
a
s
t
N
a
m
e
,
 
v
o
t
e
s
,
\
n
 
 
N
T
I
L
E
(
_
_
_
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
 
v
o
t
e
s
 
D
E
S
C
)
 
A
S
 
v
o
t
e
_
h
a
l
f
\
n
F
R
O
M
 
g
e
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
s
t
i
t
u
e
n
c
y
 
=
 
'
S
1
4
0
0
0
0
2
1
'
\
n
 
 
A
N
D
 
y
r
 
=
 
2
0
1
7
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
 
l
a
s
t
N
a
m
e
,
 
v
o
t
e
s
,
 
N
T
I
L
E
(
2
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
 
v
o
t
e
s
 
D
E
S
C
)
 
A
S
 
v
o
t
e
_
h
a
l
f
 
F
R
O
M
 
g
e
 
W
H
E
R
E
 
c
o
n
s
t
i
t
u
e
n
c
y
 
=
 
'
S
1
4
0
0
0
0
2
1
'
 
A
N
D
 
y
r
 
=
 
2
0
1
7
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
N
T
I
L
E
(
n
)
 
d
i
v
i
d
e
s
 
r
o
w
s
 
i
n
t
o
 
n
 
r
o
u
g
h
l
y
 
e
q
u
a
l
 
g
r
o
u
p
s
.
"
,


 
 
 
 
 
 
"
N
T
I
L
E
(
2
)
 
c
r
e
a
t
e
s
 
t
w
o
 
h
a
l
v
e
s
:
 
t
o
p
 
h
a
l
f
 
g
e
t
s
 
1
,
 
b
o
t
t
o
m
 
h
a
l
f
 
g
e
t
s
 
2
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
N
T
I
L
E
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
,
 
"
w
i
n
d
o
w
 
f
u
n
c
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
e
l
e
c
t
i
o
n
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
w
i
n
d
o
w
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
w
i
n
d
o
w
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
 
9
,


 
 
 
 
t
i
t
l
e
:
 
"
D
E
N
S
E
_
R
A
N
K
 
C
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
 
c
o
n
s
t
i
t
u
e
n
c
y
 
'
S
1
4
0
0
0
0
2
5
'
 
i
n
 
b
o
t
h
 
2
0
1
5
 
a
n
d
 
2
0
1
7
,
 
s
h
o
w
 
y
r
,
 
l
a
s
t
N
a
m
e
,
 
p
a
r
t
y
,
 
v
o
t
e
s
,
 
a
n
d
 
t
h
e
 
D
E
N
S
E
_
R
A
N
K
 
b
a
s
e
d
 
o
n
 
v
o
t
e
s
 
p
e
r
 
y
e
a
r
.
 
P
a
r
t
i
t
i
o
n
 
b
y
 
y
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
 
y
r
,
 
l
a
s
t
N
a
m
e
,
 
p
a
r
t
y
,
 
v
o
t
e
s
,
\
n
 
 
D
E
N
S
E
_
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
P
A
R
T
I
T
I
O
N
 
B
Y
 
_
_
_
 
O
R
D
E
R
 
B
Y
 
v
o
t
e
s
 
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
 
g
e
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
s
t
i
t
u
e
n
c
y
 
=
 
'
S
1
4
0
0
0
0
2
5
'
\
n
 
 
A
N
D
 
y
r
 
I
N
 
(
2
0
1
5
,
 
2
0
1
7
)
\
n
O
R
D
E
R
 
B
Y
 
y
r
,
 
r
n
k
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
 
l
a
s
t
N
a
m
e
,
 
p
a
r
t
y
,
 
v
o
t
e
s
,
 
D
E
N
S
E
_
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
P
A
R
T
I
T
I
O
N
 
B
Y
 
y
r
 
O
R
D
E
R
 
B
Y
 
v
o
t
e
s
 
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
 
g
e
 
W
H
E
R
E
 
c
o
n
s
t
i
t
u
e
n
c
y
 
=
 
'
S
1
4
0
0
0
0
2
5
'
 
A
N
D
 
y
r
 
I
N
 
(
2
0
1
5
,
 
2
0
1
7
)
 
O
R
D
E
R
 
B
Y
 
y
r
,
 
r
n
k
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
A
R
T
I
T
I
O
N
 
B
Y
 
y
r
 
g
i
v
e
s
 
e
a
c
h
 
y
e
a
r
 
i
t
s
 
o
w
n
 
r
a
n
k
i
n
g
.
"
,


 
 
 
 
 
 
"
D
E
N
S
E
_
R
A
N
K
 
d
o
e
s
 
n
o
t
 
s
k
i
p
 
n
u
m
b
e
r
s
 
w
h
e
n
 
t
h
e
r
e
 
a
r
e
 
t
i
e
s
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
 
y
r
,
 
r
n
k
 
s
o
r
t
s
 
t
h
e
 
f
i
n
a
l
 
o
u
t
p
u
t
 
b
y
 
y
e
a
r
 
t
h
e
n
 
r
a
n
k
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
D
E
N
S
E
_
R
A
N
K
"
,
 
"
P
A
R
T
I
T
I
O
N
 
B
Y
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
,
 
"
w
i
n
d
o
w
 
f
u
n
c
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
e
l
e
c
t
i
o
n
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
d
d
l
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
d
d
l
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
C
r
e
a
t
e
 
a
 
S
i
m
p
l
e
 
T
a
b
l
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
C
r
e
a
t
e
 
a
 
t
a
b
l
e
 
c
a
l
l
e
d
 
'
s
t
u
d
e
n
t
s
'
 
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
s
:
 
i
d
 
(
I
N
T
E
G
E
R
 
P
R
I
M
A
R
Y
 
K
E
Y
)
,
 
n
a
m
e
 
(
T
E
X
T
 
N
O
T
 
N
U
L
L
)
,
 
a
n
d
 
a
g
e
 
(
I
N
T
E
G
E
R
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
C
R
E
A
T
E
 
T
A
B
L
E
 
s
t
u
d
e
n
t
s
 
(
\
n
 
 
i
d
 
_
_
_
 
P
R
I
M
A
R
Y
 
K
E
Y
,
\
n
 
 
n
a
m
e
 
_
_
_
 
N
O
T
 
N
U
L
L
,
\
n
 
 
a
g
e
 
_
_
_
\
n
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
C
R
E
A
T
E
 
T
A
B
L
E
 
s
t
u
d
e
n
t
s
 
(
\
n
 
 
i
d
 
I
N
T
E
G
E
R
 
P
R
I
M
A
R
Y
 
K
E
Y
,
\
n
 
 
n
a
m
e
 
T
E
X
T
 
N
O
T
 
N
U
L
L
,
\
n
 
 
a
g
e
 
I
N
T
E
G
E
R
\
n
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
S
Q
L
i
t
e
 
u
s
e
s
 
I
N
T
E
G
E
R
,
 
T
E
X
T
,
 
R
E
A
L
,
 
B
L
O
B
 
a
s
 
d
a
t
a
 
t
y
p
e
s
.
"
,


 
 
 
 
 
 
"
P
R
I
M
A
R
Y
 
K
E
Y
 
i
d
e
n
t
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
 
u
n
i
q
u
e
l
y
.
"
,


 
 
 
 
 
 
"
N
O
T
 
N
U
L
L
 
m
e
a
n
s
 
t
h
e
 
c
o
l
u
m
n
 
c
a
n
n
o
t
 
b
e
 
e
m
p
t
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
C
R
E
A
T
E
 
T
A
B
L
E
"
,
 
"
P
R
I
M
A
R
Y
 
K
E
Y
"
,
 
"
N
O
T
 
N
U
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
d
d
l
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
d
d
l
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
A
d
d
 
a
 
C
o
l
u
m
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
A
d
d
 
a
n
 
e
m
a
i
l
 
c
o
l
u
m
n
 
(
T
E
X
T
)
 
t
o
 
t
h
e
 
s
t
u
d
e
n
t
s
 
t
a
b
l
e
.
 
U
s
e
 
A
L
T
E
R
 
T
A
B
L
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
A
L
T
E
R
 
T
A
B
L
E
 
s
t
u
d
e
n
t
s
\
n
 
A
D
D
 
C
O
L
U
M
N
 
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
A
L
T
E
R
 
T
A
B
L
E
 
s
t
u
d
e
n
t
s
 
A
D
D
 
C
O
L
U
M
N
 
e
m
a
i
l
 
T
E
X
T
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
L
T
E
R
 
T
A
B
L
E
 
t
a
b
l
e
_
n
a
m
e
 
A
D
D
 
C
O
L
U
M
N
 
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
 
t
y
p
e
.
"
,


 
 
 
 
 
 
"
T
h
e
 
n
e
w
 
c
o
l
u
m
n
 
w
i
l
l
 
h
a
v
e
 
N
U
L
L
 
f
o
r
 
e
x
i
s
t
i
n
g
 
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
A
L
T
E
R
 
T
A
B
L
E
"
,
 
"
A
D
D
 
C
O
L
U
M
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
d
d
l
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
d
d
l
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
C
r
e
a
t
e
 
T
a
b
l
e
 
w
i
t
h
 
C
o
n
s
t
r
a
i
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
C
r
e
a
t
e
 
a
 
t
a
b
l
e
 
c
a
l
l
e
d
 
'
c
o
u
r
s
e
s
'
 
w
i
t
h
:
 
i
d
 
(
I
N
T
E
G
E
R
 
P
R
I
M
A
R
Y
 
K
E
Y
)
,
 
t
i
t
l
e
 
(
T
E
X
T
 
N
O
T
 
N
U
L
L
 
U
N
I
Q
U
E
)
,
 
c
r
e
d
i
t
s
 
(
I
N
T
E
G
E
R
 
D
E
F
A
U
L
T
 
3
)
,
 
a
n
d
 
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
 
(
T
E
X
T
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
C
R
E
A
T
E
 
T
A
B
L
E
 
c
o
u
r
s
e
s
 
(
\
n
 
 
i
d
 
I
N
T
E
G
E
R
 
P
R
I
M
A
R
Y
 
K
E
Y
,
\
n
 
 
t
i
t
l
e
 
T
E
X
T
 
_
_
_
 
_
_
_
,
\
n
 
 
c
r
e
d
i
t
s
 
I
N
T
E
G
E
R
 
_
_
_
 
_
_
_
,
\
n
 
 
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
 
T
E
X
T
\
n
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
C
R
E
A
T
E
 
T
A
B
L
E
 
c
o
u
r
s
e
s
 
(
\
n
 
 
i
d
 
I
N
T
E
G
E
R
 
P
R
I
M
A
R
Y
 
K
E
Y
,
\
n
 
 
t
i
t
l
e
 
T
E
X
T
 
N
O
T
 
N
U
L
L
 
U
N
I
Q
U
E
,
\
n
 
 
c
r
e
d
i
t
s
 
I
N
T
E
G
E
R
 
D
E
F
A
U
L
T
 
3
,
\
n
 
 
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
 
T
E
X
T
\
n
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
N
I
Q
U
E
 
m
e
a
n
s
 
n
o
 
t
w
o
 
r
o
w
s
 
c
a
n
 
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
 
v
a
l
u
e
 
i
n
 
t
h
a
t
 
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
D
E
F
A
U
L
T
 
s
e
t
s
 
a
 
v
a
l
u
e
 
w
h
e
n
 
n
o
n
e
 
i
s
 
p
r
o
v
i
d
e
d
 
d
u
r
i
n
g
 
I
N
S
E
R
T
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
 
c
o
m
b
i
n
e
 
m
u
l
t
i
p
l
e
 
c
o
n
s
t
r
a
i
n
t
s
:
 
N
O
T
 
N
U
L
L
 
U
N
I
Q
U
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
C
R
E
A
T
E
 
T
A
B
L
E
"
,
 
"
P
R
I
M
A
R
Y
 
K
E
Y
"
,
 
"
N
O
T
 
N
U
L
L
"
,
 
"
U
N
I
Q
U
E
"
,
 
"
D
E
F
A
U
L
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
d
d
l
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
d
d
l
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
D
r
o
p
 
a
 
T
a
b
l
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
D
r
o
p
 
t
h
e
 
'
c
o
u
r
s
e
s
'
 
t
a
b
l
e
 
i
f
 
i
t
 
e
x
i
s
t
s
.
 
U
s
e
 
D
R
O
P
 
T
A
B
L
E
 
I
F
 
E
X
I
S
T
S
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
D
R
O
P
 
T
A
B
L
E
 
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
D
R
O
P
 
T
A
B
L
E
 
I
F
 
E
X
I
S
T
S
 
c
o
u
r
s
e
s
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
R
O
P
 
T
A
B
L
E
 
r
e
m
o
v
e
s
 
a
 
t
a
b
l
e
 
a
n
d
 
a
l
l
 
i
t
s
 
d
a
t
a
.
"
,


 
 
 
 
 
 
"
I
F
 
E
X
I
S
T
S
 
p
r
e
v
e
n
t
s
 
a
n
 
e
r
r
o
r
 
i
f
 
t
h
e
 
t
a
b
l
e
 
d
o
e
s
 
n
o
t
 
e
x
i
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
D
R
O
P
 
T
A
B
L
E
"
,
 
"
I
F
 
E
X
I
S
T
S
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
d
d
l
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
d
d
l
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
C
r
e
a
t
e
 
T
a
b
l
e
 
w
i
t
h
 
F
o
r
e
i
g
n
 
K
e
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
C
r
e
a
t
e
 
a
 
t
a
b
l
e
 
c
a
l
l
e
d
 
'
e
n
r
o
l
l
m
e
n
t
s
'
 
w
i
t
h
:
 
i
d
 
(
I
N
T
E
G
E
R
 
P
R
I
M
A
R
Y
 
K
E
Y
)
,
 
s
t
u
d
e
n
t
_
i
d
 
(
I
N
T
E
G
E
R
,
 
f
o
r
e
i
g
n
 
k
e
y
 
t
o
 
s
t
u
d
e
n
t
s
.
i
d
)
,
 
c
o
u
r
s
e
_
i
d
 
(
I
N
T
E
G
E
R
,
 
f
o
r
e
i
g
n
 
k
e
y
 
t
o
 
c
o
u
r
s
e
s
.
i
d
)
,
 
a
n
d
 
e
n
r
o
l
l
e
d
_
d
a
t
e
 
(
T
E
X
T
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
C
R
E
A
T
E
 
T
A
B
L
E
 
e
n
r
o
l
l
m
e
n
t
s
 
(
\
n
 
 
i
d
 
I
N
T
E
G
E
R
 
P
R
I
M
A
R
Y
 
K
E
Y
,
\
n
 
 
s
t
u
d
e
n
t
_
i
d
 
I
N
T
E
G
E
R
,
\
n
 
 
c
o
u
r
s
e
_
i
d
 
I
N
T
E
G
E
R
,
\
n
 
 
e
n
r
o
l
l
e
d
_
d
a
t
e
 
T
E
X
T
,
\
n
 
 
F
O
R
E
I
G
N
 
K
E
Y
 
(
s
t
u
d
e
n
t
_
i
d
)
 
R
E
F
E
R
E
N
C
E
S
 
_
_
_
,
\
n
 
 
F
O
R
E
I
G
N
 
K
E
Y
 
(
c
o
u
r
s
e
_
i
d
)
 
R
E
F
E
R
E
N
C
E
S
 
_
_
_
\
n
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
C
R
E
A
T
E
 
T
A
B
L
E
 
e
n
r
o
l
l
m
e
n
t
s
 
(
\
n
 
 
i
d
 
I
N
T
E
G
E
R
 
P
R
I
M
A
R
Y
 
K
E
Y
,
\
n
 
 
s
t
u
d
e
n
t
_
i
d
 
I
N
T
E
G
E
R
,
\
n
 
 
c
o
u
r
s
e
_
i
d
 
I
N
T
E
G
E
R
,
\
n
 
 
e
n
r
o
l
l
e
d
_
d
a
t
e
 
T
E
X
T
,
\
n
 
 
F
O
R
E
I
G
N
 
K
E
Y
 
(
s
t
u
d
e
n
t
_
i
d
)
 
R
E
F
E
R
E
N
C
E
S
 
s
t
u
d
e
n
t
s
(
i
d
)
,
\
n
 
 
F
O
R
E
I
G
N
 
K
E
Y
 
(
c
o
u
r
s
e
_
i
d
)
 
R
E
F
E
R
E
N
C
E
S
 
c
o
u
r
s
e
s
(
i
d
)
\
n
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
F
O
R
E
I
G
N
 
K
E
Y
 
(
c
o
l
u
m
n
)
 
R
E
F
E
R
E
N
C
E
S
 
o
t
h
e
r
_
t
a
b
l
e
(
o
t
h
e
r
_
c
o
l
u
m
n
)
.
"
,


 
 
 
 
 
 
"
F
o
r
e
i
g
n
 
k
e
y
s
 
e
n
f
o
r
c
e
 
r
e
f
e
r
e
n
t
i
a
l
 
i
n
t
e
g
r
i
t
y
 
b
e
t
w
e
e
n
 
t
a
b
l
e
s
.
"
,


 
 
 
 
 
 
"
T
h
e
 
r
e
f
e
r
e
n
c
e
d
 
c
o
l
u
m
n
 
m
u
s
t
 
b
e
 
a
 
P
R
I
M
A
R
Y
 
K
E
Y
 
o
r
 
U
N
I
Q
U
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
C
R
E
A
T
E
 
T
A
B
L
E
"
,
 
"
F
O
R
E
I
G
N
 
K
E
Y
"
,
 
"
R
E
F
E
R
E
N
C
E
S
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
d
d
l
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
d
d
l
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
A
d
d
 
a
 
C
o
l
u
m
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
A
d
d
 
a
 
c
o
l
u
m
n
 
c
a
l
l
e
d
 
'
e
m
a
i
l
'
 
o
f
 
t
y
p
e
 
T
E
X
T
 
t
o
 
t
h
e
 
'
s
t
u
d
e
n
t
s
'
 
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
 
A
L
T
E
R
 
T
A
B
L
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
A
L
T
E
R
 
T
A
B
L
E
 
s
t
u
d
e
n
t
s
\
n
 
A
D
D
 
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
A
L
T
E
R
 
T
A
B
L
E
 
s
t
u
d
e
n
t
s
 
A
D
D
 
e
m
a
i
l
 
T
E
X
T
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
L
T
E
R
 
T
A
B
L
E
 
t
a
b
l
e
_
n
a
m
e
 
A
D
D
 
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
 
d
a
t
a
_
t
y
p
e
.
"
,


 
 
 
 
 
 
"
N
e
w
 
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
 
a
d
d
e
d
 
w
i
t
h
 
N
U
L
L
 
v
a
l
u
e
s
 
f
o
r
 
e
x
i
s
t
i
n
g
 
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
A
L
T
E
R
 
T
A
B
L
E
"
,
 
"
A
D
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
d
d
l
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
d
d
l
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
R
e
n
a
m
e
 
a
 
C
o
l
u
m
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
R
e
n
a
m
e
 
t
h
e
 
c
o
l
u
m
n
 
'
a
g
e
'
 
t
o
 
'
b
i
r
t
h
_
y
e
a
r
'
 
i
n
 
t
h
e
 
'
s
t
u
d
e
n
t
s
'
 
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
A
L
T
E
R
 
T
A
B
L
E
 
s
t
u
d
e
n
t
s
\
n
 
R
E
N
A
M
E
 
C
O
L
U
M
N
 
_
_
_
 
T
O
 
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
A
L
T
E
R
 
T
A
B
L
E
 
s
t
u
d
e
n
t
s
 
R
E
N
A
M
E
 
C
O
L
U
M
N
 
a
g
e
 
T
O
 
b
i
r
t
h
_
y
e
a
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
A
L
T
E
R
 
T
A
B
L
E
 
.
.
.
 
R
E
N
A
M
E
 
C
O
L
U
M
N
 
o
l
d
_
n
a
m
e
 
T
O
 
n
e
w
_
n
a
m
e
.
"
,


 
 
 
 
 
 
"
T
h
i
s
 
o
n
l
y
 
c
h
a
n
g
e
s
 
t
h
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
,
 
n
o
t
 
i
t
s
 
d
a
t
a
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
L
T
E
R
 
T
A
B
L
E
"
,
 
"
R
E
N
A
M
E
 
C
O
L
U
M
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
d
d
l
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
d
d
l
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
D
r
o
p
 
a
 
C
o
l
u
m
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
R
e
m
o
v
e
 
t
h
e
 
'
e
m
a
i
l
'
 
c
o
l
u
m
n
 
f
r
o
m
 
t
h
e
 
'
s
t
u
d
e
n
t
s
'
 
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
A
L
T
E
R
 
T
A
B
L
E
 
s
t
u
d
e
n
t
s
\
n
 
D
R
O
P
 
C
O
L
U
M
N
 
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
A
L
T
E
R
 
T
A
B
L
E
 
s
t
u
d
e
n
t
s
 
D
R
O
P
 
C
O
L
U
M
N
 
e
m
a
i
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
A
L
T
E
R
 
T
A
B
L
E
 
.
.
.
 
D
R
O
P
 
C
O
L
U
M
N
 
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
.
"
,


 
 
 
 
 
 
"
T
h
i
s
 
p
e
r
m
a
n
e
n
t
l
y
 
r
e
m
o
v
e
s
 
t
h
e
 
c
o
l
u
m
n
 
a
n
d
 
a
l
l
 
i
t
s
 
d
a
t
a
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
L
T
E
R
 
T
A
B
L
E
"
,
 
"
D
R
O
P
 
C
O
L
U
M
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
d
d
l
-
b
a
s
i
c
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
d
d
l
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
 
8
,


 
 
 
 
t
i
t
l
e
:
 
"
C
r
e
a
t
e
 
w
i
t
h
 
D
e
f
a
u
l
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
C
r
e
a
t
e
 
a
 
t
a
b
l
e
 
c
a
l
l
e
d
 
'
p
o
s
t
s
'
 
w
i
t
h
:
 
i
d
 
(
I
N
T
E
G
E
R
 
P
R
I
M
A
R
Y
 
K
E
Y
)
,
 
t
i
t
l
e
 
(
T
E
X
T
 
N
O
T
 
N
U
L
L
)
,
 
c
o
n
t
e
n
t
 
(
T
E
X
T
)
,
 
a
n
d
 
s
t
a
t
u
s
 
(
T
E
X
T
 
D
E
F
A
U
L
T
 
'
d
r
a
f
t
'
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
C
R
E
A
T
E
 
T
A
B
L
E
 
p
o
s
t
s
 
(
\
n
 
 
i
d
 
I
N
T
E
G
E
R
 
P
R
I
M
A
R
Y
 
K
E
Y
,
\
n
 
 
t
i
t
l
e
 
T
E
X
T
 
N
O
T
 
N
U
L
L
,
\
n
 
 
c
o
n
t
e
n
t
 
T
E
X
T
,
\
n
 
 
s
t
a
t
u
s
 
T
E
X
T
 
_
_
_
 
'
_
_
_
'
\
n
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
C
R
E
A
T
E
 
T
A
B
L
E
 
p
o
s
t
s
 
(
\
n
 
 
i
d
 
I
N
T
E
G
E
R
 
P
R
I
M
A
R
Y
 
K
E
Y
,
\
n
 
 
t
i
t
l
e
 
T
E
X
T
 
N
O
T
 
N
U
L
L
,
\
n
 
 
c
o
n
t
e
n
t
 
T
E
X
T
,
\
n
 
 
s
t
a
t
u
s
 
T
E
X
T
 
D
E
F
A
U
L
T
 
'
d
r
a
f
t
'
\
n
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
D
E
F
A
U
L
T
 
p
r
o
v
i
d
e
s
 
a
 
v
a
l
u
e
 
w
h
e
n
 
n
o
n
e
 
i
s
 
s
p
e
c
i
f
i
e
d
 
d
u
r
i
n
g
 
I
N
S
E
R
T
.
"
,


 
 
 
 
 
 
"
D
E
F
A
U
L
T
 
'
d
r
a
f
t
'
 
s
e
t
s
 
t
h
e
 
s
t
a
t
u
s
 
t
o
 
'
d
r
a
f
t
'
 
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
C
R
E
A
T
E
 
T
A
B
L
E
"
,
 
"
D
E
F
A
U
L
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
d
d
l
-
b
a
s
i
c
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
d
d
l
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
r
e
a
t
e
 
w
i
t
h
 
U
N
I
Q
U
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
C
r
e
a
t
e
 
a
 
t
a
b
l
e
 
c
a
l
l
e
d
 
'
u
s
e
r
s
'
 
w
i
t
h
:
 
i
d
 
(
I
N
T
E
G
E
R
 
P
R
I
M
A
R
Y
 
K
E
Y
)
,
 
u
s
e
r
n
a
m
e
 
(
T
E
X
T
 
N
O
T
 
N
U
L
L
 
U
N
I
Q
U
E
)
,
 
e
m
a
i
l
 
(
T
E
X
T
 
N
O
T
 
N
U
L
L
 
U
N
I
Q
U
E
)
,
 
a
n
d
 
p
a
s
s
w
o
r
d
 
(
T
E
X
T
 
N
O
T
 
N
U
L
L
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
C
R
E
A
T
E
 
T
A
B
L
E
 
u
s
e
r
s
 
(
\
n
 
 
i
d
 
I
N
T
E
G
E
R
 
P
R
I
M
A
R
Y
 
K
E
Y
,
\
n
 
 
u
s
e
r
n
a
m
e
 
T
E
X
T
 
N
O
T
 
N
U
L
L
 
_
_
_
,
\
n
 
 
e
m
a
i
l
 
T
E
X
T
 
N
O
T
 
N
U
L
L
 
_
_
_
,
\
n
 
 
p
a
s
s
w
o
r
d
 
T
E
X
T
 
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
C
R
E
A
T
E
 
T
A
B
L
E
 
u
s
e
r
s
 
(
\
n
 
 
i
d
 
I
N
T
E
G
E
R
 
P
R
I
M
A
R
Y
 
K
E
Y
,
\
n
 
 
u
s
e
r
n
a
m
e
 
T
E
X
T
 
N
O
T
 
N
U
L
L
 
U
N
I
Q
U
E
,
\
n
 
 
e
m
a
i
l
 
T
E
X
T
 
N
O
T
 
N
U
L
L
 
U
N
I
Q
U
E
,
\
n
 
 
p
a
s
s
w
o
r
d
 
T
E
X
T
 
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
Q
U
E
 
e
n
s
u
r
e
s
 
n
o
 
t
w
o
 
r
o
w
s
 
c
a
n
 
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
 
v
a
l
u
e
 
i
n
 
t
h
a
t
 
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
A
 
c
o
l
u
m
n
 
c
a
n
 
b
e
 
b
o
t
h
 
N
O
T
 
N
U
L
L
 
a
n
d
 
U
N
I
Q
U
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
C
R
E
A
T
E
 
T
A
B
L
E
"
,
 
"
U
N
I
Q
U
E
"
,
 
"
N
O
T
 
N
U
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
d
m
l
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
d
m
l
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
I
n
s
e
r
t
 
a
 
R
o
w
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
I
n
s
e
r
t
 
a
 
n
e
w
 
c
o
u
n
t
r
y
 
i
n
t
o
 
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
 
w
i
t
h
 
n
a
m
e
 
'
T
e
s
t
l
a
n
d
'
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
 
'
E
u
r
o
p
e
'
,
 
a
r
e
a
 
1
0
0
0
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
 
5
0
0
0
0
,
 
a
n
d
 
g
d
p
 
1
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
I
N
S
E
R
T
 
I
N
T
O
 
w
o
r
l
d
 
(
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
r
e
a
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
 
g
d
p
)
\
n
 
V
A
L
U
E
S
 
(
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
,
 
_
_
_
,
 
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
I
N
S
E
R
T
 
I
N
T
O
 
w
o
r
l
d
 
(
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
r
e
a
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
 
g
d
p
)
 
V
A
L
U
E
S
 
(
'
T
e
s
t
l
a
n
d
'
,
 
'
E
u
r
o
p
e
'
,
 
1
0
0
0
,
 
5
0
0
0
0
,
 
1
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
L
i
s
t
 
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
 
i
n
 
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
,
 
t
h
e
n
 
V
A
L
U
E
S
 
w
i
t
h
 
m
a
t
c
h
i
n
g
 
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
 
g
o
 
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
;
 
n
u
m
b
e
r
s
 
d
o
 
n
o
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
I
N
S
E
R
T
 
I
N
T
O
"
,
 
"
V
A
L
U
E
S
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
d
m
l
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
d
m
l
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
I
n
s
e
r
t
 
M
u
l
t
i
p
l
e
 
R
o
w
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
I
n
s
e
r
t
 
t
h
r
e
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
 
a
t
 
o
n
c
e
:
 
(
'
A
l
p
h
a
'
,
 
'
A
s
i
a
'
,
 
5
0
0
,
 
1
0
0
0
0
,
 
5
0
0
0
0
0
)
,
 
(
'
B
e
t
a
'
,
 
'
A
f
r
i
c
a
'
,
 
8
0
0
,
 
2
0
0
0
0
,
 
6
0
0
0
0
0
)
,
 
a
n
d
 
(
'
G
a
m
m
a
'
,
 
'
E
u
r
o
p
e
'
,
 
3
0
0
,
 
5
0
0
0
,
 
2
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
I
N
S
E
R
T
 
I
N
T
O
 
w
o
r
l
d
 
(
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
r
e
a
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
 
g
d
p
)
\
n
 
V
A
L
U
E
S
\
n
 
 
(
_
_
_
)
,
\
n
 
 
(
_
_
_
)
,
\
n
 
 
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
I
N
S
E
R
T
 
I
N
T
O
 
w
o
r
l
d
 
(
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
r
e
a
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
 
g
d
p
)
 
V
A
L
U
E
S
 
(
'
A
l
p
h
a
'
,
 
'
A
s
i
a
'
,
 
5
0
0
,
 
1
0
0
0
0
,
 
5
0
0
0
0
0
)
,
 
(
'
B
e
t
a
'
,
 
'
A
f
r
i
c
a
'
,
 
8
0
0
,
 
2
0
0
0
0
,
 
6
0
0
0
0
0
)
,
 
(
'
G
a
m
m
a
'
,
 
'
E
u
r
o
p
e
'
,
 
3
0
0
,
 
5
0
0
0
,
 
2
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
S
e
p
a
r
a
t
e
 
e
a
c
h
 
r
o
w
 
o
f
 
V
A
L
U
E
S
 
w
i
t
h
 
a
 
c
o
m
m
a
.
"
,


 
 
 
 
 
 
"
E
a
c
h
 
r
o
w
 
i
s
 
e
n
c
l
o
s
e
d
 
i
n
 
i
t
s
 
o
w
n
 
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
.
"
,


 
 
 
 
 
 
"
A
l
l
 
r
o
w
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
 
v
a
l
u
e
s
 
m
a
t
c
h
i
n
g
 
t
h
e
 
c
o
l
u
m
n
 
l
i
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
I
N
S
E
R
T
 
I
N
T
O
"
,
 
"
V
A
L
U
E
S
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
 
r
o
w
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
d
m
l
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
d
m
l
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
U
p
d
a
t
e
 
a
 
R
o
w
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
p
d
a
t
e
 
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
 
'
T
e
s
t
l
a
n
d
'
 
t
o
 
7
5
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
U
P
D
A
T
E
 
w
o
r
l
d
\
n
 
S
E
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
 
=
 
_
_
_
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
U
P
D
A
T
E
 
w
o
r
l
d
 
S
E
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
 
=
 
7
5
0
0
0
 
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
T
e
s
t
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
P
D
A
T
E
 
t
a
b
l
e
 
S
E
T
 
c
o
l
u
m
n
 
=
 
v
a
l
u
e
 
W
H
E
R
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
.
"
,


 
 
 
 
 
 
"
A
l
w
a
y
s
 
i
n
c
l
u
d
e
 
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
 
a
v
o
i
d
 
u
p
d
a
t
i
n
g
 
a
l
l
 
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
P
D
A
T
E
"
,
 
"
S
E
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
d
m
l
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
d
m
l
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
D
e
l
e
t
e
 
R
o
w
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
l
e
t
e
 
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
 
w
i
t
h
 
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
 
l
e
s
s
 
t
h
a
n
 
1
0
0
0
0
 
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
D
E
L
E
T
E
 
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
D
E
L
E
T
E
 
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
 
<
 
1
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
D
E
L
E
T
E
 
F
R
O
M
 
t
a
b
l
e
 
W
H
E
R
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
.
"
,


 
 
 
 
 
 
"
U
s
e
 
<
 
f
o
r
 
'
l
e
s
s
 
t
h
a
n
'
.
"
,


 
 
 
 
 
 
"
W
i
t
h
o
u
t
 
W
H
E
R
E
,
 
D
E
L
E
T
E
 
r
e
m
o
v
e
s
 
A
L
L
 
r
o
w
s
 
-
 
b
e
 
c
a
r
e
f
u
l
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
D
E
L
E
T
E
 
F
R
O
M
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
d
m
l
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
d
m
l
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
U
p
d
a
t
e
 
w
i
t
h
 
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
S
e
t
 
t
h
e
 
g
d
p
 
o
f
 
'
T
e
s
t
l
a
n
d
'
 
t
o
 
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
 
o
f
 
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
 
t
o
 
c
a
l
c
u
l
a
t
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
U
P
D
A
T
E
 
w
o
r
l
d
\
n
 
S
E
T
 
g
d
p
 
=
 
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
_
_
_
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
 
_
_
_
\
n
 
)
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
U
P
D
A
T
E
 
w
o
r
l
d
 
S
E
T
 
g
d
p
 
=
 
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
g
d
p
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
E
u
r
o
p
e
'
)
 
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
T
e
s
t
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
 
a
 
s
u
b
q
u
e
r
y
 
i
n
 
t
h
e
 
S
E
T
 
c
l
a
u
s
e
 
t
o
 
c
o
m
p
u
t
e
 
a
 
v
a
l
u
e
.
"
,


 
 
 
 
 
 
"
A
V
G
(
g
d
p
)
 
c
a
l
c
u
l
a
t
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
.
"
,


 
 
 
 
 
 
"
T
h
e
 
s
u
b
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
D
A
T
E
"
,
 
"
S
E
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
A
V
G
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
d
m
l
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
d
m
l
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
U
p
d
a
t
e
 
M
u
l
t
i
p
l
e
 
C
o
l
u
m
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
U
p
d
a
t
e
 
'
T
e
s
t
l
a
n
d
'
 
t
o
 
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
 
1
0
0
0
0
0
 
a
n
d
 
a
n
 
a
r
e
a
 
o
f
 
2
0
0
0
 
i
n
 
a
 
s
i
n
g
l
e
 
U
P
D
A
T
E
 
s
t
a
t
e
m
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
U
P
D
A
T
E
 
w
o
r
l
d
\
n
 
S
E
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
 
=
 
_
_
_
,
 
a
r
e
a
 
=
 
_
_
_
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
U
P
D
A
T
E
 
w
o
r
l
d
 
S
E
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
 
=
 
1
0
0
0
0
0
,
 
a
r
e
a
 
=
 
2
0
0
0
 
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
T
e
s
t
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
 
S
E
T
 
a
s
s
i
g
n
m
e
n
t
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
.
"
,


 
 
 
 
 
 
"
S
E
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
 
=
 
1
0
0
0
0
0
,
 
a
r
e
a
 
=
 
2
0
0
0
 
u
p
d
a
t
e
s
 
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
D
A
T
E
"
,
 
"
S
E
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
m
u
l
t
i
p
l
e
 
c
o
l
u
m
n
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
d
m
l
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
d
m
l
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
o
n
d
i
t
i
o
n
a
l
 
U
p
d
a
t
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
D
o
u
b
l
e
 
t
h
e
 
G
D
P
 
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
 
A
f
r
i
c
a
 
(
m
u
l
t
i
p
l
y
 
g
d
p
 
b
y
 
2
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
U
P
D
A
T
E
 
w
o
r
l
d
\
n
 
S
E
T
 
g
d
p
 
=
 
g
d
p
 
*
 
_
_
_
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
U
P
D
A
T
E
 
w
o
r
l
d
 
S
E
T
 
g
d
p
 
=
 
g
d
p
 
*
 
2
 
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
 
u
s
e
 
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
s
 
i
n
 
S
E
T
,
 
l
i
k
e
 
g
d
p
 
=
 
g
d
p
 
*
 
2
.
"
,


 
 
 
 
 
 
"
T
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
 
l
i
m
i
t
s
 
w
h
i
c
h
 
r
o
w
s
 
a
r
e
 
u
p
d
a
t
e
d
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
D
A
T
E
"
,
 
"
S
E
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
d
m
l
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
d
m
l
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
D
e
l
e
t
e
 
w
i
t
h
 
I
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
D
e
l
e
t
e
 
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
 
w
h
o
s
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
 
i
s
 
e
i
t
h
e
r
 
'
A
l
p
h
a
'
 
o
r
 
'
B
e
t
a
'
 
o
r
 
'
G
a
m
m
a
'
 
(
t
e
s
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
)
 
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
D
E
L
E
T
E
 
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
D
E
L
E
T
E
 
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
A
l
p
h
a
'
,
 
'
B
e
t
a
'
,
 
'
G
a
m
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
I
N
 
l
e
t
s
 
y
o
u
 
m
a
t
c
h
 
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
E
a
c
h
 
v
a
l
u
e
 
i
n
 
t
h
e
 
l
i
s
t
 
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
D
E
L
E
T
E
 
F
R
O
M
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
d
m
l
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
d
m
l
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
 
8
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
s
e
r
t
 
f
r
o
m
 
S
E
L
E
C
T
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
I
n
s
e
r
t
 
i
n
t
o
 
a
 
t
a
b
l
e
 
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
_
c
o
u
n
t
r
i
e
s
'
 
(
s
a
m
e
 
c
o
l
u
m
n
s
 
a
s
 
w
o
r
l
d
)
 
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
I
N
S
E
R
T
 
I
N
T
O
 
b
i
g
_
c
o
u
n
t
r
i
e
s
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
I
N
S
E
R
T
 
I
N
T
O
 
b
i
g
_
c
o
u
n
t
r
i
e
s
 
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
S
E
R
T
 
I
N
T
O
 
.
.
.
 
S
E
L
E
C
T
 
c
o
p
i
e
s
 
r
o
w
s
 
f
r
o
m
 
o
n
e
 
t
a
b
l
e
 
t
o
 
a
n
o
t
h
e
r
.
"
,


 
 
 
 
 
 
"
N
o
 
V
A
L
U
E
S
 
k
e
y
w
o
r
d
 
n
e
e
d
e
d
 
w
h
e
n
 
u
s
i
n
g
 
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
 
S
E
L
E
C
T
 
m
u
s
t
 
r
e
t
u
r
n
 
c
o
l
u
m
n
s
 
m
a
t
c
h
i
n
g
 
t
h
e
 
t
a
r
g
e
t
 
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
I
N
S
E
R
T
 
I
N
T
O
"
,
 
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
d
m
l
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
d
m
l
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
 
9
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
d
a
t
e
 
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
p
d
a
t
e
 
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
 
c
o
l
u
m
n
:
 
c
h
a
n
g
e
 
'
N
o
r
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
 
t
o
 
'
A
m
e
r
i
c
a
s
'
 
a
n
d
 
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
 
t
o
 
'
A
m
e
r
i
c
a
s
'
.
 
L
e
a
v
e
 
a
l
l
 
o
t
h
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
s
 
u
n
c
h
a
n
g
e
d
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
U
P
D
A
T
E
 
w
o
r
l
d
\
n
 
S
E
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
 
=
 
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
N
o
r
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
 
T
H
E
N
 
_
_
_
\
n
 
 
 
W
H
E
N
 
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
 
T
H
E
N
 
_
_
_
\
n
 
 
 
E
L
S
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
\
n
 
E
N
D
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
 
I
N
 
(
'
N
o
r
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
,
 
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
U
P
D
A
T
E
 
w
o
r
l
d
 
S
E
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
 
=
 
C
A
S
E
 
W
H
E
N
 
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
N
o
r
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
 
T
H
E
N
 
'
A
m
e
r
i
c
a
s
'
 
W
H
E
N
 
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
 
T
H
E
N
 
'
A
m
e
r
i
c
a
s
'
 
E
L
S
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
 
E
N
D
 
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
 
I
N
 
(
'
N
o
r
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
,
 
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
A
S
E
 
W
H
E
N
 
.
.
.
 
T
H
E
N
 
.
.
.
 
E
N
D
 
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
d
i
t
i
o
n
a
l
l
y
 
s
e
t
 
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
 
E
L
S
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
 
t
o
 
k
e
e
p
 
u
n
c
h
a
n
g
e
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
 
t
h
e
 
s
a
m
e
.
"
,


 
 
 
 
 
 
"
T
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
 
l
i
m
i
t
s
 
w
h
i
c
h
 
r
o
w
s
 
a
r
e
 
e
v
a
l
u
a
t
e
d
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
D
A
T
E
"
,
 
"
S
E
T
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


]
;


