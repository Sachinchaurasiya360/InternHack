
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
,
 
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
E
f
f
e
c
t
 
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
,
 
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


 
 
S
e
a
r
c
h
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
 
C
h
e
v
r
o
n
U
p
,


 
 
G
l
o
b
e
,
 
D
o
l
l
a
r
S
i
g
n
,
 
C
a
l
e
n
d
a
r
,
 
U
s
e
r
s
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
2
,
 
X
,
 
F
i
l
t
e
r
,
 
C
a
l
e
n
d
a
r
P
l
u
s
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
 
{
 
c
a
n
o
n
i
c
a
l
U
r
l
 
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
s
e
o
.
u
t
i
l
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
 
m
a
r
k
L
e
a
r
n
i
n
g
P
a
t
h
M
i
l
e
s
t
o
n
e
 
}
 
f
r
o
m
 
"
.
/
l
e
a
r
n
i
n
g
-
p
a
t
h
s
.
d
a
t
a
"
;




f
u
n
c
t
i
o
n
 
n
e
x
t
D
a
t
e
(
m
o
n
t
h
:
 
n
u
m
b
e
r
,
 
d
a
y
:
 
n
u
m
b
e
r
,
 
h
o
u
r
 
=
 
2
3
,
 
m
i
n
u
t
e
 
=
 
5
9
)
:
 
s
t
r
i
n
g
 
{


 
 
c
o
n
s
t
 
n
o
w
 
=
 
n
e
w
 
D
a
t
e
(
)
;


 
 
c
o
n
s
t
 
d
 
=
 
n
e
w
 
D
a
t
e
(
D
a
t
e
.
U
T
C
(
n
o
w
.
g
e
t
F
u
l
l
Y
e
a
r
(
)
,
 
m
o
n
t
h
 
-
 
1
,
 
d
a
y
,
 
h
o
u
r
,
 
m
i
n
u
t
e
,
 
0
)
)
;


 
 
i
f
 
(
d
 
<
=
 
n
o
w
)
 
d
.
s
e
t
U
T
C
F
u
l
l
Y
e
a
r
(
d
.
g
e
t
U
T
C
F
u
l
l
Y
e
a
r
(
)
 
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
 
d
.
t
o
I
S
O
S
t
r
i
n
g
(
)
;


}




/
/
 
─
─
─
 
D
a
t
a
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
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
 
t
y
p
e
 
F
o
c
u
s
A
r
e
a
 
=
 
"
D
E
V
E
L
O
P
M
E
N
T
"
 
|
 
"
T
E
C
H
N
I
C
A
L
_
W
R
I
T
I
N
G
"
 
|
 
"
D
E
S
I
G
N
"
 
|
 
"
R
E
S
E
A
R
C
H
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
 
P
r
o
g
r
a
m
D
i
f
f
i
c
u
l
t
y
 
=
 
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
r
o
g
r
a
m
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
n
a
m
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
h
o
r
t
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


 
 
f
u
l
l
D
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


 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
s
t
r
i
n
g
;


 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
S
t
u
d
e
n
t
s
"
 
|
 
"
O
p
e
n
 
t
o
 
A
l
l
"
 
|
 
"
D
i
v
e
r
s
i
t
y
-
f
o
c
u
s
e
d
"
;


 
 
s
t
i
p
e
n
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
t
i
p
e
n
d
P
a
i
d
:
 
b
o
o
l
e
a
n
;


 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
H
i
g
h
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
L
o
w
/
N
o
n
e
"
;


 
 
w
i
n
d
o
w
:
 
s
t
r
i
n
g
;


 
 
s
t
a
t
u
s
:
 
"
A
n
n
u
a
l
"
 
|
 
"
O
n
g
o
i
n
g
"
 
|
 
"
B
a
t
c
h
"
;


 
 
r
e
g
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


 
 
w
e
b
s
i
t
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
a
d
l
i
n
e
?
:
 
s
t
r
i
n
g
;


 
 
s
t
a
r
t
D
a
t
e
?
:
 
s
t
r
i
n
g
;


 
 
a
p
p
l
y
U
r
l
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


 
 
t
a
g
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


 
 
t
i
m
e
l
i
n
e
:
 
{
 
p
h
a
s
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
a
t
e
s
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


 
 
h
o
w
T
o
A
p
p
l
y
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
S
t
a
r
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
D
e
a
d
l
i
n
e
?
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
 
P
r
o
g
r
a
m
D
i
f
f
i
c
u
l
t
y
;


 
 
f
o
c
u
s
A
r
e
a
:
 
F
o
c
u
s
A
r
e
a
;


}




c
o
n
s
t
 
P
R
O
G
R
A
M
S
:
 
P
r
o
g
r
a
m
[
]
 
=
 
[


 
 
{


 
 
 
 
i
d
:
 
1
,


 
 
 
 
n
a
m
e
:
 
"
G
o
o
g
l
e
 
S
u
m
m
e
r
 
o
f
 
C
o
d
e
"
,


 
 
 
 
s
h
o
r
t
:
 
"
G
S
o
C
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
h
e
 
w
o
r
l
d
'
s
 
l
a
r
g
e
s
t
 
o
p
e
n
 
s
o
u
r
c
e
 
m
e
n
t
o
r
s
h
i
p
 
p
r
o
g
r
a
m
.
 
S
t
u
d
e
n
t
s
 
w
o
r
k
 
1
2
–
2
2
 
w
e
e
k
s
 
o
n
 
a
 
c
o
d
i
n
g
 
p
r
o
j
e
c
t
 
f
o
r
 
a
n
 
a
c
c
e
p
t
e
d
 
o
r
g
a
n
i
z
a
t
i
o
n
,
 
g
u
i
d
e
d
 
b
y
 
e
x
p
e
r
t
 
m
e
n
t
o
r
s
.
"
,


 
 
 
 
f
u
l
l
D
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
o
o
g
l
e
 
S
u
m
m
e
r
 
o
f
 
C
o
d
e
 
(
G
S
o
C
)
 
i
s
 
a
 
g
l
o
b
a
l
,
 
o
n
l
i
n
e
 
m
e
n
t
o
r
i
n
g
 
p
r
o
g
r
a
m
 
f
o
c
u
s
e
d
 
o
n
 
i
n
t
r
o
d
u
c
i
n
g
 
n
e
w
 
c
o
n
t
r
i
b
u
t
o
r
s
 
t
o
 
o
p
e
n
 
s
o
u
r
c
e
 
s
o
f
t
w
a
r
e
 
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
 
G
S
o
C
 
c
o
n
t
r
i
b
u
t
o
r
s
 
w
o
r
k
 
w
i
t
h
 
a
n
 
o
p
e
n
 
s
o
u
r
c
e
 
o
r
g
a
n
i
z
a
t
i
o
n
 
o
n
 
a
 
1
2
+
 
w
e
e
k
 
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
j
e
c
t
 
u
n
d
e
r
 
t
h
e
 
g
u
i
d
a
n
c
e
 
o
f
 
m
e
n
t
o
r
s
.
 
S
i
n
c
e
 
2
0
0
5
,
 
m
o
r
e
 
t
h
a
n
 
2
0
,
0
0
0
 
c
o
n
t
r
i
b
u
t
o
r
s
 
h
a
v
e
 
p
a
r
t
i
c
i
p
a
t
e
d
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
1
8
+
 
y
e
a
r
s
 
o
l
d
,
 
e
n
r
o
l
l
e
d
 
i
n
 
a
n
 
a
c
c
r
e
d
i
t
e
d
 
i
n
s
t
i
t
u
t
i
o
n
 
o
r
 
r
e
c
e
n
t
l
y
 
g
r
a
d
u
a
t
e
d
 
w
i
t
h
i
n
 
1
 
y
e
a
r
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
S
t
u
d
e
n
t
s
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
$
1
,
5
0
0
 
–
 
$
6
,
6
0
0
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
H
i
g
h
"
,


 
 
 
 
w
i
n
d
o
w
:
 
"
J
a
n
 
–
 
M
a
r
 
(
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
s
)
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
A
n
n
u
a
l
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
s
u
m
m
e
r
o
f
c
o
d
e
.
w
i
t
h
g
o
o
g
l
e
.
c
o
m
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
s
u
m
m
e
r
o
f
c
o
d
e
.
w
i
t
h
g
o
o
g
l
e
.
c
o
m
"
,


 
 
 
 
d
e
a
d
l
i
n
e
:
 
"
2
0
2
6
-
0
4
-
0
8
"
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
r
e
d
-
7
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
r
e
d
-
5
0
 
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
"
,


 
 
 
 
t
a
g
s
:
 
[
"
g
o
o
g
l
e
"
,
 
"
c
o
d
i
n
g
"
,
 
"
m
e
n
t
o
r
s
h
i
p
"
,
 
"
p
a
i
d
"
]
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
:
 
[


 
 
 
 
 
 
"
M
u
s
t
 
b
e
 
1
8
 
y
e
a
r
s
 
o
r
 
o
l
d
e
r
"
,


 
 
 
 
 
 
"
E
n
r
o
l
l
e
d
 
i
n
 
a
n
 
a
c
c
r
e
d
i
t
e
d
 
i
n
s
t
i
t
u
t
i
o
n
 
(
o
r
 
g
r
a
d
u
a
t
e
d
 
w
i
t
h
i
n
 
1
 
y
e
a
r
)
"
,


 
 
 
 
 
 
"
W
r
i
t
e
 
a
 
d
e
t
a
i
l
e
d
 
p
r
o
j
e
c
t
 
p
r
o
p
o
s
a
l
"
,


 
 
 
 
 
 
"
D
e
m
o
n
s
t
r
a
t
e
 
p
r
i
o
r
 
c
o
n
t
r
i
b
u
t
i
o
n
s
 
t
o
 
t
h
e
 
o
r
g
 
(
h
i
g
h
l
y
 
r
e
c
o
m
m
e
n
d
e
d
)
"
,


 
 
 
 
 
 
"
P
a
s
s
 
G
o
o
g
l
e
'
s
 
e
l
i
g
i
b
i
l
i
t
y
 
c
h
e
c
k
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
O
r
g
a
n
i
z
a
t
i
o
n
 
A
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
s
"
,
 
d
a
t
e
s
:
 
"
O
c
t
 
–
 
N
o
v
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
O
r
g
a
n
i
z
a
t
i
o
n
s
 
A
n
n
o
u
n
c
e
d
"
,
 
d
a
t
e
s
:
 
"
D
e
c
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
C
o
n
t
r
i
b
u
t
o
r
 
A
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
s
"
,
 
d
a
t
e
s
:
 
"
J
a
n
 
–
 
F
e
b
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
A
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
 
R
e
v
i
e
w
"
,
 
d
a
t
e
s
:
 
"
M
a
r
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
C
o
d
i
n
g
 
P
e
r
i
o
d
 
(
M
e
d
i
u
m
)
"
,
 
d
a
t
e
s
:
 
"
M
a
y
 
–
 
A
u
g
 
(
1
2
 
w
e
e
k
s
)
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
F
i
n
a
l
 
E
v
a
l
u
a
t
i
o
n
s
"
,
 
d
a
t
e
s
:
 
"
A
u
g
 
–
 
S
e
p
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
R
e
s
u
l
t
s
 
A
n
n
o
u
n
c
e
d
"
,
 
d
a
t
e
s
:
 
"
S
e
p
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
B
r
o
w
s
e
 
a
c
c
e
p
t
e
d
 
o
r
g
a
n
i
z
a
t
i
o
n
s
 
a
t
 
s
u
m
m
e
r
o
f
c
o
d
e
.
w
i
t
h
g
o
o
g
l
e
.
c
o
m
"
,


 
 
 
 
 
 
"
J
o
i
n
 
t
h
e
 
o
r
g
'
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
 
c
h
a
n
n
e
l
 
(
D
i
s
c
o
r
d
,
 
I
R
C
,
 
m
a
i
l
i
n
g
 
l
i
s
t
)
"
,


 
 
 
 
 
 
"
M
a
k
e
 
a
 
s
m
a
l
l
 
c
o
n
t
r
i
b
u
t
i
o
n
 
t
o
 
d
e
m
o
n
s
t
r
a
t
e
 
y
o
u
r
 
a
b
i
l
i
t
y
"
,


 
 
 
 
 
 
"
F
i
n
d
 
o
r
 
p
r
o
p
o
s
e
 
a
 
p
r
o
j
e
c
t
 
i
d
e
a
 
i
n
 
t
h
e
 
o
r
g
'
s
 
i
d
e
a
 
l
i
s
t
"
,


 
 
 
 
 
 
"
W
r
i
t
e
 
a
 
d
e
t
a
i
l
e
d
 
p
r
o
p
o
s
a
l
 
(
p
r
o
b
l
e
m
 
s
t
a
t
e
m
e
n
t
,
 
t
i
m
e
l
i
n
e
,
 
m
i
l
e
s
t
o
n
e
s
)
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
v
i
a
 
t
h
e
 
G
S
o
C
 
p
o
r
t
a
l
 
b
e
f
o
r
e
 
t
h
e
 
d
e
a
d
l
i
n
e
"
,


 
 
 
 
]
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
D
e
a
d
l
i
n
e
:
 
n
e
x
t
D
a
t
e
(
4
,
 
1
9
)
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
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
2
,


 
 
 
 
n
a
m
e
:
 
"
L
F
X
 
M
e
n
t
o
r
s
h
i
p
"
,


 
 
 
 
s
h
o
r
t
:
 
"
L
F
X
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
n
u
x
 
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
'
s
 
m
e
n
t
o
r
s
h
i
p
 
p
r
o
g
r
a
m
 
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
 
c
o
n
t
r
i
b
u
t
o
r
s
 
t
o
 
C
N
C
F
,
 
H
y
p
e
r
l
e
d
g
e
r
,
 
a
n
d
 
o
t
h
e
r
 
L
F
 
p
r
o
j
e
c
t
s
.
 
T
h
r
e
e
 
c
o
h
o
r
t
s
 
p
e
r
 
y
e
a
r
 
w
i
t
h
 
c
o
m
p
e
t
i
t
i
v
e
 
s
t
i
p
e
n
d
s
.
"
,


 
 
 
 
f
u
l
l
D
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
F
X
 
M
e
n
t
o
r
s
h
i
p
 
(
f
o
r
m
e
r
l
y
 
C
o
m
m
u
n
i
t
y
 
B
r
i
d
g
e
)
 
i
s
 
a
 
p
l
a
t
f
o
r
m
 
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
 
a
s
p
i
r
i
n
g
 
o
p
e
n
 
s
o
u
r
c
e
 
d
e
v
e
l
o
p
e
r
s
 
w
i
t
h
 
m
e
n
t
o
r
s
 
i
n
 
1
0
0
+
 
L
i
n
u
x
 
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
 
p
r
o
j
e
c
t
s
.
 
I
t
 
r
u
n
s
 
t
h
r
e
e
 
c
o
h
o
r
t
s
 
a
n
n
u
a
l
l
y
 
(
S
p
r
i
n
g
,
 
S
u
m
m
e
r
,
 
F
a
l
l
)
 
a
c
r
o
s
s
 
C
N
C
F
,
 
H
y
p
e
r
l
e
d
g
e
r
,
 
O
p
e
n
M
a
i
n
f
r
a
m
e
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


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
O
p
e
n
 
t
o
 
a
n
y
o
n
e
 
1
8
+
 
y
e
a
r
s
 
o
l
d
 
g
l
o
b
a
l
l
y
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
S
t
u
d
e
n
t
s
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
$
3
,
0
0
0
 
–
 
$
6
,
6
0
0
 
p
e
r
 
t
e
r
m
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
H
i
g
h
"
,


 
 
 
 
w
i
n
d
o
w
:
 
"
3
 
c
o
h
o
r
t
s
/
y
e
a
r
:
 
J
a
n
,
 
M
a
y
,
 
S
e
p
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
O
n
g
o
i
n
g
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
m
e
n
t
o
r
s
h
i
p
.
l
f
x
.
l
i
n
u
x
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
.
o
r
g
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
m
e
n
t
o
r
s
h
i
p
.
l
f
x
.
l
i
n
u
x
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
.
o
r
g
"
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
7
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
"
,


 
 
 
 
t
a
g
s
:
 
[
"
l
i
n
u
x
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
"
,
 
"
c
n
c
f
"
,
 
"
p
a
i
d
"
,
 
"
g
o
"
,
 
"
c
l
o
u
d
"
]
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
:
 
[


 
 
 
 
 
 
"
1
8
+
 
y
e
a
r
s
 
o
l
d
"
,


 
 
 
 
 
 
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
 
s
k
i
l
l
s
 
i
n
 
G
o
,
 
P
y
t
h
o
n
,
 
o
r
 
r
e
l
e
v
a
n
t
 
s
t
a
c
k
"
,


 
 
 
 
 
 
"
U
n
d
e
r
s
t
a
n
d
i
n
g
 
o
f
 
L
i
n
u
x
/
c
l
o
u
d
 
c
o
n
c
e
p
t
s
 
(
f
o
r
 
C
N
C
F
 
p
r
o
j
e
c
t
s
)
"
,


 
 
 
 
 
 
"
R
e
s
u
m
e
 
a
n
d
 
s
h
o
r
t
 
s
t
a
t
e
m
e
n
t
 
o
f
 
i
n
t
e
r
e
s
t
"
,


 
 
 
 
 
 
"
A
v
a
i
l
a
b
l
e
 
t
o
 
c
o
m
m
i
t
 
~
2
0
 
h
o
u
r
s
/
w
e
e
k
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
S
p
r
i
n
g
 
C
o
h
o
r
t
 
A
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
s
"
,
 
d
a
t
e
s
:
 
"
J
a
n
 
–
 
F
e
b
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
S
p
r
i
n
g
 
C
o
h
o
r
t
"
,
 
d
a
t
e
s
:
 
"
M
a
r
 
–
 
M
a
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
S
u
m
m
e
r
 
C
o
h
o
r
t
 
A
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
s
"
,
 
d
a
t
e
s
:
 
"
M
a
y
 
–
 
J
u
n
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
S
u
m
m
e
r
 
C
o
h
o
r
t
"
,
 
d
a
t
e
s
:
 
"
J
u
n
 
–
 
A
u
g
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
F
a
l
l
 
C
o
h
o
r
t
 
A
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
s
"
,
 
d
a
t
e
s
:
 
"
S
e
p
 
–
 
O
c
t
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
F
a
l
l
 
C
o
h
o
r
t
"
,
 
d
a
t
e
s
:
 
"
O
c
t
 
–
 
D
e
c
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
V
i
s
i
t
 
m
e
n
t
o
r
s
h
i
p
.
l
f
x
.
l
i
n
u
x
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
.
o
r
g
 
a
n
d
 
c
r
e
a
t
e
 
a
n
 
a
c
c
o
u
n
t
"
,


 
 
 
 
 
 
"
B
r
o
w
s
e
 
o
p
e
n
 
m
e
n
t
o
r
s
h
i
p
 
o
p
p
o
r
t
u
n
i
t
i
e
s
 
b
y
 
p
r
o
j
e
c
t
"
,


 
 
 
 
 
 
"
R
e
v
i
e
w
 
r
e
q
u
i
r
e
d
 
s
k
i
l
l
s
 
f
o
r
 
e
a
c
h
 
p
r
o
j
e
c
t
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
y
o
u
r
 
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
 
w
i
t
h
 
r
e
s
u
m
e
 
a
n
d
 
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
"
,


 
 
 
 
 
 
"
C
o
m
p
l
e
t
e
 
a
n
y
 
t
a
k
e
-
h
o
m
e
 
t
a
s
k
s
 
i
f
 
r
e
q
u
e
s
t
e
d
"
,


 
 
 
 
 
 
"
W
a
i
t
 
f
o
r
 
m
e
n
t
o
r
 
s
e
l
e
c
t
i
o
n
 
n
o
t
i
f
i
c
a
t
i
o
n
"
,


 
 
 
 
]
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
D
e
a
d
l
i
n
e
:
 
n
e
x
t
D
a
t
e
(
5
,
 
1
5
)
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
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
3
,


 
 
 
 
n
a
m
e
:
 
"
M
L
H
 
F
e
l
l
o
w
s
h
i
p
"
,


 
 
 
 
s
h
o
r
t
:
 
"
M
L
H
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
 
1
2
-
w
e
e
k
 
r
e
m
o
t
e
 
i
n
t
e
r
n
s
h
i
p
 
a
l
t
e
r
n
a
t
i
v
e
 
w
h
e
r
e
 
p
a
r
t
i
c
i
p
a
n
t
s
 
c
o
n
t
r
i
b
u
t
e
 
t
o
 
o
p
e
n
 
s
o
u
r
c
e
 
p
r
o
j
e
c
t
s
 
u
s
e
d
 
b
y
 
r
e
a
l
 
c
o
m
p
a
n
i
e
s
,
 
e
a
r
n
i
n
g
 
a
 
s
t
i
p
e
n
d
 
a
n
d
 
c
a
r
e
e
r
 
c
o
a
c
h
i
n
g
.
"
,


 
 
 
 
f
u
l
l
D
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
h
e
 
M
L
H
 
F
e
l
l
o
w
s
h
i
p
 
i
s
 
a
 
r
e
m
o
t
e
 
i
n
t
e
r
n
s
h
i
p
 
a
l
t
e
r
n
a
t
i
v
e
 
f
o
r
 
s
o
f
t
w
a
r
e
 
e
n
g
i
n
e
e
r
s
.
 
F
e
l
l
o
w
s
 
c
o
n
t
r
i
b
u
t
e
 
t
o
 
o
p
e
n
 
s
o
u
r
c
e
 
p
r
o
j
e
c
t
s
 
t
h
a
t
 
a
r
e
 
u
s
e
d
 
b
y
 
c
o
m
p
a
n
i
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
 
w
o
r
l
d
,
 
g
u
i
d
e
d
 
b
y
 
m
e
n
t
o
r
s
 
f
r
o
m
 
t
o
p
 
t
e
c
h
 
c
o
m
p
a
n
i
e
s
.
 
I
t
 
r
u
n
s
 
i
n
 
S
p
r
i
n
g
,
 
S
u
m
m
e
r
,
 
a
n
d
 
F
a
l
l
 
b
a
t
c
h
e
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
U
n
i
v
e
r
s
i
t
y
 
s
t
u
d
e
n
t
s
 
a
n
d
 
r
e
c
e
n
t
 
g
r
a
d
u
a
t
e
s
 
g
l
o
b
a
l
l
y
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
S
t
u
d
e
n
t
s
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
$
5
,
0
0
0
 
–
 
$
6
,
0
0
0
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
H
i
g
h
"
,


 
 
 
 
w
i
n
d
o
w
:
 
"
S
p
r
i
n
g
 
/
 
S
u
m
m
e
r
 
/
 
F
a
l
l
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
B
a
t
c
h
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
f
e
l
l
o
w
s
h
i
p
.
m
l
h
.
i
o
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
f
e
l
l
o
w
s
h
i
p
.
m
l
h
.
i
o
/
a
p
p
l
y
"
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
i
n
d
i
g
o
-
7
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
i
n
d
i
g
o
-
5
0
 
b
o
r
d
e
r
-
i
n
d
i
g
o
-
2
0
0
"
,


 
 
 
 
t
a
g
s
:
 
[
"
m
l
h
"
,
 
"
f
e
l
l
o
w
s
h
i
p
"
,
 
"
p
a
i
d
"
,
 
"
i
n
t
e
r
n
s
h
i
p
-
a
l
t
e
r
n
a
t
i
v
e
"
]
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
:
 
[


 
 
 
 
 
 
"
C
u
r
r
e
n
t
l
y
 
e
n
r
o
l
l
e
d
 
i
n
 
a
 
u
n
i
v
e
r
s
i
t
y
 
o
r
 
r
e
c
e
n
t
l
y
 
g
r
a
d
u
a
t
e
d
"
,


 
 
 
 
 
 
"
A
b
l
e
 
t
o
 
w
o
r
k
 
3
0
 
h
r
s
/
w
e
e
k
 
f
o
r
 
1
2
 
w
e
e
k
s
"
,


 
 
 
 
 
 
"
S
t
r
o
n
g
 
c
o
d
i
n
g
 
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
 
(
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
)
"
,


 
 
 
 
 
 
"
F
a
m
i
l
i
a
r
i
t
y
 
w
i
t
h
 
G
i
t
 
a
n
d
 
o
p
e
n
 
s
o
u
r
c
e
 
w
o
r
k
f
l
o
w
s
"
,


 
 
 
 
 
 
"
W
i
l
l
i
n
g
n
e
s
s
 
t
o
 
c
o
n
t
r
i
b
u
t
e
 
t
o
 
a
s
s
i
g
n
e
d
 
p
r
o
j
e
c
t
s
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
A
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
s
 
O
p
e
n
"
,
 
d
a
t
e
s
:
 
"
2
–
3
 
m
o
n
t
h
s
 
b
e
f
o
r
e
 
b
a
t
c
h
 
s
t
a
r
t
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
T
e
c
h
n
i
c
a
l
 
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
a
t
e
s
:
 
"
R
o
l
l
i
n
g
 
a
f
t
e
r
 
s
u
b
m
i
s
s
i
o
n
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
F
e
l
l
o
w
s
h
i
p
 
S
t
a
r
t
"
,
 
d
a
t
e
s
:
 
"
J
a
n
 
(
S
p
r
i
n
g
)
 
/
 
J
u
n
 
(
S
u
m
m
e
r
)
 
/
 
S
e
p
 
(
F
a
l
l
)
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
O
p
e
n
 
S
o
u
r
c
e
 
C
o
n
t
r
i
b
u
t
i
o
n
s
"
,
 
d
a
t
e
s
:
 
"
W
e
e
k
s
 
1
–
1
2
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
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
 
&
 
D
e
m
o
 
D
a
y
"
,
 
d
a
t
e
s
:
 
"
E
n
d
 
o
f
 
b
a
t
c
h
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
A
p
p
l
y
 
a
t
 
f
e
l
l
o
w
s
h
i
p
.
m
l
h
.
i
o
 
-
 
f
i
l
l
 
o
u
t
 
t
h
e
 
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
 
f
o
r
m
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
a
 
p
e
r
s
o
n
a
l
 
s
t
a
t
e
m
e
n
t
 
a
b
o
u
t
 
y
o
u
r
 
c
o
d
i
n
g
 
j
o
u
r
n
e
y
"
,


 
 
 
 
 
 
"
C
o
m
p
l
e
t
e
 
a
 
s
h
o
r
t
 
c
o
d
i
n
g
 
c
h
a
l
l
e
n
g
e
"
,


 
 
 
 
 
 
"
A
t
t
e
n
d
 
a
 
t
e
c
h
n
i
c
a
l
 
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
 
M
L
H
 
r
e
v
i
e
w
e
r
"
,


 
 
 
 
 
 
"
I
f
 
a
c
c
e
p
t
e
d
,
 
o
n
b
o
a
r
d
 
a
n
d
 
j
o
i
n
 
y
o
u
r
 
p
o
d
 
(
g
r
o
u
p
 
o
f
 
5
-
6
 
f
e
l
l
o
w
s
)
"
,


 
 
 
 
]
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
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
4
,


 
 
 
 
n
a
m
e
:
 
"
O
u
t
r
e
a
c
h
y
"
,


 
 
 
 
s
h
o
r
t
:
 
"
O
u
t
r
e
a
c
h
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
P
a
i
d
,
 
r
e
m
o
t
e
 
i
n
t
e
r
n
s
h
i
p
s
 
i
n
 
o
p
e
n
 
s
o
u
r
c
e
 
a
n
d
 
o
p
e
n
 
s
c
i
e
n
c
e
 
f
o
r
 
p
e
o
p
l
e
 
s
u
b
j
e
c
t
 
t
o
 
s
y
s
t
e
m
i
c
 
b
i
a
s
 
i
n
 
t
h
e
 
t
e
c
h
 
i
n
d
u
s
t
r
y
.
 
O
n
e
 
o
f
 
t
h
e
 
h
i
g
h
e
s
t
 
s
t
i
p
e
n
d
s
 
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


 
 
 
 
f
u
l
l
D
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
u
t
r
e
a
c
h
y
 
p
r
o
v
i
d
e
s
 
i
n
t
e
r
n
s
h
i
p
s
 
i
n
 
o
p
e
n
 
s
o
u
r
c
e
 
a
n
d
 
o
p
e
n
 
s
c
i
e
n
c
e
 
f
o
r
 
p
e
o
p
l
e
 
w
h
o
 
f
a
c
e
 
u
n
d
e
r
-
r
e
p
r
e
s
e
n
t
a
t
i
o
n
,
 
s
y
s
t
e
m
i
c
 
b
i
a
s
,
 
o
r
 
d
i
s
c
r
i
m
i
n
a
t
i
o
n
 
i
n
 
t
h
e
 
t
e
c
h
n
o
l
o
g
y
 
i
n
d
u
s
t
r
y
.
 
T
w
o
 
c
o
h
o
r
t
s
 
r
u
n
 
p
e
r
 
y
e
a
r
 
(
M
a
y
–
A
u
g
 
a
n
d
 
D
e
c
–
M
a
r
)
.
 
P
a
r
t
i
c
i
p
a
n
t
s
 
m
u
s
t
 
b
e
 
i
n
 
a
n
 
e
l
i
g
i
b
l
e
 
c
o
u
n
t
r
y
 
a
n
d
 
m
e
e
t
 
d
e
m
o
g
r
a
p
h
i
c
 
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
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
P
e
o
p
l
e
 
s
u
b
j
e
c
t
 
t
o
 
d
i
s
c
r
i
m
i
n
a
t
i
o
n
 
i
n
 
t
e
c
h
 
-
 
w
o
m
e
n
,
 
n
o
n
-
b
i
n
a
r
y
,
 
L
G
B
T
Q
+
,
 
r
a
c
i
a
l
/
e
t
h
n
i
c
 
m
i
n
o
r
i
t
i
e
s
,
 
a
n
d
 
o
t
h
e
r
s
 
i
n
 
e
l
i
g
i
b
l
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
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
D
i
v
e
r
s
i
t
y
-
f
o
c
u
s
e
d
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
$
7
,
0
0
0
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
H
i
g
h
"
,


 
 
 
 
w
i
n
d
o
w
:
 
"
M
a
y
-
A
u
g
 
&
 
D
e
c
-
M
a
r
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
B
a
t
c
h
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
o
u
t
r
e
a
c
h
y
.
o
r
g
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
o
u
t
r
e
a
c
h
y
.
o
r
g
/
a
p
p
l
y
"
,


 
 
 
 
d
e
a
d
l
i
n
e
:
 
"
2
0
2
6
-
0
8
-
2
2
"
,


 
 
 
 
s
t
a
r
t
D
a
t
e
:
 
"
2
0
2
6
-
0
5
-
2
0
"
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
7
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
"
,


 
 
 
 
t
a
g
s
:
 
[
"
d
i
v
e
r
s
i
t
y
"
,
 
"
i
n
c
l
u
s
i
o
n
"
,
 
"
p
a
i
d
"
,
 
"
r
e
m
o
t
e
"
]
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
:
 
[


 
 
 
 
 
 
"
B
e
 
i
n
 
a
n
 
e
l
i
g
i
b
l
e
 
c
o
u
n
t
r
y
 
(
c
h
e
c
k
 
o
u
t
r
e
a
c
h
y
.
o
r
g
 
f
o
r
 
t
h
e
 
l
i
s
t
)
"
,


 
 
 
 
 
 
"
M
e
e
t
 
d
i
v
e
r
s
i
t
y
 
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
 
(
w
o
m
e
n
,
 
n
o
n
-
b
i
n
a
r
y
,
 
L
G
B
T
Q
+
,
 
r
a
c
i
a
l
 
m
i
n
o
r
i
t
i
e
s
,
 
e
t
c
.
)
"
,


 
 
 
 
 
 
"
N
o
t
 
c
u
r
r
e
n
t
l
y
 
e
m
p
l
o
y
e
d
 
f
u
l
l
-
t
i
m
e
"
,


 
 
 
 
 
 
"
A
v
a
i
l
a
b
l
e
 
t
o
 
i
n
t
e
r
n
 
f
o
r
 
3
 
m
o
n
t
h
s
 
(
~
4
0
 
h
o
u
r
s
/
w
e
e
k
)
"
,


 
 
 
 
 
 
"
N
o
 
p
r
e
v
i
o
u
s
 
O
u
t
r
e
a
c
h
y
 
i
n
t
e
r
n
s
h
i
p
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
I
n
i
t
i
a
l
 
A
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
"
,
 
d
a
t
e
s
:
 
"
J
a
n
 
(
f
o
r
 
M
a
y
 
c
o
h
o
r
t
)
 
/
 
A
u
g
 
(
f
o
r
 
D
e
c
 
c
o
h
o
r
t
)
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
C
o
n
t
r
i
b
u
t
i
o
n
 
P
e
r
i
o
d
"
,
 
d
a
t
e
s
:
 
"
F
e
b
–
M
a
r
 
(
f
o
r
 
M
a
y
)
 
/
 
S
e
p
–
O
c
t
 
(
f
o
r
 
D
e
c
)
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
I
n
t
e
r
n
 
S
e
l
e
c
t
i
o
n
s
 
A
n
n
o
u
n
c
e
d
"
,
 
d
a
t
e
s
:
 
"
M
a
r
 
(
f
o
r
 
M
a
y
)
 
/
 
O
c
t
 
(
f
o
r
 
D
e
c
)
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
I
n
t
e
r
n
s
h
i
p
"
,
 
d
a
t
e
s
:
 
"
M
a
y
–
A
u
g
 
o
r
 
D
e
c
–
M
a
r
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
C
h
e
c
k
 
y
o
u
r
 
e
l
i
g
i
b
i
l
i
t
y
 
o
n
 
o
u
t
r
e
a
c
h
y
.
o
r
g
/
e
l
i
g
i
b
i
l
i
t
y
"
,


 
 
 
 
 
 
"
F
i
l
l
 
i
n
 
t
h
e
 
i
n
i
t
i
a
l
 
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
 
d
u
r
i
n
g
 
t
h
e
 
o
p
e
n
 
w
i
n
d
o
w
"
,


 
 
 
 
 
 
"
G
e
t
 
a
c
c
e
p
t
e
d
 
f
o
r
 
t
h
e
 
c
o
n
t
r
i
b
u
t
i
o
n
 
p
e
r
i
o
d
"
,


 
 
 
 
 
 
"
M
a
k
e
 
c
o
n
t
r
i
b
u
t
i
o
n
s
 
t
o
 
1
–
2
 
p
r
o
j
e
c
t
s
 
d
u
r
i
n
g
 
t
h
e
 
c
o
n
t
r
i
b
u
t
i
o
n
 
p
e
r
i
o
d
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
a
 
f
i
n
a
l
 
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
 
w
i
t
h
 
y
o
u
r
 
c
o
n
t
r
i
b
u
t
i
o
n
 
s
u
m
m
a
r
y
"
,


 
 
 
 
]
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
S
t
a
r
t
:
 
n
e
x
t
D
a
t
e
(
2
,
 
6
,
 
1
6
,
 
0
)
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
D
e
a
d
l
i
n
e
:
 
n
e
x
t
D
a
t
e
(
2
,
 
1
3
,
 
1
6
,
 
0
)
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
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
5
,


 
 
 
 
n
a
m
e
:
 
"
S
e
a
s
o
n
 
o
f
 
D
o
c
s
"
,


 
 
 
 
s
h
o
r
t
:
 
"
G
S
o
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
G
o
o
g
l
e
'
s
 
p
r
o
g
r
a
m
 
p
a
i
r
i
n
g
 
t
e
c
h
n
i
c
a
l
 
w
r
i
t
e
r
s
 
w
i
t
h
 
o
p
e
n
 
s
o
u
r
c
e
 
o
r
g
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
 
d
o
c
u
m
e
n
t
a
t
i
o
n
.
 
O
r
g
a
n
i
z
a
t
i
o
n
s
 
r
e
c
e
i
v
e
 
f
u
n
d
s
 
t
o
 
p
a
y
 
w
r
i
t
e
r
s
 
d
i
r
e
c
t
l
y
.
"
,


 
 
 
 
f
u
l
l
D
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
o
o
g
l
e
 
S
e
a
s
o
n
 
o
f
 
D
o
c
s
 
g
i
v
e
s
 
t
e
c
h
n
i
c
a
l
 
w
r
i
t
e
r
s
 
a
n
 
o
p
p
o
r
t
u
n
i
t
y
 
t
o
 
g
a
i
n
 
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
 
i
n
 
o
p
e
n
 
s
o
u
r
c
e
,
 
w
h
i
l
e
 
g
i
v
i
n
g
 
o
p
e
n
 
s
o
u
r
c
e
 
p
r
o
j
e
c
t
s
 
i
m
p
r
o
v
e
d
 
d
o
c
u
m
e
n
t
a
t
i
o
n
 
a
n
d
 
t
h
e
 
r
e
s
o
u
r
c
e
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
 
p
r
o
c
e
s
s
e
s
.
 
O
r
g
a
n
i
z
a
t
i
o
n
s
 
a
p
p
l
y
 
f
o
r
 
g
r
a
n
t
 
m
o
n
e
y
 
t
o
 
p
a
y
 
t
e
c
h
n
i
c
a
l
 
w
r
i
t
e
r
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
E
x
p
e
r
i
e
n
c
e
d
 
t
e
c
h
n
i
c
a
l
 
w
r
i
t
e
r
s
 
(
f
r
e
e
l
a
n
c
e
 
o
r
 
o
t
h
e
r
w
i
s
e
)
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
O
p
e
n
 
t
o
 
A
l
l
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
$
5
,
0
0
0
 
–
 
$
1
5
,
0
0
0
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
H
i
g
h
"
,


 
 
 
 
w
i
n
d
o
w
:
 
"
F
e
b
 
–
 
A
p
r
i
l
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
A
n
n
u
a
l
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
d
e
v
e
l
o
p
e
r
s
.
g
o
o
g
l
e
.
c
o
m
/
s
e
a
s
o
n
-
o
f
-
d
o
c
s
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
d
e
v
e
l
o
p
e
r
s
.
g
o
o
g
l
e
.
c
o
m
/
s
e
a
s
o
n
-
o
f
-
d
o
c
s
"
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
a
m
b
e
r
-
7
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
a
m
b
e
r
-
5
0
 
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
"
,


 
 
 
 
t
a
g
s
:
 
[
"
d
o
c
u
m
e
n
t
a
t
i
o
n
"
,
 
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
-
w
r
i
t
i
n
g
"
,
 
"
g
o
o
g
l
e
"
,
 
"
p
a
i
d
"
]
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
:
 
[


 
 
 
 
 
 
"
T
e
c
h
n
i
c
a
l
 
w
r
i
t
i
n
g
 
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
 
o
r
 
p
o
r
t
f
o
l
i
o
"
,


 
 
 
 
 
 
"
F
a
m
i
l
i
a
r
i
t
y
 
w
i
t
h
 
M
a
r
k
d
o
w
n
,
 
R
S
T
,
 
o
r
 
s
i
m
i
l
a
r
"
,


 
 
 
 
 
 
"
A
b
i
l
i
t
y
 
t
o
 
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
e
c
h
n
i
c
a
l
 
c
o
n
c
e
p
t
s
"
,


 
 
 
 
 
 
"
A
v
a
i
l
a
b
i
l
i
t
y
 
t
o
 
w
o
r
k
 
3
–
5
 
m
o
n
t
h
s
 
o
n
 
d
o
c
u
m
e
n
t
a
t
i
o
n
 
p
r
o
j
e
c
t
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
O
r
g
a
n
i
z
a
t
i
o
n
 
A
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
s
"
,
 
d
a
t
e
s
:
 
"
F
e
b
 
–
 
M
a
r
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
A
c
c
e
p
t
e
d
 
O
r
g
a
n
i
z
a
t
i
o
n
s
 
A
n
n
o
u
n
c
e
d
"
,
 
d
a
t
e
s
:
 
"
A
p
r
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
W
r
i
t
e
r
–
O
r
g
 
E
x
p
l
o
r
a
t
i
o
n
"
,
 
d
a
t
e
s
:
 
"
A
p
r
 
–
 
M
a
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
T
e
c
h
n
i
c
a
l
 
W
r
i
t
i
n
g
 
P
e
r
i
o
d
"
,
 
d
a
t
e
s
:
 
"
M
a
y
 
–
 
N
o
v
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
P
r
o
j
e
c
t
 
C
a
s
e
 
S
t
u
d
i
e
s
 
P
u
b
l
i
s
h
e
d
"
,
 
d
a
t
e
s
:
 
"
D
e
c
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
R
e
v
i
e
w
 
a
c
c
e
p
t
e
d
 
o
r
g
a
n
i
z
a
t
i
o
n
s
 
a
t
 
d
e
v
e
l
o
p
e
r
s
.
g
o
o
g
l
e
.
c
o
m
/
s
e
a
s
o
n
-
o
f
-
d
o
c
s
"
,


 
 
 
 
 
 
"
R
e
a
d
 
e
a
c
h
 
o
r
g
'
s
 
d
o
c
u
m
e
n
t
a
t
i
o
n
 
p
r
o
j
e
c
t
 
p
r
o
p
o
s
a
l
"
,


 
 
 
 
 
 
"
C
o
n
t
a
c
t
 
o
r
g
a
n
i
z
a
t
i
o
n
s
 
d
i
r
e
c
t
l
y
 
t
o
 
e
x
p
r
e
s
s
 
i
n
t
e
r
e
s
t
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
a
 
s
t
a
t
e
m
e
n
t
 
o
f
 
i
n
t
e
r
e
s
t
 
t
o
 
t
h
e
 
o
r
g
"
,


 
 
 
 
 
 
"
O
r
g
s
 
s
e
l
e
c
t
 
a
n
d
 
c
o
n
t
r
a
c
t
 
t
h
e
i
r
 
w
r
i
t
e
r
s
 
d
i
r
e
c
t
l
y
"
,


 
 
 
 
]
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
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
T
E
C
H
N
I
C
A
L
_
W
R
I
T
I
N
G
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
6
,


 
 
 
 
n
a
m
e
:
 
"
R
a
i
l
s
 
G
i
r
l
s
 
S
u
m
m
e
r
 
o
f
 
C
o
d
e
"
,


 
 
 
 
s
h
o
r
t
:
 
"
R
G
S
o
C
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
 
f
e
l
l
o
w
s
h
i
p
 
p
r
o
g
r
a
m
 
f
o
r
 
w
o
m
e
n
 
a
n
d
 
n
o
n
-
b
i
n
a
r
y
 
c
o
d
e
r
s
 
c
o
n
t
r
i
b
u
t
i
n
g
 
t
o
 
R
a
i
l
s
 
p
r
o
j
e
c
t
s
.
"
,


 
 
 
 
f
u
l
l
D
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
w
a
r
d
s
 
t
e
a
m
s
 
o
f
 
t
w
o
 
s
t
u
d
e
n
t
s
 
a
 
m
o
n
t
h
l
y
 
s
t
i
p
e
n
d
 
t
o
 
w
o
r
k
 
o
n
 
R
u
b
y
 
o
n
 
R
a
i
l
s
 
p
r
o
j
e
c
t
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
W
o
m
e
n
 
a
n
d
 
n
o
n
-
b
i
n
a
r
y
 
i
n
d
i
v
i
d
u
a
l
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
D
i
v
e
r
s
i
t
y
-
f
o
c
u
s
e
d
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
$
1
,
5
0
0
/
m
o
n
t
h
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
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


 
 
 
 
w
i
n
d
o
w
:
 
"
M
a
r
 
–
 
J
u
l
y
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
A
n
n
u
a
l
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
r
a
i
l
s
g
i
r
l
s
s
u
m
m
e
r
o
f
c
o
d
e
.
o
r
g
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
r
a
i
l
s
g
i
r
l
s
s
u
m
m
e
r
o
f
c
o
d
e
.
o
r
g
"
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
r
o
s
e
-
7
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
r
o
s
e
-
5
0
 
b
o
r
d
e
r
-
r
o
s
e
-
2
0
0
"
,


 
 
 
 
t
a
g
s
:
 
[
"
r
u
b
y
"
,
 
"
d
i
v
e
r
s
i
t
y
"
,
 
"
p
a
i
d
"
]
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
:
 
[


 
 
 
 
 
 
"
I
d
e
n
t
i
f
y
 
a
s
 
a
 
w
o
m
a
n
 
o
r
 
n
o
n
-
b
i
n
a
r
y
 
i
n
d
i
v
i
d
u
a
l
"
,


 
 
 
 
 
 
"
F
o
r
m
a
t
i
o
n
 
o
f
 
a
 
t
e
a
m
 
o
f
 
t
w
o
 
s
t
u
d
e
n
t
s
 
a
p
p
l
y
i
n
g
 
t
o
g
e
t
h
e
r
"
,


 
 
 
 
 
 
"
A
p
p
o
i
n
t
m
e
n
t
 
o
f
 
a
 
l
o
c
a
l
 
c
o
a
c
h
 
t
o
 
s
u
p
p
o
r
t
 
y
o
u
r
 
l
e
a
r
n
i
n
g
"
,


 
 
 
 
 
 
"
B
a
s
i
c
 
p
r
o
f
i
c
i
e
n
c
y
 
i
n
 
R
u
b
y
,
 
R
a
i
l
s
,
 
o
r
 
t
h
e
 
p
r
o
j
e
c
t
'
s
 
p
r
i
m
a
r
y
 
l
a
n
g
u
a
g
e
"
,


 
 
 
 
 
 
"
A
b
i
l
i
t
y
 
t
o
 
c
o
m
m
i
t
 
f
u
l
l
-
t
i
m
e
 
(
4
0
h
/
w
e
e
k
)
 
f
o
r
 
t
h
e
 
3
-
m
o
n
t
h
 
d
u
r
a
t
i
o
n
"
,


 
 
 
 
 
 
"
V
e
r
i
f
i
e
d
 
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
 
i
n
 
a
 
u
n
i
v
e
r
s
i
t
y
 
o
r
 
b
o
o
t
c
a
m
p
 
a
t
 
t
h
e
 
t
i
m
e
 
o
f
 
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
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
T
e
a
m
 
F
o
r
m
a
t
i
o
n
 
&
 
A
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
"
,
 
d
a
t
e
s
:
 
"
J
a
n
u
a
r
y
 
–
 
F
e
b
r
u
a
r
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
S
e
l
e
c
t
i
o
n
 
&
 
P
r
o
j
e
c
t
 
M
a
t
c
h
i
n
g
"
,
 
d
a
t
e
s
:
 
"
M
a
r
c
h
 
–
 
A
p
r
i
l
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
P
r
o
g
r
a
m
 
L
a
u
n
c
h
 
&
 
K
i
c
k
-
o
f
f
"
,
 
d
a
t
e
s
:
 
"
J
u
n
e
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
C
o
d
i
n
g
 
&
 
C
o
m
m
u
n
i
t
y
 
B
u
i
l
d
i
n
g
"
,
 
d
a
t
e
s
:
 
"
J
u
l
y
 
–
 
S
e
p
t
e
m
b
e
r
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
F
i
n
a
l
 
R
e
p
o
r
t
s
 
&
 
P
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
 
R
e
v
i
e
w
"
,
 
d
a
t
e
s
:
 
"
O
c
t
o
b
e
r
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
F
i
n
d
 
a
 
c
o
d
i
n
g
 
p
a
r
t
n
e
r
 
a
n
d
 
f
o
r
m
 
a
 
t
e
a
m
 
o
f
 
t
w
o
"
,


 
 
 
 
 
 
"
L
o
c
a
t
e
 
a
 
l
o
c
a
l
 
c
o
a
c
h
 
o
r
 
m
e
n
t
o
r
 
t
o
 
s
u
p
e
r
v
i
s
e
 
y
o
u
r
 
w
o
r
k
"
,


 
 
 
 
 
 
"
B
r
o
w
s
e
 
t
h
e
 
p
r
o
j
e
c
t
 
l
i
s
t
 
o
n
 
t
h
e
 
R
G
S
o
C
 
w
e
b
s
i
t
e
"
,


 
 
 
 
 
 
"
W
r
i
t
e
 
a
 
j
o
i
n
t
 
p
r
o
p
o
s
a
l
 
d
e
t
a
i
l
i
n
g
 
y
o
u
r
 
i
n
t
e
r
e
s
t
 
a
n
d
 
p
r
o
j
e
c
t
 
c
h
o
i
c
e
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
t
h
e
 
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
 
v
i
a
 
t
h
e
 
o
f
f
i
c
i
a
l
 
R
G
S
o
C
 
p
l
a
t
f
o
r
m
"
,


 
 
 
 
 
 
"
P
a
r
t
i
c
i
p
a
t
e
 
i
n
 
a
n
 
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
o
c
e
s
s
 
i
f
 
y
o
u
r
 
p
r
o
p
o
s
a
l
 
i
s
 
s
h
o
r
t
l
i
s
t
e
d
"
,


 
 
 
 
]
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
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
7
,


 
 
 
 
n
a
m
e
:
 
"
K
D
E
 
S
e
a
s
o
n
 
o
f
 
K
o
d
e
"
,


 
 
 
 
s
h
o
r
t
:
 
"
S
o
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
K
D
E
'
s
 
m
e
n
t
o
r
s
h
i
p
 
p
r
o
g
r
a
m
 
f
o
r
 
s
t
u
d
e
n
t
s
 
t
o
 
w
o
r
k
 
o
n
 
o
p
e
n
 
s
o
u
r
c
e
 
p
r
o
j
e
c
t
s
.
"
,


 
 
 
 
f
u
l
l
D
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
K
D
E
 
p
r
o
j
e
c
t
-
f
o
c
u
s
e
d
 
m
e
n
t
o
r
s
h
i
p
 
f
o
r
 
s
t
u
d
e
n
t
s
 
t
o
 
l
e
a
r
n
 
s
o
f
t
w
a
r
e
 
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


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
S
t
u
d
e
n
t
s
 
g
l
o
b
a
l
l
y
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
S
t
u
d
e
n
t
s
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
S
w
a
g
 
a
n
d
 
C
e
r
t
i
f
i
c
a
t
e
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
f
a
l
s
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
L
o
w
/
N
o
n
e
"
,


 
 
 
 
w
i
n
d
o
w
:
 
"
D
e
c
e
m
b
e
r
 
–
 
F
e
b
r
u
a
r
y
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
A
n
n
u
a
l
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
s
o
k
.
k
d
e
.
o
r
g
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
s
o
k
.
k
d
e
.
o
r
g
"
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
7
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
"
,


 
 
 
 
t
a
g
s
:
 
[
"
k
d
e
"
,
 
"
c
p
p
"
,
 
"
m
e
n
t
o
r
s
h
i
p
"
]
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
:
 
[


 
 
 
 
 
 
"
S
t
a
t
u
s
 
a
s
 
a
n
 
a
c
t
i
v
e
 
s
t
u
d
e
n
t
 
(
h
i
g
h
 
s
c
h
o
o
l
,
 
c
o
l
l
e
g
e
,
 
o
r
 
u
n
i
v
e
r
s
i
t
y
)
"
,


 
 
 
 
 
 
"
F
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
 
k
n
o
w
l
e
d
g
e
 
o
f
 
C
+
+
 
a
n
d
 
t
h
e
 
Q
t
 
f
r
a
m
e
w
o
r
k
"
,


 
 
 
 
 
 
"
F
a
m
i
l
i
a
r
i
t
y
 
w
i
t
h
 
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
 
t
o
o
l
s
 
l
i
k
e
 
G
i
t
 
a
n
d
 
C
M
a
k
e
"
,


 
 
 
 
 
 
"
A
b
i
l
i
t
y
 
t
o
 
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
e
 
e
f
f
e
c
t
i
v
e
l
y
 
i
n
 
E
n
g
l
i
s
h
 
o
n
 
m
a
i
l
i
n
g
 
l
i
s
t
s
/
I
R
C
"
,


 
 
 
 
 
 
"
C
o
n
t
r
i
b
u
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
5
-
2
0
 
h
o
u
r
s
 
p
e
r
 
w
e
e
k
 
d
u
r
i
n
g
 
t
h
e
 
p
r
o
g
r
a
m
"
,


 
 
 
 
 
 
"
P
r
o
o
f
 
o
f
 
s
t
u
d
e
n
t
 
e
l
i
g
i
b
i
l
i
t
y
 
a
n
d
 
a
g
e
 
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
 
(
1
8
+
)
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
P
r
o
j
e
c
t
 
L
i
s
t
i
n
g
 
&
 
M
e
n
t
o
r
 
S
i
g
n
-
u
p
"
,
 
d
a
t
e
s
:
 
"
O
c
t
o
b
e
r
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
S
t
u
d
e
n
t
 
A
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
 
W
i
n
d
o
w
"
,
 
d
a
t
e
s
:
 
"
N
o
v
e
m
b
e
r
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
M
e
n
t
o
r
s
h
i
p
 
&
 
S
e
l
e
c
t
i
o
n
 
P
e
r
i
o
d
"
,
 
d
a
t
e
s
:
 
"
D
e
c
e
m
b
e
r
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
A
c
t
i
v
e
 
D
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
 
P
e
r
i
o
d
"
,
 
d
a
t
e
s
:
 
"
J
a
n
u
a
r
y
 
–
 
F
e
b
r
u
a
r
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
F
i
n
a
l
 
E
v
a
l
u
a
t
i
o
n
 
&
 
C
e
r
t
i
f
i
c
a
t
i
o
n
"
,
 
d
a
t
e
s
:
 
"
M
a
r
c
h
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
B
r
o
w
s
e
 
t
h
e
 
S
O
K
 
p
r
o
j
e
c
t
s
 
o
n
 
t
h
e
 
K
D
E
 
w
i
k
i
 
o
r
 
s
o
k
.
k
d
e
.
o
r
g
"
,


 
 
 
 
 
 
"
J
o
i
n
 
t
h
e
 
K
D
E
 
d
e
v
e
l
o
p
e
r
 
m
a
i
l
i
n
g
 
l
i
s
t
s
 
a
n
d
 
I
R
C
 
c
h
a
n
n
e
l
s
"
,


 
 
 
 
 
 
"
D
i
s
c
u
s
s
 
p
o
t
e
n
t
i
a
l
 
p
r
o
j
e
c
t
 
i
d
e
a
s
 
w
i
t
h
 
d
e
s
i
g
n
a
t
e
d
 
m
e
n
t
o
r
s
"
,


 
 
 
 
 
 
"
P
r
e
p
a
r
e
 
a
 
d
e
t
a
i
l
e
d
 
p
r
o
j
e
c
t
 
p
l
a
n
 
a
n
d
 
t
i
m
e
l
i
n
e
 
f
o
r
 
y
o
u
r
 
w
o
r
k
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
y
o
u
r
 
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
 
K
D
E
 
S
o
K
 
p
o
r
t
a
l
"
,


 
 
 
 
 
 
"
S
t
a
r
t
 
m
a
k
i
n
g
 
s
m
a
l
l
 
c
o
n
t
r
i
b
u
t
i
o
n
s
 
t
o
 
p
r
o
v
e
 
y
o
u
r
 
s
k
i
l
l
s
 
b
e
f
o
r
e
 
s
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


 
 
 
 
]
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


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
8
,


 
 
 
 
n
a
m
e
:
 
"
H
y
p
e
r
l
e
d
g
e
r
 
M
e
n
t
o
r
s
h
i
p
"
,


 
 
 
 
s
h
o
r
t
:
 
"
H
y
p
e
r
l
e
d
g
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
L
i
n
u
x
 
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
'
s
 
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
 
p
r
o
j
e
c
t
 
o
f
f
e
r
s
 
m
e
n
t
o
r
s
h
i
p
s
 
f
o
r
 
c
o
n
t
r
i
b
u
t
o
r
s
 
t
o
 
H
y
p
e
r
l
e
d
g
e
r
 
F
a
b
r
i
c
,
 
B
e
s
u
,
 
A
r
i
e
s
,
 
a
n
d
 
o
t
h
e
r
 
e
n
t
e
r
p
r
i
s
e
 
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
 
f
r
a
m
e
w
o
r
k
s
.
"
,


 
 
 
 
f
u
l
l
D
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
y
p
e
r
l
e
d
g
e
r
 
M
e
n
t
o
r
s
h
i
p
 
i
s
 
p
a
r
t
 
o
f
 
L
F
X
 
M
e
n
t
o
r
s
h
i
p
 
f
o
c
u
s
e
d
 
s
p
e
c
i
f
i
c
a
l
l
y
 
o
n
 
H
y
p
e
r
l
e
d
g
e
r
 
p
r
o
j
e
c
t
s
.
 
M
e
n
t
e
e
s
 
c
o
n
t
r
i
b
u
t
e
 
t
o
 
e
n
t
e
r
p
r
i
s
e
 
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
 
p
r
o
j
e
c
t
s
 
l
i
k
e
 
F
a
b
r
i
c
,
 
B
e
s
u
,
 
A
r
i
e
s
,
 
a
n
d
 
F
i
r
e
f
l
y
 
w
h
i
l
e
 
e
a
r
n
i
n
g
 
a
 
s
t
i
p
e
n
d
 
a
n
d
 
g
a
i
n
i
n
g
 
d
e
e
p
 
e
x
p
e
r
t
i
s
e
 
i
n
 
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
 
l
e
d
g
e
r
 
t
e
c
h
n
o
l
o
g
y
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
S
t
u
d
e
n
t
s
 
a
n
d
 
d
e
v
e
l
o
p
e
r
s
 
1
8
+
 
w
i
t
h
 
s
o
m
e
 
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
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
S
t
u
d
e
n
t
s
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
$
3
,
0
0
0
 
–
 
$
6
,
6
0
0
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
H
i
g
h
"
,


 
 
 
 
w
i
n
d
o
w
:
 
"
3
 
c
o
h
o
r
t
s
/
y
e
a
r
 
v
i
a
 
L
F
X
 
M
e
n
t
o
r
s
h
i
p
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
O
n
g
o
i
n
g
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
w
i
k
i
.
h
y
p
e
r
l
e
d
g
e
r
.
o
r
g
/
d
i
s
p
l
a
y
/
I
N
T
E
R
N
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
m
e
n
t
o
r
s
h
i
p
.
l
f
x
.
l
i
n
u
x
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
.
o
r
g
"
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
a
y
-
7
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
a
y
-
5
0
 
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
"
,


 
 
 
 
t
a
g
s
:
 
[
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
 
"
h
y
p
e
r
l
e
d
g
e
r
"
,
 
"
g
o
"
,
 
"
e
n
t
e
r
p
r
i
s
e
"
,
 
"
l
f
x
"
]
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
:
 
[


 
 
 
 
 
 
"
S
t
u
d
e
n
t
s
 
a
n
d
 
d
e
v
e
l
o
p
e
r
s
 
1
8
+
 
w
i
t
h
 
s
o
m
e
 
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
"
,


 
 
 
 
 
 
"
I
n
t
e
r
e
s
t
 
i
n
 
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
 
l
e
d
g
e
r
 
t
e
c
h
n
o
l
o
g
i
e
s
"
,


 
 
 
 
 
 
"
C
+
+
,
 
G
o
,
 
J
a
v
a
,
 
o
r
 
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
 
k
n
o
w
l
e
d
g
e
 
d
e
p
e
n
d
i
n
g
 
o
n
 
t
h
e
 
p
r
o
j
e
c
t
"
,


 
 
 
 
 
 
"
S
t
r
o
n
g
 
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
i
n
g
 
o
f
 
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
 
o
r
 
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
 
c
o
n
c
e
p
t
s
"
,


 
 
 
 
 
 
"
C
o
m
m
i
t
m
e
n
t
 
t
o
 
s
p
e
c
i
f
i
c
 
c
o
h
o
r
t
 
d
a
t
e
s
 
(
S
p
r
i
n
g
,
 
S
u
m
m
e
r
,
 
o
r
 
F
a
l
l
)
"
,


 
 
 
 
 
 
"
A
b
i
l
i
t
y
 
t
o
 
p
r
o
v
i
d
e
 
a
 
r
e
s
u
m
e
 
a
n
d
 
p
r
o
f
e
s
s
i
o
n
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
 
i
f
 
r
e
q
u
e
s
t
e
d
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
P
r
o
j
e
c
t
 
P
r
o
p
o
s
a
l
 
S
u
b
m
i
s
s
i
o
n
 
(
M
e
n
t
o
r
s
)
"
,
 
d
a
t
e
s
:
 
"
2
 
m
o
 
p
r
i
o
r
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
M
e
n
t
e
e
 
A
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
 
W
i
n
d
o
w
"
,
 
d
a
t
e
s
:
 
"
1
 
m
o
 
p
r
i
o
r
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
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
 
&
 
S
e
l
e
c
t
i
o
n
 
R
o
u
n
d
"
,
 
d
a
t
e
s
:
 
"
2
 
w
e
e
k
s
 
p
r
i
o
r
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
1
2
-
W
e
e
k
 
M
e
n
t
o
r
s
h
i
p
 
E
x
e
c
u
t
i
o
n
"
,
 
d
a
t
e
s
:
 
"
C
o
h
o
r
t
 
S
t
a
r
t
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
M
i
d
-
t
e
r
m
 
&
 
F
i
n
a
l
 
E
v
a
l
u
a
t
i
o
n
s
"
,
 
d
a
t
e
s
:
 
"
W
e
e
k
 
6
 
&
 
1
2
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
P
r
e
s
e
n
t
a
t
i
o
n
 
&
 
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
"
,
 
d
a
t
e
s
:
 
"
F
i
n
a
l
e
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
C
r
e
a
t
e
 
a
n
 
a
c
c
o
u
n
t
 
o
n
 
t
h
e
 
L
F
X
 
M
e
n
t
o
r
s
h
i
p
 
p
l
a
t
f
o
r
m
"
,


 
 
 
 
 
 
"
B
r
o
w
s
e
 
o
p
p
o
r
t
u
n
i
t
i
e
s
 
t
a
g
g
e
d
 
w
i
t
h
 
'
H
y
p
e
r
l
e
d
g
e
r
'
 
o
r
 
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


 
 
 
 
 
 
"
R
e
s
e
a
r
c
h
 
s
p
e
c
i
f
i
c
 
p
r
o
j
e
c
t
s
 
(
F
a
b
r
i
c
,
 
B
e
s
u
,
 
S
a
w
t
o
o
t
h
,
 
e
t
c
.
)
"
,


 
 
 
 
 
 
"
T
a
i
l
o
r
 
y
o
u
r
 
r
e
s
u
m
e
 
t
o
 
h
i
g
h
l
i
g
h
t
 
r
e
l
e
v
a
n
t
 
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
 
w
o
r
k
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
a
 
d
e
t
a
i
l
e
d
 
s
t
a
t
e
m
e
n
t
 
o
f
 
i
n
t
e
r
e
s
t
 
f
o
r
 
u
p
 
t
o
 
3
 
p
r
o
j
e
c
t
s
"
,


 
 
 
 
 
 
"
P
r
e
p
a
r
e
 
f
o
r
 
t
e
c
h
n
i
c
a
l
 
i
n
t
e
r
v
i
e
w
s
 
a
n
d
 
c
o
d
i
n
g
 
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
 
w
i
t
h
 
m
e
n
t
o
r
s
"
,


 
 
 
 
]
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
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
9
,


 
 
 
 
n
a
m
e
:
 
"
G
N
O
M
E
 
I
n
t
e
r
n
s
h
i
p
"
,


 
 
 
 
s
h
o
r
t
:
 
"
G
N
O
M
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
I
n
t
e
r
n
s
h
i
p
 
p
r
o
g
r
a
m
 
f
o
r
 
G
N
O
M
E
 
p
r
o
j
e
c
t
 
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
 
a
n
d
 
U
X
.
"
,


 
 
 
 
f
u
l
l
D
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
N
O
M
E
 
i
n
t
e
r
n
s
h
i
p
s
 
f
o
c
u
s
 
o
n
 
i
m
p
r
o
v
i
n
g
 
t
h
e
 
L
i
n
u
x
 
d
e
s
k
t
o
p
 
e
c
o
s
y
s
t
e
m
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
O
p
e
n
 
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
 
a
n
d
 
n
e
w
c
o
m
e
r
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
O
p
e
n
 
t
o
 
A
l
l
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
$
6
,
0
0
0
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
H
i
g
h
"
,


 
 
 
 
w
i
n
d
o
w
:
 
"
M
a
y
 
-
 
A
u
g
u
s
t
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
A
n
n
u
a
l
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
w
w
w
.
g
n
o
m
e
.
o
r
g
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
w
w
w
.
g
n
o
m
e
.
o
r
g
"
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
i
n
d
i
g
o
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
i
n
d
i
g
o
-
5
0
 
b
o
r
d
e
r
-
i
n
d
i
g
o
-
2
0
0
"
,


 
 
 
 
t
a
g
s
:
 
[
"
g
n
o
m
e
"
,
 
"
l
i
n
u
x
"
,
 
"
d
e
s
k
t
o
p
"
]
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
:
 
[


 
 
 
 
 
 
"
O
p
e
n
 
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
 
a
n
d
 
n
e
w
c
o
m
e
r
s
 
t
o
 
o
p
e
n
 
s
o
u
r
c
e
 
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
"
,


 
 
 
 
 
 
"
P
r
o
f
i
c
i
e
n
c
y
 
i
n
 
C
,
 
R
u
s
t
,
 
o
r
 
P
y
t
h
o
n
 
(
p
r
i
m
a
r
y
 
G
N
O
M
E
 
l
a
n
g
u
a
g
e
s
)
"
,


 
 
 
 
 
 
"
F
a
m
i
l
i
a
r
i
t
y
 
w
i
t
h
 
t
h
e
 
G
T
K
 
t
o
o
l
k
i
t
 
a
n
d
 
G
N
O
M
E
 
d
e
s
k
t
o
p
 
e
n
v
i
r
o
n
m
e
n
t
"
,


 
 
 
 
 
 
"
V
a
l
i
d
 
r
e
s
i
d
e
n
c
e
 
a
n
d
 
p
e
r
m
i
s
s
i
o
n
 
t
o
 
w
o
r
k
 
(
i
f
 
a
p
p
l
i
c
a
b
l
e
 
f
o
r
 
s
t
i
p
e
n
d
)
"
,


 
 
 
 
 
 
"
C
o
m
m
i
t
m
e
n
t
 
t
o
 
c
o
n
t
r
i
b
u
t
e
 
2
0
-
3
0
 
h
o
u
r
s
 
p
e
r
 
w
e
e
k
 
d
u
r
i
n
g
 
t
h
e
 
s
u
m
m
e
r
"
,


 
 
 
 
 
 
"
W
i
l
l
i
n
g
n
e
s
s
 
t
o
 
p
a
r
t
i
c
i
p
a
t
e
 
i
n
 
d
a
i
l
y
 
s
t
a
n
d
-
u
p
s
 
a
n
d
 
b
l
o
g
 
u
p
d
a
t
e
s
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
P
r
o
j
e
c
t
 
A
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
 
(
M
e
n
t
o
r
s
)
"
,
 
d
a
t
e
s
:
 
"
J
a
n
u
a
r
y
 
–
 
F
e
b
r
u
a
r
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
M
e
n
t
e
e
 
A
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
 
P
e
r
i
o
d
"
,
 
d
a
t
e
s
:
 
"
M
a
r
c
h
 
–
 
A
p
r
i
l
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
C
o
m
m
u
n
i
t
y
 
B
o
n
d
i
n
g
 
&
 
S
e
t
u
p
"
,
 
d
a
t
e
s
:
 
"
M
a
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
A
c
t
i
v
e
 
I
n
t
e
r
n
s
h
i
p
 
D
u
r
a
t
i
o
n
"
,
 
d
a
t
e
s
:
 
"
J
u
n
e
 
–
 
A
u
g
u
s
t
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
F
i
n
a
l
 
P
r
o
j
e
c
t
 
D
e
m
o
s
 
&
 
G
U
A
D
E
C
 
P
r
e
s
e
n
t
a
t
i
o
n
"
,
 
d
a
t
e
s
:
 
"
S
e
p
t
e
m
b
e
r
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
B
r
o
w
s
e
 
p
r
o
j
e
c
t
s
 
o
n
 
G
N
O
M
E
'
s
 
G
i
t
L
a
b
 
a
n
d
 
i
d
e
n
t
i
f
y
 
a
r
e
a
s
 
o
f
 
i
n
t
e
r
e
s
t
"
,


 
 
 
 
 
 
"
J
o
i
n
 
t
h
e
 
G
N
O
M
E
 
M
a
t
r
i
x
/
I
R
C
 
c
h
a
n
n
e
l
s
 
t
o
 
i
n
t
r
o
d
u
c
e
 
y
o
u
r
s
e
l
f
"
,


 
 
 
 
 
 
"
M
a
k
e
 
a
 
s
m
a
l
l
 
'
G
o
o
d
 
F
i
r
s
t
 
I
s
s
u
e
'
 
c
o
n
t
r
i
b
u
t
i
o
n
 
t
o
 
a
 
G
N
O
M
E
 
s
u
b
-
p
r
o
j
e
c
t
"
,


 
 
 
 
 
 
"
D
r
a
f
t
 
a
 
p
r
o
j
e
c
t
 
p
r
o
p
o
s
a
l
 
u
s
i
n
g
 
t
h
e
 
o
f
f
i
c
i
a
l
 
G
N
O
M
E
 
t
e
m
p
l
a
t
e
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
y
o
u
r
 
f
o
r
m
a
l
 
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
 
t
o
 
t
h
e
 
G
N
O
M
E
 
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
"
,


 
 
 
 
 
 
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
 
w
i
t
h
 
p
o
t
e
n
t
i
a
l
 
m
e
n
t
o
r
s
 
t
o
 
d
i
s
c
u
s
s
 
t
e
c
h
n
i
c
a
l
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n
"
,


 
 
 
 
]
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
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
0
,


 
 
 
 
n
a
m
e
:
 
"
X
.
O
r
g
 
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
 
M
e
n
t
o
r
s
h
i
p
"
,


 
 
 
 
s
h
o
r
t
:
 
"
X
.
O
r
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
M
e
n
t
o
r
s
h
i
p
 
f
o
r
 
g
r
a
p
h
i
c
s
 
s
t
a
c
k
 
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
 
a
n
d
 
i
n
f
r
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
.
"
,


 
 
 
 
f
u
l
l
D
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
c
u
s
e
s
 
o
n
 
l
o
w
e
r
-
l
e
v
e
l
 
g
r
a
p
h
i
c
s
 
d
r
i
v
e
r
s
 
a
n
d
 
c
o
r
e
 
L
i
n
u
x
 
g
r
a
p
h
i
c
s
 
i
n
f
r
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
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
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
 
d
e
v
e
l
o
p
e
r
s
/
s
t
u
d
e
n
t
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
S
t
u
d
e
n
t
s
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
$
5
,
0
0
0
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
H
i
g
h
"
,


 
 
 
 
w
i
n
d
o
w
:
 
"
F
l
e
x
i
b
l
e
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
O
n
g
o
i
n
g
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
w
w
w
.
x
.
o
r
g
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
w
w
w
.
x
.
o
r
g
"
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
l
a
t
e
-
7
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
l
a
t
e
-
5
0
 
b
o
r
d
e
r
-
s
l
a
t
e
-
2
0
0
"
,


 
 
 
 
t
a
g
s
:
 
[
"
g
r
a
p
h
i
c
s
"
,
 
"
l
i
n
u
x
"
,
 
"
d
r
i
v
e
r
s
"
]
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
:
 
[


 
 
 
 
 
 
"
S
t
r
o
n
g
 
p
r
o
f
i
c
i
e
n
c
y
 
i
n
 
C
/
C
+
+
 
a
n
d
 
l
o
w
-
l
e
v
e
l
 
s
y
s
t
e
m
 
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
"
,


 
 
 
 
 
 
"
U
n
d
e
r
s
t
a
n
d
i
n
g
 
o
f
 
L
i
n
u
x
 
k
e
r
n
e
l
 
a
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
s
 
a
n
d
 
g
r
a
p
h
i
c
s
 
s
t
a
c
k
s
"
,


 
 
 
 
 
 
"
P
r
i
o
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
 
w
i
t
h
 
X
1
1
,
 
W
a
y
l
a
n
d
,
 
M
e
s
a
,
 
o
r
 
D
R
M
 
d
r
i
v
e
r
s
"
,


 
 
 
 
 
 
"
A
b
i
l
i
t
y
 
t
o
 
w
o
r
k
 
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
 
w
i
t
h
 
m
i
n
i
m
a
l
 
d
a
i
l
y
 
s
u
p
e
r
v
i
s
i
o
n
"
,


 
 
 
 
 
 
"
E
n
r
o
l
l
m
e
n
t
 
i
n
 
a
 
t
e
c
h
n
i
c
a
l
 
d
e
g
r
e
e
 
p
r
o
g
r
a
m
 
(
C
S
,
 
E
E
,
 
o
r
 
r
e
l
a
t
e
d
)
"
,


 
 
 
 
 
 
"
A
v
a
i
l
a
b
i
l
i
t
y
 
f
o
r
 
1
2
 
w
e
e
k
s
 
o
f
 
f
u
l
l
-
t
i
m
e
 
f
o
c
u
s
e
d
 
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
 
w
o
r
k
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
I
n
i
t
i
a
l
 
P
r
o
j
e
c
t
 
P
i
t
c
h
 
&
 
F
e
e
d
b
a
c
k
"
,
 
d
a
t
e
s
:
 
"
Y
e
a
r
-
r
o
u
n
d
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
F
o
r
m
a
l
 
P
r
o
p
o
s
a
l
 
S
u
b
m
i
s
s
i
o
n
"
,
 
d
a
t
e
s
:
 
"
4
 
w
e
e
k
s
 
p
r
i
o
r
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
E
v
a
l
u
a
t
i
o
n
 
&
 
F
i
n
a
n
c
i
a
l
 
S
e
t
u
p
"
,
 
d
a
t
e
s
:
 
"
2
 
w
e
e
k
s
 
p
r
i
o
r
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
1
2
-
W
e
e
k
 
I
m
p
l
e
m
e
n
t
a
t
i
o
n
 
W
i
n
d
o
w
"
,
 
d
a
t
e
s
:
 
"
V
a
r
i
a
b
l
e
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
P
e
e
r
 
C
o
d
e
 
R
e
v
i
e
w
 
&
 
U
p
s
t
r
e
a
m
i
n
g
"
,
 
d
a
t
e
s
:
 
"
O
n
g
o
i
n
g
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
F
i
n
a
l
 
R
e
p
o
r
t
 
&
 
P
a
y
m
e
n
t
 
D
i
s
b
u
r
s
e
m
e
n
t
"
,
 
d
a
t
e
s
:
 
"
C
o
n
c
l
u
s
i
o
n
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
I
d
e
n
t
i
f
y
 
a
 
c
r
i
t
i
c
a
l
 
i
s
s
u
e
 
o
r
 
f
e
a
t
u
r
e
 
i
n
 
t
h
e
 
L
i
n
u
x
 
g
r
a
p
h
i
c
s
 
s
t
a
c
k
"
,


 
 
 
 
 
 
"
C
o
n
t
a
c
t
 
t
h
e
 
X
.
O
r
g
 
d
e
v
e
l
o
p
e
r
 
m
a
i
l
i
n
g
 
l
i
s
t
 
w
i
t
h
 
y
o
u
r
 
i
d
e
a
"
,


 
 
 
 
 
 
"
F
i
n
d
 
a
n
 
X
.
O
r
g
 
d
e
v
e
l
o
p
e
r
 
w
i
l
l
i
n
g
 
t
o
 
a
c
t
 
a
s
 
y
o
u
r
 
p
r
i
m
a
r
y
 
m
e
n
t
o
r
"
,


 
 
 
 
 
 
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
r
e
h
e
n
s
i
v
e
 
p
r
o
j
e
c
t
 
r
o
a
d
m
a
p
 
w
i
t
h
 
w
e
e
k
l
y
 
m
i
l
e
s
t
o
n
e
s
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
y
o
u
r
 
E
V
o
C
 
p
r
o
p
o
s
a
l
 
t
o
 
t
h
e
 
X
.
O
r
g
 
B
o
a
r
d
 
o
f
 
D
i
r
e
c
t
o
r
s
"
,


 
 
 
 
 
 
"
S
e
t
 
u
p
 
y
o
u
r
 
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
 
e
n
v
i
r
o
n
m
e
n
t
 
a
n
d
 
u
p
s
t
r
e
a
m
 
t
r
a
c
k
i
n
g
 
r
e
p
o
"
,


 
 
 
 
]
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
1
,


 
 
 
 
n
a
m
e
:
 
"
F
r
e
e
B
S
D
 
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
 
I
n
t
e
r
n
s
h
i
p
s
"
,


 
 
 
 
s
h
o
r
t
:
 
"
F
r
e
e
B
S
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
o
r
k
i
n
g
 
o
n
 
o
n
e
 
o
f
 
t
h
e
 
o
l
d
e
s
t
 
a
n
d
 
m
o
s
t
 
m
a
t
u
r
e
 
o
p
e
n
 
s
o
u
r
c
e
 
O
S
 
p
r
o
j
e
c
t
s
.
"
,


 
 
 
 
f
u
l
l
D
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
n
s
h
i
p
s
 
f
o
c
u
s
e
d
 
o
n
 
t
h
e
 
F
r
e
e
B
S
D
 
k
e
r
n
e
l
 
a
n
d
 
d
o
c
u
m
e
n
t
a
t
i
o
n
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
C
S
/
E
E
 
s
t
u
d
e
n
t
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
S
t
u
d
e
n
t
s
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
$
5
,
0
0
0
 
-
 
$
6
,
0
0
0
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
H
i
g
h
"
,


 
 
 
 
w
i
n
d
o
w
:
 
"
S
u
m
m
e
r
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
A
n
n
u
a
l
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
f
r
e
e
b
s
d
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
.
o
r
g
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
f
r
e
e
b
s
d
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
.
o
r
g
"
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
r
e
d
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
r
e
d
-
5
0
 
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
"
,


 
 
 
 
t
a
g
s
:
 
[
"
o
s
"
,
 
"
k
e
r
n
e
l
"
,
 
"
u
n
i
x
"
]
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
:
 
[


 
 
 
 
 
 
"
E
n
r
o
l
l
e
d
 
s
t
u
d
e
n
t
 
i
n
 
C
o
m
p
u
t
e
r
 
S
c
i
e
n
c
e
,
 
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
,
 
o
r
 
I
T
"
,


 
 
 
 
 
 
"
S
t
r
o
n
g
 
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
i
n
g
 
o
f
 
O
p
e
r
a
t
i
n
g
 
S
y
s
t
e
m
s
 
t
h
e
o
r
y
 
a
n
d
 
C
"
,


 
 
 
 
 
 
"
C
o
m
f
o
r
t
 
w
o
r
k
i
n
g
 
w
i
t
h
 
U
n
i
x
-
l
i
k
e
 
c
o
m
m
a
n
d
-
l
i
n
e
 
e
n
v
i
r
o
n
m
e
n
t
s
"
,


 
 
 
 
 
 
"
B
a
s
i
c
 
k
n
o
w
l
e
d
g
e
 
o
f
 
k
e
r
n
e
l
 
i
n
t
e
r
n
a
l
s
,
 
n
e
t
w
o
r
k
i
n
g
,
 
o
r
 
f
i
l
e
 
s
y
s
t
e
m
s
"
,


 
 
 
 
 
 
"
L
e
g
a
l
 
e
l
i
g
i
b
i
l
i
t
y
 
t
o
 
r
e
c
e
i
v
e
 
s
t
i
p
e
n
d
s
 
(
U
S
 
o
r
 
i
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
 
s
t
a
t
u
s
)
"
,


 
 
 
 
 
 
"
A
b
i
l
i
t
y
 
t
o
 
w
o
r
k
 
r
e
m
o
t
e
l
y
 
a
n
d
 
c
o
o
r
d
i
n
a
t
e
 
a
c
c
o
r
d
i
n
g
 
t
o
 
U
T
C
 
t
i
m
e
z
o
n
e
s
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
P
r
o
j
e
c
t
 
I
d
e
a
 
P
o
s
t
i
n
g
"
,
 
d
a
t
e
s
:
 
"
F
e
b
r
u
a
r
y
 
–
 
M
a
r
c
h
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
A
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
 
&
 
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
o
u
n
d
"
,
 
d
a
t
e
s
:
 
"
A
p
r
i
l
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
I
n
t
e
r
n
s
h
i
p
 
S
t
a
r
t
 
&
 
T
o
o
l
s
 
T
r
a
i
n
i
n
g
"
,
 
d
a
t
e
s
:
 
"
M
a
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
S
u
m
m
e
r
 
R
e
s
e
a
r
c
h
 
&
 
D
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
"
,
 
d
a
t
e
s
:
 
"
J
u
n
e
 
–
 
A
u
g
u
s
t
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
F
i
n
a
l
 
D
o
c
u
m
e
n
t
a
t
i
o
n
 
&
 
P
o
r
t
i
n
g
"
,
 
d
a
t
e
s
:
 
"
S
e
p
t
e
m
b
e
r
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
R
e
v
i
e
w
 
t
h
e
 
F
r
e
e
B
S
D
 
P
r
o
j
e
c
t
 
I
d
e
a
s
 
p
a
g
e
 
a
t
 
f
r
e
e
b
s
d
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
.
o
r
g
"
,


 
 
 
 
 
 
"
R
e
a
c
h
 
o
u
t
 
t
o
 
t
h
e
 
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
 
w
i
t
h
 
y
o
u
r
 
r
e
s
u
m
e
 
a
n
d
 
i
n
t
e
r
e
s
t
s
"
,


 
 
 
 
 
 
"
P
a
r
t
i
c
i
p
a
t
e
 
i
n
 
t
e
c
h
n
i
c
a
l
 
i
n
t
e
r
v
i
e
w
s
 
f
o
c
u
s
i
n
g
 
o
n
 
O
S
 
c
o
n
c
e
p
t
s
"
,


 
 
 
 
 
 
"
D
r
a
f
t
 
a
 
s
p
e
c
i
f
i
c
 
s
c
o
p
e
 
o
f
 
w
o
r
k
 
f
o
r
 
t
h
e
 
s
u
m
m
e
r
 
i
n
t
e
r
n
s
h
i
p
"
,


 
 
 
 
 
 
"
C
o
m
p
l
e
t
e
 
a
n
y
 
p
r
e
-
i
n
t
e
r
n
s
h
i
p
 
s
c
r
e
e
n
i
n
g
 
t
a
s
k
s
 
(
c
o
m
p
i
l
i
n
g
 
k
e
r
n
e
l
,
 
e
t
c
.
)
"
,


 
 
 
 
 
 
"
F
o
r
m
a
l
i
z
e
 
t
h
e
 
i
n
t
e
r
n
s
h
i
p
 
a
g
r
e
e
m
e
n
t
 
a
n
d
 
s
t
a
r
t
 
y
o
u
r
 
p
r
o
j
e
c
t
"
,


 
 
 
 
]
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
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
2
,


 
 
 
 
n
a
m
e
:
 
"
O
p
e
n
 
M
a
i
n
f
r
a
m
e
 
P
r
o
j
e
c
t
"
,


 
 
 
 
s
h
o
r
t
:
 
"
O
M
P
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
r
i
n
g
i
n
g
 
n
e
w
c
o
m
e
r
s
 
t
o
 
m
a
i
n
f
r
a
m
e
 
a
n
d
 
e
n
t
e
r
p
r
i
s
e
 
c
o
m
p
u
t
i
n
g
.
"
,


 
 
 
 
f
u
l
l
D
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
e
n
t
o
r
s
h
i
p
 
f
o
c
u
s
e
d
 
o
n
 
e
n
t
e
r
p
r
i
s
e
 
L
i
n
u
x
,
 
Z
o
w
e
,
 
a
n
d
 
m
a
i
n
f
r
a
m
e
 
p
r
o
j
e
c
t
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
E
n
r
o
l
l
e
d
 
s
t
u
d
e
n
t
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
S
t
u
d
e
n
t
s
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
$
3
,
0
0
0
 
–
 
$
6
,
6
0
0
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
H
i
g
h
"
,


 
 
 
 
w
i
n
d
o
w
:
 
"
3
 
c
o
h
o
r
t
s
/
y
e
a
r
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
O
n
g
o
i
n
g
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
w
w
w
.
o
p
e
n
m
a
i
n
f
r
a
m
e
p
r
o
j
e
c
t
.
o
r
g
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
m
e
n
t
o
r
s
h
i
p
.
l
f
x
.
l
i
n
u
x
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
.
o
r
g
"
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
l
a
t
e
-
8
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
l
a
t
e
-
5
0
 
b
o
r
d
e
r
-
s
l
a
t
e
-
2
0
0
"
,


 
 
 
 
t
a
g
s
:
 
[
"
m
a
i
n
f
r
a
m
e
"
,
 
"
e
n
t
e
r
p
r
i
s
e
"
,
 
"
c
o
b
o
l
"
]
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
:
 
[


 
 
 
 
 
 
"
S
t
u
d
e
n
t
 
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
 
o
r
 
r
e
c
e
n
t
 
g
r
a
d
u
a
t
i
o
n
 
w
i
t
h
i
n
 
t
h
e
 
l
a
s
t
 
y
e
a
r
"
,


 
 
 
 
 
 
"
I
n
t
e
r
e
s
t
 
i
n
 
e
n
t
e
r
p
r
i
s
e
 
c
o
m
p
u
t
i
n
g
,
 
C
O
B
O
L
,
 
Z
o
w
e
,
 
o
r
 
L
i
n
u
x
 
o
n
 
Z
"
,


 
 
 
 
 
 
"
P
r
o
f
i
c
i
e
n
c
y
 
i
n
 
P
y
t
h
o
n
,
 
J
a
v
a
,
 
o
r
 
C
 
d
e
p
e
n
d
i
n
g
 
o
n
 
p
r
o
j
e
c
t
 
c
h
o
i
c
e
"
,


 
 
 
 
 
 
"
A
b
i
l
i
t
y
 
t
o
 
w
o
r
k
 
i
n
 
a
 
d
i
v
e
r
s
e
,
 
g
l
o
b
a
l
 
t
e
a
m
 
a
c
r
o
s
s
 
t
i
m
e
z
o
n
e
s
"
,


 
 
 
 
 
 
"
C
o
m
m
i
t
m
e
n
t
 
t
o
 
t
h
e
 
1
2
-
w
e
e
k
 
p
r
o
g
r
a
m
 
d
u
r
a
t
i
o
n
 
(
S
p
r
i
n
g
 
o
r
 
S
u
m
m
e
r
)
"
,


 
 
 
 
 
 
"
C
o
m
p
l
e
t
i
o
n
 
o
f
 
t
h
e
 
'
M
a
i
n
f
r
a
m
e
 
1
0
1
'
 
b
a
s
i
c
s
 
o
r
 
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
 
t
r
a
i
n
i
n
g
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
L
F
X
 
M
e
n
t
o
r
s
h
i
p
 
C
y
c
l
e
 
O
p
e
n
i
n
g
"
,
 
d
a
t
e
s
:
 
"
Q
u
a
r
t
e
r
l
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
P
r
o
j
e
c
t
 
C
h
o
i
c
e
 
&
 
A
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
"
,
 
d
a
t
e
s
:
 
"
M
o
n
t
h
 
1
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
A
d
m
i
s
s
i
o
n
s
 
&
 
O
n
b
o
a
r
d
i
n
g
"
,
 
d
a
t
e
s
:
 
"
M
o
n
t
h
 
2
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
A
c
t
i
v
e
 
M
a
i
n
f
r
a
m
e
 
M
e
n
t
o
r
s
h
i
p
"
,
 
d
a
t
e
s
:
 
"
M
o
n
t
h
 
3
 
–
 
5
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
F
i
n
a
l
 
E
v
a
l
u
a
t
i
o
n
 
&
 
D
e
m
o
 
D
a
y
"
,
 
d
a
t
e
s
:
 
"
M
o
n
t
h
 
6
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
C
r
e
a
t
e
 
a
 
p
r
o
f
i
l
e
 
o
n
 
t
h
e
 
L
F
X
 
M
e
n
t
o
r
s
h
i
p
 
p
l
a
t
f
o
r
m
"
,


 
 
 
 
 
 
"
F
i
l
t
e
r
 
p
r
o
j
e
c
t
s
 
u
s
i
n
g
 
t
h
e
 
'
O
p
e
n
 
M
a
i
n
f
r
a
m
e
 
P
r
o
j
e
c
t
'
 
t
a
g
"
,


 
 
 
 
 
 
"
C
h
o
o
s
e
 
1
-
3
 
s
p
e
c
i
f
i
c
 
p
r
o
j
e
c
t
s
 
(
Z
o
w
e
,
 
C
O
B
O
L
 
C
h
e
c
k
,
 
e
t
c
.
)
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
a
 
r
e
s
u
m
e
 
a
n
d
 
s
t
a
t
e
m
e
n
t
 
o
n
 
e
n
t
e
r
p
r
i
s
e
 
c
o
m
p
u
t
i
n
g
 
i
n
t
e
r
e
s
t
"
,


 
 
 
 
 
 
"
A
t
t
e
n
d
 
O
p
e
n
 
M
a
i
n
f
r
a
m
e
 
c
o
m
m
u
n
i
t
y
 
m
e
e
t
i
n
g
s
 
f
o
r
 
v
i
s
i
b
i
l
i
t
y
"
,


 
 
 
 
 
 
"
C
o
m
p
l
e
t
e
 
t
e
c
h
n
i
c
a
l
 
t
e
s
t
s
 
o
r
 
s
c
r
e
e
n
i
n
g
 
i
n
t
e
r
v
i
e
w
s
 
w
i
t
h
 
O
M
P
 
m
e
n
t
o
r
s
"
,


 
 
 
 
]
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
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
3
,


 
 
 
 
n
a
m
e
:
 
"
J
u
l
i
a
 
S
u
m
m
e
r
 
o
f
 
C
o
d
e
"
,


 
 
 
 
s
h
o
r
t
:
 
"
J
S
o
C
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
e
n
t
o
r
s
h
i
p
 
f
o
r
 
t
h
e
 
J
u
l
i
a
 
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
 
l
a
n
g
u
a
g
e
 
e
c
o
s
y
s
t
e
m
.
"
,


 
 
 
 
f
u
l
l
D
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
i
n
g
 
o
n
 
t
h
e
 
J
u
l
i
a
 
l
a
n
g
u
a
g
e
 
a
n
d
 
r
e
l
a
t
e
d
 
s
c
i
e
n
t
i
f
i
c
 
l
i
b
r
a
r
i
e
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
S
t
u
d
e
n
t
s
 
a
n
d
 
r
e
s
e
a
r
c
h
e
r
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
S
t
u
d
e
n
t
s
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
$
1
,
5
0
0
 
-
 
$
3
,
0
0
0
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
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


 
 
 
 
w
i
n
d
o
w
:
 
"
S
u
m
m
e
r
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
A
n
n
u
a
l
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
j
u
l
i
a
l
a
n
g
.
o
r
g
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
j
u
l
i
a
l
a
n
g
.
o
r
g
"
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
p
u
r
p
l
e
-
5
0
 
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
"
,


 
 
 
 
t
a
g
s
:
 
[
"
j
u
l
i
a
"
,
 
"
r
e
s
e
a
r
c
h
"
,
 
"
m
a
t
h
"
]
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
:
 
[


 
 
 
 
 
 
"
P
r
o
f
i
c
i
e
n
c
y
 
i
n
 
t
h
e
 
J
u
l
i
a
 
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
 
l
a
n
g
u
a
g
e
"
,


 
 
 
 
 
 
"
E
n
r
o
l
l
m
e
n
t
 
i
n
 
a
 
u
n
i
v
e
r
s
i
t
y
 
o
r
 
r
e
s
e
a
r
c
h
 
i
n
s
t
i
t
u
t
i
o
n
 
p
r
o
g
r
a
m
"
,


 
 
 
 
 
 
"
B
a
c
k
g
r
o
u
n
d
 
i
n
 
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
s
,
 
p
h
y
s
i
c
s
,
 
o
r
 
s
c
i
e
n
t
i
f
i
c
 
c
o
m
p
u
t
a
t
i
o
n
"
,


 
 
 
 
 
 
"
F
a
m
i
l
i
a
r
i
t
y
 
w
i
t
h
 
G
i
t
,
 
G
i
t
H
u
b
,
 
a
n
d
 
J
u
l
i
a
'
s
 
p
a
c
k
a
g
e
 
m
a
n
a
g
e
r
 
(
P
k
g
)
"
,


 
 
 
 
 
 
"
C
l
e
a
r
 
p
r
o
j
e
c
t
 
g
o
a
l
 
(
a
d
d
i
n
g
 
f
e
a
t
u
r
e
s
 
o
r
 
a
 
n
e
w
 
l
i
b
r
a
r
y
)
"
,


 
 
 
 
 
 
"
A
b
i
l
i
t
y
 
t
o
 
b
l
o
g
 
a
b
o
u
t
 
p
r
o
g
r
e
s
s
 
a
n
d
 
p
a
r
t
i
c
i
p
a
t
e
 
i
n
 
f
o
r
u
m
s
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
S
c
i
e
n
t
i
f
i
c
 
O
r
g
a
n
i
z
a
t
i
o
n
 
S
i
g
n
-
u
p
"
,
 
d
a
t
e
s
:
 
"
J
a
n
u
a
r
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
S
t
u
d
e
n
t
 
P
r
o
p
o
s
a
l
 
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
a
t
e
s
:
 
"
F
e
b
r
u
a
r
y
 
–
 
M
a
r
c
h
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
A
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
 
R
e
v
i
e
w
 
&
 
I
n
t
e
r
v
i
e
w
s
"
,
 
d
a
t
e
s
:
 
"
A
p
r
i
l
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
I
n
t
e
n
s
i
v
e
 
J
u
l
i
a
 
D
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
"
,
 
d
a
t
e
s
:
 
"
M
a
y
 
–
 
A
u
g
u
s
t
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
P
r
o
j
e
c
t
 
M
e
r
g
i
n
g
 
&
 
D
o
c
u
m
e
n
t
a
t
i
o
n
"
,
 
d
a
t
e
s
:
 
"
S
e
p
t
e
m
b
e
r
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
B
r
o
w
s
e
 
o
f
f
i
c
i
a
l
 
J
u
l
i
a
 
p
r
o
j
e
c
t
 
i
d
e
a
s
 
o
r
 
p
r
o
p
o
s
e
 
y
o
u
r
 
o
w
n
"
,


 
 
 
 
 
 
"
E
n
g
a
g
e
 
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
m
u
n
i
t
y
 
o
n
 
J
u
l
i
a
'
s
 
D
i
s
c
o
u
r
s
e
 
o
r
 
S
l
a
c
k
"
,


 
 
 
 
 
 
"
F
i
n
d
 
a
 
J
u
l
i
a
 
p
a
c
k
a
g
e
 
m
a
i
n
t
a
i
n
e
r
 
t
o
 
s
u
p
p
o
r
t
 
y
o
u
r
 
p
r
o
p
o
s
a
l
"
,


 
 
 
 
 
 
"
W
r
i
t
e
 
a
 
d
e
t
a
i
l
e
d
 
p
r
o
p
o
s
a
l
 
i
n
c
l
u
d
i
n
g
 
J
u
l
i
a
 
c
o
d
e
 
s
a
m
p
l
e
s
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
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
 
N
u
m
F
O
C
U
S
 
o
r
 
G
S
o
C
 
p
o
r
t
a
l
"
,


 
 
 
 
 
 
"
F
i
x
 
b
u
g
s
 
i
n
 
t
h
e
 
c
o
r
e
 
J
u
l
i
a
 
r
e
p
o
 
t
o
 
d
e
m
o
n
s
t
r
a
t
e
 
p
r
o
f
i
c
i
e
n
c
y
"
,


 
 
 
 
]
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
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
4
,


 
 
 
 
n
a
m
e
:
 
"
P
y
t
h
o
n
 
S
u
m
m
e
r
 
o
f
 
C
o
d
e
"
,


 
 
 
 
s
h
o
r
t
:
 
"
P
S
o
C
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
v
e
l
o
p
i
n
g
 
c
o
r
e
 
P
y
t
h
o
n
 
a
n
d
 
s
c
i
e
n
t
i
f
i
c
 
l
i
b
r
a
r
i
e
s
.
"
,


 
 
 
 
f
u
l
l
D
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
i
n
g
 
o
n
 
p
r
o
j
e
c
t
s
 
w
i
t
h
i
n
 
t
h
e
 
P
y
t
h
o
n
 
S
o
f
t
w
a
r
e
 
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
 
u
m
b
r
e
l
l
a
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
A
n
y
o
n
e
 
g
l
o
b
a
l
l
y
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
O
p
e
n
 
t
o
 
A
l
l
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
$
1
,
5
0
0
 
-
 
$
6
,
0
0
0
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
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


 
 
 
 
w
i
n
d
o
w
:
 
"
v
i
a
 
G
S
o
C
 
o
r
 
P
S
F
 
d
i
r
e
c
t
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
A
n
n
u
a
l
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
w
w
w
.
p
y
t
h
o
n
.
o
r
g
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
w
w
w
.
p
y
t
h
o
n
.
o
r
g
"
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
9
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
"
,


 
 
 
 
t
a
g
s
:
 
[
"
p
y
t
h
o
n
"
,
 
"
s
o
f
t
w
a
r
e
"
,
 
"
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
"
]
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
:
 
[


 
 
 
 
 
 
"
A
d
v
a
n
c
e
d
 
p
r
o
f
i
c
i
e
n
c
y
 
i
n
 
P
y
t
h
o
n
 
(
3
.
x
)
 
a
n
d
 
P
E
P
 
s
t
a
n
d
a
r
d
s
"
,


 
 
 
 
 
 
"
K
n
o
w
l
e
d
g
e
 
o
f
 
C
 
(
i
f
 
a
p
p
l
y
i
n
g
 
f
o
r
 
C
P
y
t
h
o
n
 
c
o
r
e
)
 
o
r
 
s
p
e
c
.
 
l
i
b
s
"
,


 
 
 
 
 
 
"
S
t
r
o
n
g
 
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
i
n
g
 
o
f
 
o
p
e
n
 
s
o
u
r
c
e
 
l
i
c
e
n
s
i
n
g
 
a
n
d
 
G
i
t
"
,


 
 
 
 
 
 
"
P
a
r
t
i
c
i
p
a
t
i
o
n
 
i
n
 
P
y
t
h
o
n
 
c
o
m
m
u
n
i
t
y
 
f
o
r
u
m
s
 
o
r
 
l
o
c
a
l
 
u
s
e
r
 
g
r
o
u
p
s
"
,


 
 
 
 
 
 
"
A
v
a
i
l
a
b
i
l
i
t
y
 
o
f
 
3
0
+
 
h
o
u
r
s
 
p
e
r
 
w
e
e
k
 
f
o
r
 
f
u
l
l
-
t
i
m
e
 
t
r
a
c
k
s
"
,


 
 
 
 
 
 
"
P
r
o
v
e
n
 
t
r
a
c
k
 
r
e
c
o
r
d
 
o
f
 
2
-
3
 
p
r
e
v
i
o
u
s
 
o
p
e
n
 
s
o
u
r
c
e
 
P
R
s
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
P
r
o
j
e
c
t
 
P
r
o
p
o
s
a
l
 
(
S
u
b
-
o
r
g
s
)
"
,
 
d
a
t
e
s
:
 
"
J
a
n
u
a
r
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
D
e
v
e
l
o
p
e
r
 
A
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
 
P
e
r
i
o
d
"
,
 
d
a
t
e
s
:
 
"
M
a
r
c
h
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
C
o
m
m
u
n
i
t
y
 
B
o
n
d
i
n
g
 
&
 
P
r
e
p
"
,
 
d
a
t
e
s
:
 
"
A
p
r
i
l
 
–
 
M
a
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
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
d
i
n
g
 
M
i
l
e
s
t
o
n
e
"
,
 
d
a
t
e
s
:
 
"
J
u
n
e
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
F
i
n
a
l
 
R
e
l
e
a
s
e
 
&
 
R
e
v
i
e
w
"
,
 
d
a
t
e
s
:
 
"
A
u
g
u
s
t
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
I
d
e
n
t
i
f
y
 
a
 
s
u
b
-
o
r
g
 
u
n
d
e
r
 
t
h
e
 
P
y
t
h
o
n
 
S
o
f
t
w
a
r
e
 
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
 
(
P
S
F
)
"
,


 
 
 
 
 
 
"
J
o
i
n
 
t
h
e
 
m
a
i
l
i
n
g
 
l
i
s
t
 
o
r
 
c
h
a
t
 
f
o
r
 
y
o
u
r
 
c
h
o
s
e
n
 
l
i
b
r
a
r
y
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
a
 
h
i
g
h
-
q
u
a
l
i
t
y
 
P
R
 
t
o
 
d
e
m
o
n
s
t
r
a
t
e
 
t
e
c
h
n
i
c
a
l
 
c
o
m
p
e
t
e
n
c
e
"
,


 
 
 
 
 
 
"
D
r
a
f
t
 
a
 
p
r
o
p
o
s
a
l
 
f
o
l
l
o
w
i
n
g
 
P
S
F
 
s
t
u
d
e
n
t
 
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
 
g
u
i
d
e
l
i
n
e
s
"
,


 
 
 
 
 
 
"
R
e
c
o
r
d
 
a
 
s
h
o
r
t
 
v
i
d
e
o
 
i
n
t
r
o
d
u
c
t
i
o
n
 
i
f
 
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
 
t
h
e
 
s
u
b
-
o
r
g
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
f
i
n
a
l
 
p
r
o
p
o
s
a
l
 
v
i
a
 
t
h
e
 
G
o
o
g
l
e
 
S
u
m
m
e
r
 
o
f
 
C
o
d
e
 
p
o
r
t
a
l
"
,


 
 
 
 
]
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
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
5
,


 
 
 
 
n
a
m
e
:
 
"
R
 
P
r
o
j
e
c
t
 
G
S
o
C
"
,


 
 
 
 
s
h
o
r
t
:
 
"
R
-
G
S
o
C
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
v
e
l
o
p
i
n
g
 
f
o
r
 
t
h
e
 
R
 
e
c
o
s
y
s
t
e
m
 
a
n
d
 
s
t
a
t
i
s
t
i
c
a
l
 
t
o
o
l
s
.
"
,


 
 
 
 
f
u
l
l
D
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
e
n
t
o
r
s
h
i
p
 
f
o
r
 
R
 
p
a
c
k
a
g
e
s
 
a
n
d
 
c
o
r
e
 
s
t
a
t
i
s
t
i
c
a
l
 
l
i
b
r
a
r
i
e
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
S
t
u
d
e
n
t
s
 
a
n
d
 
g
r
a
d
u
a
t
e
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
S
t
u
d
e
n
t
s
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
$
1
,
5
0
0
 
-
 
$
6
,
0
0
0
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
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


 
 
 
 
w
i
n
d
o
w
:
 
"
S
u
m
m
e
r
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
A
n
n
u
a
l
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
w
w
w
.
r
-
p
r
o
j
e
c
t
.
o
r
g
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
w
w
w
.
r
-
p
r
o
j
e
c
t
.
o
r
g
"
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
8
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
"
,


 
 
 
 
t
a
g
s
:
 
[
"
s
t
a
t
s
"
,
 
"
R
"
,
 
"
d
a
t
a
-
s
c
i
e
n
c
e
"
]
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
:
 
[


 
 
 
 
 
 
"
P
r
o
f
i
c
i
e
n
c
y
 
i
n
 
R
 
a
n
d
 
R
S
t
u
d
i
o
 
f
o
r
 
s
t
a
t
i
s
t
i
c
a
l
 
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
"
,


 
 
 
 
 
 
"
U
n
d
e
r
s
t
a
n
d
i
n
g
 
o
f
 
R
 
p
a
c
k
a
g
e
 
s
t
r
u
c
t
u
r
e
 
(
D
E
S
C
R
I
P
T
I
O
N
,
 
N
A
M
E
S
P
A
C
E
)
"
,


 
 
 
 
 
 
"
B
a
c
k
g
r
o
u
n
d
 
i
n
 
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
 
d
a
t
a
 
s
c
i
e
n
c
e
,
 
o
r
 
b
i
o
i
n
f
o
r
m
a
t
i
c
s
"
,


 
 
 
 
 
 
"
A
b
i
l
i
t
y
 
t
o
 
w
r
i
t
e
 
h
i
g
h
-
q
u
a
l
i
t
y
 
d
o
c
u
m
e
n
t
a
t
i
o
n
 
u
s
i
n
g
 
r
o
x
y
g
e
n
2
"
,


 
 
 
 
 
 
"
G
i
t
 
a
n
d
 
G
i
t
H
u
b
 
k
n
o
w
l
e
d
g
e
 
f
o
r
 
v
e
r
s
i
o
n
 
c
o
n
t
r
o
l
 
a
n
d
 
P
R
s
"
,


 
 
 
 
 
 
"
S
t
u
d
e
n
t
 
s
t
a
t
u
s
 
a
t
 
a
n
 
a
c
c
r
e
d
i
t
e
d
 
u
n
i
v
e
r
s
i
t
y
 
(
f
o
r
 
G
S
o
C
)
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
R
 
O
r
g
a
n
i
z
a
t
i
o
n
 
S
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
 
d
a
t
e
s
:
 
"
F
e
b
r
u
a
r
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
P
r
o
j
e
c
t
 
B
r
o
w
s
i
n
g
 
&
 
M
e
n
t
o
r
i
n
g
"
,
 
d
a
t
e
s
:
 
"
M
a
r
c
h
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
P
o
r
t
a
l
 
A
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
 
W
i
n
d
o
w
"
,
 
d
a
t
e
s
:
 
"
A
p
r
i
l
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
P
r
i
m
a
r
y
 
S
t
a
t
i
s
t
i
c
a
l
 
C
o
d
i
n
g
"
,
 
d
a
t
e
s
:
 
"
J
u
n
e
 
–
 
A
u
g
u
s
t
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
C
R
A
N
 
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
 
&
 
S
u
b
m
i
s
s
i
o
n
"
,
 
d
a
t
e
s
:
 
"
S
e
p
t
e
m
b
e
r
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
B
r
o
w
s
e
 
t
h
e
 
R
 
P
r
o
j
e
c
t
 
i
d
e
a
s
 
l
i
s
t
 
o
n
 
t
h
e
 
R
-
G
S
o
C
 
w
i
k
i
"
,


 
 
 
 
 
 
"
C
o
n
t
r
i
b
u
t
e
 
s
m
a
l
l
 
p
a
t
c
h
e
s
 
t
o
 
e
x
i
s
t
i
n
g
 
R
 
p
a
c
k
a
g
e
s
 
o
r
 
'
r
-
d
e
v
e
l
'
"
,


 
 
 
 
 
 
"
D
i
s
c
u
s
s
 
p
r
o
p
o
s
a
l
s
 
w
i
t
h
 
R
 
m
e
n
t
o
r
s
 
v
i
a
 
R
-
h
e
l
p
 
m
a
i
l
i
n
g
 
l
i
s
t
"
,


 
 
 
 
 
 
"
D
e
t
a
i
l
e
d
 
p
r
o
p
o
s
a
l
 
s
u
b
m
i
s
s
i
o
n
 
i
n
c
l
u
d
i
n
g
 
s
t
a
t
i
s
t
i
c
a
l
 
m
e
t
h
o
d
o
l
o
g
y
"
,


 
 
 
 
 
 
"
C
o
m
p
l
e
t
e
 
s
c
r
e
e
n
i
n
g
 
t
a
s
k
s
 
l
i
k
e
 
c
r
e
a
t
i
n
g
 
a
 
m
i
n
i
m
a
l
 
R
 
p
a
c
k
a
g
e
"
,


 
 
 
 
 
 
"
F
i
n
a
l
i
z
e
 
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
 
o
n
 
G
S
o
C
 
p
o
r
t
a
l
 
u
n
d
e
r
 
R
 
P
r
o
j
e
c
t
 
u
m
b
r
e
l
l
a
"
,


 
 
 
 
]
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
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
6
,


 
 
 
 
n
a
m
e
:
 
"
A
O
S
S
I
E
 
(
D
e
s
i
g
n
 
f
o
c
u
s
e
d
)
"
,


 
 
 
 
s
h
o
r
t
:
 
"
A
O
S
S
I
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
A
u
s
t
r
a
l
i
a
n
 
O
p
e
n
 
S
o
u
r
c
e
 
S
o
f
t
w
a
r
e
 
I
n
n
o
v
a
t
i
o
n
 
a
n
d
 
E
d
u
c
a
t
i
o
n
 
d
e
s
i
g
n
 
p
r
o
j
e
c
t
s
.
"
,


 
 
 
 
f
u
l
l
D
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
n
t
r
i
b
u
t
e
 
t
o
 
U
I
/
U
X
 
a
n
d
 
v
i
s
u
a
l
 
d
e
s
i
g
n
 
f
o
r
 
s
c
i
e
n
t
i
f
i
c
 
s
o
f
t
w
a
r
e
 
t
o
o
l
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
D
e
s
i
g
n
e
r
s
 
a
n
d
 
d
e
v
e
l
o
p
e
r
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
O
p
e
n
 
t
o
 
A
l
l
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
$
1
,
5
0
0
 
-
 
$
3
,
0
0
0
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
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


 
 
 
 
w
i
n
d
o
w
:
 
"
v
i
a
 
G
S
o
C
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
A
n
n
u
a
l
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
A
u
s
t
r
a
l
i
a
/
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
a
o
s
s
i
e
.
o
r
g
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
a
o
s
s
i
e
.
o
r
g
"
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
8
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
"
,


 
 
 
 
t
a
g
s
:
 
[
"
d
e
s
i
g
n
"
,
 
"
u
i
u
x
"
,
 
"
a
u
s
t
r
a
l
i
a
"
]
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
:
 
[


 
 
 
 
 
 
"
P
r
o
f
i
c
i
e
n
c
y
 
i
n
 
U
I
/
U
X
 
d
e
s
i
g
n
 
a
n
d
 
p
r
o
t
o
t
y
p
i
n
g
 
(
F
i
g
m
a
,
 
S
k
e
t
c
h
)
"
,


 
 
 
 
 
 
"
U
n
d
e
r
s
t
a
n
d
i
n
g
 
o
f
 
U
C
D
 
p
r
i
n
c
i
p
l
e
s
 
f
o
r
 
s
c
i
e
n
t
i
f
i
c
 
s
o
f
t
w
a
r
e
"
,


 
 
 
 
 
 
"
B
a
s
i
c
 
k
n
o
w
l
e
d
g
e
 
o
f
 
H
T
M
L
/
C
S
S
 
o
r
 
f
r
o
n
t
e
n
d
 
f
r
a
m
e
w
o
r
k
s
"
,


 
 
 
 
 
 
"
P
o
r
t
f
o
l
i
o
 
s
h
o
w
c
a
s
i
n
g
 
p
r
e
v
i
o
u
s
 
d
e
s
i
g
n
 
w
o
r
k
 
o
r
 
c
a
s
e
 
s
t
u
d
i
e
s
"
,


 
 
 
 
 
 
"
A
b
i
l
i
t
y
 
t
o
 
c
r
e
a
t
e
 
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
 
d
e
s
i
g
n
s
 
(
W
C
A
G
 
s
t
a
n
d
a
r
d
s
)
"
,


 
 
 
 
 
 
"
E
x
c
e
l
l
e
n
t
 
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
k
i
l
l
s
 
f
o
r
 
p
r
e
s
e
n
t
i
n
g
 
d
e
s
i
g
n
 
d
e
c
i
s
i
o
n
s
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
A
O
S
S
I
E
 
D
e
s
i
g
n
 
P
r
o
j
e
c
t
 
R
e
v
e
a
l
"
,
 
d
a
t
e
s
:
 
"
F
e
b
r
u
a
r
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
M
e
n
t
e
e
 
S
e
l
e
c
t
i
o
n
 
&
 
P
o
r
t
f
o
l
i
o
 
R
e
v
i
e
w
"
,
 
d
a
t
e
s
:
 
"
M
a
r
c
h
 
–
 
A
p
r
i
l
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
R
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
 
G
a
t
h
e
r
i
n
g
 
&
 
U
X
 
R
e
s
e
a
r
c
h
"
,
 
d
a
t
e
s
:
 
"
M
a
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
I
t
e
r
a
t
i
v
e
 
P
r
o
t
o
t
y
p
i
n
g
 
&
 
T
e
s
t
i
n
g
"
,
 
d
a
t
e
s
:
 
"
J
u
n
e
 
–
 
J
u
l
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
F
i
n
a
l
 
H
a
n
d
-
o
f
f
 
&
 
D
e
v
e
l
o
p
e
r
 
L
i
a
i
s
o
n
"
,
 
d
a
t
e
s
:
 
"
A
u
g
u
s
t
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
R
e
v
i
e
w
 
A
O
S
S
I
E
 
p
r
o
j
e
c
t
 
l
i
s
t
 
f
o
r
 
d
e
s
i
g
n
-
c
e
n
t
r
i
c
 
o
p
p
o
r
t
u
n
i
t
i
e
s
"
,


 
 
 
 
 
 
"
P
r
e
p
a
r
e
 
a
 
p
o
r
t
f
o
l
i
o
 
P
D
F
 
o
r
 
l
i
n
k
 
h
i
g
h
l
i
g
h
t
i
n
g
 
U
I
/
U
X
 
e
x
p
e
r
t
i
s
e
"
,


 
 
 
 
 
 
"
P
r
o
p
o
s
e
 
a
 
s
p
e
c
i
f
i
c
 
U
I
 
o
v
e
r
h
a
u
l
 
o
r
 
a
 
n
e
w
 
f
e
a
t
u
r
e
'
s
 
l
a
n
g
u
a
g
e
"
,


 
 
 
 
 
 
"
J
o
i
n
 
A
O
S
S
I
E
 
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
 
c
h
a
n
n
e
l
s
 
(
G
i
t
t
e
r
 
o
r
 
S
l
a
c
k
)
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
f
o
r
m
a
l
 
p
r
o
p
o
s
a
l
 
o
n
 
G
S
o
C
 
p
o
r
t
a
l
 
(
A
O
S
S
I
E
 
u
m
b
r
e
l
l
a
)
"
,


 
 
 
 
 
 
"
P
a
r
t
i
c
i
p
a
t
e
 
i
n
 
i
n
t
e
r
v
i
e
w
 
f
o
c
u
s
i
n
g
 
o
n
 
d
e
s
i
g
n
 
p
r
o
c
e
s
s
 
&
 
t
o
o
l
s
"
,


 
 
 
 
]
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
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
S
I
G
N
"


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
7
,


 
 
 
 
n
a
m
e
:
 
"
D
r
i
v
e
n
D
a
t
a
 
R
e
s
e
a
r
c
h
"
,


 
 
 
 
s
h
o
r
t
:
 
"
D
r
i
v
e
n
D
a
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
o
c
i
a
l
 
i
m
p
a
c
t
 
r
e
s
e
a
r
c
h
 
t
h
r
o
u
g
h
 
d
a
t
a
 
s
c
i
e
n
c
e
 
a
n
d
 
o
p
e
n
 
c
o
m
p
e
t
i
t
i
o
n
s
.
"
,


 
 
 
 
f
u
l
l
D
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
p
p
l
y
 
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
 
a
n
d
 
d
a
t
a
 
s
c
i
e
n
c
e
 
t
o
 
h
i
g
h
-
i
m
p
a
c
t
 
s
o
c
i
a
l
 
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
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
D
a
t
a
 
s
c
i
e
n
t
i
s
t
s
 
a
n
d
 
r
e
s
e
a
r
c
h
e
r
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
O
p
e
n
 
t
o
 
A
l
l
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
C
o
m
p
e
t
i
t
i
o
n
 
P
r
i
z
e
s
 
(
$
1
,
0
0
0
 
-
 
$
5
0
,
0
0
0
)
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
t
r
u
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
H
i
g
h
"
,


 
 
 
 
w
i
n
d
o
w
:
 
"
O
n
g
o
i
n
g
 
C
o
m
p
e
t
i
t
i
o
n
s
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
O
n
g
o
i
n
g
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
w
w
w
.
d
r
i
v
e
n
d
a
t
a
.
o
r
g
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
w
w
w
.
d
r
i
v
e
n
d
a
t
a
.
o
r
g
"
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
9
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
"
,


 
 
 
 
t
a
g
s
:
 
[
"
r
e
s
e
a
r
c
h
"
,
 
"
d
a
t
a
-
s
c
i
e
n
c
e
"
,
 
"
s
o
c
i
a
l
-
i
m
p
a
c
t
"
]
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
:
 
[


 
 
 
 
 
 
"
S
t
r
o
n
g
 
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
 
i
n
 
M
a
c
h
i
n
e
 
L
e
a
r
n
i
n
g
 
a
n
d
 
D
a
t
a
 
S
c
i
e
n
c
e
"
,


 
 
 
 
 
 
"
P
r
o
f
i
c
i
e
n
c
y
 
i
n
 
P
y
t
h
o
n
 
(
s
c
i
k
i
t
-
l
e
a
r
n
,
 
P
y
T
o
r
c
h
)
 
o
r
 
R
"
,


 
 
 
 
 
 
"
A
b
i
l
i
t
y
 
t
o
 
c
l
e
a
n
 
a
n
d
 
p
r
o
c
e
s
s
 
m
a
s
s
i
v
e
 
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
 
d
a
t
a
s
e
t
s
"
,


 
 
 
 
 
 
"
F
o
c
u
s
 
o
n
 
s
o
c
i
a
l
 
i
m
p
a
c
t
 
a
n
d
 
o
p
e
n
 
r
e
s
e
a
r
c
h
 
m
e
t
h
o
d
o
l
o
g
i
e
s
"
,


 
 
 
 
 
 
"
C
o
m
m
i
t
m
e
n
t
 
t
o
 
c
o
m
p
e
t
i
n
g
 
a
n
d
 
p
u
b
l
i
s
h
i
n
g
 
f
i
n
d
i
n
g
s
 
a
s
 
O
S
"
,


 
 
 
 
 
 
"
V
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
 
o
f
 
i
d
e
n
t
i
t
y
 
a
n
d
 
e
l
i
g
i
b
i
l
i
t
y
 
f
o
r
 
p
r
i
z
e
 
p
a
y
o
u
t
s
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
C
o
m
p
e
t
i
t
i
o
n
 
L
a
u
n
c
h
 
&
 
D
o
c
u
m
e
n
t
a
t
i
o
n
"
,
 
d
a
t
e
s
:
 
"
V
a
r
i
e
s
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
E
x
p
l
o
r
a
t
o
r
y
 
D
a
t
a
 
A
n
a
l
y
s
i
s
 
P
h
a
s
e
"
,
 
d
a
t
e
s
:
 
"
M
o
n
t
h
 
1
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
M
o
d
e
l
i
n
g
 
&
 
O
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
 
S
p
r
i
n
t
"
,
 
d
a
t
e
s
:
 
"
M
o
n
t
h
 
2
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
F
i
n
a
l
 
L
e
a
d
e
r
b
o
a
r
d
 
S
u
b
m
i
s
s
i
o
n
"
,
 
d
a
t
e
s
:
 
"
C
o
n
c
l
u
s
i
o
n
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
W
i
n
n
e
r
 
C
o
d
e
 
V
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
 
&
 
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
a
t
e
s
:
 
"
P
o
s
t
-
E
v
e
n
t
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
C
r
e
a
t
e
 
a
 
r
e
s
e
a
r
c
h
e
r
 
p
r
o
f
i
l
e
 
o
n
 
D
r
i
v
e
n
D
a
t
a
.
o
r
g
"
,


 
 
 
 
 
 
"
B
r
o
w
s
e
 
a
c
t
i
v
e
 
c
o
m
p
e
t
i
t
i
o
n
s
 
f
o
r
 
s
o
c
i
a
l
 
g
o
o
d
"
,


 
 
 
 
 
 
"
D
o
w
n
l
o
a
d
 
t
h
e
 
c
o
m
p
e
t
i
t
i
o
n
 
d
a
t
a
s
e
t
s
 
a
n
d
 
s
t
a
r
t
e
r
 
n
o
t
e
b
o
o
k
s
"
,


 
 
 
 
 
 
"
F
o
r
m
 
a
 
t
e
a
m
 
o
r
 
c
o
m
p
e
t
e
 
i
n
d
i
v
i
d
u
a
l
l
y
 
f
o
l
l
o
w
i
n
g
 
r
u
l
e
s
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
y
o
u
r
 
p
r
e
d
i
c
t
i
v
e
 
m
o
d
e
l
s
 
t
o
 
t
h
e
 
p
u
b
l
i
c
 
l
e
a
d
e
r
b
o
a
r
d
"
,


 
 
 
 
 
 
"
D
o
c
u
m
e
n
t
 
a
p
p
r
o
a
c
h
 
a
n
d
 
p
r
e
p
a
r
e
 
c
o
d
e
 
f
o
r
 
f
i
n
a
l
 
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
"
,


 
 
 
 
]
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
A
d
v
a
n
c
e
d
"
,


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
R
E
S
E
A
R
C
H
"


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
8
,


 
 
 
 
n
a
m
e
:
 
"
H
a
c
k
t
o
b
e
r
f
e
s
t
"
,


 
 
 
 
s
h
o
r
t
:
 
"
H
a
c
k
t
o
b
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
D
i
g
i
t
a
l
O
c
e
a
n
'
s
 
a
n
n
u
a
l
 
O
c
t
o
b
e
r
 
c
e
l
e
b
r
a
t
i
o
n
 
o
f
 
o
p
e
n
 
s
o
u
r
c
e
.
 
C
o
m
p
l
e
t
e
 
4
 
P
R
s
/
M
R
s
 
d
u
r
i
n
g
 
O
c
t
o
b
e
r
 
t
o
 
e
a
r
n
 
a
 
d
i
g
i
t
a
l
 
b
a
d
g
e
 
a
n
d
 
s
w
a
g
 
f
r
o
m
 
s
p
o
n
s
o
r
s
.
"
,


 
 
 
 
f
u
l
l
D
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
c
k
t
o
b
e
r
f
e
s
t
 
i
s
 
a
 
m
o
n
t
h
-
l
o
n
g
 
c
e
l
e
b
r
a
t
i
o
n
 
o
f
 
o
p
e
n
 
s
o
u
r
c
e
 
s
o
f
t
w
a
r
e
 
r
u
n
 
b
y
 
D
i
g
i
t
a
l
O
c
e
a
n
 
e
v
e
r
y
 
O
c
t
o
b
e
r
.
 
P
a
r
t
i
c
i
p
a
n
t
s
 
w
h
o
 
s
u
b
m
i
t
 
4
 
q
u
a
l
i
f
y
i
n
g
 
p
u
l
l
 
r
e
q
u
e
s
t
s
 
t
o
 
a
n
y
 
p
a
r
t
i
c
i
p
a
t
i
n
g
 
G
i
t
H
u
b
 
o
r
 
G
i
t
L
a
b
 
r
e
p
o
s
i
t
o
r
i
e
s
 
e
a
r
n
 
a
 
d
i
g
i
t
a
l
 
b
a
d
g
e
 
a
n
d
 
m
a
y
 
q
u
a
l
i
f
y
 
f
o
r
 
l
i
m
i
t
e
d
-
e
d
i
t
i
o
n
 
p
h
y
s
i
c
a
l
 
s
w
a
g
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
A
n
y
o
n
e
 
g
l
o
b
a
l
l
y
,
 
1
8
+
 
o
r
 
w
i
t
h
 
p
a
r
e
n
t
a
l
 
c
o
n
s
e
n
t
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
O
p
e
n
 
t
o
 
A
l
l
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
D
i
g
i
t
a
l
 
b
a
d
g
e
 
+
 
l
i
m
i
t
e
d
 
s
w
a
g
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
f
a
l
s
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
L
o
w
/
N
o
n
e
"
,


 
 
 
 
w
i
n
d
o
w
:
 
"
O
c
t
o
b
e
r
 
(
e
v
e
r
y
 
y
e
a
r
)
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
A
n
n
u
a
l
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
h
a
c
k
t
o
b
e
r
f
e
s
t
.
c
o
m
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
h
a
c
k
t
o
b
e
r
f
e
s
t
.
c
o
m
"
,


 
 
 
 
s
t
a
r
t
D
a
t
e
:
 
"
2
0
2
6
-
1
0
-
0
1
"
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
7
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
"
,


 
 
 
 
t
a
g
s
:
 
[
"
b
e
g
i
n
n
e
r
-
f
r
i
e
n
d
l
y
"
,
 
"
o
p
e
n
-
s
o
u
r
c
e
"
,
 
"
o
c
t
o
b
e
r
"
,
 
"
s
w
a
g
"
]
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
:
 
[


 
 
 
 
 
 
"
R
e
g
i
s
t
e
r
 
a
t
 
h
a
c
k
t
o
b
e
r
f
e
s
t
.
c
o
m
 
d
u
r
i
n
g
 
t
h
e
 
m
o
n
t
h
 
o
f
 
O
c
t
o
b
e
r
"
,


 
 
 
 
 
 
"
L
i
n
k
i
n
g
 
o
f
 
v
a
l
i
d
 
G
i
t
H
u
b
 
o
r
 
G
i
t
L
a
b
 
a
c
c
o
u
n
t
 
t
o
 
r
e
g
i
s
t
r
a
t
i
o
n
"
,


 
 
 
 
 
 
"
P
r
o
p
e
r
 
t
a
g
g
i
n
g
 
o
f
 
P
u
l
l
/
M
e
r
g
e
 
R
e
q
u
e
s
t
s
 
f
o
r
 
t
h
e
 
c
u
r
r
e
n
t
 
y
e
a
r
"
,


 
 
 
 
 
 
"
C
o
n
t
r
i
b
u
t
i
o
n
s
 
m
u
s
t
 
b
e
 
t
o
 
r
e
p
o
s
 
w
i
t
h
 
'
h
a
c
k
t
o
b
e
r
f
e
s
t
'
 
t
o
p
i
c
"
,


 
 
 
 
 
 
"
P
R
s
 
m
u
s
t
 
p
a
s
s
 
'
s
p
a
m
'
 
c
h
e
c
k
 
b
y
 
m
a
i
n
t
a
i
n
e
r
s
"
,


 
 
 
 
 
 
"
A
d
h
e
r
e
n
c
e
 
t
o
 
H
a
c
k
t
o
b
e
r
f
e
s
t
 
V
a
l
u
e
s
 
(
Q
u
a
n
t
i
t
y
 
<
 
Q
u
a
l
i
t
y
)
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
E
a
r
l
y
 
B
i
r
d
 
R
e
g
i
s
t
r
a
t
i
o
n
"
,
 
d
a
t
e
s
:
 
"
L
a
t
e
 
S
e
p
t
e
m
b
e
r
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
O
f
f
i
c
i
a
l
 
K
i
c
k
-
o
f
f
 
E
v
e
n
t
"
,
 
d
a
t
e
s
:
 
"
O
c
t
o
b
e
r
 
1
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
T
h
e
 
4
-
P
R
 
C
o
n
t
r
i
b
u
t
i
o
n
 
S
p
r
i
n
t
"
,
 
d
a
t
e
s
:
 
"
O
c
t
o
b
e
r
 
1
 
–
 
3
1
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
7
-
D
a
y
 
R
e
v
i
e
w
 
&
 
H
o
l
d
i
n
g
 
P
e
r
i
o
d
"
,
 
d
a
t
e
s
:
 
"
O
n
g
o
i
n
g
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
V
a
l
i
d
a
t
i
o
n
 
&
 
S
w
a
g
 
L
o
g
i
s
t
i
c
s
"
,
 
d
a
t
e
s
:
 
"
N
o
v
 
–
 
J
a
n
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
V
i
s
i
t
 
h
a
c
k
t
o
b
e
r
f
e
s
t
.
c
o
m
 
a
n
d
 
s
i
g
n
 
u
p
 
w
i
t
h
 
y
o
u
r
 
D
e
v
 
a
c
c
o
u
n
t
"
,


 
 
 
 
 
 
"
U
s
e
 
'
h
a
c
k
t
o
b
e
r
f
e
s
t
'
 
s
e
a
r
c
h
 
f
i
l
t
e
r
 
o
n
 
G
i
t
H
u
b
/
G
i
t
L
a
b
"
,


 
 
 
 
 
 
"
S
u
b
m
i
t
 
4
 
q
u
a
l
i
t
y
 
c
o
n
t
r
i
b
u
t
i
o
n
s
 
(
b
u
g
 
f
i
x
e
s
,
 
d
o
c
s
,
 
o
r
 
f
e
a
t
u
r
e
s
)
"
,


 
 
 
 
 
 
"
E
n
s
u
r
e
 
P
R
 
i
s
 
n
o
t
 
m
a
r
k
e
d
 
a
s
 
'
i
n
v
a
l
i
d
'
 
o
r
 
'
s
p
a
m
'
 
b
y
 
m
a
i
n
t
a
i
n
e
r
"
,


 
 
 
 
 
 
"
T
r
a
c
k
 
p
r
o
g
r
e
s
s
 
o
n
 
o
f
f
i
c
i
a
l
 
H
a
c
k
t
o
b
e
r
f
e
s
t
 
d
a
s
h
b
o
a
r
d
"
,


 
 
 
 
 
 
"
C
l
a
i
m
 
d
i
g
i
t
a
l
 
b
a
d
g
e
 
a
n
d
 
r
e
w
a
r
d
s
 
o
n
c
e
 
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
 
a
r
e
 
m
e
t
"
,


 
 
 
 
]
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


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
1
9
,


 
 
 
 
n
a
m
e
:
 
"
G
i
r
l
S
c
r
i
p
t
 
S
u
m
m
e
r
 
o
f
 
C
o
d
e
"
,


 
 
 
 
s
h
o
r
t
:
 
"
G
S
S
o
C
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
d
i
a
'
s
 
l
a
r
g
e
s
t
 
o
p
e
n
 
s
o
u
r
c
e
 
p
r
o
g
r
a
m
,
 
i
n
s
p
i
r
e
d
 
b
y
 
G
S
o
C
.
 
R
u
n
s
 
M
a
r
c
h
–
M
a
y
 
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
 
I
n
d
i
a
n
 
s
t
u
d
e
n
t
s
 
w
i
t
h
 
m
e
n
t
o
r
s
 
f
r
o
m
 
1
0
0
+
 
o
p
e
n
 
s
o
u
r
c
e
 
p
r
o
j
e
c
t
s
.
"
,


 
 
 
 
f
u
l
l
D
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
r
l
S
c
r
i
p
t
 
S
u
m
m
e
r
 
o
f
 
C
o
d
e
 
(
G
S
S
o
C
)
 
i
s
 
a
 
3
-
m
o
n
t
h
 
o
p
e
n
 
s
o
u
r
c
e
 
p
r
o
g
r
a
m
 
c
o
n
d
u
c
t
e
d
 
b
y
 
t
h
e
 
G
i
r
l
S
c
r
i
p
t
 
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
.
 
I
t
 
i
s
 
p
r
i
m
a
r
i
l
y
 
f
o
c
u
s
e
d
 
o
n
 
I
n
d
i
a
n
 
s
t
u
d
e
n
t
s
 
a
n
d
 
a
i
m
s
 
t
o
 
h
e
l
p
 
t
h
e
m
 
g
e
t
 
s
t
a
r
t
e
d
 
w
i
t
h
 
c
o
n
t
r
i
b
u
t
i
n
g
 
t
o
 
o
p
e
n
 
s
o
u
r
c
e
.
 
T
o
p
 
c
o
n
t
r
i
b
u
t
o
r
s
 
r
e
c
e
i
v
e
 
c
e
r
t
i
f
i
c
a
t
e
s
,
 
s
w
a
g
,
 
a
n
d
 
j
o
b
 
r
e
f
e
r
r
a
l
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
O
p
e
n
 
t
o
 
a
l
l
 
-
 
p
r
i
m
a
r
i
l
y
 
I
n
d
i
a
n
 
s
t
u
d
e
n
t
s
 
b
u
t
 
a
n
y
o
n
e
 
c
a
n
 
j
o
i
n
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
O
p
e
n
 
t
o
 
A
l
l
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
C
e
r
t
i
f
i
c
a
t
e
s
 
+
 
s
w
a
g
 
+
 
j
o
b
 
r
e
f
e
r
r
a
l
s
 
f
o
r
 
t
o
p
 
c
o
n
t
r
i
b
u
t
o
r
s
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
f
a
l
s
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
L
o
w
/
N
o
n
e
"
,


 
 
 
 
w
i
n
d
o
w
:
 
"
M
a
r
c
h
 
–
 
M
a
y
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
A
n
n
u
a
l
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
I
n
d
i
a
 
(
o
p
e
n
 
g
l
o
b
a
l
l
y
)
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
g
s
s
o
c
.
g
i
r
l
s
c
r
i
p
t
.
t
e
c
h
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
g
s
s
o
c
.
g
i
r
l
s
c
r
i
p
t
.
t
e
c
h
"
,


 
 
 
 
d
e
a
d
l
i
n
e
:
 
"
2
0
2
6
-
0
5
-
3
1
"
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
i
n
k
-
7
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
i
n
k
-
5
0
 
b
o
r
d
e
r
-
p
i
n
k
-
2
0
0
"
,


 
 
 
 
t
a
g
s
:
 
[
"
i
n
d
i
a
"
,
 
"
b
e
g
i
n
n
e
r
-
f
r
i
e
n
d
l
y
"
,
 
"
c
e
r
t
i
f
i
c
a
t
e
s
"
,
 
"
g
s
s
o
c
"
]
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
:
 
[


 
 
 
 
 
 
"
A
c
t
i
v
e
 
r
e
g
i
s
t
r
a
t
i
o
n
 
o
n
 
t
h
e
 
G
S
S
o
C
 
p
a
r
t
i
c
i
p
a
n
t
 
p
o
r
t
a
l
"
,


 
 
 
 
 
 
"
B
a
s
i
c
 
k
n
o
w
l
e
d
g
e
 
o
f
 
G
i
t
 
a
n
d
 
G
i
t
H
u
b
 
(
F
o
r
k
,
 
C
l
o
n
e
,
 
P
R
)
"
,


 
 
 
 
 
 
"
W
i
l
l
i
n
g
n
e
s
s
 
t
o
 
p
a
r
t
i
c
i
p
a
t
e
 
i
n
 
p
o
i
n
t
-
b
a
s
e
d
 
l
e
a
d
e
r
b
o
a
r
d
"
,


 
 
 
 
 
 
"
E
n
g
a
g
e
 
w
i
t
h
 
m
e
n
t
o
r
s
 
a
n
d
 
c
o
n
t
r
i
b
u
t
o
r
s
 
v
i
a
 
D
i
s
c
o
r
d
"
,


 
 
 
 
 
 
"
N
o
 
a
g
e
 
o
r
 
e
d
u
c
a
t
i
o
n
a
l
 
b
a
r
r
i
e
r
 
-
 
o
p
e
n
 
t
o
 
a
l
l
 
l
e
a
r
n
e
r
s
"
,


 
 
 
 
 
 
"
C
o
m
m
i
t
m
e
n
t
 
t
o
 
p
r
o
f
e
s
s
i
o
n
a
l
 
c
o
n
d
u
c
t
 
a
n
d
 
g
u
i
d
e
l
i
n
e
s
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
P
r
o
j
e
c
t
 
&
 
M
e
n
t
o
r
 
O
n
b
o
a
r
d
i
n
g
"
,
 
d
a
t
e
s
:
 
"
J
a
n
u
a
r
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
C
o
n
t
r
i
b
u
t
o
r
 
R
e
g
i
s
t
r
a
t
i
o
n
 
S
p
r
i
n
t
"
,
 
d
a
t
e
s
:
 
"
F
e
b
r
u
a
r
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
C
o
d
i
n
g
 
P
e
r
i
o
d
 
L
a
u
n
c
h
"
,
 
d
a
t
e
s
:
 
"
M
a
r
c
h
 
1
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
L
e
a
d
e
r
b
o
a
r
d
 
M
i
d
-
t
e
r
m
 
E
v
a
l
u
a
t
i
o
n
"
,
 
d
a
t
e
s
:
 
"
A
p
r
i
l
 
1
5
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
F
i
n
a
l
 
C
o
n
t
r
i
b
u
t
i
o
n
 
W
r
a
p
-
u
p
"
,
 
d
a
t
e
s
:
 
"
M
a
y
 
3
1
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
R
e
s
u
l
t
s
 
&
 
J
o
b
 
R
e
f
e
r
r
a
l
 
D
r
i
v
e
"
,
 
d
a
t
e
s
:
 
"
J
u
n
e
 
–
 
J
u
l
y
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
C
o
m
p
l
e
t
e
 
t
h
e
 
r
e
g
i
s
t
r
a
t
i
o
n
 
f
o
r
m
 
a
t
 
g
s
s
o
c
.
g
i
r
l
s
c
r
i
p
t
.
t
e
c
h
"
,


 
 
 
 
 
 
"
J
o
i
n
 
t
h
e
 
o
f
f
i
c
i
a
l
 
G
S
S
o
C
 
D
i
s
c
o
r
d
 
s
e
r
v
e
r
 
f
o
r
 
a
n
n
o
u
n
c
e
m
e
n
t
s
"
,


 
 
 
 
 
 
"
E
x
p
l
o
r
e
 
p
r
o
j
e
c
t
 
r
e
p
o
 
a
n
d
 
f
i
n
d
 
i
s
s
u
e
s
 
l
a
b
e
l
e
d
 
'
G
S
S
o
C
'
"
,


 
 
 
 
 
 
"
C
o
m
m
e
n
t
 
o
n
 
a
n
 
i
s
s
u
e
 
t
o
 
g
e
t
 
i
t
 
a
s
s
i
g
n
e
d
 
b
y
 
a
 
m
e
n
t
o
r
"
,


 
 
 
 
 
 
"
S
o
l
v
e
 
i
s
s
u
e
,
 
s
u
b
m
i
t
 
P
R
,
 
a
n
d
 
l
i
n
k
 
i
t
 
t
o
 
G
S
S
o
C
 
d
a
s
h
b
o
a
r
d
"
,


 
 
 
 
 
 
"
R
e
p
e
a
t
 
p
r
o
c
e
s
s
 
t
o
 
e
a
r
n
 
p
o
i
n
t
s
 
a
n
d
 
c
l
i
m
b
 
t
h
e
 
l
e
a
d
e
r
b
o
a
r
d
"
,


 
 
 
 
]
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


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
2
0
,


 
 
 
 
n
a
m
e
:
 
"
M
L
H
 
L
o
c
a
l
h
o
s
t
 
W
o
r
k
s
h
o
p
s
"
,


 
 
 
 
s
h
o
r
t
:
 
"
L
o
c
a
l
h
o
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
F
r
e
e
 
t
e
c
h
n
i
c
a
l
 
w
o
r
k
s
h
o
p
s
 
a
n
d
 
l
e
a
r
n
i
n
g
 
r
e
s
o
u
r
c
e
s
.
"
,


 
 
 
 
f
u
l
l
D
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
 
f
r
o
m
 
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
s
 
t
h
r
o
u
g
h
 
h
a
n
d
s
-
o
n
 
w
o
r
k
s
h
o
p
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
S
t
u
d
e
n
t
s
.
"
,


 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
:
 
"
S
t
u
d
e
n
t
s
"
,


 
 
 
 
s
t
i
p
e
n
d
:
 
"
L
e
a
r
n
i
n
g
 
r
e
s
o
u
r
c
e
s
"
,


 
 
 
 
s
t
i
p
e
n
d
P
a
i
d
:
 
f
a
l
s
e
,


 
 
 
 
s
t
i
p
e
n
d
R
a
n
g
e
:
 
"
L
o
w
/
N
o
n
e
"
,


 
 
 
 
w
i
n
d
o
w
:
 
"
Y
e
a
r
-
r
o
u
n
d
"
,


 
 
 
 
s
t
a
t
u
s
:
 
"
O
n
g
o
i
n
g
"
,


 
 
 
 
r
e
g
i
o
n
:
 
"
G
l
o
b
a
l
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
h
t
t
p
s
:
/
/
m
l
h
.
i
o
"
,


 
 
 
 
a
p
p
l
y
U
r
l
:
 
"
h
t
t
p
s
:
/
/
m
l
h
.
i
o
"
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
7
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
"
,


 
 
 
 
t
a
g
s
:
 
[
"
l
e
a
r
n
i
n
g
"
,
 
"
w
o
r
k
s
h
o
p
"
]
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
:
 
[


 
 
 
 
 
 
"
S
t
a
t
u
s
 
a
s
 
a
 
s
t
u
d
e
n
t
 
o
r
 
l
i
f
e
l
o
n
g
 
l
e
a
r
n
e
r
 
i
n
t
e
r
e
s
t
e
d
 
i
n
 
t
e
c
h
"
,


 
 
 
 
 
 
"
A
c
c
e
s
s
 
t
o
 
a
 
c
o
m
p
u
t
e
r
 
w
i
t
h
 
a
 
s
t
a
b
l
e
 
i
n
t
e
r
n
e
t
 
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
"
,


 
 
 
 
 
 
"
W
i
l
l
i
n
g
n
e
s
s
 
t
o
 
p
a
r
t
i
c
i
p
a
t
e
 
i
n
 
i
n
s
t
r
u
c
t
o
r
-
l
e
d
 
s
e
s
s
i
o
n
s
"
,


 
 
 
 
 
 
"
B
a
s
i
c
 
e
n
v
i
r
o
n
m
e
n
t
a
l
 
s
e
t
u
p
 
(
V
S
 
C
o
d
e
,
 
G
i
t
)
 
p
e
r
 
w
o
r
k
s
h
o
p
"
,


 
 
 
 
 
 
"
N
o
 
p
r
i
o
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
 
r
e
q
u
i
r
e
d
 
f
o
r
 
'
I
n
t
r
o
'
 
l
e
v
e
l
 
m
o
d
u
l
e
s
"
,


 
 
 
 
 
 
"
C
o
m
m
i
t
m
e
n
t
 
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
 
t
h
e
 
w
o
r
k
s
h
o
p
 
p
r
o
j
e
c
t
 
i
n
 
6
0
-
9
0
 
m
i
n
"
,


 
 
 
 
]
,


 
 
 
 
t
i
m
e
l
i
n
e
:
 
[


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
W
o
r
k
s
h
o
p
 
C
a
l
e
n
d
a
r
 
R
e
l
e
a
s
e
"
,
 
d
a
t
e
s
:
 
"
W
e
e
k
l
y
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
I
n
d
i
v
i
d
u
a
l
 
E
v
e
n
t
 
R
e
g
i
s
t
r
a
t
i
o
n
"
,
 
d
a
t
e
s
:
 
"
O
n
g
o
i
n
g
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
L
i
v
e
 
W
o
r
k
s
h
o
p
 
S
e
s
s
i
o
n
"
,
 
d
a
t
e
s
:
 
"
S
c
h
e
d
u
l
e
d
 
T
i
m
e
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
H
a
n
d
s
-
o
n
 
P
r
o
j
e
c
t
 
L
a
b
"
,
 
d
a
t
e
s
:
 
"
P
o
s
t
-
L
e
c
t
u
r
e
"
 
}
,


 
 
 
 
 
 
{
 
p
h
a
s
e
:
 
"
A
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
 
B
a
d
g
e
 
I
s
s
u
a
n
c
e
"
,
 
d
a
t
e
s
:
 
"
C
o
n
c
l
u
s
i
o
n
"
 
}
,


 
 
 
 
]
,


 
 
 
 
h
o
w
T
o
A
p
p
l
y
:
 
[


 
 
 
 
 
 
"
V
i
s
i
t
 
m
l
h
.
i
o
/
l
o
c
a
l
h
o
s
t
 
t
o
 
b
r
o
w
s
e
 
u
p
c
o
m
i
n
g
 
w
o
r
k
s
h
o
p
 
l
i
s
t
"
,


 
 
 
 
 
 
"
F
i
l
t
e
r
 
e
v
e
n
t
s
 
b
y
 
t
o
p
i
c
 
(
W
e
b
,
 
A
I
,
 
C
l
o
u
d
)
 
o
r
 
t
i
m
e
z
o
n
e
"
,


 
 
 
 
 
 
"
R
e
g
i
s
t
e
r
 
f
o
r
 
a
 
s
p
e
c
i
f
i
c
 
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
 
o
r
 
o
n
-
d
e
m
a
n
d
 
m
o
d
u
l
e
"
,


 
 
 
 
 
 
"
F
o
l
l
o
w
 
t
h
e
 
'
P
r
e
-
r
e
q
u
i
s
i
t
e
s
'
 
g
u
i
d
e
 
s
e
n
t
 
t
o
 
y
o
u
r
 
e
m
a
i
l
"
,


 
 
 
 
 
 
"
J
o
i
n
 
t
h
e
 
l
i
v
e
 
s
t
r
e
a
m
 
o
r
 
r
o
o
m
 
a
t
 
t
h
e
 
s
c
h
e
d
u
l
e
d
 
t
i
m
e
"
,


 
 
 
 
 
 
"
P
a
r
t
i
c
i
p
a
t
e
 
i
n
 
b
u
i
l
d
s
 
a
n
d
 
c
l
a
i
m
 
M
L
H
 
d
i
g
i
t
a
l
 
r
e
w
a
r
d
s
"
,


 
 
 
 
]
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


 
 
 
 
f
o
c
u
s
A
r
e
a
:
 
"
D
E
V
E
L
O
P
M
E
N
T
"


 
 
}


]
;




c
o
n
s
t
 
S
T
O
R
A
G
E
_
K
E
Y
 
=
 
"
p
r
o
g
r
a
m
_
t
r
a
c
k
e
r
_
f
i
l
t
e
r
s
"
;




c
o
n
s
t
 
E
L
I
G
I
B
I
L
I
T
Y
_
O
P
T
I
O
N
S
 
=
 
[
"
A
l
l
"
,
 
"
S
t
u
d
e
n
t
s
"
,
 
"
O
p
e
n
 
t
o
 
A
l
l
"
,
 
"
D
i
v
e
r
s
i
t
y
-
f
o
c
u
s
e
d
"
]
;


c
o
n
s
t
 
S
T
A
T
U
S
_
O
P
T
I
O
N
S
 
=
 
[
"
A
l
l
"
,
 
"
A
n
n
u
a
l
"
,
 
"
O
n
g
o
i
n
g
"
,
 
"
B
a
t
c
h
"
]
;


c
o
n
s
t
 
F
O
C
U
S
_
A
R
E
A
_
O
P
T
I
O
N
S
 
=
 
[
"
A
l
l
"
,
 
"
D
E
V
E
L
O
P
M
E
N
T
"
,
 
"
T
E
C
H
N
I
C
A
L
_
W
R
I
T
I
N
G
"
,
 
"
D
E
S
I
G
N
"
,
 
"
R
E
S
E
A
R
C
H
"
]
;


c
o
n
s
t
 
S
T
I
P
E
N
D
_
O
P
T
I
O
N
S
 
=
 
[


 
 
"
A
l
l
"
,


 
 
"
P
a
i
d
"
,


 
 
"
H
i
g
h
 
(
$
5
k
+
)
"
,


 
 
"
M
e
d
i
u
m
 
(
$
1
k
–
5
k
)
"
,


 
 
"
L
o
w
/
N
o
n
e
"
,


]
;


c
o
n
s
t
 
S
O
R
T
_
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
 
v
a
l
u
e
:
 
"
d
e
f
a
u
l
t
"
,
 
l
a
b
e
l
:
 
"
D
e
f
a
u
l
t
 
o
r
d
e
r
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
d
e
a
d
l
i
n
e
-
a
s
c
"
,
 
l
a
b
e
l
:
 
"
D
e
a
d
l
i
n
e
:
 
S
o
o
n
e
s
t
 
F
i
r
s
t
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
d
e
a
d
l
i
n
e
-
d
e
s
c
"
,
 
l
a
b
e
l
:
 
"
D
e
a
d
l
i
n
e
:
 
L
a
t
e
s
t
 
F
i
r
s
t
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
s
t
i
p
e
n
d
-
d
e
s
c
"
,
 
l
a
b
e
l
:
 
"
S
t
i
p
e
n
d
:
 
H
i
g
h
e
s
t
 
F
i
r
s
t
"
 
}
,


 
 
{
 
v
a
l
u
e
:
 
"
n
a
m
e
-
a
s
c
"
,
 
l
a
b
e
l
:
 
"
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
"
 
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
 
c
o
m
p
u
t
e
N
e
x
t
D
e
a
d
l
i
n
e
(
)
 
{


 
 
c
o
n
s
t
 
n
o
w
 
=
 
D
a
t
e
.
n
o
w
(
)
;


 
 
c
o
n
s
t
 
w
i
t
h
D
e
a
d
l
i
n
e
s
 
=
 
P
R
O
G
R
A
M
S
.
f
i
l
t
e
r
(


 
 
 
 
(
p
)
 
=
>
 
p
.
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
D
e
a
d
l
i
n
e
 
&
&
 
n
e
w
 
D
a
t
e
(
p
.
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
D
e
a
d
l
i
n
e
)
.
g
e
t
T
i
m
e
(
)
 
>
 
n
o
w
,


 
 
)
;


 
 
i
f
 
(
w
i
t
h
D
e
a
d
l
i
n
e
s
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
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
c
o
n
s
t
 
e
a
r
l
i
e
s
t
 
=
 
w
i
t
h
D
e
a
d
l
i
n
e
s
.
r
e
d
u
c
e
(


 
 
 
 
(
a
c
c
,
 
p
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
d
 
=
 
n
e
w
 
D
a
t
e
(
p
.
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
D
e
a
d
l
i
n
e
!
)
.
g
e
t
T
i
m
e
(
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
d
 
<
 
a
c
c
.
t
i
m
e
 
?
 
{
 
p
r
o
g
r
a
m
:
 
p
,
 
t
i
m
e
:
 
d
 
}
 
:
 
a
c
c
;


 
 
 
 
}
,


 
 
 
 
{
 
p
r
o
g
r
a
m
:
 
w
i
t
h
D
e
a
d
l
i
n
e
s
[
0
]
,
 
t
i
m
e
:
 
I
n
f
i
n
i
t
y
 
}
,


 
 
)
;


 
 
i
f
 
(
!
e
a
r
l
i
e
s
t
.
p
r
o
g
r
a
m
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
r
e
t
u
r
n
 
{
 
p
r
o
g
r
a
m
:
 
e
a
r
l
i
e
s
t
.
p
r
o
g
r
a
m
,
 
d
a
y
s
:
 
M
a
t
h
.
c
e
i
l
(
(
e
a
r
l
i
e
s
t
.
t
i
m
e
 
-
 
n
o
w
)
 
/
 
8
6
4
0
0
0
0
0
)
 
}
;


}




c
o
n
s
t
 
N
E
X
T
_
D
E
A
D
L
I
N
E
 
=
 
c
o
m
p
u
t
e
N
e
x
t
D
e
a
d
l
i
n
e
(
)
;




t
y
p
e
 
L
o
c
a
l
C
u
r
r
e
n
c
y
C
o
n
f
i
g
 
=
 
{


 
 
c
u
r
r
e
n
c
y
:
 
s
t
r
i
n
g
;


 
 
r
a
t
e
:
 
n
u
m
b
e
r
;


 
 
l
o
c
a
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


}
;




c
o
n
s
t
 
L
O
C
A
L
_
C
U
R
R
E
N
C
Y
_
B
Y
_
R
E
G
I
O
N
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
 
L
o
c
a
l
C
u
r
r
e
n
c
y
C
o
n
f
i
g
>
 
=
 
{


 
 
I
N
:
 
{
 
c
u
r
r
e
n
c
y
:
 
"
I
N
R
"
,
 
r
a
t
e
:
 
8
3
.
5
,
 
l
o
c
a
l
e
:
 
"
e
n
-
I
N
"
 
}
,


 
 
N
G
:
 
{
 
c
u
r
r
e
n
c
y
:
 
"
N
G
N
"
,
 
r
a
t
e
:
 
1
5
0
0
,
 
l
o
c
a
l
e
:
 
"
e
n
-
N
G
"
 
}
,


 
 
I
D
:
 
{
 
c
u
r
r
e
n
c
y
:
 
"
I
D
R
"
,
 
r
a
t
e
:
 
1
6
2
0
0
,
 
l
o
c
a
l
e
:
 
"
i
d
-
I
D
"
 
}
,


 
 
B
R
:
 
{
 
c
u
r
r
e
n
c
y
:
 
"
B
R
L
"
,
 
r
a
t
e
:
 
5
.
2
,
 
l
o
c
a
l
e
:
 
"
p
t
-
B
R
"
 
}
,


}
;




c
o
n
s
t
 
T
I
M
E
_
Z
O
N
E
_
R
E
G
I
O
N
_
H
I
N
T
S
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
 
k
e
y
o
f
 
t
y
p
e
o
f
 
L
O
C
A
L
_
C
U
R
R
E
N
C
Y
_
B
Y
_
R
E
G
I
O
N
>
 
=
 
{


 
 
"
A
s
i
a
/
K
o
l
k
a
t
a
"
:
 
"
I
N
"
,


 
 
"
A
s
i
a
/
C
a
l
c
u
t
t
a
"
:
 
"
I
N
"
,


 
 
"
A
f
r
i
c
a
/
L
a
g
o
s
"
:
 
"
N
G
"
,


 
 
"
A
s
i
a
/
J
a
k
a
r
t
a
"
:
 
"
I
D
"
,


 
 
"
A
s
i
a
/
M
a
k
a
s
s
a
r
"
:
 
"
I
D
"
,


 
 
"
A
s
i
a
/
J
a
y
a
p
u
r
a
"
:
 
"
I
D
"
,


 
 
"
A
m
e
r
i
c
a
/
S
a
o
_
P
a
u
l
o
"
:
 
"
B
R
"
,


}
;




c
o
n
s
t
 
S
T
A
T
U
S
_
S
T
Y
L
E
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


 
 
A
n
n
u
a
l
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
7
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
b
l
u
e
-
4
0
0
"
,


 
 
O
n
g
o
i
n
g
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
7
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
e
m
e
r
a
l
d
-
4
0
0
"
,


 
 
B
a
t
c
h
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
7
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
p
u
r
p
l
e
-
4
0
0
"
,


}
;




c
o
n
s
t
 
E
L
I
G
I
B
I
L
I
T
Y
_
S
T
Y
L
E
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


 
 
S
t
u
d
e
n
t
s
:


 
 
 
 
"
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
b
g
-
a
m
b
e
r
-
9
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
"
,


 
 
"
O
p
e
n
 
t
o
 
A
l
l
"
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
7
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
t
e
a
l
-
4
0
0
"
,


 
 
"
D
i
v
e
r
s
i
t
y
-
f
o
c
u
s
e
d
"
:


 
 
 
 
"
b
g
-
p
i
n
k
-
5
0
 
t
e
x
t
-
p
i
n
k
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
g
-
p
i
n
k
-
9
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
t
e
x
t
-
p
i
n
k
-
4
0
0
"
,


}
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
C
o
u
n
t
d
o
w
n
(


 
 
p
r
o
g
r
a
m
:
 
P
r
o
g
r
a
m
,


)
:
 
{
 
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
;
 
c
l
a
s
s
N
a
m
e
:
 
s
t
r
i
n
g
 
}
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
n
o
w
 
=
 
D
a
t
e
.
n
o
w
(
)
;


 
 
i
f
 
(
p
r
o
g
r
a
m
.
d
e
a
d
l
i
n
e
)
 
{


 
 
 
 
c
o
n
s
t
 
d
a
y
s
 
=
 
M
a
t
h
.
c
e
i
l
(


 
 
 
 
 
 
(
n
e
w
 
D
a
t
e
(
p
r
o
g
r
a
m
.
d
e
a
d
l
i
n
e
 
+
 
"
T
2
3
:
5
9
:
5
9
"
)
.
g
e
t
T
i
m
e
(
)
 
-
 
n
o
w
)
 
/
 
8
6
4
0
0
0
0
0
,


 
 
 
 
)
;


 
 
 
 
i
f
 
(
d
a
y
s
 
<
 
0
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
i
f
 
(
d
a
y
s
 
<
 
3
)


 
 
 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
 
 
t
e
x
t
:
 
`
$
{
d
a
y
s
}
 
d
a
y
s
 
l
e
f
t
!
`
,


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
:
 
"
t
e
x
t
-
r
e
d
-
5
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
,


 
 
 
 
 
 
}
;


 
 
 
 
i
f
 
(
d
a
y
s
 
<
 
7
)


 
 
 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
 
 
t
e
x
t
:
 
`
$
{
d
a
y
s
}
 
d
a
y
s
 
l
e
f
t
`
,


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
:
 
"
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
5
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
,


 
 
 
 
 
 
}
;


 
 
 
 
i
f
 
(
d
a
y
s
 
<
 
3
0
)


 
 
 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
 
 
t
e
x
t
:
 
`
$
{
d
a
y
s
}
 
d
a
y
s
 
r
e
m
a
i
n
i
n
g
`
,


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
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
,


 
 
 
 
 
 
}
;


 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
t
e
x
t
:
 
`
C
l
o
s
e
s
 
i
n
 
$
{
d
a
y
s
}
 
d
a
y
s
`
,


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
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
,


 
 
 
 
}
;


 
 
}


 
 
i
f
 
(
p
r
o
g
r
a
m
.
s
t
a
r
t
D
a
t
e
)
 
{


 
 
 
 
c
o
n
s
t
 
d
a
y
s
 
=
 
M
a
t
h
.
c
e
i
l
(


 
 
 
 
 
 
(
n
e
w
 
D
a
t
e
(
p
r
o
g
r
a
m
.
s
t
a
r
t
D
a
t
e
 
+
 
"
T
2
3
:
5
9
:
5
9
"
)
.
g
e
t
T
i
m
e
(
)
 
-
 
n
o
w
)
 
/
 
8
6
4
0
0
0
0
0
,


 
 
 
 
)
;


 
 
 
 
i
f
 
(
d
a
y
s
 
<
 
0
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
t
e
x
t
:
 
`
O
p
e
n
s
 
i
n
 
$
{
d
a
y
s
}
 
d
a
y
s
`
,


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
:
 
"
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
5
0
0
 
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
,


 
 
 
 
}
;


 
 
}


 
 
r
e
t
u
r
n
 
n
u
l
l
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
 
g
e
t
U
r
g
e
n
c
y
(


 
 
p
r
o
g
r
a
m
:
 
P
r
o
g
r
a
m
,


)
:
 
{
 
l
e
v
e
l
:
 
"
c
l
o
s
e
d
"
 
|
 
"
c
r
i
t
i
c
a
l
"
 
|
 
"
u
r
g
e
n
t
"
 
|
 
"
n
o
r
m
a
l
"
 
|
 
"
n
o
n
e
"
;
 
d
a
y
s
:
 
n
u
m
b
e
r
 
}
 
|
 
n
u
l
l
 
{


 
 
i
f
 
(
!
p
r
o
g
r
a
m
.
d
e
a
d
l
i
n
e
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
c
o
n
s
t
 
d
a
y
s
 
=
 
M
a
t
h
.
c
e
i
l
(


 
 
 
 
(
n
e
w
 
D
a
t
e
(
p
r
o
g
r
a
m
.
d
e
a
d
l
i
n
e
 
+
 
"
T
2
3
:
5
9
:
5
9
"
)
.
g
e
t
T
i
m
e
(
)
 
-
 
D
a
t
e
.
n
o
w
(
)
)
 
/
 
8
6
4
0
0
0
0
0
,


 
 
)
;


 
 
i
f
 
(
d
a
y
s
 
<
 
0
)
 
r
e
t
u
r
n
 
{
 
l
e
v
e
l
:
 
"
c
l
o
s
e
d
"
,
 
d
a
y
s
 
}
;


 
 
i
f
 
(
d
a
y
s
 
<
 
3
)
 
r
e
t
u
r
n
 
{
 
l
e
v
e
l
:
 
"
c
r
i
t
i
c
a
l
"
,
 
d
a
y
s
 
}
;


 
 
i
f
 
(
d
a
y
s
 
<
 
7
)
 
r
e
t
u
r
n
 
{
 
l
e
v
e
l
:
 
"
u
r
g
e
n
t
"
,
 
d
a
y
s
 
}
;


 
 
i
f
 
(
d
a
y
s
 
<
 
3
0
)
 
r
e
t
u
r
n
 
{
 
l
e
v
e
l
:
 
"
n
o
r
m
a
l
"
,
 
d
a
y
s
 
}
;


 
 
r
e
t
u
r
n
 
{
 
l
e
v
e
l
:
 
"
n
o
n
e
"
,
 
d
a
y
s
 
}
;


}




c
o
n
s
t
 
g
e
t
B
r
o
w
s
e
r
C
u
r
r
e
n
c
y
C
o
n
f
i
g
 
=
 
(
)
:
 
L
o
c
a
l
C
u
r
r
e
n
c
y
C
o
n
f
i
g
 
|
 
n
u
l
l
 
=
>
 
{


 
 
i
f
 
(
t
y
p
e
o
f
 
I
n
t
l
 
=
=
=
 
"
u
n
d
e
f
i
n
e
d
"
)
 
r
e
t
u
r
n
 
n
u
l
l
;




 
 
c
o
n
s
t
 
l
o
c
a
l
e
 
=
 
t
y
p
e
o
f
 
n
a
v
i
g
a
t
o
r
 
!
=
=
 
"
u
n
d
e
f
i
n
e
d
"
 
?
 
n
a
v
i
g
a
t
o
r
.
l
a
n
g
u
a
g
e
 
:
 
"
"
;


 
 
c
o
n
s
t
 
l
o
c
a
l
e
R
e
g
i
o
n
 
=
 
l
o
c
a
l
e
.
m
a
t
c
h
(
/
-
(
[
A
-
Z
]
{
2
}
)
\
b
/
i
)
?
.
[
1
]
?
.
t
o
U
p
p
e
r
C
a
s
e
(
)
;


 
 
i
f
 
(
l
o
c
a
l
e
R
e
g
i
o
n
 
&
&
 
L
O
C
A
L
_
C
U
R
R
E
N
C
Y
_
B
Y
_
R
E
G
I
O
N
[
l
o
c
a
l
e
R
e
g
i
o
n
]
)
 
{


 
 
 
 
r
e
t
u
r
n
 
L
O
C
A
L
_
C
U
R
R
E
N
C
Y
_
B
Y
_
R
E
G
I
O
N
[
l
o
c
a
l
e
R
e
g
i
o
n
]
;


 
 
}




 
 
c
o
n
s
t
 
t
i
m
e
Z
o
n
e
 
=
 
I
n
t
l
.
D
a
t
e
T
i
m
e
F
o
r
m
a
t
(
)
.
r
e
s
o
l
v
e
d
O
p
t
i
o
n
s
(
)
.
t
i
m
e
Z
o
n
e
;


 
 
c
o
n
s
t
 
t
i
m
e
Z
o
n
e
R
e
g
i
o
n
 
=
 
T
I
M
E
_
Z
O
N
E
_
R
E
G
I
O
N
_
H
I
N
T
S
[
t
i
m
e
Z
o
n
e
]
;


 
 
r
e
t
u
r
n
 
t
i
m
e
Z
o
n
e
R
e
g
i
o
n
 
?
 
L
O
C
A
L
_
C
U
R
R
E
N
C
Y
_
B
Y
_
R
E
G
I
O
N
[
t
i
m
e
Z
o
n
e
R
e
g
i
o
n
]
 
:
 
n
u
l
l
;


}
;




c
o
n
s
t
 
f
o
r
m
a
t
C
o
m
p
a
c
t
C
u
r
r
e
n
c
y
 
=
 
(
a
m
o
u
n
t
:
 
n
u
m
b
e
r
,
 
c
o
n
f
i
g
:
 
L
o
c
a
l
C
u
r
r
e
n
c
y
C
o
n
f
i
g
)
 
=
>


 
 
n
e
w
 
I
n
t
l
.
N
u
m
b
e
r
F
o
r
m
a
t
(
c
o
n
f
i
g
.
l
o
c
a
l
e
,
 
{


 
 
 
 
s
t
y
l
e
:
 
"
c
u
r
r
e
n
c
y
"
,


 
 
 
 
c
u
r
r
e
n
c
y
:
 
c
o
n
f
i
g
.
c
u
r
r
e
n
c
y
,


 
 
 
 
n
o
t
a
t
i
o
n
:
 
"
c
o
m
p
a
c
t
"
,


 
 
 
 
m
a
x
i
m
u
m
F
r
a
c
t
i
o
n
D
i
g
i
t
s
:
 
1
,


 
 
}
)
.
f
o
r
m
a
t
(
a
m
o
u
n
t
)
;




c
o
n
s
t
 
g
e
t
L
o
c
a
l
S
t
i
p
e
n
d
E
s
t
i
m
a
t
e
 
=
 
(
s
t
i
p
e
n
d
:
 
s
t
r
i
n
g
)
:
 
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
 
=
>
 
{


 
 
c
o
n
s
t
 
c
o
n
f
i
g
 
=
 
g
e
t
B
r
o
w
s
e
r
C
u
r
r
e
n
c
y
C
o
n
f
i
g
(
)
;


 
 
i
f
 
(
!
c
o
n
f
i
g
)
 
r
e
t
u
r
n
 
n
u
l
l
;




 
 
c
o
n
s
t
 
a
m
o
u
n
t
s
 
=
 
[
.
.
.
s
t
i
p
e
n
d
.
m
a
t
c
h
A
l
l
(
/
\
$
(
[
\
d
,
]
+
(
?
:
\
.
\
d
+
)
?
)
/
g
)
]


 
 
 
 
.
m
a
p
(
(
m
a
t
c
h
)
 
=
>
 
N
u
m
b
e
r
(
m
a
t
c
h
[
1
]
.
r
e
p
l
a
c
e
(
/
,
/
g
,
 
"
"
)
)
)


 
 
 
 
.
f
i
l
t
e
r
(
(
a
m
o
u
n
t
)
 
=
>
 
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
a
m
o
u
n
t
)
)
;




 
 
i
f
 
(
a
m
o
u
n
t
s
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
)
 
r
e
t
u
r
n
 
n
u
l
l
;




 
 
c
o
n
s
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
 
=
 
a
m
o
u
n
t
s
.
m
a
p
(
(
a
m
o
u
n
t
)
 
=
>
 
f
o
r
m
a
t
C
o
m
p
a
c
t
C
u
r
r
e
n
c
y
(
a
m
o
u
n
t
 
*
 
c
o
n
f
i
g
.
r
a
t
e
,
 
c
o
n
f
i
g
)
)
;


 
 
c
o
n
s
t
 
s
u
f
f
i
x
 
=
 
s
t
i
p
e
n
d
.
m
a
t
c
h
(
/
\
/
m
o
n
t
h
|
p
e
r
 
t
e
r
m
/
i
)
?
.
[
0
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
 
s
p
a
c
e
d
S
u
f
f
i
x
 
=
 
s
u
f
f
i
x
.
s
t
a
r
t
s
W
i
t
h
(
"
/
"
)
 
|
|
 
!
s
u
f
f
i
x
 
?
 
s
u
f
f
i
x
 
:
 
`
 
$
{
s
u
f
f
i
x
}
`
;




 
 
r
e
t
u
r
n
 
`
~
$
{
c
o
n
v
e
r
t
e
d
.
j
o
i
n
(
"
 
-
 
"
)
}
$
{
s
p
a
c
e
d
S
u
f
f
i
x
}
`
;


}
;




c
o
n
s
t
 
g
e
t
G
o
o
g
l
e
C
a
l
e
n
d
a
r
U
r
l
 
=
 
(
p
r
o
g
r
a
m
:
 
P
r
o
g
r
a
m
)
 
=
>
 
{


 
 
i
f
 
(
!
p
r
o
g
r
a
m
.
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
D
e
a
d
l
i
n
e
)
 
r
e
t
u
r
n
 
"
"
;




 
 
c
o
n
s
t
 
e
n
d
D
a
t
e
O
b
j
 
=
 
n
e
w
 
D
a
t
e
(
p
r
o
g
r
a
m
.
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
D
e
a
d
l
i
n
e
)
;


 
 
i
f
 
(
i
s
N
a
N
(
e
n
d
D
a
t
e
O
b
j
.
g
e
t
T
i
m
e
(
)
)
)
 
r
e
t
u
r
n
 
"
"
;




 
 
l
e
t
 
s
t
a
r
t
D
a
t
e
O
b
j
 
=
 
p
r
o
g
r
a
m
.
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
S
t
a
r
t
 
?
 
n
e
w
 
D
a
t
e
(
p
r
o
g
r
a
m
.
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
S
t
a
r
t
)
 
:
 
n
u
l
l
;


 
 
i
f
 
(
!
s
t
a
r
t
D
a
t
e
O
b
j
 
|
|
 
i
s
N
a
N
(
s
t
a
r
t
D
a
t
e
O
b
j
.
g
e
t
T
i
m
e
(
)
)
)
 
{


 
 
 
 
s
t
a
r
t
D
a
t
e
O
b
j
 
=
 
n
e
w
 
D
a
t
e
(
e
n
d
D
a
t
e
O
b
j
.
g
e
t
T
i
m
e
(
)
 
-
 
6
0
 
*
 
6
0
 
*
 
1
0
0
0
)
;
 
/
/
 
D
e
f
a
u
l
t
 
t
o
 
1
 
h
o
u
r
 
b
e
f
o
r
e
 
d
e
a
d
l
i
n
e


 
 
}




 
 
c
o
n
s
t
 
p
a
d
 
=
 
(
n
:
 
n
u
m
b
e
r
)
 
=
>
 
(
n
 
<
 
1
0
 
?
 
"
0
"
 
+
 
n
 
:
 
n
)
;


 
 
c
o
n
s
t
 
f
o
r
m
a
t
U
T
C
 
=
 
(
d
:
 
D
a
t
e
)
 
=
>


 
 
 
 
`
$
{
d
.
g
e
t
U
T
C
F
u
l
l
Y
e
a
r
(
)
}
$
{
p
a
d
(
d
.
g
e
t
U
T
C
M
o
n
t
h
(
)
 
+
 
1
)
}
$
{
p
a
d
(
d
.
g
e
t
U
T
C
D
a
t
e
(
)
)
}
T
$
{
p
a
d
(
d
.
g
e
t
U
T
C
H
o
u
r
s
(
)
)
}
$
{
p
a
d
(
d
.
g
e
t
U
T
C
M
i
n
u
t
e
s
(
)
)
}
$
{
p
a
d
(
d
.
g
e
t
U
T
C
S
e
c
o
n
d
s
(
)
)
}
Z
`
;




 
 
c
o
n
s
t
 
s
t
a
r
t
D
a
t
e
 
=
 
f
o
r
m
a
t
U
T
C
(
s
t
a
r
t
D
a
t
e
O
b
j
)
;


 
 
c
o
n
s
t
 
e
n
d
D
a
t
e
 
=
 
f
o
r
m
a
t
U
T
C
(
e
n
d
D
a
t
e
O
b
j
)
;




 
 
c
o
n
s
t
 
t
e
x
t
 
=
 
e
n
c
o
d
e
U
R
I
C
o
m
p
o
n
e
n
t
(
`
$
{
p
r
o
g
r
a
m
.
n
a
m
e
}
 
A
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
`
)
;


 
 
c
o
n
s
t
 
d
e
t
a
i
l
s
 
=
 
e
n
c
o
d
e
U
R
I
C
o
m
p
o
n
e
n
t
(
`
A
p
p
l
y
 
h
e
r
e
:
 
$
{
p
r
o
g
r
a
m
.
w
e
b
s
i
t
e
}
`
)
;




 
 
r
e
t
u
r
n
 
`
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
a
r
.
g
o
o
g
l
e
.
c
o
m
/
c
a
l
e
n
d
a
r
/
r
e
n
d
e
r
?
a
c
t
i
o
n
=
T
E
M
P
L
A
T
E
&
t
e
x
t
=
$
{
t
e
x
t
}
&
d
a
t
e
s
=
$
{
s
t
a
r
t
D
a
t
e
}
/
$
{
e
n
d
D
a
t
e
}
&
d
e
t
a
i
l
s
=
$
{
d
e
t
a
i
l
s
}
`
;


}
;




/
/
 
─
─
─
 
P
r
o
g
r
a
m
 
C
a
r
d
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


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
o
g
r
a
m
C
a
r
d
(
{
 
p
r
o
g
r
a
m
 
}
:
 
{
 
p
r
o
g
r
a
m
:
 
P
r
o
g
r
a
m
 
}
)
 
{


 
 
c
o
n
s
t
 
[
e
x
p
a
n
d
e
d
,
 
s
e
t
E
x
p
a
n
d
e
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
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
l
o
c
a
l
S
t
i
p
e
n
d
E
s
t
i
m
a
t
e
 
=
 
p
r
o
g
r
a
m
.
s
t
i
p
e
n
d
P
a
i
d
 
?
 
g
e
t
L
o
c
a
l
S
t
i
p
e
n
d
E
s
t
i
m
a
t
e
(
p
r
o
g
r
a
m
.
s
t
i
p
e
n
d
)
 
:
 
n
u
l
l
;


 
 
c
o
n
s
t
 
u
r
g
e
n
c
y
 
=
 
g
e
t
U
r
g
e
n
c
y
(
p
r
o
g
r
a
m
)
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
{
`
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
g
r
a
y
-
9
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
2
x
l
 
b
o
r
d
e
r
 
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
s
h
a
d
o
w
 
h
o
v
e
r
:
s
h
a
d
o
w
-
m
d
 
$
{
p
r
o
g
r
a
m
.
b
g
C
o
l
o
r
}
`
}


 
 
 
 
>


 
 
 
 
 
 
{
u
r
g
e
n
c
y
?
.
l
e
v
e
l
 
=
=
=
 
"
c
r
i
t
i
c
a
l
"
 
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
b
g
-
r
e
d
-
5
0
0
 
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
 
p
y
-
1
.
5
 
p
x
-
4
 
a
n
i
m
a
t
e
-
p
u
l
s
e
"
>


 
 
 
 
 
 
 
 
 
 
C
L
O
S
I
N
G
 
S
O
O
N


 
 
 
 
 
 
 
 
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
3
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
u
r
g
e
n
c
y
?
.
l
e
v
e
l
 
=
=
=
 
"
c
l
o
s
e
d
"
 
&
&
 
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
p
x
-
2
.
5
 
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
l
g
 
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
g
r
a
y
-
5
0
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
l
o
s
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
{
`
p
x
-
2
.
5
 
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
l
g
 
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
 
s
h
r
i
n
k
-
0
 
$
{
p
r
o
g
r
a
m
.
b
g
C
o
l
o
r
}
 
$
{
p
r
o
g
r
a
m
.
c
o
l
o
r
}
 
b
o
r
d
e
r
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
a
m
.
s
h
o
r
t
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
i
n
-
w
-
0
"
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
b
a
s
e
 
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
 
l
e
a
d
i
n
g
-
t
i
g
h
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
a
m
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
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
 
g
a
p
-
1
.
5
 
m
t
-
1
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
{
`
p
x
-
2
 
p
y
-
0
.
5
 
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
e
d
i
u
m
 
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
 
$
{
S
T
A
T
U
S
_
S
T
Y
L
E
[
p
r
o
g
r
a
m
.
s
t
a
t
u
s
]
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
a
m
.
s
t
a
t
u
s
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
{
`
p
x
-
2
 
p
y
-
0
.
5
 
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
e
d
i
u
m
 
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
 
$
{
E
L
I
G
I
B
I
L
I
T
Y
_
S
T
Y
L
E
[
p
r
o
g
r
a
m
.
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
]
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
a
m
.
e
l
i
g
i
b
i
l
i
t
y
T
y
p
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
p
r
o
g
r
a
m
.
s
t
i
p
e
n
d
P
a
i
d
 
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
e
n
d
 
g
a
p
-
1
 
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
7
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
D
o
l
l
a
r
S
i
g
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
a
m
.
s
t
i
p
e
n
d
.
s
p
l
i
t
(
"
 
"
)
[
0
]
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


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
x
s
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
s
t
i
p
e
n
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
a
m
.
s
t
i
p
e
n
d
P
a
i
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
g
r
a
y
-
4
0
0
 
m
t
-
0
.
5
"
>
U
S
D
 
{
p
r
o
g
r
a
m
.
s
t
i
p
e
n
d
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
c
a
l
S
t
i
p
e
n
d
E
s
t
i
m
a
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
0
.
5
 
m
a
x
-
w
-
3
2
 
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
e
m
e
r
a
l
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
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
A
p
p
r
o
x
i
m
a
t
e
 
l
o
c
a
l
 
v
a
l
u
e
.
 
A
m
o
u
n
t
s
 
m
a
y
 
v
a
r
y
 
b
a
s
e
d
 
o
n
 
e
x
c
h
a
n
g
e
 
r
a
t
e
s
,
 
p
r
o
j
e
c
t
 
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
,
 
a
n
d
 
l
o
c
a
t
i
o
n
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
c
a
l
S
t
i
p
e
n
d
E
s
t
i
m
a
t
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
/
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
t
-
3
"
>


 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
a
m
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




 
 
 
 
 
 
 
 
{
/
*
 
K
e
y
 
i
n
f
o
 
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
4
 
m
t
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
g
r
a
y
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
3
.
5
 
h
-
3
.
5
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
a
m
.
w
i
n
d
o
w
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


 
 
 
 
 
 
 
 
 
 
 
 
<
G
l
o
b
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
3
.
5
 
h
-
3
.
5
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
a
m
.
r
e
g
i
o
n
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


 
 
 
 
 
 
 
 
 
 
 
 
<
U
s
e
r
s
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
a
m
.
e
l
i
g
i
b
i
l
i
t
y
.
l
e
n
g
t
h
 
>
 
5
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
p
r
o
g
r
a
m
.
e
l
i
g
i
b
i
l
i
t
y
.
s
l
i
c
e
(
0
,
 
5
0
)
 
+
 
"
…
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
p
r
o
g
r
a
m
.
e
l
i
g
i
b
i
l
i
t
y
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
/
*
 
T
a
g
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
 
g
a
p
-
1
 
m
t
-
3
"
>


 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
a
m
.
t
a
g
s
.
s
l
i
c
e
(
0
,
 
4
)
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
0
.
5
 
b
g
-
g
r
a
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
g
r
a
y
-
8
0
0
 
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
g
r
a
y
-
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
#
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


 
 
 
 
 
 
 
 
{
/
*
 
C
o
u
n
t
d
o
w
n
 
*
/
}


 
 
 
 
 
 
 
 
{
(
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
 
c
d
 
=
 
g
e
t
C
o
u
n
t
d
o
w
n
(
p
r
o
g
r
a
m
)
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
c
d
 
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
{
`
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
 
m
t
-
2
 
t
e
x
t
-
x
s
 
$
{
c
d
.
c
l
a
s
s
N
a
m
e
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
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
c
d
.
t
e
x
t
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
;


 
 
 
 
 
 
 
 
}
)
(
)
}


 
 
 
 
 
 
 
 
{
/
*
 
E
x
p
a
n
d
 
/
 
C
T
A
 
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
 
m
t
-
4
 
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
g
r
a
y
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
g
r
a
y
-
8
0
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
(
)
 
=
>
 
s
e
t
E
x
p
a
n
d
e
d
(
!
e
x
p
a
n
d
e
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


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
e
x
p
a
n
d
e
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
U
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


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
e
x
p
a
n
d
e
d
 
?
 
"
L
e
s
s
 
d
e
t
a
i
l
s
"
 
:
 
"
F
u
l
l
 
d
e
t
a
i
l
s
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
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
a
m
.
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
D
e
a
d
l
i
n
e
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
g
e
t
G
o
o
g
l
e
C
a
l
e
n
d
a
r
U
r
l
(
p
r
o
g
r
a
m
)
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
g
r
a
y
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
g
r
a
y
-
3
0
0
 
b
g
-
g
r
a
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
g
r
a
y
-
8
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
g
r
a
y
-
7
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
l
g
 
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
7
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
 
n
o
-
u
n
d
e
r
l
i
n
e
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
P
l
u
s
 
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
 
A
d
d
 
t
o
 
C
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


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
m
e
d
i
u
m
 
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
 
b
g
-
g
r
a
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
g
r
a
y
-
8
0
0
/
5
0
 
r
o
u
n
d
e
d
-
l
g
 
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
3
 
h
-
3
"
 
/
>
 
D
e
a
d
l
i
n
e
:
 
T
B
A


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
{
p
r
o
g
r
a
m
.
w
e
b
s
i
t
e
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
g
r
a
y
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
g
r
a
y
-
3
0
0
 
b
g
-
g
r
a
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
g
r
a
y
-
8
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
g
r
a
y
-
7
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
l
g
 
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
7
0
0
 
n
o
-
u
n
d
e
r
l
i
n
e
 
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
G
l
o
b
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
3
 
h
-
3
"
 
/
>
 
W
e
b
s
i
t
e
 
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
 
o
p
a
c
i
t
y
-
6
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
p
r
o
g
r
a
m
.
a
p
p
l
y
U
r
l
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
5
0
 
b
g
-
g
r
a
y
-
9
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
8
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
g
r
a
y
-
2
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
l
g
 
n
o
-
u
n
d
e
r
l
i
n
e
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
p
p
l
y
 
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
 
o
p
a
c
i
t
y
-
7
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
{
/
*
 
E
x
p
a
n
d
e
d
 
d
e
t
a
i
l
s
 
*
/
}


 
 
 
 
 
 
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
>


 
 
 
 
 
 
 
 
{
e
x
p
a
n
d
e
d
 
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
g
r
a
y
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
g
r
a
y
-
8
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
p
-
5
 
b
g
-
g
r
a
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
g
r
a
y
-
9
5
0
 
g
r
i
d
 
m
d
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
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
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
4
 
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
4
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
p
r
o
g
r
a
m
.
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
.
m
a
p
(
(
r
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
T
i
m
e
l
i
n
e
 
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
4
 
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
i
m
e
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
4
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
a
m
.
t
i
m
e
l
i
n
e
.
m
a
p
(
(
t
,
 
i
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
w
-
1
.
5
 
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
f
u
l
l
 
b
g
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
t
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
 
/
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
m
e
d
i
u
m
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
.
p
h
a
s
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
"
>
{
t
.
d
a
t
e
s
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
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
H
o
w
 
t
o
 
A
p
p
l
y
 
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
4
 
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
H
o
w
 
t
o
 
A
p
p
l
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
4
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
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
p
r
o
g
r
a
m
.
h
o
w
T
o
A
p
p
l
y
.
m
a
p
(
(
s
t
e
p
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
w
-
4
 
h
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
f
u
l
l
 
b
g
-
g
r
a
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
b
g
-
g
r
a
y
-
7
0
0
 
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
g
r
a
y
-
3
0
0
 
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
b
o
l
d
 
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
 
m
t
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
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




/
/
 
─
─
─
 
P
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
o
g
r
a
m
T
r
a
c
k
e
r
P
a
g
e
(
)
 
{


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
m
a
r
k
L
e
a
r
n
i
n
g
P
a
t
h
M
i
l
e
s
t
o
n
e
(
"
m
e
n
t
o
r
-
p
r
o
g
r
a
m
"
)
;


 
 
}
,
 
[
]
)
;




 
 
/
/
 
L
o
a
d
 
s
a
v
e
d
 
f
i
l
t
e
r
s
 
f
r
o
m
 
l
o
c
a
l
S
t
o
r
a
g
e
 
o
n
 
m
o
u
n
t
,
 
f
a
l
l
 
b
a
c
k
 
t
o
 
d
e
f
a
u
l
t
s


 
 
c
o
n
s
t
 
g
e
t
S
a
v
e
d
F
i
l
t
e
r
s
 
=
 
(
)
 
=
>
 
{


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
s
a
v
e
d
 
=
 
l
o
c
a
l
S
t
o
r
a
g
e
.
g
e
t
I
t
e
m
(
S
T
O
R
A
G
E
_
K
E
Y
)
;


 
 
 
 
 
 
i
f
 
(
s
a
v
e
d
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
=
 
J
S
O
N
.
p
a
r
s
e
(
s
a
v
e
d
)
;


 
 
 
 
 
 
 
 
i
f
 
(
p
a
r
s
e
d
 
&
&
 
t
y
p
e
o
f
 
p
a
r
s
e
d
 
=
=
=
 
"
o
b
j
e
c
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
u
s
:
 
S
T
A
T
U
S
_
O
P
T
I
O
N
S
.
i
n
c
l
u
d
e
s
(
p
a
r
s
e
d
.
s
t
a
t
u
s
)
 
?
 
p
a
r
s
e
d
.
s
t
a
t
u
s
 
:
 
"
A
l
l
"
,


 
 
 
 
 
 
 
 
 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
E
L
I
G
I
B
I
L
I
T
Y
_
O
P
T
I
O
N
S
.
i
n
c
l
u
d
e
s
(
p
a
r
s
e
d
.
e
l
i
g
i
b
i
l
i
t
y
)
 
?
 
p
a
r
s
e
d
.
e
l
i
g
i
b
i
l
i
t
y
 
:
 
"
A
l
l
"
,


 
 
 
 
 
 
 
 
 
 
 
 
s
t
i
p
e
n
d
:
 
S
T
I
P
E
N
D
_
O
P
T
I
O
N
S
.
i
n
c
l
u
d
e
s
(
p
a
r
s
e
d
.
s
t
i
p
e
n
d
)
 
?
 
p
a
r
s
e
d
.
s
t
i
p
e
n
d
 
:
 
"
A
l
l
"
,


 
 
 
 
 
 
 
 
 
 
 
 
s
o
r
t
B
y
:
 
S
O
R
T
_
O
P
T
I
O
N
S
.
s
o
m
e
(
(
o
)
 
=
>
 
o
.
v
a
l
u
e
 
=
=
=
 
p
a
r
s
e
d
.
s
o
r
t
B
y
)
 
?
 
p
a
r
s
e
d
.
s
o
r
t
B
y
 
:
 
"
d
e
f
a
u
l
t
"
,


 
 
 
 
 
 
 
 
 
 
}
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
/
/
 
i
g
n
o
r
e
 
e
r
r
o
r
s


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
{
 
s
t
a
t
u
s
:
 
"
A
l
l
"
,
 
e
l
i
g
i
b
i
l
i
t
y
:
 
"
A
l
l
"
,
 
s
t
i
p
e
n
d
:
 
"
A
l
l
"
,
 
s
o
r
t
B
y
:
 
"
d
e
f
a
u
l
t
"
 
}
;


 
 
}
;




 
 
c
o
n
s
t
 
s
a
v
e
d
F
i
l
t
e
r
s
 
=
 
g
e
t
S
a
v
e
d
F
i
l
t
e
r
s
(
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
a
r
c
h
,
 
s
e
t
S
e
a
r
c
h
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
s
e
l
e
c
t
e
d
S
t
a
t
u
s
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
S
t
a
t
u
s
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
a
v
e
d
F
i
l
t
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
E
l
i
g
i
b
i
l
i
t
y
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
E
l
i
g
i
b
i
l
i
t
y
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
a
v
e
d
F
i
l
t
e
r
s
.
e
l
i
g
i
b
i
l
i
t
y
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
F
o
c
u
s
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
F
o
c
u
s
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
"
A
l
l
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
S
t
i
p
e
n
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
S
t
i
p
e
n
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
s
t
r
i
n
g
>
(
s
a
v
e
d
F
i
l
t
e
r
s
.
s
t
i
p
e
n
d
)
;


 
 
c
o
n
s
t
 
[
s
o
r
t
B
y
,
 
s
e
t
S
o
r
t
B
y
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
a
v
e
d
F
i
l
t
e
r
s
.
s
o
r
t
B
y
)
;




 
 
/
/
 
S
a
v
e
 
f
i
l
t
e
r
s
 
t
o
 
l
o
c
a
l
S
t
o
r
a
g
e
 
w
h
e
n
e
v
e
r
 
t
h
e
y
 
c
h
a
n
g
e


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
l
o
c
a
l
S
t
o
r
a
g
e
.
s
e
t
I
t
e
m
(


 
 
 
 
 
 
 
 
S
T
O
R
A
G
E
_
K
E
Y
,


 
 
 
 
 
 
 
 
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
{


 
 
 
 
 
 
 
 
 
 
s
t
a
t
u
s
:
 
s
e
l
e
c
t
e
d
S
t
a
t
u
s
,


 
 
 
 
 
 
 
 
 
 
e
l
i
g
i
b
i
l
i
t
y
:
 
s
e
l
e
c
t
e
d
E
l
i
g
i
b
i
l
i
t
y
,


 
 
 
 
 
 
 
 
 
 
s
t
i
p
e
n
d
:
 
s
e
l
e
c
t
e
d
S
t
i
p
e
n
d
,


 
 
 
 
 
 
 
 
 
 
s
o
r
t
B
y
:
 
s
o
r
t
B
y
,


 
 
 
 
 
 
 
 
}
)


 
 
 
 
 
 
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
/
/
 
i
g
n
o
r
e
 
s
t
o
r
a
g
e
 
e
r
r
o
r
s


 
 
 
 
}


 
 
}
,
 
[
s
e
l
e
c
t
e
d
S
t
a
t
u
s
,
 
s
e
l
e
c
t
e
d
E
l
i
g
i
b
i
l
i
t
y
,
 
s
e
l
e
c
t
e
d
S
t
i
p
e
n
d
,
 
s
o
r
t
B
y
]
)
;




 
 
c
o
n
s
t
 
f
i
l
t
e
r
e
d
 
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
 
{


 
 
 
 
l
e
t
 
l
i
s
t
 
=
 
[
.
.
.
P
R
O
G
R
A
M
S
]
;


 
 
 
 
i
f
 
(
s
e
a
r
c
h
.
t
r
i
m
(
)
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
q
 
=
 
s
e
a
r
c
h
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
;


 
 
 
 
 
 
l
i
s
t
 
=
 
l
i
s
t
.
f
i
l
t
e
r
(


 
 
 
 
 
 
 
 
(
p
)
 
=
>


 
 
 
 
 
 
 
 
 
 
p
.
n
a
m
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
.
i
n
c
l
u
d
e
s
(
q
)
 
|
|


 
 
 
 
 
 
 
 
 
 
p
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
.
i
n
c
l
u
d
e
s
(
q
)
 
|
|


 
 
 
 
 
 
 
 
 
 
p
.
t
a
g
s
.
s
o
m
e
(
(
t
)
 
=
>
 
t
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
.
i
n
c
l
u
d
e
s
(
q
)
)
,


 
 
 
 
 
 
)
;


 
 
 
 
}


 
 
 
 
i
f
 
(
s
e
l
e
c
t
e
d
S
t
a
t
u
s
 
!
=
=
 
"
A
l
l
"
)


 
 
 
 
 
 
l
i
s
t
 
=
 
l
i
s
t
.
f
i
l
t
e
r
(
(
p
)
 
=
>
 
p
.
s
t
a
t
u
s
 
=
=
=
 
s
e
l
e
c
t
e
d
S
t
a
t
u
s
)
;


 
 
 
 
i
f
 
(
s
e
l
e
c
t
e
d
E
l
i
g
i
b
i
l
i
t
y
 
!
=
=
 
"
A
l
l
"
)


 
 
 
 
 
 
l
i
s
t
 
=
 
l
i
s
t
.
f
i
l
t
e
r
(
(
p
)
 
=
>
 
p
.
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
 
=
=
=
 
s
e
l
e
c
t
e
d
E
l
i
g
i
b
i
l
i
t
y
)
;


 
 
 
 
i
f
 
(
a
c
t
i
v
e
F
o
c
u
s
 
!
=
=
 
"
A
l
l
"
)


 
 
 
 
 
 
l
i
s
t
 
=
 
l
i
s
t
.
f
i
l
t
e
r
(
(
p
)
 
=
>
 
p
.
f
o
c
u
s
A
r
e
a
 
=
=
=
 
a
c
t
i
v
e
F
o
c
u
s
)
;


 
 
 
 
i
f
 
(
s
e
l
e
c
t
e
d
S
t
i
p
e
n
d
 
=
=
=
 
"
P
a
i
d
"
)
 
l
i
s
t
 
=
 
l
i
s
t
.
f
i
l
t
e
r
(
(
p
)
 
=
>
 
p
.
s
t
i
p
e
n
d
P
a
i
d
)
;


 
 
 
 
i
f
 
(
s
e
l
e
c
t
e
d
S
t
i
p
e
n
d
 
=
=
=
 
"
H
i
g
h
 
(
$
5
k
+
)
"
)
 
l
i
s
t
 
=
 
l
i
s
t
.
f
i
l
t
e
r
(
(
p
)
 
=
>
 
p
.
s
t
i
p
e
n
d
R
a
n
g
e
 
=
=
=
 
"
H
i
g
h
"
)
;


 
 
 
 
i
f
 
(
s
e
l
e
c
t
e
d
S
t
i
p
e
n
d
 
=
=
=
 
"
M
e
d
i
u
m
 
(
$
1
k
–
5
k
)
"
)
 
l
i
s
t
 
=
 
l
i
s
t
.
f
i
l
t
e
r
(
(
p
)
 
=
>
 
p
.
s
t
i
p
e
n
d
R
a
n
g
e
 
=
=
=
 
"
M
e
d
i
u
m
"
)
;


 
 
 
 
i
f
 
(
s
e
l
e
c
t
e
d
S
t
i
p
e
n
d
 
=
=
=
 
"
L
o
w
/
N
o
n
e
"
)
 
l
i
s
t
 
=
 
l
i
s
t
.
f
i
l
t
e
r
(
(
p
)
 
=
>
 
p
.
s
t
i
p
e
n
d
R
a
n
g
e
 
=
=
=
 
"
L
o
w
/
N
o
n
e
"
)
;




 
 
 
 
i
f
 
(
s
o
r
t
B
y
 
=
=
=
 
"
d
e
a
d
l
i
n
e
-
a
s
c
"
)
 
{


 
 
 
 
 
 
l
i
s
t
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
a
t
e
A
 
=
 
a
.
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
D
e
a
d
l
i
n
e
 
?
 
n
e
w
 
D
a
t
e
(
a
.
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
D
e
a
d
l
i
n
e
)
.
g
e
t
T
i
m
e
(
)
 
:
 
I
n
f
i
n
i
t
y
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
a
t
e
B
 
=
 
b
.
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
D
e
a
d
l
i
n
e
 
?
 
n
e
w
 
D
a
t
e
(
b
.
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
D
e
a
d
l
i
n
e
)
.
g
e
t
T
i
m
e
(
)
 
:
 
I
n
f
i
n
i
t
y
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
d
a
t
e
A
 
-
 
d
a
t
e
B
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
s
o
r
t
B
y
 
=
=
=
 
"
d
e
a
d
l
i
n
e
-
d
e
s
c
"
)
 
{


 
 
 
 
 
 
l
i
s
t
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
a
t
e
A
 
=
 
a
.
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
D
e
a
d
l
i
n
e
 
?
 
n
e
w
 
D
a
t
e
(
a
.
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
D
e
a
d
l
i
n
e
)
.
g
e
t
T
i
m
e
(
)
 
:
 
-
I
n
f
i
n
i
t
y
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
a
t
e
B
 
=
 
b
.
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
D
e
a
d
l
i
n
e
 
?
 
n
e
w
 
D
a
t
e
(
b
.
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
D
e
a
d
l
i
n
e
)
.
g
e
t
T
i
m
e
(
)
 
:
 
-
I
n
f
i
n
i
t
y
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
d
a
t
e
B
 
-
 
d
a
t
e
A
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
s
o
r
t
B
y
 
=
=
=
 
"
s
t
i
p
e
n
d
-
d
e
s
c
"
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
r
a
n
k
 
=
 
{
 
H
i
g
h
:
 
3
,
 
M
e
d
i
u
m
:
 
2
,
 
"
L
o
w
/
N
o
n
e
"
:
 
1
 
}
;


 
 
 
 
 
 
l
i
s
t
.
s
o
r
t
(
(
a
,
 
b
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
V
a
l
 
=
 
r
a
n
k
[
a
.
s
t
i
p
e
n
d
R
a
n
g
e
]
 
|
|
 
0
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
V
a
l
 
=
 
r
a
n
k
[
b
.
s
t
i
p
e
n
d
R
a
n
g
e
]
 
|
|
 
0
;


 
 
 
 
 
 
 
 
i
f
 
(
b
V
a
l
 
!
=
=
 
a
V
a
l
)
 
r
e
t
u
r
n
 
b
V
a
l
 
-
 
a
V
a
l
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
N
u
m
b
e
r
(
b
.
s
t
i
p
e
n
d
P
a
i
d
)
 
-
 
N
u
m
b
e
r
(
a
.
s
t
i
p
e
n
d
P
a
i
d
)
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
s
o
r
t
B
y
 
=
=
=
 
"
n
a
m
e
-
a
s
c
"
)
 
{


 
 
 
 
 
 
l
i
s
t
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
a
.
n
a
m
e
.
l
o
c
a
l
e
C
o
m
p
a
r
e
(
b
.
n
a
m
e
)
)
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
l
i
s
t
;


 
 
}
,
 
[
s
e
a
r
c
h
,
 
s
e
l
e
c
t
e
d
S
t
a
t
u
s
,
 
s
e
l
e
c
t
e
d
E
l
i
g
i
b
i
l
i
t
y
,
 
s
e
l
e
c
t
e
d
S
t
i
p
e
n
d
,
 
s
o
r
t
B
y
]
)
;




 
 
c
o
n
s
t
 
t
o
t
a
l
S
t
i
p
e
n
d
 
=
 
P
R
O
G
R
A
M
S
.
f
i
l
t
e
r
(
(
p
)
 
=
>
 
p
.
s
t
i
p
e
n
d
P
a
i
d
)
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
h
i
g
h
S
t
i
p
e
n
d
 
=
 
P
R
O
G
R
A
M
S
.
f
i
l
t
e
r
(
(
p
)
 
=
>
 
p
.
s
t
i
p
e
n
d
R
a
n
g
e
 
=
=
=
 
"
H
i
g
h
"
)
.
l
e
n
g
t
h
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
a
m
E
v
e
n
t
s
S
c
h
e
m
a
 
=
 
P
R
O
G
R
A
M
S
.
m
a
p
(
(
p
)
 
=
>
 
(
{


 
 
 
 
"
@
c
o
n
t
e
x
t
"
:
 
"
h
t
t
p
s
:
/
/
s
c
h
e
m
a
.
o
r
g
"
,


 
 
 
 
"
@
t
y
p
e
"
:
 
"
E
v
e
n
t
"
,


 
 
 
 
"
n
a
m
e
"
:
 
`
$
{
p
.
n
a
m
e
}
 
2
0
2
6
 
C
o
h
o
r
t
 
A
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
 
T
i
m
e
l
i
n
e
`
,


 
 
 
 
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
"
:
 
`
D
e
a
d
l
i
n
e
s
 
a
n
d
 
t
r
a
c
k
i
n
g
 
r
u
l
e
s
 
f
o
r
 
t
h
e
 
$
{
p
.
n
a
m
e
}
 
p
r
o
g
r
a
m
 
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
 
w
i
n
d
o
w
.
`
,


 
 
 
 
"
s
t
a
r
t
D
a
t
e
"
:
 
p
.
s
t
a
r
t
D
a
t
e
 
?
?
 
p
.
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
S
t
a
r
t
 
?
?
 
"
2
0
2
6
-
0
1
-
1
5
T
0
0
:
0
0
:
0
0
Z
"
,


 
 
 
 
"
e
n
d
D
a
t
e
"
:
 
p
.
d
e
a
d
l
i
n
e
 
?
 
`
$
{
p
.
d
e
a
d
l
i
n
e
}
T
2
3
:
5
9
:
5
9
Z
`
 
:
 
p
.
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
D
e
a
d
l
i
n
e
 
?
?
 
"
2
0
2
6
-
1
1
-
3
0
T
2
3
:
5
9
:
5
9
Z
"
,


 
 
 
 
"
e
v
e
n
t
A
t
t
e
n
d
a
n
c
e
M
o
d
e
"
:
 
"
h
t
t
p
s
:
/
/
s
c
h
e
m
a
.
o
r
g
/
O
n
l
i
n
e
E
v
e
n
t
A
t
t
e
n
d
a
n
c
e
M
o
d
e
"
,


 
 
 
 
"
e
v
e
n
t
S
t
a
t
u
s
"
:
 
"
h
t
t
p
s
:
/
/
s
c
h
e
m
a
.
o
r
g
/
E
v
e
n
t
S
c
h
e
d
u
l
e
d
"
,


 
 
 
 
"
l
o
c
a
t
i
o
n
"
:
 
{
 
"
@
t
y
p
e
"
:
 
"
V
i
r
t
u
a
l
L
o
c
a
t
i
o
n
"
,
 
"
u
r
l
"
:
 
"
h
t
t
p
s
:
/
/
i
n
t
e
r
n
h
a
c
k
.
i
o
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
"
 
}
,


 
 
 
 
"
o
r
g
a
n
i
z
e
r
"
:
 
{
 
"
@
t
y
p
e
"
:
 
"
O
r
g
a
n
i
z
a
t
i
o
n
"
,
 
"
n
a
m
e
"
:
 
p
.
n
a
m
e
 
}


 
 
}
)
)
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
 
p
y
-
8
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
O
p
e
n
 
S
o
u
r
c
e
 
P
r
o
g
r
a
m
 
T
r
a
c
k
e
r
 
-
 
D
e
a
d
l
i
n
e
s
 
&
 
S
t
i
p
e
n
d
s
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
T
r
a
c
k
 
d
e
a
d
l
i
n
e
s
,
 
e
l
i
g
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
 
s
t
i
p
e
n
d
s
 
f
o
r
 
G
S
o
C
,
 
L
F
X
,
 
M
L
H
 
F
e
l
l
o
w
s
h
i
p
,
 
O
u
t
r
e
a
c
h
y
,
 
a
n
d
 
2
0
+
 
o
t
h
e
r
 
o
p
e
n
 
s
o
u
r
c
e
 
p
r
o
g
r
a
m
s
.
"


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
"
G
S
o
C
 
t
r
a
c
k
e
r
,
 
L
F
X
 
m
e
n
t
o
r
s
h
i
p
,
 
o
p
e
n
 
s
o
u
r
c
e
 
i
n
t
e
r
n
s
h
i
p
s
,
 
O
u
t
r
e
a
c
h
y
 
d
e
a
d
l
i
n
e
,
 
p
a
i
d
 
o
p
e
n
 
s
o
u
r
c
e
"


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
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
o
p
e
n
s
o
u
r
c
e
/
p
r
o
g
r
a
m
s
"
)
}


 
 
 
 
 
 
 
 
o
g
I
m
a
g
e
=
"
/
o
g
/
o
g
-
p
r
o
g
r
a
m
s
.
p
n
g
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
D
a
t
a
=
{
p
r
o
g
r
a
m
E
v
e
n
t
s
S
c
h
e
m
a
}


 
 
 
 
 
 
/
>


 
 
 
 
 
 
{
/
*
 
H
e
r
o
 
*
/
}


 
 
 
 
 
 
<
s
e
c
t
i
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
r
e
l
a
t
i
v
e
 
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
2
x
l
 
b
g
-
l
i
n
e
a
r
-
t
o
-
b
r
 
f
r
o
m
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
 
v
i
a
-
t
e
a
l
-
5
0
 
t
o
-
c
y
a
n
-
5
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
e
m
e
r
a
l
d
-
1
0
0
 
m
b
-
8
 
p
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
a
b
s
o
l
u
t
e
 
t
o
p
-
0
 
r
i
g
h
t
-
0
 
w
-
5
6
 
h
-
5
6
 
b
g
-
l
i
n
e
a
r
-
t
o
-
b
l
 
f
r
o
m
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
/
3
0
 
t
o
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
 
r
o
u
n
d
e
d
-
b
l
-
f
u
l
l
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
"
 
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
r
e
l
a
t
i
v
e
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
"
w
-
1
0
 
h
-
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
x
l
 
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
w
h
i
t
e
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
O
p
e
n
 
S
o
u
r
c
e
 
P
r
o
g
r
a
m
 
T
r
a
c
k
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
m
 
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
7
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
r
a
c
k
 
d
e
a
d
l
i
n
e
s
,
 
s
t
i
p
e
n
d
s
,
 
a
n
d
 
h
o
w
 
t
o
 
a
p
p
l
y
 
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
j
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
g
r
a
m


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
b
-
6
 
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


 
 
 
 
 
 
 
 
 
 
 
 
A
l
l
 
m
a
j
o
r
 
o
p
e
n
 
s
o
u
r
c
e
 
p
r
o
g
r
a
m
s
 
i
n
 
o
n
e
 
p
l
a
c
e
 
-
 
w
i
t
h
 
d
e
a
d
l
i
n
e
s
,


 
 
 
 
 
 
 
 
 
 
 
 
s
t
i
p
e
n
d
s
,
 
e
l
i
g
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
 
g
u
i
d
e
s
.
 
S
e
t


 
 
 
 
 
 
 
 
 
 
 
 
r
e
m
i
n
d
e
r
s
 
a
n
d
 
a
p
p
l
y
 
b
e
f
o
r
e
 
w
i
n
d
o
w
s
 
c
l
o
s
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
P
r
o
g
r
a
m
s
 
L
i
s
t
e
d
"
,
 
v
a
l
u
e
:
 
P
R
O
G
R
A
M
S
.
l
e
n
g
t
h
 
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
i
d
 
P
r
o
g
r
a
m
s
"
,
 
v
a
l
u
e
:
 
t
o
t
a
l
S
t
i
p
e
n
d
 
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
H
i
g
h
 
S
t
i
p
e
n
d
 
(
$
5
k
+
)
"
,
 
v
a
l
u
e
:
 
h
i
g
h
S
t
i
p
e
n
d
 
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
i
v
e
r
s
i
t
y
 
P
r
o
g
r
a
m
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
:
 
P
R
O
G
R
A
M
S
.
f
i
l
t
e
r
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
(
p
)
 
=
>
 
p
.
e
l
i
g
i
b
i
l
i
t
y
T
y
p
e
 
=
=
=
 
"
D
i
v
e
r
s
i
t
y
-
f
o
c
u
s
e
d
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
.
l
e
n
g
t
h
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
s
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
s
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
b
g
-
w
h
i
t
e
/
7
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
a
y
-
9
0
0
/
7
0
 
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
 
p
x
-
4
 
p
y
-
2
 
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
e
m
e
r
a
l
d
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
v
a
l
u
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
t
e
x
t
-
[
1
1
p
x
]
 
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
t
-
0
.
5
"
>
{
s
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
d
i
v
>


 
 
 
 
 
 
<
/
s
e
c
t
i
o
n
>




 
 
 
 
 
 
{
/
*
 
N
e
x
t
 
D
e
a
d
l
i
n
e
 
b
a
d
g
e
 
*
/
}


 
 
 
 
 
 
{
N
E
X
T
_
D
E
A
D
L
I
N
E
 
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
s
t
i
c
k
y
 
t
o
p
-
0
 
z
-
1
0
 
m
b
-
5
 
b
g
-
l
i
n
e
a
r
-
t
o
-
r
 
f
r
o
m
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
 
t
o
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
f
r
o
m
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
5
0
/
4
0
 
d
a
r
k
:
t
o
-
t
e
a
l
-
9
5
0
/
4
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
/
4
0
 
r
o
u
n
d
e
d
-
l
g
 
p
x
-
4
 
p
y
-
2
.
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
e
m
e
r
a
l
d
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
m
e
d
i
u
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
e
x
t
 
d
e
a
d
l
i
n
e
:
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
f
o
n
t
-
b
o
l
d
"
>
{
N
E
X
T
_
D
E
A
D
L
I
N
E
.
p
r
o
g
r
a
m
.
n
a
m
e
}
<
/
s
p
a
n
>
 
c
l
o
s
e
s
 
i
n
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
e
m
e
r
a
l
d
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
e
m
e
r
a
l
d
-
4
0
0
"
>
{
N
E
X
T
_
D
E
A
D
L
I
N
E
.
d
a
y
s
}
 
d
a
y
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
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
a


 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
N
E
X
T
_
D
E
A
D
L
I
N
E
.
p
r
o
g
r
a
m
.
w
e
b
s
i
t
e
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
w
h
i
t
e
 
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
6
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
e
m
e
r
a
l
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
e
m
e
r
a
l
d
-
6
0
0
 
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
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
V
i
e
w
 
&
r
a
r
r
;


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
F
i
l
t
e
r
 
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
 
s
m
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
3
 
m
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
-
1
"
>


 
 
 
 
 
 
 
 
 
 
<
S
e
a
r
c
h
 
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
 
l
e
f
t
-
3
 
t
o
p
-
1
/
2
 
-
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
y
-
1
/
2
 
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
g
r
a
y
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
e
a
r
c
h
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
)
 
=
>
 
s
e
t
S
e
a
r
c
h
(
e
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
S
e
a
r
c
h
 
p
r
o
g
r
a
m
s
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
w
-
f
u
l
l
 
p
l
-
9
 
p
r
-
4
 
p
y
-
2
.
5
 
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
6
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
l
g
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
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
0
/
2
0
 
f
o
c
u
s
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
3
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
g
r
a
y
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
-
g
r
a
y
-
5
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
2
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
S
t
a
t
u
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
:
 
s
e
l
e
c
t
e
d
S
t
a
t
u
s
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
S
T
A
T
U
S
_
O
P
T
I
O
N
S
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
:
 
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
S
t
a
t
u
s
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
E
l
i
g
i
b
i
l
i
t
y
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
:
 
s
e
l
e
c
t
e
d
E
l
i
g
i
b
i
l
i
t
y
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
E
L
I
G
I
B
I
L
I
T
Y
_
O
P
T
I
O
N
S
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
:
 
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
E
l
i
g
i
b
i
l
i
t
y
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
F
o
c
u
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
:
 
a
c
t
i
v
e
F
o
c
u
s
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
F
O
C
U
S
_
A
R
E
A
_
O
P
T
I
O
N
S
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
:
 
s
e
t
A
c
t
i
v
e
F
o
c
u
s
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
S
t
i
p
e
n
d
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
:
 
s
e
l
e
c
t
e
d
S
t
i
p
e
n
d
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
S
T
I
P
E
N
D
_
O
P
T
I
O
N
S
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
:
 
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
S
t
i
p
e
n
d
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
{
 
l
a
b
e
l
,
 
v
a
l
u
e
,
 
o
p
t
i
o
n
s
,
 
s
e
t
 
}
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
e
l
a
t
i
v
e
 
g
r
o
u
p
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
 
s
i
z
e
=
"
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
l
t
e
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
3
 
h
-
3
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
g
r
a
y
-
4
0
0
"
>
{
l
a
b
e
l
}
:
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
a
l
u
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
 
o
p
a
c
i
t
y
-
5
0
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
a
b
s
o
l
u
t
e
 
l
e
f
t
-
0
 
t
o
p
-
f
u
l
l
 
z
-
2
0
 
m
t
-
1
 
h
i
d
d
e
n
 
m
i
n
-
w
-
[
1
7
0
p
x
]
 
m
a
x
-
h
-
[
2
0
0
p
x
]
 
o
v
e
r
f
l
o
w
-
y
-
a
u
t
o
 
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
g
r
a
y
-
7
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
g
r
a
y
-
8
0
0
 
p
-
1
 
s
h
a
d
o
w
-
x
l
 
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
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
p
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
o
p
t
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
(
)
 
=
>
 
s
e
t
(
o
p
t
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
 
j
u
s
t
i
f
y
-
s
t
a
r
t
 
$
{
v
a
l
u
e
 
=
=
=
 
o
p
t
 
?
 
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
e
m
e
r
a
l
d
-
4
0
0
 
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
3
0
0
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
p
t
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


 
 
 
 
 
 
 
 
 
 
)
)
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
r
e
l
a
t
i
v
e
 
g
r
o
u
p
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
 
s
i
z
e
=
"
s
m
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
g
r
a
y
-
4
0
0
"
>
S
o
r
t
:
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
"
>
{
S
O
R
T
_
O
P
T
I
O
N
S
.
f
i
n
d
(
(
o
)
 
=
>
 
o
.
v
a
l
u
e
 
=
=
=
 
s
o
r
t
B
y
)
?
.
l
a
b
e
l
 
?
?
 
"
D
e
f
a
u
l
t
 
o
r
d
e
r
"
}
<
/
s
p
a
n
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
 
o
p
a
c
i
t
y
-
5
0
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
a
b
s
o
l
u
t
e
 
l
e
f
t
-
0
 
t
o
p
-
f
u
l
l
 
z
-
2
0
 
m
t
-
1
 
h
i
d
d
e
n
 
m
i
n
-
w
-
[
2
0
0
p
x
]
 
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
g
r
a
y
-
7
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
g
r
a
y
-
8
0
0
 
p
-
1
 
s
h
a
d
o
w
-
x
l
 
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
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
O
R
T
_
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
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
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
(
)
 
=
>
 
s
e
t
S
o
r
t
B
y
(
o
p
t
.
v
a
l
u
e
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
 
j
u
s
t
i
f
y
-
s
t
a
r
t
 
$
{
s
o
r
t
B
y
 
=
=
=
 
o
p
t
.
v
a
l
u
e
 
?
 
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
e
m
e
r
a
l
d
-
4
0
0
 
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
3
0
0
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
p
t
.
l
a
b
e
l
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


 
 
 
 
 
 
 
 
 
 
{
(
s
e
l
e
c
t
e
d
S
t
a
t
u
s
 
!
=
=
 
"
A
l
l
"
 
|
|
 
s
e
l
e
c
t
e
d
E
l
i
g
i
b
i
l
i
t
y
 
!
=
=
 
"
A
l
l
"
 
|
|
 
s
e
l
e
c
t
e
d
S
t
i
p
e
n
d
 
!
=
=
 
"
A
l
l
"
 
|
|
 
s
e
a
r
c
h
 
|
|
 
s
o
r
t
B
y
 
!
=
=
 
"
d
e
f
a
u
l
t
"
)
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
(
)
 
=
>
 
{
 
s
e
t
S
e
a
r
c
h
(
"
"
)
;
 
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
S
t
a
t
u
s
(
"
A
l
l
"
)
;
 
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
E
l
i
g
i
b
i
l
i
t
y
(
"
A
l
l
"
)
;
 
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
S
t
i
p
e
n
d
(
"
A
l
l
"
)
;
 
s
e
t
S
o
r
t
B
y
(
"
d
e
f
a
u
l
t
"
)
;
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
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
 
C
l
e
a
r


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
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
b
-
5
"
>


 
 
 
 
 
 
 
 
S
h
o
w
i
n
g
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
"
>


 
 
 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
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
{
"
 
"
}


 
 
 
 
 
 
 
 
o
f
 
{
P
R
O
G
R
A
M
S
.
l
e
n
g
t
h
}
 
p
r
o
g
r
a
m
s


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
{
/
*
 
L
i
s
t
 
*
/
}


 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
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
 
p
y
-
1
6
 
b
g
-
g
r
a
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
g
r
a
y
-
9
5
0
 
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
"
>


 
 
 
 
 
 
 
 
 
 
<
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
0
 
h
-
1
0
 
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
2
0
0
 
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
3
"
 
/
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
g
r
a
y
-
5
0
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
p
r
o
g
r
a
m
s
 
m
a
t
c
h
 
y
o
u
r
 
f
i
l
t
e
r
s


 
 
 
 
 
 
 
 
 
 
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
 
:
 
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
f
i
l
t
e
r
e
d
.
m
a
p
(
(
p
r
o
g
r
a
m
)
 
=
>
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
r
o
g
r
a
m
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
8
 
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


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
r
o
g
r
a
m
C
a
r
d
 
p
r
o
g
r
a
m
=
{
p
r
o
g
r
a
m
}
 
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


 
 
 
 
 
 
 
 
 
 
)
)
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
 
T
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
8
 
p
-
5
 
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
e
m
e
r
a
l
d
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
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
<
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
e
m
e
r
a
l
d
-
6
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
e
m
e
r
a
l
d
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
p
p
l
y
 
t
o
 
m
u
l
t
i
p
l
e
 
p
r
o
g
r
a
m
s
 
s
i
m
u
l
t
a
n
e
o
u
s
l
y


 
 
 
 
 
 
 
 
 
 
 
 
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
e
m
e
r
a
l
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
4
0
0
 
m
t
-
1
 
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
S
o
C
 
a
n
d
 
O
u
t
r
e
a
c
h
y
 
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
 
w
i
n
d
o
w
s
 
o
f
t
e
n
 
o
v
e
r
l
a
p
 
w
i
t
h
 
G
S
S
o
C


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
d
 
H
a
c
k
t
o
b
e
r
f
e
s
t
.
 
D
i
v
e
r
s
i
f
y
 
y
o
u
r
 
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
s
 
-
 
e
a
c
h
 
p
r
o
g
r
a
m
 
h
a
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
f
f
e
r
e
n
t
 
e
v
a
l
u
a
t
i
o
n
 
c
r
i
t
e
r
i
a
 
a
n
d
 
y
o
u
r
 
c
o
n
t
r
i
b
u
t
i
o
n
s
 
t
o
 
o
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
j
e
c
t
 
c
a
n
 
s
t
r
e
n
g
t
h
e
n
 
p
r
o
p
o
s
a
l
s
 
i
n
 
o
t
h
e
r
s
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


 
 
)
;


}
