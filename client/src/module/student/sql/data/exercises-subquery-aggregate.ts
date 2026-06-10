
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
u
b
q
u
e
r
y
A
g
g
r
e
g
a
t
e
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
i
n
-
s
e
l
e
c
t
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
i
n
-
s
e
l
e
c
t
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
i
g
g
e
r
 
t
h
a
n
 
R
u
s
s
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
L
i
s
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
 
w
h
e
r
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
 
i
s
 
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
 
t
h
a
t
 
o
f
 
R
u
s
s
i
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
R
u
s
s
i
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
 
g
e
t
 
R
u
s
s
i
a
'
s
 
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
 
g
o
e
s
 
i
n
s
i
d
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
R
u
s
s
i
a
'
 
g
i
v
e
s
 
y
o
u
 
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
 
c
o
m
p
a
r
e
 
a
g
a
i
n
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
i
n
-
s
e
l
e
c
t
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
i
n
-
s
e
l
e
c
t
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
i
c
h
e
r
 
t
h
a
n
 
U
K
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
 
i
n
 
E
u
r
o
p
e
 
w
i
t
h
 
a
 
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
 
t
h
a
t
 
o
f
 
t
h
e
 
U
n
i
t
e
d
 
K
i
n
g
d
o
m
.
 
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
 
A
N
D
 
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
 
>
 
(
S
E
L
E
C
T
 
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
 
n
a
m
e
 
=
 
'
U
n
i
t
e
d
 
K
i
n
g
d
o
m
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
a
l
c
u
l
a
t
e
 
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
 
a
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
 
a
l
s
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
 
f
o
r
 
t
h
e
 
U
K
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
 
E
u
r
o
p
e
 
w
i
t
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
 
=
 
'
E
u
r
o
p
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
s
e
l
e
c
t
-
i
n
-
s
e
l
e
c
t
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
i
n
-
s
e
l
e
c
t
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
e
i
g
h
b
o
u
r
s
 
o
f
 
A
r
g
e
n
t
i
n
a
 
a
n
d
 
A
u
s
t
r
a
l
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
L
i
s
t
 
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
 
e
i
t
h
e
r
 
A
r
g
e
n
t
i
n
a
 
o
r
 
A
u
s
t
r
a
l
i
a
.
 
O
r
d
e
r
 
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
 
I
N
 
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
r
g
e
n
t
i
n
a
'
,
 
'
A
u
s
t
r
a
l
i
a
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
F
i
r
s
t
 
f
i
n
d
 
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
s
 
o
f
 
A
r
g
e
n
t
i
n
a
 
a
n
d
 
A
u
s
t
r
a
l
i
a
 
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
.
"
,


 
 
 
 
 
 
"
T
h
e
n
 
s
e
l
e
c
t
 
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
s
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
 
t
o
 
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
s
e
l
e
c
t
-
i
n
-
s
e
l
e
c
t
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
i
n
-
s
e
l
e
c
t
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
B
e
t
w
e
e
n
 
C
a
n
a
d
a
 
a
n
d
 
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
 
b
e
t
w
e
e
n
 
t
h
a
t
 
o
f
 
C
a
n
a
d
a
 
a
n
d
 
P
o
l
a
n
d
 
(
e
x
c
l
u
s
i
v
e
)
.
 
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
 
(
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
 
_
_
_
)
\
n
 
 
 
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
 
<
 
(
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
C
a
n
a
d
a
'
)
 
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
 
<
 
(
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
P
o
l
a
n
d
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
w
o
 
s
u
b
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
 
C
a
n
a
d
a
'
s
 
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
 
o
n
e
 
f
o
r
 
P
o
l
a
n
d
'
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
 
u
s
i
n
g
 
>
 
a
n
d
 
<
 
(
e
x
c
l
u
s
i
v
e
 
r
a
n
g
e
)
.
"
,


 
 
 
 
 
 
"
C
h
e
c
k
 
w
h
i
c
h
 
c
o
u
n
t
r
y
 
h
a
s
 
t
h
e
 
l
a
r
g
e
r
 
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
 
t
o
 
s
e
t
 
t
h
e
 
c
o
r
r
e
c
t
 
d
i
r
e
c
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
i
n
-
s
e
l
e
c
t
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
i
n
-
s
e
l
e
c
t
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
 
a
s
 
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
 
i
n
 
E
u
r
o
p
e
 
a
s
 
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
 
o
f
 
G
e
r
m
a
n
y
'
s
 
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
 
F
o
r
m
a
t
 
i
t
 
u
s
i
n
g
 
t
h
e
 
|
|
 
o
p
e
r
a
t
o
r
 
a
n
d
 
'
%
'
 
s
i
g
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
T
(
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
)
,
 
0
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
 
|
|
 
'
%
'
 
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
C
a
l
c
u
l
a
t
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
:
 
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
 
g
e
r
m
a
n
y
_
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
 
G
e
r
m
a
n
y
'
s
 
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
 
|
|
 
t
o
 
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
 
t
h
e
 
'
%
'
 
s
y
m
b
o
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
s
t
r
i
n
g
 
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
e
l
e
c
t
-
i
n
-
s
e
l
e
c
t
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
i
n
-
s
e
l
e
c
t
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
B
i
g
g
e
r
 
t
h
a
n
 
E
v
e
r
y
 
C
o
u
n
t
r
y
 
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
W
h
i
c
h
 
c
o
u
n
t
r
i
e
s
 
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
 
E
u
r
o
p
e
?
 
L
i
s
t
 
t
h
e
 
n
a
m
e
 
o
n
l
y
.
 
(
S
o
m
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
 
m
a
y
 
h
a
v
e
 
N
U
L
L
 
G
D
P
.
)
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
 
g
d
p
 
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
 
M
A
X
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
 
g
d
p
 
>
 
(
S
E
L
E
C
T
 
M
A
X
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
 
M
A
X
(
g
d
p
)
 
t
o
 
f
i
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
 
G
D
P
 
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


 
 
 
 
 
 
"
'
G
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
 
e
v
e
r
y
'
 
m
e
a
n
s
 
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
 
t
h
e
 
m
a
x
i
m
u
m
.
"
,


 
 
 
 
 
 
"
A
 
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
 
M
A
X
 
a
v
o
i
d
s
 
n
e
e
d
i
n
g
 
A
L
L
 
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
M
A
X
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
i
n
-
s
e
l
e
c
t
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
i
n
-
s
e
l
e
c
t
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
L
a
r
g
e
s
t
 
i
n
 
E
a
c
h
 
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
i
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
 
(
b
y
 
a
r
e
a
)
 
i
n
 
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
 
a
n
d
 
a
r
e
a
.
 
U
s
e
 
a
 
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
 
x
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
=
 
A
L
L
 
(
\
n
 
 
 
S
E
L
E
C
T
 
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
 
y
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
 
x
 
W
H
E
R
E
 
a
r
e
a
 
=
 
(
S
E
L
E
C
T
 
M
A
X
(
a
r
e
a
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
 
y
 
W
H
E
R
E
 
y
.
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
 
x
.
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
'
s
 
r
o
w
.
"
,


 
 
 
 
 
 
"
F
o
r
 
e
a
c
h
 
r
o
w
,
 
f
i
n
d
 
t
h
e
 
M
A
X
 
a
r
e
a
 
i
n
 
t
h
e
 
s
a
m
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
.
"
,


 
 
 
 
 
 
"
U
s
e
 
t
a
b
l
e
 
a
l
i
a
s
e
s
:
 
x
 
f
o
r
 
o
u
t
e
r
,
 
y
 
f
o
r
 
i
n
n
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
M
A
X
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
i
n
-
s
e
l
e
c
t
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
i
n
-
s
e
l
e
c
t
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
F
i
r
s
t
 
A
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
 
i
n
 
E
a
c
h
 
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
L
i
s
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
 
c
o
m
e
s
 
f
i
r
s
t
 
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
 
F
R
O
M
 
w
o
r
l
d
 
x
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
 
(
\
n
 
 
 
S
E
L
E
C
T
 
M
I
N
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
 
y
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
 
F
R
O
M
 
w
o
r
l
d
 
x
 
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
 
(
S
E
L
E
C
T
 
M
I
N
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
 
y
 
W
H
E
R
E
 
y
.
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
 
x
.
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
n
a
m
e
)
 
g
i
v
e
s
 
t
h
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
 
f
i
r
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
 
b
y
 
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
n
t
i
n
e
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
 
x
.
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
 
y
.
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
 
c
o
r
r
e
l
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
M
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
u
m
-
a
n
d
-
c
o
u
n
t
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
u
m
-
a
n
d
-
c
o
u
n
t
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
T
o
t
a
l
 
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
 
t
h
e
 
w
o
r
l
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
 
a
d
d
s
 
u
p
 
a
l
l
 
v
a
l
u
e
s
 
i
n
 
a
 
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
u
m
-
a
n
d
-
c
o
u
n
t
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
u
m
-
a
n
d
-
c
o
u
n
t
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
i
s
t
 
o
f
 
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
 
-
 
j
u
s
t
 
o
n
c
e
 
e
a
c
h
.
 
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
l
a
c
e
 
D
I
S
T
I
N
C
T
 
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
u
m
-
a
n
d
-
c
o
u
n
t
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
u
m
-
a
n
d
-
c
o
u
n
t
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
G
D
P
 
o
f
 
A
f
r
i
c
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
 
t
o
t
a
l
 
G
D
P
 
o
f
 
A
f
r
i
c
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
 
S
U
M
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
 
S
U
M
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
F
i
l
t
e
r
 
t
o
 
A
f
r
i
c
a
,
 
t
h
e
n
 
S
U
M
 
t
h
e
 
g
d
p
 
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
S
U
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
s
u
m
-
a
n
d
-
c
o
u
n
t
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
u
m
-
a
n
d
-
c
o
u
n
t
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
 
B
i
g
 
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
H
o
w
 
m
a
n
y
 
c
o
u
n
t
r
i
e
s
 
h
a
v
e
 
a
n
 
a
r
e
a
 
o
f
 
a
t
 
l
e
a
s
t
 
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
=
 
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
C
O
U
N
T
(
)
 
c
o
u
n
t
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
 
r
o
w
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
 
f
i
r
s
t
 
w
i
t
h
 
W
H
E
R
E
,
 
t
h
e
n
 
c
o
u
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
u
m
-
a
n
d
-
c
o
u
n
t
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
u
m
-
a
n
d
-
c
o
u
n
t
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
B
a
l
t
i
c
 
S
t
a
t
e
s
 
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
s
t
o
n
i
a
,
 
L
a
t
v
i
a
,
 
a
n
d
 
L
i
t
h
u
a
n
i
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
E
s
t
o
n
i
a
'
,
 
'
L
a
t
v
i
a
'
,
 
'
L
i
t
h
u
a
n
i
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
 
t
o
 
f
i
l
t
e
r
 
t
o
 
t
h
e
 
t
h
r
e
e
 
B
a
l
t
i
c
 
s
t
a
t
e
s
.
"
,


 
 
 
 
 
 
"
T
h
e
n
 
S
U
M
 
t
h
e
i
r
 
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
S
U
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
s
u
m
-
a
n
d
-
c
o
u
n
t
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
u
m
-
a
n
d
-
c
o
u
n
t
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
 
G
R
O
U
P
 
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
G
R
O
U
P
 
B
Y
 
g
r
o
u
p
s
 
r
o
w
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
 
v
a
l
u
e
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


 
 
 
 
 
 
"
G
r
o
u
p
 
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
s
u
m
-
a
n
d
-
c
o
u
n
t
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
u
m
-
a
n
d
-
c
o
u
n
t
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
B
i
g
 
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
 
1
0
0
0
0
0
0
0
 
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
F
i
l
t
e
r
 
B
E
F
O
R
E
 
g
r
o
u
p
i
n
g
 
u
s
i
n
g
 
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
H
E
R
E
 
r
u
n
s
 
b
e
f
o
r
e
 
G
R
O
U
P
 
B
Y
;
 
H
A
V
I
N
G
 
r
u
n
s
 
a
f
t
e
r
.
"
,


 
 
 
 
 
 
"
1
0
 
m
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
u
m
-
a
n
d
-
c
o
u
n
t
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
u
m
-
a
n
d
-
c
o
u
n
t
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
i
n
g
 
B
i
g
 
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
L
i
s
t
 
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
 
a
t
 
l
e
a
s
t
 
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
.
 
U
s
e
 
H
A
V
I
N
G
 
t
o
 
f
i
l
t
e
r
 
g
r
o
u
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
 
H
A
V
I
N
G
 
S
U
M
(
_
_
_
)
 
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
 
H
A
V
I
N
G
 
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
 
(
a
f
t
e
r
 
G
R
O
U
P
 
B
Y
)
.
 
W
H
E
R
E
 
f
i
l
t
e
r
s
 
r
o
w
s
 
(
b
e
f
o
r
e
 
G
R
O
U
P
 
B
Y
)
.
"
,


 
 
 
 
 
 
"
U
s
e
 
H
A
V
I
N
G
 
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
.
"
,


 
 
 
 
 
 
"
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


