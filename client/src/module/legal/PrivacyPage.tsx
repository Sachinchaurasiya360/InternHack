
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
 
N
a
v
b
a
r
 
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
N
a
v
b
a
r
"
;


i
m
p
o
r
t
 
{
 
F
o
o
t
e
r
 
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
F
o
o
t
e
r
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


 
 
D
a
t
a
b
a
s
e
,


 
 
C
p
u
,


 
 
G
l
o
b
e
,


 
 
S
h
i
e
l
d
C
h
e
c
k
,


 
 
C
o
o
k
i
e
,


 
 
U
s
e
r
C
h
e
c
k
,


 
 
C
l
o
c
k
,


 
 
B
a
b
y
,


 
 
R
e
f
r
e
s
h
C
c
w
,


 
 
M
a
i
l
,


 
 
C
h
e
v
r
o
n
R
i
g
h
t
,


 
 
C
h
e
v
r
o
n
D
o
w
n
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
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
,
 
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
n
t
e
r
f
a
c
e
 
P
o
l
i
c
y
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


 
 
i
c
o
n
:
 
R
e
a
c
t
.
E
l
e
m
e
n
t
T
y
p
e
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


 
 
c
o
n
t
e
n
t
?
:
 
s
t
r
i
n
g
;


 
 
l
i
s
t
?
:
 
{
 
l
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
 
t
e
x
t
:
 
s
t
r
i
n
g
 
}
[
]
;


 
 
c
o
n
t
a
c
t
N
o
t
e
?
:
 
b
o
o
l
e
a
n
;


}




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
 
P
o
l
i
c
y
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
i
n
f
o
r
m
a
t
i
o
n
-
w
e
-
c
o
l
l
e
c
t
"
,


 
 
 
 
i
c
o
n
:
 
D
a
t
a
b
a
s
e
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
f
o
r
m
a
t
i
o
n
 
W
e
 
C
o
l
l
e
c
t
"
,


 
 
 
 
c
o
n
t
e
n
t
:
 
"
W
e
 
c
o
l
l
e
c
t
 
t
h
e
 
f
o
l
l
o
w
i
n
g
 
c
a
t
e
g
o
r
i
e
s
 
o
f
 
i
n
f
o
r
m
a
t
i
o
n
:
"
,


 
 
 
 
l
i
s
t
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
A
c
c
o
u
n
t
 
I
n
f
o
r
m
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
t
e
x
t
:
 
"
N
a
m
e
,
 
e
m
a
i
l
 
a
d
d
r
e
s
s
,
 
p
a
s
s
w
o
r
d
 
(
h
a
s
h
e
d
)
,
 
r
o
l
e
 
(
S
t
u
d
e
n
t
/
R
e
c
r
u
i
t
e
r
)
,
 
c
o
m
p
a
n
y
 
n
a
m
e
,
 
d
e
s
i
g
n
a
t
i
o
n
"
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
P
r
o
f
i
l
e
 
I
n
f
o
r
m
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
t
e
x
t
:
 
"
B
i
o
,
 
s
k
i
l
l
s
,
 
e
d
u
c
a
t
i
o
n
,
 
L
i
n
k
e
d
I
n
/
G
i
t
H
u
b
/
p
o
r
t
f
o
l
i
o
 
U
R
L
s
,
 
p
r
o
j
e
c
t
s
,
 
a
c
h
i
e
v
e
m
e
n
t
s
,
 
p
r
o
f
i
l
e
 
p
h
o
t
o
"
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
U
p
l
o
a
d
e
d
 
C
o
n
t
e
n
t
"
,


 
 
 
 
 
 
 
 
t
e
x
t
:
 
"
R
e
s
u
m
e
s
 
(
s
t
o
r
e
d
 
o
n
 
A
W
S
 
S
3
)
,
 
c
o
v
e
r
 
l
e
t
t
e
r
s
,
 
L
a
T
e
X
 
d
o
c
u
m
e
n
t
s
"
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
U
s
a
g
e
 
D
a
t
a
"
,


 
 
 
 
 
 
 
 
t
e
x
t
:
 
"
P
a
g
e
s
 
v
i
s
i
t
e
d
,
 
f
e
a
t
u
r
e
s
 
u
s
e
d
,
 
A
I
 
t
o
o
l
 
i
n
t
e
r
a
c
t
i
o
n
s
,
 
a
p
p
l
i
c
a
t
i
o
n
 
h
i
s
t
o
r
y
"
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
P
a
y
m
e
n
t
 
I
n
f
o
r
m
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
t
e
x
t
:
 
"
P
r
o
c
e
s
s
e
d
 
s
e
c
u
r
e
l
y
 
b
y
 
D
o
d
o
 
P
a
y
m
e
n
t
s
 
—
 
w
e
 
d
o
 
n
o
t
 
s
t
o
r
e
 
c
a
r
d
 
d
e
t
a
i
l
s
"
,


 
 
 
 
 
 
}
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
h
o
w
-
w
e
-
u
s
e
"
,


 
 
 
 
i
c
o
n
:
 
C
p
u
,


 
 
 
 
t
i
t
l
e
:
 
"
H
o
w
 
W
e
 
U
s
e
 
Y
o
u
r
 
I
n
f
o
r
m
a
t
i
o
n
"
,


 
 
 
 
l
i
s
t
:
 
[


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
T
o
 
p
r
o
v
i
d
e
 
a
n
d
 
m
a
i
n
t
a
i
n
 
t
h
e
 
P
l
a
t
f
o
r
m
"
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
T
o
 
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
 
y
o
u
r
 
e
x
p
e
r
i
e
n
c
e
 
(
j
o
b
 
r
e
c
o
m
m
e
n
d
a
t
i
o
n
s
,
 
A
I
-
g
e
n
e
r
a
t
e
d
 
c
o
n
t
e
n
t
)
"
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
T
o
 
p
r
o
c
e
s
s
 
p
a
y
m
e
n
t
s
 
a
n
d
 
m
a
n
a
g
e
 
s
u
b
s
c
r
i
p
t
i
o
n
s
"
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
T
o
 
s
e
n
d
 
t
r
a
n
s
a
c
t
i
o
n
a
l
 
e
m
a
i
l
s
 
(
v
e
r
i
f
i
c
a
t
i
o
n
,
 
p
a
s
s
w
o
r
d
 
r
e
s
e
t
,
 
w
e
l
c
o
m
e
)
"
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
T
o
 
s
e
n
d
 
n
e
w
s
l
e
t
t
e
r
s
 
(
o
n
l
y
 
i
f
 
y
o
u
 
o
p
t
 
i
n
)
"
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
T
o
 
i
m
p
r
o
v
e
 
o
u
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
r
o
u
g
h
 
a
g
g
r
e
g
a
t
e
d
,
 
a
n
o
n
y
m
i
s
e
d
 
a
n
a
l
y
t
i
c
s
"
 
}
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
t
h
i
r
d
-
p
a
r
t
y
-
s
e
r
v
i
c
e
s
"
,


 
 
 
 
i
c
o
n
:
 
G
l
o
b
e
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
i
r
d
-
P
a
r
t
y
 
S
e
r
v
i
c
e
s
"
,


 
 
 
 
c
o
n
t
e
n
t
:
 
"
W
e
 
u
s
e
 
t
h
e
 
f
o
l
l
o
w
i
n
g
 
t
h
i
r
d
-
p
a
r
t
y
 
s
e
r
v
i
c
e
s
:
"
,


 
 
 
 
l
i
s
t
:
 
[


 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
G
o
o
g
l
e
 
O
A
u
t
h
"
,
 
t
e
x
t
:
 
"
F
o
r
 
s
o
c
i
a
l
 
l
o
g
i
n
,
 
r
e
c
e
i
v
e
s
 
y
o
u
r
 
n
a
m
e
,
 
e
m
a
i
l
,
 
a
n
d
 
p
r
o
f
i
l
e
 
p
i
c
t
u
r
e
"
 
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
G
o
o
g
l
e
 
G
e
m
i
n
i
 
A
I
"
,
 
t
e
x
t
:
 
"
F
o
r
 
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
 
r
e
s
u
m
e
s
,
 
c
o
v
e
r
 
l
e
t
t
e
r
s
,
 
a
n
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
 
c
o
n
t
e
n
t
"
 
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
D
o
d
o
 
P
a
y
m
e
n
t
s
"
,
 
t
e
x
t
:
 
"
F
o
r
 
p
a
y
m
e
n
t
 
p
r
o
c
e
s
s
i
n
g
,
 
s
u
b
j
e
c
t
 
t
o
 
D
o
d
o
 
P
a
y
m
e
n
t
s
'
 
p
r
i
v
a
c
y
 
p
o
l
i
c
y
"
 
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
A
W
S
 
S
3
"
,
 
t
e
x
t
:
 
"
F
o
r
 
s
t
o
r
i
n
g
 
u
p
l
o
a
d
e
d
 
f
i
l
e
s
 
(
r
e
s
u
m
e
s
,
 
d
o
c
u
m
e
n
t
s
)
"
 
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
E
m
a
i
l
 
S
e
r
v
i
c
e
"
,
 
t
e
x
t
:
 
"
F
o
r
 
s
e
n
d
i
n
g
 
t
r
a
n
s
a
c
t
i
o
n
a
l
 
a
n
d
 
m
a
r
k
e
t
i
n
g
 
e
m
a
i
l
s
"
 
}
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
a
t
a
-
s
e
c
u
r
i
t
y
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
C
h
e
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
D
a
t
a
 
S
t
o
r
a
g
e
 
a
n
d
 
S
e
c
u
r
i
t
y
"
,


 
 
 
 
c
o
n
t
e
n
t
:


 
 
 
 
 
 
"
Y
o
u
r
 
d
a
t
a
 
i
s
 
s
t
o
r
e
d
 
o
n
 
s
e
c
u
r
e
 
s
e
r
v
e
r
s
.
 
P
a
s
s
w
o
r
d
s
 
a
r
e
 
h
a
s
h
e
d
 
u
s
i
n
g
 
b
c
r
y
p
t
.
 
W
e
 
u
s
e
 
H
T
T
P
S
 
f
o
r
 
a
l
l
 
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
s
.
 
J
W
T
 
t
o
k
e
n
s
 
a
r
e
 
u
s
e
d
 
f
o
r
 
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
i
o
n
.
 
W
h
i
l
e
 
w
e
 
i
m
p
l
e
m
e
n
t
 
i
n
d
u
s
t
r
y
-
s
t
a
n
d
a
r
d
 
s
e
c
u
r
i
t
y
 
m
e
a
s
u
r
e
s
,
 
n
o
 
s
y
s
t
e
m
 
i
s
 
1
0
0
%
 
s
e
c
u
r
e
.
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
o
o
k
i
e
s
"
,


 
 
 
 
i
c
o
n
:
 
C
o
o
k
i
e
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
o
k
i
e
s
"
,


 
 
 
 
c
o
n
t
e
n
t
:


 
 
 
 
 
 
"
W
e
 
u
s
e
 
e
s
s
e
n
t
i
a
l
 
c
o
o
k
i
e
s
 
t
o
 
m
a
i
n
t
a
i
n
 
y
o
u
r
 
l
o
g
i
n
 
s
e
s
s
i
o
n
 
a
n
d
 
p
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
.
 
W
e
 
d
o
 
n
o
t
 
u
s
e
 
t
h
i
r
d
-
p
a
r
t
y
 
t
r
a
c
k
i
n
g
 
c
o
o
k
i
e
s
 
o
r
 
a
d
v
e
r
t
i
s
i
n
g
 
c
o
o
k
i
e
s
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
y
o
u
r
-
r
i
g
h
t
s
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
C
h
e
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
Y
o
u
r
 
R
i
g
h
t
s
"
,


 
 
 
 
c
o
n
t
e
n
t
:
 
"
Y
o
u
 
h
a
v
e
 
t
h
e
 
r
i
g
h
t
 
t
o
:
"
,


 
 
 
 
l
i
s
t
:
 
[


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
A
c
c
e
s
s
 
a
n
d
 
d
o
w
n
l
o
a
d
 
y
o
u
r
 
p
e
r
s
o
n
a
l
 
d
a
t
a
"
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
U
p
d
a
t
e
 
o
r
 
c
o
r
r
e
c
t
 
y
o
u
r
 
i
n
f
o
r
m
a
t
i
o
n
 
v
i
a
 
y
o
u
r
 
p
r
o
f
i
l
e
 
s
e
t
t
i
n
g
s
"
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
R
e
q
u
e
s
t
 
d
e
l
e
t
i
o
n
 
o
f
 
y
o
u
r
 
a
c
c
o
u
n
t
 
a
n
d
 
a
s
s
o
c
i
a
t
e
d
 
d
a
t
a
"
 
}
,


 
 
 
 
 
 
{
 
t
e
x
t
:
 
"
O
p
t
 
o
u
t
 
o
f
 
m
a
r
k
e
t
i
n
g
 
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
s
 
a
t
 
a
n
y
 
t
i
m
e
"
 
}
,


 
 
 
 
]
,


 
 
 
 
c
o
n
t
a
c
t
N
o
t
e
:
 
t
r
u
e
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
d
a
t
a
-
r
e
t
e
n
t
i
o
n
"
,


 
 
 
 
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
D
a
t
a
 
R
e
t
e
n
t
i
o
n
"
,


 
 
 
 
c
o
n
t
e
n
t
:


 
 
 
 
 
 
"
W
e
 
r
e
t
a
i
n
 
y
o
u
r
 
d
a
t
a
 
f
o
r
 
a
s
 
l
o
n
g
 
a
s
 
y
o
u
r
 
a
c
c
o
u
n
t
 
i
s
 
a
c
t
i
v
e
 
o
r
 
a
s
 
n
e
e
d
e
d
 
t
o
 
p
r
o
v
i
d
e
 
s
e
r
v
i
c
e
s
.
 
I
f
 
y
o
u
 
d
e
l
e
t
e
 
y
o
u
r
 
a
c
c
o
u
n
t
,
 
w
e
 
w
i
l
l
 
r
e
m
o
v
e
 
y
o
u
r
 
p
e
r
s
o
n
a
l
 
d
a
t
a
 
w
i
t
h
i
n
 
3
0
 
d
a
y
s
,
 
e
x
c
e
p
t
 
w
h
e
r
e
 
r
e
t
e
n
t
i
o
n
 
i
s
 
r
e
q
u
i
r
e
d
 
b
y
 
l
a
w
.
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
h
i
l
d
r
e
n
s
-
p
r
i
v
a
c
y
"
,


 
 
 
 
i
c
o
n
:
 
B
a
b
y
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
i
l
d
r
e
n
'
s
 
P
r
i
v
a
c
y
"
,


 
 
 
 
c
o
n
t
e
n
t
:


 
 
 
 
 
 
"
T
h
e
 
P
l
a
t
f
o
r
m
 
i
s
 
n
o
t
 
i
n
t
e
n
d
e
d
 
f
o
r
 
u
s
e
r
s
 
u
n
d
e
r
 
1
6
 
y
e
a
r
s
 
o
f
 
a
g
e
.
 
W
e
 
d
o
 
n
o
t
 
k
n
o
w
i
n
g
l
y
 
c
o
l
l
e
c
t
 
p
e
r
s
o
n
a
l
 
i
n
f
o
r
m
a
t
i
o
n
 
f
r
o
m
 
c
h
i
l
d
r
e
n
 
u
n
d
e
r
 
1
6
.
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
p
o
l
i
c
y
-
c
h
a
n
g
e
s
"
,


 
 
 
 
i
c
o
n
:
 
R
e
f
r
e
s
h
C
c
w
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
n
g
e
s
 
t
o
 
T
h
i
s
 
P
o
l
i
c
y
"
,


 
 
 
 
c
o
n
t
e
n
t
:


 
 
 
 
 
 
"
W
e
 
m
a
y
 
u
p
d
a
t
e
 
t
h
i
s
 
P
r
i
v
a
c
y
 
P
o
l
i
c
y
 
f
r
o
m
 
t
i
m
e
 
t
o
 
t
i
m
e
.
 
C
h
a
n
g
e
s
 
w
i
l
l
 
b
e
 
p
o
s
t
e
d
 
o
n
 
t
h
i
s
 
p
a
g
e
 
w
i
t
h
 
a
n
 
u
p
d
a
t
e
d
 
d
a
t
e
.
 
W
e
 
e
n
c
o
u
r
a
g
e
 
y
o
u
 
t
o
 
r
e
v
i
e
w
 
t
h
i
s
 
p
a
g
e
 
p
e
r
i
o
d
i
c
a
l
l
y
.
"
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
 
P
r
i
v
a
c
y
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
a
c
t
i
v
e
S
e
c
t
i
o
n
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
S
e
c
t
i
o
n
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
>
(
s
e
c
t
i
o
n
s
[
0
]
.
i
d
)
;


 
 
c
o
n
s
t
 
[
o
p
e
n
S
e
c
t
i
o
n
,
 
s
e
t
O
p
e
n
S
e
c
t
i
o
n
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


 
 
s
e
c
t
i
o
n
s
[
0
]
.
i
d


)
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
S
e
c
t
i
o
n
 
=
 
(
i
d
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
O
p
e
n
S
e
c
t
i
o
n
(
o
p
e
n
S
e
c
t
i
o
n
 
=
=
=
 
i
d
 
?
 
n
u
l
l
 
:
 
i
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
 
h
a
n
d
l
e
N
a
v
C
l
i
c
k
 
=
 
(
i
d
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
A
c
t
i
v
e
S
e
c
t
i
o
n
(
i
d
)
;


 
 
 
 
c
o
n
s
t
 
e
l
 
=
 
d
o
c
u
m
e
n
t
.
g
e
t
E
l
e
m
e
n
t
B
y
I
d
(
i
d
)
;


 
 
 
 
i
f
 
(
e
l
)
 
{


 
 
 
 
 
 
e
l
.
s
c
r
o
l
l
I
n
t
o
V
i
e
w
(
{
 
b
e
h
a
v
i
o
r
:
 
"
s
m
o
o
t
h
"
,
 
b
l
o
c
k
:
 
"
s
t
a
r
t
"
 
}
)
;


 
 
 
 
}


 
 
}
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
i
n
-
h
-
s
c
r
e
e
n
 
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
P
r
i
v
a
c
y
 
P
o
l
i
c
y
"


 
 
 
 
 
 
 
 
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
"
P
r
i
v
a
c
y
 
P
o
l
i
c
y
 
f
o
r
 
I
n
t
e
r
n
H
a
c
k
 
—
 
h
o
w
 
w
e
 
c
o
l
l
e
c
t
,
 
u
s
e
,
 
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
 
y
o
u
r
 
d
a
t
a
.
"


 
 
 
 
 
 
/
>




 
 
 
 
 
 
<
N
a
v
b
a
r
 
/
>




 
 
 
 
 
 
<
m
a
i
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
f
l
e
x
-
1
 
p
x
-
4
 
p
t
-
2
8
 
p
b
-
2
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
m
a
x
-
w
-
6
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
a
g
e
 
H
e
r
o
 
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
 
m
t
-
6
 
m
b
-
1
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
2
x
l
 
b
g
-
l
i
m
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
l
i
m
e
-
5
0
0
/
1
0
 
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
l
i
m
e
-
4
0
0
 
m
b
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
h
i
e
l
d
C
h
e
c
k
 
s
i
z
e
=
{
3
0
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
4
x
l
 
m
d
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
e
x
t
r
a
b
o
l
d
 
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
r
i
v
a
c
y
 
P
o
l
i
c
y


 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
-
g
r
a
y
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
g
r
a
y
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
2
x
l
 
m
x
-
a
u
t
o
 
t
e
x
t
-
b
a
s
e
 
m
d
:
t
e
x
t
-
l
g
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
e
 
a
r
e
 
c
o
m
m
i
t
t
e
d
 
t
o
 
p
r
o
t
e
c
t
i
n
g
 
y
o
u
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
n
f
o
r
m
a
t
i
o
n
 
a
n
d
 
y
o
u
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
i
g
h
t
 
t
o
 
p
r
i
v
a
c
y
.
 
H
e
r
e
&
a
p
o
s
;
s
 
e
x
a
c
t
l
y
 
h
o
w
 
w
e
 
h
a
n
d
l
e
 
y
o
u
r
 
d
a
t
a
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
5
 
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
4
 
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
x
l
 
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
5
0
0
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
a
m
b
e
r
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
a
m
b
e
r
-
5
0
0
/
2
0
 
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
a
m
b
e
r
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
m
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
f
r
e
s
h
C
c
w
 
s
i
z
e
=
{
1
4
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
L
a
s
t
 
u
p
d
a
t
e
d
:
 
M
a
r
c
h
 
1
7
,
 
2
0
2
6


 
 
 
 
 
 
 
 
 
 
 
 
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
 
l
g
:
f
l
e
x
-
r
o
w
 
g
a
p
-
8
 
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
"
>




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
t
i
c
k
y
 
T
a
b
l
e
 
o
f
 
C
o
n
t
e
n
t
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
<
a
s
i
d
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
l
g
:
w
-
6
4
 
s
h
r
i
n
k
-
0
 
w
-
f
u
l
l
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
l
g
:
s
t
i
c
k
y
 
l
g
:
t
o
p
-
2
8
 
r
o
u
n
d
e
d
-
2
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
g
r
a
y
-
2
0
0
/
7
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
g
r
a
y
-
8
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
 
s
h
a
d
o
w
-
s
m
 
p
-
5
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
g
r
a
y
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
g
r
a
y
-
5
0
0
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
O
n
 
T
h
i
s
 
P
a
g
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
n
a
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
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
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
s
,
 
i
n
d
e
x
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
 
s
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
 
i
s
A
c
t
i
v
e
 
=
 
a
c
t
i
v
e
S
e
c
t
i
o
n
 
=
=
=
 
s
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
s
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
{
`
t
o
c
-
$
{
s
.
i
d
}
`
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
 
h
a
n
d
l
e
N
a
v
C
l
i
c
k
(
s
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
w
-
f
u
l
l
 
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
x
l
 
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
e
x
t
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
A
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
l
i
m
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
l
i
m
e
-
5
0
0
/
1
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
l
i
m
e
-
4
0
0
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
t
e
x
t
-
g
r
a
y
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
g
r
a
y
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
/
6
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
g
r
a
y
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
w
h
i
t
e
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
 
s
i
z
e
=
{
1
5
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
i
n
d
e
x
 
+
 
1
}
.
 
{
s
.
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
A
c
t
i
v
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
R
i
g
h
t
 
s
i
z
e
=
{
1
4
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
m
l
-
a
u
t
o
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
n
a
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
a
s
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
4
"
>


 
 
{
s
e
c
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
s
e
c
t
i
o
n
,
 
i
n
d
e
x
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
 
s
e
c
t
i
o
n
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
 
i
s
O
p
e
n
 
=
 
o
p
e
n
S
e
c
t
i
o
n
 
=
=
=
 
s
e
c
t
i
o
n
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
d
i
v


 
 
 
 
 
 
 
 
i
d
=
{
s
e
c
t
i
o
n
.
i
d
}


 
 
 
 
 
 
 
 
k
e
y
=
{
s
e
c
t
i
o
n
.
i
d
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
2
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
/
7
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
s
t
o
n
e
-
8
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
 
s
h
a
d
o
w
-
s
m
 
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
 
s
c
r
o
l
l
-
m
t
-
3
2
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
 
t
o
g
g
l
e
S
e
c
t
i
o
n
(
s
e
c
t
i
o
n
.
i
d
)
}


 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
e
x
p
a
n
d
e
d
=
{
i
s
O
p
e
n
}


 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
c
o
n
t
r
o
l
s
=
{
`
c
o
n
t
e
n
t
-
$
{
s
e
c
t
i
o
n
.
i
d
}
`
}


 
 
 
 
 
 
 
 
 
 
i
d
=
{
`
t
r
i
g
g
e
r
-
$
{
s
e
c
t
i
o
n
.
i
d
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
w
-
f
u
l
l
 
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
-
6
 
t
e
x
t
-
l
e
f
t
 
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
-
3
 
r
o
u
n
d
e
d
-
x
l
 
b
g
-
l
i
m
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
l
i
m
e
-
5
0
0
/
1
0
 
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
 
s
i
z
e
=
{
2
2
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
l
g
 
m
d
:
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
w
h
i
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
n
d
e
x
 
+
 
1
}
.
 
{
s
e
c
t
i
o
n
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
2
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
D
o
w
n


 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
{
2
0
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
 
d
u
r
a
t
i
o
n
-
3
0
0
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
O
p
e
n
 
?
 
"
r
o
t
a
t
e
-
1
8
0
"
 
:
 
"
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
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
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
i
n
i
t
i
a
l
=
{
f
a
l
s
e
}
>


 
 
 
 
 
 
 
 
 
 
{
i
s
O
p
e
n
 
&
&
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
{
`
c
o
n
t
e
n
t
-
$
{
s
e
c
t
i
o
n
.
i
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
"
c
o
n
t
e
n
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
h
e
i
g
h
t
:
 
0
,
 
o
p
a
c
i
t
y
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
2
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
I
n
O
u
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
6
 
p
b
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
.
c
o
n
t
e
n
t
 
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
 
t
e
x
t
-
s
m
 
m
d
:
t
e
x
t
-
b
a
s
e
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
.
c
o
n
t
e
n
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
.
l
i
s
t
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
.
l
i
s
t
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
,
 
i
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
3
 
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
3
0
0
 
t
e
x
t
-
s
m
 
m
d
:
t
e
x
t
-
b
a
s
e
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
2
 
h
-
2
 
w
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
 
c
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
1
0
0
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
:
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
t
r
o
n
g
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
t
e
x
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
.
c
o
n
t
a
c
t
N
o
t
e
 
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
m
t
-
4
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
o
 
e
x
e
r
c
i
s
e
 
t
h
e
s
e
 
r
i
g
h
t
s
,
 
c
o
n
t
a
c
t
 
u
s
 
a
t
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
"
m
a
i
l
t
o
:
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
@
g
m
a
i
l
.
c
o
m
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
u
n
d
e
r
l
i
n
e
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
@
g
m
a
i
l
.
c
o
m


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
}


 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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




 
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
o
n
t
a
c
t
 
C
T
A
 
B
a
n
n
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
4
 
r
o
u
n
d
e
d
-
3
x
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
4
0
0
 
s
h
a
d
o
w
-
2
x
l
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
-
8
 
m
d
:
p
-
1
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
1
4
 
h
-
1
4
 
r
o
u
n
d
e
d
-
2
x
l
 
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
 
m
b
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
i
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
t
e
x
t
-
g
r
a
y
-
9
0
0
"
 
s
i
z
e
=
{
2
6
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
 
m
d
:
t
e
x
t
-
3
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
e
x
t
-
g
r
a
y
-
9
0
0
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
r
i
v
a
c
y
 
Q
u
e
s
t
i
o
n
s
?


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
a
y
-
8
0
0
 
m
a
x
-
w
-
2
x
l
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
f
 
y
o
u
 
h
a
v
e
 
a
n
y
 
q
u
e
s
t
i
o
n
s
 
o
r
 
c
o
n
c
e
r
n
s
 
a
b
o
u
t
 
t
h
i
s
 
P
r
i
v
a
c
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
o
l
i
c
y
 
o
r
 
y
o
u
r
 
p
e
r
s
o
n
a
l
 
d
a
t
a
,
 
o
u
r
 
t
e
a
m
 
i
s
 
h
e
r
e
 
t
o
 
h
e
l
p
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
"
m
a
i
l
t
o
:
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
@
g
m
a
i
l
.
c
o
m
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
 
b
g
-
w
h
i
t
e
 
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
7
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
g
r
a
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
 
p
x
-
6
 
p
y
-
3
 
r
o
u
n
d
e
d
-
x
l
 
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
 
s
h
a
d
o
w
-
l
g
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
i
l
 
s
i
z
e
=
{
1
8
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
n
t
a
c
t
 
S
u
p
p
o
r
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
i
v
>


 
 
 
 
 
 
<
/
m
a
i
n
>




 
 
 
 
 
 
<
F
o
o
t
e
r
 
/
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


