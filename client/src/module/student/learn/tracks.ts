
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
 
L
u
c
i
d
e
I
c
o
n
 
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


 
 
B
a
r
C
h
a
r
t
3
,


 
 
B
l
o
c
k
s
,


 
 
B
r
a
i
n
,


 
 
C
o
d
e
2
,


 
 
C
o
f
f
e
e
,


 
 
D
a
t
a
b
a
s
e
,


 
 
F
i
l
e
C
o
d
e
2
,


 
 
G
r
a
d
u
a
t
i
o
n
C
a
p
,


 
 
L
a
y
e
r
s
,


 
 
M
a
p
,


 
 
P
a
l
e
t
t
e
,


 
 
P
l
a
y
,


 
 
S
e
r
v
e
r
,


 
 
T
e
r
m
i
n
a
l
,


 
 
Z
a
p
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




e
x
p
o
r
t
 
t
y
p
e
 
T
r
a
c
k
C
a
t
e
g
o
r
y
 
=
 
"
p
r
a
c
t
i
c
e
"
 
|
 
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
a
t
a
"
 
|
 
"
w
e
b
3
"
;


e
x
p
o
r
t
 
t
y
p
e
 
T
r
a
c
k
K
i
n
d
 
=
 
"
p
r
a
c
t
i
c
e
"
 
|
 
"
l
e
s
s
o
n
"
 
|
 
"
r
o
a
d
m
a
p
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
 
T
r
a
c
k
 
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


 
 
i
c
o
n
:
 
L
u
c
i
d
e
I
c
o
n
;


 
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;


 
 
b
g
C
o
l
o
r
:
 
s
t
r
i
n
g
;


 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
s
t
r
i
n
g
;


 
 
p
a
t
h
:
 
s
t
r
i
n
g
;


 
 
k
i
n
d
:
 
T
r
a
c
k
K
i
n
d
;


 
 
c
a
t
e
g
o
r
y
:
 
T
r
a
c
k
C
a
t
e
g
o
r
y
;


 
 
/
*
*
 
S
t
a
t
i
c
 
f
a
l
l
b
a
c
k
 
l
a
b
e
l
 
(
e
.
g
.
 
"
T
o
p
i
c
-
w
i
s
e
"
,
 
"
1
8
8
 
E
x
e
r
c
i
s
e
s
"
)
.
 
L
e
s
s
o
n
 
c
o
u
n
t
s
 
c
o
m
e
 
f
r
o
m
 
l
e
s
s
o
n
-
c
o
u
n
t
s
.
t
s
.
 
*
/


 
 
s
t
a
t
:
 
s
t
r
i
n
g
;


 
 
/
*
*
 
I
f
 
p
r
e
s
e
n
t
,
 
u
s
e
d
 
a
s
 
t
h
e
 
g
l
o
b
 
k
e
y
 
p
r
e
f
i
x
 
i
n
 
l
e
s
s
o
n
-
c
o
u
n
t
s
.
t
s
 
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
 
l
i
v
e
 
l
e
s
s
o
n
 
c
o
u
n
t
.
 
*
/


 
 
l
e
s
s
o
n
C
o
u
n
t
K
e
y
?
:
 
s
t
r
i
n
g
;


 
 
/
*
*
 
A
b
s
o
l
u
t
e
 
p
a
t
h
 
o
v
e
r
r
i
d
e
.
 
W
h
e
n
 
p
r
e
s
e
n
t
,
 
t
h
e
 
c
a
r
d
 
l
i
n
k
s
 
h
e
r
e
 
i
n
s
t
e
a
d
 
o
f
 
`
/
l
e
a
r
n
/
$
{
p
a
t
h
}
`
.
 
*
/


 
 
t
o
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
a
g
s
?
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
i
f
f
i
c
u
l
t
y
?
:
 
"
B
e
g
i
n
n
e
r
"
 
|
 
"
I
n
t
e
r
m
e
d
i
a
t
e
"
 
|
 
"
A
d
v
a
n
c
e
d
"
;


 
 
c
r
e
a
t
e
d
A
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


 
 
e
n
r
o
l
l
e
d
S
t
u
d
e
n
t
s
?
:
 
n
u
m
b
e
r
;


 
 
/
*
*
 
A
v
e
r
a
g
e
 
s
a
l
a
r
y
 
r
a
n
g
e
 
f
o
r
 
t
h
i
s
 
s
k
i
l
l
 
i
n
 
I
n
d
i
a
 
(
e
.
g
.
 
"
A
v
g
 
₹
1
4
 
L
P
A
"
)
.
 
S
o
u
r
c
e
:
 
G
l
a
s
s
d
o
o
r
,
 
A
m
b
i
t
i
o
n
B
o
x
.
 
*
/


 
 
s
a
l
a
r
y
?
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
 
c
o
n
s
t
 
T
R
A
C
K
S
:
 
T
r
a
c
k
[
]
 
=
 
[


 
 
/
/
 
─
─
 
P
r
a
c
t
i
c
e
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
r
o
a
d
m
a
p
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
C
a
r
e
e
r
 
R
o
a
d
m
a
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
F
r
e
e
,
 
p
a
c
e
d
 
l
e
a
r
n
i
n
g
 
p
a
t
h
s
 
w
i
t
h
 
c
u
r
a
t
e
d
 
r
e
s
o
u
r
c
e
s
,
 
w
e
e
k
l
y
 
p
l
a
n
s
,
 
a
 
p
e
r
s
o
n
a
l
i
z
e
d
 
P
D
F
,
 
a
n
d
 
a
 
1
0
-
d
a
y
 
c
h
e
c
k
-
i
n
.
 
S
t
a
r
t
 
w
i
t
h
 
F
u
l
l
-
S
t
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
 
M
a
p
,


 
 
 
 
c
o
l
o
r
:
 
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
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
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
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
l
i
m
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
l
i
m
e
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
r
o
a
d
m
a
p
s
"
,


 
 
 
 
t
o
:
 
"
/
r
o
a
d
m
a
p
s
"
,


 
 
 
 
k
i
n
d
:
 
"
r
o
a
d
m
a
p
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
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


 
 
 
 
s
t
a
t
:
 
"
P
e
r
s
o
n
a
l
i
z
e
d
 
p
l
a
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
e
r
v
i
e
w
 
P
r
e
p
a
r
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
I
n
t
e
r
v
i
e
w
 
q
u
e
s
t
i
o
n
s
 
c
u
r
a
t
e
d
 
b
y
 
F
A
A
N
G
 
e
n
g
i
n
e
e
r
s
 
-
 
J
S
,
 
R
e
a
c
t
,
 
N
o
d
e
,
 
P
y
t
h
o
n
,
 
S
Q
L
,
 
s
y
s
t
e
m
 
d
e
s
i
g
n
,
 
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
 
&
 
m
o
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
 
G
r
a
d
u
a
t
i
o
n
C
a
p
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
v
i
o
l
e
t
-
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
b
g
-
v
i
o
l
e
t
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
v
i
o
l
e
t
-
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
v
i
o
l
e
t
-
2
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
v
i
o
l
e
t
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
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
,


 
 
 
 
k
i
n
d
:
 
"
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


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
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


 
 
 
 
s
t
a
t
:
 
"
3
0
0
 
Q
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
-
f
o
u
n
d
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
D
S
A
 
F
o
u
n
d
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
A
n
i
m
a
t
e
d
,
 
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
 
D
S
A
 
t
h
e
o
r
y
 
-
 
w
a
t
c
h
 
e
a
c
h
 
a
l
g
o
r
i
t
h
m
 
r
u
n
,
 
t
h
e
n
 
q
u
i
z
 
t
h
e
 
t
a
k
e
a
w
a
y
.
 
P
a
i
r
s
 
w
i
t
h
 
t
h
e
 
D
S
A
 
p
r
a
c
t
i
c
e
 
t
r
a
c
k
e
r
.
"
,


 
 
 
 
i
c
o
n
:
 
P
l
a
y
,


 
 
 
 
c
o
l
o
r
:
 
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
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
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
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
l
i
m
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
l
i
m
e
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
d
s
a
-
f
o
u
n
d
a
t
i
o
n
s
"
,


 
 
 
 
k
i
n
d
:
 
"
l
e
s
s
o
n
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
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


 
 
 
 
s
t
a
t
:
 
"
A
n
i
m
a
t
e
d
 
l
e
s
s
o
n
s
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
n
i
m
a
t
e
d
,
 
i
n
t
e
r
a
c
t
i
v
e
 
l
e
s
s
o
n
s
 
-
 
H
L
D
 
v
s
 
L
L
D
,
 
r
e
q
u
i
r
e
m
e
n
t
s
,
 
t
h
e
 
4
-
s
t
e
p
 
f
r
a
m
e
w
o
r
k
,
 
s
c
a
l
i
n
g
,
 
l
o
a
d
 
b
a
l
a
n
c
i
n
g
,
 
c
a
c
h
i
n
g
,
 
D
N
S
,
 
a
n
d
 
m
o
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
 
S
e
r
v
e
r
,


 
 
 
 
c
o
l
o
r
:
 
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
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
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
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
l
i
m
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
l
i
m
e
-
8
0
0
"
,


 
 
 
 
p
a
t
h
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


 
 
 
 
k
i
n
d
:
 
"
l
e
s
s
o
n
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
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


 
 
 
 
s
t
a
t
:
 
"
A
n
i
m
a
t
e
d
 
l
e
s
s
o
n
s
"
,


 
 
 
 
s
a
l
a
r
y
:
 
"
A
v
g
 
₹
3
5
 
L
P
A
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
p
t
i
t
u
d
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
A
p
t
i
t
u
d
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
Q
u
a
n
t
i
t
a
t
i
v
e
,
 
l
o
g
i
c
a
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
,
 
a
n
d
 
v
e
r
b
a
l
 
a
b
i
l
i
t
y
 
-
 
c
o
m
p
a
n
y
-
w
i
s
e
 
q
u
e
s
t
i
o
n
 
b
a
n
k
s
 
a
n
d
 
p
r
a
c
t
i
c
e
 
s
e
t
s
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
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
p
u
r
p
l
e
-
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
b
g
-
p
u
r
p
l
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
p
u
r
p
l
e
-
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
p
u
r
p
l
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
p
u
r
p
l
e
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
a
p
t
i
t
u
d
e
"
,


 
 
 
 
k
i
n
d
:
 
"
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


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
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


 
 
 
 
s
t
a
t
:
 
"
T
o
p
i
c
-
w
i
s
e
"
,


 
 
}
,




 
 
/
/
 
─
─
 
F
r
o
n
t
e
n
d
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
h
t
m
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
H
T
M
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
L
e
a
r
n
 
H
T
M
L
 
f
r
o
m
 
t
h
e
 
g
r
o
u
n
d
 
u
p
 
-
 
e
l
e
m
e
n
t
s
,
 
f
o
r
m
s
,
 
s
e
m
a
n
t
i
c
 
m
a
r
k
u
p
,
 
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
 
e
s
s
e
n
t
i
a
l
s
.
"
,


 
 
 
 
i
c
o
n
:
 
F
i
l
e
C
o
d
e
2
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
o
r
a
n
g
e
-
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
b
g
-
o
r
a
n
g
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
o
r
a
n
g
e
-
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
o
r
a
n
g
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
o
r
a
n
g
e
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
h
t
m
l
"
,


 
 
 
 
k
i
n
d
:
 
"
l
e
s
s
o
n
"
,


 
 
 
 
c
a
t
e
g
o
r
y
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


 
 
 
 
s
t
a
t
:
 
"
L
e
s
s
o
n
s
"
,


 
 
 
 
l
e
s
s
o
n
C
o
u
n
t
K
e
y
:
 
"
h
t
m
l
"
,


 
 
 
 
s
a
l
a
r
y
:
 
"
A
v
g
 
₹
8
 
L
P
A
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
s
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
C
S
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
M
a
s
t
e
r
 
C
S
S
 
-
 
s
e
l
e
c
t
o
r
s
,
 
f
l
e
x
b
o
x
,
 
g
r
i
d
,
 
a
n
i
m
a
t
i
o
n
s
,
 
r
e
s
p
o
n
s
i
v
e
 
d
e
s
i
g
n
,
 
a
n
d
 
m
o
d
e
r
n
 
l
a
y
o
u
t
 
t
e
c
h
n
i
q
u
e
s
.
"
,


 
 
 
 
i
c
o
n
:
 
P
a
l
e
t
t
e
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
b
l
u
e
-
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
b
g
-
b
l
u
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
b
l
u
e
-
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
b
l
u
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
b
l
u
e
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
c
s
s
"
,


 
 
 
 
k
i
n
d
:
 
"
l
e
s
s
o
n
"
,


 
 
 
 
c
a
t
e
g
o
r
y
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


 
 
 
 
s
t
a
t
:
 
"
L
e
s
s
o
n
s
"
,


 
 
 
 
l
e
s
s
o
n
C
o
u
n
t
K
e
y
:
 
"
c
s
s
"
,


 
 
 
 
s
a
l
a
r
y
:
 
"
A
v
g
 
₹
8
 
L
P
A
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
a
v
a
s
c
r
i
p
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
J
a
v
a
S
c
r
i
p
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
M
a
s
t
e
r
 
e
v
e
r
y
 
c
o
n
c
e
p
t
 
f
r
o
m
 
b
e
g
i
n
n
e
r
 
t
o
 
a
d
v
a
n
c
e
d
 
-
 
c
l
o
s
u
r
e
s
,
 
a
s
y
n
c
,
 
p
r
o
t
o
t
y
p
e
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
 
e
s
s
e
n
t
i
a
l
s
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


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
y
e
l
l
o
w
-
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
b
g
-
y
e
l
l
o
w
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
y
e
l
l
o
w
-
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
y
e
l
l
o
w
-
2
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
y
e
l
l
o
w
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
j
a
v
a
s
c
r
i
p
t
"
,


 
 
 
 
k
i
n
d
:
 
"
l
e
s
s
o
n
"
,


 
 
 
 
c
a
t
e
g
o
r
y
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


 
 
 
 
s
t
a
t
:
 
"
L
e
s
s
o
n
s
"
,


 
 
 
 
l
e
s
s
o
n
C
o
u
n
t
K
e
y
:
 
"
j
a
v
a
s
c
r
i
p
t
"
,


 
 
 
 
s
a
l
a
r
y
:
 
"
A
v
g
 
₹
1
0
 
L
P
A
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
t
y
p
e
s
c
r
i
p
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
T
y
p
e
S
c
r
i
p
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
T
y
p
e
 
a
n
n
o
t
a
t
i
o
n
s
,
 
g
e
n
e
r
i
c
s
,
 
a
d
v
a
n
c
e
d
 
t
y
p
e
s
,
 
u
t
i
l
i
t
y
 
t
y
p
e
s
,
 
a
n
d
 
T
S
 
w
i
t
h
 
R
e
a
c
t
 
-
 
f
r
o
m
 
b
a
s
i
c
s
 
t
o
 
i
n
t
e
r
v
i
e
w
 
p
r
e
p
.
"
,


 
 
 
 
i
c
o
n
:
 
F
i
l
e
C
o
d
e
2
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
c
y
a
n
-
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
b
g
-
c
y
a
n
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
c
y
a
n
-
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
c
y
a
n
-
2
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
c
y
a
n
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
t
y
p
e
s
c
r
i
p
t
"
,


 
 
 
 
k
i
n
d
:
 
"
l
e
s
s
o
n
"
,


 
 
 
 
c
a
t
e
g
o
r
y
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


 
 
 
 
s
t
a
t
:
 
"
L
e
s
s
o
n
s
"
,


 
 
 
 
l
e
s
s
o
n
C
o
u
n
t
K
e
y
:
 
"
t
y
p
e
s
c
r
i
p
t
"
,


 
 
 
 
s
a
l
a
r
y
:
 
"
A
v
g
 
₹
1
3
 
L
P
A
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
r
e
a
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
s
,
 
h
o
o
k
s
,
 
s
t
a
t
e
 
m
a
n
a
g
e
m
e
n
t
,
 
r
o
u
t
i
n
g
,
 
d
a
t
a
 
f
e
t
c
h
i
n
g
,
 
a
n
d
 
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
 
-
 
f
r
o
m
 
J
S
X
 
t
o
 
i
n
t
e
r
v
i
e
w
 
p
r
e
p
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


 
 
 
 
c
o
l
o
r
:
 
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
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
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
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
l
i
m
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
l
i
m
e
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
r
e
a
c
t
"
,


 
 
 
 
k
i
n
d
:
 
"
l
e
s
s
o
n
"
,


 
 
 
 
c
a
t
e
g
o
r
y
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


 
 
 
 
s
t
a
t
:
 
"
L
e
s
s
o
n
s
"
,


 
 
 
 
l
e
s
s
o
n
C
o
u
n
t
K
e
y
:
 
"
r
e
a
c
t
"
,


 
 
 
 
s
a
l
a
r
y
:
 
"
A
v
g
 
₹
1
4
 
L
P
A
"
,


 
 
}
,




 
 
/
/
 
─
─
 
B
a
c
k
e
n
d
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
n
o
d
e
j
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
o
d
e
.
j
s
 
&
 
E
x
p
r
e
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
e
r
v
e
r
-
s
i
d
e
 
J
a
v
a
S
c
r
i
p
t
 
-
 
N
o
d
e
 
c
o
r
e
,
 
E
x
p
r
e
s
s
,
 
R
E
S
T
 
A
P
I
s
,
 
m
i
d
d
l
e
w
a
r
e
,
 
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
,
 
a
n
d
 
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


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
g
r
e
e
n
-
6
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
b
g
-
g
r
e
e
n
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
g
r
e
e
n
-
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
g
r
e
e
n
-
2
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
g
r
e
e
n
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
n
o
d
e
j
s
"
,


 
 
 
 
k
i
n
d
:
 
"
l
e
s
s
o
n
"
,


 
 
 
 
c
a
t
e
g
o
r
y
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


 
 
 
 
s
t
a
t
:
 
"
L
e
s
s
o
n
s
"
,


 
 
 
 
l
e
s
s
o
n
C
o
u
n
t
K
e
y
:
 
"
n
o
d
e
j
s
"
,


 
 
 
 
s
a
l
a
r
y
:
 
"
A
v
g
 
₹
1
2
 
L
P
A
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
y
t
h
o
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
P
y
t
h
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
L
e
a
r
n
 
P
y
t
h
o
n
 
f
r
o
m
 
b
a
s
i
c
s
 
t
o
 
a
d
v
a
n
c
e
d
 
-
 
d
a
t
a
 
s
t
r
u
c
t
u
r
e
s
,
 
O
O
P
,
 
d
e
c
o
r
a
t
o
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
 
e
s
s
e
n
t
i
a
l
s
.
"
,


 
 
 
 
i
c
o
n
:
 
T
e
r
m
i
n
a
l
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
s
k
y
-
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
b
g
-
s
k
y
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
k
y
-
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
k
y
-
2
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
s
k
y
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
p
y
t
h
o
n
"
,


 
 
 
 
k
i
n
d
:
 
"
l
e
s
s
o
n
"
,


 
 
 
 
c
a
t
e
g
o
r
y
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


 
 
 
 
s
t
a
t
:
 
"
L
e
s
s
o
n
s
"
,


 
 
 
 
l
e
s
s
o
n
C
o
u
n
t
K
e
y
:
 
"
p
y
t
h
o
n
"
,


 
 
 
 
s
a
l
a
r
y
:
 
"
A
v
g
 
₹
1
3
 
L
P
A
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
f
a
s
t
a
p
i
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
a
s
t
A
P
I
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
u
i
l
d
 
m
o
d
e
r
n
 
A
P
I
s
 
w
i
t
h
 
F
a
s
t
A
P
I
 
-
 
r
o
u
t
i
n
g
,
 
P
y
d
a
n
t
i
c
 
m
o
d
e
l
s
,
 
d
e
p
e
n
d
e
n
c
y
 
i
n
j
e
c
t
i
o
n
,
 
a
u
t
h
,
 
a
n
d
 
a
s
y
n
c
 
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
t
e
g
r
a
t
i
o
n
.
"
,


 
 
 
 
i
c
o
n
:
 
Z
a
p
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
g
r
e
e
n
-
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
b
g
-
g
r
e
e
n
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
g
r
e
e
n
-
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
g
r
e
e
n
-
2
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
g
r
e
e
n
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
f
a
s
t
a
p
i
"
,


 
 
 
 
k
i
n
d
:
 
"
l
e
s
s
o
n
"
,


 
 
 
 
c
a
t
e
g
o
r
y
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


 
 
 
 
s
t
a
t
:
 
"
L
e
s
s
o
n
s
"
,


 
 
 
 
l
e
s
s
o
n
C
o
u
n
t
K
e
y
:
 
"
f
a
s
t
a
p
i
"
,


 
 
 
 
s
a
l
a
r
y
:
 
"
A
v
g
 
₹
1
1
 
L
P
A
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
f
l
a
s
k
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
l
a
s
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
M
a
s
t
e
r
 
F
l
a
s
k
 
-
 
r
o
u
t
i
n
g
,
 
J
i
n
j
a
2
 
t
e
m
p
l
a
t
e
s
,
 
b
l
u
e
p
r
i
n
t
s
,
 
S
Q
L
A
l
c
h
e
m
y
,
 
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
,
 
a
n
d
 
R
E
S
T
 
A
P
I
 
d
e
v
e
l
o
p
m
e
n
t
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
f
f
e
e
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
t
e
a
l
-
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
b
g
-
t
e
a
l
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
t
e
a
l
-
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
t
e
a
l
-
2
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
t
e
a
l
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
f
l
a
s
k
"
,


 
 
 
 
k
i
n
d
:
 
"
l
e
s
s
o
n
"
,


 
 
 
 
c
a
t
e
g
o
r
y
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


 
 
 
 
s
t
a
t
:
 
"
L
e
s
s
o
n
s
"
,


 
 
 
 
l
e
s
s
o
n
C
o
u
n
t
K
e
y
:
 
"
f
l
a
s
k
"
,


 
 
 
 
s
a
l
a
r
y
:
 
"
A
v
g
 
₹
1
0
 
L
P
A
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
j
a
n
g
o
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
j
a
n
g
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
L
e
a
r
n
 
D
j
a
n
g
o
 
e
n
d
-
t
o
-
e
n
d
 
-
 
m
o
d
e
l
s
,
 
v
i
e
w
s
,
 
t
e
m
p
l
a
t
e
s
,
 
a
d
m
i
n
,
 
D
R
F
,
 
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
,
 
m
i
d
d
l
e
w
a
r
e
,
 
a
n
d
 
d
e
p
l
o
y
m
e
n
t
.
"
,


 
 
 
 
i
c
o
n
:
 
L
a
y
e
r
s
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
e
m
e
r
a
l
d
-
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
b
g
-
e
m
e
r
a
l
d
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
e
m
e
r
a
l
d
-
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
e
m
e
r
a
l
d
-
2
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
e
m
e
r
a
l
d
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
d
j
a
n
g
o
"
,


 
 
 
 
k
i
n
d
:
 
"
l
e
s
s
o
n
"
,


 
 
 
 
c
a
t
e
g
o
r
y
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


 
 
 
 
s
t
a
t
:
 
"
L
e
s
s
o
n
s
"
,


 
 
 
 
l
e
s
s
o
n
C
o
u
n
t
K
e
y
:
 
"
d
j
a
n
g
o
"
,


 
 
 
 
s
a
l
a
r
y
:
 
"
A
v
g
 
₹
1
2
 
L
P
A
"
,


 
 
}
,




 
 
/
/
 
─
─
 
D
a
t
a
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
s
q
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
Q
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
t
e
r
a
c
t
i
v
e
 
S
Q
L
 
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
 
r
u
n
 
i
n
 
y
o
u
r
 
b
r
o
w
s
e
r
 
-
 
S
E
L
E
C
T
,
 
J
O
I
N
,
 
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
,
 
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
 
a
n
d
 
m
o
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
 
D
a
t
a
b
a
s
e
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
b
l
u
e
-
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
b
g
-
b
l
u
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
b
l
u
e
-
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
b
l
u
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
b
l
u
e
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
s
q
l
"
,


 
 
 
 
k
i
n
d
:
 
"
l
e
s
s
o
n
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
d
a
t
a
"
,


 
 
 
 
s
t
a
t
:
 
"
1
8
8
 
E
x
e
r
c
i
s
e
s
"
,


 
 
 
 
s
a
l
a
r
y
:
 
"
A
v
g
 
₹
8
 
L
P
A
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
a
t
a
-
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
 
A
n
a
l
y
t
i
c
s
 
&
 
S
c
i
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
N
u
m
P
y
,
 
P
a
n
d
a
s
,
 
v
i
s
u
a
l
i
z
a
t
i
o
n
,
 
s
t
a
t
i
s
t
i
c
s
,
 
E
D
A
,
 
a
n
d
 
m
a
c
h
i
n
e
 
l
e
a
r
n
i
n
g
 
b
a
s
i
c
s
 
w
i
t
h
 
P
y
t
h
o
n
.
"
,


 
 
 
 
i
c
o
n
:
 
B
a
r
C
h
a
r
t
3
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
t
e
a
l
-
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
b
g
-
t
e
a
l
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
t
e
a
l
-
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
t
e
a
l
-
2
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
t
e
a
l
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
d
a
t
a
-
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
,


 
 
 
 
k
i
n
d
:
 
"
l
e
s
s
o
n
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
d
a
t
a
"
,


 
 
 
 
s
t
a
t
:
 
"
L
e
s
s
o
n
s
"
,


 
 
 
 
l
e
s
s
o
n
C
o
u
n
t
K
e
y
:
 
"
d
a
t
a
-
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
,


 
 
 
 
s
a
l
a
r
y
:
 
"
A
v
g
 
₹
1
5
 
L
P
A
"
,


 
 
}
,




 
 
/
/
 
─
─
 
W
e
b
3
 
─
─


 
 
{


 
 
 
 
i
d
:
 
"
b
l
o
c
k
c
h
a
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
B
l
o
c
k
c
h
a
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
m
a
r
t
 
c
o
n
t
r
a
c
t
 
p
r
o
j
e
c
t
s
 
f
r
o
m
 
b
e
g
i
n
n
e
r
 
t
o
 
a
d
v
a
n
c
e
d
 
-
 
E
R
C
-
2
0
,
 
N
F
T
s
,
 
D
e
F
i
,
 
D
A
O
s
,
 
Z
K
 
p
r
o
o
f
s
,
 
a
n
d
 
m
o
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
 
B
l
o
c
k
s
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
v
i
o
l
e
t
-
5
0
0
"
,


 
 
 
 
b
g
C
o
l
o
r
:
 
"
b
g
-
v
i
o
l
e
t
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
v
i
o
l
e
t
-
9
0
0
/
3
0
"
,


 
 
 
 
b
o
r
d
e
r
H
o
v
e
r
:
 
"
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
v
i
o
l
e
t
-
2
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
v
i
o
l
e
t
-
8
0
0
"
,


 
 
 
 
p
a
t
h
:
 
"
b
l
o
c
k
c
h
a
i
n
"
,


 
 
 
 
k
i
n
d
:
 
"
l
e
s
s
o
n
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
w
e
b
3
"
,


 
 
 
 
s
t
a
t
:
 
"
3
5
 
P
r
o
j
e
c
t
s
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
B
e
g
i
n
n
e
r
"
,
 
/
/
m
o
c
k
 
t
e
s
t
i
n
g


 
 
 
 
s
a
l
a
r
y
:
 
"
A
v
g
 
₹
1
6
 
L
P
A
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
 
c
o
n
s
t
 
C
A
T
E
G
O
R
Y
_
L
A
B
E
L
:
 
R
e
c
o
r
d
<
T
r
a
c
k
C
a
t
e
g
o
r
y
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


 
 
p
r
a
c
t
i
c
e
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
"
,


 
 
f
r
o
n
t
e
n
d
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
"
,


 
 
b
a
c
k
e
n
d
:
 
"
B
a
c
k
e
n
d
"
,


 
 
d
a
t
a
:
 
"
D
a
t
a
 
&
 
S
Q
L
"
,


 
 
w
e
b
3
:
 
"
W
e
b
3
"
,


}
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
 
C
A
T
E
G
O
R
Y
_
O
R
D
E
R
:
 
T
r
a
c
k
C
a
t
e
g
o
r
y
[
]
 
=
 
[
"
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
 
"
d
a
t
a
"
,
 
"
w
e
b
3
"
]
;


