
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
A
d
v
a
n
c
e
d
R
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
 
R
a
n
k
 
b
y
 
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
u
n
t
r
y
'
s
 
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
 
i
t
s
 
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
 
U
s
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
 
a
n
d
 
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
 
3
 
r
a
n
k
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
t
i
n
e
n
t
,
 
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
r
a
n
k
 
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
t
i
n
e
n
t
,
 
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
 
 
 
 
_
_
_
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
r
a
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
)
 
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
p
u
l
a
t
i
o
n
_
r
a
n
k
 
<
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
_
r
a
n
k
,
 
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
r
a
n
k
 
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
t
i
n
e
n
t
,
 
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
 
c
o
n
t
i
n
e
n
t
 
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
r
a
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
)
 
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
p
u
l
a
t
i
o
n
_
r
a
n
k
 
<
=
 
3
 
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
_
r
a
n
k
,
 
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
U
s
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
(
)
 
O
V
E
R
 
t
o
 
r
a
n
k
 
r
o
w
s
 
w
i
t
h
o
u
t
 
g
a
p
s
 
a
f
t
e
r
 
t
i
e
s
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
 
c
o
n
t
i
n
e
n
t
 
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
 
b
e
c
a
u
s
e
 
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
 
a
l
i
a
s
e
s
 
a
r
e
 
n
o
t
 
a
v
a
i
l
a
b
l
e
 
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
u
n
n
i
n
g
 
G
D
P
 
b
y
 
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
 
s
h
o
w
 
n
a
m
e
,
 
G
D
P
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
 
G
D
P
 
t
o
t
a
l
 
o
r
d
e
r
e
d
 
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
 
G
D
P
 
i
s
 
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
 
g
d
p
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
 
_
_
_
 
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
 
S
U
M
(
g
d
p
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
u
n
n
i
n
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
S
U
M
(
g
d
p
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
U
s
e
 
I
S
 
N
O
T
 
N
U
L
L
 
f
o
r
 
N
U
L
L
 
c
h
e
c
k
s
,
 
n
o
t
 
<
>
 
N
U
L
L
.
"
,


 
 
 
 
 
 
"
T
h
e
 
f
i
n
a
l
 
O
R
D
E
R
 
B
Y
 
s
h
o
u
l
d
 
m
a
t
c
h
 
t
h
e
 
w
i
n
d
o
w
 
o
r
d
e
r
 
f
o
r
 
r
e
a
d
a
b
i
l
i
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
T
E
 
f
o
r
 
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
U
s
e
 
a
 
C
T
E
 
n
a
m
e
d
 
b
i
g
_
e
c
o
n
o
m
i
e
s
 
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
 
G
D
P
 
a
b
o
v
e
 
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
 
R
e
t
u
r
n
 
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
W
I
T
H
 
b
i
g
_
e
c
o
n
o
m
i
e
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
 
b
i
g
_
e
c
o
n
o
m
i
e
s
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
W
I
T
H
 
b
i
g
_
e
c
o
n
o
m
i
e
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
 
b
i
g
_
e
c
o
n
o
m
i
e
s
 
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
A
 
C
T
E
 
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
.
.
.
)
.
"
,


 
 
 
 
 
 
"
U
s
e
 
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
 
t
o
 
k
e
e
p
 
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
 
r
e
a
d
s
 
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
C
T
E
"
,
 
"
W
I
T
H
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
u
r
s
i
v
e
 
N
u
m
b
e
r
 
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
 
r
e
c
u
r
s
i
v
e
 
C
T
E
 
t
o
 
g
e
n
e
r
a
t
e
 
t
h
e
 
n
u
m
b
e
r
s
 
1
 
t
h
r
o
u
g
h
 
5
,
 
t
h
e
n
 
r
e
t
u
r
n
 
e
a
c
h
 
n
u
m
b
e
r
 
a
n
d
 
i
t
s
 
s
q
u
a
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
 
R
E
C
U
R
S
I
V
E
 
n
u
m
b
e
r
s
(
n
)
 
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
 
1
\
n
 
 
U
N
I
O
N
 
A
L
L
\
n
 
 
S
E
L
E
C
T
 
n
 
+
 
1
 
F
R
O
M
 
n
u
m
b
e
r
s
 
W
H
E
R
E
 
n
 
<
 
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
 
n
,
 
n
 
*
 
n
 
A
S
 
s
q
u
a
r
e
\
n
F
R
O
M
 
n
u
m
b
e
r
s
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
 
R
E
C
U
R
S
I
V
E
 
n
u
m
b
e
r
s
(
n
)
 
A
S
 
(
S
E
L
E
C
T
 
1
 
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
 
n
 
+
 
1
 
F
R
O
M
 
n
u
m
b
e
r
s
 
W
H
E
R
E
 
n
 
<
 
5
)
 
S
E
L
E
C
T
 
n
,
 
n
 
*
 
n
 
A
S
 
s
q
u
a
r
e
 
F
R
O
M
 
n
u
m
b
e
r
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
A
 
r
e
c
u
r
s
i
v
e
 
C
T
E
 
n
e
e
d
s
 
a
n
 
a
n
c
h
o
r
 
S
E
L
E
C
T
 
a
n
d
 
a
 
r
e
c
u
r
s
i
v
e
 
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
U
N
I
O
N
 
A
L
L
 
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
 
a
n
c
h
o
r
 
r
o
w
 
w
i
t
h
 
e
a
c
h
 
g
e
n
e
r
a
t
e
d
 
r
o
w
.
"
,


 
 
 
 
 
 
"
S
t
o
p
 
r
e
c
u
r
s
i
o
n
 
w
i
t
h
 
W
H
E
R
E
 
n
 
<
 
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
r
e
c
u
r
s
i
v
e
 
C
T
E
"
,
 
"
W
I
T
H
 
R
E
C
U
R
S
I
V
E
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
u
t
i
l
i
t
y
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
 
w
i
t
h
 
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
 
e
v
e
r
y
 
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
 
i
t
s
 
g
o
a
l
 
c
o
u
n
t
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
e
a
m
s
 
w
i
t
h
 
z
e
r
o
 
g
o
a
l
s
.
 
U
s
e
 
a
 
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
 
a
n
d
 
s
o
r
t
 
b
y
 
g
o
a
l
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
,
 
t
h
e
n
 
t
e
a
m
 
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
 
A
S
 
g
o
a
l
s
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
o
a
l
s
 
D
E
S
C
,
 
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
 
A
S
 
g
o
a
l
s
 
F
R
O
M
 
e
t
e
a
m
 
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
 
O
R
D
E
R
 
B
Y
 
g
o
a
l
s
 
D
E
S
C
,
 
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
 
e
v
e
r
y
 
t
e
a
m
 
e
v
e
n
 
w
h
e
n
 
t
h
e
r
e
 
i
s
 
n
o
 
m
a
t
c
h
i
n
g
 
g
o
a
l
 
r
o
w
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
 
m
a
t
c
h
e
d
 
g
o
a
l
 
r
o
w
s
,
 
s
o
 
u
n
m
a
t
c
h
e
d
 
t
e
a
m
s
 
c
o
u
n
t
 
a
s
 
0
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
 
p
r
o
d
u
c
e
 
o
n
e
 
r
o
w
 
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
 
C
o
n
t
a
c
t
 
F
a
l
l
b
a
c
k
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
,
 
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
,
 
a
n
d
 
p
r
e
f
e
r
r
e
d
 
c
o
n
t
a
c
t
 
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
 
C
O
A
L
E
S
C
E
 
s
o
 
m
o
b
i
l
e
 
i
s
 
p
r
e
f
e
r
r
e
d
,
 
p
h
o
n
e
 
i
s
 
f
a
l
l
b
a
c
k
,
 
a
n
d
 
'
n
o
 
c
o
n
t
a
c
t
'
 
a
p
p
e
a
r
s
 
i
f
 
b
o
t
h
 
a
r
e
 
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
U
n
a
s
s
i
g
n
e
d
'
)
 
A
S
 
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
\
n
 
 
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
 
_
_
_
,
 
'
n
o
 
c
o
n
t
a
c
t
'
)
 
A
S
 
c
o
n
t
a
c
t
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
\
n
O
R
D
E
R
 
B
Y
 
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
U
n
a
s
s
i
g
n
e
d
'
)
 
A
S
 
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
 
C
O
A
L
E
S
C
E
(
t
e
a
c
h
e
r
.
m
o
b
i
l
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
p
h
o
n
e
,
 
'
n
o
 
c
o
n
t
a
c
t
'
)
 
A
S
 
c
o
n
t
a
c
t
 
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
 
O
R
D
E
R
 
B
Y
 
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
 
s
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
 
r
e
m
a
i
n
 
i
n
 
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


 
 
 
 
 
 
"
M
o
b
i
l
e
 
s
h
o
u
l
d
 
a
p
p
e
a
r
 
b
e
f
o
r
e
 
p
h
o
n
e
 
i
n
 
t
h
e
 
C
O
A
L
E
S
C
E
 
c
a
l
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
C
O
A
L
E
S
C
E
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
N
U
L
L
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
M
o
v
i
e
 
C
a
s
t
 
S
i
z
e
 
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
 
t
o
 
c
o
u
n
t
 
c
a
s
t
 
m
e
m
b
e
r
s
 
p
e
r
 
m
o
v
i
e
.
 
R
e
t
u
r
n
 
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
 
a
n
d
 
c
a
s
t
_
c
o
u
n
t
 
f
o
r
 
m
o
v
i
e
s
 
w
i
t
h
 
a
t
 
l
e
a
s
t
 
4
 
c
a
s
t
 
m
e
m
b
e
r
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
 
c
a
s
t
_
c
o
u
n
t
 
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
 
t
h
e
n
 
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
W
I
T
H
 
c
a
s
t
_
c
o
u
n
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
 
m
o
v
i
e
i
d
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
a
s
t
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
 
c
a
s
t
i
n
g
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
 
m
o
v
i
e
.
t
i
t
l
e
,
 
c
a
s
t
_
c
o
u
n
t
s
.
c
a
s
t
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
_
c
o
u
n
t
s
 
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
_
c
o
u
n
t
s
.
m
o
v
i
e
i
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
s
t
_
c
o
u
n
t
s
.
c
a
s
t
_
c
o
u
n
t
 
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
 
c
a
s
t
_
c
o
u
n
t
 
D
E
S
C
,
 
m
o
v
i
e
.
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
W
I
T
H
 
c
a
s
t
_
c
o
u
n
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
 
m
o
v
i
e
i
d
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
a
s
t
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
 
c
a
s
t
i
n
g
 
G
R
O
U
P
 
B
Y
 
m
o
v
i
e
i
d
)
 
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
.
t
i
t
l
e
,
 
c
a
s
t
_
c
o
u
n
t
s
.
c
a
s
t
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
_
c
o
u
n
t
s
 
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
_
c
o
u
n
t
s
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
 
c
a
s
t
_
c
o
u
n
t
s
.
c
a
s
t
_
c
o
u
n
t
 
>
=
 
4
 
O
R
D
E
R
 
B
Y
 
c
a
s
t
_
c
o
u
n
t
 
D
E
S
C
,
 
m
o
v
i
e
.
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
T
h
e
 
C
T
E
 
s
h
o
u
l
d
 
g
r
o
u
p
 
c
a
s
t
i
n
g
 
r
o
w
s
 
b
y
 
m
o
v
i
e
i
d
.
"
,


 
 
 
 
 
 
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
.
i
d
 
t
o
 
c
a
s
t
_
c
o
u
n
t
s
.
m
o
v
i
e
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
i
t
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
 
a
f
t
e
r
 
t
h
e
 
c
a
s
t
_
c
o
u
n
t
 
h
a
s
 
b
e
e
n
 
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
T
E
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
E
l
e
c
t
i
o
n
 
V
o
t
e
 
S
h
a
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
4
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
 
v
o
t
e
_
s
h
a
r
e
_
p
c
t
.
 
U
s
e
 
a
 
w
i
n
d
o
w
 
t
o
t
a
l
 
a
n
d
 
r
o
u
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
O
U
N
D
(
v
o
t
e
s
 
*
 
1
0
0
.
0
 
/
 
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
)
,
 
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
s
h
a
r
e
_
p
c
t
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
\
n
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
_
s
h
a
r
e
_
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
O
U
N
D
(
v
o
t
e
s
 
*
 
1
0
0
.
0
 
/
 
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
)
,
 
2
)
 
A
S
 
v
o
t
e
_
s
h
a
r
e
_
p
c
t
 
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
_
s
h
a
r
e
_
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
)
 
g
i
v
e
s
 
t
h
e
 
t
o
t
a
l
 
v
o
t
e
s
 
a
c
r
o
s
s
 
t
h
e
 
f
i
l
t
e
r
e
d
 
r
e
s
u
l
t
 
s
e
t
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
 
t
o
 
p
r
o
d
u
c
e
 
a
 
d
e
c
i
m
a
l
 
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
 
2
)
 
k
e
e
p
s
 
t
w
o
 
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
R
O
U
N
D
"
,
 
"
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
p
i
t
a
l
 
C
l
e
a
n
u
p
 
w
i
t
h
 
S
t
r
i
n
g
 
F
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
 
n
o
r
m
a
l
i
z
e
d
 
c
a
p
i
t
a
l
 
s
l
u
g
 
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
o
s
e
 
c
a
p
i
t
a
l
 
c
o
n
t
a
i
n
s
 
a
 
s
p
a
c
e
.
 
T
h
e
 
s
l
u
g
 
s
h
o
u
l
d
 
b
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
 
w
i
t
h
 
s
p
a
c
e
s
 
r
e
p
l
a
c
e
d
 
b
y
 
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
 
L
O
W
E
R
(
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
)
 
A
S
 
c
a
p
i
t
a
l
_
s
l
u
g
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
,
 
L
O
W
E
R
(
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
)
 
A
S
 
c
a
p
i
t
a
l
_
s
l
u
g
 
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
 
'
%
 
%
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


 
 
 
 
 
 
"
L
O
W
E
R
(
.
.
.
)
 
m
a
k
e
s
 
t
h
e
 
s
l
u
g
 
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
L
I
K
E
 
'
%
 
%
'
 
f
i
n
d
s
 
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
s
 
c
o
n
t
a
i
n
i
n
g
 
a
 
s
p
a
c
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
O
W
E
R
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
x
p
l
a
i
n
 
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
 
L
o
o
k
u
p
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
 
E
X
P
L
A
I
N
 
Q
U
E
R
Y
 
P
L
A
N
 
t
o
 
i
n
s
p
e
c
t
 
a
 
l
o
o
k
u
p
 
b
y
 
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
 
R
e
t
u
r
n
 
t
h
e
 
q
u
e
r
y
 
p
l
a
n
 
f
o
r
 
s
e
l
e
c
t
i
n
g
 
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
 
w
h
e
r
e
 
n
a
m
e
 
=
 
'
I
n
d
i
a
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
E
X
P
L
A
I
N
 
Q
U
E
R
Y
 
P
L
A
N
\
n
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
 
_
_
_
 
=
 
'
I
n
d
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
E
X
P
L
A
I
N
 
Q
U
E
R
Y
 
P
L
A
N
 
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
I
n
d
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
E
X
P
L
A
I
N
 
Q
U
E
R
Y
 
P
L
A
N
 
g
o
e
s
 
b
e
f
o
r
e
 
t
h
e
 
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
.
"
,


 
 
 
 
 
 
"
T
h
e
 
f
i
l
t
e
r
 
c
o
l
u
m
n
 
i
s
 
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
 
e
x
e
r
c
i
s
e
 
i
s
 
a
b
o
u
t
 
r
e
a
d
i
n
g
 
t
h
e
 
p
l
a
n
 
o
u
t
p
u
t
,
 
n
o
t
 
c
h
a
n
g
i
n
g
 
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
E
X
P
L
A
I
N
 
Q
U
E
R
Y
 
P
L
A
N
"
,
 
"
i
n
d
e
x
 
a
w
a
r
e
n
e
s
s
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
M
o
n
t
h
l
y
 
C
o
m
p
l
e
t
e
d
 
R
e
v
e
n
u
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
o
r
 
c
o
m
p
l
e
t
e
d
 
s
t
o
r
e
 
o
r
d
e
r
s
,
 
r
e
t
u
r
n
 
e
a
c
h
 
o
r
d
e
r
 
m
o
n
t
h
 
a
n
d
 
t
o
t
a
l
 
r
e
v
e
n
u
e
.
 
U
s
e
 
s
t
r
f
t
i
m
e
 
t
o
 
g
r
o
u
p
 
I
S
O
 
o
r
d
e
r
 
d
a
t
e
s
 
b
y
 
m
o
n
t
h
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
r
f
t
i
m
e
(
_
_
_
,
 
o
r
d
e
r
_
d
a
t
e
)
 
A
S
 
o
r
d
e
r
_
m
o
n
t
h
,
\
n
 
 
R
O
U
N
D
(
S
U
M
(
t
o
t
a
l
)
,
 
2
)
 
A
S
 
r
e
v
e
n
u
e
\
n
F
R
O
M
 
o
r
d
e
r
s
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
t
u
s
 
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
 
o
r
d
e
r
_
m
o
n
t
h
\
n
O
R
D
E
R
 
B
Y
 
o
r
d
e
r
_
m
o
n
t
h
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
r
f
t
i
m
e
(
'
%
Y
-
%
m
'
,
 
o
r
d
e
r
_
d
a
t
e
)
 
A
S
 
o
r
d
e
r
_
m
o
n
t
h
,
 
R
O
U
N
D
(
S
U
M
(
t
o
t
a
l
)
,
 
2
)
 
A
S
 
r
e
v
e
n
u
e
 
F
R
O
M
 
o
r
d
e
r
s
 
W
H
E
R
E
 
s
t
a
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
d
'
 
G
R
O
U
P
 
B
Y
 
o
r
d
e
r
_
m
o
n
t
h
 
O
R
D
E
R
 
B
Y
 
o
r
d
e
r
_
m
o
n
t
h
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
 
s
t
o
r
e
 
d
a
t
a
s
e
t
 
u
s
e
s
 
I
S
O
 
d
a
t
e
s
,
 
s
o
 
S
Q
L
i
t
e
 
d
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
 
c
a
n
 
p
a
r
s
e
 
t
h
e
m
.
"
,


 
 
 
 
 
 
"
s
t
r
f
t
i
m
e
(
'
%
Y
-
%
m
'
,
 
o
r
d
e
r
_
d
a
t
e
)
 
e
x
t
r
a
c
t
s
 
t
h
e
 
m
o
n
t
h
 
b
u
c
k
e
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
 
t
o
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
s
 
b
e
f
o
r
e
 
a
g
g
r
e
g
a
t
i
n
g
 
r
e
v
e
n
u
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
s
t
r
f
t
i
m
e
"
,
 
"
d
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
t
o
r
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
D
a
y
s
 
B
e
t
w
e
e
n
 
C
o
m
p
l
e
t
e
d
 
O
r
d
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
o
r
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
s
,
 
s
h
o
w
 
c
u
s
t
o
m
e
r
_
i
d
,
 
o
r
d
e
r
_
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
 
d
a
y
s
 
s
i
n
c
e
 
t
h
a
t
 
c
u
s
t
o
m
e
r
'
s
 
p
r
e
v
i
o
u
s
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
.
 
U
s
e
 
L
A
G
 
a
n
d
 
j
u
l
i
a
n
d
a
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
 
c
u
s
t
o
m
e
r
_
i
d
,
 
o
r
d
e
r
_
d
a
t
e
,
\
n
 
 
C
A
S
T
(
j
u
l
i
a
n
d
a
y
(
o
r
d
e
r
_
d
a
t
e
)
 
-
 
j
u
l
i
a
n
d
a
y
(
\
n
 
 
 
 
L
A
G
(
o
r
d
e
r
_
d
a
t
e
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
 
_
_
_
)
\
n
 
 
)
 
A
S
 
I
N
T
E
G
E
R
)
 
A
S
 
d
a
y
s
_
s
i
n
c
e
_
p
r
e
v
i
o
u
s
\
n
F
R
O
M
 
o
r
d
e
r
s
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
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
d
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
 
c
u
s
t
o
m
e
r
_
i
d
,
 
o
r
d
e
r
_
d
a
t
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
 
c
u
s
t
o
m
e
r
_
i
d
,
 
o
r
d
e
r
_
d
a
t
e
,
 
C
A
S
T
(
j
u
l
i
a
n
d
a
y
(
o
r
d
e
r
_
d
a
t
e
)
 
-
 
j
u
l
i
a
n
d
a
y
(
L
A
G
(
o
r
d
e
r
_
d
a
t
e
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
u
s
t
o
m
e
r
_
i
d
 
O
R
D
E
R
 
B
Y
 
o
r
d
e
r
_
d
a
t
e
)
)
 
A
S
 
I
N
T
E
G
E
R
)
 
A
S
 
d
a
y
s
_
s
i
n
c
e
_
p
r
e
v
i
o
u
s
 
F
R
O
M
 
o
r
d
e
r
s
 
W
H
E
R
E
 
s
t
a
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
d
'
 
O
R
D
E
R
 
B
Y
 
c
u
s
t
o
m
e
r
_
i
d
,
 
o
r
d
e
r
_
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
L
A
G
(
o
r
d
e
r
_
d
a
t
e
)
 
g
e
t
s
 
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
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
 
d
a
t
e
 
f
o
r
 
e
a
c
h
 
c
u
s
t
o
m
e
r
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
 
c
u
s
t
o
m
e
r
_
i
d
 
k
e
e
p
s
 
e
a
c
h
 
c
u
s
t
o
m
e
r
'
s
 
t
i
m
e
l
i
n
e
 
s
e
p
a
r
a
t
e
.
"
,


 
 
 
 
 
 
"
j
u
l
i
a
n
d
a
y
(
d
a
t
e
1
)
 
-
 
j
u
l
i
a
n
d
a
y
(
d
a
t
e
2
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
 
d
a
y
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
A
G
"
,
 
"
j
u
l
i
a
n
d
a
y
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
d
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
t
o
r
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
F
i
r
s
t
 
C
o
m
p
l
e
t
e
d
 
O
r
d
e
r
 
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
 
C
T
E
s
 
t
o
 
f
i
n
d
 
e
a
c
h
 
c
u
s
t
o
m
e
r
'
s
 
f
i
r
s
t
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
 
d
a
t
e
,
 
t
h
e
n
 
r
e
t
u
r
n
 
t
h
e
 
c
u
s
t
o
m
e
r
 
n
a
m
e
 
a
n
d
 
f
i
r
s
t
_
o
r
d
e
r
_
d
a
t
e
 
s
o
r
t
e
d
 
b
y
 
d
a
t
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
W
I
T
H
 
c
o
m
p
l
e
t
e
d
_
o
r
d
e
r
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
u
s
t
o
m
e
r
_
i
d
,
 
o
r
d
e
r
_
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
 
o
r
d
e
r
s
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
t
u
s
 
=
 
_
_
_
\
n
)
,
 
f
i
r
s
t
_
o
r
d
e
r
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
u
s
t
o
m
e
r
_
i
d
,
 
M
I
N
(
o
r
d
e
r
_
d
a
t
e
)
 
A
S
 
f
i
r
s
t
_
o
r
d
e
r
_
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
 
c
o
m
p
l
e
t
e
d
_
o
r
d
e
r
s
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
 
c
u
s
t
o
m
e
r
s
.
n
a
m
e
,
 
f
i
r
s
t
_
o
r
d
e
r
s
.
f
i
r
s
t
_
o
r
d
e
r
_
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
 
c
u
s
t
o
m
e
r
s
\
n
J
O
I
N
 
f
i
r
s
t
_
o
r
d
e
r
s
 
O
N
 
c
u
s
t
o
m
e
r
s
.
i
d
 
=
 
f
i
r
s
t
_
o
r
d
e
r
s
.
c
u
s
t
o
m
e
r
_
i
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
 
f
i
r
s
t
_
o
r
d
e
r
_
d
a
t
e
,
 
c
u
s
t
o
m
e
r
s
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
W
I
T
H
 
c
o
m
p
l
e
t
e
d
_
o
r
d
e
r
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
u
s
t
o
m
e
r
_
i
d
,
 
o
r
d
e
r
_
d
a
t
e
 
F
R
O
M
 
o
r
d
e
r
s
 
W
H
E
R
E
 
s
t
a
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
d
'
)
,
 
f
i
r
s
t
_
o
r
d
e
r
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
u
s
t
o
m
e
r
_
i
d
,
 
M
I
N
(
o
r
d
e
r
_
d
a
t
e
)
 
A
S
 
f
i
r
s
t
_
o
r
d
e
r
_
d
a
t
e
 
F
R
O
M
 
c
o
m
p
l
e
t
e
d
_
o
r
d
e
r
s
 
G
R
O
U
P
 
B
Y
 
c
u
s
t
o
m
e
r
_
i
d
)
 
S
E
L
E
C
T
 
c
u
s
t
o
m
e
r
s
.
n
a
m
e
,
 
f
i
r
s
t
_
o
r
d
e
r
s
.
f
i
r
s
t
_
o
r
d
e
r
_
d
a
t
e
 
F
R
O
M
 
c
u
s
t
o
m
e
r
s
 
J
O
I
N
 
f
i
r
s
t
_
o
r
d
e
r
s
 
O
N
 
c
u
s
t
o
m
e
r
s
.
i
d
 
=
 
f
i
r
s
t
_
o
r
d
e
r
s
.
c
u
s
t
o
m
e
r
_
i
d
 
O
R
D
E
R
 
B
Y
 
f
i
r
s
t
_
o
r
d
e
r
_
d
a
t
e
,
 
c
u
s
t
o
m
e
r
s
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
T
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
 
s
h
o
u
l
d
 
i
s
o
l
a
t
e
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
s
.
"
,


 
 
 
 
 
 
"
T
h
e
 
s
e
c
o
n
d
 
C
T
E
 
s
h
o
u
l
d
 
g
r
o
u
p
 
b
y
 
c
u
s
t
o
m
e
r
_
i
d
 
a
n
d
 
u
s
e
 
M
I
N
(
o
r
d
e
r
_
d
a
t
e
)
.
"
,


 
 
 
 
 
 
"
J
o
i
n
 
b
a
c
k
 
t
o
 
c
u
s
t
o
m
e
r
s
 
t
o
 
r
e
t
u
r
n
 
r
e
a
d
a
b
l
e
 
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
C
T
E
"
,
 
"
M
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
t
o
r
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
u
s
t
o
m
e
r
s
 
W
i
t
h
o
u
t
 
C
o
m
p
l
e
t
e
d
 
O
r
d
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
 
c
u
s
t
o
m
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
 
n
o
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
s
.
 
U
s
e
 
a
 
L
E
F
T
 
J
O
I
N
 
w
i
t
h
 
t
h
e
 
c
o
m
p
l
e
t
e
d
-
o
r
d
e
r
 
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
n
 
t
h
e
 
j
o
i
n
 
c
l
a
u
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
u
s
t
o
m
e
r
s
.
n
a
m
e
,
 
c
u
s
t
o
m
e
r
s
.
r
e
g
i
o
n
\
n
F
R
O
M
 
c
u
s
t
o
m
e
r
s
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
 
o
r
d
e
r
s
\
n
 
 
O
N
 
c
u
s
t
o
m
e
r
s
.
i
d
 
=
 
o
r
d
e
r
s
.
c
u
s
t
o
m
e
r
_
i
d
\
n
 
 
A
N
D
 
o
r
d
e
r
s
.
s
t
a
t
u
s
 
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
 
o
r
d
e
r
s
.
i
d
 
I
S
 
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
u
s
t
o
m
e
r
s
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
 
c
u
s
t
o
m
e
r
s
.
n
a
m
e
,
 
c
u
s
t
o
m
e
r
s
.
r
e
g
i
o
n
 
F
R
O
M
 
c
u
s
t
o
m
e
r
s
 
L
E
F
T
 
J
O
I
N
 
o
r
d
e
r
s
 
O
N
 
c
u
s
t
o
m
e
r
s
.
i
d
 
=
 
o
r
d
e
r
s
.
c
u
s
t
o
m
e
r
_
i
d
 
A
N
D
 
o
r
d
e
r
s
.
s
t
a
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
d
'
 
W
H
E
R
E
 
o
r
d
e
r
s
.
i
d
 
I
S
 
N
U
L
L
 
O
R
D
E
R
 
B
Y
 
c
u
s
t
o
m
e
r
s
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
K
e
e
p
 
t
h
e
 
s
t
a
t
u
s
 
f
i
l
t
e
r
 
i
n
 
t
h
e
 
O
N
 
c
l
a
u
s
e
 
s
o
 
c
u
s
t
o
m
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
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
s
 
r
e
m
a
i
n
 
i
n
 
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


 
 
 
 
 
 
"
M
a
t
c
h
e
d
 
o
r
d
e
r
 
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
 
N
U
L
L
 
w
h
e
n
 
t
h
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
i
n
d
s
 
n
o
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
.
"
,


 
 
 
 
 
 
"
W
H
E
R
E
 
o
r
d
e
r
s
.
i
d
 
I
S
 
N
U
L
L
 
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
 
t
h
o
s
e
 
u
n
m
a
t
c
h
e
d
 
c
u
s
t
o
m
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
a
n
t
i
 
j
o
i
n
"
,
 
"
N
U
L
L
"
,
 
"
O
N
 
c
l
a
u
s
e
 
f
i
l
t
e
r
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
s
t
o
r
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
R
e
g
i
o
n
a
l
 
C
u
s
t
o
m
e
r
 
R
e
v
e
n
u
e
 
R
a
n
k
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
a
l
c
u
l
a
t
e
 
c
o
m
p
l
e
t
e
d
-
o
r
d
e
r
 
r
e
v
e
n
u
e
 
b
y
 
c
u
s
t
o
m
e
r
,
 
t
h
e
n
 
r
a
n
k
 
c
u
s
t
o
m
e
r
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
 
r
e
g
i
o
n
 
b
y
 
r
e
v
e
n
u
e
 
u
s
i
n
g
 
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
u
s
t
o
m
e
r
_
r
e
v
e
n
u
e
 
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
u
s
t
o
m
e
r
s
.
i
d
,
 
c
u
s
t
o
m
e
r
s
.
n
a
m
e
,
 
c
u
s
t
o
m
e
r
s
.
r
e
g
i
o
n
,
\
n
 
 
 
 
S
U
M
(
o
r
d
e
r
s
.
t
o
t
a
l
)
 
A
S
 
r
e
v
e
n
u
e
\
n
 
 
F
R
O
M
 
c
u
s
t
o
m
e
r
s
\
n
 
 
J
O
I
N
 
o
r
d
e
r
s
 
O
N
 
c
u
s
t
o
m
e
r
s
.
i
d
 
=
 
o
r
d
e
r
s
.
c
u
s
t
o
m
e
r
_
i
d
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
e
r
s
.
s
t
a
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
d
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
 
c
u
s
t
o
m
e
r
s
.
i
d
,
 
c
u
s
t
o
m
e
r
s
.
n
a
m
e
,
 
c
u
s
t
o
m
e
r
s
.
r
e
g
i
o
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
 
r
e
g
i
o
n
,
 
R
O
U
N
D
(
r
e
v
e
n
u
e
,
 
2
)
 
A
S
 
r
e
v
e
n
u
e
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
 
r
e
v
e
n
u
e
 
D
E
S
C
)
 
A
S
 
r
e
g
i
o
n
_
r
a
n
k
\
n
F
R
O
M
 
c
u
s
t
o
m
e
r
_
r
e
v
e
n
u
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
 
r
e
g
i
o
n
,
 
r
e
g
i
o
n
_
r
a
n
k
,
 
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
W
I
T
H
 
c
u
s
t
o
m
e
r
_
r
e
v
e
n
u
e
 
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
u
s
t
o
m
e
r
s
.
i
d
,
 
c
u
s
t
o
m
e
r
s
.
n
a
m
e
,
 
c
u
s
t
o
m
e
r
s
.
r
e
g
i
o
n
,
 
S
U
M
(
o
r
d
e
r
s
.
t
o
t
a
l
)
 
A
S
 
r
e
v
e
n
u
e
 
F
R
O
M
 
c
u
s
t
o
m
e
r
s
 
J
O
I
N
 
o
r
d
e
r
s
 
O
N
 
c
u
s
t
o
m
e
r
s
.
i
d
 
=
 
o
r
d
e
r
s
.
c
u
s
t
o
m
e
r
_
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
e
r
s
.
s
t
a
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
d
'
 
G
R
O
U
P
 
B
Y
 
c
u
s
t
o
m
e
r
s
.
i
d
,
 
c
u
s
t
o
m
e
r
s
.
n
a
m
e
,
 
c
u
s
t
o
m
e
r
s
.
r
e
g
i
o
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
 
r
e
g
i
o
n
,
 
R
O
U
N
D
(
r
e
v
e
n
u
e
,
 
2
)
 
A
S
 
r
e
v
e
n
u
e
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
 
r
e
g
i
o
n
 
O
R
D
E
R
 
B
Y
 
r
e
v
e
n
u
e
 
D
E
S
C
)
 
A
S
 
r
e
g
i
o
n
_
r
a
n
k
 
F
R
O
M
 
c
u
s
t
o
m
e
r
_
r
e
v
e
n
u
e
 
O
R
D
E
R
 
B
Y
 
r
e
g
i
o
n
,
 
r
e
g
i
o
n
_
r
a
n
k
,
 
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
r
s
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
 
c
o
m
p
l
e
t
e
d
 
r
e
v
e
n
u
e
 
p
e
r
 
c
u
s
t
o
m
e
r
 
i
n
 
a
 
C
T
E
.
"
,


 
 
 
 
 
 
"
U
s
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
 
s
o
 
r
a
n
k
i
n
g
 
u
s
e
s
 
t
h
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
 
r
e
v
e
n
u
e
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
 
r
e
g
i
o
n
 
r
e
s
t
a
r
t
s
 
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
 
r
e
g
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
C
T
E
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
S
U
M
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
t
o
r
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
-
1
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
t
e
g
o
r
y
 
R
e
v
e
n
u
e
 
S
h
a
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
C
a
l
c
u
l
a
t
e
 
c
o
m
p
l
e
t
e
d
-
o
r
d
e
r
 
r
e
v
e
n
u
e
 
b
y
 
p
r
o
d
u
c
t
 
c
a
t
e
g
o
r
y
,
 
t
h
e
n
 
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
t
e
g
o
r
y
'
s
 
r
e
v
e
n
u
e
 
a
n
d
 
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
 
s
h
a
r
e
 
o
f
 
t
o
t
a
l
 
c
a
t
e
g
o
r
y
 
r
e
v
e
n
u
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
W
I
T
H
 
c
a
t
e
g
o
r
y
_
r
e
v
e
n
u
e
 
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
 
p
r
o
d
u
c
t
s
.
c
a
t
e
g
o
r
y
,
\
n
 
 
 
 
S
U
M
(
o
r
d
e
r
_
i
t
e
m
s
.
q
u
a
n
t
i
t
y
 
*
 
o
r
d
e
r
_
i
t
e
m
s
.
u
n
i
t
_
p
r
i
c
e
)
 
A
S
 
r
e
v
e
n
u
e
\
n
 
 
F
R
O
M
 
o
r
d
e
r
_
i
t
e
m
s
\
n
 
 
J
O
I
N
 
p
r
o
d
u
c
t
s
 
O
N
 
o
r
d
e
r
_
i
t
e
m
s
.
s
k
u
 
=
 
p
r
o
d
u
c
t
s
.
s
k
u
\
n
 
 
J
O
I
N
 
o
r
d
e
r
s
 
O
N
 
o
r
d
e
r
_
i
t
e
m
s
.
o
r
d
e
r
_
i
d
 
=
 
o
r
d
e
r
s
.
i
d
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
e
r
s
.
s
t
a
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
d
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
 
p
r
o
d
u
c
t
s
.
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
a
t
e
g
o
r
y
,
 
R
O
U
N
D
(
r
e
v
e
n
u
e
,
 
2
)
 
A
S
 
r
e
v
e
n
u
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
r
e
v
e
n
u
e
 
*
 
1
0
0
.
0
 
/
 
S
U
M
(
r
e
v
e
n
u
e
)
 
O
V
E
R
 
(
)
,
 
_
_
_
)
 
A
S
 
p
c
t
_
o
f
_
r
e
v
e
n
u
e
\
n
F
R
O
M
 
c
a
t
e
g
o
r
y
_
r
e
v
e
n
u
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
 
r
e
v
e
n
u
e
 
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
a
t
e
g
o
r
y
_
r
e
v
e
n
u
e
 
A
S
 
(
S
E
L
E
C
T
 
p
r
o
d
u
c
t
s
.
c
a
t
e
g
o
r
y
,
 
S
U
M
(
o
r
d
e
r
_
i
t
e
m
s
.
q
u
a
n
t
i
t
y
 
*
 
o
r
d
e
r
_
i
t
e
m
s
.
u
n
i
t
_
p
r
i
c
e
)
 
A
S
 
r
e
v
e
n
u
e
 
F
R
O
M
 
o
r
d
e
r
_
i
t
e
m
s
 
J
O
I
N
 
p
r
o
d
u
c
t
s
 
O
N
 
o
r
d
e
r
_
i
t
e
m
s
.
s
k
u
 
=
 
p
r
o
d
u
c
t
s
.
s
k
u
 
J
O
I
N
 
o
r
d
e
r
s
 
O
N
 
o
r
d
e
r
_
i
t
e
m
s
.
o
r
d
e
r
_
i
d
 
=
 
o
r
d
e
r
s
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
e
r
s
.
s
t
a
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
d
'
 
G
R
O
U
P
 
B
Y
 
p
r
o
d
u
c
t
s
.
c
a
t
e
g
o
r
y
)
 
S
E
L
E
C
T
 
c
a
t
e
g
o
r
y
,
 
R
O
U
N
D
(
r
e
v
e
n
u
e
,
 
2
)
 
A
S
 
r
e
v
e
n
u
e
,
 
R
O
U
N
D
(
r
e
v
e
n
u
e
 
*
 
1
0
0
.
0
 
/
 
S
U
M
(
r
e
v
e
n
u
e
)
 
O
V
E
R
 
(
)
,
 
2
)
 
A
S
 
p
c
t
_
o
f
_
r
e
v
e
n
u
e
 
F
R
O
M
 
c
a
t
e
g
o
r
y
_
r
e
v
e
n
u
e
 
O
R
D
E
R
 
B
Y
 
r
e
v
e
n
u
e
 
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
 
o
r
d
e
r
_
i
t
e
m
s
 
q
u
a
n
t
i
t
y
 
t
i
m
e
s
 
u
n
i
t
_
p
r
i
c
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
 
l
i
n
e
 
r
e
v
e
n
u
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
 
t
h
r
o
u
g
h
 
t
h
e
 
o
r
d
e
r
s
 
t
a
b
l
e
 
s
o
 
r
e
f
u
n
d
e
d
 
a
n
d
 
p
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
s
 
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


 
 
 
 
 
 
"
S
U
M
(
r
e
v
e
n
u
e
)
 
O
V
E
R
 
(
)
 
g
i
v
e
s
 
t
h
e
 
t
o
t
a
l
 
a
c
r
o
s
s
 
a
l
l
 
c
a
t
e
g
o
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
C
T
E
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
w
i
n
d
o
w
 
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
t
o
r
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
-
1
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
6
,


 
 
 
 
t
i
t
l
e
:
 
"
H
i
g
h
-
V
a
l
u
e
 
C
u
s
t
o
m
e
r
s
 
w
i
t
h
 
E
X
I
S
T
S
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
t
u
r
n
 
c
u
s
t
o
m
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
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
 
a
b
o
v
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
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
 
t
o
t
a
l
.
 
U
s
e
 
E
X
I
S
T
S
 
a
n
d
 
a
 
s
c
a
l
a
r
 
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
 
r
e
g
i
o
n
\
n
F
R
O
M
 
c
u
s
t
o
m
e
r
s
\
n
W
H
E
R
E
 
E
X
I
S
T
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
 
1
\
n
 
 
F
R
O
M
 
o
r
d
e
r
s
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
e
r
s
.
c
u
s
t
o
m
e
r
_
i
d
 
=
 
c
u
s
t
o
m
e
r
s
.
i
d
\
n
 
 
 
 
A
N
D
 
o
r
d
e
r
s
.
s
t
a
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
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
e
r
s
.
t
o
t
a
l
 
>
 
(
\
n
 
 
 
 
 
 
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
t
o
t
a
l
)
 
F
R
O
M
 
o
r
d
e
r
s
 
W
H
E
R
E
 
s
t
a
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
d
'
\
n
 
 
 
 
)
\
n
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
 
r
e
g
i
o
n
 
F
R
O
M
 
c
u
s
t
o
m
e
r
s
 
W
H
E
R
E
 
E
X
I
S
T
S
 
(
S
E
L
E
C
T
 
1
 
F
R
O
M
 
o
r
d
e
r
s
 
W
H
E
R
E
 
o
r
d
e
r
s
.
c
u
s
t
o
m
e
r
_
i
d
 
=
 
c
u
s
t
o
m
e
r
s
.
i
d
 
A
N
D
 
o
r
d
e
r
s
.
s
t
a
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
d
'
 
A
N
D
 
o
r
d
e
r
s
.
t
o
t
a
l
 
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
t
o
t
a
l
)
 
F
R
O
M
 
o
r
d
e
r
s
 
W
H
E
R
E
 
s
t
a
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
d
'
)
)
 
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
E
X
I
S
T
S
 
c
h
e
c
k
s
 
w
h
e
t
h
e
r
 
t
h
e
 
c
o
r
r
e
l
a
t
e
d
 
s
u
b
q
u
e
r
y
 
r
e
t
u
r
n
s
 
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
 
s
c
a
l
a
r
 
s
u
b
q
u
e
r
y
 
s
h
o
u
l
d
 
c
a
l
c
u
l
a
t
e
 
A
V
G
(
t
o
t
a
l
)
 
f
o
r
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
s
.
"
,


 
 
 
 
 
 
"
C
o
r
r
e
l
a
t
e
 
o
r
d
e
r
s
 
b
a
c
k
 
t
o
 
t
h
e
 
o
u
t
e
r
 
c
u
s
t
o
m
e
r
s
 
r
o
w
 
w
i
t
h
 
c
u
s
t
o
m
e
r
_
i
d
 
=
 
c
u
s
t
o
m
e
r
s
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
E
X
I
S
T
S
"
,
 
"
c
o
r
r
e
l
a
t
e
d
 
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
,
 
"
s
c
a
l
a
r
 
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
s
t
o
r
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
-
1
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
7
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
d
e
x
-
A
s
s
i
s
t
e
d
 
O
r
d
e
r
 
L
o
o
k
u
p
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
p
o
s
i
t
e
 
i
n
d
e
x
 
n
a
m
e
d
 
i
d
x
_
o
r
d
e
r
s
_
c
u
s
t
o
m
e
r
_
d
a
t
e
 
o
n
 
c
u
s
t
o
m
e
r
_
i
d
 
a
n
d
 
o
r
d
e
r
_
d
a
t
e
,
 
t
h
e
n
 
u
s
e
 
E
X
P
L
A
I
N
 
Q
U
E
R
Y
 
P
L
A
N
 
t
o
 
i
n
s
p
e
c
t
 
a
 
f
i
l
t
e
r
e
d
 
o
r
d
e
r
 
l
o
o
k
u
p
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
C
R
E
A
T
E
 
I
N
D
E
X
 
I
F
 
N
O
T
 
E
X
I
S
T
S
 
i
d
x
_
o
r
d
e
r
s
_
c
u
s
t
o
m
e
r
_
d
a
t
e
\
n
O
N
 
o
r
d
e
r
s
(
_
_
_
,
 
_
_
_
)
;
\
n
\
n
E
X
P
L
A
I
N
 
Q
U
E
R
Y
 
P
L
A
N
\
n
S
E
L
E
C
T
 
i
d
,
 
o
r
d
e
r
_
d
a
t
e
,
 
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
 
o
r
d
e
r
s
\
n
W
H
E
R
E
 
c
u
s
t
o
m
e
r
_
i
d
 
=
 
1
\
n
 
 
A
N
D
 
o
r
d
e
r
_
d
a
t
e
 
>
=
 
'
2
0
2
4
-
0
2
-
0
1
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
 
o
r
d
e
r
_
d
a
t
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
C
R
E
A
T
E
 
I
N
D
E
X
 
I
F
 
N
O
T
 
E
X
I
S
T
S
 
i
d
x
_
o
r
d
e
r
s
_
c
u
s
t
o
m
e
r
_
d
a
t
e
 
O
N
 
o
r
d
e
r
s
(
c
u
s
t
o
m
e
r
_
i
d
,
 
o
r
d
e
r
_
d
a
t
e
)
;
 
E
X
P
L
A
I
N
 
Q
U
E
R
Y
 
P
L
A
N
 
S
E
L
E
C
T
 
i
d
,
 
o
r
d
e
r
_
d
a
t
e
,
 
t
o
t
a
l
 
F
R
O
M
 
o
r
d
e
r
s
 
W
H
E
R
E
 
c
u
s
t
o
m
e
r
_
i
d
 
=
 
1
 
A
N
D
 
o
r
d
e
r
_
d
a
t
e
 
>
=
 
'
2
0
2
4
-
0
2
-
0
1
'
 
O
R
D
E
R
 
B
Y
 
o
r
d
e
r
_
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
U
s
e
 
I
F
 
N
O
T
 
E
X
I
S
T
S
 
s
o
 
r
e
p
e
a
t
e
d
 
r
u
n
s
 
d
o
 
n
o
t
 
f
a
i
l
 
i
f
 
t
h
e
 
i
n
d
e
x
 
a
l
r
e
a
d
y
 
e
x
i
s
t
s
.
"
,


 
 
 
 
 
 
"
T
h
e
 
l
e
f
t
m
o
s
t
 
i
n
d
e
x
e
d
 
c
o
l
u
m
n
 
s
h
o
u
l
d
 
m
a
t
c
h
 
t
h
e
 
e
q
u
a
l
i
t
y
 
f
i
l
t
e
r
:
 
c
u
s
t
o
m
e
r
_
i
d
.
"
,


 
 
 
 
 
 
"
E
X
P
L
A
I
N
 
Q
U
E
R
Y
 
P
L
A
N
 
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
 
q
u
e
r
y
 
p
l
a
n
 
a
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
 
s
e
t
 
f
o
r
 
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
 
I
N
D
E
X
"
,
 
"
E
X
P
L
A
I
N
 
Q
U
E
R
Y
 
P
L
A
N
"
,
 
"
c
o
m
p
o
s
i
t
e
 
i
n
d
e
x
"
,
 
"
o
p
t
i
m
i
z
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
s
t
o
r
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
-
1
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
8
,


 
 
 
 
t
i
t
l
e
:
 
"
S
i
g
n
u
p
 
C
o
h
o
r
t
 
C
o
n
v
e
r
s
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
G
r
o
u
p
 
c
u
s
t
o
m
e
r
s
 
b
y
 
s
i
g
n
u
p
 
m
o
n
t
h
 
a
n
d
 
c
a
l
c
u
l
a
t
e
 
h
o
w
 
m
a
n
y
 
h
a
v
e
 
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
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
.
 
S
h
o
w
 
c
u
s
t
o
m
e
r
s
,
 
c
o
n
v
e
r
t
e
d
_
c
u
s
t
o
m
e
r
s
,
 
a
n
d
 
c
o
n
v
e
r
s
i
o
n
_
p
c
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
W
I
T
H
 
f
i
r
s
t
_
c
o
m
p
l
e
t
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
 
c
u
s
t
o
m
e
r
_
i
d
,
 
M
I
N
(
o
r
d
e
r
_
d
a
t
e
)
 
A
S
 
f
i
r
s
t
_
o
r
d
e
r
_
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
 
o
r
d
e
r
s
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
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
d
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
 
c
u
s
t
o
m
e
r
_
i
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
t
r
f
t
i
m
e
(
'
%
Y
-
%
m
'
,
 
c
u
s
t
o
m
e
r
s
.
s
i
g
n
u
p
_
d
a
t
e
)
 
A
S
 
s
i
g
n
u
p
_
m
o
n
t
h
,
\
n
 
 
C
O
U
N
T
(
c
u
s
t
o
m
e
r
s
.
i
d
)
 
A
S
 
c
u
s
t
o
m
e
r
s
,
\
n
 
 
C
O
U
N
T
(
f
i
r
s
t
_
c
o
m
p
l
e
t
e
d
.
c
u
s
t
o
m
e
r
_
i
d
)
 
A
S
 
c
o
n
v
e
r
t
e
d
_
c
u
s
t
o
m
e
r
s
,
\
n
 
 
R
O
U
N
D
(
C
O
U
N
T
(
f
i
r
s
t
_
c
o
m
p
l
e
t
e
d
.
c
u
s
t
o
m
e
r
_
i
d
)
 
*
 
1
0
0
.
0
 
/
 
C
O
U
N
T
(
c
u
s
t
o
m
e
r
s
.
i
d
)
,
 
_
_
_
)
 
A
S
 
c
o
n
v
e
r
s
i
o
n
_
p
c
t
\
n
F
R
O
M
 
c
u
s
t
o
m
e
r
s
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
 
f
i
r
s
t
_
c
o
m
p
l
e
t
e
d
 
O
N
 
c
u
s
t
o
m
e
r
s
.
i
d
 
=
 
f
i
r
s
t
_
c
o
m
p
l
e
t
e
d
.
c
u
s
t
o
m
e
r
_
i
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
 
s
i
g
n
u
p
_
m
o
n
t
h
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
i
g
n
u
p
_
m
o
n
t
h
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
 
f
i
r
s
t
_
c
o
m
p
l
e
t
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
 
c
u
s
t
o
m
e
r
_
i
d
,
 
M
I
N
(
o
r
d
e
r
_
d
a
t
e
)
 
A
S
 
f
i
r
s
t
_
o
r
d
e
r
_
d
a
t
e
 
F
R
O
M
 
o
r
d
e
r
s
 
W
H
E
R
E
 
s
t
a
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
d
'
 
G
R
O
U
P
 
B
Y
 
c
u
s
t
o
m
e
r
_
i
d
)
 
S
E
L
E
C
T
 
s
t
r
f
t
i
m
e
(
'
%
Y
-
%
m
'
,
 
c
u
s
t
o
m
e
r
s
.
s
i
g
n
u
p
_
d
a
t
e
)
 
A
S
 
s
i
g
n
u
p
_
m
o
n
t
h
,
 
C
O
U
N
T
(
c
u
s
t
o
m
e
r
s
.
i
d
)
 
A
S
 
c
u
s
t
o
m
e
r
s
,
 
C
O
U
N
T
(
f
i
r
s
t
_
c
o
m
p
l
e
t
e
d
.
c
u
s
t
o
m
e
r
_
i
d
)
 
A
S
 
c
o
n
v
e
r
t
e
d
_
c
u
s
t
o
m
e
r
s
,
 
R
O
U
N
D
(
C
O
U
N
T
(
f
i
r
s
t
_
c
o
m
p
l
e
t
e
d
.
c
u
s
t
o
m
e
r
_
i
d
)
 
*
 
1
0
0
.
0
 
/
 
C
O
U
N
T
(
c
u
s
t
o
m
e
r
s
.
i
d
)
,
 
1
)
 
A
S
 
c
o
n
v
e
r
s
i
o
n
_
p
c
t
 
F
R
O
M
 
c
u
s
t
o
m
e
r
s
 
L
E
F
T
 
J
O
I
N
 
f
i
r
s
t
_
c
o
m
p
l
e
t
e
d
 
O
N
 
c
u
s
t
o
m
e
r
s
.
i
d
 
=
 
f
i
r
s
t
_
c
o
m
p
l
e
t
e
d
.
c
u
s
t
o
m
e
r
_
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
i
g
n
u
p
_
m
o
n
t
h
 
O
R
D
E
R
 
B
Y
 
s
i
g
n
u
p
_
m
o
n
t
h
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
 
C
T
E
 
t
o
 
r
e
d
u
c
e
 
e
a
c
h
 
c
o
n
v
e
r
t
e
d
 
c
u
s
t
o
m
e
r
 
t
o
 
o
n
e
 
f
i
r
s
t
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
 
r
o
w
.
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
 
k
e
e
p
s
 
c
u
s
t
o
m
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
 
n
o
t
 
c
o
n
v
e
r
t
e
d
 
y
e
t
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
f
i
r
s
t
_
c
o
m
p
l
e
t
e
d
.
c
u
s
t
o
m
e
r
_
i
d
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
 
c
u
s
t
o
m
e
r
s
 
w
i
t
h
 
a
 
c
o
m
p
l
e
t
e
d
 
o
r
d
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
c
o
h
o
r
t
 
a
n
a
l
y
s
i
s
"
,
 
"
C
T
E
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
d
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
t
o
r
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
-
2
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
a
d
v
a
n
c
e
d
-
s
q
l
-
r
e
v
i
e
w
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
9
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
o
d
u
c
t
s
 
N
e
v
e
r
 
S
o
l
d
 
i
n
 
C
o
m
p
l
e
t
e
d
 
O
r
d
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
 
p
r
o
d
u
c
t
s
 
t
h
a
t
 
h
a
v
e
 
n
e
v
e
r
 
a
p
p
e
a
r
e
d
 
o
n
 
a
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
.
 
U
s
e
 
N
O
T
 
E
X
I
S
T
S
 
w
i
t
h
 
a
 
j
o
i
n
 
i
n
s
i
d
e
 
t
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
r
o
d
u
c
t
s
.
s
k
u
,
 
p
r
o
d
u
c
t
s
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
 
p
r
o
d
u
c
t
s
\
n
W
H
E
R
E
 
N
O
T
 
E
X
I
S
T
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
 
1
\
n
 
 
F
R
O
M
 
o
r
d
e
r
_
i
t
e
m
s
\
n
 
 
J
O
I
N
 
o
r
d
e
r
s
 
O
N
 
o
r
d
e
r
s
.
i
d
 
=
 
o
r
d
e
r
_
i
t
e
m
s
.
o
r
d
e
r
_
i
d
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
e
r
_
i
t
e
m
s
.
s
k
u
 
=
 
p
r
o
d
u
c
t
s
.
s
k
u
\
n
 
 
 
 
A
N
D
 
o
r
d
e
r
s
.
s
t
a
t
u
s
 
=
 
_
_
_
\
n
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
 
p
r
o
d
u
c
t
s
.
s
k
u
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
r
o
d
u
c
t
s
.
s
k
u
,
 
p
r
o
d
u
c
t
s
.
n
a
m
e
 
F
R
O
M
 
p
r
o
d
u
c
t
s
 
W
H
E
R
E
 
N
O
T
 
E
X
I
S
T
S
 
(
S
E
L
E
C
T
 
1
 
F
R
O
M
 
o
r
d
e
r
_
i
t
e
m
s
 
J
O
I
N
 
o
r
d
e
r
s
 
O
N
 
o
r
d
e
r
s
.
i
d
 
=
 
o
r
d
e
r
_
i
t
e
m
s
.
o
r
d
e
r
_
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
e
r
_
i
t
e
m
s
.
s
k
u
 
=
 
p
r
o
d
u
c
t
s
.
s
k
u
 
A
N
D
 
o
r
d
e
r
s
.
s
t
a
t
u
s
 
=
 
'
c
o
m
p
l
e
t
e
d
'
)
 
O
R
D
E
R
 
B
Y
 
p
r
o
d
u
c
t
s
.
s
k
u
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
O
T
 
E
X
I
S
T
S
 
r
e
t
u
r
n
s
 
o
u
t
e
r
 
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
n
d
s
 
n
o
 
m
a
t
c
h
.
"
,


 
 
 
 
 
 
"
J
o
i
n
 
o
r
d
e
r
_
i
t
e
m
s
 
t
o
 
o
r
d
e
r
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
 
s
u
b
q
u
e
r
y
 
s
o
 
y
o
u
 
c
a
n
 
f
i
l
t
e
r
 
t
o
 
c
o
m
p
l
e
t
e
d
 
o
r
d
e
r
s
.
"
,


 
 
 
 
 
 
"
C
o
r
r
e
l
a
t
e
 
t
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
 
w
i
t
h
 
o
r
d
e
r
_
i
t
e
m
s
.
s
k
u
 
=
 
p
r
o
d
u
c
t
s
.
s
k
u
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
O
T
 
E
X
I
S
T
S
"
,
 
"
c
o
r
r
e
l
a
t
e
d
 
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
J
O
I
N
"
,
 
"
a
n
t
i
 
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
s
t
o
r
e
"
,


 
 
}
,


]
;
