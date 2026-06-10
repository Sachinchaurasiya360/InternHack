
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
,
 
t
y
p
e
 
R
e
a
c
t
N
o
d
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


 
 
C
a
l
e
n
d
a
r
,


 
 
B
o
t
,


 
 
U
s
e
r
s
,


 
 
C
l
o
c
k
,


 
 
M
e
s
s
a
g
e
S
q
u
a
r
e
,


 
 
E
x
t
e
r
n
a
l
L
i
n
k
,


 
 
L
o
a
d
e
r
2
,


 
 
S
e
n
d
,


 
 
A
r
r
o
w
L
e
f
t
,


 
 
S
t
a
r
,


 
 
R
o
t
a
t
e
C
c
w
,


 
 
C
l
i
p
b
o
a
r
d
L
i
s
t
,


 
 
B
r
a
i
n
C
i
r
c
u
i
t
,


 
 
C
o
d
e
2
,


 
 
M
e
s
s
a
g
e
S
q
u
a
r
e
M
o
r
e
,


 
 
A
r
r
o
w
R
i
g
h
t
,


 
 
Z
a
p
,


 
 
C
h
e
c
k
C
i
r
c
l
e
,


 
 
S
e
r
v
e
r
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
 
T
e
x
t
a
r
e
a
 
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
t
e
x
t
a
r
e
a
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


 
 
M
o
c
k
I
n
t
e
r
v
i
e
w
F
e
e
d
b
a
c
k
,


 
 
M
o
c
k
I
n
t
e
r
v
i
e
w
F
e
e
d
b
a
c
k
R
e
s
p
o
n
s
e
,


 
 
M
o
c
k
I
n
t
e
r
v
i
e
w
T
r
a
n
s
c
r
i
p
t
E
n
t
r
y
,


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
l
i
b
/
t
y
p
e
s
"
;




c
o
n
s
t
 
C
A
L
E
N
D
L
Y
_
U
R
L
 
=
 
"
h
t
t
p
s
:
/
/
c
a
l
e
n
d
l
y
.
c
o
m
/
m
r
s
a
c
h
i
n
c
h
a
u
r
a
s
i
y
a
/
3
0
m
i
n
"
;




t
y
p
e
 
I
n
t
e
r
v
i
e
w
M
o
d
e
 
=
 
n
u
l
l
 
|
 
"
a
i
"
 
|
 
"
e
x
p
e
r
t
"
;




c
o
n
s
t
 
O
P
T
I
O
N
S
 
=
 
[


 
 
{


 
 
 
 
i
d
:
 
"
a
i
"
 
a
s
 
c
o
n
s
t
,


 
 
 
 
n
u
m
b
e
r
:
 
"
0
1
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
I
 
I
n
t
e
r
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
 
a
n
y
t
i
m
e
 
w
i
t
h
 
o
u
r
 
A
I
 
i
n
t
e
r
v
i
e
w
e
r
.
 
I
n
s
t
a
n
t
 
f
e
e
d
b
a
c
k
 
o
n
 
y
o
u
r
 
a
n
s
w
e
r
s
,
 
c
o
m
m
u
n
i
c
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
r
o
b
l
e
m
-
s
o
l
v
i
n
g
 
a
p
p
r
o
a
c
h
.
"
,


 
 
 
 
i
c
o
n
:
 
B
o
t
,


 
 
 
 
t
a
g
s
:
 
[
"
2
4
 
/
 
7
"
,
 
"
i
n
s
t
a
n
t
 
f
e
e
d
b
a
c
k
"
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
e
x
p
e
r
t
"
 
a
s
 
c
o
n
s
t
,


 
 
 
 
n
u
m
b
e
r
:
 
"
0
2
"
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
e
r
t
 
I
n
t
e
r
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
B
o
o
k
 
a
 
3
0
-
m
i
n
u
t
e
 
l
i
v
e
 
s
e
s
s
i
o
n
 
w
i
t
h
 
a
n
 
i
n
d
u
s
t
r
y
 
e
x
p
e
r
t
 
v
i
a
 
C
a
l
e
n
d
l
y
 
f
o
r
 
p
e
r
s
o
n
a
l
i
s
e
d
,
 
r
e
a
l
-
w
o
r
l
d
 
f
e
e
d
b
a
c
k
.
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


 
 
 
 
t
a
g
s
:
 
[
"
1
 
o
n
 
1
"
,
 
"
r
e
a
l
 
f
e
e
d
b
a
c
k
"
]
,


 
 
}
,


]
;




t
y
p
e
 
A
i
S
t
a
g
e
 
=
 
"
s
e
t
u
p
"
 
|
 
"
i
n
t
e
r
v
i
e
w
"
 
|
 
"
g
e
n
e
r
a
t
i
n
g
"
 
|
 
"
r
e
s
u
l
t
s
"
;


t
y
p
e
 
M
o
c
k
T
o
p
i
c
I
d
 
=
 
"
f
r
o
n
t
e
n
d
"
 
|
 
"
b
a
c
k
e
n
d
"
 
|
 
"
d
s
a
"
 
|
 
"
b
e
h
a
v
i
o
r
a
l
"
 
|
 
"
s
y
s
t
e
m
-
d
e
s
i
g
n
"
;




i
n
t
e
r
f
a
c
e
 
M
o
c
k
T
o
p
i
c
 
{


 
 
i
d
:
 
M
o
c
k
T
o
p
i
c
I
d
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
 
C
l
i
p
b
o
a
r
d
L
i
s
t
;


 
 
q
u
e
s
t
i
o
n
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


}




c
o
n
s
t
 
M
O
C
K
_
T
O
P
I
C
S
:
 
M
o
c
k
T
o
p
i
c
[
]
 
=
 
[


 
 
{


 
 
 
 
i
d
:
 
"
f
r
o
n
t
e
n
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
F
r
o
n
t
e
n
d
 
/
 
R
e
a
c
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
o
m
p
o
n
e
n
t
 
d
e
s
i
g
n
,
 
s
t
a
t
e
,
 
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
,
 
a
n
d
 
a
c
c
e
s
s
i
b
i
l
i
t
y
.
"
,


 
 
 
 
i
c
o
n
:
 
C
o
d
e
2
,


 
 
 
 
q
u
e
s
t
i
o
n
s
:
 
[


 
 
 
 
 
 
"
W
a
l
k
 
m
e
 
t
h
r
o
u
g
h
 
h
o
w
 
y
o
u
 
w
o
u
l
d
 
s
t
r
u
c
t
u
r
e
 
a
 
r
e
u
s
a
b
l
e
 
R
e
a
c
t
 
c
o
m
p
o
n
e
n
t
 
f
o
r
 
l
o
n
g
-
t
e
r
m
 
m
a
i
n
t
a
i
n
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


 
 
 
 
 
 
"
W
h
e
n
 
w
o
u
l
d
 
y
o
u
 
c
h
o
o
s
e
 
l
o
c
a
l
 
s
t
a
t
e
,
 
c
o
n
t
e
x
t
,
 
o
r
 
s
e
r
v
e
r
 
s
t
a
t
e
 
i
n
 
a
 
f
r
o
n
t
e
n
d
 
a
p
p
?
"
,


 
 
 
 
 
 
"
H
o
w
 
d
o
 
y
o
u
 
d
i
a
g
n
o
s
e
 
a
 
U
I
 
t
h
a
t
 
f
e
e
l
s
 
s
l
o
w
 
o
r
 
j
a
n
k
y
 
t
o
 
u
s
e
r
s
?
"
,


 
 
 
 
 
 
"
W
h
a
t
 
d
o
e
s
 
a
c
c
e
s
s
i
b
l
e
 
f
r
o
n
t
e
n
d
 
b
e
h
a
v
i
o
r
 
l
o
o
k
 
l
i
k
e
 
i
n
 
a
 
r
e
a
l
 
p
r
o
d
u
c
t
i
o
n
 
f
e
a
t
u
r
e
?
"
,


 
 
 
 
 
 
"
T
e
l
l
 
m
e
 
a
b
o
u
t
 
a
 
t
r
a
d
e
-
o
f
f
 
y
o
u
 
w
o
u
l
d
 
m
a
k
e
 
w
h
e
n
 
o
p
t
i
m
i
z
i
n
g
 
a
 
R
e
a
c
t
 
f
e
a
t
u
r
e
 
f
o
r
 
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
.
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
b
a
c
k
e
n
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
B
a
c
k
e
n
d
 
/
 
A
P
I
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
R
E
S
T
 
d
e
s
i
g
n
,
 
a
u
t
h
,
 
d
a
t
a
b
a
s
e
s
,
 
a
n
d
 
o
p
e
r
a
t
i
o
n
a
l
 
t
h
i
n
k
i
n
g
.
"
,


 
 
 
 
i
c
o
n
:
 
B
r
a
i
n
C
i
r
c
u
i
t
,


 
 
 
 
q
u
e
s
t
i
o
n
s
:
 
[


 
 
 
 
 
 
"
D
e
s
i
g
n
 
a
 
R
E
S
T
 
e
n
d
p
o
i
n
t
 
f
o
r
 
a
 
f
e
a
t
u
r
e
 
y
o
u
 
h
a
v
e
 
b
u
i
l
t
 
r
e
c
e
n
t
l
y
 
a
n
d
 
e
x
p
l
a
i
n
 
t
h
e
 
c
h
o
i
c
e
s
 
y
o
u
 
m
a
d
e
.
"
,


 
 
 
 
 
 
"
H
o
w
 
w
o
u
l
d
 
y
o
u
 
v
a
l
i
d
a
t
e
 
a
n
d
 
p
r
o
t
e
c
t
 
a
n
 
a
u
t
h
e
n
t
i
c
a
t
e
d
 
A
P
I
 
e
n
d
p
o
i
n
t
?
"
,


 
 
 
 
 
 
"
H
o
w
 
d
o
 
y
o
u
 
r
e
a
s
o
n
 
a
b
o
u
t
 
d
a
t
a
b
a
s
e
 
i
n
d
e
x
e
s
 
a
n
d
 
q
u
e
r
y
 
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
?
"
,


 
 
 
 
 
 
"
W
h
a
t
 
w
o
u
l
d
 
y
o
u
 
d
o
 
t
o
 
m
a
k
e
 
a
 
b
a
c
k
g
r
o
u
n
d
 
j
o
b
 
r
e
l
i
a
b
l
e
 
i
n
 
p
r
o
d
u
c
t
i
o
n
?
"
,


 
 
 
 
 
 
"
W
h
e
n
 
w
o
u
l
d
 
y
o
u
 
r
e
a
c
h
 
f
o
r
 
c
a
c
h
i
n
g
,
 
a
n
d
 
w
h
a
t
 
t
r
a
d
e
-
o
f
f
s
 
d
o
 
y
o
u
 
k
e
e
p
 
i
n
 
m
i
n
d
?
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
d
s
a
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
S
A
 
/
 
P
r
o
b
l
e
m
 
S
o
l
v
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
C
o
m
p
l
e
x
i
t
y
,
 
p
a
t
t
e
r
n
s
,
 
a
n
d
 
c
o
d
e
-
l
e
v
e
l
 
r
e
a
s
o
n
i
n
g
.
"
,


 
 
 
 
i
c
o
n
:
 
C
l
i
p
b
o
a
r
d
L
i
s
t
,


 
 
 
 
q
u
e
s
t
i
o
n
s
:
 
[


 
 
 
 
 
 
"
H
o
w
 
d
o
 
y
o
u
 
a
p
p
r
o
a
c
h
 
e
s
t
i
m
a
t
i
n
g
 
t
i
m
e
 
a
n
d
 
s
p
a
c
e
 
c
o
m
p
l
e
x
i
t
y
 
b
e
f
o
r
e
 
w
r
i
t
i
n
g
 
c
o
d
e
?
"
,


 
 
 
 
 
 
"
E
x
p
l
a
i
n
 
h
o
w
 
y
o
u
 
w
o
u
l
d
 
s
o
l
v
e
 
a
 
p
r
o
b
l
e
m
 
w
i
t
h
 
a
 
h
a
s
h
 
m
a
p
,
 
s
t
a
c
k
,
 
o
r
 
q
u
e
u
e
.
"
,


 
 
 
 
 
 
"
W
h
a
t
 
t
r
a
d
e
-
o
f
f
s
 
d
o
 
y
o
u
 
c
o
n
s
i
d
e
r
 
b
e
t
w
e
e
n
 
r
e
c
u
r
s
i
o
n
 
a
n
d
 
i
t
e
r
a
t
i
o
n
?
"
,


 
 
 
 
 
 
"
H
o
w
 
d
o
 
y
o
u
 
a
p
p
r
o
a
c
h
 
d
y
n
a
m
i
c
 
p
r
o
g
r
a
m
m
i
n
g
 
p
r
o
b
l
e
m
s
 
w
h
e
n
 
y
o
u
 
f
i
r
s
t
 
s
e
e
 
t
h
e
m
?
"
,


 
 
 
 
 
 
"
H
o
w
 
d
o
 
y
o
u
 
m
a
k
e
 
s
u
r
e
 
y
o
u
r
 
s
o
l
u
t
i
o
n
 
c
o
v
e
r
s
 
e
d
g
e
 
c
a
s
e
s
 
a
n
d
 
u
n
u
s
u
a
l
 
i
n
p
u
t
s
?
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
b
e
h
a
v
i
o
r
a
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
B
e
h
a
v
i
o
r
a
l
 
/
 
O
w
n
e
r
s
h
i
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
o
m
m
u
n
i
c
a
t
i
o
n
,
 
o
w
n
e
r
s
h
i
p
,
 
a
n
d
 
t
e
a
m
w
o
r
k
 
u
n
d
e
r
 
p
r
e
s
s
u
r
e
.
"
,


 
 
 
 
i
c
o
n
:
 
M
e
s
s
a
g
e
S
q
u
a
r
e
M
o
r
e
,


 
 
 
 
q
u
e
s
t
i
o
n
s
:
 
[


 
 
 
 
 
 
"
T
e
l
l
 
m
e
 
a
b
o
u
t
 
a
 
p
r
o
j
e
c
t
 
y
o
u
 
o
w
n
e
d
 
f
r
o
m
 
s
t
a
r
t
 
t
o
 
f
i
n
i
s
h
.
"
,


 
 
 
 
 
 
"
D
e
s
c
r
i
b
e
 
a
 
b
u
g
 
o
r
 
f
a
i
l
u
r
e
 
y
o
u
 
h
a
d
 
t
o
 
d
e
b
u
g
 
u
n
d
e
r
 
t
i
m
e
 
p
r
e
s
s
u
r
e
.
"
,


 
 
 
 
 
 
"
H
o
w
 
d
o
 
y
o
u
 
h
a
n
d
l
e
 
f
e
e
d
b
a
c
k
 
w
h
e
n
 
s
o
m
e
o
n
e
 
c
h
a
l
l
e
n
g
e
s
 
y
o
u
r
 
a
p
p
r
o
a
c
h
?
"
,


 
 
 
 
 
 
"
T
e
l
l
 
m
e
 
a
b
o
u
t
 
a
 
c
o
n
f
l
i
c
t
 
o
n
 
a
 
t
e
a
m
 
a
n
d
 
h
o
w
 
y
o
u
 
r
e
s
o
l
v
e
d
 
i
t
.
"
,


 
 
 
 
 
 
"
W
h
a
t
 
a
r
e
 
y
o
u
 
a
c
t
i
v
e
l
y
 
i
m
p
r
o
v
i
n
g
 
a
b
o
u
t
 
y
o
u
r
 
w
o
r
k
 
s
t
y
l
e
 
r
i
g
h
t
 
n
o
w
?
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
s
y
s
t
e
m
-
d
e
s
i
g
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
y
s
t
e
m
 
D
e
s
i
g
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
r
c
h
i
t
e
c
t
u
r
e
,
 
s
c
a
l
i
n
g
,
 
d
a
t
a
b
a
s
e
s
,
 
t
r
a
d
e
-
o
f
f
s
,
 
a
n
d
 
d
i
s
t
r
i
b
u
t
e
d
 
s
y
s
t
e
m
s
.
"
,


 
 
 
 
i
c
o
n
:
 
S
e
r
v
e
r
,


 
 
 
 
q
u
e
s
t
i
o
n
s
:
 
[


 
 
 
 
 
 
"
D
e
s
i
g
n
 
a
 
U
R
L
 
s
h
o
r
t
e
n
i
n
g
 
s
e
r
v
i
c
e
 
l
i
k
e
 
T
i
n
y
U
R
L
.
 
W
a
l
k
 
t
h
r
o
u
g
h
 
y
o
u
r
 
d
a
t
a
 
m
o
d
e
l
,
 
A
P
I
,
 
a
n
d
 
s
c
a
l
i
n
g
 
s
t
r
a
t
e
g
y
.
"
,


 
 
 
 
 
 
"
H
o
w
 
w
o
u
l
d
 
y
o
u
 
d
e
s
i
g
n
 
a
 
r
e
a
l
-
t
i
m
e
 
c
h
a
t
 
s
y
s
t
e
m
 
l
i
k
e
 
W
h
a
t
s
A
p
p
?
 
D
i
s
c
u
s
s
 
m
e
s
s
a
g
e
 
d
e
l
i
v
e
r
y
 
g
u
a
r
a
n
t
e
e
s
 
a
n
d
 
s
t
o
r
a
g
e
.
"
,


 
 
 
 
 
 
"
D
e
s
i
g
n
 
a
 
n
e
w
s
 
f
e
e
d
 
s
y
s
t
e
m
 
l
i
k
e
 
T
w
i
t
t
e
r
.
 
H
o
w
 
d
o
 
y
o
u
 
h
a
n
d
l
e
 
t
h
e
 
c
e
l
e
b
r
i
t
y
 
f
a
n
-
o
u
t
 
p
r
o
b
l
e
m
?
"
,


 
 
 
 
 
 
"
W
a
l
k
 
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
 
d
e
s
i
g
n
 
o
f
 
a
 
d
i
s
t
r
i
b
u
t
e
d
 
r
a
t
e
 
l
i
m
i
t
e
r
.
 
W
h
a
t
 
a
l
g
o
r
i
t
h
m
s
 
a
n
d
 
d
a
t
a
 
s
t
o
r
e
s
 
w
o
u
l
d
 
y
o
u
 
u
s
e
?
"
,


 
 
 
 
 
 
"
H
o
w
 
w
o
u
l
d
 
y
o
u
 
d
e
s
i
g
n
 
a
 
v
i
d
e
o
 
s
t
r
e
a
m
i
n
g
 
p
l
a
t
f
o
r
m
 
l
i
k
e
 
Y
o
u
T
u
b
e
?
 
C
o
v
e
r
 
t
h
e
 
u
p
l
o
a
d
 
p
i
p
e
l
i
n
e
 
a
n
d
 
p
l
a
y
b
a
c
k
.
"
,


 
 
 
 
]
,


 
 
}
,


]
;




f
u
n
c
t
i
o
n
 
g
e
t
F
a
l
l
b
a
c
k
F
e
e
d
b
a
c
k
(
t
o
p
i
c
T
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
)
:
 
M
o
c
k
I
n
t
e
r
v
i
e
w
F
e
e
d
b
a
c
k
 
{


 
 
r
e
t
u
r
n
 
{


 
 
 
 
c
o
m
m
u
n
i
c
a
t
i
o
n
:


 
 
 
 
 
 
"
Y
o
u
r
 
a
n
s
w
e
r
s
 
w
e
r
e
 
u
n
d
e
r
s
t
a
n
d
a
b
l
e
,
 
b
u
t
 
y
o
u
 
c
a
n
 
i
m
p
r
o
v
e
 
c
l
a
r
i
t
y
 
b
y
 
l
e
a
d
i
n
g
 
w
i
t
h
 
a
 
d
i
r
e
c
t
 
a
n
s
w
e
r
,
 
t
h
e
n
 
a
d
d
i
n
g
 
o
n
e
 
s
h
o
r
t
 
e
x
p
l
a
n
a
t
i
o
n
 
a
n
d
 
a
 
c
l
o
s
i
n
g
 
s
e
n
t
e
n
c
e
.
"
,


 
 
 
 
t
e
c
h
n
i
c
a
l
A
c
c
u
r
a
c
y
:
 
`
Y
o
u
 
s
h
o
w
e
d
 
a
 
b
a
s
i
c
 
g
r
a
s
p
 
o
f
 
$
{
t
o
p
i
c
T
i
t
l
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
}
,
 
b
u
t
 
t
h
e
 
s
t
r
o
n
g
e
s
t
 
a
n
s
w
e
r
s
 
w
o
u
l
d
 
b
e
 
m
o
r
e
 
p
r
e
c
i
s
e
 
w
i
t
h
 
c
l
e
a
r
e
r
 
t
e
r
m
i
n
o
l
o
g
y
 
a
n
d
 
a
 
f
e
w
 
c
o
n
c
r
e
t
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
`
,


 
 
 
 
a
r
e
a
s
T
o
I
m
p
r
o
v
e
:
 
[


 
 
 
 
 
 
"
U
s
e
 
a
 
t
i
g
h
t
e
r
 
a
n
s
w
e
r
 
s
t
r
u
c
t
u
r
e
:
 
a
n
s
w
e
r
 
f
i
r
s
t
,
 
t
h
e
n
 
e
x
p
l
a
i
n
 
t
h
e
 
r
e
a
s
o
n
i
n
g
.
"
,


 
 
 
 
 
 
"
A
d
d
 
o
n
e
 
c
o
n
c
r
e
t
e
 
e
x
a
m
p
l
e
,
 
t
r
a
d
e
-
o
f
f
,
 
o
r
 
m
e
t
r
i
c
 
t
o
 
s
u
p
p
o
r
t
 
e
a
c
h
 
r
e
s
p
o
n
s
e
.
"
,


 
 
 
 
 
 
"
P
a
u
s
e
 
b
r
i
e
f
l
y
 
b
e
f
o
r
e
 
a
n
s
w
e
r
i
n
g
 
s
o
 
y
o
u
 
c
a
n
 
o
r
g
a
n
i
z
e
 
y
o
u
r
 
t
h
o
u
g
h
t
s
.
"
,


 
 
 
 
]
,


 
 
 
 
s
t
r
e
n
g
t
h
s
:
 
[


 
 
 
 
 
 
"
Y
o
u
 
s
t
a
y
e
d
 
e
n
g
a
g
e
d
 
t
h
r
o
u
g
h
o
u
t
 
t
h
e
 
s
e
s
s
i
o
n
.
"
,


 
 
 
 
 
 
"
Y
o
u
 
w
e
r
e
 
a
b
l
e
 
t
o
 
c
o
n
n
e
c
t
 
y
o
u
r
 
a
n
s
w
e
r
s
 
b
a
c
k
 
t
o
 
p
r
a
c
t
i
c
a
l
 
s
i
t
u
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


 
 
 
 
o
v
e
r
a
l
l
R
a
t
i
n
g
:
 
3
,


 
 
}
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
 
F
e
e
d
b
a
c
k
S
t
a
r
s
(
{
 
r
a
t
i
n
g
 
}
:
 
{
 
r
a
t
i
n
g
:
 
n
u
m
b
e
r
 
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
 
5
 
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
n
d
e
x
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
S
t
a
r


 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
n
d
e
x
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
5
 
h
-
5
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
i
n
d
e
x
 
<
 
r
a
t
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
t
e
x
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
 
f
i
l
l
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
2
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
7
0
0
"


 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
)
)
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
m
l
-
2
 
t
e
x
t
-
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
r
a
t
i
n
g
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
n
o
r
m
a
l
 
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
"
>


 
 
 
 
 
 
 
 
 
 
/
5


 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
e
s
s
i
o
n
P
a
n
e
l
(
{


 
 
t
i
t
l
e
,


 
 
c
h
i
l
d
r
e
n
,


 
 
r
i
g
h
t
,


}
:
 
{


 
 
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


 
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
N
o
d
e
;


 
 
r
i
g
h
t
?
:
 
R
e
a
c
t
N
o
d
e
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
 
g
a
p
-
3
 
p
x
-
5
 
p
y
-
3
 
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
/
4
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
r
i
g
h
t
 
&
&
 
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
h
r
i
n
k
-
0
"
>
{
r
i
g
h
t
}
<
/
d
i
v
>
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
p
-
5
 
s
m
:
p
-
6
"
>
{
c
h
i
l
d
r
e
n
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
 
A
i
M
o
c
k
I
n
t
e
r
v
i
e
w
(
{
 
o
n
B
a
c
k
 
}
:
 
{
 
o
n
B
a
c
k
:
 
(
)
 
=
>
 
v
o
i
d
 
}
)
 
{


 
 
c
o
n
s
t
 
[
s
t
a
g
e
,
 
s
e
t
S
t
a
g
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
A
i
S
t
a
g
e
>
(
"
s
e
t
u
p
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
e
l
e
c
t
e
d
T
o
p
i
c
I
d
,
 
s
e
t
S
e
l
e
c
t
e
d
T
o
p
i
c
I
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
<
M
o
c
k
T
o
p
i
c
I
d
>
(


 
 
 
 
M
O
C
K
_
T
O
P
I
C
S
[
0
]
.
i
d
,


 
 
)
;


 
 
c
o
n
s
t
 
[
a
c
t
i
v
e
T
o
p
i
c
I
d
,
 
s
e
t
A
c
t
i
v
e
T
o
p
i
c
I
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
<
M
o
c
k
T
o
p
i
c
I
d
>
(


 
 
 
 
M
O
C
K
_
T
O
P
I
C
S
[
0
]
.
i
d
,


 
 
)
;


 
 
c
o
n
s
t
 
[
q
u
e
s
t
i
o
n
I
n
d
e
x
,
 
s
e
t
Q
u
e
s
t
i
o
n
I
n
d
e
x
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
0
)
;


 
 
c
o
n
s
t
 
[
d
r
a
f
t
A
n
s
w
e
r
,
 
s
e
t
D
r
a
f
t
A
n
s
w
e
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
"
"
)
;


 
 
c
o
n
s
t
 
[
t
r
a
n
s
c
r
i
p
t
,
 
s
e
t
T
r
a
n
s
c
r
i
p
t
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
M
o
c
k
I
n
t
e
r
v
i
e
w
T
r
a
n
s
c
r
i
p
t
E
n
t
r
y
[
]
>
(


 
 
 
 
[
]
,


 
 
)
;


 
 
c
o
n
s
t
 
[
f
e
e
d
b
a
c
k
,
 
s
e
t
F
e
e
d
b
a
c
k
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
M
o
c
k
I
n
t
e
r
v
i
e
w
F
e
e
d
b
a
c
k
 
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
e
e
d
b
a
c
k
N
o
t
e
,
 
s
e
t
F
e
e
d
b
a
c
k
N
o
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
<
s
t
r
i
n
g
 
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
s
e
s
s
i
o
n
E
r
r
o
r
,
 
s
e
t
S
e
s
s
i
o
n
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
<
s
t
r
i
n
g
 
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
 
a
c
t
i
v
e
T
o
p
i
c
 
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


 
 
 
 
 
 
M
O
C
K
_
T
O
P
I
C
S
.
f
i
n
d
(
(
t
o
p
i
c
)
 
=
>
 
t
o
p
i
c
.
i
d
 
=
=
=
 
a
c
t
i
v
e
T
o
p
i
c
I
d
)
 
?
?
 
M
O
C
K
_
T
O
P
I
C
S
[
0
]
,


 
 
 
 
[
a
c
t
i
v
e
T
o
p
i
c
I
d
]
,


 
 
)
;


 
 
c
o
n
s
t
 
c
u
r
r
e
n
t
Q
u
e
s
t
i
o
n
 
=


 
 
 
 
a
c
t
i
v
e
T
o
p
i
c
.
q
u
e
s
t
i
o
n
s
[
q
u
e
s
t
i
o
n
I
n
d
e
x
]
 
?
?


 
 
 
 
a
c
t
i
v
e
T
o
p
i
c
.
q
u
e
s
t
i
o
n
s
[
a
c
t
i
v
e
T
o
p
i
c
.
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
l
e
n
g
t
h
 
-
 
1
]
 
?
?


 
 
 
 
"
"
;


 
 
c
o
n
s
t
 
p
r
o
g
r
e
s
s
 
=
 
M
a
t
h
.
m
i
n
(


 
 
 
 
1
0
0
,


 
 
 
 
M
a
t
h
.
r
o
u
n
d
(
(
(
q
u
e
s
t
i
o
n
I
n
d
e
x
 
+
 
1
)
 
/
 
a
c
t
i
v
e
T
o
p
i
c
.
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
l
e
n
g
t
h
)
 
*
 
1
0
0
)
,


 
 
)
;




 
 
c
o
n
s
t
 
b
e
g
i
n
S
e
s
s
i
o
n
 
=
 
(
t
o
p
i
c
I
d
:
 
M
o
c
k
T
o
p
i
c
I
d
)
 
=
>
 
{


 
 
 
 
s
e
t
A
c
t
i
v
e
T
o
p
i
c
I
d
(
t
o
p
i
c
I
d
)
;


 
 
 
 
s
e
t
Q
u
e
s
t
i
o
n
I
n
d
e
x
(
0
)
;


 
 
 
 
s
e
t
D
r
a
f
t
A
n
s
w
e
r
(
"
"
)
;


 
 
 
 
s
e
t
T
r
a
n
s
c
r
i
p
t
(
[
]
)
;


 
 
 
 
s
e
t
F
e
e
d
b
a
c
k
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
e
e
d
b
a
c
k
N
o
t
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
S
e
s
s
i
o
n
E
r
r
o
r
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
S
t
a
g
e
(
"
i
n
t
e
r
v
i
e
w
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
 
r
e
t
r
y
S
e
s
s
i
o
n
 
=
 
(
)
 
=
>
 
{


 
 
 
 
b
e
g
i
n
S
e
s
s
i
o
n
(
a
c
t
i
v
e
T
o
p
i
c
.
i
d
 
a
s
 
M
o
c
k
T
o
p
i
c
I
d
)
;


 
 
}
;




 
 
c
o
n
s
t
 
g
o
T
o
S
e
t
u
p
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
S
t
a
g
e
(
"
s
e
t
u
p
"
)
;


 
 
 
 
s
e
t
F
e
e
d
b
a
c
k
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
e
e
d
b
a
c
k
N
o
t
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
S
e
s
s
i
o
n
E
r
r
o
r
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
D
r
a
f
t
A
n
s
w
e
r
(
"
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
u
b
m
i
t
A
n
s
w
e
r
 
=
 
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
 
a
n
s
w
e
r
 
=
 
d
r
a
f
t
A
n
s
w
e
r
.
t
r
i
m
(
)
;


 
 
 
 
i
f
 
(
!
a
n
s
w
e
r
 
|
|
 
s
t
a
g
e
 
!
=
=
 
"
i
n
t
e
r
v
i
e
w
"
)
 
{


 
 
 
 
 
 
i
f
 
(
s
t
a
g
e
 
=
=
=
 
"
i
n
t
e
r
v
i
e
w
"
)
 
{


 
 
 
 
 
 
 
 
s
e
t
S
e
s
s
i
o
n
E
r
r
o
r
(
"
E
n
t
e
r
 
a
n
 
a
n
s
w
e
r
 
b
e
f
o
r
e
 
m
o
v
i
n
g
 
t
o
 
t
h
e
 
n
e
x
t
 
q
u
e
s
t
i
o
n
.
"
)
;


 
 
 
 
 
 
}


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}




 
 
 
 
s
e
t
S
e
s
s
i
o
n
E
r
r
o
r
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
 
q
u
e
s
t
i
o
n
 
=
 
c
u
r
r
e
n
t
Q
u
e
s
t
i
o
n
;


 
 
 
 
c
o
n
s
t
 
n
e
x
t
T
r
a
n
s
c
r
i
p
t
 
=
 
[
.
.
.
t
r
a
n
s
c
r
i
p
t
,
 
{
 
q
u
e
s
t
i
o
n
,
 
a
n
s
w
e
r
 
}
]
;




 
 
 
 
s
e
t
T
r
a
n
s
c
r
i
p
t
(
n
e
x
t
T
r
a
n
s
c
r
i
p
t
)
;


 
 
 
 
s
e
t
D
r
a
f
t
A
n
s
w
e
r
(
"
"
)
;




 
 
 
 
i
f
 
(
q
u
e
s
t
i
o
n
I
n
d
e
x
 
<
 
a
c
t
i
v
e
T
o
p
i
c
.
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
l
e
n
g
t
h
 
-
 
1
)
 
{


 
 
 
 
 
 
s
e
t
Q
u
e
s
t
i
o
n
I
n
d
e
x
(
(
v
a
l
u
e
)
 
=
>
 
v
a
l
u
e
 
+
 
1
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}




 
 
 
 
s
e
t
S
t
a
g
e
(
"
g
e
n
e
r
a
t
i
n
g
"
)
;




 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
p
o
n
s
e
 
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
p
o
s
t
<
M
o
c
k
I
n
t
e
r
v
i
e
w
F
e
e
d
b
a
c
k
R
e
s
p
o
n
s
e
>
(


 
 
 
 
 
 
 
 
"
/
s
t
u
d
e
n
t
/
m
o
c
k
-
i
n
t
e
r
v
i
e
w
/
f
e
e
d
b
a
c
k
"
,


 
 
 
 
 
 
 
 
{
 
t
o
p
i
c
:
 
a
c
t
i
v
e
T
o
p
i
c
.
t
i
t
l
e
,
 
t
r
a
n
s
c
r
i
p
t
:
 
n
e
x
t
T
r
a
n
s
c
r
i
p
t
 
}
,


 
 
 
 
 
 
)
;


 
 
 
 
 
 
s
e
t
F
e
e
d
b
a
c
k
(
r
e
s
p
o
n
s
e
.
d
a
t
a
.
f
e
e
d
b
a
c
k
)
;


 
 
 
 
 
 
s
e
t
F
e
e
d
b
a
c
k
N
o
t
e
(


 
 
 
 
 
 
 
 
r
e
s
p
o
n
s
e
.
d
a
t
a
.
f
a
l
l
b
a
c
k
U
s
e
d


 
 
 
 
 
 
 
 
 
 
?
 
"
W
e
 
u
s
e
d
 
a
 
s
a
f
e
 
f
a
l
l
b
a
c
k
 
r
e
v
i
e
w
 
b
e
c
a
u
s
e
 
t
h
e
 
G
e
m
i
n
i
 
r
e
s
p
o
n
s
e
 
c
o
u
l
d
 
n
o
t
 
b
e
 
p
a
r
s
e
d
 
r
e
l
i
a
b
l
y
.
"


 
 
 
 
 
 
 
 
 
 
:
 
n
u
l
l
,


 
 
 
 
 
 
)
;


 
 
 
 
 
 
s
e
t
S
e
s
s
i
o
n
E
r
r
o
r
(
n
u
l
l
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
s
e
t
F
e
e
d
b
a
c
k
(
g
e
t
F
a
l
l
b
a
c
k
F
e
e
d
b
a
c
k
(
a
c
t
i
v
e
T
o
p
i
c
.
t
i
t
l
e
)
)
;


 
 
 
 
 
 
s
e
t
F
e
e
d
b
a
c
k
N
o
t
e
(


 
 
 
 
 
 
 
 
"
W
e
 
u
s
e
d
 
a
 
s
a
f
e
 
f
a
l
l
b
a
c
k
 
r
e
v
i
e
w
 
b
e
c
a
u
s
e
 
t
h
e
 
f
e
e
d
b
a
c
k
 
s
e
r
v
i
c
e
 
w
a
s
 
u
n
a
v
a
i
l
a
b
l
e
.
"
,


 
 
 
 
 
 
)
;


 
 
 
 
 
 
s
e
t
S
e
s
s
i
o
n
E
r
r
o
r
(
n
u
l
l
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
S
t
a
g
e
(
"
r
e
s
u
l
t
s
"
)
;


 
 
 
 
}


 
 
}
;




 
 
/
/
 
─
─
 
S
e
t
u
p
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


 
 
i
f
 
(
s
t
a
g
e
 
=
=
=
 
"
s
e
t
u
p
"
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
i
n
-
h
-
[
c
a
l
c
(
1
0
0
v
h
-
4
r
e
m
)
]
 
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
A
I
 
M
o
c
k
 
I
n
t
e
r
v
i
e
w
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
5
x
l
 
m
x
-
a
u
t
o
 
p
x
-
4
 
s
m
:
p
x
-
8
 
p
y
-
8
"
>


 
 
 
 
 
 
 
 
 
 
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
 
1
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
3
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
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
m
b
-
8
 
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
b
-
7
"
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
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
t
e
r
v
i
e
w
 
/
 
a
i


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
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
m
t
-
3
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
I
 
m
o
c
k
 
i
n
t
e
r
v
i
e
w
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
h
o
o
s
e
 
a
 
t
o
p
i
c
,
 
a
n
s
w
e
r
 
f
i
v
e
 
f
o
c
u
s
e
d
 
q
u
e
s
t
i
o
n
s
,
 
a
n
d
 
g
e
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
e
m
i
n
i
-
p
o
w
e
r
e
d
 
f
e
e
d
b
a
c
k
 
w
h
e
n
 
y
o
u
 
f
i
n
i
s
h
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
g
h
o
s
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
d
e
=
"
i
c
o
n
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
B
a
c
k
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
s
t
o
n
e
-
1
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
5
 
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
A
r
r
o
w
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
 
l
g
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
[
1
.
1
5
f
r
_
0
.
8
5
f
r
]
 
g
a
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
T
o
p
i
c
 
p
i
c
k
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
s
s
i
o
n
P
a
n
e
l
 
t
i
t
l
e
=
"
c
h
o
o
s
e
 
a
 
t
o
p
i
c
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
 
s
m
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
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
M
O
C
K
_
T
O
P
I
C
S
.
m
a
p
(
(
t
o
p
i
c
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
I
c
o
n
 
=
 
t
o
p
i
c
.
i
c
o
n
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
e
l
e
c
t
e
d
 
=
 
s
e
l
e
c
t
e
d
T
o
p
i
c
I
d
 
=
=
=
 
t
o
p
i
c
.
i
d
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
o
p
i
c
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
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
S
e
l
e
c
t
e
d
T
o
p
i
c
I
d
(
t
o
p
i
c
.
i
d
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
g
r
o
u
p
 
t
e
x
t
-
l
e
f
t
 
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
 
p
-
4
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
l
e
c
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
b
g
-
l
i
m
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
l
i
m
e
-
4
0
0
/
1
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
0
0
 
h
o
v
e
r
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
3
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
2
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
w
h
i
t
e
/
5
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
3
 
m
b
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
{
`
f
l
e
x
 
h
-
1
0
 
w
-
1
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
l
e
c
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
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
w
h
i
t
e
/
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
h
-
4
.
5
 
w
-
4
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
e
c
t
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
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
l
i
m
e
-
5
0
0
 
s
h
r
i
n
k
-
0
 
m
t
-
0
.
5
"
 
/
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
p
i
c
.
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
m
t
-
1
 
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
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
p
i
c
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
3
 
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
4
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
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
5
 
q
u
e
s
t
i
o
n
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
5
 
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
 
g
a
p
-
3
 
p
t
-
5
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
Z
a
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
h
-
3
.
5
 
w
-
3
.
5
 
t
e
x
t
-
l
i
m
e
-
5
0
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
e
m
i
n
i
 
r
e
v
i
e
w
s
 
c
o
m
m
u
n
i
c
a
t
i
o
n
,
 
a
c
c
u
r
a
c
y
,
 
s
t
r
e
n
g
t
h
s
,
 
a
n
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
e
a
s
 
t
o
 
i
m
p
r
o
v
e
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
b
e
g
i
n
S
e
s
s
i
o
n
(
s
e
l
e
c
t
e
d
T
o
p
i
c
I
d
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
l
i
m
e
-
3
0
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
t
a
r
t
 
i
n
t
e
r
v
i
e
w


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
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
/
S
e
s
s
i
o
n
P
a
n
e
l
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
W
h
a
t
 
t
o
 
e
x
p
e
c
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
s
s
i
o
n
P
a
n
e
l
 
t
i
t
l
e
=
"
w
h
a
t
 
t
o
 
e
x
p
e
c
t
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
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
5
 
f
o
c
u
s
e
d
 
q
u
e
s
t
i
o
n
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
d
y
:
 
"
E
a
c
h
 
s
e
s
s
i
o
n
 
i
s
 
a
 
s
h
o
r
t
,
 
t
i
g
h
t
 
l
o
o
p
 
—
 
n
o
 
f
i
l
l
e
r
,
 
j
u
s
t
 
s
i
g
n
a
l
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
M
e
s
s
a
g
e
S
q
u
a
r
e
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
F
u
l
l
 
t
r
a
n
s
c
r
i
p
t
 
s
a
v
e
d
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
d
y
:
 
"
E
v
e
r
y
 
q
u
e
s
t
i
o
n
 
a
n
d
 
a
n
s
w
e
r
 
i
s
 
p
r
e
s
e
r
v
e
d
 
a
n
d
 
s
e
n
t
 
t
o
 
G
e
m
i
n
i
 
f
o
r
 
r
e
v
i
e
w
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
S
t
a
r
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
u
c
t
u
r
e
d
 
f
e
e
d
b
a
c
k
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
d
y
:
 
"
Y
o
u
 
g
e
t
 
a
 
r
a
t
i
n
g
,
 
s
t
r
e
n
g
t
h
s
,
 
a
n
d
 
c
l
e
a
r
 
i
m
p
r
o
v
e
m
e
n
t
 
p
o
i
n
t
s
 
a
t
 
t
h
e
 
e
n
d
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
i
t
e
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
 
I
c
o
n
 
=
 
i
t
e
m
.
i
c
o
n
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
i
t
l
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
"
f
l
e
x
 
g
a
p
-
3
 
p
-
4
 
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
w
h
i
t
e
/
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
f
l
e
x
 
h
-
9
 
w
-
9
 
s
h
r
i
n
k
-
0
 
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
h
-
4
 
w
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
0
.
5
 
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
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
b
o
d
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
/
d
i
v
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
S
e
s
s
i
o
n
P
a
n
e
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




 
 
/
/
 
─
─
 
G
e
n
e
r
a
t
i
n
g
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


 
 
i
f
 
(
s
t
a
g
e
 
=
=
=
 
"
g
e
n
e
r
a
t
i
n
g
"
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
i
n
-
h
-
[
c
a
l
c
(
1
0
0
v
h
-
4
r
e
m
)
]
 
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
A
I
 
M
o
c
k
 
I
n
t
e
r
v
i
e
w
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
5
x
l
 
m
x
-
a
u
t
o
 
p
x
-
4
 
s
m
:
p
x
-
8
 
p
y
-
8
 
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
 
m
i
n
-
h
-
[
c
a
l
c
(
1
0
0
v
h
-
4
r
e
m
)
]
"
>


 
 
 
 
 
 
 
 
 
 
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
 
1
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
3
 
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
w
-
f
u
l
l
 
m
a
x
-
w
-
m
d
 
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
6
 
h
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
x
-
a
u
t
o
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
r
o
t
a
t
e
:
 
3
6
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
u
r
a
t
i
o
n
:
 
1
.
5
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
a
d
e
r
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
h
-
7
 
w
-
7
 
t
e
x
t
-
l
i
m
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
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
a
l
y
s
i
s
 
i
n
 
p
r
o
g
r
e
s
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
2
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
e
n
e
r
a
t
i
n
g
 
y
o
u
r
 
f
e
e
d
b
a
c
k
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
e
m
i
n
i
 
i
s
 
r
e
v
i
e
w
i
n
g
 
y
o
u
r
 
f
u
l
l
 
t
r
a
n
s
c
r
i
p
t
 
a
c
r
o
s
s
 
c
o
m
m
u
n
i
c
a
t
i
o
n
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
c
h
n
i
c
a
l
 
a
c
c
u
r
a
c
y
,
 
s
t
r
e
n
g
t
h
s
,
 
a
n
d
 
a
r
e
a
s
 
t
o
 
i
m
p
r
o
v
e
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
8
 
w
-
f
u
l
l
 
h
-
1
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
x
:
 
[
"
-
1
0
0
%
"
,
 
"
2
5
0
%
"
]
 
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
u
r
a
t
i
o
n
:
 
1
.
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
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
I
n
O
u
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
"
4
0
%
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
/
/
 
─
─
 
R
e
s
u
l
t
s
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


 
 
i
f
 
(
s
t
a
g
e
 
=
=
=
 
"
r
e
s
u
l
t
s
"
 
&
&
 
f
e
e
d
b
a
c
k
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
i
n
-
h
-
[
c
a
l
c
(
1
0
0
v
h
-
4
r
e
m
)
]
 
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
A
I
 
M
o
c
k
 
I
n
t
e
r
v
i
e
w
 
R
e
s
u
l
t
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
5
x
l
 
m
x
-
a
u
t
o
 
p
x
-
4
 
s
m
:
p
x
-
8
 
p
y
-
8
"
>


 
 
 
 
 
 
 
 
 
 
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
 
1
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
3
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
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
m
b
-
8
 
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
b
-
7
"
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
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
t
e
r
v
i
e
w
 
/
 
r
e
s
u
l
t
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
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
m
t
-
3
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
r
 
f
e
e
d
b
a
c
k
 
i
s
 
r
e
a
d
y
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
i
e
w
 
t
h
e
 
b
r
e
a
k
d
o
w
n
 
b
e
l
o
w
,
 
t
h
e
n
 
r
e
t
r
y
 
o
r
 
p
i
c
k
 
a
 
n
e
w
 
t
o
p
i
c
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
g
h
o
s
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
d
e
=
"
i
c
o
n
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
B
a
c
k
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
s
t
o
n
e
-
1
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
5
 
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
A
r
r
o
w
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
 
l
g
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
[
1
.
1
f
r
_
0
.
9
f
r
]
 
g
a
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
L
e
f
t
:
 
f
e
e
d
b
a
c
k
 
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
s
p
a
c
e
-
y
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
a
t
i
n
g
 
c
a
r
d
 
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
m
d
 
p
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
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
v
e
r
a
l
l
 
r
a
t
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
e
e
d
b
a
c
k
S
t
a
r
s
 
r
a
t
i
n
g
=
{
f
e
e
d
b
a
c
k
.
o
v
e
r
a
l
l
R
a
t
i
n
g
}
 
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
t
e
x
t
-
r
i
g
h
t
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
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
p
i
c


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
T
o
p
i
c
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
e
e
d
b
a
c
k
N
o
t
e
 
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
a
m
b
e
r
-
2
0
0
 
b
g
-
a
m
b
e
r
-
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
a
m
b
e
r
-
8
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
a
m
b
e
r
-
4
0
0
/
3
0
 
d
a
r
k
:
b
g
-
a
m
b
e
r
-
4
0
0
/
1
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
a
m
b
e
r
-
2
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
e
e
d
b
a
c
k
N
o
t
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
C
o
m
m
u
n
i
c
a
t
i
o
n
 
+
 
T
e
c
h
n
i
c
a
l
 
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
 
s
m
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
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
c
o
m
m
u
n
i
c
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
d
y
:
 
f
e
e
d
b
a
c
k
.
c
o
m
m
u
n
i
c
a
t
i
o
n
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
t
e
c
h
n
i
c
a
l
 
a
c
c
u
r
a
c
y
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
d
y
:
 
f
e
e
d
b
a
c
k
.
t
e
c
h
n
i
c
a
l
A
c
c
u
r
a
c
y
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
i
t
e
m
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
0
0
 
p
-
4
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
b
-
2
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
p
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
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
b
o
d
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
 
S
t
r
e
n
g
t
h
s
 
+
 
A
r
e
a
s
 
t
o
 
i
m
p
r
o
v
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
 
s
m
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
0
0
 
p
-
4
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
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
e
n
g
t
h
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
e
e
d
b
a
c
k
.
s
t
r
e
n
g
t
h
s
.
m
a
p
(
(
i
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
 
g
a
p
-
2
.
5
 
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
m
t
-
1
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
 
s
h
r
i
n
k
-
0
 
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
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
i
t
e
m
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
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
0
0
 
p
-
4
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
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
e
a
s
 
t
o
 
i
m
p
r
o
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
e
e
d
b
a
c
k
.
a
r
e
a
s
T
o
I
m
p
r
o
v
e
.
m
a
p
(
(
i
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
 
g
a
p
-
2
.
5
 
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
m
t
-
1
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
 
s
h
r
i
n
k
-
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
4
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
6
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
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
i
t
e
m
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
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
c
t
i
o
n
s
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
r
e
t
r
y
S
e
s
s
i
o
n
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
l
i
m
e
-
4
0
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
9
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
l
i
m
e
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
t
r
y
 
s
a
m
e
 
t
o
p
i
c


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
e
c
o
n
d
a
r
y
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
g
o
T
o
S
e
t
u
p
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
s
t
o
n
e
-
1
0
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
9
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
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
h
a
n
g
e
 
t
o
p
i
c


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
i
g
h
t
:
 
t
r
a
n
s
c
r
i
p
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
s
s
i
o
n
P
a
n
e
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
s
e
s
s
i
o
n
 
t
r
a
n
s
c
r
i
p
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
i
g
h
t
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
r
a
n
s
c
r
i
p
t
.
l
e
n
g
t
h
}
 
q
u
e
s
t
i
o
n
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
r
a
n
s
c
r
i
p
t
.
m
a
p
(
(
e
n
t
r
y
,
 
i
n
d
e
x
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
`
$
{
e
n
t
r
y
.
q
u
e
s
t
i
o
n
}
-
$
{
i
n
d
e
x
}
`
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
w
h
i
t
e
/
5
 
p
-
4
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
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Q
{
i
n
d
e
x
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
n
t
r
y
.
q
u
e
s
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
3
 
p
t
-
3
 
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
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
w
h
i
t
e
s
p
a
c
e
-
p
r
e
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
n
t
r
y
.
a
n
s
w
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
/
S
e
s
s
i
o
n
P
a
n
e
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




 
 
/
/
 
─
─
 
I
n
t
e
r
v
i
e
w
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


 
 
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
[
c
a
l
c
(
1
0
0
v
h
-
4
r
e
m
)
]
 
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
A
I
 
M
o
c
k
 
I
n
t
e
r
v
i
e
w
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
5
x
l
 
m
x
-
a
u
t
o
 
p
x
-
4
 
s
m
:
p
x
-
8
 
p
y
-
8
"
>


 
 
 
 
 
 
 
 
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
 
1
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
3
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
w
i
t
h
 
p
r
o
g
r
e
s
s
 
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
m
b
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
b
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
4
 
m
i
n
-
w
-
0
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
g
h
o
s
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
d
e
=
"
i
c
o
n
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
B
a
c
k
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
s
t
o
n
e
-
1
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
5
 
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
A
r
r
o
w
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
B
u
t
t
o
n
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
 
m
b
-
0
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
a
c
t
i
v
e
T
o
p
i
c
.
t
i
t
l
e
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Q
u
e
s
t
i
o
n
 
{
q
u
e
s
t
i
o
n
I
n
d
e
x
 
+
 
1
}
 
o
f
 
{
a
c
t
i
v
e
T
o
p
i
c
.
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
l
e
n
g
t
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
e
s
s
}
%
 
d
o
n
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


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
t
e
p
 
d
o
t
s
 
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
 
s
m
:
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
T
o
p
i
c
.
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
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
h
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
 
<
 
q
u
e
s
t
i
o
n
I
n
d
e
x


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
w
-
4
 
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
 
i
 
=
=
=
 
q
u
e
s
t
i
o
n
I
n
d
e
x


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
w
-
4
 
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
w
-
4
 
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
s
t
o
n
e
-
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
l
g
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
[
1
.
1
5
f
r
_
0
.
8
5
f
r
]
 
g
a
p
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
Q
u
e
s
t
i
o
n
 
+
 
a
n
s
w
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
r
o
g
r
e
s
s
 
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
h
-
1
 
w
-
f
u
l
l
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
w
i
d
t
h
:
 
`
$
{
p
r
o
g
r
e
s
s
}
%
`
 
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
3
 
}
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
 
Q
u
e
s
t
i
o
n
 
c
a
r
d
 
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
m
d
 
p
-
6
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
4
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
6
0
0
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
r
e
n
t
 
q
u
e
s
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
l
g
 
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
 
l
e
a
d
i
n
g
-
8
 
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
c
u
r
r
e
n
t
Q
u
e
s
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
s
s
i
o
n
E
r
r
o
r
 
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
r
e
d
-
2
0
0
 
b
g
-
r
e
d
-
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
r
e
d
-
7
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
r
e
d
-
4
0
0
/
3
0
 
d
a
r
k
:
b
g
-
r
e
d
-
4
0
0
/
1
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
r
e
d
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
s
s
i
o
n
E
r
r
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
A
n
s
w
e
r
 
a
r
e
a
 
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
p
x
-
5
 
p
t
-
5
 
p
b
-
3
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
"
b
l
o
c
k
 
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
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
r
 
a
n
s
w
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
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
d
r
a
f
t
A
n
s
w
e
r
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
v
e
n
t
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
D
r
a
f
t
A
n
s
w
e
r
(
e
v
e
n
t
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
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
s
e
s
s
i
o
n
E
r
r
o
r
)
 
s
e
t
S
e
s
s
i
o
n
E
r
r
o
r
(
n
u
l
l
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
8
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
T
y
p
e
 
y
o
u
r
 
r
e
s
p
o
n
s
e
 
h
e
r
e
.
.
.
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
 
b
o
r
d
e
r
-
0
 
r
o
u
n
d
e
d
-
n
o
n
e
 
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
6
0
0
 
f
o
c
u
s
-
v
i
s
i
b
l
e
:
r
i
n
g
-
0
 
f
o
c
u
s
-
v
i
s
i
b
l
e
:
r
i
n
g
-
o
f
f
s
e
t
-
0
 
p
-
0
 
s
h
a
d
o
w
-
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
K
e
y
D
o
w
n
=
{
(
e
v
e
n
t
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
(
e
v
e
n
t
.
c
t
r
l
K
e
y
 
|
|
 
e
v
e
n
t
.
m
e
t
a
K
e
y
)
 
&
&


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
v
e
n
t
.
k
e
y
 
=
=
=
 
"
E
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
v
e
n
t
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
o
i
d
 
s
u
b
m
i
t
A
n
s
w
e
r
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
g
a
p
-
3
 
p
x
-
5
 
p
y
-
3
 
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
1
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
4
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
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
t
r
l
 
+
 
E
n
t
e
r
 
t
o
 
s
u
b
m
i
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
 
v
o
i
d
 
s
u
b
m
i
t
A
n
s
w
e
r
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
d
r
a
f
t
A
n
s
w
e
r
.
t
r
i
m
(
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
l
i
m
e
-
3
0
0
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
4
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
n
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
q
u
e
s
t
i
o
n
I
n
d
e
x
 
<
 
a
c
t
i
v
e
T
o
p
i
c
.
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
l
e
n
g
t
h
 
-
 
1


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
N
e
x
t
 
q
u
e
s
t
i
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
F
i
n
i
s
h
 
s
e
s
s
i
o
n
"
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




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
T
r
a
n
s
c
r
i
p
t
 
p
a
n
e
l
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
s
s
i
o
n
P
a
n
e
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
t
r
a
n
s
c
r
i
p
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
i
g
h
t
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
c
r
i
p
t
.
l
e
n
g
t
h
 
>
 
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
r
a
n
s
c
r
i
p
t
.
l
e
n
g
t
h
}
 
a
n
s
w
e
r
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
 
:
 
n
u
l
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
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
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
r
a
n
s
c
r
i
p
t
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
 
p
-
5
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
r
 
a
n
s
w
e
r
s
 
w
i
l
l
 
a
p
p
e
a
r
 
h
e
r
e
 
a
s
 
y
o
u
 
p
r
o
g
r
e
s
s
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
c
r
i
p
t
.
m
a
p
(
(
e
n
t
r
y
,
 
i
n
d
e
x
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
`
$
{
e
n
t
r
y
.
q
u
e
s
t
i
o
n
}
-
$
{
i
n
d
e
x
}
`
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
w
h
i
t
e
/
5
 
p
-
4
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
4
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
6
0
0
 
m
b
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Q
{
i
n
d
e
x
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
x
s
 
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
8
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
2
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
n
t
r
y
.
q
u
e
s
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
w
h
i
t
e
s
p
a
c
e
-
p
r
e
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
n
t
r
y
.
a
n
s
w
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
S
e
s
s
i
o
n
P
a
n
e
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




/
/
 
─
─
 
M
a
i
n
 
p
a
g
e
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


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
 
M
o
c
k
I
n
t
e
r
v
i
e
w
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
 
[
m
o
d
e
,
 
s
e
t
M
o
d
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
I
n
t
e
r
v
i
e
w
M
o
d
e
>
(
n
u
l
l
)
;




 
 
/
/
 
E
x
p
e
r
t
 
m
o
d
e


 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
e
x
p
e
r
t
"
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
i
n
-
h
-
[
c
a
l
c
(
1
0
0
v
h
-
4
r
e
m
)
]
 
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
E
x
p
e
r
t
 
M
o
c
k
 
I
n
t
e
r
v
i
e
w
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
4
x
l
 
m
x
-
a
u
t
o
 
p
x
-
4
 
s
m
:
p
x
-
8
 
p
y
-
8
"
>


 
 
 
 
 
 
 
 
 
 
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
 
1
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
3
 
}
}


 
 
 
 
 
 
 
 
 
 
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
8
 
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
b
-
7
"
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
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
t
e
r
v
i
e
w
 
/
 
e
x
p
e
r
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
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
m
t
-
3
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
o
o
k
 
a
n
 
e
x
p
e
r
t
 
s
e
s
s
i
o
n
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
c
h
e
d
u
l
e
 
a
 
3
0
-
m
i
n
u
t
e
 
l
i
v
e
 
m
o
c
k
 
i
n
t
e
r
v
i
e
w
 
w
i
t
h
 
a
n
 
i
n
d
u
s
t
r
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
p
e
r
t
.
 
P
i
c
k
 
a
 
t
i
m
e
 
t
h
a
t
 
w
o
r
k
s
 
f
o
r
 
y
o
u
 
b
e
l
o
w
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
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
d
e
(
n
u
l
l
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
5
 
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
A
r
r
o
w
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
 
p
x
-
5
 
p
y
-
3
 
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
/
4
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
a
l
e
n
d
l
y
 
/
 
3
0
 
m
i
n
 
s
l
o
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
C
A
L
E
N
D
L
Y
_
U
R
L
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
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
m
d
 
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
w
h
i
t
e
/
5
 
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
x
t
e
r
n
a
l
L
i
n
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
e
n
 
i
n
 
n
e
w
 
t
a
b


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
f
r
a
m
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
C
A
L
E
N
D
L
Y
_
U
R
L
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
w
-
f
u
l
l
 
b
o
r
d
e
r
-
0
 
b
l
o
c
k
 
b
g
-
w
h
i
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
m
i
n
H
e
i
g
h
t
:
 
"
6
6
0
p
x
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
S
c
h
e
d
u
l
e
 
M
o
c
k
 
I
n
t
e
r
v
i
e
w
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
 
m
t
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
C
A
L
E
N
D
L
Y
_
U
R
L
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
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
2
 
p
x
-
5
 
p
y
-
2
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
5
0
 
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
 
h
o
v
e
r
:
b
g
-
l
i
m
e
-
3
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
C
a
l
e
n
d
a
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
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
O
p
e
n
 
f
u
l
l
 
c
a
l
e
n
d
a
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
/
/
 
A
I
 
m
o
d
e


 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
a
i
"
)
 
{


 
 
 
 
r
e
t
u
r
n
 
<
A
i
M
o
c
k
I
n
t
e
r
v
i
e
w
 
o
n
B
a
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
d
e
(
n
u
l
l
)
}
 
/
>
;


 
 
}




 
 
/
/
 
L
a
n
d
i
n
g


 
 
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
[
c
a
l
c
(
1
0
0
v
h
-
4
r
e
m
)
]
 
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
M
o
c
k
 
I
n
t
e
r
v
i
e
w
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
4
x
l
 
m
x
-
a
u
t
o
 
p
x
-
4
 
s
m
:
p
x
-
8
 
p
y
-
8
"
>


 
 
 
 
 
 
 
 
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
 
1
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
4
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
E
d
i
t
o
r
i
a
l
 
h
e
a
d
e
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
m
t
-
2
 
m
b
-
1
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
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
a
c
t
i
c
e
 
/
 
m
o
c
k
 
i
n
t
e
r
v
i
e
w


 
 
 
 
 
 
 
 
 
 
 
 
<
/
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
m
t
-
4
 
t
e
x
t
-
4
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
5
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
r
a
c
t
i
c
e
 
y
o
u
r
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
 
z
-
1
0
"
>
i
n
t
e
r
v
i
e
w
.
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
7
,
 
d
e
l
a
y
:
 
0
.
4
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
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
 
b
o
t
t
o
m
-
1
 
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
3
 
m
d
:
h
-
4
 
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
 
z
-
0
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
3
 
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
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
I
-
p
o
w
e
r
e
d
 
p
r
a
c
t
i
c
e
 
a
n
y
t
i
m
e
,
 
o
r
 
b
o
o
k
 
a
 
s
e
s
s
i
o
n
 
w
i
t
h
 
a
 
r
e
a
l
 
e
x
p
e
r
t
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
a
l
k
 
a
w
a
y
 
w
i
t
h
 
f
e
e
d
b
a
c
k
 
y
o
u
 
c
a
n
 
a
c
t
 
o
n
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
O
p
t
i
o
n
 
t
i
l
e
s
 
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
 
s
m
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
O
P
T
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
o
p
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
 
I
c
o
n
 
=
 
o
p
t
.
i
c
o
n
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
o
p
t
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
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
d
e
(
o
p
t
.
i
d
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
g
r
o
u
p
 
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
5
 
p
-
7
 
t
e
x
t
-
l
e
f
t
 
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
2
0
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
N
u
m
b
e
r
 
+
 
i
c
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
4
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
6
0
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
t
e
x
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
 
d
a
r
k
:
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
t
e
x
t
-
l
i
m
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
{
o
p
t
.
n
u
m
b
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
1
 
h
-
1
1
 
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
w
h
i
t
e
/
5
 
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
5
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
T
i
t
l
e
 
+
 
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
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
2
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
p
t
.
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
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
p
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
T
a
g
s
 
+
 
a
r
r
o
w
 
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
3
 
m
t
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
o
p
t
.
t
a
g
s
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
t
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
p
x
-
2
 
p
y
-
1
 
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
w
h
i
t
e
/
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
 
d
a
r
k
:
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
b
g
-
b
l
a
c
k
/
1
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
2
0
0
 
d
a
r
k
:
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
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
t
e
x
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
.
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
/
*
 
S
t
a
t
s
 
s
t
r
i
p
 
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
m
t
-
p
x
 
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
 
s
m
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
t
-
0
 
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
b
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
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
3
0
 
m
i
n
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
:
 
"
t
y
p
i
c
a
l
 
s
e
s
s
i
o
n
 
l
e
n
g
t
h
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
M
e
s
s
a
g
e
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
s
t
r
u
c
t
u
r
e
d
 
f
e
e
d
b
a
c
k
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
:
 
"
c
o
m
m
u
n
i
c
a
t
i
o
n
,
 
a
c
c
u
r
a
c
y
,
 
r
a
t
i
n
g
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
f
l
e
x
i
b
l
e
 
t
i
m
i
n
g
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
u
b
:
 
"
a
i
 
n
o
w
,
 
e
x
p
e
r
t
 
o
n
 
y
o
u
r
 
s
c
h
e
d
u
l
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
f
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
f
.
l
a
b
e
l
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
3
 
p
-
4
 
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
0
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
w
h
i
t
e
/
5
 
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
f
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
.
s
u
b
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


