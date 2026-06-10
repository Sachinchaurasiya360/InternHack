
i
m
p
o
r
t
 
{
 
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
-
s
e
l
e
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
-
s
u
b
q
u
e
r
y
-
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
;


i
m
p
o
r
t
 
{
 
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
-
j
o
i
n
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
-
w
i
n
d
o
w
-
d
d
l
-
d
m
l
"
;


i
m
p
o
r
t
 
{
 
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
s
e
t
o
p
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
-
a
d
v
a
n
c
e
d
-
r
e
v
i
e
w
"
;




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
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
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
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
 
s
t
r
i
n
g
;


 
 
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
 
n
u
m
b
e
r
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
 
|
 
"
M
e
d
i
u
m
"
 
|
 
"
H
a
r
d
"
;


 
 
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
 
s
t
r
i
n
g
;


 
 
s
o
l
u
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


 
 
h
i
n
t
s
:
 
s
t
r
i
n
g
[
]
;


 
 
c
o
n
c
e
p
t
s
:
 
s
t
r
i
n
g
[
]
;


 
 
d
a
t
a
s
e
t
:
 
s
t
r
i
n
g
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
S
q
l
S
e
c
t
i
o
n
 
{


 
 
i
d
:
 
s
t
r
i
n
g
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


 
 
d
a
t
a
s
e
t
:
 
s
t
r
i
n
g
;


 
 
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
 
n
u
m
b
e
r
;


}




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
 
s
e
c
t
i
o
n
s
:
 
S
q
l
S
e
c
t
i
o
n
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
"
,


 
 
 
 
t
i
t
l
e
:
 
"
S
E
L
E
C
T
 
B
a
s
i
c
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
e
a
r
n
 
t
h
e
 
f
u
n
d
a
m
e
n
t
a
l
s
 
o
f
 
r
e
t
r
i
e
v
i
n
g
 
d
a
t
a
 
w
i
t
h
 
S
E
L
E
C
T
,
 
W
H
E
R
E
,
 
I
N
,
 
a
n
d
 
B
E
T
W
E
E
N
.
"
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
"
,


 
 
 
 
t
i
t
l
e
:
 
"
S
E
L
E
C
T
 
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
P
r
a
c
t
i
c
e
 
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
 
w
i
t
h
 
L
I
K
E
,
 
w
i
l
d
c
a
r
d
s
,
 
L
E
N
G
T
H
,
 
a
n
d
 
s
t
r
i
n
g
 
f
u
n
c
t
i
o
n
s
.
"
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
"
,


 
 
 
 
t
i
t
l
e
:
 
"
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
 
W
o
r
l
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
Q
u
e
r
y
 
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
,
 
r
o
u
n
d
i
n
g
,
 
C
A
S
E
,
 
a
n
d
 
s
t
r
i
n
g
 
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
.
"
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
"
,


 
 
 
 
t
i
t
l
e
:
 
"
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
 
N
o
b
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
Q
u
e
r
y
 
N
o
b
e
l
 
P
r
i
z
e
 
d
a
t
a
 
w
i
t
h
 
f
i
l
t
e
r
i
n
g
,
 
o
r
d
e
r
i
n
g
,
 
a
n
d
 
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
 
h
a
n
d
l
i
n
g
.
"
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
"
,


 
 
 
 
t
i
t
l
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
t
h
i
n
 
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
U
s
e
 
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
 
i
n
s
i
d
e
 
W
H
E
R
E
 
a
n
d
 
S
E
L
E
C
T
 
c
l
a
u
s
e
s
 
t
o
 
a
n
s
w
e
r
 
c
o
m
p
l
e
x
 
q
u
e
s
t
i
o
n
s
.
"
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
"
,


 
 
 
 
t
i
t
l
e
:
 
"
S
U
M
 
a
n
d
 
C
O
U
N
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
A
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
:
 
S
U
M
,
 
C
O
U
N
T
,
 
A
V
G
,
 
G
R
O
U
P
 
B
Y
,
 
a
n
d
 
H
A
V
I
N
G
.
"
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
"
,


 
 
 
 
t
i
t
l
e
:
 
"
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
C
o
m
b
i
n
e
 
r
o
w
s
 
f
r
o
m
 
m
u
l
t
i
p
l
e
 
t
a
b
l
e
s
 
u
s
i
n
g
 
I
N
N
E
R
 
J
O
I
N
 
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
.
"
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
"
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
r
e
 
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
A
d
v
a
n
c
e
d
 
J
O
I
N
 
q
u
e
r
i
e
s
 
o
n
 
a
 
m
o
v
i
e
 
d
a
t
a
b
a
s
e
 
w
i
t
h
 
m
u
l
t
i
p
l
e
 
t
a
b
l
e
 
r
e
l
a
t
i
o
n
s
h
i
p
s
.
"
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
"
,


 
 
 
 
t
i
t
l
e
:
 
"
U
s
i
n
g
 
N
U
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
H
a
n
d
l
e
 
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
 
w
i
t
h
 
I
S
 
N
U
L
L
,
 
C
O
A
L
E
S
C
E
,
 
L
E
F
T
 
J
O
I
N
,
 
a
n
d
 
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
s
.
"
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
"
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
d
o
w
 
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
U
s
e
 
R
A
N
K
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
,
 
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
,
 
a
n
d
 
o
t
h
e
r
 
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
s
 
f
o
r
 
a
n
a
l
y
t
i
c
s
.
"
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
"
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
l
f
 
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
J
o
i
n
 
a
 
t
a
b
l
e
 
t
o
 
i
t
s
e
l
f
 
t
o
 
f
i
n
d
 
r
o
u
t
e
s
,
 
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
s
,
 
a
n
d
 
h
i
e
r
a
r
c
h
i
c
a
l
 
d
a
t
a
.
"
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
"
,


 
 
 
 
t
i
t
l
e
:
 
"
D
D
L
 
B
a
s
i
c
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
,
 
a
l
t
e
r
,
 
a
n
d
 
d
r
o
p
 
t
a
b
l
e
s
 
u
s
i
n
g
 
D
a
t
a
 
D
e
f
i
n
i
t
i
o
n
 
L
a
n
g
u
a
g
e
 
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
"
,


 
 
 
 
t
i
t
l
e
:
 
"
D
M
L
 
P
r
a
c
t
i
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
I
n
s
e
r
t
,
 
u
p
d
a
t
e
,
 
a
n
d
 
d
e
l
e
t
e
 
d
a
t
a
 
u
s
i
n
g
 
D
a
t
a
 
M
a
n
i
p
u
l
a
t
i
o
n
 
L
a
n
g
u
a
g
e
 
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
"
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
M
a
n
i
p
u
l
a
t
e
 
t
e
x
t
 
w
i
t
h
 
U
P
P
E
R
,
 
L
O
W
E
R
,
 
L
E
N
G
T
H
,
 
S
U
B
S
T
R
,
 
R
E
P
L
A
C
E
,
 
T
R
I
M
,
 
a
n
d
 
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
.
"
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
"
,


 
 
 
 
t
i
t
l
e
:
 
"
N
u
m
e
r
i
c
 
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
W
o
r
k
 
w
i
t
h
 
n
u
m
b
e
r
s
 
u
s
i
n
g
 
R
O
U
N
D
,
 
A
B
S
,
 
C
A
S
T
,
 
i
n
t
e
g
e
r
 
d
i
v
i
s
i
o
n
,
 
a
n
d
 
m
a
t
h
e
m
a
t
i
c
a
l
 
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
.
"
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
"
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
 
O
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
 
w
i
t
h
 
U
N
I
O
N
,
 
U
N
I
O
N
 
A
L
L
,
 
I
N
T
E
R
S
E
C
T
,
 
a
n
d
 
E
X
C
E
P
T
.
"
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
"
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
m
m
o
n
 
T
a
b
l
e
 
E
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
r
i
t
e
 
c
l
e
a
n
e
r
 
q
u
e
r
i
e
s
 
u
s
i
n
g
 
W
I
T
H
 
c
l
a
u
s
e
s
 
a
n
d
 
C
T
E
s
 
f
o
r
 
s
t
e
p
-
b
y
-
s
t
e
p
 
d
a
t
a
 
t
r
a
n
s
f
o
r
m
a
t
i
o
n
s
.
"
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
"
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
v
a
n
c
e
d
 
S
Q
L
 
R
e
v
i
e
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
P
r
a
c
t
i
c
e
 
m
i
x
e
d
 
i
n
t
e
r
v
i
e
w
-
s
t
y
l
e
 
S
Q
L
 
c
a
s
e
s
 
u
s
i
n
g
 
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
s
,
 
C
T
E
s
,
 
j
o
i
n
s
,
 
N
U
L
L
 
h
a
n
d
l
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
 
c
l
e
a
n
u
p
,
 
a
n
d
 
q
u
e
r
y
 
p
l
a
n
s
.
"
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
i
x
e
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
7
,


 
 
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


 
 
.
.
.
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
,


 
 
.
.
.
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
,


 
 
.
.
.
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
,


 
 
.
.
.
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
,


 
 
.
.
.
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
,


 
 
.
.
.
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
,


]
;


