
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
J
o
i
n
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
j
o
i
n
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
j
o
i
n
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
o
a
l
s
 
b
y
 
a
 
P
l
a
y
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
S
h
o
w
 
t
h
e
 
m
a
t
c
h
i
d
 
a
n
d
 
p
l
a
y
e
r
 
n
a
m
e
 
f
o
r
 
a
l
l
 
g
o
a
l
s
 
s
c
o
r
e
d
 
b
y
 
G
e
r
m
a
n
y
 
(
t
e
a
m
i
d
 
=
 
'
G
E
R
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
 
m
a
t
c
h
i
d
,
 
p
l
a
y
e
r
 
F
R
O
M
 
g
o
a
l
\
n
 
W
H
E
R
E
 
t
e
a
m
i
d
 
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
 
m
a
t
c
h
i
d
,
 
p
l
a
y
e
r
 
F
R
O
M
 
g
o
a
l
 
W
H
E
R
E
 
t
e
a
m
i
d
 
=
 
'
G
E
R
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
 
t
h
e
 
g
o
a
l
 
t
a
b
l
e
 
w
h
e
r
e
 
t
e
a
m
i
d
 
=
 
'
G
E
R
'
.
"
,


 
 
 
 
 
 
"
T
h
e
 
g
o
a
l
 
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
 
m
a
t
c
h
i
d
,
 
t
e
a
m
i
d
,
 
p
l
a
y
e
r
,
 
g
t
i
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
f
o
o
t
b
a
l
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
j
o
i
n
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
j
o
i
n
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
M
a
t
c
h
 
1
0
1
2
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
 
i
d
,
 
s
t
a
d
i
u
m
,
 
t
e
a
m
1
,
 
a
n
d
 
t
e
a
m
2
 
f
o
r
 
m
a
t
c
h
 
1
0
1
2
 
f
r
o
m
 
t
h
e
 
g
a
m
e
 
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
 
i
d
,
 
s
t
a
d
i
u
m
,
 
t
e
a
m
1
,
 
t
e
a
m
2
 
F
R
O
M
 
g
a
m
e
\
n
 
W
H
E
R
E
 
i
d
 
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
 
i
d
,
 
s
t
a
d
i
u
m
,
 
t
e
a
m
1
,
 
t
e
a
m
2
 
F
R
O
M
 
g
a
m
e
 
W
H
E
R
E
 
i
d
 
=
 
1
0
1
2
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
 
g
a
m
e
 
t
a
b
l
e
 
b
y
 
i
d
.
"
,


 
 
 
 
 
 
"
i
d
 
i
s
 
a
 
n
u
m
b
e
r
,
 
n
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
f
o
o
t
b
a
l
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
j
o
i
n
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
j
o
i
n
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
l
a
y
e
r
 
a
n
d
 
T
e
a
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
S
h
o
w
 
t
h
e
 
p
l
a
y
e
r
,
 
t
e
a
m
i
d
,
 
s
t
a
d
i
u
m
,
 
a
n
d
 
m
d
a
t
e
 
f
o
r
 
e
v
e
r
y
 
G
e
r
m
a
n
 
g
o
a
l
.
 
J
o
i
n
 
t
h
e
 
g
a
m
e
 
t
a
b
l
e
 
t
o
 
t
h
e
 
g
o
a
l
 
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
 
m
a
t
c
h
i
d
 
=
 
i
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
 
p
l
a
y
e
r
,
 
t
e
a
m
i
d
,
 
s
t
a
d
i
u
m
,
 
m
d
a
t
e
\
n
 
F
R
O
M
 
g
a
m
e
\
n
 
J
O
I
N
 
g
o
a
l
 
O
N
 
(
g
a
m
e
.
i
d
 
=
 
g
o
a
l
.
m
a
t
c
h
i
d
)
\
n
 
W
H
E
R
E
 
t
e
a
m
i
d
 
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
 
p
l
a
y
e
r
,
 
t
e
a
m
i
d
,
 
s
t
a
d
i
u
m
,
 
m
d
a
t
e
 
F
R
O
M
 
g
a
m
e
 
J
O
I
N
 
g
o
a
l
 
O
N
 
g
a
m
e
.
i
d
 
=
 
g
o
a
l
.
m
a
t
c
h
i
d
 
W
H
E
R
E
 
t
e
a
m
i
d
 
=
 
'
G
E
R
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
J
O
I
N
 
c
o
n
n
e
c
t
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
w
o
 
t
a
b
l
e
s
 
b
a
s
e
d
 
o
n
 
a
 
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
M
a
t
c
h
 
g
a
m
e
.
i
d
 
w
i
t
h
 
g
o
a
l
.
m
a
t
c
h
i
d
.
"
,


 
 
 
 
 
 
"
T
h
e
n
 
f
i
l
t
e
r
 
f
o
r
 
G
e
r
m
a
n
y
:
 
t
e
a
m
i
d
 
=
 
'
G
E
R
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
J
O
I
N
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
f
o
o
t
b
a
l
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
j
o
i
n
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
j
o
i
n
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
G
o
a
l
s
 
b
y
 
M
a
r
i
o
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
e
a
m
1
,
 
t
e
a
m
2
,
 
a
n
d
 
p
l
a
y
e
r
 
f
o
r
 
e
v
e
r
y
 
g
o
a
l
 
s
c
o
r
e
d
 
b
y
 
a
 
p
l
a
y
e
r
 
w
h
o
s
e
 
n
a
m
e
 
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
M
a
r
i
o
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
 
t
e
a
m
1
,
 
t
e
a
m
2
,
 
p
l
a
y
e
r
\
n
 
F
R
O
M
 
g
a
m
e
\
n
 
J
O
I
N
 
g
o
a
l
 
O
N
 
(
g
a
m
e
.
i
d
 
=
 
g
o
a
l
.
m
a
t
c
h
i
d
)
\
n
 
W
H
E
R
E
 
p
l
a
y
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
 
t
e
a
m
1
,
 
t
e
a
m
2
,
 
p
l
a
y
e
r
 
F
R
O
M
 
g
a
m
e
 
J
O
I
N
 
g
o
a
l
 
O
N
 
g
a
m
e
.
i
d
 
=
 
g
o
a
l
.
m
a
t
c
h
i
d
 
W
H
E
R
E
 
p
l
a
y
e
r
 
L
I
K
E
 
'
M
a
r
i
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
J
o
i
n
 
g
a
m
e
 
t
o
 
g
o
a
l
 
o
n
 
i
d
 
=
 
m
a
t
c
h
i
d
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
M
a
r
i
o
%
'
 
t
o
 
f
i
n
d
 
p
l
a
y
e
r
s
 
w
h
o
s
e
 
n
a
m
e
 
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
 
M
a
r
i
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
J
O
I
N
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
f
o
o
t
b
a
l
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
j
o
i
n
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
j
o
i
n
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
a
r
l
y
 
G
o
a
l
s
 
w
i
t
h
 
D
e
t
a
i
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
 
p
l
a
y
e
r
,
 
t
e
a
m
i
d
,
 
c
o
a
c
h
,
 
a
n
d
 
g
t
i
m
e
 
f
o
r
 
g
o
a
l
s
 
s
c
o
r
e
d
 
i
n
 
t
h
e
 
f
i
r
s
t
 
1
0
 
m
i
n
u
t
e
s
 
(
g
t
i
m
e
 
<
=
 
1
0
)
.
 
J
o
i
n
 
t
h
e
 
g
o
a
l
 
t
a
b
l
e
 
t
o
 
t
h
e
 
e
t
e
a
m
 
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
S
E
L
E
C
T
 
p
l
a
y
e
r
,
 
t
e
a
m
i
d
,
 
c
o
a
c
h
,
 
g
t
i
m
e
\
n
 
F
R
O
M
 
g
o
a
l
\
n
 
J
O
I
N
 
e
t
e
a
m
 
O
N
 
(
g
o
a
l
.
t
e
a
m
i
d
 
=
 
e
t
e
a
m
.
i
d
)
\
n
 
W
H
E
R
E
 
g
t
i
m
e
 
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
S
E
L
E
C
T
 
p
l
a
y
e
r
,
 
t
e
a
m
i
d
,
 
c
o
a
c
h
,
 
g
t
i
m
e
 
F
R
O
M
 
g
o
a
l
 
J
O
I
N
 
e
t
e
a
m
 
O
N
 
g
o
a
l
.
t
e
a
m
i
d
 
=
 
e
t
e
a
m
.
i
d
 
W
H
E
R
E
 
g
t
i
m
e
 
<
=
 
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
J
o
i
n
 
g
o
a
l
 
t
o
 
e
t
e
a
m
 
u
s
i
n
g
 
t
e
a
m
i
d
 
=
 
e
t
e
a
m
.
i
d
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
 
g
o
a
l
s
 
i
n
 
t
h
e
 
f
i
r
s
t
 
1
0
 
m
i
n
u
t
e
s
:
 
g
t
i
m
e
 
<
=
 
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
S
E
L
E
C
T
"
,
 
"
J
O
I
N
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
f
o
o
t
b
a
l
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
j
o
i
n
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
j
o
i
n
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
M
a
t
c
h
 
D
a
t
e
s
 
f
o
r
 
a
 
C
o
a
c
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
L
i
s
t
 
t
h
e
 
d
a
t
e
s
 
a
n
d
 
t
e
a
m
 
n
a
m
e
s
 
f
o
r
 
e
v
e
r
y
 
m
a
t
c
h
 
w
h
e
r
e
 
'
F
e
r
n
a
n
d
o
 
S
a
n
t
o
s
'
 
w
a
s
 
t
h
e
 
t
e
a
m
1
 
c
o
a
c
h
.
 
J
o
i
n
 
g
a
m
e
 
t
o
 
e
t
e
a
m
 
u
s
i
n
g
 
t
e
a
m
1
 
=
 
e
t
e
a
m
.
i
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
 
m
d
a
t
e
,
 
t
e
a
m
n
a
m
e
\
n
 
F
R
O
M
 
g
a
m
e
\
n
 
J
O
I
N
 
e
t
e
a
m
 
O
N
 
(
g
a
m
e
.
t
e
a
m
1
 
=
 
e
t
e
a
m
.
i
d
)
\
n
 
W
H
E
R
E
 
c
o
a
c
h
 
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
 
m
d
a
t
e
,
 
t
e
a
m
n
a
m
e
 
F
R
O
M
 
g
a
m
e
 
J
O
I
N
 
e
t
e
a
m
 
O
N
 
g
a
m
e
.
t
e
a
m
1
 
=
 
e
t
e
a
m
.
i
d
 
W
H
E
R
E
 
c
o
a
c
h
 
=
 
'
F
e
r
n
a
n
d
o
 
S
a
n
t
o
s
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
J
o
i
n
 
g
a
m
e
.
t
e
a
m
1
 
t
o
 
e
t
e
a
m
.
i
d
 
t
o
 
g
e
t
 
t
h
e
 
t
e
a
m
1
 
n
a
m
e
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
 
w
h
e
r
e
 
c
o
a
c
h
 
=
 
'
F
e
r
n
a
n
d
o
 
S
a
n
t
o
s
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
J
O
I
N
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
f
o
o
t
b
a
l
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
j
o
i
n
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
j
o
i
n
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
o
a
l
s
 
a
t
 
N
a
t
i
o
n
a
l
 
S
t
a
d
i
u
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
 
p
l
a
y
e
r
 
f
o
r
 
e
v
e
r
y
 
g
o
a
l
 
s
c
o
r
e
d
 
a
t
 
'
N
a
t
i
o
n
a
l
 
S
t
a
d
i
u
m
,
 
W
a
r
s
a
w
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
 
p
l
a
y
e
r
\
n
 
F
R
O
M
 
g
o
a
l
\
n
 
J
O
I
N
 
g
a
m
e
 
O
N
 
(
g
o
a
l
.
m
a
t
c
h
i
d
 
=
 
g
a
m
e
.
i
d
)
\
n
 
W
H
E
R
E
 
s
t
a
d
i
u
m
 
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
 
p
l
a
y
e
r
 
F
R
O
M
 
g
o
a
l
 
J
O
I
N
 
g
a
m
e
 
O
N
 
g
o
a
l
.
m
a
t
c
h
i
d
 
=
 
g
a
m
e
.
i
d
 
W
H
E
R
E
 
s
t
a
d
i
u
m
 
=
 
'
N
a
t
i
o
n
a
l
 
S
t
a
d
i
u
m
,
 
W
a
r
s
a
w
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
J
o
i
n
 
g
o
a
l
 
t
o
 
g
a
m
e
 
u
s
i
n
g
 
m
a
t
c
h
i
d
 
=
 
i
d
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
 
t
h
e
 
s
t
a
d
i
u
m
 
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
J
O
I
N
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
f
o
o
t
b
a
l
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
j
o
i
n
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
j
o
i
n
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
S
c
o
r
e
r
s
 
A
g
a
i
n
s
t
 
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
 
a
l
l
 
p
l
a
y
e
r
s
 
w
h
o
 
s
c
o
r
e
d
 
a
 
g
o
a
l
 
a
g
a
i
n
s
t
 
G
e
r
m
a
n
y
.
 
E
x
c
l
u
d
e
 
G
e
r
m
a
n
 
p
l
a
y
e
r
s
.
 
G
e
r
m
a
n
y
'
s
 
t
e
a
m
i
d
 
i
s
 
'
G
E
R
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
 
D
I
S
T
I
N
C
T
 
p
l
a
y
e
r
\
n
 
F
R
O
M
 
g
o
a
l
\
n
 
J
O
I
N
 
g
a
m
e
 
O
N
 
(
g
o
a
l
.
m
a
t
c
h
i
d
 
=
 
g
a
m
e
.
i
d
)
\
n
 
W
H
E
R
E
 
(
t
e
a
m
1
 
=
 
'
G
E
R
'
 
O
R
 
t
e
a
m
2
 
=
 
'
G
E
R
'
)
\
n
 
 
 
A
N
D
 
t
e
a
m
i
d
 
_
_
_
 
'
G
E
R
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
 
D
I
S
T
I
N
C
T
 
p
l
a
y
e
r
 
F
R
O
M
 
g
o
a
l
 
J
O
I
N
 
g
a
m
e
 
O
N
 
g
o
a
l
.
m
a
t
c
h
i
d
 
=
 
g
a
m
e
.
i
d
 
W
H
E
R
E
 
(
t
e
a
m
1
 
=
 
'
G
E
R
'
 
O
R
 
t
e
a
m
2
 
=
 
'
G
E
R
'
)
 
A
N
D
 
t
e
a
m
i
d
 
<
>
 
'
G
E
R
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
G
e
r
m
a
n
y
 
i
s
 
i
n
v
o
l
v
e
d
 
w
h
e
n
 
t
e
a
m
1
 
o
r
 
t
e
a
m
2
 
i
s
 
'
G
E
R
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
 
G
e
r
m
a
n
 
p
l
a
y
e
r
s
 
w
i
t
h
 
t
e
a
m
i
d
 
<
>
 
'
G
E
R
'
.
"
,


 
 
 
 
 
 
"
U
s
e
 
D
I
S
T
I
N
C
T
 
t
o
 
a
v
o
i
d
 
d
u
p
l
i
c
a
t
e
 
p
l
a
y
e
r
 
n
a
m
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
J
O
I
N
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
f
o
o
t
b
a
l
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
j
o
i
n
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
j
o
i
n
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
e
a
m
 
G
o
a
l
 
C
o
u
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
 
t
e
a
m
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
 
t
o
t
a
l
 
n
u
m
b
e
r
 
o
f
 
g
o
a
l
s
 
s
c
o
r
e
d
 
b
y
 
t
h
a
t
 
t
e
a
m
.
 
J
o
i
n
 
e
t
e
a
m
 
t
o
 
g
o
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
 
t
e
a
m
n
a
m
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
\
n
 
F
R
O
M
 
e
t
e
a
m
\
n
 
J
O
I
N
 
g
o
a
l
 
O
N
 
(
e
t
e
a
m
.
i
d
 
=
 
g
o
a
l
.
t
e
a
m
i
d
)
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
 
t
e
a
m
n
a
m
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
 
F
R
O
M
 
e
t
e
a
m
 
J
O
I
N
 
g
o
a
l
 
O
N
 
e
t
e
a
m
.
i
d
 
=
 
g
o
a
l
.
t
e
a
m
i
d
 
G
R
O
U
P
 
B
Y
 
t
e
a
m
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
J
o
i
n
 
e
t
e
a
m
 
t
o
 
g
o
a
l
 
o
n
 
i
d
 
=
 
t
e
a
m
i
d
.
"
,


 
 
 
 
 
 
"
U
s
e
 
G
R
O
U
P
 
B
Y
 
t
e
a
m
n
a
m
e
 
t
o
 
c
o
u
n
t
 
g
o
a
l
s
 
p
e
r
 
t
e
a
m
.
"
,


 
 
 
 
 
 
"
C
O
U
N
T
(
*
)
 
c
o
u
n
t
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
J
O
I
N
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
f
o
o
t
b
a
l
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
j
o
i
n
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
j
o
i
n
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
S
t
a
d
i
u
m
 
G
o
a
l
 
C
o
u
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
 
t
h
e
 
s
t
a
d
i
u
m
 
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
 
g
o
a
l
s
 
s
c
o
r
e
d
 
i
n
 
e
a
c
h
 
s
t
a
d
i
u
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
 
s
t
a
d
i
u
m
,
 
C
O
U
N
T
(
*
)
\
n
 
F
R
O
M
 
g
a
m
e
\
n
 
J
O
I
N
 
g
o
a
l
 
O
N
 
(
g
a
m
e
.
i
d
 
=
 
g
o
a
l
.
m
a
t
c
h
i
d
)
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
 
s
t
a
d
i
u
m
,
 
C
O
U
N
T
(
*
)
 
F
R
O
M
 
g
a
m
e
 
J
O
I
N
 
g
o
a
l
 
O
N
 
g
a
m
e
.
i
d
 
=
 
g
o
a
l
.
m
a
t
c
h
i
d
 
G
R
O
U
P
 
B
Y
 
s
t
a
d
i
u
m
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
J
o
i
n
 
g
a
m
e
 
t
o
 
g
o
a
l
 
t
o
 
l
i
n
k
 
g
o
a
l
s
 
t
o
 
s
t
a
d
i
u
m
s
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
 
s
t
a
d
i
u
m
 
t
o
 
c
o
u
n
t
 
g
o
a
l
s
 
p
e
r
 
s
t
a
d
i
u
m
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
J
O
I
N
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
f
o
o
t
b
a
l
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
j
o
i
n
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
j
o
i
n
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
G
o
a
l
s
 
P
e
r
 
M
a
t
c
h
 
f
o
r
 
P
o
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
o
r
 
e
v
e
r
y
 
m
a
t
c
h
 
i
n
v
o
l
v
i
n
g
 
P
o
l
a
n
d
 
(
P
O
L
)
,
 
s
h
o
w
 
t
h
e
 
m
a
t
c
h
i
d
,
 
d
a
t
e
,
 
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
 
g
o
a
l
s
 
s
c
o
r
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
S
E
L
E
C
T
 
m
a
t
c
h
i
d
,
 
m
d
a
t
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
\
n
 
F
R
O
M
 
g
a
m
e
\
n
 
J
O
I
N
 
g
o
a
l
 
O
N
 
(
g
a
m
e
.
i
d
 
=
 
g
o
a
l
.
m
a
t
c
h
i
d
)
\
n
 
W
H
E
R
E
 
(
t
e
a
m
1
 
=
 
'
P
O
L
'
 
O
R
 
t
e
a
m
2
 
=
 
'
P
O
L
'
)
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
 
m
a
t
c
h
i
d
,
 
m
d
a
t
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
 
F
R
O
M
 
g
a
m
e
 
J
O
I
N
 
g
o
a
l
 
O
N
 
g
a
m
e
.
i
d
 
=
 
g
o
a
l
.
m
a
t
c
h
i
d
 
W
H
E
R
E
 
(
t
e
a
m
1
 
=
 
'
P
O
L
'
 
O
R
 
t
e
a
m
2
 
=
 
'
P
O
L
'
)
 
G
R
O
U
P
 
B
Y
 
m
a
t
c
h
i
d
,
 
m
d
a
t
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
P
o
l
a
n
d
 
a
p
p
e
a
r
s
 
a
s
 
t
e
a
m
1
 
o
r
 
t
e
a
m
2
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
 
m
a
t
c
h
i
d
 
a
n
d
 
m
d
a
t
e
 
t
o
g
e
t
h
e
r
.
"
,


 
 
 
 
 
 
"
C
O
U
N
T
(
*
)
 
g
i
v
e
s
 
t
o
t
a
l
 
g
o
a
l
s
 
p
e
r
 
m
a
t
c
h
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
J
O
I
N
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
f
o
o
t
b
a
l
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
j
o
i
n
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
j
o
i
n
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
G
e
r
m
a
n
 
G
o
a
l
s
 
P
e
r
 
M
a
t
c
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
F
o
r
 
e
v
e
r
y
 
m
a
t
c
h
 
w
h
e
r
e
 
G
e
r
m
a
n
y
 
(
G
E
R
)
 
s
c
o
r
e
d
,
 
s
h
o
w
 
m
a
t
c
h
i
d
,
 
m
d
a
t
e
,
 
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
 
g
o
a
l
s
 
s
c
o
r
e
d
 
b
y
 
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
 
m
a
t
c
h
i
d
,
 
m
d
a
t
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
\
n
 
F
R
O
M
 
g
a
m
e
\
n
 
J
O
I
N
 
g
o
a
l
 
O
N
 
(
g
a
m
e
.
i
d
 
=
 
g
o
a
l
.
m
a
t
c
h
i
d
)
\
n
 
W
H
E
R
E
 
t
e
a
m
i
d
 
=
 
_
_
_
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
 
m
a
t
c
h
i
d
,
 
m
d
a
t
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
 
F
R
O
M
 
g
a
m
e
 
J
O
I
N
 
g
o
a
l
 
O
N
 
g
a
m
e
.
i
d
 
=
 
g
o
a
l
.
m
a
t
c
h
i
d
 
W
H
E
R
E
 
t
e
a
m
i
d
 
=
 
'
G
E
R
'
 
G
R
O
U
P
 
B
Y
 
m
a
t
c
h
i
d
,
 
m
d
a
t
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
F
i
l
t
e
r
 
g
o
a
l
s
 
w
h
e
r
e
 
t
e
a
m
i
d
 
=
 
'
G
E
R
'
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
 
m
a
t
c
h
i
d
 
a
n
d
 
m
d
a
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
J
O
I
N
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
f
o
o
t
b
a
l
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
j
o
i
n
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
j
o
i
n
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
M
a
t
c
h
 
S
c
o
r
e
b
o
a
r
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
 
m
d
a
t
e
,
 
t
e
a
m
1
,
 
t
h
e
 
s
c
o
r
e
 
f
o
r
 
t
e
a
m
1
,
 
t
e
a
m
2
,
 
a
n
d
 
t
h
e
 
s
c
o
r
e
 
f
o
r
 
t
e
a
m
2
 
f
o
r
 
e
v
e
r
y
 
m
a
t
c
h
.
 
U
s
e
 
C
A
S
E
 
a
n
d
 
L
E
F
T
 
J
O
I
N
 
s
o
 
t
h
a
t
 
a
l
l
 
m
a
t
c
h
e
s
 
a
p
p
e
a
r
 
e
v
e
n
 
i
f
 
t
h
e
r
e
 
a
r
e
 
n
o
 
g
o
a
l
s
.
 
S
o
r
t
 
b
y
 
m
d
a
t
e
,
 
m
a
t
c
h
i
d
,
 
t
e
a
m
1
,
 
a
n
d
 
t
e
a
m
2
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
 
m
d
a
t
e
,
 
t
e
a
m
1
,
\
n
 
 
S
U
M
(
C
A
S
E
 
W
H
E
N
 
t
e
a
m
i
d
 
=
 
t
e
a
m
1
 
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
)
 
A
S
 
s
c
o
r
e
1
,
\
n
 
 
t
e
a
m
2
,
\
n
 
 
S
U
M
(
C
A
S
E
 
W
H
E
N
 
t
e
a
m
i
d
 
=
 
t
e
a
m
2
 
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
)
 
A
S
 
s
c
o
r
e
2
\
n
 
F
R
O
M
 
g
a
m
e
\
n
 
L
E
F
T
 
J
O
I
N
 
g
o
a
l
 
O
N
 
(
g
a
m
e
.
i
d
 
=
 
g
o
a
l
.
m
a
t
c
h
i
d
)
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
 
m
d
a
t
e
,
 
g
a
m
e
.
i
d
,
 
t
e
a
m
1
,
 
t
e
a
m
2
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
 
m
d
a
t
e
,
 
t
e
a
m
1
,
 
S
U
M
(
C
A
S
E
 
W
H
E
N
 
t
e
a
m
i
d
 
=
 
t
e
a
m
1
 
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
)
 
A
S
 
s
c
o
r
e
1
,
 
t
e
a
m
2
,
 
S
U
M
(
C
A
S
E
 
W
H
E
N
 
t
e
a
m
i
d
 
=
 
t
e
a
m
2
 
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
)
 
A
S
 
s
c
o
r
e
2
 
F
R
O
M
 
g
a
m
e
 
L
E
F
T
 
J
O
I
N
 
g
o
a
l
 
O
N
 
g
a
m
e
.
i
d
 
=
 
g
o
a
l
.
m
a
t
c
h
i
d
 
G
R
O
U
P
 
B
Y
 
m
d
a
t
e
,
 
g
a
m
e
.
i
d
,
 
t
e
a
m
1
,
 
t
e
a
m
2
 
O
R
D
E
R
 
B
Y
 
m
d
a
t
e
,
 
g
a
m
e
.
i
d
,
 
t
e
a
m
1
,
 
t
e
a
m
2
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
F
T
 
J
O
I
N
 
k
e
e
p
s
 
a
l
l
 
m
a
t
c
h
e
s
,
 
e
v
e
n
 
t
h
o
s
e
 
w
i
t
h
 
n
o
 
g
o
a
l
s
.
"
,


 
 
 
 
 
 
"
C
A
S
E
 
W
H
E
N
 
t
e
a
m
i
d
 
=
 
t
e
a
m
1
 
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
 
c
o
u
n
t
s
 
g
o
a
l
s
 
f
o
r
 
t
e
a
m
1
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
 
m
d
a
t
e
,
 
g
a
m
e
.
i
d
,
 
t
e
a
m
1
,
 
t
e
a
m
2
 
t
o
 
g
e
t
 
o
n
e
 
r
o
w
 
p
e
r
 
m
a
t
c
h
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
L
E
F
T
 
J
O
I
N
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
S
U
M
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
f
o
o
t
b
a
l
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
m
o
r
e
-
j
o
i
n
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
m
o
r
e
-
j
o
i
n
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
1
9
6
2
 
F
i
l
m
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
L
i
s
t
 
t
h
e
 
f
i
l
m
s
 
w
h
e
r
e
 
t
h
e
 
y
r
 
i
s
 
1
9
6
2
.
 
S
h
o
w
 
i
d
 
a
n
d
 
t
i
t
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
 
i
d
,
 
t
i
t
l
e
 
F
R
O
M
 
m
o
v
i
e
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
 
i
d
,
 
t
i
t
l
e
 
F
R
O
M
 
m
o
v
i
e
 
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
 
m
o
v
i
e
 
t
a
b
l
e
 
b
y
 
y
r
.
"
,


 
 
 
 
 
 
"
y
r
 
i
s
 
a
 
n
u
m
b
e
r
,
 
n
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
m
o
v
i
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
m
o
r
e
-
j
o
i
n
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
m
o
r
e
-
j
o
i
n
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
W
h
e
n
 
W
a
s
 
C
i
t
i
z
e
n
 
K
a
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
G
i
v
e
 
t
h
e
 
y
e
a
r
 
o
f
 
'
C
i
t
i
z
e
n
 
K
a
n
e
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
 
y
r
 
F
R
O
M
 
m
o
v
i
e
\
n
 
W
H
E
R
E
 
t
i
t
l
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
S
E
L
E
C
T
 
y
r
 
F
R
O
M
 
m
o
v
i
e
 
W
H
E
R
E
 
t
i
t
l
e
 
=
 
'
C
i
t
i
z
e
n
 
K
a
n
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
 
m
o
v
i
e
 
t
i
t
l
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
 
t
i
t
l
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
m
o
v
i
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
m
o
r
e
-
j
o
i
n
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
m
o
r
e
-
j
o
i
n
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
S
t
a
r
 
T
r
e
k
 
M
o
v
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
L
i
s
t
 
a
l
l
 
o
f
 
t
h
e
 
S
t
a
r
 
T
r
e
k
 
m
o
v
i
e
s
,
 
i
n
c
l
u
d
i
n
g
 
t
h
e
 
i
d
,
 
t
i
t
l
e
,
 
a
n
d
 
y
r
.
 
O
r
d
e
r
 
r
e
s
u
l
t
s
 
b
y
 
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
 
i
d
,
 
t
i
t
l
e
,
 
y
r
 
F
R
O
M
 
m
o
v
i
e
\
n
 
W
H
E
R
E
 
t
i
t
l
e
 
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
 
y
r
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
 
i
d
,
 
t
i
t
l
e
,
 
y
r
 
F
R
O
M
 
m
o
v
i
e
 
W
H
E
R
E
 
t
i
t
l
e
 
L
I
K
E
 
'
%
S
t
a
r
 
T
r
e
k
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
%
S
t
a
r
 
T
r
e
k
%
'
 
t
o
 
f
i
n
d
 
a
l
l
 
S
t
a
r
 
T
r
e
k
 
m
o
v
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
 
s
o
r
t
s
 
c
h
r
o
n
o
l
o
g
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
m
o
v
i
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
m
o
r
e
-
j
o
i
n
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
m
o
r
e
-
j
o
i
n
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
G
l
e
n
n
 
C
l
o
s
e
 
I
D
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
W
h
a
t
 
i
d
 
n
u
m
b
e
r
 
d
o
e
s
 
t
h
e
 
a
c
t
o
r
 
'
G
l
e
n
n
 
C
l
o
s
e
'
 
h
a
v
e
?
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
 
i
d
 
F
R
O
M
 
a
c
t
o
r
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
S
E
L
E
C
T
 
i
d
 
F
R
O
M
 
a
c
t
o
r
 
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
l
e
n
n
 
C
l
o
s
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
Q
u
e
r
y
 
t
h
e
 
a
c
t
o
r
 
t
a
b
l
e
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
 
n
a
m
e
 
=
 
'
G
l
e
n
n
 
C
l
o
s
e
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
m
o
v
i
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
m
o
r
e
-
j
o
i
n
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
m
o
r
e
-
j
o
i
n
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
a
s
a
b
l
a
n
c
a
 
I
D
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
W
h
a
t
 
i
s
 
t
h
e
 
i
d
 
o
f
 
t
h
e
 
f
i
l
m
 
'
C
a
s
a
b
l
a
n
c
a
'
?
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
 
i
d
 
F
R
O
M
 
m
o
v
i
e
\
n
 
W
H
E
R
E
 
t
i
t
l
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
S
E
L
E
C
T
 
i
d
 
F
R
O
M
 
m
o
v
i
e
 
W
H
E
R
E
 
t
i
t
l
e
 
=
 
'
C
a
s
a
b
l
a
n
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
Q
u
e
r
y
 
t
h
e
 
m
o
v
i
e
 
t
a
b
l
e
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
 
t
i
t
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
m
o
v
i
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
m
o
r
e
-
j
o
i
n
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
m
o
r
e
-
j
o
i
n
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
a
s
a
b
l
a
n
c
a
 
C
a
s
t
 
L
i
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
O
b
t
a
i
n
 
t
h
e
 
c
a
s
t
 
l
i
s
t
 
f
o
r
 
'
C
a
s
a
b
l
a
n
c
a
'
.
 
U
s
e
 
m
o
v
i
e
i
d
 
=
 
1
1
7
6
8
 
(
o
r
 
u
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
n
d
 
i
t
)
.
 
T
h
e
 
c
a
s
t
i
n
g
 
t
a
b
l
e
 
l
i
n
k
s
 
a
c
t
o
r
 
t
o
 
m
o
v
i
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
\
n
 
F
R
O
M
 
a
c
t
o
r
\
n
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
(
a
c
t
o
r
.
i
d
 
=
 
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
)
\
n
 
W
H
E
R
E
 
m
o
v
i
e
i
d
 
=
 
(
S
E
L
E
C
T
 
i
d
 
F
R
O
M
 
m
o
v
i
e
 
W
H
E
R
E
 
t
i
t
l
e
 
=
 
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
 
F
R
O
M
 
a
c
t
o
r
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
a
c
t
o
r
.
i
d
 
=
 
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
 
W
H
E
R
E
 
m
o
v
i
e
i
d
 
=
 
(
S
E
L
E
C
T
 
i
d
 
F
R
O
M
 
m
o
v
i
e
 
W
H
E
R
E
 
t
i
t
l
e
 
=
 
'
C
a
s
a
b
l
a
n
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
J
o
i
n
 
a
c
t
o
r
 
t
o
 
c
a
s
t
i
n
g
 
o
n
 
a
c
t
o
r
.
i
d
 
=
 
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
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
 
m
o
v
i
e
i
d
 
u
s
i
n
g
 
a
 
s
u
b
q
u
e
r
y
 
o
r
 
t
h
e
 
k
n
o
w
n
 
i
d
.
"
,


 
 
 
 
 
 
"
T
h
e
 
c
a
s
t
i
n
g
 
t
a
b
l
e
 
h
a
s
 
m
o
v
i
e
i
d
 
a
n
d
 
a
c
t
o
r
i
d
 
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
S
E
L
E
C
T
"
,
 
"
J
O
I
N
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
m
o
v
i
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
m
o
r
e
-
j
o
i
n
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
m
o
r
e
-
j
o
i
n
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
A
l
i
e
n
 
C
a
s
t
 
L
i
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
O
b
t
a
i
n
 
t
h
e
 
c
a
s
t
 
l
i
s
t
 
f
o
r
 
t
h
e
 
f
i
l
m
 
'
A
l
i
e
n
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
\
n
 
F
R
O
M
 
a
c
t
o
r
\
n
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
(
a
c
t
o
r
.
i
d
 
=
 
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
)
\
n
 
W
H
E
R
E
 
m
o
v
i
e
i
d
 
=
 
(
S
E
L
E
C
T
 
i
d
 
F
R
O
M
 
m
o
v
i
e
 
W
H
E
R
E
 
t
i
t
l
e
 
=
 
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
 
F
R
O
M
 
a
c
t
o
r
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
a
c
t
o
r
.
i
d
 
=
 
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
 
W
H
E
R
E
 
m
o
v
i
e
i
d
 
=
 
(
S
E
L
E
C
T
 
i
d
 
F
R
O
M
 
m
o
v
i
e
 
W
H
E
R
E
 
t
i
t
l
e
 
=
 
'
A
l
i
e
n
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
S
a
m
e
 
p
a
t
t
e
r
n
 
a
s
 
t
h
e
 
C
a
s
a
b
l
a
n
c
a
 
c
a
s
t
 
l
i
s
t
.
"
,


 
 
 
 
 
 
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
 
t
i
t
l
e
 
t
o
 
'
A
l
i
e
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
J
O
I
N
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
m
o
v
i
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
m
o
r
e
-
j
o
i
n
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
m
o
r
e
-
j
o
i
n
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
H
a
r
r
i
s
o
n
 
F
o
r
d
 
F
i
l
m
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
L
i
s
t
 
t
h
e
 
f
i
l
m
s
 
i
n
 
w
h
i
c
h
 
'
H
a
r
r
i
s
o
n
 
F
o
r
d
'
 
h
a
s
 
a
p
p
e
a
r
e
d
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
v
i
e
 
t
i
t
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
S
E
L
E
C
T
 
t
i
t
l
e
\
n
 
F
R
O
M
 
m
o
v
i
e
\
n
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
(
m
o
v
i
e
.
i
d
 
=
 
c
a
s
t
i
n
g
.
m
o
v
i
e
i
d
)
\
n
 
J
O
I
N
 
a
c
t
o
r
 
O
N
 
(
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
 
=
 
a
c
t
o
r
.
i
d
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
S
E
L
E
C
T
 
t
i
t
l
e
 
F
R
O
M
 
m
o
v
i
e
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
m
o
v
i
e
.
i
d
 
=
 
c
a
s
t
i
n
g
.
m
o
v
i
e
i
d
 
J
O
I
N
 
a
c
t
o
r
 
O
N
 
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
 
=
 
a
c
t
o
r
.
i
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
H
a
r
r
i
s
o
n
 
F
o
r
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
J
o
i
n
 
t
h
r
e
e
 
t
a
b
l
e
s
:
 
m
o
v
i
e
,
 
c
a
s
t
i
n
g
,
 
a
c
t
o
r
.
"
,


 
 
 
 
 
 
"
c
a
s
t
i
n
g
 
l
i
n
k
s
 
m
o
v
i
e
 
t
o
 
a
c
t
o
r
 
v
i
a
 
m
o
v
i
e
i
d
 
a
n
d
 
a
c
t
o
r
i
d
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
 
t
h
e
 
a
c
t
o
r
 
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
J
O
I
N
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
m
o
v
i
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
m
o
r
e
-
j
o
i
n
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
m
o
r
e
-
j
o
i
n
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
H
a
r
r
i
s
o
n
 
F
o
r
d
 
S
u
p
p
o
r
t
i
n
g
 
R
o
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
L
i
s
t
 
t
h
e
 
f
i
l
m
s
 
w
h
e
r
e
 
'
H
a
r
r
i
s
o
n
 
F
o
r
d
'
 
h
a
s
 
a
p
p
e
a
r
e
d
 
b
u
t
 
n
o
t
 
a
s
 
a
 
s
t
a
r
r
i
n
g
 
r
o
l
e
.
 
T
h
e
 
o
r
d
 
c
o
l
u
m
n
 
i
n
 
c
a
s
t
i
n
g
 
i
n
d
i
c
a
t
e
s
 
p
o
s
i
t
i
o
n
:
 
o
r
d
 
=
 
1
 
m
e
a
n
s
 
l
e
a
d
 
r
o
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
S
E
L
E
C
T
 
t
i
t
l
e
\
n
 
F
R
O
M
 
m
o
v
i
e
\
n
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
(
m
o
v
i
e
.
i
d
 
=
 
c
a
s
t
i
n
g
.
m
o
v
i
e
i
d
)
\
n
 
J
O
I
N
 
a
c
t
o
r
 
O
N
 
(
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
 
=
 
a
c
t
o
r
.
i
d
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
 
'
H
a
r
r
i
s
o
n
 
F
o
r
d
'
\
n
 
 
 
A
N
D
 
o
r
d
 
_
_
_
 
1
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
 
t
i
t
l
e
 
F
R
O
M
 
m
o
v
i
e
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
m
o
v
i
e
.
i
d
 
=
 
c
a
s
t
i
n
g
.
m
o
v
i
e
i
d
 
J
O
I
N
 
a
c
t
o
r
 
O
N
 
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
 
=
 
a
c
t
o
r
.
i
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
H
a
r
r
i
s
o
n
 
F
o
r
d
'
 
A
N
D
 
o
r
d
 
<
>
 
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
o
r
d
 
=
 
1
 
m
e
a
n
s
 
t
h
e
 
l
e
a
d
/
s
t
a
r
r
i
n
g
 
r
o
l
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
 
1
 
o
r
 
!
=
 
1
 
t
o
 
e
x
c
l
u
d
e
 
l
e
a
d
 
r
o
l
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
J
O
I
N
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
m
o
v
i
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
m
o
r
e
-
j
o
i
n
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
m
o
r
e
-
j
o
i
n
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
L
e
a
d
 
A
c
t
o
r
s
 
i
n
 
1
9
6
2
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
 
f
i
l
m
 
t
i
t
l
e
 
a
n
d
 
l
e
a
d
 
a
c
t
o
r
 
(
o
r
d
 
=
 
1
)
 
f
o
r
 
a
l
l
 
1
9
6
2
 
f
i
l
m
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
 
t
i
t
l
e
,
 
n
a
m
e
\
n
 
F
R
O
M
 
m
o
v
i
e
\
n
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
(
m
o
v
i
e
.
i
d
 
=
 
c
a
s
t
i
n
g
.
m
o
v
i
e
i
d
)
\
n
 
J
O
I
N
 
a
c
t
o
r
 
O
N
 
(
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
 
=
 
a
c
t
o
r
.
i
d
)
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
\
n
 
 
 
A
N
D
 
o
r
d
 
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
 
t
i
t
l
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
 
m
o
v
i
e
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
m
o
v
i
e
.
i
d
 
=
 
c
a
s
t
i
n
g
.
m
o
v
i
e
i
d
 
J
O
I
N
 
a
c
t
o
r
 
O
N
 
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
 
=
 
a
c
t
o
r
.
i
d
 
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
 
o
r
d
 
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
F
i
l
t
e
r
 
b
y
 
y
r
 
=
 
1
9
6
2
 
a
n
d
 
o
r
d
 
=
 
1
.
"
,


 
 
 
 
 
 
"
o
r
d
 
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
 
l
e
a
d
 
a
c
t
o
r
 
f
o
r
 
e
a
c
h
 
f
i
l
m
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
J
O
I
N
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
m
o
v
i
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
m
o
r
e
-
j
o
i
n
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
m
o
r
e
-
j
o
i
n
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
B
u
s
y
 
Y
e
a
r
s
 
f
o
r
 
R
o
c
k
 
H
u
d
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
W
h
i
c
h
 
w
e
r
e
 
t
h
e
 
b
u
s
i
e
s
t
 
y
e
a
r
s
 
f
o
r
 
'
R
o
c
k
 
H
u
d
s
o
n
'
?
 
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
 
m
o
v
i
e
s
 
h
e
 
m
a
d
e
 
e
a
c
h
 
y
e
a
r
 
f
o
r
 
a
n
y
 
y
e
a
r
 
i
n
 
w
h
i
c
h
 
h
e
 
m
a
d
e
 
m
o
r
e
 
t
h
a
n
 
2
 
m
o
v
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
 
C
O
U
N
T
(
t
i
t
l
e
)
\
n
 
F
R
O
M
 
m
o
v
i
e
\
n
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
(
m
o
v
i
e
.
i
d
 
=
 
c
a
s
t
i
n
g
.
m
o
v
i
e
i
d
)
\
n
 
J
O
I
N
 
a
c
t
o
r
 
O
N
 
(
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
 
=
 
a
c
t
o
r
.
i
d
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
 
'
R
o
c
k
 
H
u
d
s
o
n
'
\
n
 
G
R
O
U
P
 
B
Y
 
y
r
\
n
 
H
A
V
I
N
G
 
C
O
U
N
T
(
t
i
t
l
e
)
 
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
 
y
r
,
 
C
O
U
N
T
(
t
i
t
l
e
)
 
F
R
O
M
 
m
o
v
i
e
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
m
o
v
i
e
.
i
d
 
=
 
c
a
s
t
i
n
g
.
m
o
v
i
e
i
d
 
J
O
I
N
 
a
c
t
o
r
 
O
N
 
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
 
=
 
a
c
t
o
r
.
i
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
R
o
c
k
 
H
u
d
s
o
n
'
 
G
R
O
U
P
 
B
Y
 
y
r
 
H
A
V
I
N
G
 
C
O
U
N
T
(
t
i
t
l
e
)
 
>
 
2
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
r
o
u
p
 
b
y
 
y
e
a
r
 
t
o
 
c
o
u
n
t
 
f
i
l
m
s
 
p
e
r
 
y
e
a
r
.
"
,


 
 
 
 
 
 
"
H
A
V
I
N
G
 
f
i
l
t
e
r
s
 
g
r
o
u
p
s
 
a
f
t
e
r
 
a
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
.
"
,


 
 
 
 
 
 
"
H
A
V
I
N
G
 
C
O
U
N
T
(
t
i
t
l
e
)
 
>
 
2
 
k
e
e
p
s
 
o
n
l
y
 
b
u
s
y
 
y
e
a
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
J
O
I
N
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
H
A
V
I
N
G
"
,
 
"
C
O
U
N
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
m
o
v
i
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
m
o
r
e
-
j
o
i
n
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
m
o
r
e
-
j
o
i
n
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
L
e
a
d
 
A
c
t
o
r
 
i
n
 
J
u
l
i
e
 
A
n
d
r
e
w
s
 
F
i
l
m
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
L
i
s
t
 
t
h
e
 
f
i
l
m
 
t
i
t
l
e
 
a
n
d
 
t
h
e
 
l
e
a
d
 
a
c
t
o
r
 
f
o
r
 
a
l
l
 
o
f
 
t
h
e
 
f
i
l
m
s
 
'
J
u
l
i
e
 
A
n
d
r
e
w
s
'
 
p
l
a
y
e
d
 
i
n
.
 
T
h
e
 
l
e
a
d
 
a
c
t
o
r
 
i
s
 
t
h
e
 
o
n
e
 
w
i
t
h
 
o
r
d
 
=
 
1
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
 
t
i
t
l
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
 
m
o
v
i
e
\
n
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
(
m
o
v
i
e
.
i
d
 
=
 
c
a
s
t
i
n
g
.
m
o
v
i
e
i
d
)
\
n
 
J
O
I
N
 
a
c
t
o
r
 
O
N
 
(
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
 
=
 
a
c
t
o
r
.
i
d
)
\
n
 
W
H
E
R
E
 
o
r
d
 
=
 
1
\
n
 
 
 
A
N
D
 
m
o
v
i
e
i
d
 
I
N
 
(
\
n
 
 
 
 
 
S
E
L
E
C
T
 
m
o
v
i
e
i
d
 
F
R
O
M
 
c
a
s
t
i
n
g
\
n
 
 
 
 
 
W
H
E
R
E
 
a
c
t
o
r
i
d
 
=
 
(
S
E
L
E
C
T
 
i
d
 
F
R
O
M
 
a
c
t
o
r
 
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
)
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
S
E
L
E
C
T
 
t
i
t
l
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
 
m
o
v
i
e
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
m
o
v
i
e
.
i
d
 
=
 
c
a
s
t
i
n
g
.
m
o
v
i
e
i
d
 
J
O
I
N
 
a
c
t
o
r
 
O
N
 
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
 
=
 
a
c
t
o
r
.
i
d
 
W
H
E
R
E
 
o
r
d
 
=
 
1
 
A
N
D
 
m
o
v
i
e
i
d
 
I
N
 
(
S
E
L
E
C
T
 
m
o
v
i
e
i
d
 
F
R
O
M
 
c
a
s
t
i
n
g
 
W
H
E
R
E
 
a
c
t
o
r
i
d
 
=
 
(
S
E
L
E
C
T
 
i
d
 
F
R
O
M
 
a
c
t
o
r
 
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
J
u
l
i
e
 
A
n
d
r
e
w
s
'
)
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
i
r
s
t
 
f
i
n
d
 
J
u
l
i
e
 
A
n
d
r
e
w
s
'
 
a
c
t
o
r
 
i
d
 
w
i
t
h
 
a
 
s
u
b
q
u
e
r
y
.
"
,


 
 
 
 
 
 
"
T
h
e
n
 
f
i
n
d
 
a
l
l
 
m
o
v
i
e
i
d
s
 
s
h
e
 
a
p
p
e
a
r
e
d
 
i
n
.
"
,


 
 
 
 
 
 
"
F
i
n
a
l
l
y
,
 
s
h
o
w
 
t
h
e
 
l
e
a
d
 
a
c
t
o
r
 
(
o
r
d
 
=
 
1
)
 
f
o
r
 
t
h
o
s
e
 
m
o
v
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
J
O
I
N
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
m
o
v
i
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
m
o
r
e
-
j
o
i
n
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
m
o
r
e
-
j
o
i
n
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
c
t
o
r
s
 
w
i
t
h
 
1
5
+
 
S
t
a
r
r
i
n
g
 
R
o
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
O
b
t
a
i
n
 
a
 
l
i
s
t
,
 
i
n
 
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
 
o
r
d
e
r
,
 
o
f
 
a
c
t
o
r
s
 
w
h
o
 
h
a
v
e
 
h
a
d
 
a
t
 
l
e
a
s
t
 
1
5
 
s
t
a
r
r
i
n
g
 
(
o
r
d
 
=
 
1
)
 
r
o
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
 
a
c
t
o
r
\
n
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
(
a
c
t
o
r
.
i
d
 
=
 
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
)
\
n
 
W
H
E
R
E
 
o
r
d
 
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
 
n
a
m
e
\
n
 
H
A
V
I
N
G
 
C
O
U
N
T
(
*
)
 
>
=
 
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
 
F
R
O
M
 
a
c
t
o
r
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
a
c
t
o
r
.
i
d
 
=
 
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
 
W
H
E
R
E
 
o
r
d
 
=
 
1
 
G
R
O
U
P
 
B
Y
 
n
a
m
e
 
H
A
V
I
N
G
 
C
O
U
N
T
(
*
)
 
>
=
 
1
5
 
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
F
i
l
t
e
r
 
f
o
r
 
s
t
a
r
r
i
n
g
 
r
o
l
e
s
:
 
o
r
d
 
=
 
1
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
 
n
a
m
e
 
a
n
d
 
c
o
u
n
t
 
a
p
p
e
a
r
a
n
c
e
s
.
"
,


 
 
 
 
 
 
"
H
A
V
I
N
G
 
C
O
U
N
T
(
*
)
 
>
=
 
1
5
 
k
e
e
p
s
 
p
r
o
l
i
f
i
c
 
a
c
t
o
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
J
O
I
N
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
H
A
V
I
N
G
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
m
o
v
i
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
m
o
r
e
-
j
o
i
n
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
m
o
r
e
-
j
o
i
n
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
1
9
7
8
 
F
i
l
m
s
 
b
y
 
C
a
s
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
L
i
s
t
 
t
h
e
 
f
i
l
m
s
 
r
e
l
e
a
s
e
d
 
i
n
 
1
9
7
8
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
 
a
c
t
o
r
s
 
i
n
 
t
h
e
 
c
a
s
t
,
 
t
h
e
n
 
b
y
 
t
i
t
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
 
t
i
t
l
e
,
 
C
O
U
N
T
(
a
c
t
o
r
i
d
)
\
n
 
F
R
O
M
 
m
o
v
i
e
\
n
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
(
m
o
v
i
e
.
i
d
 
=
 
c
a
s
t
i
n
g
.
m
o
v
i
e
i
d
)
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
\
n
 
G
R
O
U
P
 
B
Y
 
t
i
t
l
e
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
 
D
E
S
C
,
 
t
i
t
l
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
 
t
i
t
l
e
,
 
C
O
U
N
T
(
a
c
t
o
r
i
d
)
 
F
R
O
M
 
m
o
v
i
e
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
m
o
v
i
e
.
i
d
 
=
 
c
a
s
t
i
n
g
.
m
o
v
i
e
i
d
 
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
7
8
 
G
R
O
U
P
 
B
Y
 
t
i
t
l
e
 
O
R
D
E
R
 
B
Y
 
C
O
U
N
T
(
a
c
t
o
r
i
d
)
 
D
E
S
C
,
 
t
i
t
l
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
J
o
i
n
 
m
o
v
i
e
 
t
o
 
c
a
s
t
i
n
g
 
t
o
 
c
o
u
n
t
 
a
c
t
o
r
s
 
p
e
r
 
f
i
l
m
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
 
C
O
U
N
T
(
a
c
t
o
r
i
d
)
 
D
E
S
C
 
f
o
r
 
l
a
r
g
e
s
t
 
c
a
s
t
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
T
h
e
n
 
o
r
d
e
r
 
b
y
 
t
i
t
l
e
 
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
 
a
s
 
a
 
t
i
e
b
r
e
a
k
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
E
L
E
C
T
"
,
 
"
J
O
I
N
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
m
o
v
i
e
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
m
o
r
e
-
j
o
i
n
-
1
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
m
o
r
e
-
j
o
i
n
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
l
l
a
b
o
r
a
t
o
r
s
 
o
f
 
A
r
t
 
G
a
r
f
u
n
k
e
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
L
i
s
t
 
a
l
l
 
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
 
h
a
v
e
 
w
o
r
k
e
d
 
w
i
t
h
 
'
A
r
t
 
G
a
r
f
u
n
k
e
l
'
.
 
F
i
n
d
 
a
l
l
 
m
o
v
i
e
s
 
A
r
t
 
G
a
r
f
u
n
k
e
l
 
a
p
p
e
a
r
e
d
 
i
n
,
 
t
h
e
n
 
l
i
s
t
 
e
v
e
r
y
o
n
e
 
e
l
s
e
 
w
h
o
 
a
l
s
o
 
a
p
p
e
a
r
e
d
 
i
n
 
t
h
o
s
e
 
m
o
v
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
 
D
I
S
T
I
N
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
 
a
c
t
o
r
\
n
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
(
a
c
t
o
r
.
i
d
 
=
 
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
)
\
n
 
W
H
E
R
E
 
m
o
v
i
e
i
d
 
I
N
 
(
\
n
 
 
 
S
E
L
E
C
T
 
m
o
v
i
e
i
d
 
F
R
O
M
 
c
a
s
t
i
n
g
\
n
 
 
 
W
H
E
R
E
 
a
c
t
o
r
i
d
 
=
 
(
S
E
L
E
C
T
 
i
d
 
F
R
O
M
 
a
c
t
o
r
 
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
)
\
n
 
)
\
n
 
A
N
D
 
n
a
m
e
 
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
 
D
I
S
T
I
N
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
 
a
c
t
o
r
 
J
O
I
N
 
c
a
s
t
i
n
g
 
O
N
 
a
c
t
o
r
.
i
d
 
=
 
c
a
s
t
i
n
g
.
a
c
t
o
r
i
d
 
W
H
E
R
E
 
m
o
v
i
e
i
d
 
I
N
 
(
S
E
L
E
C
T
 
m
o
v
i
e
i
d
 
F
R
O
M
 
c
a
s
t
i
n
g
 
W
H
E
R
E
 
a
c
t
o
r
i
d
 
=
 
(
S
E
L
E
C
T
 
i
d
 
F
R
O
M
 
a
c
t
o
r
 
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
A
r
t
 
G
a
r
f
u
n
k
e
l
'
)
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
 
'
A
r
t
 
G
a
r
f
u
n
k
e
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
F
i
n
d
 
A
r
t
 
G
a
r
f
u
n
k
e
l
'
s
 
i
d
,
 
t
h
e
n
 
h
i
s
 
m
o
v
i
e
i
d
s
,
 
t
h
e
n
 
a
l
l
 
o
t
h
e
r
 
a
c
t
o
r
s
 
i
n
 
t
h
o
s
e
 
m
o
v
i
e
s
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
 
A
r
t
 
G
a
r
f
u
n
k
e
l
 
h
i
m
s
e
l
f
 
w
i
t
h
 
n
a
m
e
 
<
>
 
'
A
r
t
 
G
a
r
f
u
n
k
e
l
'
.
"
,


 
 
 
 
 
 
"
U
s
e
 
D
I
S
T
I
N
C
T
 
t
o
 
a
v
o
i
d
 
l
i
s
t
i
n
g
 
a
n
 
a
c
t
o
r
 
m
u
l
t
i
p
l
e
 
t
i
m
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
J
O
I
N
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
I
N
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
m
o
v
i
e
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
f
-
j
o
i
n
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
f
-
j
o
i
n
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
 
A
l
l
 
S
t
o
p
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
 
t
o
t
a
l
 
n
u
m
b
e
r
 
o
f
 
s
t
o
p
s
 
i
n
 
t
h
e
 
s
t
o
p
s
 
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
 
C
O
U
N
T
(
*
)
 
F
R
O
M
 
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
 
C
O
U
N
T
(
*
)
 
F
R
O
M
 
s
t
o
p
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
C
O
U
N
T
(
*
)
 
c
o
u
n
t
s
 
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


 
 
 
 
 
 
"
Q
u
e
r
y
 
t
h
e
 
s
t
o
p
s
 
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
S
E
L
E
C
T
"
,
 
"
C
O
U
N
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
t
r
a
n
s
p
o
r
t
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
f
-
j
o
i
n
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
f
-
j
o
i
n
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
F
i
n
d
 
C
r
a
i
g
l
o
c
k
h
a
r
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
i
n
d
 
t
h
e
 
i
d
 
v
a
l
u
e
 
f
o
r
 
t
h
e
 
s
t
o
p
 
n
a
m
e
d
 
'
C
r
a
i
g
l
o
c
k
h
a
r
t
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
 
i
d
 
F
R
O
M
 
s
t
o
p
s
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
S
E
L
E
C
T
 
i
d
 
F
R
O
M
 
s
t
o
p
s
 
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
C
r
a
i
g
l
o
c
k
h
a
r
t
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
 
t
h
e
 
s
t
o
p
s
 
t
a
b
l
e
 
b
y
 
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
 
s
t
o
p
 
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
t
r
a
n
s
p
o
r
t
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
f
-
j
o
i
n
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
f
-
j
o
i
n
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
R
o
u
t
e
s
 
o
n
 
L
R
T
 
S
e
r
v
i
c
e
 
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
 
i
d
 
a
n
d
 
n
a
m
e
 
o
f
 
s
t
o
p
s
 
o
n
 
t
h
e
 
'
4
'
 
'
L
R
T
'
 
s
e
r
v
i
c
e
.
 
T
h
e
 
r
o
u
t
e
 
t
a
b
l
e
 
l
i
n
k
s
 
s
e
r
v
i
c
e
s
 
t
o
 
s
t
o
p
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
 
i
d
,
 
n
a
m
e
 
F
R
O
M
 
s
t
o
p
s
\
n
 
J
O
I
N
 
r
o
u
t
e
 
O
N
 
(
s
t
o
p
s
.
i
d
 
=
 
r
o
u
t
e
.
s
t
o
p
)
\
n
 
W
H
E
R
E
 
n
u
m
 
=
 
'
4
'
\
n
 
 
 
A
N
D
 
c
o
m
p
a
n
y
 
=
 
'
L
R
T
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
 
i
d
,
 
n
a
m
e
 
F
R
O
M
 
s
t
o
p
s
 
J
O
I
N
 
r
o
u
t
e
 
O
N
 
s
t
o
p
s
.
i
d
 
=
 
r
o
u
t
e
.
s
t
o
p
 
W
H
E
R
E
 
n
u
m
 
=
 
'
4
'
 
A
N
D
 
c
o
m
p
a
n
y
 
=
 
'
L
R
T
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
J
o
i
n
 
s
t
o
p
s
 
t
o
 
r
o
u
t
e
 
u
s
i
n
g
 
s
t
o
p
s
.
i
d
 
=
 
r
o
u
t
e
.
s
t
o
p
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
 
n
u
m
 
=
 
'
4
'
 
a
n
d
 
c
o
m
p
a
n
y
 
=
 
'
L
R
T
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
J
O
I
N
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
t
r
a
n
s
p
o
r
t
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
f
-
j
o
i
n
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
f
-
j
o
i
n
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
o
u
t
e
s
 
T
h
r
o
u
g
h
 
T
w
o
 
S
t
o
p
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
 
s
e
r
v
i
c
e
s
 
(
c
o
m
p
a
n
y
 
a
n
d
 
n
u
m
)
 
t
h
a
t
 
c
o
n
n
e
c
t
 
s
t
o
p
s
 
1
1
5
 
a
n
d
 
1
3
7
.
 
A
 
s
e
r
v
i
c
e
 
c
o
n
n
e
c
t
s
 
t
w
o
 
s
t
o
p
s
 
i
f
 
b
o
t
h
 
s
t
o
p
s
 
a
p
p
e
a
r
 
i
n
 
r
o
u
t
e
 
e
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
 
s
a
m
e
 
c
o
m
p
a
n
y
 
a
n
d
 
n
u
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
 
D
I
S
T
I
N
C
T
 
a
.
c
o
m
p
a
n
y
,
 
a
.
n
u
m
\
n
 
F
R
O
M
 
r
o
u
t
e
 
a
\
n
 
J
O
I
N
 
r
o
u
t
e
 
b
 
O
N
 
(
a
.
c
o
m
p
a
n
y
 
=
 
b
.
c
o
m
p
a
n
y
 
A
N
D
 
a
.
n
u
m
 
=
 
b
.
n
u
m
)
\
n
 
W
H
E
R
E
 
a
.
s
t
o
p
 
=
 
_
_
_
\
n
 
 
 
A
N
D
 
b
.
s
t
o
p
 
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
 
D
I
S
T
I
N
C
T
 
a
.
c
o
m
p
a
n
y
,
 
a
.
n
u
m
 
F
R
O
M
 
r
o
u
t
e
 
a
 
J
O
I
N
 
r
o
u
t
e
 
b
 
O
N
 
(
a
.
c
o
m
p
a
n
y
 
=
 
b
.
c
o
m
p
a
n
y
 
A
N
D
 
a
.
n
u
m
 
=
 
b
.
n
u
m
)
 
W
H
E
R
E
 
a
.
s
t
o
p
 
=
 
1
1
5
 
A
N
D
 
b
.
s
t
o
p
 
=
 
1
3
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
e
l
f
-
j
o
i
n
 
r
o
u
t
e
 
t
o
 
i
t
s
e
l
f
:
 
s
a
m
e
 
c
o
m
p
a
n
y
 
a
n
d
 
s
a
m
e
 
n
u
m
.
"
,


 
 
 
 
 
 
"
O
n
e
 
c
o
p
y
 
(
a
)
 
m
a
t
c
h
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
 
s
t
o
p
,
 
t
h
e
 
o
t
h
e
r
 
(
b
)
 
m
a
t
c
h
e
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
 
a
v
o
i
d
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
S
E
L
E
C
T
"
,
 
"
s
e
l
f
 
J
O
I
N
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
t
r
a
n
s
p
o
r
t
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
f
-
j
o
i
n
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
f
-
j
o
i
n
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
a
i
g
l
o
c
k
h
a
r
t
 
t
o
 
L
o
n
d
o
n
 
R
o
a
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
 
s
e
r
v
i
c
e
s
 
f
r
o
m
 
C
r
a
i
g
l
o
c
k
h
a
r
t
 
(
s
t
o
p
 
i
d
 
5
3
)
 
t
o
 
L
o
n
d
o
n
 
R
o
a
d
 
(
s
t
o
p
 
i
d
 
1
4
9
)
.
 
S
h
o
w
 
c
o
m
p
a
n
y
 
a
n
d
 
n
u
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
 
D
I
S
T
I
N
C
T
 
a
.
c
o
m
p
a
n
y
,
 
a
.
n
u
m
\
n
 
F
R
O
M
 
r
o
u
t
e
 
a
\
n
 
J
O
I
N
 
r
o
u
t
e
 
b
 
O
N
 
(
a
.
c
o
m
p
a
n
y
 
=
 
b
.
c
o
m
p
a
n
y
 
A
N
D
 
a
.
n
u
m
 
=
 
b
.
n
u
m
)
\
n
 
W
H
E
R
E
 
a
.
s
t
o
p
 
=
 
_
_
_
\
n
 
 
 
A
N
D
 
b
.
s
t
o
p
 
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
 
D
I
S
T
I
N
C
T
 
a
.
c
o
m
p
a
n
y
,
 
a
.
n
u
m
 
F
R
O
M
 
r
o
u
t
e
 
a
 
J
O
I
N
 
r
o
u
t
e
 
b
 
O
N
 
(
a
.
c
o
m
p
a
n
y
 
=
 
b
.
c
o
m
p
a
n
y
 
A
N
D
 
a
.
n
u
m
 
=
 
b
.
n
u
m
)
 
W
H
E
R
E
 
a
.
s
t
o
p
 
=
 
5
3
 
A
N
D
 
b
.
s
t
o
p
 
=
 
1
4
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
S
a
m
e
 
s
e
l
f
-
j
o
i
n
 
p
a
t
t
e
r
n
 
a
s
 
b
e
f
o
r
e
.
"
,


 
 
 
 
 
 
"
C
r
a
i
g
l
o
c
k
h
a
r
t
 
=
 
5
3
,
 
L
o
n
d
o
n
 
R
o
a
d
 
=
 
1
4
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
s
e
l
f
 
J
O
I
N
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
t
r
a
n
s
p
o
r
t
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
f
-
j
o
i
n
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
f
-
j
o
i
n
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
e
r
v
i
c
e
s
 
w
i
t
h
 
S
t
o
p
 
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
 
s
e
r
v
i
c
e
s
 
c
o
n
n
e
c
t
i
n
g
 
'
C
r
a
i
g
l
o
c
k
h
a
r
t
'
 
a
n
d
 
'
L
o
n
d
o
n
 
R
o
a
d
'
 
b
y
 
n
a
m
e
.
 
J
o
i
n
 
s
t
o
p
s
 
t
o
 
r
o
u
t
e
 
t
o
 
l
o
o
k
 
u
p
 
s
t
o
p
 
n
a
m
e
s
 
i
n
s
t
e
a
d
 
o
f
 
u
s
i
n
g
 
i
d
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
 
D
I
S
T
I
N
C
T
 
a
.
c
o
m
p
a
n
y
,
 
a
.
n
u
m
\
n
 
F
R
O
M
 
r
o
u
t
e
 
a
\
n
 
J
O
I
N
 
r
o
u
t
e
 
b
 
O
N
 
(
a
.
c
o
m
p
a
n
y
 
=
 
b
.
c
o
m
p
a
n
y
 
A
N
D
 
a
.
n
u
m
 
=
 
b
.
n
u
m
)
\
n
 
J
O
I
N
 
s
t
o
p
s
 
s
a
 
O
N
 
(
a
.
s
t
o
p
 
=
 
s
a
.
i
d
)
\
n
 
J
O
I
N
 
s
t
o
p
s
 
s
b
 
O
N
 
(
b
.
s
t
o
p
 
=
 
s
b
.
i
d
)
\
n
 
W
H
E
R
E
 
s
a
.
n
a
m
e
 
=
 
_
_
_
\
n
 
 
 
A
N
D
 
s
b
.
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
 
a
.
c
o
m
p
a
n
y
,
 
a
.
n
u
m
 
F
R
O
M
 
r
o
u
t
e
 
a
 
J
O
I
N
 
r
o
u
t
e
 
b
 
O
N
 
(
a
.
c
o
m
p
a
n
y
 
=
 
b
.
c
o
m
p
a
n
y
 
A
N
D
 
a
.
n
u
m
 
=
 
b
.
n
u
m
)
 
J
O
I
N
 
s
t
o
p
s
 
s
a
 
O
N
 
a
.
s
t
o
p
 
=
 
s
a
.
i
d
 
J
O
I
N
 
s
t
o
p
s
 
s
b
 
O
N
 
b
.
s
t
o
p
 
=
 
s
b
.
i
d
 
W
H
E
R
E
 
s
a
.
n
a
m
e
 
=
 
'
C
r
a
i
g
l
o
c
k
h
a
r
t
'
 
A
N
D
 
s
b
.
n
a
m
e
 
=
 
'
L
o
n
d
o
n
 
R
o
a
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
J
o
i
n
 
e
a
c
h
 
r
o
u
t
e
 
c
o
p
y
 
t
o
 
s
t
o
p
s
 
t
o
 
g
e
t
 
t
h
e
 
s
t
o
p
 
n
a
m
e
.
"
,


 
 
 
 
 
 
"
s
a
 
i
s
 
s
t
o
p
s
 
f
o
r
 
r
o
u
t
e
 
a
,
 
s
b
 
i
s
 
s
t
o
p
s
 
f
o
r
 
r
o
u
t
e
 
b
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
t
o
p
 
n
a
m
e
s
 
i
n
s
t
e
a
d
 
o
f
 
i
d
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
s
e
l
f
 
J
O
I
N
"
,
 
"
J
O
I
N
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
t
r
a
n
s
p
o
r
t
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
f
-
j
o
i
n
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
f
-
j
o
i
n
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
S
e
r
v
i
c
e
s
 
B
e
t
w
e
e
n
 
T
w
o
 
S
t
o
p
s
 
b
y
 
I
D
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
i
s
t
 
o
f
 
c
o
m
p
a
n
y
,
 
n
u
m
,
 
s
t
o
p
-
a
-
n
a
m
e
,
 
s
t
o
p
-
b
-
n
a
m
e
 
f
o
r
 
s
e
r
v
i
c
e
s
 
t
h
a
t
 
c
o
n
n
e
c
t
 
s
t
o
p
s
 
1
1
5
 
a
n
d
 
1
3
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
 
a
.
c
o
m
p
a
n
y
,
 
a
.
n
u
m
,
 
s
a
.
n
a
m
e
,
 
s
b
.
n
a
m
e
\
n
 
F
R
O
M
 
r
o
u
t
e
 
a
\
n
 
J
O
I
N
 
r
o
u
t
e
 
b
 
O
N
 
(
a
.
c
o
m
p
a
n
y
 
=
 
b
.
c
o
m
p
a
n
y
 
A
N
D
 
a
.
n
u
m
 
=
 
b
.
n
u
m
)
\
n
 
J
O
I
N
 
s
t
o
p
s
 
s
a
 
O
N
 
(
a
.
s
t
o
p
 
=
 
s
a
.
i
d
)
\
n
 
J
O
I
N
 
s
t
o
p
s
 
s
b
 
O
N
 
(
b
.
s
t
o
p
 
=
 
s
b
.
i
d
)
\
n
 
W
H
E
R
E
 
s
a
.
i
d
 
=
 
_
_
_
\
n
 
 
 
A
N
D
 
s
b
.
i
d
 
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
 
a
.
c
o
m
p
a
n
y
,
 
a
.
n
u
m
,
 
s
a
.
n
a
m
e
,
 
s
b
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
o
u
t
e
 
a
 
J
O
I
N
 
r
o
u
t
e
 
b
 
O
N
 
(
a
.
c
o
m
p
a
n
y
 
=
 
b
.
c
o
m
p
a
n
y
 
A
N
D
 
a
.
n
u
m
 
=
 
b
.
n
u
m
)
 
J
O
I
N
 
s
t
o
p
s
 
s
a
 
O
N
 
a
.
s
t
o
p
 
=
 
s
a
.
i
d
 
J
O
I
N
 
s
t
o
p
s
 
s
b
 
O
N
 
b
.
s
t
o
p
 
=
 
s
b
.
i
d
 
W
H
E
R
E
 
s
a
.
i
d
 
=
 
1
1
5
 
A
N
D
 
s
b
.
i
d
 
=
 
1
3
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
J
o
i
n
 
r
o
u
t
e
 
t
w
i
c
e
,
 
a
n
d
 
s
t
o
p
s
 
t
w
i
c
e
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
t
o
p
 
i
d
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
s
e
l
f
 
J
O
I
N
"
,
 
"
J
O
I
N
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
t
r
a
n
s
p
o
r
t
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
f
-
j
o
i
n
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
f
-
j
o
i
n
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
r
a
i
g
l
o
c
k
h
a
r
t
 
t
o
 
T
o
l
l
c
r
o
s
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
m
p
a
n
y
,
 
n
u
m
,
 
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
 
o
f
 
t
h
e
 
s
t
o
p
 
f
o
r
 
s
e
r
v
i
c
e
s
 
b
e
t
w
e
e
n
 
'
C
r
a
i
g
l
o
c
k
h
a
r
t
'
 
a
n
d
 
'
T
o
l
l
c
r
o
s
s
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
 
a
.
c
o
m
p
a
n
y
,
 
a
.
n
u
m
,
 
s
b
.
n
a
m
e
\
n
 
F
R
O
M
 
r
o
u
t
e
 
a
\
n
 
J
O
I
N
 
r
o
u
t
e
 
b
 
O
N
 
(
a
.
c
o
m
p
a
n
y
 
=
 
b
.
c
o
m
p
a
n
y
 
A
N
D
 
a
.
n
u
m
 
=
 
b
.
n
u
m
)
\
n
 
J
O
I
N
 
s
t
o
p
s
 
s
a
 
O
N
 
(
a
.
s
t
o
p
 
=
 
s
a
.
i
d
)
\
n
 
J
O
I
N
 
s
t
o
p
s
 
s
b
 
O
N
 
(
b
.
s
t
o
p
 
=
 
s
b
.
i
d
)
\
n
 
W
H
E
R
E
 
s
a
.
n
a
m
e
 
=
 
_
_
_
\
n
 
 
 
A
N
D
 
s
b
.
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
S
E
L
E
C
T
 
a
.
c
o
m
p
a
n
y
,
 
a
.
n
u
m
,
 
s
b
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
o
u
t
e
 
a
 
J
O
I
N
 
r
o
u
t
e
 
b
 
O
N
 
(
a
.
c
o
m
p
a
n
y
 
=
 
b
.
c
o
m
p
a
n
y
 
A
N
D
 
a
.
n
u
m
 
=
 
b
.
n
u
m
)
 
J
O
I
N
 
s
t
o
p
s
 
s
a
 
O
N
 
a
.
s
t
o
p
 
=
 
s
a
.
i
d
 
J
O
I
N
 
s
t
o
p
s
 
s
b
 
O
N
 
b
.
s
t
o
p
 
=
 
s
b
.
i
d
 
W
H
E
R
E
 
s
a
.
n
a
m
e
 
=
 
'
C
r
a
i
g
l
o
c
k
h
a
r
t
'
 
A
N
D
 
s
b
.
n
a
m
e
 
=
 
'
T
o
l
l
c
r
o
s
s
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
a
m
e
 
p
a
t
t
e
r
n
 
a
s
 
b
e
f
o
r
e
 
w
i
t
h
 
s
t
o
p
 
n
a
m
e
s
.
"
,


 
 
 
 
 
 
"
S
h
o
w
 
t
h
e
 
d
e
s
t
i
n
a
t
i
o
n
 
s
t
o
p
 
n
a
m
e
 
(
s
b
.
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
S
E
L
E
C
T
"
,
 
"
s
e
l
f
 
J
O
I
N
"
,
 
"
J
O
I
N
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
t
r
a
n
s
p
o
r
t
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
f
-
j
o
i
n
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
f
-
j
o
i
n
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
e
a
c
h
a
b
l
e
 
f
r
o
m
 
C
r
a
i
g
l
o
c
k
h
a
r
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
 
a
 
d
i
s
t
i
n
c
t
 
l
i
s
t
 
o
f
 
s
t
o
p
 
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
r
e
 
r
e
a
c
h
a
b
l
e
 
f
r
o
m
 
'
C
r
a
i
g
l
o
c
k
h
a
r
t
'
 
o
n
 
a
 
s
i
n
g
l
e
 
s
e
r
v
i
c
e
 
(
n
o
 
t
r
a
n
s
f
e
r
s
)
.
 
I
n
c
l
u
d
e
 
C
r
a
i
g
l
o
c
k
h
a
r
t
 
i
t
s
e
l
f
.
 
S
h
o
w
 
c
o
m
p
a
n
y
,
 
n
u
m
,
 
a
n
d
 
t
h
e
 
r
e
a
c
h
a
b
l
e
 
s
t
o
p
 
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
 
D
I
S
T
I
N
C
T
 
s
b
.
n
a
m
e
,
 
a
.
c
o
m
p
a
n
y
,
 
a
.
n
u
m
\
n
 
F
R
O
M
 
r
o
u
t
e
 
a
\
n
 
J
O
I
N
 
r
o
u
t
e
 
b
 
O
N
 
(
a
.
c
o
m
p
a
n
y
 
=
 
b
.
c
o
m
p
a
n
y
 
A
N
D
 
a
.
n
u
m
 
=
 
b
.
n
u
m
)
\
n
 
J
O
I
N
 
s
t
o
p
s
 
s
a
 
O
N
 
(
a
.
s
t
o
p
 
=
 
s
a
.
i
d
)
\
n
 
J
O
I
N
 
s
t
o
p
s
 
s
b
 
O
N
 
(
b
.
s
t
o
p
 
=
 
s
b
.
i
d
)
\
n
 
W
H
E
R
E
 
s
a
.
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
 
s
b
.
n
a
m
e
,
 
a
.
c
o
m
p
a
n
y
,
 
a
.
n
u
m
 
F
R
O
M
 
r
o
u
t
e
 
a
 
J
O
I
N
 
r
o
u
t
e
 
b
 
O
N
 
(
a
.
c
o
m
p
a
n
y
 
=
 
b
.
c
o
m
p
a
n
y
 
A
N
D
 
a
.
n
u
m
 
=
 
b
.
n
u
m
)
 
J
O
I
N
 
s
t
o
p
s
 
s
a
 
O
N
 
a
.
s
t
o
p
 
=
 
s
a
.
i
d
 
J
O
I
N
 
s
t
o
p
s
 
s
b
 
O
N
 
b
.
s
t
o
p
 
=
 
s
b
.
i
d
 
W
H
E
R
E
 
s
a
.
n
a
m
e
 
=
 
'
C
r
a
i
g
l
o
c
k
h
a
r
t
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
O
n
l
y
 
f
i
l
t
e
r
 
o
n
 
t
h
e
 
s
t
a
r
t
i
n
g
 
s
t
o
p
 
(
s
a
.
n
a
m
e
 
=
 
'
C
r
a
i
g
l
o
c
k
h
a
r
t
'
)
.
"
,


 
 
 
 
 
 
"
b
.
s
t
o
p
 
g
i
v
e
s
 
a
l
l
 
s
t
o
p
s
 
r
e
a
c
h
a
b
l
e
 
o
n
 
t
h
e
 
s
a
m
e
 
s
e
r
v
i
c
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
 
a
v
o
i
d
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
s
e
l
f
 
J
O
I
N
"
,
 
"
J
O
I
N
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
t
r
a
n
s
p
o
r
t
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
f
-
j
o
i
n
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
f
-
j
o
i
n
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
w
o
 
B
u
s
e
s
:
 
C
r
a
i
g
l
o
c
k
h
a
r
t
 
t
o
 
L
o
c
h
e
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
 
r
o
u
t
e
s
 
i
n
v
o
l
v
i
n
g
 
t
w
o
 
b
u
s
e
s
 
t
h
a
t
 
c
a
n
 
g
o
 
f
r
o
m
 
C
r
a
i
g
l
o
c
k
h
a
r
t
 
t
o
 
L
o
c
h
e
n
d
.
 
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
 
b
u
s
 
s
e
r
v
i
c
e
 
(
c
o
m
p
a
n
y
,
 
n
u
m
)
,
 
t
h
e
 
t
r
a
n
s
f
e
r
 
s
t
o
p
 
n
a
m
e
,
 
a
n
d
 
t
h
e
 
s
e
c
o
n
d
 
b
u
s
 
s
e
r
v
i
c
e
 
(
c
o
m
p
a
n
y
,
 
n
u
m
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
 
D
I
S
T
I
N
C
T
\
n
 
 
f
i
r
s
t
_
l
e
g
.
c
o
m
p
a
n
y
,
 
f
i
r
s
t
_
l
e
g
.
n
u
m
,
 
t
r
a
n
s
f
e
r
_
s
t
o
p
.
n
a
m
e
,
\
n
 
 
s
e
c
o
n
d
_
l
e
g
.
c
o
m
p
a
n
y
,
 
s
e
c
o
n
d
_
l
e
g
.
n
u
m
\
n
F
R
O
M
 
r
o
u
t
e
 
f
i
r
s
t
_
l
e
g
\
n
J
O
I
N
 
r
o
u
t
e
 
f
i
r
s
t
_
l
e
g
_
b
 
O
N
 
(
f
i
r
s
t
_
l
e
g
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
i
r
s
t
_
l
e
g
_
b
.
c
o
m
p
a
n
y
 
A
N
D
 
f
i
r
s
t
_
l
e
g
.
n
u
m
 
=
 
f
i
r
s
t
_
l
e
g
_
b
.
n
u
m
)
\
n
J
O
I
N
 
s
t
o
p
s
 
s
t
a
r
t
_
s
t
o
p
 
O
N
 
(
f
i
r
s
t
_
l
e
g
.
s
t
o
p
 
=
 
s
t
a
r
t
_
s
t
o
p
.
i
d
)
\
n
J
O
I
N
 
s
t
o
p
s
 
t
r
a
n
s
f
e
r
_
s
t
o
p
 
O
N
 
(
f
i
r
s
t
_
l
e
g
_
b
.
s
t
o
p
 
=
 
t
r
a
n
s
f
e
r
_
s
t
o
p
.
i
d
)
\
n
J
O
I
N
 
r
o
u
t
e
 
s
e
c
o
n
d
_
l
e
g
 
O
N
 
(
t
r
a
n
s
f
e
r
_
s
t
o
p
.
i
d
 
=
 
s
e
c
o
n
d
_
l
e
g
.
s
t
o
p
)
\
n
J
O
I
N
 
r
o
u
t
e
 
s
e
c
o
n
d
_
l
e
g
_
b
 
O
N
 
(
s
e
c
o
n
d
_
l
e
g
.
c
o
m
p
a
n
y
 
=
 
s
e
c
o
n
d
_
l
e
g
_
b
.
c
o
m
p
a
n
y
 
A
N
D
 
s
e
c
o
n
d
_
l
e
g
.
n
u
m
 
=
 
s
e
c
o
n
d
_
l
e
g
_
b
.
n
u
m
)
\
n
J
O
I
N
 
s
t
o
p
s
 
e
n
d
_
s
t
o
p
 
O
N
 
(
s
e
c
o
n
d
_
l
e
g
_
b
.
s
t
o
p
 
=
 
e
n
d
_
s
t
o
p
.
i
d
)
\
n
W
H
E
R
E
 
s
t
a
r
t
_
s
t
o
p
.
n
a
m
e
 
=
 
_
_
_
\
n
 
 
A
N
D
 
e
n
d
_
s
t
o
p
.
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
 
f
i
r
s
t
_
l
e
g
.
c
o
m
p
a
n
y
,
 
f
i
r
s
t
_
l
e
g
.
n
u
m
,
 
t
r
a
n
s
f
e
r
_
s
t
o
p
.
n
a
m
e
,
 
s
e
c
o
n
d
_
l
e
g
.
c
o
m
p
a
n
y
,
 
s
e
c
o
n
d
_
l
e
g
.
n
u
m
 
F
R
O
M
 
r
o
u
t
e
 
f
i
r
s
t
_
l
e
g
 
J
O
I
N
 
r
o
u
t
e
 
f
i
r
s
t
_
l
e
g
_
b
 
O
N
 
(
f
i
r
s
t
_
l
e
g
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
i
r
s
t
_
l
e
g
_
b
.
c
o
m
p
a
n
y
 
A
N
D
 
f
i
r
s
t
_
l
e
g
.
n
u
m
 
=
 
f
i
r
s
t
_
l
e
g
_
b
.
n
u
m
)
 
J
O
I
N
 
s
t
o
p
s
 
s
t
a
r
t
_
s
t
o
p
 
O
N
 
(
f
i
r
s
t
_
l
e
g
.
s
t
o
p
 
=
 
s
t
a
r
t
_
s
t
o
p
.
i
d
)
 
J
O
I
N
 
s
t
o
p
s
 
t
r
a
n
s
f
e
r
_
s
t
o
p
 
O
N
 
(
f
i
r
s
t
_
l
e
g
_
b
.
s
t
o
p
 
=
 
t
r
a
n
s
f
e
r
_
s
t
o
p
.
i
d
)
 
J
O
I
N
 
r
o
u
t
e
 
s
e
c
o
n
d
_
l
e
g
 
O
N
 
(
t
r
a
n
s
f
e
r
_
s
t
o
p
.
i
d
 
=
 
s
e
c
o
n
d
_
l
e
g
.
s
t
o
p
)
 
J
O
I
N
 
r
o
u
t
e
 
s
e
c
o
n
d
_
l
e
g
_
b
 
O
N
 
(
s
e
c
o
n
d
_
l
e
g
.
c
o
m
p
a
n
y
 
=
 
s
e
c
o
n
d
_
l
e
g
_
b
.
c
o
m
p
a
n
y
 
A
N
D
 
s
e
c
o
n
d
_
l
e
g
.
n
u
m
 
=
 
s
e
c
o
n
d
_
l
e
g
_
b
.
n
u
m
)
 
J
O
I
N
 
s
t
o
p
s
 
e
n
d
_
s
t
o
p
 
O
N
 
(
s
e
c
o
n
d
_
l
e
g
_
b
.
s
t
o
p
 
=
 
e
n
d
_
s
t
o
p
.
i
d
)
 
W
H
E
R
E
 
s
t
a
r
t
_
s
t
o
p
.
n
a
m
e
 
=
 
'
C
r
a
i
g
l
o
c
k
h
a
r
t
'
 
A
N
D
 
e
n
d
_
s
t
o
p
.
n
a
m
e
 
=
 
'
L
o
c
h
e
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
Y
o
u
 
n
e
e
d
 
t
w
o
 
s
e
l
f
-
j
o
i
n
s
 
o
n
 
r
o
u
t
e
:
 
o
n
e
 
f
o
r
 
t
h
e
 
f
i
r
s
t
 
b
u
s
,
 
o
n
e
 
f
o
r
 
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
T
h
e
 
t
r
a
n
s
f
e
r
 
s
t
o
p
 
i
s
 
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
 
b
u
s
'
s
 
r
o
u
t
e
 
m
e
e
t
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
 
b
u
s
'
s
 
r
o
u
t
e
.
"
,


 
 
 
 
 
 
"
J
o
i
n
 
s
i
x
 
t
a
b
l
e
s
 
t
o
t
a
l
:
 
t
w
o
 
p
a
i
r
s
 
o
f
 
r
o
u
t
e
 
+
 
t
h
e
i
r
 
s
t
o
p
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
s
e
l
f
 
J
O
I
N
"
,
 
"
J
O
I
N
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
t
r
a
n
s
p
o
r
t
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
s
i
n
g
-
n
u
l
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
u
s
i
n
g
-
n
u
l
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
N
U
L
L
 
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
 
t
e
a
c
h
e
r
s
 
w
h
o
 
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
 
t
h
e
i
r
 
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
.
 
U
s
e
 
I
S
 
N
U
L
L
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
 
t
e
a
c
h
e
r
\
n
 
W
H
E
R
E
 
d
e
p
t
 
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
 
t
e
a
c
h
e
r
 
W
H
E
R
E
 
d
e
p
t
 
I
S
 
N
U
L
L
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
n
o
t
 
u
s
e
 
=
 
N
U
L
L
.
 
Y
o
u
 
m
u
s
t
 
u
s
e
 
I
S
 
N
U
L
L
.
"
,


 
 
 
 
 
 
"
N
U
L
L
 
m
e
a
n
s
 
'
n
o
 
v
a
l
u
e
'
 
a
n
d
 
r
e
q
u
i
r
e
s
 
s
p
e
c
i
a
l
 
s
y
n
t
a
x
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
S
 
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
s
c
h
o
o
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
u
s
i
n
g
-
n
u
l
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
u
s
i
n
g
-
n
u
l
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
I
N
N
E
R
 
J
O
I
N
 
T
e
a
c
h
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
U
s
e
 
I
N
N
E
R
 
J
O
I
N
 
t
o
 
s
h
o
w
 
t
e
a
c
h
e
r
 
n
a
m
e
 
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
 
n
a
m
e
.
 
I
N
N
E
R
 
J
O
I
N
 
m
i
s
s
e
s
 
t
e
a
c
h
e
r
s
 
w
i
t
h
 
n
o
 
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
s
 
w
i
t
h
 
n
o
 
t
e
a
c
h
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
 
t
e
a
c
h
e
r
.
n
a
m
e
,
 
d
e
p
t
.
n
a
m
e
\
n
 
F
R
O
M
 
t
e
a
c
h
e
r
\
n
 
I
N
N
E
R
 
J
O
I
N
 
d
e
p
t
 
O
N
 
(
t
e
a
c
h
e
r
.
d
e
p
t
 
=
 
d
e
p
t
.
i
d
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
 
t
e
a
c
h
e
r
.
n
a
m
e
,
 
d
e
p
t
.
n
a
m
e
 
F
R
O
M
 
t
e
a
c
h
e
r
 
I
N
N
E
R
 
J
O
I
N
 
d
e
p
t
 
O
N
 
t
e
a
c
h
e
r
.
d
e
p
t
 
=
 
d
e
p
t
.
i
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
I
N
N
E
R
 
J
O
I
N
 
o
n
l
y
 
s
h
o
w
s
 
r
o
w
s
 
w
h
e
r
e
 
t
h
e
r
e
 
i
s
 
a
 
m
a
t
c
h
 
i
n
 
b
o
t
h
 
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
e
a
c
h
e
r
s
 
w
i
t
h
o
u
t
 
a
 
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
 
a
r
e
 
e
x
c
l
u
d
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
S
E
L
E
C
T
"
,
 
"
I
N
N
E
R
 
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
s
c
h
o
o
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
u
s
i
n
g
-
n
u
l
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
u
s
i
n
g
-
n
u
l
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
L
E
F
T
 
J
O
I
N
 
A
l
l
 
T
e
a
c
h
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
U
s
e
 
L
E
F
T
 
J
O
I
N
 
t
o
 
l
i
s
t
 
a
l
l
 
t
e
a
c
h
e
r
s
.
 
I
f
 
a
 
t
e
a
c
h
e
r
 
h
a
s
 
n
o
 
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
,
 
s
h
o
w
 
N
U
L
L
 
f
o
r
 
t
h
e
 
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
 
t
e
a
c
h
e
r
.
n
a
m
e
,
 
d
e
p
t
.
n
a
m
e
\
n
 
F
R
O
M
 
t
e
a
c
h
e
r
\
n
 
L
E
F
T
 
J
O
I
N
 
d
e
p
t
 
O
N
 
(
t
e
a
c
h
e
r
.
d
e
p
t
 
=
 
d
e
p
t
.
i
d
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
 
t
e
a
c
h
e
r
.
n
a
m
e
,
 
d
e
p
t
.
n
a
m
e
 
F
R
O
M
 
t
e
a
c
h
e
r
 
L
E
F
T
 
J
O
I
N
 
d
e
p
t
 
O
N
 
t
e
a
c
h
e
r
.
d
e
p
t
 
=
 
d
e
p
t
.
i
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
E
F
T
 
J
O
I
N
 
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
 
f
r
o
m
 
t
h
e
 
l
e
f
t
 
t
a
b
l
e
 
(
t
e
a
c
h
e
r
)
.
"
,


 
 
 
 
 
 
"
U
n
m
a
t
c
h
e
d
 
r
o
w
s
 
g
e
t
 
N
U
L
L
 
f
o
r
 
t
h
e
 
r
i
g
h
t
 
t
a
b
l
e
 
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
S
E
L
E
C
T
"
,
 
"
L
E
F
T
 
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
s
c
h
o
o
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
u
s
i
n
g
-
n
u
l
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
u
s
i
n
g
-
n
u
l
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
A
l
l
 
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
 
(
R
I
G
H
T
 
J
O
I
N
 
E
q
u
i
v
a
l
e
n
t
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
S
Q
L
i
t
e
 
d
o
e
s
 
n
o
t
 
s
u
p
p
o
r
t
 
R
I
G
H
T
 
J
O
I
N
.
 
T
o
 
l
i
s
t
 
a
l
l
 
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
 
(
e
v
e
n
 
t
h
o
s
e
 
w
i
t
h
 
n
o
 
t
e
a
c
h
e
r
s
)
,
 
s
w
a
p
 
t
h
e
 
t
a
b
l
e
 
o
r
d
e
r
 
a
n
d
 
u
s
e
 
L
E
F
T
 
J
O
I
N
.
 
S
h
o
w
 
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
 
n
a
m
e
 
a
n
d
 
t
e
a
c
h
e
r
 
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
 
d
e
p
t
.
n
a
m
e
,
 
t
e
a
c
h
e
r
.
n
a
m
e
\
n
 
F
R
O
M
 
d
e
p
t
\
n
 
L
E
F
T
 
J
O
I
N
 
t
e
a
c
h
e
r
 
O
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
 
d
e
p
t
.
n
a
m
e
,
 
t
e
a
c
h
e
r
.
n
a
m
e
 
F
R
O
M
 
d
e
p
t
 
L
E
F
T
 
J
O
I
N
 
t
e
a
c
h
e
r
 
O
N
 
t
e
a
c
h
e
r
.
d
e
p
t
 
=
 
d
e
p
t
.
i
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
I
n
 
S
Q
L
i
t
e
,
 
s
i
m
u
l
a
t
e
 
R
I
G
H
T
 
J
O
I
N
 
b
y
 
s
w
a
p
p
i
n
g
 
t
a
b
l
e
 
o
r
d
e
r
 
a
n
d
 
u
s
i
n
g
 
L
E
F
T
 
J
O
I
N
.
"
,


 
 
 
 
 
 
"
P
u
t
 
d
e
p
t
 
o
n
 
t
h
e
 
l
e
f
t
:
 
F
R
O
M
 
d
e
p
t
 
L
E
F
T
 
J
O
I
N
 
t
e
a
c
h
e
r
.
"
,


 
 
 
 
 
 
"
T
h
e
 
j
o
i
n
 
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
t
a
y
s
 
t
h
e
 
s
a
m
e
:
 
t
e
a
c
h
e
r
.
d
e
p
t
 
=
 
d
e
p
t
.
i
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
S
E
L
E
C
T
"
,
 
"
L
E
F
T
 
J
O
I
N
"
,
 
"
R
I
G
H
T
 
J
O
I
N
 
e
q
u
i
v
a
l
e
n
t
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
s
c
h
o
o
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
u
s
i
n
g
-
n
u
l
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
u
s
i
n
g
-
n
u
l
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
C
O
A
L
E
S
C
E
 
f
o
r
 
M
i
s
s
i
n
g
 
M
o
b
i
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
U
s
e
 
C
O
A
L
E
S
C
E
 
t
o
 
s
h
o
w
 
t
h
e
 
t
e
a
c
h
e
r
 
n
a
m
e
 
a
n
d
 
m
o
b
i
l
e
 
n
u
m
b
e
r
.
 
U
s
e
 
'
0
7
9
8
6
 
4
4
4
 
2
2
6
6
'
 
a
s
 
t
h
e
 
d
e
f
a
u
l
t
 
f
o
r
 
m
i
s
s
i
n
g
 
(
N
U
L
L
)
 
m
o
b
i
l
e
 
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
 
C
O
A
L
E
S
C
E
(
_
_
_
,
 
'
0
7
9
8
6
 
4
4
4
 
2
2
6
6
'
)
\
n
 
F
R
O
M
 
t
e
a
c
h
e
r
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
 
C
O
A
L
E
S
C
E
(
m
o
b
i
l
e
,
 
'
0
7
9
8
6
 
4
4
4
 
2
2
6
6
'
)
 
F
R
O
M
 
t
e
a
c
h
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
O
A
L
E
S
C
E
 
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
 
f
i
r
s
t
 
n
o
n
-
N
U
L
L
 
a
r
g
u
m
e
n
t
.
"
,


 
 
 
 
 
 
"
C
O
A
L
E
S
C
E
(
m
o
b
i
l
e
,
 
'
d
e
f
a
u
l
t
'
)
 
r
e
t
u
r
n
s
 
m
o
b
i
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
,
 
o
t
h
e
r
w
i
s
e
 
t
h
e
 
d
e
f
a
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
C
O
A
L
E
S
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
s
c
h
o
o
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
u
s
i
n
g
-
n
u
l
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
u
s
i
n
g
-
n
u
l
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
C
O
A
L
E
S
C
E
 
f
o
r
 
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
U
s
e
 
C
O
A
L
E
S
C
E
 
t
o
 
s
h
o
w
 
t
h
e
 
t
e
a
c
h
e
r
 
n
a
m
e
 
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
 
n
a
m
e
.
 
U
s
e
 
'
N
o
n
e
'
 
a
s
 
t
h
e
 
d
e
f
a
u
l
t
 
f
o
r
 
t
e
a
c
h
e
r
s
 
w
i
t
h
o
u
t
 
a
 
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
 
t
e
a
c
h
e
r
.
n
a
m
e
,
 
C
O
A
L
E
S
C
E
(
_
_
_
,
 
'
N
o
n
e
'
)
\
n
 
F
R
O
M
 
t
e
a
c
h
e
r
\
n
 
L
E
F
T
 
J
O
I
N
 
d
e
p
t
 
O
N
 
(
t
e
a
c
h
e
r
.
d
e
p
t
 
=
 
d
e
p
t
.
i
d
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
 
t
e
a
c
h
e
r
.
n
a
m
e
,
 
C
O
A
L
E
S
C
E
(
d
e
p
t
.
n
a
m
e
,
 
'
N
o
n
e
'
)
 
F
R
O
M
 
t
e
a
c
h
e
r
 
L
E
F
T
 
J
O
I
N
 
d
e
p
t
 
O
N
 
t
e
a
c
h
e
r
.
d
e
p
t
 
=
 
d
e
p
t
.
i
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
E
F
T
 
J
O
I
N
 
t
o
 
k
e
e
p
 
a
l
l
 
t
e
a
c
h
e
r
s
.
"
,


 
 
 
 
 
 
"
C
O
A
L
E
S
C
E
(
d
e
p
t
.
n
a
m
e
,
 
'
N
o
n
e
'
)
 
h
a
n
d
l
e
s
 
N
U
L
L
 
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
 
n
a
m
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
L
E
F
T
 
J
O
I
N
"
,
 
"
C
O
A
L
E
S
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
s
c
h
o
o
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
u
s
i
n
g
-
n
u
l
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
u
s
i
n
g
-
n
u
l
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
C
o
u
n
t
 
T
e
a
c
h
e
r
s
 
a
n
d
 
M
o
b
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
S
h
o
w
 
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
 
t
e
a
c
h
e
r
s
 
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
 
m
o
b
i
l
e
 
p
h
o
n
e
s
 
(
n
o
n
-
N
U
L
L
)
.
 
U
s
e
 
C
O
U
N
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
 
C
O
U
N
T
(
_
_
_
)
,
 
C
O
U
N
T
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
 
t
e
a
c
h
e
r
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
 
C
O
U
N
T
(
n
a
m
e
)
,
 
C
O
U
N
T
(
m
o
b
i
l
e
)
 
F
R
O
M
 
t
e
a
c
h
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
O
U
N
T
(
c
o
l
u
m
n
)
 
c
o
u
n
t
s
 
n
o
n
-
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
C
O
U
N
T
(
n
a
m
e
)
 
c
o
u
n
t
s
 
a
l
l
 
t
e
a
c
h
e
r
s
;
 
C
O
U
N
T
(
m
o
b
i
l
e
)
 
c
o
u
n
t
s
 
o
n
l
y
 
t
h
o
s
e
 
w
i
t
h
 
a
 
m
o
b
i
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
S
E
L
E
C
T
"
,
 
"
C
O
U
N
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
s
c
h
o
o
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
u
s
i
n
g
-
n
u
l
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
u
s
i
n
g
-
n
u
l
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
 
S
t
a
f
f
 
C
o
u
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
 
s
t
a
f
f
.
 
U
s
e
 
L
E
F
T
 
J
O
I
N
 
f
r
o
m
 
d
e
p
t
 
t
o
 
t
e
a
c
h
e
r
 
s
o
 
t
h
a
t
 
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
 
w
i
t
h
 
n
o
 
t
e
a
c
h
e
r
s
 
s
h
o
w
 
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
 
d
e
p
t
.
n
a
m
e
,
 
C
O
U
N
T
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
 
d
e
p
t
\
n
 
L
E
F
T
 
J
O
I
N
 
t
e
a
c
h
e
r
 
O
N
 
(
d
e
p
t
.
i
d
 
=
 
t
e
a
c
h
e
r
.
d
e
p
t
)
\
n
 
G
R
O
U
P
 
B
Y
 
d
e
p
t
.
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
 
d
e
p
t
.
n
a
m
e
,
 
C
O
U
N
T
(
t
e
a
c
h
e
r
.
n
a
m
e
)
 
F
R
O
M
 
d
e
p
t
 
L
E
F
T
 
J
O
I
N
 
t
e
a
c
h
e
r
 
O
N
 
d
e
p
t
.
i
d
 
=
 
t
e
a
c
h
e
r
.
d
e
p
t
 
G
R
O
U
P
 
B
Y
 
d
e
p
t
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
L
E
F
T
 
J
O
I
N
 
f
r
o
m
 
d
e
p
t
 
e
n
s
u
r
e
s
 
a
l
l
 
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
 
a
p
p
e
a
r
.
"
,


 
 
 
 
 
 
"
C
O
U
N
T
(
t
e
a
c
h
e
r
.
n
a
m
e
)
 
c
o
u
n
t
s
 
n
o
n
-
N
U
L
L
 
t
e
a
c
h
e
r
 
n
a
m
e
s
 
(
i
.
e
.
,
 
a
c
t
u
a
l
 
t
e
a
c
h
e
r
s
)
.
"
,


 
 
 
 
 
 
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
 
w
i
t
h
 
n
o
 
t
e
a
c
h
e
r
s
 
w
i
l
l
 
s
h
o
w
 
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
L
E
F
T
 
J
O
I
N
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
s
c
h
o
o
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
u
s
i
n
g
-
n
u
l
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
u
s
i
n
g
-
n
u
l
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
C
A
S
E
 
f
o
r
 
S
c
i
e
n
c
e
 
a
n
d
 
A
r
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
U
s
e
 
C
A
S
E
 
t
o
 
s
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
a
c
h
 
t
e
a
c
h
e
r
 
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
 
'
S
c
i
'
 
i
f
 
t
h
e
 
t
e
a
c
h
e
r
 
i
s
 
i
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
 
1
 
o
r
 
2
,
 
a
n
d
 
'
A
r
t
'
 
o
t
h
e
r
w
i
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
 
 
C
A
S
E
 
W
H
E
N
 
d
e
p
t
 
I
N
 
(
1
,
 
2
)
 
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
 
_
_
_
 
E
N
D
\
n
 
F
R
O
M
 
t
e
a
c
h
e
r
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
 
C
A
S
E
 
W
H
E
N
 
d
e
p
t
 
I
N
 
(
1
,
 
2
)
 
T
H
E
N
 
'
S
c
i
'
 
E
L
S
E
 
'
A
r
t
'
 
E
N
D
 
F
R
O
M
 
t
e
a
c
h
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
 
W
H
E
N
 
c
o
n
d
i
t
i
o
n
 
T
H
E
N
 
r
e
s
u
l
t
 
E
L
S
E
 
d
e
f
a
u
l
t
 
E
N
D
.
"
,


 
 
 
 
 
 
"
d
e
p
t
 
I
N
 
(
1
,
 
2
)
 
m
a
t
c
h
e
s
 
S
c
i
e
n
c
e
 
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
.
"
,


 
 
 
 
 
 
"
E
L
S
E
 
'
A
r
t
'
 
c
a
t
c
h
e
s
 
a
l
l
 
o
t
h
e
r
 
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
 
a
n
d
 
N
U
L
L
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
s
c
h
o
o
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
u
s
i
n
g
-
n
u
l
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
u
s
i
n
g
-
n
u
l
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
C
A
S
E
 
w
i
t
h
 
M
u
l
t
i
p
l
e
 
C
a
t
e
g
o
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
U
s
e
 
C
A
S
E
 
t
o
 
s
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
a
c
h
 
t
e
a
c
h
e
r
 
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
 
'
S
c
i
'
 
i
f
 
i
n
 
d
e
p
t
 
1
 
o
r
 
2
,
 
'
A
r
t
'
 
i
f
 
i
n
 
d
e
p
t
 
3
,
 
a
n
d
 
'
N
o
n
e
'
 
i
f
 
n
o
 
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
 
 
C
A
S
E
 
W
H
E
N
 
d
e
p
t
 
I
N
 
(
1
,
 
2
)
 
T
H
E
N
 
'
S
c
i
'
\
n
 
 
 
 
 
 
 
W
H
E
N
 
d
e
p
t
 
=
 
3
 
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
 
_
_
_
 
E
N
D
\
n
 
F
R
O
M
 
t
e
a
c
h
e
r
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
 
C
A
S
E
 
W
H
E
N
 
d
e
p
t
 
I
N
 
(
1
,
 
2
)
 
T
H
E
N
 
'
S
c
i
'
 
W
H
E
N
 
d
e
p
t
 
=
 
3
 
T
H
E
N
 
'
A
r
t
'
 
E
L
S
E
 
'
N
o
n
e
'
 
E
N
D
 
F
R
O
M
 
t
e
a
c
h
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
A
d
d
 
m
u
l
t
i
p
l
e
 
W
H
E
N
 
c
l
a
u
s
e
s
 
t
o
 
h
a
n
d
l
e
 
d
i
f
f
e
r
e
n
t
 
c
a
s
e
s
.
"
,


 
 
 
 
 
 
"
E
L
S
E
 
c
a
t
c
h
e
s
 
N
U
L
L
 
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
C
A
S
E
 
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
,
 
u
s
i
n
g
 
t
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
s
c
h
o
o
l
"
,


 
 
}
,


]
;


