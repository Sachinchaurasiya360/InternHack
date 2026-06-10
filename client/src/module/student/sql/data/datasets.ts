
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
 
d
a
t
a
s
e
t
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


 
 
/
/
 
N
o
-
t
a
b
l
e
 
d
a
t
a
s
e
t
 
f
o
r
 
e
x
e
r
c
i
s
e
s
 
t
h
a
t
 
o
n
l
y
 
n
e
e
d
 
a
 
f
r
e
s
h
 
S
Q
L
i
t
e
 
c
o
n
n
e
c
t
i
o
n
.


 
 
u
t
i
l
i
t
y
:
 
`


P
R
A
G
M
A
 
u
s
e
r
_
v
e
r
s
i
o
n
 
=
 
0
;


`
,




 
 
s
t
o
r
e
:
 
`


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
u
s
t
o
m
e
r
s
 
(


 
 
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


 
 
n
a
m
e
 
T
E
X
T
,


 
 
r
e
g
i
o
n
 
T
E
X
T
,


 
 
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
 
T
E
X
T


)
;




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
 
o
r
d
e
r
s
 
(


 
 
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
 
I
N
T
E
G
E
R
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
 
T
E
X
T
,


 
 
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
,


 
 
t
o
t
a
l
 
R
E
A
L


)
;




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
r
o
d
u
c
t
s
 
(


 
 
s
k
u
 
T
E
X
T
 
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


 
 
n
a
m
e
 
T
E
X
T
,


 
 
c
a
t
e
g
o
r
y
 
T
E
X
T


)
;




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
 
(


 
 
o
r
d
e
r
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


 
 
s
k
u
 
T
E
X
T
,


 
 
q
u
a
n
t
i
t
y
 
I
N
T
E
G
E
R
,


 
 
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
 
R
E
A
L


)
;




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
 
c
u
s
t
o
m
e
r
s
 
V
A
L
U
E
S
 
(
1
,
 
'
A
v
a
 
N
o
r
t
h
'
,
 
'
E
a
s
t
'
,
 
'
2
0
2
4
-
0
1
-
0
5
'
)
;


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
 
c
u
s
t
o
m
e
r
s
 
V
A
L
U
E
S
 
(
2
,
 
'
B
e
n
 
O
r
t
i
z
'
,
 
'
W
e
s
t
'
,
 
'
2
0
2
4
-
0
1
-
1
8
'
)
;


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
 
c
u
s
t
o
m
e
r
s
 
V
A
L
U
E
S
 
(
3
,
 
'
C
h
l
o
e
 
S
i
n
g
h
'
,
 
'
E
a
s
t
'
,
 
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
2
'
)
;


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
 
c
u
s
t
o
m
e
r
s
 
V
A
L
U
E
S
 
(
4
,
 
'
D
i
e
g
o
 
K
i
m
'
,
 
'
S
o
u
t
h
'
,
 
'
2
0
2
4
-
0
2
-
1
5
'
)
;


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
 
c
u
s
t
o
m
e
r
s
 
V
A
L
U
E
S
 
(
5
,
 
'
E
m
m
a
 
R
o
s
s
i
'
,
 
'
W
e
s
t
'
,
 
'
2
0
2
4
-
0
3
-
0
1
'
)
;


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
 
c
u
s
t
o
m
e
r
s
 
V
A
L
U
E
S
 
(
6
,
 
'
F
i
n
n
 
L
e
e
'
,
 
'
N
o
r
t
h
'
,
 
'
2
0
2
4
-
0
3
-
1
2
'
)
;


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
 
c
u
s
t
o
m
e
r
s
 
V
A
L
U
E
S
 
(
7
,
 
'
G
r
a
c
e
 
H
a
l
l
'
,
 
'
E
a
s
t
'
,
 
'
2
0
2
4
-
0
3
-
1
8
'
)
;


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
 
c
u
s
t
o
m
e
r
s
 
V
A
L
U
E
S
 
(
8
,
 
'
H
u
g
o
 
P
a
r
k
'
,
 
'
S
o
u
t
h
'
,
 
'
2
0
2
4
-
0
4
-
0
1
'
)
;




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
 
o
r
d
e
r
s
 
V
A
L
U
E
S
 
(
1
0
0
1
,
 
1
,
 
'
2
0
2
4
-
0
1
-
1
0
'
,
 
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
,
 
1
2
0
.
0
0
)
;


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
 
o
r
d
e
r
s
 
V
A
L
U
E
S
 
(
1
0
0
2
,
 
1
,
 
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
5
'
,
 
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
,
 
8
0
.
0
0
)
;


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
 
o
r
d
e
r
s
 
V
A
L
U
E
S
 
(
1
0
0
3
,
 
2
,
 
'
2
0
2
4
-
0
1
-
2
5
'
,
 
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
,
 
2
2
0
.
0
0
)
;


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
 
o
r
d
e
r
s
 
V
A
L
U
E
S
 
(
1
0
0
4
,
 
2
,
 
'
2
0
2
4
-
0
3
-
0
2
'
,
 
'
r
e
f
u
n
d
e
d
'
,
 
6
0
.
0
0
)
;


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
 
o
r
d
e
r
s
 
V
A
L
U
E
S
 
(
1
0
0
5
,
 
3
,
 
'
2
0
2
4
-
0
2
-
2
0
'
,
 
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
,
 
1
5
0
.
0
0
)
;


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
 
o
r
d
e
r
s
 
V
A
L
U
E
S
 
(
1
0
0
6
,
 
3
,
 
'
2
0
2
4
-
0
3
-
1
4
'
,
 
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
,
 
7
5
.
0
0
)
;


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
 
o
r
d
e
r
s
 
V
A
L
U
E
S
 
(
1
0
0
7
,
 
4
,
 
'
2
0
2
4
-
0
3
-
0
1
'
,
 
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
,
 
3
1
0
.
0
0
)
;


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
 
o
r
d
e
r
s
 
V
A
L
U
E
S
 
(
1
0
0
8
,
 
5
,
 
'
2
0
2
4
-
0
3
-
2
0
'
,
 
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
,
 
4
5
.
0
0
)
;


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
 
o
r
d
e
r
s
 
V
A
L
U
E
S
 
(
1
0
0
9
,
 
5
,
 
'
2
0
2
4
-
0
4
-
0
3
'
,
 
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
,
 
1
3
5
.
0
0
)
;


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
 
o
r
d
e
r
s
 
V
A
L
U
E
S
 
(
1
0
1
0
,
 
6
,
 
'
2
0
2
4
-
0
4
-
0
9
'
,
 
'
p
e
n
d
i
n
g
'
,
 
9
0
.
0
0
)
;


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
 
o
r
d
e
r
s
 
V
A
L
U
E
S
 
(
1
0
1
1
,
 
8
,
 
'
2
0
2
4
-
0
4
-
1
5
'
,
 
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
,
 
1
8
0
.
0
0
)
;


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
 
o
r
d
e
r
s
 
V
A
L
U
E
S
 
(
1
0
1
2
,
 
1
,
 
'
2
0
2
4
-
0
4
-
2
0
'
,
 
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
,
 
9
5
.
0
0
)
;




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
 
p
r
o
d
u
c
t
s
 
V
A
L
U
E
S
 
(
'
P
1
0
0
'
,
 
'
S
o
l
a
r
 
K
i
t
'
,
 
'
E
n
e
r
g
y
'
)
;


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
 
p
r
o
d
u
c
t
s
 
V
A
L
U
E
S
 
(
'
P
2
0
0
'
,
 
'
B
a
t
t
e
r
y
 
P
a
c
k
'
,
 
'
E
n
e
r
g
y
'
)
;


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
 
p
r
o
d
u
c
t
s
 
V
A
L
U
E
S
 
(
'
P
3
0
0
'
,
 
'
W
a
t
e
r
 
F
i
l
t
e
r
'
,
 
'
U
t
i
l
i
t
i
e
s
'
)
;


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
 
p
r
o
d
u
c
t
s
 
V
A
L
U
E
S
 
(
'
P
4
0
0
'
,
 
'
S
e
n
s
o
r
 
M
e
s
h
'
,
 
'
E
l
e
c
t
r
o
n
i
c
s
'
)
;


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
 
p
r
o
d
u
c
t
s
 
V
A
L
U
E
S
 
(
'
P
5
0
0
'
,
 
'
R
e
p
a
i
r
 
D
r
o
n
e
'
,
 
'
R
o
b
o
t
i
c
s
'
)
;


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
 
p
r
o
d
u
c
t
s
 
V
A
L
U
E
S
 
(
'
P
6
0
0
'
,
 
'
C
a
b
l
e
 
B
u
n
d
l
e
'
,
 
'
U
t
i
l
i
t
i
e
s
'
)
;


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
 
p
r
o
d
u
c
t
s
 
V
A
L
U
E
S
 
(
'
P
7
0
0
'
,
 
'
F
i
e
l
d
 
T
a
b
l
e
t
'
,
 
'
E
l
e
c
t
r
o
n
i
c
s
'
)
;




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
 
V
A
L
U
E
S
 
(
1
0
0
1
,
 
'
P
1
0
0
'
,
 
1
,
 
7
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
1
,
 
'
P
3
0
0
'
,
 
2
,
 
2
5
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
2
,
 
'
P
2
0
0
'
,
 
1
,
 
8
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
3
,
 
'
P
4
0
0
'
,
 
2
,
 
6
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
3
,
 
'
P
5
0
0
'
,
 
1
,
 
1
0
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
4
,
 
'
P
3
0
0
'
,
 
2
,
 
3
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
5
,
 
'
P
1
0
0
'
,
 
1
,
 
7
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
5
,
 
'
P
2
0
0
'
,
 
1
,
 
8
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
6
,
 
'
P
3
0
0
'
,
 
3
,
 
2
5
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
7
,
 
'
P
5
0
0
'
,
 
2
,
 
1
0
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
7
,
 
'
P
4
0
0
'
,
 
1
,
 
6
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
7
,
 
'
P
3
0
0
'
,
 
2
,
 
2
5
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
8
,
 
'
P
6
0
0
'
,
 
1
,
 
2
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
8
,
 
'
P
3
0
0
'
,
 
1
,
 
2
5
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
9
,
 
'
P
1
0
0
'
,
 
1
,
 
7
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
9
,
 
'
P
3
0
0
'
,
 
1
,
 
2
5
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
0
9
,
 
'
P
6
0
0
'
,
 
2
,
 
2
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
1
0
,
 
'
P
2
0
0
'
,
 
1
,
 
9
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
1
1
,
 
'
P
5
0
0
'
,
 
1
,
 
1
0
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
1
1
,
 
'
P
2
0
0
'
,
 
1
,
 
8
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
1
2
,
 
'
P
1
0
0
'
,
 
1
,
 
7
0
.
0
0
)
;


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
 
V
A
L
U
E
S
 
(
1
0
1
2
,
 
'
P
3
0
0
'
,
 
1
,
 
2
5
.
0
0
)
;


`
,




 
 
w
o
r
l
d
:
 
`


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
 
T
E
X
T
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
 
T
E
X
T
,


 
 
a
r
e
a
 
I
N
T
E
G
E
R
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
 
I
N
T
E
G
E
R
,


 
 
g
d
p
 
B
I
G
I
N
T
,


 
 
c
a
p
i
t
a
l
 
T
E
X
T


)
;




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
 
V
A
L
U
E
S
 
(
'
A
f
g
h
a
n
i
s
t
a
n
'
,
 
'
A
s
i
a
'
,
 
6
5
2
2
3
0
,
 
4
1
1
2
8
7
7
1
,
 
1
4
2
7
0
0
0
0
0
0
0
,
 
'
K
a
b
u
l
'
)
;


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
b
a
n
i
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
 
2
8
7
4
8
,
 
2
8
7
7
7
9
7
,
 
1
8
2
6
0
0
0
0
0
0
0
,
 
'
T
i
r
a
n
a
'
)
;


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
g
e
r
i
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
 
2
3
8
1
7
4
1
,
 
4
4
9
0
3
2
2
5
,
 
1
9
1
9
1
3
0
0
0
0
0
0
,
 
'
A
l
g
i
e
r
s
'
)
;


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
 
V
A
L
U
E
S
 
(
'
A
n
d
o
r
r
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
 
4
6
8
,
 
7
7
2
6
5
,
 
3
3
9
1
0
0
0
0
0
0
,
 
'
A
n
d
o
r
r
a
 
l
a
 
V
e
l
l
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
A
n
g
o
l
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
 
1
2
4
6
7
0
0
,
 
3
5
5
8
8
9
8
7
,
 
7
4
4
9
3
0
0
0
0
0
0
,
 
'
L
u
a
n
d
a
'
)
;


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
 
V
A
L
U
E
S
 
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
,
 
2
7
8
0
4
0
0
,
 
4
6
6
5
4
5
8
1
,
 
6
3
2
7
7
0
0
0
0
0
0
0
,
 
'
B
u
e
n
o
s
 
A
i
r
e
s
'
)
;


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
 
V
A
L
U
E
S
 
(
'
A
r
m
e
n
i
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
 
2
9
7
4
3
,
 
2
9
6
3
2
4
3
,
 
1
9
5
0
4
0
0
0
0
0
0
,
 
'
Y
e
r
e
v
a
n
'
)
;


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
 
V
A
L
U
E
S
 
(
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
,
 
'
O
c
e
a
n
i
a
'
,
 
7
6
9
2
0
2
4
,
 
2
6
4
3
9
1
1
1
,
 
1
6
8
7
7
1
3
0
0
0
0
0
0
,
 
'
C
a
n
b
e
r
r
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
A
u
s
t
r
i
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
 
8
3
8
7
1
,
 
9
1
0
4
7
7
2
,
 
5
1
5
1
9
9
0
0
0
0
0
0
,
 
'
V
i
e
n
n
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
A
z
e
r
b
a
i
j
a
n
'
,
 
'
A
s
i
a
'
,
 
8
6
6
0
0
,
 
1
0
4
1
2
6
5
1
,
 
7
2
3
5
6
0
0
0
0
0
0
,
 
'
B
a
k
u
'
)
;


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
 
V
A
L
U
E
S
 
(
'
B
a
h
r
a
i
n
'
,
 
'
A
s
i
a
'
,
 
7
6
5
,
 
1
4
8
5
5
0
9
,
 
4
4
3
9
0
0
0
0
0
0
0
,
 
'
M
a
n
a
m
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
B
a
n
g
l
a
d
e
s
h
'
,
 
'
A
s
i
a
'
,
 
1
4
7
5
7
0
,
 
1
7
2
9
5
4
3
1
9
,
 
4
6
0
2
0
1
0
0
0
0
0
0
,
 
'
D
h
a
k
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
B
e
l
a
r
u
s
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
 
2
0
7
6
0
0
,
 
9
4
9
8
2
3
8
,
 
7
2
8
2
9
0
0
0
0
0
0
,
 
'
M
i
n
s
k
'
)
;


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
 
V
A
L
U
E
S
 
(
'
B
e
l
g
i
u
m
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
5
2
8
,
 
1
1
6
8
6
1
4
0
,
 
6
2
4
2
4
8
0
0
0
0
0
0
,
 
'
B
r
u
s
s
e
l
s
'
)
;


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
 
V
A
L
U
E
S
 
(
'
B
e
l
i
z
e
'
,
 
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
 
2
2
9
6
6
,
 
4
1
0
8
2
5
,
 
3
2
1
8
0
0
0
0
0
0
,
 
'
B
e
l
m
o
p
a
n
'
)
;


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
 
V
A
L
U
E
S
 
(
'
B
o
l
i
v
i
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
,
 
1
0
9
8
5
8
1
,
 
1
2
3
8
8
5
7
1
,
 
4
4
0
0
9
0
0
0
0
0
0
,
 
'
S
u
c
r
e
'
)
;


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
 
V
A
L
U
E
S
 
(
'
B
r
a
z
i
l
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
,
 
8
5
1
5
7
6
7
,
 
2
1
6
4
2
2
4
4
6
,
 
2
1
2
6
8
0
9
0
0
0
0
0
0
,
 
'
B
r
a
s
i
l
i
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
B
r
u
n
e
i
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
7
6
5
,
 
4
4
9
0
0
2
,
 
1
5
1
2
8
0
0
0
0
0
0
,
 
'
B
a
n
d
a
r
 
S
e
r
i
 
B
e
g
a
w
a
n
'
)
;


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
 
V
A
L
U
E
S
 
(
'
B
u
l
g
a
r
i
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
 
1
1
0
8
7
9
,
 
6
6
8
7
7
1
7
,
 
1
0
0
6
3
5
0
0
0
0
0
0
,
 
'
S
o
f
i
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
C
a
m
b
o
d
i
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
 
1
8
1
0
3
5
,
 
1
6
9
4
4
8
2
6
,
 
2
9
9
5
6
0
0
0
0
0
0
,
 
'
P
h
n
o
m
 
P
e
n
h
'
)
;


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
 
V
A
L
U
E
S
 
(
'
C
a
m
e
r
o
o
n
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
 
4
7
5
4
4
2
,
 
2
8
6
4
7
2
9
3
,
 
4
4
3
3
5
0
0
0
0
0
0
,
 
'
Y
a
o
u
n
d
e
'
)
;


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
 
V
A
L
U
E
S
 
(
'
C
a
n
a
d
a
'
,
 
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
 
9
9
8
4
6
7
0
,
 
4
0
0
9
7
7
6
1
,
 
2
1
1
7
8
0
5
0
0
0
0
0
0
,
 
'
O
t
t
a
w
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
C
h
i
l
e
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
,
 
7
5
6
1
0
2
,
 
1
9
6
0
3
7
3
3
,
 
3
3
5
5
3
3
0
0
0
0
0
0
,
 
'
S
a
n
t
i
a
g
o
'
)
;


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
 
V
A
L
U
E
S
 
(
'
C
h
i
n
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
 
9
5
9
6
9
6
1
,
 
1
4
2
5
6
7
1
3
5
2
,
 
1
7
9
6
3
1
7
1
0
0
0
0
0
0
,
 
'
B
e
i
j
i
n
g
'
)
;


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
 
V
A
L
U
E
S
 
(
'
C
o
l
o
m
b
i
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
,
 
1
1
4
1
7
4
8
,
 
5
2
0
8
5
1
6
8
,
 
3
6
3
8
3
5
0
0
0
0
0
0
,
 
'
B
o
g
o
t
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
C
o
n
g
o
,
 
D
e
m
o
c
r
a
t
i
c
 
R
e
p
u
b
l
i
c
 
o
f
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
 
2
3
4
4
8
5
8
,
 
1
0
2
2
6
2
8
0
8
,
 
6
5
8
2
2
0
0
0
0
0
0
,
 
'
K
i
n
s
h
a
s
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
C
o
s
t
a
 
R
i
c
a
'
,
 
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
 
5
1
1
0
0
,
 
5
2
1
2
1
7
3
,
 
6
8
3
7
9
0
0
0
0
0
0
,
 
'
S
a
n
 
J
o
s
e
'
)
;


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
 
V
A
L
U
E
S
 
(
'
C
r
o
a
t
i
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
 
5
6
5
9
4
,
 
3
8
5
5
6
0
0
,
 
7
8
9
0
9
0
0
0
0
0
0
,
 
'
Z
a
g
r
e
b
'
)
;


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
 
V
A
L
U
E
S
 
(
'
C
u
b
a
'
,
 
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
 
1
0
9
8
8
4
,
 
1
1
1
9
4
4
4
9
,
 
1
0
7
3
5
2
0
0
0
0
0
0
,
 
'
H
a
v
a
n
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
C
z
e
c
h
 
R
e
p
u
b
l
i
c
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
 
7
8
8
6
7
,
 
1
0
8
2
7
5
2
9
,
 
3
3
0
8
6
0
0
0
0
0
0
0
,
 
'
P
r
a
g
u
e
'
)
;


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
 
V
A
L
U
E
S
 
(
'
D
e
n
m
a
r
k
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
 
4
3
0
9
4
,
 
5
9
1
0
9
1
3
,
 
4
0
4
1
9
9
0
0
0
0
0
0
,
 
'
C
o
p
e
n
h
a
g
e
n
'
)
;


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
 
V
A
L
U
E
S
 
(
'
E
c
u
a
d
o
r
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
,
 
2
8
3
5
6
1
,
 
1
8
1
9
0
4
8
4
,
 
1
1
8
8
4
5
0
0
0
0
0
0
,
 
'
Q
u
i
t
o
'
)
;


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
 
V
A
L
U
E
S
 
(
'
E
g
y
p
t
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
 
1
0
0
1
4
4
9
,
 
1
1
2
7
1
6
5
9
8
,
 
3
9
5
9
2
6
0
0
0
0
0
0
,
 
'
C
a
i
r
o
'
)
;


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
 
V
A
L
U
E
S
 
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
E
u
r
o
p
e
'
,
 
4
5
2
2
8
,
 
1
3
2
2
7
6
5
,
 
4
0
7
4
5
0
0
0
0
0
0
,
 
'
T
a
l
l
i
n
n
'
)
;


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
 
V
A
L
U
E
S
 
(
'
E
t
h
i
o
p
i
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
 
1
1
0
4
3
0
0
,
 
1
2
6
5
2
7
0
6
0
,
 
1
5
5
8
0
3
0
0
0
0
0
0
,
 
'
A
d
d
i
s
 
A
b
a
b
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
F
i
j
i
'
,
 
'
O
c
e
a
n
i
a
'
,
 
1
8
2
7
4
,
 
9
3
6
3
7
5
,
 
5
3
1
6
0
0
0
0
0
0
,
 
'
S
u
v
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
F
i
n
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
 
3
3
8
4
2
4
,
 
5
5
4
5
4
7
5
,
 
3
0
5
6
8
9
0
0
0
0
0
0
,
 
'
H
e
l
s
i
n
k
i
'
)
;


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
 
V
A
L
U
E
S
 
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
E
u
r
o
p
e
'
,
 
6
4
0
6
7
9
,
 
6
7
8
4
8
1
5
6
,
 
3
0
4
9
0
1
6
0
0
0
0
0
0
,
 
'
P
a
r
i
s
'
)
;


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
 
V
A
L
U
E
S
 
(
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
E
u
r
o
p
e
'
,
 
3
5
7
1
1
4
,
 
8
3
2
9
4
6
3
3
,
 
4
4
3
0
1
7
2
0
0
0
0
0
0
,
 
'
B
e
r
l
i
n
'
)
;


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
 
V
A
L
U
E
S
 
(
'
G
h
a
n
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
 
2
3
8
5
3
3
,
 
3
3
4
7
5
8
7
0
,
 
7
2
8
4
3
0
0
0
0
0
0
,
 
'
A
c
c
r
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
G
r
e
e
c
e
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
3
1
9
5
7
,
 
1
0
3
4
1
2
7
7
,
 
2
3
9
3
0
0
0
0
0
0
0
0
,
 
'
A
t
h
e
n
s
'
)
;


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
 
V
A
L
U
E
S
 
(
'
G
u
a
t
e
m
a
l
a
'
,
 
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
 
1
0
8
8
8
9
,
 
1
7
6
0
2
4
3
1
,
 
1
0
2
7
6
5
0
0
0
0
0
0
,
 
'
G
u
a
t
e
m
a
l
a
 
C
i
t
y
'
)
;


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
 
V
A
L
U
E
S
 
(
'
H
u
n
g
a
r
y
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
 
9
3
0
2
8
,
 
9
5
9
7
0
8
5
,
 
2
0
3
8
2
8
0
0
0
0
0
0
,
 
'
B
u
d
a
p
e
s
t
'
)
;


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
 
V
A
L
U
E
S
 
(
'
I
c
e
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
3
0
0
0
,
 
3
7
5
3
1
8
,
 
3
1
0
2
0
0
0
0
0
0
0
,
 
'
R
e
y
k
j
a
v
i
k
'
)
;


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
 
V
A
L
U
E
S
 
(
'
I
n
d
i
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
 
3
2
8
7
2
6
3
,
 
1
4
2
8
6
2
7
6
6
3
,
 
3
7
3
2
2
2
4
0
0
0
0
0
0
,
 
'
N
e
w
 
D
e
l
h
i
'
)
;


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
 
V
A
L
U
E
S
 
(
'
I
n
d
o
n
e
s
i
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
 
1
9
0
4
5
6
9
,
 
2
7
7
5
3
4
1
2
2
,
 
1
4
1
7
3
8
7
0
0
0
0
0
0
,
 
'
J
a
k
a
r
t
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
I
r
a
n
'
,
 
'
A
s
i
a
'
,
 
1
6
4
8
1
9
5
,
 
8
8
5
5
0
9
2
2
,
 
3
6
7
9
7
0
0
0
0
0
0
0
,
 
'
T
e
h
r
a
n
'
)
;


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
 
V
A
L
U
E
S
 
(
'
I
r
a
q
'
,
 
'
A
s
i
a
'
,
 
4
3
8
3
1
7
,
 
4
4
4
9
6
1
2
2
,
 
2
5
4
9
9
0
0
0
0
0
0
0
,
 
'
B
a
g
h
d
a
d
'
)
;


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
 
V
A
L
U
E
S
 
(
'
I
r
e
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
 
7
0
2
7
3
,
 
5
0
5
6
9
3
5
,
 
5
4
5
6
2
9
0
0
0
0
0
0
,
 
'
D
u
b
l
i
n
'
)
;


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
 
V
A
L
U
E
S
 
(
'
I
s
r
a
e
l
'
,
 
'
A
s
i
a
'
,
 
2
0
7
7
0
,
 
9
1
7
4
5
2
0
,
 
5
2
5
0
0
4
0
0
0
0
0
0
,
 
'
J
e
r
u
s
a
l
e
m
'
)
;


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
 
V
A
L
U
E
S
 
(
'
I
t
a
l
y
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
1
3
3
6
,
 
5
8
7
6
1
1
4
6
,
 
2
1
8
6
0
8
2
0
0
0
0
0
0
,
 
'
R
o
m
e
'
)
;


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
 
V
A
L
U
E
S
 
(
'
J
a
m
a
i
c
a
'
,
 
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
 
1
0
9
9
1
,
 
2
8
2
5
5
4
4
,
 
1
7
0
9
4
0
0
0
0
0
0
,
 
'
K
i
n
g
s
t
o
n
'
)
;


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
 
V
A
L
U
E
S
 
(
'
J
a
p
a
n
'
,
 
'
A
s
i
a
'
,
 
3
7
7
9
7
5
,
 
1
2
3
2
9
4
5
1
3
,
 
4
2
3
0
8
6
2
0
0
0
0
0
0
,
 
'
T
o
k
y
o
'
)
;


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
 
V
A
L
U
E
S
 
(
'
J
o
r
d
a
n
'
,
 
'
A
s
i
a
'
,
 
8
9
3
4
2
,
 
1
1
3
3
7
0
5
2
,
 
4
9
4
3
5
0
0
0
0
0
0
,
 
'
A
m
m
a
n
'
)
;


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
 
V
A
L
U
E
S
 
(
'
K
a
z
a
k
h
s
t
a
n
'
,
 
'
A
s
i
a
'
,
 
2
7
2
4
9
0
0
,
 
1
9
6
2
1
0
0
0
,
 
2
5
9
2
9
2
0
0
0
0
0
0
,
 
'
A
s
t
a
n
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
K
e
n
y
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
 
5
8
0
3
6
7
,
 
5
5
1
0
0
5
8
6
,
 
1
1
3
4
2
0
0
0
0
0
0
0
,
 
'
N
a
i
r
o
b
i
'
)
;


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
 
V
A
L
U
E
S
 
(
'
K
u
w
a
i
t
'
,
 
'
A
s
i
a
'
,
 
1
7
8
1
8
,
 
4
3
1
0
1
0
8
,
 
1
6
1
7
7
3
0
0
0
0
0
0
,
 
'
K
u
w
a
i
t
 
C
i
t
y
'
)
;


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
 
V
A
L
U
E
S
 
(
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
E
u
r
o
p
e
'
,
 
6
4
5
5
9
,
 
1
8
3
0
2
1
1
,
 
4
1
0
9
1
0
0
0
0
0
0
,
 
'
R
i
g
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
L
e
b
a
n
o
n
'
,
 
'
A
s
i
a
'
,
 
1
0
4
0
0
,
 
5
4
8
9
7
3
9
,
 
1
7
9
4
0
0
0
0
0
0
0
,
 
'
B
e
i
r
u
t
'
)
;


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
 
V
A
L
U
E
S
 
(
'
L
i
b
y
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
 
1
7
5
9
5
4
0
,
 
6
8
8
8
3
8
8
,
 
5
0
4
9
2
0
0
0
0
0
0
,
 
'
T
r
i
p
o
l
i
'
)
;


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
 
V
A
L
U
E
S
 
(
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
 
6
5
3
0
0
,
 
2
7
1
8
3
5
2
,
 
7
5
5
4
7
0
0
0
0
0
0
,
 
'
V
i
l
n
i
u
s
'
)
;


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
 
V
A
L
U
E
S
 
(
'
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
 
2
5
8
6
,
 
6
5
4
7
6
8
,
 
8
7
2
6
6
0
0
0
0
0
0
,
 
'
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
'
)
;


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
 
V
A
L
U
E
S
 
(
'
M
a
d
a
g
a
s
c
a
r
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
 
5
8
7
0
4
1
,
 
3
0
3
2
5
7
3
2
,
 
1
4
4
7
2
0
0
0
0
0
0
,
 
'
A
n
t
a
n
a
n
a
r
i
v
o
'
)
;


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
 
V
A
L
U
E
S
 
(
'
M
a
l
a
y
s
i
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
 
3
2
9
8
4
7
,
 
3
3
9
3
8
2
2
1
,
 
3
9
9
6
4
9
0
0
0
0
0
0
,
 
'
K
u
a
l
a
 
L
u
m
p
u
r
'
)
;


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
 
V
A
L
U
E
S
 
(
'
M
a
l
i
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
 
1
2
4
0
1
9
2
,
 
2
3
2
9
3
6
9
8
,
 
1
8
8
2
7
0
0
0
0
0
0
,
 
'
B
a
m
a
k
o
'
)
;


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
 
V
A
L
U
E
S
 
(
'
M
e
x
i
c
o
'
,
 
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
 
1
9
6
4
3
7
5
,
 
1
2
8
4
5
5
5
6
7
,
 
1
4
1
4
1
8
7
0
0
0
0
0
0
,
 
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
;


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
 
V
A
L
U
E
S
 
(
'
M
o
n
g
o
l
i
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
 
1
5
6
4
1
1
0
,
 
3
4
4
7
1
5
7
,
 
1
8
1
0
1
0
0
0
0
0
0
,
 
'
U
l
a
a
n
b
a
a
t
a
r
'
)
;


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
 
V
A
L
U
E
S
 
(
'
M
o
r
o
c
c
o
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
 
4
4
6
5
5
0
,
 
3
7
4
5
7
9
7
1
,
 
1
4
1
1
0
9
0
0
0
0
0
0
,
 
'
R
a
b
a
t
'
)
;


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
 
V
A
L
U
E
S
 
(
'
M
o
z
a
m
b
i
q
u
e
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
1
5
9
0
,
 
3
3
8
9
7
3
5
4
,
 
1
7
8
7
7
0
0
0
0
0
0
,
 
'
M
a
p
u
t
o
'
)
;


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
 
V
A
L
U
E
S
 
(
'
M
y
a
n
m
a
r
'
,
 
'
A
s
i
a
'
,
 
6
7
6
5
7
8
,
 
5
4
1
7
9
3
0
6
,
 
5
9
4
5
1
0
0
0
0
0
0
,
 
'
N
a
y
p
y
i
d
a
w
'
)
;


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
 
V
A
L
U
E
S
 
(
'
N
a
m
i
b
i
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
2
5
6
1
5
,
 
2
6
0
4
1
7
2
,
 
1
2
3
5
5
0
0
0
0
0
0
,
 
'
W
i
n
d
h
o
e
k
'
)
;


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
 
V
A
L
U
E
S
 
(
'
N
e
p
a
l
'
,
 
'
A
s
i
a
'
,
 
1
4
7
1
8
1
,
 
3
0
8
9
6
5
9
0
,
 
4
0
8
2
8
0
0
0
0
0
0
,
 
'
K
a
t
h
m
a
n
d
u
'
)
;


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
 
V
A
L
U
E
S
 
(
'
N
e
t
h
e
r
l
a
n
d
s
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
 
4
1
5
4
3
,
 
1
7
6
1
8
2
9
9
,
 
1
0
9
2
7
4
8
0
0
0
0
0
0
,
 
'
A
m
s
t
e
r
d
a
m
'
)
;


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
 
V
A
L
U
E
S
 
(
'
N
e
w
 
Z
e
a
l
a
n
d
'
,
 
'
O
c
e
a
n
i
a
'
,
 
2
6
8
8
3
8
,
 
5
2
2
8
1
0
0
,
 
2
4
9
8
8
6
0
0
0
0
0
0
,
 
'
W
e
l
l
i
n
g
t
o
n
'
)
;


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
 
V
A
L
U
E
S
 
(
'
N
i
g
e
r
i
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
 
9
2
3
7
6
8
,
 
2
2
3
8
0
4
6
3
2
,
 
4
7
2
6
2
0
0
0
0
0
0
0
,
 
'
A
b
u
j
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
N
o
r
t
h
 
K
o
r
e
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
 
1
2
0
5
3
8
,
 
2
6
1
6
0
8
2
1
,
 
1
8
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
 
'
P
y
o
n
g
y
a
n
g
'
)
;


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
 
V
A
L
U
E
S
 
(
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
E
u
r
o
p
e
'
,
 
3
2
3
8
0
2
,
 
5
4
7
4
3
6
0
,
 
5
4
6
7
6
8
0
0
0
0
0
0
,
 
'
O
s
l
o
'
)
;


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
 
V
A
L
U
E
S
 
(
'
O
m
a
n
'
,
 
'
A
s
i
a
'
,
 
3
0
9
5
0
0
,
 
4
6
4
4
3
8
4
,
 
1
0
4
9
0
2
0
0
0
0
0
0
,
 
'
M
u
s
c
a
t
'
)
;


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
 
V
A
L
U
E
S
 
(
'
P
a
k
i
s
t
a
n
'
,
 
'
A
s
i
a
'
,
 
8
8
1
9
1
3
,
 
2
4
0
4
8
5
6
5
8
,
 
3
3
8
2
3
7
0
0
0
0
0
0
,
 
'
I
s
l
a
m
a
b
a
d
'
)
;


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
 
V
A
L
U
E
S
 
(
'
P
a
n
a
m
a
'
,
 
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
 
7
5
4
1
7
,
 
4
4
6
8
0
8
7
,
 
7
6
5
2
2
0
0
0
0
0
0
,
 
'
P
a
n
a
m
a
 
C
i
t
y
'
)
;


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
 
V
A
L
U
E
S
 
(
'
P
a
p
u
a
 
N
e
w
 
G
u
i
n
e
a
'
,
 
'
O
c
e
a
n
i
a
'
,
 
4
6
2
8
4
0
,
 
1
0
3
2
9
9
3
1
,
 
3
0
6
0
6
0
0
0
0
0
0
,
 
'
P
o
r
t
 
M
o
r
e
s
b
y
'
)
;


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
 
V
A
L
U
E
S
 
(
'
P
a
r
a
g
u
a
y
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
,
 
4
0
6
7
5
2
,
 
6
8
6
1
5
2
4
,
 
4
3
9
8
9
0
0
0
0
0
0
,
 
'
A
s
u
n
c
i
o
n
'
)
;


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
 
V
A
L
U
E
S
 
(
'
P
e
r
u
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
,
 
1
2
8
5
2
1
6
,
 
3
4
3
5
2
7
1
9
,
 
2
6
8
2
3
6
0
0
0
0
0
0
,
 
'
L
i
m
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
P
h
i
l
i
p
p
i
n
e
s
'
,
 
'
A
s
i
a
'
,
 
3
0
0
0
0
0
,
 
1
1
7
3
3
7
3
6
8
,
 
4
3
5
6
7
5
0
0
0
0
0
0
,
 
'
M
a
n
i
l
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
P
o
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
 
3
1
2
6
9
6
,
 
3
6
7
5
3
7
3
6
,
 
8
1
1
2
2
9
0
0
0
0
0
0
,
 
'
W
a
r
s
a
w
'
)
;


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
 
V
A
L
U
E
S
 
(
'
P
o
r
t
u
g
a
l
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
 
9
2
2
1
2
,
 
1
0
2
4
7
6
0
5
,
 
2
8
7
0
8
0
0
0
0
0
0
0
,
 
'
L
i
s
b
o
n
'
)
;


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
 
V
A
L
U
E
S
 
(
'
Q
a
t
a
r
'
,
 
'
A
s
i
a
'
,
 
1
1
5
8
6
,
 
2
7
1
6
3
9
1
,
 
2
1
9
5
7
0
0
0
0
0
0
0
,
 
'
D
o
h
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
R
o
m
a
n
i
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
 
2
3
8
3
9
1
,
 
1
9
0
5
1
5
6
2
,
 
3
5
0
4
1
4
0
0
0
0
0
0
,
 
'
B
u
c
h
a
r
e
s
t
'
)
;


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
 
V
A
L
U
E
S
 
(
'
R
u
s
s
i
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
 
1
7
0
9
8
2
4
2
,
 
1
4
4
2
3
6
9
3
3
,
 
1
8
6
2
4
7
0
0
0
0
0
0
0
,
 
'
M
o
s
c
o
w
'
)
;


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
 
V
A
L
U
E
S
 
(
'
R
w
a
n
d
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
 
2
6
3
3
8
,
 
1
4
0
9
4
6
8
3
,
 
1
3
3
1
2
0
0
0
0
0
0
,
 
'
K
i
g
a
l
i
'
)
;


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
 
V
A
L
U
E
S
 
(
'
S
a
u
d
i
 
A
r
a
b
i
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
 
2
1
4
9
6
9
0
,
 
3
6
9
4
7
0
2
5
,
 
1
0
6
1
9
0
2
0
0
0
0
0
0
,
 
'
R
i
y
a
d
h
'
)
;


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
 
V
A
L
U
E
S
 
(
'
S
e
n
e
g
a
l
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
 
1
9
6
7
2
2
,
 
1
7
7
6
3
1
6
3
,
 
2
7
6
2
4
0
0
0
0
0
0
,
 
'
D
a
k
a
r
'
)
;


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
 
V
A
L
U
E
S
 
(
'
S
e
r
b
i
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
 
7
7
4
7
4
,
 
6
7
3
6
5
1
5
,
 
7
5
1
7
5
0
0
0
0
0
0
,
 
'
B
e
l
g
r
a
d
e
'
)
;


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
 
V
A
L
U
E
S
 
(
'
S
i
n
g
a
p
o
r
e
'
,
 
'
A
s
i
a
'
,
 
7
2
8
,
 
5
9
1
7
6
4
8
,
 
4
9
7
3
4
4
0
0
0
0
0
0
,
 
'
S
i
n
g
a
p
o
r
e
'
)
;


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
 
V
A
L
U
E
S
 
(
'
S
l
o
v
a
k
i
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
 
4
9
0
3
7
,
 
5
4
2
8
7
9
2
,
 
1
2
7
5
3
3
0
0
0
0
0
0
,
 
'
B
r
a
t
i
s
l
a
v
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
S
l
o
v
e
n
i
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
 
2
0
2
7
3
,
 
2
1
1
9
6
7
5
,
 
6
8
2
1
7
0
0
0
0
0
0
,
 
'
L
j
u
b
l
j
a
n
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
S
o
m
a
l
i
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
 
6
3
7
6
5
7
,
 
1
8
1
4
3
3
7
8
,
 
8
1
2
8
0
0
0
0
0
0
,
 
'
M
o
g
a
d
i
s
h
u
'
)
;


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
 
V
A
L
U
E
S
 
(
'
S
o
u
t
h
 
A
f
r
i
c
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
 
1
2
1
9
0
9
0
,
 
6
0
4
1
4
4
9
5
,
 
3
7
7
7
8
2
0
0
0
0
0
0
,
 
'
P
r
e
t
o
r
i
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
S
o
u
t
h
 
K
o
r
e
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
 
1
0
0
2
1
0
,
 
5
1
7
8
4
0
5
9
,
 
1
7
0
9
2
3
2
0
0
0
0
0
0
,
 
'
S
e
o
u
l
'
)
;


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
 
V
A
L
U
E
S
 
(
'
S
o
u
t
h
 
S
u
d
a
n
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
 
6
1
9
7
4
5
,
 
1
1
0
8
8
7
9
6
,
 
4
4
5
8
0
0
0
0
0
0
,
 
'
J
u
b
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
S
p
a
i
n
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
 
5
0
5
9
9
2
,
 
4
7
5
1
9
6
2
8
,
 
1
5
8
0
6
9
4
0
0
0
0
0
0
,
 
'
M
a
d
r
i
d
'
)
;


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
 
V
A
L
U
E
S
 
(
'
S
r
i
 
L
a
n
k
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
 
6
5
6
1
0
,
 
2
2
0
3
7
0
0
0
,
 
8
4
5
1
9
0
0
0
0
0
0
,
 
'
C
o
l
o
m
b
o
'
)
;


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
 
V
A
L
U
E
S
 
(
'
S
u
d
a
n
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
 
1
8
6
1
4
8
4
,
 
4
8
1
0
9
0
0
6
,
 
3
4
3
2
6
0
0
0
0
0
0
,
 
'
K
h
a
r
t
o
u
m
'
)
;


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
 
V
A
L
U
E
S
 
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
E
u
r
o
p
e
'
,
 
4
5
0
2
9
5
,
 
1
0
6
1
2
0
8
6
,
 
5
9
7
1
1
0
0
0
0
0
0
0
,
 
'
S
t
o
c
k
h
o
l
m
'
)
;


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
 
V
A
L
U
E
S
 
(
'
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
 
4
1
2
8
4
,
 
8
7
9
6
6
6
9
,
 
9
0
5
6
8
4
0
0
0
0
0
0
,
 
'
B
e
r
n
'
)
;


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
 
V
A
L
U
E
S
 
(
'
S
y
r
i
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
 
1
8
5
1
8
0
,
 
2
2
9
3
3
5
3
1
,
 
1
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
,
 
'
D
a
m
a
s
c
u
s
'
)
;


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
 
V
A
L
U
E
S
 
(
'
T
a
i
w
a
n
'
,
 
'
A
s
i
a
'
,
 
3
6
1
9
3
,
 
2
3
9
2
3
2
7
6
,
 
7
9
0
7
2
8
0
0
0
0
0
0
,
 
'
T
a
i
p
e
i
'
)
;


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
 
V
A
L
U
E
S
 
(
'
T
a
n
z
a
n
i
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
 
9
4
5
0
8
7
,
 
6
5
4
9
7
7
4
8
,
 
7
9
1
5
8
0
0
0
0
0
0
,
 
'
D
o
d
o
m
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
T
h
a
i
l
a
n
d
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
1
3
1
2
0
,
 
7
1
8
0
1
2
7
9
,
 
5
7
4
2
3
1
0
0
0
0
0
0
,
 
'
B
a
n
g
k
o
k
'
)
;


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
 
V
A
L
U
E
S
 
(
'
T
u
n
i
s
i
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
 
1
6
3
6
1
0
,
 
1
2
4
5
8
2
2
3
,
 
4
6
4
1
7
0
0
0
0
0
0
,
 
'
T
u
n
i
s
'
)
;


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
 
V
A
L
U
E
S
 
(
'
T
u
r
k
e
y
'
,
 
'
A
s
i
a
'
,
 
7
8
3
5
6
2
,
 
8
5
2
7
9
5
5
3
,
 
1
1
0
8
0
2
7
0
0
0
0
0
0
,
 
'
A
n
k
a
r
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
U
g
a
n
d
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
 
2
4
1
5
5
0
,
 
4
8
5
8
2
3
3
4
,
 
4
9
2
7
1
0
0
0
0
0
0
,
 
'
K
a
m
p
a
l
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
U
k
r
a
i
n
e
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
 
6
0
3
5
0
0
,
 
3
6
7
4
4
6
3
4
,
 
1
7
8
7
5
7
0
0
0
0
0
0
,
 
'
K
y
i
v
'
)
;


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
 
V
A
L
U
E
S
 
(
'
U
n
i
t
e
d
 
A
r
a
b
 
E
m
i
r
a
t
e
s
'
,
 
'
A
s
i
a
'
,
 
8
3
6
0
0
,
 
9
5
1
6
8
7
1
,
 
5
0
7
5
3
5
0
0
0
0
0
0
,
 
'
A
b
u
 
D
h
a
b
i
'
)
;


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
 
V
A
L
U
E
S
 
(
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
 
2
4
2
4
9
5
,
 
6
7
7
3
6
8
0
2
,
 
3
3
3
2
0
5
9
0
0
0
0
0
0
,
 
'
L
o
n
d
o
n
'
)
;


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
 
V
A
L
U
E
S
 
(
'
U
n
i
t
e
d
 
S
t
a
t
e
s
'
,
 
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
 
9
8
3
3
5
2
0
,
 
3
3
9
9
9
6
5
6
3
,
 
2
7
3
6
0
9
3
5
0
0
0
0
0
0
,
 
'
W
a
s
h
i
n
g
t
o
n
 
D
.
C
.
'
)
;


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
 
V
A
L
U
E
S
 
(
'
U
r
u
g
u
a
y
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
,
 
1
7
6
2
1
5
,
 
3
4
2
3
1
0
8
,
 
7
7
2
4
1
0
0
0
0
0
0
,
 
'
M
o
n
t
e
v
i
d
e
o
'
)
;


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
 
V
A
L
U
E
S
 
(
'
U
z
b
e
k
i
s
t
a
n
'
,
 
'
A
s
i
a
'
,
 
4
4
7
4
0
0
,
 
3
5
1
6
3
9
4
4
,
 
9
0
8
9
1
0
0
0
0
0
0
,
 
'
T
a
s
h
k
e
n
t
'
)
;


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
 
V
A
L
U
E
S
 
(
'
V
e
n
e
z
u
e
l
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
,
 
9
1
2
0
5
0
,
 
2
8
8
3
8
4
9
9
,
 
9
8
7
1
4
0
0
0
0
0
0
,
 
'
C
a
r
a
c
a
s
'
)
;


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
 
V
A
L
U
E
S
 
(
'
V
i
e
t
n
a
m
'
,
 
'
A
s
i
a
'
,
 
3
3
1
2
1
2
,
 
9
9
4
6
2
0
0
0
,
 
4
4
9
0
9
0
0
0
0
0
0
0
,
 
'
H
a
n
o
i
'
)
;


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
 
V
A
L
U
E
S
 
(
'
Y
e
m
e
n
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
2
7
9
6
8
,
 
3
4
4
4
9
8
2
5
,
 
2
1
6
0
6
0
0
0
0
0
0
,
 
'
S
a
n
a
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
Z
a
m
b
i
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
 
7
5
2
6
1
2
,
 
2
0
5
6
9
7
3
7
,
 
2
8
5
3
8
0
0
0
0
0
0
,
 
'
L
u
s
a
k
a
'
)
;


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
 
V
A
L
U
E
S
 
(
'
Z
i
m
b
a
b
w
e
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
 
3
9
0
7
5
7
,
 
1
6
6
6
5
4
0
9
,
 
2
2
2
9
7
0
0
0
0
0
0
,
 
'
H
a
r
a
r
e
'
)
;


`
,




 
 
n
o
b
e
l
:
 
`


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
 
n
o
b
e
l
 
(


 
 
y
r
 
I
N
T
E
G
E
R
,


 
 
s
u
b
j
e
c
t
 
T
E
X
T
,


 
 
w
i
n
n
e
r
 
T
E
X
T


)
;




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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
1
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
,
 
'
W
i
l
h
e
l
m
 
C
o
n
r
a
d
 
R
o
n
t
g
e
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
1
,
 
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
J
a
c
o
b
u
s
 
H
e
n
r
i
c
u
s
 
v
a
n
 
'
'
t
 
H
o
f
f
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
1
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
,
 
'
E
m
i
l
 
v
o
n
 
B
e
h
r
i
n
g
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
1
,
 
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
,
 
'
S
u
l
l
y
 
P
r
u
d
h
o
m
m
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
1
,
 
'
P
e
a
c
e
'
,
 
'
H
e
n
r
y
 
D
u
n
a
n
t
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
1
,
 
'
P
e
a
c
e
'
,
 
'
F
r
e
d
e
r
i
c
 
P
a
s
s
y
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
2
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
,
 
'
H
e
n
d
r
i
k
 
A
n
t
o
o
n
 
L
o
r
e
n
t
z
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
2
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
,
 
'
P
i
e
t
e
r
 
Z
e
e
m
a
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
2
,
 
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
H
e
r
m
a
n
n
 
E
m
i
l
 
F
i
s
c
h
e
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
2
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
,
 
'
R
o
n
a
l
d
 
R
o
s
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
2
,
 
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
,
 
'
T
h
e
o
d
o
r
 
M
o
m
m
s
e
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
2
,
 
'
P
e
a
c
e
'
,
 
'
E
l
i
e
 
D
u
c
o
m
m
u
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
2
,
 
'
P
e
a
c
e
'
,
 
'
C
h
a
r
l
e
s
 
A
l
b
e
r
t
 
G
o
b
a
t
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
3
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
,
 
'
H
e
n
r
i
 
B
e
c
q
u
e
r
e
l
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
3
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
,
 
'
P
i
e
r
r
e
 
C
u
r
i
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
3
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
,
 
'
M
a
r
i
e
 
C
u
r
i
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
3
,
 
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
S
v
a
n
t
e
 
A
r
r
h
e
n
i
u
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
3
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
,
 
'
N
i
e
l
s
 
R
y
b
e
r
g
 
F
i
n
s
e
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
3
,
 
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
,
 
'
B
j
o
r
n
s
t
j
e
r
n
e
 
B
j
o
r
n
s
o
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
3
,
 
'
P
e
a
c
e
'
,
 
'
R
a
n
d
a
l
 
C
r
e
m
e
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
5
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
,
 
'
P
h
i
l
i
p
p
 
L
e
n
a
r
d
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
5
,
 
'
P
e
a
c
e
'
,
 
'
B
e
r
t
h
a
 
v
o
n
 
S
u
t
t
n
e
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
6
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
,
 
'
J
.
J
.
 
T
h
o
m
s
o
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
6
,
 
'
P
e
a
c
e
'
,
 
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
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
8
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
,
 
'
G
a
b
r
i
e
l
 
L
i
p
p
m
a
n
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
0
8
,
 
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
E
r
n
e
s
t
 
R
u
t
h
e
r
f
o
r
d
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
1
0
,
 
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
,
 
'
P
a
u
l
 
H
e
y
s
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
1
1
,
 
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
a
r
i
e
 
C
u
r
i
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
1
1
,
 
'
P
e
a
c
e
'
,
 
'
T
o
b
i
a
s
 
A
s
s
e
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
1
1
,
 
'
P
e
a
c
e
'
,
 
'
A
l
f
r
e
d
 
H
e
r
m
a
n
n
 
F
r
i
e
d
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
1
3
,
 
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
,
 
'
R
a
b
i
n
d
r
a
n
a
t
h
 
T
a
g
o
r
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
1
8
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
,
 
'
M
a
x
 
P
l
a
n
c
k
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
1
9
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
,
 
'
J
o
h
a
n
n
e
s
 
S
t
a
r
k
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
2
1
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
,
 
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
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
2
1
,
 
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
F
r
e
d
e
r
i
c
k
 
S
o
d
d
y
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
2
2
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
,
 
'
N
i
e
l
s
 
B
o
h
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
2
2
,
 
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
,
 
'
J
a
c
i
n
t
o
 
B
e
n
a
v
e
n
t
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
2
3
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
,
 
'
R
o
b
e
r
t
 
A
n
d
r
e
w
s
 
M
i
l
l
i
k
a
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
2
5
,
 
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
,
 
'
G
e
o
r
g
e
 
B
e
r
n
a
r
d
 
S
h
a
w
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
2
6
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
,
 
'
J
e
a
n
 
B
a
p
t
i
s
t
e
 
P
e
r
r
i
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
2
7
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
,
 
'
A
r
t
h
u
r
 
H
o
l
l
y
 
C
o
m
p
t
o
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
2
9
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
,
 
'
L
o
u
i
s
 
d
e
 
B
r
o
g
l
i
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
2
9
,
 
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
,
 
'
T
h
o
m
a
s
 
M
a
n
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
3
0
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
,
 
'
S
i
r
 
C
h
a
n
d
r
a
s
e
k
h
a
r
a
 
V
e
n
k
a
t
a
 
R
a
m
a
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
3
2
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
,
 
'
W
e
r
n
e
r
 
H
e
i
s
e
n
b
e
r
g
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
3
3
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
,
 
'
E
r
w
i
n
 
S
c
h
r
o
d
i
n
g
e
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
3
3
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
,
 
'
P
a
u
l
 
D
i
r
a
c
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
3
5
,
 
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
F
r
e
d
e
r
i
c
 
J
o
l
i
o
t
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
3
5
,
 
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
I
r
e
n
e
 
J
o
l
i
o
t
-
C
u
r
i
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
3
5
,
 
'
P
e
a
c
e
'
,
 
'
C
a
r
l
 
v
o
n
 
O
s
s
i
e
t
z
k
y
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
3
6
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
,
 
'
V
i
c
t
o
r
 
F
r
a
n
z
 
H
e
s
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
3
8
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
,
 
'
E
n
r
i
c
o
 
F
e
r
m
i
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
3
8
,
 
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
,
 
'
P
e
a
r
l
 
B
u
c
k
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
4
5
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
,
 
'
A
l
e
x
a
n
d
e
r
 
F
l
e
m
i
n
g
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
4
5
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
,
 
'
E
r
n
s
t
 
B
o
r
i
s
 
C
h
a
i
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
4
5
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
,
 
'
S
i
r
 
H
o
w
a
r
d
 
F
l
o
r
e
y
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
4
8
,
 
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
,
 
'
T
.
S
.
 
E
l
i
o
t
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
4
9
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
,
 
'
H
i
d
e
k
i
 
Y
u
k
a
w
a
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
5
0
,
 
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
,
 
'
B
e
r
t
r
a
n
d
 
R
u
s
s
e
l
l
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
5
2
,
 
'
P
e
a
c
e
'
,
 
'
A
l
b
e
r
t
 
S
c
h
w
e
i
t
z
e
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
5
3
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
,
 
'
H
a
n
s
 
K
r
e
b
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
5
3
,
 
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
,
 
'
W
i
n
s
t
o
n
 
C
h
u
r
c
h
i
l
l
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
5
4
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
,
 
'
M
a
x
 
B
o
r
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
5
4
,
 
'
P
e
a
c
e
'
,
 
'
O
f
f
i
c
e
 
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
 
N
a
t
i
o
n
s
 
H
i
g
h
 
C
o
m
m
i
s
s
i
o
n
e
r
 
f
o
r
 
R
e
f
u
g
e
e
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
5
7
,
 
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
,
 
'
A
l
b
e
r
t
 
C
a
m
u
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
5
8
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
,
 
'
J
o
s
h
u
a
 
L
e
d
e
r
b
e
r
g
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
6
0
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
,
 
'
S
i
r
 
F
r
a
n
k
 
M
a
c
f
a
r
l
a
n
e
 
B
u
r
n
e
t
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
6
0
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
,
 
'
P
e
t
e
r
 
M
e
d
a
w
a
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
6
2
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
,
 
'
L
e
v
 
L
a
n
d
a
u
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
6
2
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
,
 
'
F
r
a
n
c
i
s
 
C
r
i
c
k
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
6
2
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
,
 
'
J
a
m
e
s
 
W
a
t
s
o
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
6
2
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
,
 
'
M
a
u
r
i
c
e
 
W
i
l
k
i
n
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
6
2
,
 
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
,
 
'
J
o
h
n
 
S
t
e
i
n
b
e
c
k
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
6
4
,
 
'
P
e
a
c
e
'
,
 
'
M
a
r
t
i
n
 
L
u
t
h
e
r
 
K
i
n
g
 
J
r
.
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
6
5
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
,
 
'
R
i
c
h
a
r
d
 
F
e
y
n
m
a
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
6
5
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
,
 
'
S
i
n
-
I
t
i
r
o
 
T
o
m
o
n
a
g
a
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
6
8
,
 
'
P
e
a
c
e
'
,
 
'
R
e
n
e
 
C
a
s
s
i
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
6
9
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
R
a
g
n
a
r
 
F
r
i
s
c
h
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
6
9
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
J
a
n
 
T
i
n
b
e
r
g
e
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
6
9
,
 
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
,
 
'
S
a
m
u
e
l
 
B
e
c
k
e
t
t
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
7
0
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
P
a
u
l
 
S
a
m
u
e
l
s
o
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
7
0
,
 
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
,
 
'
A
l
e
k
s
a
n
d
r
 
S
o
l
z
h
e
n
i
t
s
y
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
7
3
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
W
a
s
s
i
l
y
 
L
e
o
n
t
i
e
f
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
7
3
,
 
'
P
e
a
c
e
'
,
 
'
H
e
n
r
y
 
K
i
s
s
i
n
g
e
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
7
3
,
 
'
P
e
a
c
e
'
,
 
'
L
e
 
D
u
c
 
T
h
o
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
7
5
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
L
e
o
n
i
d
 
K
a
n
t
o
r
o
v
i
c
h
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
7
6
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
M
i
l
t
o
n
 
F
r
i
e
d
m
a
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
7
8
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
H
e
r
b
e
r
t
 
A
.
 
S
i
m
o
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
7
8
,
 
'
P
e
a
c
e
'
,
 
'
A
n
w
a
r
 
a
l
-
S
a
d
a
t
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
7
8
,
 
'
P
e
a
c
e
'
,
 
'
M
e
n
a
c
h
e
m
 
B
e
g
i
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
7
9
,
 
'
P
e
a
c
e
'
,
 
'
M
o
t
h
e
r
 
T
e
r
e
s
a
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
7
9
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
,
 
'
S
h
e
l
d
o
n
 
G
l
a
s
h
o
w
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
7
9
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
,
 
'
A
b
d
u
s
 
S
a
l
a
m
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
7
9
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
,
 
'
S
t
e
v
e
n
 
W
e
i
n
b
e
r
g
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
8
0
,
 
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
,
 
'
C
z
e
s
l
a
w
 
M
i
l
o
s
z
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
8
2
,
 
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
,
 
'
G
a
b
r
i
e
l
 
G
a
r
c
i
a
 
M
a
r
q
u
e
z
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
8
3
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
G
e
r
a
r
d
 
D
e
b
r
e
u
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
8
4
,
 
'
P
e
a
c
e
'
,
 
'
D
e
s
m
o
n
d
 
T
u
t
u
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
8
6
,
 
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
,
 
'
W
o
l
e
 
S
o
y
i
n
k
a
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
8
6
,
 
'
P
e
a
c
e
'
,
 
'
E
l
i
e
 
W
i
e
s
e
l
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
8
8
,
 
'
P
e
a
c
e
'
,
 
'
U
n
i
t
e
d
 
N
a
t
i
o
n
s
 
P
e
a
c
e
k
e
e
p
i
n
g
 
F
o
r
c
e
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
8
9
,
 
'
P
e
a
c
e
'
,
 
'
T
h
e
 
1
4
t
h
 
D
a
l
a
i
 
L
a
m
a
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
9
0
,
 
'
P
e
a
c
e
'
,
 
'
M
i
k
h
a
i
l
 
G
o
r
b
a
c
h
e
v
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
9
1
,
 
'
P
e
a
c
e
'
,
 
'
A
u
n
g
 
S
a
n
 
S
u
u
 
K
y
i
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
9
3
,
 
'
P
e
a
c
e
'
,
 
'
N
e
l
s
o
n
 
M
a
n
d
e
l
a
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
9
3
,
 
'
P
e
a
c
e
'
,
 
'
F
.
W
.
 
d
e
 
K
l
e
r
k
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
9
3
,
 
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
,
 
'
T
o
n
i
 
M
o
r
r
i
s
o
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
9
4
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
J
o
h
n
 
N
a
s
h
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
9
4
,
 
'
P
e
a
c
e
'
,
 
'
Y
a
s
s
e
r
 
A
r
a
f
a
t
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
9
4
,
 
'
P
e
a
c
e
'
,
 
'
S
h
i
m
o
n
 
P
e
r
e
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
9
4
,
 
'
P
e
a
c
e
'
,
 
'
Y
i
t
z
h
a
k
 
R
a
b
i
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
9
9
,
 
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
A
h
m
e
d
 
Z
e
w
a
i
l
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
1
9
9
9
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
R
o
b
e
r
t
 
M
u
n
d
e
l
l
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
0
0
,
 
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
,
 
'
G
a
o
 
X
i
n
g
j
i
a
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
0
1
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
J
o
s
e
p
h
 
S
t
i
g
l
i
t
z
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
0
1
,
 
'
P
e
a
c
e
'
,
 
'
U
n
i
t
e
d
 
N
a
t
i
o
n
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
0
1
,
 
'
P
e
a
c
e
'
,
 
'
K
o
f
i
 
A
n
n
a
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
0
2
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
D
a
n
i
e
l
 
K
a
h
n
e
m
a
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
0
4
,
 
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
,
 
'
E
l
f
r
i
e
d
e
 
J
e
l
i
n
e
k
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
0
5
,
 
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
,
 
'
H
a
r
o
l
d
 
P
i
n
t
e
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
0
5
,
 
'
P
e
a
c
e
'
,
 
'
I
n
t
e
r
n
a
t
i
o
n
a
l
 
A
t
o
m
i
c
 
E
n
e
r
g
y
 
A
g
e
n
c
y
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
0
5
,
 
'
P
e
a
c
e
'
,
 
'
M
o
h
a
m
e
d
 
E
l
B
a
r
a
d
e
i
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
0
6
,
 
'
P
e
a
c
e
'
,
 
'
M
u
h
a
m
m
a
d
 
Y
u
n
u
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
0
6
,
 
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
,
 
'
O
r
h
a
n
 
P
a
m
u
k
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
0
7
,
 
'
P
e
a
c
e
'
,
 
'
A
l
 
G
o
r
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
0
7
,
 
'
P
e
a
c
e
'
,
 
'
I
n
t
e
r
g
o
v
e
r
n
m
e
n
t
a
l
 
P
a
n
e
l
 
o
n
 
C
l
i
m
a
t
e
 
C
h
a
n
g
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
0
8
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
P
a
u
l
 
K
r
u
g
m
a
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
0
9
,
 
'
P
e
a
c
e
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
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
0
,
 
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
,
 
'
M
a
r
i
o
 
V
a
r
g
a
s
 
L
l
o
s
a
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
0
,
 
'
P
e
a
c
e
'
,
 
'
L
i
u
 
X
i
a
o
b
o
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
2
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
,
 
'
S
i
r
 
J
o
h
n
 
B
.
 
G
u
r
d
o
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
2
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
,
 
'
S
h
i
n
y
a
 
Y
a
m
a
n
a
k
a
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
2
,
 
'
P
e
a
c
e
'
,
 
'
E
u
r
o
p
e
a
n
 
U
n
i
o
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
3
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
,
 
'
P
e
t
e
r
 
H
i
g
g
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
3
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
,
 
'
F
r
a
n
c
o
i
s
 
E
n
g
l
e
r
t
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
3
,
 
'
P
e
a
c
e
'
,
 
'
O
r
g
a
n
i
s
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
 
P
r
o
h
i
b
i
t
i
o
n
 
o
f
 
C
h
e
m
i
c
a
l
 
W
e
a
p
o
n
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
4
,
 
'
P
e
a
c
e
'
,
 
'
K
a
i
l
a
s
h
 
S
a
t
y
a
r
t
h
i
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
4
,
 
'
P
e
a
c
e
'
,
 
'
M
a
l
a
l
a
 
Y
o
u
s
a
f
z
a
i
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
6
,
 
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
,
 
'
B
o
b
 
D
y
l
a
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
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
,
 
'
K
a
z
u
o
 
I
s
h
i
g
u
r
o
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
P
e
a
c
e
'
,
 
'
I
n
t
e
r
n
a
t
i
o
n
a
l
 
C
a
m
p
a
i
g
n
 
t
o
 
A
b
o
l
i
s
h
 
N
u
c
l
e
a
r
 
W
e
a
p
o
n
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
R
i
c
h
a
r
d
 
T
h
a
l
e
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
8
,
 
'
P
e
a
c
e
'
,
 
'
D
e
n
i
s
 
M
u
k
w
e
g
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
8
,
 
'
P
e
a
c
e
'
,
 
'
N
a
d
i
a
 
M
u
r
a
d
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
8
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
W
i
l
l
i
a
m
 
N
o
r
d
h
a
u
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
8
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
P
a
u
l
 
R
o
m
e
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
9
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
A
b
h
i
j
i
t
 
B
a
n
e
r
j
e
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
9
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
E
s
t
h
e
r
 
D
u
f
l
o
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
9
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
M
i
c
h
a
e
l
 
K
r
e
m
e
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
9
,
 
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
J
o
h
n
 
B
.
 
G
o
o
d
e
n
o
u
g
h
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
9
,
 
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
.
 
S
t
a
n
l
e
y
 
W
h
i
t
t
i
n
g
h
a
m
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
1
9
,
 
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
A
k
i
r
a
 
Y
o
s
h
i
n
o
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
0
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
,
 
'
R
o
g
e
r
 
P
e
n
r
o
s
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
0
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
,
 
'
R
e
i
n
h
a
r
d
 
G
e
n
z
e
l
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
0
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
,
 
'
A
n
d
r
e
a
 
G
h
e
z
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
0
,
 
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
E
m
m
a
n
u
e
l
l
e
 
C
h
a
r
p
e
n
t
i
e
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
0
,
 
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
J
e
n
n
i
f
e
r
 
D
o
u
d
n
a
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
0
,
 
'
P
e
a
c
e
'
,
 
'
W
o
r
l
d
 
F
o
o
d
 
P
r
o
g
r
a
m
m
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
1
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
,
 
'
S
y
u
k
u
r
o
 
M
a
n
a
b
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
1
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
,
 
'
K
l
a
u
s
 
H
a
s
s
e
l
m
a
n
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
1
,
 
'
P
e
a
c
e
'
,
 
'
M
a
r
i
a
 
R
e
s
s
a
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
1
,
 
'
P
e
a
c
e
'
,
 
'
D
m
i
t
r
y
 
M
u
r
a
t
o
v
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
1
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
D
a
v
i
d
 
C
a
r
d
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
2
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
,
 
'
A
l
a
i
n
 
A
s
p
e
c
t
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
2
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
,
 
'
J
o
h
n
 
F
.
 
C
l
a
u
s
e
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
2
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
,
 
'
A
n
t
o
n
 
Z
e
i
l
i
n
g
e
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
2
,
 
'
P
e
a
c
e
'
,
 
'
A
l
e
s
 
B
i
a
l
i
a
t
s
k
i
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
2
,
 
'
P
e
a
c
e
'
,
 
'
M
e
m
o
r
i
a
l
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
2
,
 
'
P
e
a
c
e
'
,
 
'
C
e
n
t
e
r
 
f
o
r
 
C
i
v
i
l
 
L
i
b
e
r
t
i
e
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
2
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
B
e
n
 
B
e
r
n
a
n
k
e
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
3
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
,
 
'
P
i
e
r
r
e
 
A
g
o
s
t
i
n
i
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
3
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
,
 
'
F
e
r
e
n
c
 
K
r
a
u
s
z
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
3
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
,
 
'
A
n
n
e
 
L
'
'
H
u
i
l
l
i
e
r
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
3
,
 
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
o
u
n
g
i
 
B
a
w
e
n
d
i
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
3
,
 
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
L
o
u
i
s
 
B
r
u
s
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
3
,
 
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
A
l
e
x
e
i
 
E
k
i
m
o
v
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
3
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
,
 
'
K
a
t
a
l
i
n
 
K
a
r
i
k
o
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
3
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
,
 
'
D
r
e
w
 
W
e
i
s
s
m
a
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
3
,
 
'
P
e
a
c
e
'
,
 
'
N
a
r
g
e
s
 
M
o
h
a
m
m
a
d
i
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
3
,
 
'
E
c
o
n
o
m
i
c
s
'
,
 
'
C
l
a
u
d
i
a
 
G
o
l
d
i
n
'
)
;


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
 
n
o
b
e
l
 
V
A
L
U
E
S
 
(
2
0
2
3
,
 
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
,
 
'
J
o
n
 
F
o
s
s
e
'
)
;


`
,




 
 
f
o
o
t
b
a
l
l
:
 
`


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
t
e
a
m
 
(


 
 
i
d
 
T
E
X
T
 
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


 
 
t
e
a
m
n
a
m
e
 
T
E
X
T
,


 
 
c
o
a
c
h
 
T
E
X
T


)
;




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
 
g
a
m
e
 
(


 
 
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


 
 
m
d
a
t
e
 
T
E
X
T
,


 
 
s
t
a
d
i
u
m
 
T
E
X
T
,


 
 
t
e
a
m
1
 
T
E
X
T
,


 
 
t
e
a
m
2
 
T
E
X
T


)
;




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
 
g
o
a
l
 
(


 
 
m
a
t
c
h
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


 
 
t
e
a
m
i
d
 
T
E
X
T
,


 
 
p
l
a
y
e
r
 
T
E
X
T
,


 
 
g
t
i
m
e
 
I
N
T
E
G
E
R


)
;




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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
P
O
L
'
,
 
'
P
o
l
a
n
d
'
,
 
'
F
r
a
n
c
i
s
z
e
k
 
S
m
u
d
a
'
)
;


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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
G
R
E
'
,
 
'
G
r
e
e
c
e
'
,
 
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
)
;


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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
R
U
S
'
,
 
'
R
u
s
s
i
a
'
,
 
'
D
i
c
k
 
A
d
v
o
c
a
a
t
'
)
;


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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
C
Z
E
'
,
 
'
C
z
e
c
h
 
R
e
p
u
b
l
i
c
'
,
 
'
M
i
c
h
a
l
 
B
i
l
e
k
'
)
;


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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
N
E
D
'
,
 
'
N
e
t
h
e
r
l
a
n
d
s
'
,
 
'
B
e
r
t
 
v
a
n
 
M
a
r
w
i
j
k
'
)
;


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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
D
E
N
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
,
 
'
M
o
r
t
e
n
 
O
l
s
e
n
'
)
;


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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
G
E
R
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
J
o
a
c
h
i
m
 
L
o
w
'
)
;


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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
P
O
R
'
,
 
'
P
o
r
t
u
g
a
l
'
,
 
'
P
a
u
l
o
 
B
e
n
t
o
'
)
;


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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
E
S
P
'
,
 
'
S
p
a
i
n
'
,
 
'
V
i
c
e
n
t
e
 
d
e
l
 
B
o
s
q
u
e
'
)
;


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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
I
T
A
'
,
 
'
I
t
a
l
y
'
,
 
'
C
e
s
a
r
e
 
P
r
a
n
d
e
l
l
i
'
)
;


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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
I
R
L
'
,
 
'
R
e
p
u
b
l
i
c
 
o
f
 
I
r
e
l
a
n
d
'
,
 
'
G
i
o
v
a
n
n
i
 
T
r
a
p
a
t
t
o
n
i
'
)
;


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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
C
R
O
'
,
 
'
C
r
o
a
t
i
a
'
,
 
'
S
l
a
v
e
n
 
B
i
l
i
c
'
)
;


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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
U
K
R
'
,
 
'
U
k
r
a
i
n
e
'
,
 
'
O
l
e
h
 
B
l
o
k
h
i
n
'
)
;


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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
S
W
E
'
,
 
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
E
r
i
k
 
H
a
m
r
e
n
'
)
;


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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
F
R
A
'
,
 
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
L
a
u
r
e
n
t
 
B
l
a
n
c
'
)
;


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
 
e
t
e
a
m
 
V
A
L
U
E
S
 
(
'
E
N
G
'
,
 
'
E
n
g
l
a
n
d
'
,
 
'
R
o
y
 
H
o
d
g
s
o
n
'
)
;




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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
0
1
,
 
'
8
 
J
u
n
e
 
2
0
1
2
'
,
 
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
,
 
'
P
O
L
'
,
 
'
G
R
E
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
0
2
,
 
'
8
 
J
u
n
e
 
2
0
1
2
'
,
 
'
S
t
a
d
i
o
n
 
M
i
e
j
s
k
i
 
(
W
r
o
c
l
a
w
)
'
,
 
'
R
U
S
'
,
 
'
C
Z
E
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
0
3
,
 
'
1
2
 
J
u
n
e
 
2
0
1
2
'
,
 
'
S
t
a
d
i
o
n
 
M
i
e
j
s
k
i
 
(
W
r
o
c
l
a
w
)
'
,
 
'
G
R
E
'
,
 
'
C
Z
E
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
0
4
,
 
'
1
2
 
J
u
n
e
 
2
0
1
2
'
,
 
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
,
 
'
P
O
L
'
,
 
'
R
U
S
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
0
5
,
 
'
1
6
 
J
u
n
e
 
2
0
1
2
'
,
 
'
S
t
a
d
i
o
n
 
M
i
e
j
s
k
i
 
(
W
r
o
c
l
a
w
)
'
,
 
'
C
Z
E
'
,
 
'
P
O
L
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
0
6
,
 
'
1
6
 
J
u
n
e
 
2
0
1
2
'
,
 
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
,
 
'
G
R
E
'
,
 
'
R
U
S
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
0
7
,
 
'
9
 
J
u
n
e
 
2
0
1
2
'
,
 
'
M
e
t
a
l
i
s
t
 
S
t
a
d
i
u
m
'
,
 
'
N
E
D
'
,
 
'
D
E
N
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
0
8
,
 
'
9
 
J
u
n
e
 
2
0
1
2
'
,
 
'
A
r
e
n
a
 
L
v
i
v
'
,
 
'
G
E
R
'
,
 
'
P
O
R
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
0
9
,
 
'
1
3
 
J
u
n
e
 
2
0
1
2
'
,
 
'
A
r
e
n
a
 
L
v
i
v
'
,
 
'
D
E
N
'
,
 
'
P
O
R
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
1
0
,
 
'
1
3
 
J
u
n
e
 
2
0
1
2
'
,
 
'
M
e
t
a
l
i
s
t
 
S
t
a
d
i
u
m
'
,
 
'
N
E
D
'
,
 
'
G
E
R
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
1
1
,
 
'
1
7
 
J
u
n
e
 
2
0
1
2
'
,
 
'
M
e
t
a
l
i
s
t
 
S
t
a
d
i
u
m
'
,
 
'
P
O
R
'
,
 
'
N
E
D
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
1
2
,
 
'
1
7
 
J
u
n
e
 
2
0
1
2
'
,
 
'
A
r
e
n
a
 
L
v
i
v
'
,
 
'
D
E
N
'
,
 
'
G
E
R
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
1
3
,
 
'
1
0
 
J
u
n
e
 
2
0
1
2
'
,
 
'
P
G
E
 
A
r
e
n
a
 
G
d
a
n
s
k
'
,
 
'
E
S
P
'
,
 
'
I
T
A
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
1
4
,
 
'
1
0
 
J
u
n
e
 
2
0
1
2
'
,
 
'
M
u
n
i
c
i
p
a
l
 
S
t
a
d
i
u
m
 
(
P
o
z
n
a
n
)
'
,
 
'
I
R
L
'
,
 
'
C
R
O
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
1
5
,
 
'
1
4
 
J
u
n
e
 
2
0
1
2
'
,
 
'
P
G
E
 
A
r
e
n
a
 
G
d
a
n
s
k
'
,
 
'
E
S
P
'
,
 
'
I
R
L
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
1
6
,
 
'
1
4
 
J
u
n
e
 
2
0
1
2
'
,
 
'
M
u
n
i
c
i
p
a
l
 
S
t
a
d
i
u
m
 
(
P
o
z
n
a
n
)
'
,
 
'
I
T
A
'
,
 
'
C
R
O
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
1
7
,
 
'
1
8
 
J
u
n
e
 
2
0
1
2
'
,
 
'
P
G
E
 
A
r
e
n
a
 
G
d
a
n
s
k
'
,
 
'
C
R
O
'
,
 
'
E
S
P
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
1
8
,
 
'
1
8
 
J
u
n
e
 
2
0
1
2
'
,
 
'
M
u
n
i
c
i
p
a
l
 
S
t
a
d
i
u
m
 
(
P
o
z
n
a
n
)
'
,
 
'
I
T
A
'
,
 
'
I
R
L
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
1
9
,
 
'
1
1
 
J
u
n
e
 
2
0
1
2
'
,
 
'
D
o
n
b
a
s
s
 
A
r
e
n
a
'
,
 
'
F
R
A
'
,
 
'
E
N
G
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
2
0
,
 
'
1
1
 
J
u
n
e
 
2
0
1
2
'
,
 
'
O
l
y
m
p
i
c
 
S
t
a
d
i
u
m
 
(
K
y
i
v
)
'
,
 
'
U
K
R
'
,
 
'
S
W
E
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
2
1
,
 
'
1
5
 
J
u
n
e
 
2
0
1
2
'
,
 
'
D
o
n
b
a
s
s
 
A
r
e
n
a
'
,
 
'
U
K
R
'
,
 
'
F
R
A
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
2
2
,
 
'
1
5
 
J
u
n
e
 
2
0
1
2
'
,
 
'
O
l
y
m
p
i
c
 
S
t
a
d
i
u
m
 
(
K
y
i
v
)
'
,
 
'
S
W
E
'
,
 
'
E
N
G
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
2
3
,
 
'
1
9
 
J
u
n
e
 
2
0
1
2
'
,
 
'
D
o
n
b
a
s
s
 
A
r
e
n
a
'
,
 
'
E
N
G
'
,
 
'
U
K
R
'
)
;


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
 
g
a
m
e
 
V
A
L
U
E
S
 
(
1
0
2
4
,
 
'
1
9
 
J
u
n
e
 
2
0
1
2
'
,
 
'
O
l
y
m
p
i
c
 
S
t
a
d
i
u
m
 
(
K
y
i
v
)
'
,
 
'
S
W
E
'
,
 
'
F
R
A
'
)
;




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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
1
,
 
'
P
O
L
'
,
 
'
R
o
b
e
r
t
 
L
e
w
a
n
d
o
w
s
k
i
'
,
 
1
7
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
1
,
 
'
G
R
E
'
,
 
'
D
i
m
i
t
r
i
s
 
S
a
l
p
i
n
g
i
d
i
s
'
,
 
5
1
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
2
,
 
'
R
U
S
'
,
 
'
A
l
a
n
 
D
z
a
g
o
e
v
'
,
 
1
5
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
2
,
 
'
R
U
S
'
,
 
'
A
l
a
n
 
D
z
a
g
o
e
v
'
,
 
7
9
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
2
,
 
'
R
U
S
'
,
 
'
R
o
m
a
n
 
S
h
i
r
o
k
o
v
'
,
 
2
4
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
2
,
 
'
R
U
S
'
,
 
'
R
o
m
a
n
 
P
a
v
l
y
u
c
h
e
n
k
o
'
,
 
8
2
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
2
,
 
'
C
Z
E
'
,
 
'
V
a
c
l
a
v
 
P
i
l
a
r
'
,
 
5
2
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
3
,
 
'
G
R
E
'
,
 
'
T
h
e
o
f
a
n
i
s
 
G
e
k
a
s
'
,
 
5
3
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
3
,
 
'
C
Z
E
'
,
 
'
P
e
t
r
 
J
i
r
a
c
e
k
'
,
 
3
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
3
,
 
'
C
Z
E
'
,
 
'
V
a
c
l
a
v
 
P
i
l
a
r
'
,
 
6
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
4
,
 
'
P
O
L
'
,
 
'
J
a
k
u
b
 
B
l
a
s
z
c
z
y
k
o
w
s
k
i
'
,
 
5
7
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
4
,
 
'
R
U
S
'
,
 
'
A
l
a
n
 
D
z
a
g
o
e
v
'
,
 
3
7
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
5
,
 
'
C
Z
E
'
,
 
'
P
e
t
r
 
J
i
r
a
c
e
k
'
,
 
7
2
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
6
,
 
'
G
R
E
'
,
 
'
G
i
o
r
g
o
s
 
K
a
r
a
g
o
u
n
i
s
'
,
 
4
5
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
7
,
 
'
D
E
N
'
,
 
'
M
i
c
h
a
e
l
 
K
r
o
h
n
-
D
e
h
l
i
'
,
 
2
4
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
8
,
 
'
G
E
R
'
,
 
'
M
a
r
i
o
 
G
o
m
e
z
'
,
 
7
2
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
9
,
 
'
P
O
R
'
,
 
'
P
e
p
e
'
,
 
2
4
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
9
,
 
'
P
O
R
'
,
 
'
H
e
l
d
e
r
 
P
o
s
t
i
g
a
'
,
 
3
6
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
9
,
 
'
P
O
R
'
,
 
'
S
i
l
v
e
s
t
r
e
 
V
a
r
e
l
a
'
,
 
8
7
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
9
,
 
'
D
E
N
'
,
 
'
M
i
c
h
a
e
l
 
K
r
o
h
n
-
D
e
h
l
i
'
,
 
4
1
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
0
9
,
 
'
D
E
N
'
,
 
'
N
i
c
k
l
a
s
 
B
e
n
d
t
n
e
r
'
,
 
8
0
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
0
,
 
'
N
E
D
'
,
 
'
R
o
b
i
n
 
v
a
n
 
P
e
r
s
i
e
'
,
 
7
3
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
0
,
 
'
G
E
R
'
,
 
'
M
a
r
i
o
 
G
o
m
e
z
'
,
 
2
4
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
0
,
 
'
G
E
R
'
,
 
'
M
a
r
i
o
 
G
o
m
e
z
'
,
 
3
8
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
1
,
 
'
P
O
R
'
,
 
'
C
r
i
s
t
i
a
n
o
 
R
o
n
a
l
d
o
'
,
 
2
8
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
1
,
 
'
P
O
R
'
,
 
'
C
r
i
s
t
i
a
n
o
 
R
o
n
a
l
d
o
'
,
 
7
4
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
2
,
 
'
D
E
N
'
,
 
'
M
i
c
h
a
e
l
 
K
r
o
h
n
-
D
e
h
l
i
'
,
 
2
4
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
2
,
 
'
G
E
R
'
,
 
'
L
u
k
a
s
 
P
o
d
o
l
s
k
i
'
,
 
1
9
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
2
,
 
'
G
E
R
'
,
 
'
L
a
r
s
 
B
e
n
d
e
r
'
,
 
8
0
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
3
,
 
'
E
S
P
'
,
 
'
C
e
s
c
 
F
a
b
r
e
g
a
s
'
,
 
6
4
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
3
,
 
'
I
T
A
'
,
 
'
A
n
t
o
n
i
o
 
D
i
 
N
a
t
a
l
e
'
,
 
6
1
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
3
,
 
'
E
S
P
'
,
 
'
D
a
v
i
d
 
S
i
l
v
a
'
,
 
4
2
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
3
,
 
'
I
T
A
'
,
 
'
A
n
d
r
e
a
 
P
i
r
l
o
'
,
 
6
9
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
4
,
 
'
C
R
O
'
,
 
'
M
a
r
i
o
 
M
a
n
d
z
u
k
i
c
'
,
 
3
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
4
,
 
'
I
R
L
'
,
 
'
S
e
a
n
 
S
t
 
L
e
d
g
e
r
'
,
 
1
9
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
4
,
 
'
C
R
O
'
,
 
'
M
a
r
i
o
 
M
a
n
d
z
u
k
i
c
'
,
 
4
9
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
4
,
 
'
C
R
O
'
,
 
'
N
i
k
i
c
a
 
J
e
l
a
v
i
c
'
,
 
4
3
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
5
,
 
'
E
S
P
'
,
 
'
F
e
r
n
a
n
d
o
 
T
o
r
r
e
s
'
,
 
4
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
5
,
 
'
E
S
P
'
,
 
'
D
a
v
i
d
 
S
i
l
v
a
'
,
 
4
9
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
5
,
 
'
E
S
P
'
,
 
'
F
e
r
n
a
n
d
o
 
T
o
r
r
e
s
'
,
 
7
0
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
5
,
 
'
E
S
P
'
,
 
'
C
e
s
c
 
F
a
b
r
e
g
a
s
'
,
 
8
3
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
6
,
 
'
I
T
A
'
,
 
'
A
n
d
r
e
a
 
P
i
r
l
o
'
,
 
3
9
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
6
,
 
'
C
R
O
'
,
 
'
M
a
r
i
o
 
M
a
n
d
z
u
k
i
c
'
,
 
7
2
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
6
,
 
'
I
T
A
'
,
 
'
M
a
r
i
o
 
B
a
l
o
t
e
l
l
i
'
,
 
8
5
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
7
,
 
'
E
S
P
'
,
 
'
J
e
s
u
s
 
N
a
v
a
s
'
,
 
8
8
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
8
,
 
'
I
T
A
'
,
 
'
A
n
t
o
n
i
o
 
C
a
s
s
a
n
o
'
,
 
3
5
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
8
,
 
'
I
T
A
'
,
 
'
M
a
r
i
o
 
B
a
l
o
t
e
l
l
i
'
,
 
9
0
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
9
,
 
'
F
R
A
'
,
 
'
S
a
m
i
r
 
N
a
s
r
i
'
,
 
3
9
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
1
9
,
 
'
E
N
G
'
,
 
'
J
o
l
e
o
n
 
L
e
s
c
o
t
t
'
,
 
3
0
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
0
,
 
'
U
K
R
'
,
 
'
A
n
d
r
i
y
 
S
h
e
v
c
h
e
n
k
o
'
,
 
5
5
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
0
,
 
'
U
K
R
'
,
 
'
A
n
d
r
i
y
 
S
h
e
v
c
h
e
n
k
o
'
,
 
6
2
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
0
,
 
'
S
W
E
'
,
 
'
Z
l
a
t
a
n
 
I
b
r
a
h
i
m
o
v
i
c
'
,
 
5
2
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
1
,
 
'
U
K
R
'
,
 
'
Y
e
v
h
e
n
 
K
h
a
c
h
e
r
i
d
i
'
,
 
5
5
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
1
,
 
'
F
R
A
'
,
 
'
J
e
r
e
m
y
 
M
e
n
e
z
'
,
 
5
3
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
2
,
 
'
S
W
E
'
,
 
'
G
l
e
n
 
J
o
h
n
s
o
n
'
,
 
4
9
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
2
,
 
'
E
N
G
'
,
 
'
A
n
d
y
 
C
a
r
r
o
l
l
'
,
 
2
3
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
2
,
 
'
E
N
G
'
,
 
'
T
h
e
o
 
W
a
l
c
o
t
t
'
,
 
6
4
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
2
,
 
'
S
W
E
'
,
 
'
O
l
o
f
 
M
e
l
l
b
e
r
g
'
,
 
5
9
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
2
,
 
'
S
W
E
'
,
 
'
O
l
o
f
 
M
e
l
l
b
e
r
g
'
,
 
7
2
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
2
,
 
'
E
N
G
'
,
 
'
D
a
n
n
y
 
W
e
l
b
e
c
k
'
,
 
7
8
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
3
,
 
'
E
N
G
'
,
 
'
W
a
y
n
e
 
R
o
o
n
e
y
'
,
 
4
8
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
4
,
 
'
S
W
E
'
,
 
'
Z
l
a
t
a
n
 
I
b
r
a
h
i
m
o
v
i
c
'
,
 
5
4
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
4
,
 
'
F
R
A
'
,
 
'
J
e
r
e
m
y
 
M
e
n
e
z
'
,
 
1
6
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
4
,
 
'
S
W
E
'
,
 
'
S
e
b
a
s
t
i
a
n
 
L
a
r
s
s
o
n
'
,
 
1
9
)
;


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
 
g
o
a
l
 
V
A
L
U
E
S
 
(
1
0
2
4
,
 
'
F
R
A
'
,
 
'
O
l
i
v
i
e
r
 
G
i
r
o
u
d
'
,
 
5
9
)
;


`
,




 
 
m
o
v
i
e
:
 
`


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
 
a
c
t
o
r
 
(


 
 
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


 
 
n
a
m
e
 
T
E
X
T


)
;




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
 
m
o
v
i
e
 
(


 
 
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


 
 
t
i
t
l
e
 
T
E
X
T
,


 
 
y
r
 
I
N
T
E
G
E
R
,


 
 
d
i
r
e
c
t
o
r
 
I
N
T
E
G
E
R
,


 
 
b
u
d
g
e
t
 
R
E
A
L
,


 
 
g
r
o
s
s
 
R
E
A
L


)
;




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
a
s
t
i
n
g
 
(


 
 
m
o
v
i
e
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


 
 
a
c
t
o
r
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


 
 
o
r
d
 
I
N
T
E
G
E
R


)
;




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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
1
,
 
'
O
r
s
o
n
 
W
e
l
l
e
s
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
2
,
 
'
J
o
s
e
p
h
 
C
o
t
t
e
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
3
,
 
'
H
u
m
p
h
r
e
y
 
B
o
g
a
r
t
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
4
,
 
'
I
n
g
r
i
d
 
B
e
r
g
m
a
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
5
,
 
'
P
a
u
l
 
H
e
n
r
e
i
d
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
6
,
 
'
C
l
a
u
d
e
 
R
a
i
n
s
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
7
,
 
'
W
i
l
l
i
a
m
 
S
h
a
t
n
e
r
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
8
,
 
'
L
e
o
n
a
r
d
 
N
i
m
o
y
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
9
,
 
'
D
e
F
o
r
e
s
t
 
K
e
l
l
e
y
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
1
0
,
 
'
S
i
g
o
u
r
n
e
y
 
W
e
a
v
e
r
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
1
1
,
 
'
T
o
m
 
S
k
e
r
r
i
t
t
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
1
2
,
 
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
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
1
3
,
 
'
M
a
r
k
 
H
a
m
i
l
l
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
1
4
,
 
'
C
a
r
r
i
e
 
F
i
s
h
e
r
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
1
5
,
 
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
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
1
6
,
 
'
C
h
r
i
s
t
o
p
h
e
r
 
P
l
u
m
m
e
r
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
1
7
,
 
'
D
i
c
k
 
V
a
n
 
D
y
k
e
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
1
8
,
 
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
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
1
9
,
 
'
J
a
c
k
 
N
i
c
h
o
l
s
o
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
2
0
,
 
'
A
n
n
-
M
a
r
g
r
e
t
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
2
1
,
 
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
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
2
2
,
 
'
D
o
r
i
s
 
D
a
y
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
2
3
,
 
'
T
o
n
y
 
R
a
n
d
a
l
l
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
2
4
,
 
'
J
a
m
e
s
 
S
t
e
w
a
r
t
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
2
5
,
 
'
G
r
a
c
e
 
K
e
l
l
y
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
2
6
,
 
'
A
l
 
P
a
c
i
n
o
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
2
7
,
 
'
M
a
r
l
o
n
 
B
r
a
n
d
o
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
2
8
,
 
'
J
a
m
e
s
 
C
a
a
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
2
9
,
 
'
R
o
b
e
r
t
 
D
u
v
a
l
l
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
3
0
,
 
'
D
i
a
n
e
 
K
e
a
t
o
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
3
1
,
 
'
R
o
b
e
r
t
 
D
e
 
N
i
r
o
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
3
2
,
 
'
S
e
a
n
 
C
o
n
n
e
r
y
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
3
3
,
 
'
U
r
s
u
l
a
 
A
n
d
r
e
s
s
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
3
4
,
 
'
R
o
g
e
r
 
M
o
o
r
e
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
3
5
,
 
'
T
i
m
 
R
o
b
b
i
n
s
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
3
6
,
 
'
M
o
r
g
a
n
 
F
r
e
e
m
a
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
3
7
,
 
'
T
o
m
 
H
a
n
k
s
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
3
8
,
 
'
R
o
b
i
n
 
W
r
i
g
h
t
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
3
9
,
 
'
G
a
r
y
 
S
i
n
i
s
e
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
4
0
,
 
'
K
e
a
n
u
 
R
e
e
v
e
s
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
4
1
,
 
'
L
a
u
r
e
n
c
e
 
F
i
s
h
b
u
r
n
e
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
4
2
,
 
'
C
a
r
r
i
e
-
A
n
n
e
 
M
o
s
s
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
4
3
,
 
'
L
i
a
m
 
N
e
e
s
o
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
4
4
,
 
'
B
e
n
 
K
i
n
g
s
l
e
y
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
4
5
,
 
'
R
a
l
p
h
 
F
i
e
n
n
e
s
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
4
6
,
 
'
J
o
h
n
 
T
r
a
v
o
l
t
a
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
4
7
,
 
'
S
a
m
u
e
l
 
L
.
 
J
a
c
k
s
o
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
4
8
,
 
'
U
m
a
 
T
h
u
r
m
a
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
4
9
,
 
'
H
e
a
t
h
 
L
e
d
g
e
r
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
5
0
,
 
'
C
h
r
i
s
t
i
a
n
 
B
a
l
e
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
5
1
,
 
'
L
e
o
n
a
r
d
o
 
D
i
C
a
p
r
i
o
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
5
2
,
 
'
K
a
t
e
 
W
i
n
s
l
e
t
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
5
3
,
 
'
B
i
l
l
y
 
Z
a
n
e
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
5
4
,
 
'
V
i
v
i
e
n
 
L
e
i
g
h
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
5
5
,
 
'
C
l
a
r
k
 
G
a
b
l
e
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
5
6
,
 
'
O
l
i
v
i
a
 
d
e
 
H
a
v
i
l
l
a
n
d
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
5
7
,
 
'
G
r
e
g
o
r
y
 
P
e
c
k
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
5
8
,
 
'
M
a
r
y
 
B
a
d
h
a
m
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
5
9
,
 
'
J
u
d
y
 
G
a
r
l
a
n
d
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
6
0
,
 
'
F
r
a
n
k
 
M
o
r
g
a
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
6
1
,
 
'
S
e
a
n
 
A
s
t
i
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
6
2
,
 
'
E
l
i
j
a
h
 
W
o
o
d
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
6
3
,
 
'
I
a
n
 
M
c
K
e
l
l
e
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
6
4
,
 
'
R
u
s
s
e
l
l
 
C
r
o
w
e
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
6
5
,
 
'
J
o
a
q
u
i
n
 
P
h
o
e
n
i
x
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
6
6
,
 
'
C
o
n
n
i
e
 
N
i
e
l
s
e
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
6
7
,
 
'
P
a
t
r
i
c
k
 
S
t
e
w
a
r
t
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
6
8
,
 
'
N
i
c
h
e
l
l
e
 
N
i
c
h
o
l
s
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
6
9
,
 
'
W
a
l
t
e
r
 
K
o
e
n
i
g
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
7
0
,
 
'
G
e
o
r
g
e
 
T
a
k
e
i
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
7
1
,
 
'
J
a
m
e
s
 
D
o
o
h
a
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
7
2
,
 
'
R
i
c
a
r
d
o
 
M
o
n
t
a
l
b
a
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
7
3
,
 
'
K
i
r
s
t
i
e
 
A
l
l
e
y
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
7
4
,
 
'
C
h
r
i
s
 
P
i
n
e
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
7
5
,
 
'
Z
a
c
h
a
r
y
 
Q
u
i
n
t
o
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
7
6
,
 
'
B
e
n
e
d
i
c
t
 
C
u
m
b
e
r
b
a
t
c
h
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
7
7
,
 
'
K
a
r
e
n
 
G
i
l
l
a
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
7
8
,
 
'
M
i
c
h
a
e
l
 
B
i
e
h
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
7
9
,
 
'
L
i
n
d
a
 
H
a
m
i
l
t
o
n
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
8
0
,
 
'
A
r
n
o
l
d
 
S
c
h
w
a
r
z
e
n
e
g
g
e
r
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
8
1
,
 
'
D
o
r
o
t
h
y
 
M
c
G
u
i
r
e
'
)
;


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
 
a
c
t
o
r
 
V
A
L
U
E
S
 
(
8
2
,
 
'
T
e
r
e
s
a
 
W
r
i
g
h
t
'
)
;




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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
0
1
,
 
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
,
 
1
9
4
1
,
 
1
,
 
8
3
9
7
2
7
,
 
1
5
8
5
6
3
4
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
0
2
,
 
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
,
 
1
9
4
2
,
 
1
0
1
,
 
1
0
3
9
0
0
0
,
 
1
0
4
6
2
5
0
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
0
3
,
 
'
S
t
a
r
 
W
a
r
s
:
 
E
p
i
s
o
d
e
 
I
V
 
-
 
A
 
N
e
w
 
H
o
p
e
'
,
 
1
9
7
7
,
 
1
0
2
,
 
1
1
0
0
0
0
0
0
,
 
7
7
5
3
9
8
0
0
7
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
0
4
,
 
'
T
h
e
 
E
m
p
i
r
e
 
S
t
r
i
k
e
s
 
B
a
c
k
'
,
 
1
9
8
0
,
 
1
0
3
,
 
1
8
0
0
0
0
0
0
,
 
5
3
8
3
7
5
0
6
7
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
0
5
,
 
'
R
e
t
u
r
n
 
o
f
 
t
h
e
 
J
e
d
i
'
,
 
1
9
8
3
,
 
1
0
4
,
 
3
2
5
0
0
0
0
0
,
 
4
7
5
1
0
6
1
7
7
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
0
6
,
 
'
S
t
a
r
 
T
r
e
k
:
 
T
h
e
 
M
o
t
i
o
n
 
P
i
c
t
u
r
e
'
,
 
1
9
7
9
,
 
1
0
5
,
 
4
6
0
0
0
0
0
0
,
 
1
3
9
0
0
0
0
0
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
0
7
,
 
'
S
t
a
r
 
T
r
e
k
 
I
I
:
 
T
h
e
 
W
r
a
t
h
 
o
f
 
K
h
a
n
'
,
 
1
9
8
2
,
 
1
0
6
,
 
1
2
0
0
0
0
0
0
,
 
9
7
0
0
0
0
0
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
0
8
,
 
'
S
t
a
r
 
T
r
e
k
 
I
I
I
:
 
T
h
e
 
S
e
a
r
c
h
 
f
o
r
 
S
p
o
c
k
'
,
 
1
9
8
4
,
 
1
0
7
,
 
1
6
0
0
0
0
0
0
,
 
8
7
0
0
0
0
0
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
0
9
,
 
'
S
t
a
r
 
T
r
e
k
 
I
V
:
 
T
h
e
 
V
o
y
a
g
e
 
H
o
m
e
'
,
 
1
9
8
6
,
 
1
0
7
,
 
2
1
0
0
0
0
0
0
,
 
1
3
3
0
0
0
0
0
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
1
0
,
 
'
S
t
a
r
 
T
r
e
k
 
V
:
 
T
h
e
 
F
i
n
a
l
 
F
r
o
n
t
i
e
r
'
,
 
1
9
8
9
,
 
7
,
 
3
3
0
0
0
0
0
0
,
 
6
3
0
0
0
0
0
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
1
1
,
 
'
S
t
a
r
 
T
r
e
k
 
V
I
:
 
T
h
e
 
U
n
d
i
s
c
o
v
e
r
e
d
 
C
o
u
n
t
r
y
'
,
 
1
9
9
1
,
 
1
0
6
,
 
2
7
0
0
0
0
0
0
,
 
9
7
0
0
0
0
0
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
1
2
,
 
'
A
l
i
e
n
'
,
 
1
9
7
9
,
 
1
0
8
,
 
1
1
0
0
0
0
0
0
,
 
2
0
3
6
3
0
6
3
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
1
3
,
 
'
A
l
i
e
n
s
'
,
 
1
9
8
6
,
 
1
0
9
,
 
1
8
5
0
0
0
0
0
,
 
1
3
1
0
6
0
2
4
8
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
1
4
,
 
'
T
h
e
 
S
o
u
n
d
 
o
f
 
M
u
s
i
c
'
,
 
1
9
6
5
,
 
1
0
5
,
 
8
2
0
0
0
0
0
,
 
2
8
6
2
1
4
0
7
6
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
1
5
,
 
'
M
a
r
y
 
P
o
p
p
i
n
s
'
,
 
1
9
6
4
,
 
1
1
0
,
 
5
2
0
0
0
0
0
,
 
1
0
2
2
7
2
7
2
7
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
1
6
,
 
'
C
a
r
n
a
l
 
K
n
o
w
l
e
d
g
e
'
,
 
1
9
7
1
,
 
1
1
1
,
 
6
3
0
0
0
0
0
,
 
1
4
5
7
6
5
3
4
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
1
7
,
 
'
C
a
t
c
h
-
2
2
'
,
 
1
9
7
0
,
 
1
1
1
,
 
1
8
0
0
0
0
0
0
,
 
2
4
9
1
1
6
7
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
1
8
,
 
'
P
i
l
l
o
w
 
T
a
l
k
'
,
 
1
9
5
9
,
 
1
1
2
,
 
2
0
2
5
0
0
0
,
 
1
8
7
5
0
0
0
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
1
9
,
 
'
L
o
v
e
r
 
C
o
m
e
 
B
a
c
k
'
,
 
1
9
6
1
,
 
1
1
3
,
 
1
8
0
0
0
0
0
,
 
1
7
0
0
0
0
0
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
2
0
,
 
'
S
e
n
d
 
M
e
 
N
o
 
F
l
o
w
e
r
s
'
,
 
1
9
6
4
,
 
1
1
4
,
 
1
7
0
0
0
0
0
,
 
1
1
0
0
0
0
0
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
2
1
,
 
'
R
e
a
r
 
W
i
n
d
o
w
'
,
 
1
9
5
4
,
 
1
1
5
,
 
1
0
0
0
0
0
0
,
 
3
6
7
6
4
3
1
3
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
2
2
,
 
'
T
h
e
 
G
o
d
f
a
t
h
e
r
'
,
 
1
9
7
2
,
 
1
1
6
,
 
6
0
0
0
0
0
0
,
 
2
4
5
0
6
6
4
1
1
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
2
3
,
 
'
T
h
e
 
G
o
d
f
a
t
h
e
r
 
P
a
r
t
 
I
I
'
,
 
1
9
7
4
,
 
1
1
6
,
 
1
3
0
0
0
0
0
0
,
 
5
7
3
0
0
0
0
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
2
4
,
 
'
G
o
o
d
f
e
l
l
a
s
'
,
 
1
9
9
0
,
 
1
1
7
,
 
2
5
0
0
0
0
0
0
,
 
4
6
8
3
6
3
9
4
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
2
5
,
 
'
D
r
.
 
N
o
'
,
 
1
9
6
2
,
 
1
1
8
,
 
1
1
0
0
0
0
0
,
 
5
9
5
6
7
0
3
5
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
2
6
,
 
'
T
h
e
 
S
p
y
 
W
h
o
 
L
o
v
e
d
 
M
e
'
,
 
1
9
7
7
,
 
1
1
9
,
 
1
3
5
0
0
0
0
0
,
 
1
8
5
4
0
0
0
0
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
2
7
,
 
'
T
h
e
 
S
h
a
w
s
h
a
n
k
 
R
e
d
e
m
p
t
i
o
n
'
,
 
1
9
9
4
,
 
1
2
0
,
 
2
5
0
0
0
0
0
0
,
 
5
8
3
0
0
0
0
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
2
8
,
 
'
F
o
r
r
e
s
t
 
G
u
m
p
'
,
 
1
9
9
4
,
 
1
2
1
,
 
5
5
0
0
0
0
0
0
,
 
6
7
8
2
2
6
1
3
3
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
2
9
,
 
'
T
h
e
 
M
a
t
r
i
x
'
,
 
1
9
9
9
,
 
1
2
2
,
 
6
3
0
0
0
0
0
0
,
 
4
6
7
2
2
2
7
2
8
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
3
0
,
 
'
S
c
h
i
n
d
l
e
r
'
'
s
 
L
i
s
t
'
,
 
1
9
9
3
,
 
1
2
3
,
 
2
2
0
0
0
0
0
0
,
 
3
2
2
1
6
1
2
4
5
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
3
1
,
 
'
P
u
l
p
 
F
i
c
t
i
o
n
'
,
 
1
9
9
4
,
 
1
2
4
,
 
8
0
0
0
0
0
0
,
 
2
1
3
9
2
8
7
6
2
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
3
2
,
 
'
T
h
e
 
D
a
r
k
 
K
n
i
g
h
t
'
,
 
2
0
0
8
,
 
1
2
5
,
 
1
8
5
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
4
5
5
8
4
4
4
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
3
3
,
 
'
T
i
t
a
n
i
c
'
,
 
1
9
9
7
,
 
1
0
9
,
 
2
0
0
0
0
0
0
0
0
,
 
2
2
6
4
1
6
2
3
5
3
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
3
4
,
 
'
G
o
n
e
 
w
i
t
h
 
t
h
e
 
W
i
n
d
'
,
 
1
9
3
9
,
 
1
2
6
,
 
3
9
0
0
0
0
0
,
 
4
0
2
3
5
2
5
7
9
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
3
5
,
 
'
T
o
 
K
i
l
l
 
a
 
M
o
c
k
i
n
g
b
i
r
d
'
,
 
1
9
6
2
,
 
1
2
7
,
 
2
0
0
0
0
0
0
,
 
1
3
1
2
9
8
4
6
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
3
6
,
 
'
T
h
e
 
W
i
z
a
r
d
 
o
f
 
O
z
'
,
 
1
9
3
9
,
 
1
2
8
,
 
2
7
7
7
0
0
0
,
 
2
3
2
1
9
0
0
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
3
7
,
 
'
T
h
e
 
L
o
r
d
 
o
f
 
t
h
e
 
R
i
n
g
s
:
 
T
h
e
 
R
e
t
u
r
n
 
o
f
 
t
h
e
 
K
i
n
g
'
,
 
2
0
0
3
,
 
1
2
9
,
 
9
4
0
0
0
0
0
0
,
 
1
1
4
6
0
3
0
9
1
2
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
3
8
,
 
'
G
l
a
d
i
a
t
o
r
'
,
 
2
0
0
0
,
 
1
0
8
,
 
1
0
3
0
0
0
0
0
0
,
 
4
6
0
5
8
3
9
6
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
3
9
,
 
'
S
t
a
r
 
T
r
e
k
'
,
 
2
0
0
9
,
 
1
3
0
,
 
1
5
0
0
0
0
0
0
0
,
 
3
8
5
6
8
0
4
4
6
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
4
0
,
 
'
S
t
a
r
 
T
r
e
k
 
I
n
t
o
 
D
a
r
k
n
e
s
s
'
,
 
2
0
1
3
,
 
1
3
0
,
 
1
9
0
0
0
0
0
0
0
,
 
4
6
7
3
6
5
2
4
6
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
4
1
,
 
'
S
t
a
r
 
T
r
e
k
 
B
e
y
o
n
d
'
,
 
2
0
1
6
,
 
1
3
1
,
 
1
8
5
0
0
0
0
0
0
,
 
3
4
3
4
7
1
8
1
6
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
4
2
,
 
'
R
a
i
d
e
r
s
 
o
f
 
t
h
e
 
L
o
s
t
 
A
r
k
'
,
 
1
9
8
1
,
 
1
2
3
,
 
2
0
0
0
0
0
0
0
,
 
3
8
9
9
2
5
9
7
1
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
4
3
,
 
'
I
n
d
i
a
n
a
 
J
o
n
e
s
 
a
n
d
 
t
h
e
 
T
e
m
p
l
e
 
o
f
 
D
o
o
m
'
,
 
1
9
8
4
,
 
1
2
3
,
 
2
8
0
0
0
0
0
0
,
 
3
3
3
1
0
7
2
7
1
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
4
4
,
 
'
I
n
d
i
a
n
a
 
J
o
n
e
s
 
a
n
d
 
t
h
e
 
L
a
s
t
 
C
r
u
s
a
d
e
'
,
 
1
9
8
9
,
 
1
2
3
,
 
4
8
0
0
0
0
0
0
,
 
4
7
4
1
7
1
8
0
6
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
4
5
,
 
'
B
l
a
d
e
 
R
u
n
n
e
r
'
,
 
1
9
8
2
,
 
1
0
8
,
 
2
8
0
0
0
0
0
0
,
 
4
1
4
9
2
5
4
2
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
4
6
,
 
'
T
h
e
 
T
e
r
m
i
n
a
t
o
r
'
,
 
1
9
8
4
,
 
1
0
9
,
 
6
4
0
0
0
0
0
,
 
7
8
3
7
1
2
0
0
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
4
7
,
 
'
T
e
r
m
i
n
a
t
o
r
 
2
:
 
J
u
d
g
m
e
n
t
 
D
a
y
'
,
 
1
9
9
1
,
 
1
0
9
,
 
1
0
2
0
0
0
0
0
0
,
 
5
2
0
8
8
1
1
5
4
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
4
8
,
 
'
I
n
c
e
p
t
i
o
n
'
,
 
2
0
1
0
,
 
1
2
5
,
 
1
6
0
0
0
0
0
0
0
,
 
8
3
6
8
3
6
9
6
7
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
4
9
,
 
'
T
h
e
 
D
e
p
a
r
t
e
d
'
,
 
2
0
0
6
,
 
1
1
7
,
 
9
0
0
0
0
0
0
0
,
 
2
9
1
4
6
5
0
3
4
)
;


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
 
m
o
v
i
e
 
V
A
L
U
E
S
 
(
1
0
5
0
,
 
'
G
e
n
t
l
e
m
a
n
'
'
s
 
A
g
r
e
e
m
e
n
t
'
,
 
1
9
4
7
,
 
1
3
2
,
 
2
0
0
0
0
0
0
,
 
7
0
0
0
0
0
0
)
;




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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
1
,
 
1
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
1
,
 
2
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
2
,
 
3
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
2
,
 
4
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
2
,
 
5
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
2
,
 
6
,
 
4
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
3
,
 
1
2
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
3
,
 
1
3
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
3
,
 
1
4
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
4
,
 
1
2
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
4
,
 
1
3
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
4
,
 
1
4
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
5
,
 
1
2
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
5
,
 
1
3
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
5
,
 
1
4
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
6
,
 
7
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
6
,
 
8
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
6
,
 
9
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
6
,
 
6
8
,
 
4
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
6
,
 
7
0
,
 
5
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
6
,
 
7
1
,
 
6
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
6
,
 
6
9
,
 
7
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
7
,
 
7
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
7
,
 
8
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
7
,
 
9
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
7
,
 
7
2
,
 
4
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
7
,
 
7
3
,
 
5
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
8
,
 
7
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
8
,
 
8
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
8
,
 
9
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
8
,
 
7
1
,
 
4
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
9
,
 
7
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
9
,
 
8
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
9
,
 
9
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
9
,
 
7
0
,
 
4
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
0
,
 
7
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
0
,
 
8
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
0
,
 
9
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
1
,
 
7
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
1
,
 
8
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
1
,
 
9
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
2
,
 
1
0
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
2
,
 
1
1
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
2
,
 
1
2
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
3
,
 
1
0
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
3
,
 
7
8
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
4
,
 
1
5
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
4
,
 
1
6
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
5
,
 
1
5
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
5
,
 
1
7
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
6
,
 
1
9
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
6
,
 
2
0
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
6
,
 
1
8
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
7
,
 
1
9
,
 
7
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
7
,
 
1
8
,
 
5
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
7
,
 
1
,
 
6
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
8
,
 
2
1
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
8
,
 
2
2
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
8
,
 
2
3
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
9
,
 
2
1
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
9
,
 
2
2
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
9
,
 
2
3
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
0
,
 
2
1
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
0
,
 
2
2
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
0
,
 
2
3
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
1
,
 
2
4
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
1
,
 
2
5
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
2
,
 
2
7
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
2
,
 
2
6
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
2
,
 
2
8
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
2
,
 
2
9
,
 
4
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
2
,
 
3
0
,
 
5
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
3
,
 
2
6
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
3
,
 
3
1
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
3
,
 
2
9
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
3
,
 
3
0
,
 
4
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
4
,
 
3
1
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
4
,
 
2
6
,
 
9
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
5
,
 
3
2
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
5
,
 
3
3
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
6
,
 
3
4
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
7
,
 
3
5
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
7
,
 
3
6
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
8
,
 
3
7
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
8
,
 
3
8
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
8
,
 
3
9
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
9
,
 
4
0
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
9
,
 
4
1
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
9
,
 
4
2
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
0
,
 
4
3
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
0
,
 
4
4
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
0
,
 
4
5
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
1
,
 
4
6
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
1
,
 
4
7
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
1
,
 
4
8
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
2
,
 
5
0
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
2
,
 
4
9
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
2
,
 
3
6
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
3
,
 
5
1
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
3
,
 
5
2
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
3
,
 
5
3
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
4
,
 
5
4
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
4
,
 
5
5
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
4
,
 
5
6
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
5
,
 
5
7
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
5
,
 
5
8
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
6
,
 
5
9
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
6
,
 
6
0
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
7
,
 
6
2
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
7
,
 
6
3
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
7
,
 
6
1
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
8
,
 
6
4
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
8
,
 
6
5
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
8
,
 
6
6
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
9
,
 
7
4
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
9
,
 
7
5
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
9
,
 
8
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
0
,
 
7
4
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
0
,
 
7
5
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
0
,
 
7
6
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
1
,
 
7
4
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
1
,
 
7
5
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
1
,
 
7
7
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
2
,
 
1
2
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
2
,
 
7
7
,
 
9
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
3
,
 
1
2
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
4
,
 
1
2
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
4
,
 
3
2
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
5
,
 
1
2
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
6
,
 
8
0
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
6
,
 
7
9
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
6
,
 
7
8
,
 
3
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
7
,
 
8
0
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
7
,
 
7
9
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
8
,
 
5
1
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
9
,
 
5
1
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
9
,
 
1
9
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
5
0
,
 
5
7
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
5
0
,
 
8
1
,
 
2
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
5
0
,
 
8
2
,
 
4
)
;




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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
1
2
,
 
7
8
,
 
7
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
3
,
 
2
4
,
 
9
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
0
3
,
 
1
,
 
1
0
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
8
,
 
4
7
,
 
9
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
8
,
 
2
9
,
 
7
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
4
4
,
 
1
2
,
 
1
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
2
,
 
1
2
,
 
8
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
3
2
,
 
4
7
,
 
7
)
;


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
 
c
a
s
t
i
n
g
 
V
A
L
U
E
S
 
(
1
0
2
4
,
 
4
7
,
 
7
)
;


`
,




 
 
s
c
h
o
o
l
:
 
`


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
 
d
e
p
t
 
(


 
 
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


 
 
n
a
m
e
 
T
E
X
T


)
;




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
 
t
e
a
c
h
e
r
 
(


 
 
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


 
 
d
e
p
t
 
I
N
T
E
G
E
R
,


 
 
n
a
m
e
 
T
E
X
T
,


 
 
p
h
o
n
e
 
T
E
X
T
,


 
 
m
o
b
i
l
e
 
T
E
X
T


)
;




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
 
d
e
p
t
 
V
A
L
U
E
S
 
(
1
,
 
'
C
o
m
p
u
t
i
n
g
'
)
;


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
 
d
e
p
t
 
V
A
L
U
E
S
 
(
2
,
 
'
D
e
s
i
g
n
'
)
;


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
 
d
e
p
t
 
V
A
L
U
E
S
 
(
3
,
 
'
E
n
g
i
n
e
e
r
i
n
g
'
)
;




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
 
t
e
a
c
h
e
r
 
V
A
L
U
E
S
 
(
1
0
1
,
 
1
,
 
'
S
h
r
i
v
e
l
l
'
,
 
'
2
7
5
3
'
,
 
'
0
7
9
8
6
 
5
5
5
 
1
2
3
4
'
)
;


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
 
t
e
a
c
h
e
r
 
V
A
L
U
E
S
 
(
1
0
2
,
 
1
,
 
'
T
h
r
o
d
'
,
 
'
2
7
5
4
'
,
 
'
0
7
1
2
2
 
5
5
5
 
1
9
2
0
'
)
;


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
 
t
e
a
c
h
e
r
 
V
A
L
U
E
S
 
(
1
0
3
,
 
1
,
 
'
S
p
l
i
n
t
'
,
 
'
2
2
9
3
'
,
 
N
U
L
L
)
;


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
 
t
e
a
c
h
e
r
 
V
A
L
U
E
S
 
(
1
0
4
,
 
N
U
L
L
,
 
'
S
p
i
r
e
g
r
a
i
n
'
,
 
'
3
2
8
7
'
,
 
N
U
L
L
)
;


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
 
t
e
a
c
h
e
r
 
V
A
L
U
E
S
 
(
1
0
5
,
 
2
,
 
'
C
u
t
f
l
o
w
e
r
'
,
 
'
3
2
1
2
'
,
 
'
0
7
9
9
6
 
5
5
5
 
6
5
7
4
'
)
;


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
 
t
e
a
c
h
e
r
 
V
A
L
U
E
S
 
(
1
0
6
,
 
N
U
L
L
,
 
'
D
e
a
d
y
a
w
n
'
,
 
'
3
3
4
5
'
,
 
N
U
L
L
)
;


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
 
t
e
a
c
h
e
r
 
V
A
L
U
E
S
 
(
1
0
7
,
 
3
,
 
'
P
a
d
d
l
e
'
,
 
'
4
4
7
8
'
,
 
'
0
7
8
4
6
 
5
5
5
 
8
8
2
3
'
)
;


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
 
t
e
a
c
h
e
r
 
V
A
L
U
E
S
 
(
1
0
8
,
 
2
,
 
'
B
i
t
t
e
r
d
e
w
'
,
 
'
3
1
4
1
'
,
 
'
0
7
7
4
3
 
5
5
5
 
4
5
7
8
'
)
;


`
,




 
 
t
r
a
n
s
p
o
r
t
:
 
`


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
o
p
s
 
(


 
 
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


 
 
n
a
m
e
 
T
E
X
T


)
;




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
 
r
o
u
t
e
 
(


 
 
n
u
m
 
T
E
X
T
,


 
 
c
o
m
p
a
n
y
 
T
E
X
T
,


 
 
p
o
s
 
I
N
T
E
G
E
R
,


 
 
s
t
o
p
 
I
N
T
E
G
E
R


)
;




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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
1
,
 
'
H
a
y
m
a
r
k
e
t
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
2
,
 
'
P
r
i
n
c
e
s
 
S
t
r
e
e
t
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
3
,
 
'
L
e
i
t
h
 
W
a
l
k
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
4
,
 
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
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
5
,
 
'
L
o
c
h
e
n
d
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
6
,
 
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
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
7
,
 
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
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
8
,
 
'
M
o
r
n
i
n
g
s
i
d
e
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
9
,
 
'
F
a
i
r
m
i
l
e
h
e
a
d
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
1
0
,
 
'
C
o
l
i
n
t
o
n
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
1
1
,
 
'
O
x
g
a
n
g
s
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
1
2
,
 
'
B
r
u
n
t
s
f
i
e
l
d
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
1
3
,
 
'
S
h
a
n
d
w
i
c
k
 
P
l
a
c
e
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
1
4
,
 
'
C
a
n
o
n
m
i
l
l
s
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
1
5
,
 
'
G
r
a
n
t
o
n
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
1
6
,
 
'
N
e
w
h
a
v
e
n
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
1
7
,
 
'
S
t
o
c
k
b
r
i
d
g
e
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
1
8
,
 
'
C
o
m
e
l
y
 
B
a
n
k
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
1
9
,
 
'
R
a
v
e
l
s
t
o
n
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
2
0
,
 
'
C
o
r
s
t
o
r
p
h
i
n
e
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
2
1
,
 
'
M
u
r
r
a
y
f
i
e
l
d
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
2
2
,
 
'
D
a
l
r
y
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
2
3
,
 
'
G
o
r
g
i
e
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
2
4
,
 
'
S
a
u
g
h
t
o
n
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
2
5
,
 
'
B
a
l
g
r
e
e
n
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
2
6
,
 
'
E
a
s
t
e
r
 
R
o
a
d
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
2
7
,
 
'
A
b
b
e
y
h
i
l
l
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
2
8
,
 
'
M
e
a
d
o
w
b
a
n
k
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
2
9
,
 
'
J
o
c
k
'
'
s
 
L
o
d
g
e
'
)
;


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
 
s
t
o
p
s
 
V
A
L
U
E
S
 
(
3
0
,
 
'
W
i
l
l
o
w
b
r
a
e
'
)
;




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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
'
,
 
'
L
R
T
'
,
 
1
,
 
6
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
'
,
 
'
L
R
T
'
,
 
2
,
 
7
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
'
,
 
'
L
R
T
'
,
 
3
,
 
1
2
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
'
,
 
'
L
R
T
'
,
 
4
,
 
1
3
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
'
,
 
'
L
R
T
'
,
 
5
,
 
1
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
'
,
 
'
L
R
T
'
,
 
6
,
 
2
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
'
,
 
'
L
R
T
'
,
 
7
,
 
3
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
'
,
 
'
L
R
T
'
,
 
8
,
 
4
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
'
,
 
'
L
R
T
'
,
 
9
,
 
5
)
;




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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
5
'
,
 
'
L
R
T
'
,
 
1
,
 
6
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
5
'
,
 
'
L
R
T
'
,
 
2
,
 
7
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
5
'
,
 
'
L
R
T
'
,
 
3
,
 
1
2
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
5
'
,
 
'
L
R
T
'
,
 
4
,
 
2
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
5
'
,
 
'
L
R
T
'
,
 
5
,
 
2
7
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
5
'
,
 
'
L
R
T
'
,
 
6
,
 
2
8
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
5
'
,
 
'
L
R
T
'
,
 
7
,
 
2
9
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
5
'
,
 
'
L
R
T
'
,
 
8
,
 
3
0
)
;




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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
5
'
,
 
'
L
R
T
'
,
 
1
,
 
1
0
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
5
'
,
 
'
L
R
T
'
,
 
2
,
 
1
1
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
5
'
,
 
'
L
R
T
'
,
 
3
,
 
8
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
5
'
,
 
'
L
R
T
'
,
 
4
,
 
7
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
5
'
,
 
'
L
R
T
'
,
 
5
,
 
1
3
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
5
'
,
 
'
L
R
T
'
,
 
6
,
 
1
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
5
'
,
 
'
L
R
T
'
,
 
7
,
 
2
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
5
'
,
 
'
L
R
T
'
,
 
8
,
 
1
4
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
5
'
,
 
'
L
R
T
'
,
 
9
,
 
1
5
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
5
'
,
 
'
L
R
T
'
,
 
1
0
,
 
1
6
)
;




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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
0
'
,
 
'
L
R
T
'
,
 
1
,
 
2
0
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
0
'
,
 
'
L
R
T
'
,
 
2
,
 
2
1
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
0
'
,
 
'
L
R
T
'
,
 
3
,
 
2
2
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
0
'
,
 
'
L
R
T
'
,
 
4
,
 
1
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
0
'
,
 
'
L
R
T
'
,
 
5
,
 
2
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
0
'
,
 
'
L
R
T
'
,
 
6
,
 
3
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
0
'
,
 
'
L
R
T
'
,
 
7
,
 
2
6
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
0
'
,
 
'
L
R
T
'
,
 
8
,
 
4
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
0
'
,
 
'
L
R
T
'
,
 
9
,
 
5
)
;




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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
5
'
,
 
'
L
R
T
'
,
 
1
,
 
9
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
5
'
,
 
'
L
R
T
'
,
 
2
,
 
8
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
5
'
,
 
'
L
R
T
'
,
 
3
,
 
7
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
5
'
,
 
'
L
R
T
'
,
 
4
,
 
6
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
5
'
,
 
'
L
R
T
'
,
 
5
,
 
1
3
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
5
'
,
 
'
L
R
T
'
,
 
6
,
 
1
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
5
'
,
 
'
L
R
T
'
,
 
7
,
 
1
7
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
5
'
,
 
'
L
R
T
'
,
 
8
,
 
1
8
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
1
5
'
,
 
'
L
R
T
'
,
 
9
,
 
1
9
)
;




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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
2
5
'
,
 
'
L
R
T
'
,
 
1
,
 
2
3
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
2
5
'
,
 
'
L
R
T
'
,
 
2
,
 
2
4
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
2
5
'
,
 
'
L
R
T
'
,
 
3
,
 
2
5
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
2
5
'
,
 
'
L
R
T
'
,
 
4
,
 
2
0
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
2
5
'
,
 
'
L
R
T
'
,
 
5
,
 
2
1
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
2
5
'
,
 
'
L
R
T
'
,
 
6
,
 
1
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
2
5
'
,
 
'
L
R
T
'
,
 
7
,
 
2
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
2
5
'
,
 
'
L
R
T
'
,
 
8
,
 
1
4
)
;




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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
7
'
,
 
'
L
R
T
'
,
 
1
,
 
9
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
7
'
,
 
'
L
R
T
'
,
 
2
,
 
8
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
7
'
,
 
'
L
R
T
'
,
 
3
,
 
1
2
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
7
'
,
 
'
L
R
T
'
,
 
4
,
 
7
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
7
'
,
 
'
L
R
T
'
,
 
5
,
 
2
2
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
7
'
,
 
'
L
R
T
'
,
 
6
,
 
2
3
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
7
'
,
 
'
L
R
T
'
,
 
7
,
 
2
4
)
;


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
 
r
o
u
t
e
 
V
A
L
U
E
S
 
(
'
4
7
'
,
 
'
L
R
T
'
,
 
8
,
 
2
5
)
;


`
,




 
 
e
l
e
c
t
i
o
n
:
 
`


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
 
g
e
 
(


 
 
y
r
 
I
N
T
E
G
E
R
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
 
T
E
X
T
,


 
 
l
a
s
t
N
a
m
e
 
T
E
X
T
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
 
T
E
X
T
,


 
 
p
a
r
t
y
 
T
E
X
T
,


 
 
v
o
t
e
s
 
I
N
T
E
G
E
R


)
;




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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
T
o
m
m
y
'
,
 
'
S
h
e
p
p
a
r
d
'
,
 
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
,
 
'
S
N
P
'
,
 
2
1
4
5
9
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
S
h
e
i
l
a
'
,
 
'
G
i
l
m
o
r
e
'
,
 
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
,
 
'
L
A
B
'
,
 
1
1
6
7
2
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
S
t
e
p
h
a
n
i
e
'
,
 
'
S
m
i
t
h
'
,
 
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
,
 
'
C
O
N
'
,
 
4
9
1
6
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
P
h
y
l
'
,
 
'
M
e
y
e
r
'
,
 
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
,
 
'
L
D
'
,
 
1
9
7
8
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
P
e
t
e
r
'
,
 
'
H
o
w
d
e
n
'
,
 
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
,
 
'
U
K
I
P
'
,
 
1
0
8
1
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
I
s
l
a
'
,
 
'
O
'
'
R
e
i
l
l
y
'
,
 
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
,
 
'
G
r
e
e
n
'
,
 
1
0
6
2
)
;




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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
J
o
a
n
n
a
'
,
 
'
C
h
e
r
r
y
'
,
 
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
,
 
'
S
N
P
'
,
 
2
3
8
9
9
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
J
i
m
'
,
 
'
M
u
r
p
h
y
'
,
 
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
,
 
'
L
A
B
'
,
 
1
5
3
0
4
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
M
i
l
e
s
'
,
 
'
M
a
y
a
l
l
'
,
 
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
,
 
'
C
O
N
'
,
 
5
7
6
5
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
P
r
a
m
o
d
'
,
 
'
S
u
b
b
a
r
a
m
a
n
'
,
 
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
,
 
'
L
D
'
,
 
2
0
1
3
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
S
a
r
a
h
'
,
 
'
B
e
a
t
t
i
e
-
S
m
i
t
h
'
,
 
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
,
 
'
G
r
e
e
n
'
,
 
8
9
1
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
P
a
u
l
'
,
 
'
M
a
r
s
h
a
l
l
'
,
 
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
,
 
'
U
K
I
P
'
,
 
6
0
1
)
;




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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
D
e
i
d
r
e
'
,
 
'
B
r
o
c
k
'
,
 
'
S
1
4
0
0
0
0
2
3
'
,
 
'
S
N
P
'
,
 
1
8
5
0
9
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
M
a
r
k
'
,
 
'
L
a
z
a
r
o
w
i
c
z
'
,
 
'
S
1
4
0
0
0
0
2
3
'
,
 
'
L
A
B
'
,
 
1
2
1
9
6
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
I
a
i
n
'
,
 
'
M
c
G
i
l
l
'
,
 
'
S
1
4
0
0
0
0
2
3
'
,
 
'
C
O
N
'
,
 
5
8
5
1
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
F
r
a
s
e
r
'
,
 
'
S
h
e
r
r
i
n
g
'
,
 
'
S
1
4
0
0
0
0
2
3
'
,
 
'
L
D
'
,
 
2
9
0
3
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
S
a
r
a
h
'
,
 
'
M
a
s
s
o
n
'
,
 
'
S
1
4
0
0
0
0
2
3
'
,
 
'
G
r
e
e
n
'
,
 
1
0
7
0
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
V
i
n
c
e
n
t
'
,
 
'
W
a
t
e
r
s
'
,
 
'
S
1
4
0
0
0
0
2
3
'
,
 
'
U
K
I
P
'
,
 
5
0
9
)
;




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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
M
i
c
h
e
l
l
e
'
,
 
'
T
h
o
m
s
o
n
'
,
 
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
,
 
'
S
N
P
'
,
 
1
9
7
4
6
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
A
l
e
x
'
,
 
'
C
o
l
e
-
H
a
m
i
l
t
o
n
'
,
 
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
,
 
'
L
D
'
,
 
9
3
8
7
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
M
i
k
e
'
,
 
'
C
r
o
c
k
a
r
t
'
,
 
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
,
 
'
C
O
N
'
,
 
5
3
7
6
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
C
a
m
m
y
'
,
 
'
D
a
y
'
,
 
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
,
 
'
L
A
B
'
,
 
5
0
7
2
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
N
i
g
e
l
'
,
 
'
B
a
g
s
h
a
w
'
,
 
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
,
 
'
G
r
e
e
n
'
,
 
1
0
4
7
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
D
o
n
a
l
d
'
,
 
'
C
a
m
e
r
o
n
'
,
 
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
,
 
'
U
K
I
P
'
,
 
4
4
0
)
;




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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
N
e
i
l
'
,
 
'
H
a
y
'
,
 
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
,
 
'
S
N
P
'
,
 
2
0
6
3
5
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
I
a
n
'
,
 
'
M
u
r
r
a
y
'
,
 
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
,
 
'
L
A
B
'
,
 
1
9
2
9
3
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
J
a
m
e
s
'
,
 
'
R
u
s
t
'
,
 
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
,
 
'
C
O
N
'
,
 
4
1
4
8
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
A
l
a
n
'
,
 
'
B
e
a
l
'
,
 
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
,
 
'
L
D
'
,
 
1
8
5
1
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
P
h
y
l
'
,
 
'
M
e
y
e
r
'
,
 
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
,
 
'
G
r
e
e
n
'
,
 
1
1
5
5
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
R
o
b
e
r
t
'
,
 
'
S
o
b
e
l
'
,
 
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
,
 
'
U
K
I
P
'
,
 
6
3
3
)
;




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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
C
a
l
u
m
'
,
 
'
K
e
r
r
'
,
 
'
S
1
4
0
0
0
0
2
6
'
,
 
'
S
N
P
'
,
 
2
4
0
2
5
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
J
o
h
n
'
,
 
'
L
a
m
o
n
t
'
,
 
'
S
1
4
0
0
0
0
2
6
'
,
 
'
C
O
N
'
,
 
1
4
8
9
4
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
M
i
c
h
a
e
l
'
,
 
'
M
o
o
r
e
'
,
 
'
S
1
4
0
0
0
0
2
6
'
,
 
'
L
D
'
,
 
8
3
0
2
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
K
e
n
n
e
t
h
'
,
 
'
M
c
F
a
d
d
e
n
'
,
 
'
S
1
4
0
0
0
0
2
6
'
,
 
'
L
A
B
'
,
 
4
5
3
5
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
S
t
u
a
r
t
'
,
 
'
S
h
e
r
r
i
n
g
'
,
 
'
S
1
4
0
0
0
0
2
6
'
,
 
'
U
K
I
P
'
,
 
1
0
0
6
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
5
,
 
'
S
a
r
a
h
'
,
 
'
B
e
a
t
t
i
e
-
S
m
i
t
h
'
,
 
'
S
1
4
0
0
0
0
2
6
'
,
 
'
G
r
e
e
n
'
,
 
9
6
6
)
;




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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
T
o
m
m
y
'
,
 
'
S
h
e
p
p
a
r
d
'
,
 
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
,
 
'
S
N
P
'
,
 
1
7
1
5
0
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
P
a
t
s
y
'
,
 
'
K
i
n
g
'
,
 
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
,
 
'
L
A
B
'
,
 
1
4
2
1
8
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
E
l
e
a
n
o
r
'
,
 
'
P
r
i
c
e
'
,
 
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
,
 
'
C
O
N
'
,
 
9
4
2
8
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
J
o
h
n
'
,
 
'
S
m
a
r
t
'
,
 
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
,
 
'
L
D
'
,
 
2
5
7
9
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
I
s
l
a
'
,
 
'
O
'
'
R
e
i
l
l
y
'
,
 
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
,
 
'
G
r
e
e
n
'
,
 
8
7
2
)
;




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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
J
o
a
n
n
a
'
,
 
'
C
h
e
r
r
y
'
,
 
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
,
 
'
S
N
P
'
,
 
1
7
5
7
5
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
L
e
s
l
e
y
'
,
 
'
H
i
n
d
s
'
,
 
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
,
 
'
L
A
B
'
,
 
1
4
7
9
7
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
N
i
c
k
'
,
 
'
C
o
o
k
'
,
 
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
,
 
'
C
O
N
'
,
 
9
8
2
1
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
M
a
r
t
i
n
'
,
 
'
S
h
e
r
a
t
o
n
'
,
 
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
,
 
'
L
D
'
,
 
2
1
2
4
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
S
t
e
v
e
'
,
 
'
B
u
r
g
e
s
s
'
,
 
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
,
 
'
G
r
e
e
n
'
,
 
6
8
1
)
;




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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
D
e
i
d
r
e
'
,
 
'
B
r
o
c
k
'
,
 
'
S
1
4
0
0
0
0
2
3
'
,
 
'
S
N
P
'
,
 
1
5
1
2
0
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
W
i
l
l
'
,
 
'
G
a
r
r
e
t
t
'
,
 
'
S
1
4
0
0
0
0
2
3
'
,
 
'
L
A
B
'
,
 
1
2
4
5
8
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
I
a
i
n
'
,
 
'
M
c
G
i
l
l
'
,
 
'
S
1
4
0
0
0
0
2
3
'
,
 
'
C
O
N
'
,
 
1
1
5
5
9
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
M
a
r
k
'
,
 
'
B
r
o
w
n
'
,
 
'
S
1
4
0
0
0
0
2
3
'
,
 
'
L
D
'
,
 
3
7
9
6
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
E
l
a
i
n
e
'
,
 
'
M
o
t
i
o
n
'
,
 
'
S
1
4
0
0
0
0
2
3
'
,
 
'
G
r
e
e
n
'
,
 
6
7
7
)
;




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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
C
h
r
i
s
t
i
n
e
'
,
 
'
J
a
r
d
i
n
e
'
,
 
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
,
 
'
L
D
'
,
 
1
8
1
0
8
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
T
o
n
i
'
,
 
'
G
i
u
g
l
i
a
n
o
'
,
 
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
,
 
'
S
N
P
'
,
 
1
5
1
2
0
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
C
a
l
l
u
m
'
,
 
'
L
a
i
d
l
a
w
'
,
 
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
,
 
'
C
O
N
'
,
 
6
9
3
0
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
C
a
m
m
y
'
,
 
'
D
a
y
'
,
 
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
,
 
'
L
A
B
'
,
 
4
1
3
5
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
N
i
g
e
l
'
,
 
'
B
a
g
s
h
a
w
'
,
 
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
,
 
'
G
r
e
e
n
'
,
 
6
0
4
)
;




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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
I
a
n
'
,
 
'
M
u
r
r
a
y
'
,
 
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
,
 
'
L
A
B
'
,
 
2
6
2
6
9
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
J
i
m
'
,
 
'
E
a
d
i
e
'
,
 
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
,
 
'
S
N
P
'
,
 
1
5
6
3
2
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
S
t
e
p
h
a
n
i
e
'
,
 
'
S
m
i
t
h
'
,
 
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
,
 
'
C
O
N
'
,
 
5
7
6
5
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
A
l
a
n
'
,
 
'
B
e
a
l
'
,
 
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
,
 
'
L
D
'
,
 
2
1
2
4
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
P
h
y
l
'
,
 
'
M
e
y
e
r
'
,
 
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
,
 
'
G
r
e
e
n
'
,
 
8
1
1
)
;




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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
J
o
h
n
'
,
 
'
L
a
m
o
n
t
'
,
 
'
S
1
4
0
0
0
0
2
6
'
,
 
'
C
O
N
'
,
 
2
4
2
3
1
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
C
a
l
u
m
'
,
 
'
K
e
r
r
'
,
 
'
S
1
4
0
0
0
0
2
6
'
,
 
'
S
N
P
'
,
 
1
9
5
7
1
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
I
a
n
'
,
 
'
D
a
v
i
d
s
o
n
'
,
 
'
S
1
4
0
0
0
0
2
6
'
,
 
'
L
A
B
'
,
 
4
5
1
9
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
C
a
t
r
i
o
n
a
'
,
 
'
B
h
a
t
i
a
'
,
 
'
S
1
4
0
0
0
0
2
6
'
,
 
'
L
D
'
,
 
4
0
4
2
)
;


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
 
g
e
 
V
A
L
U
E
S
 
(
2
0
1
7
,
 
'
S
a
r
a
h
'
,
 
'
B
e
a
t
t
i
e
-
S
m
i
t
h
'
,
 
'
S
1
4
0
0
0
0
2
6
'
,
 
'
G
r
e
e
n
'
,
 
8
4
3
)
;


`
,


}
;


