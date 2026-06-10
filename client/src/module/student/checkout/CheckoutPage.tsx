
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
E
f
f
e
c
t
,
 
u
s
e
R
e
f
,
 
u
s
e
C
a
l
l
b
a
c
k
 
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
i
g
a
t
e
,
 
u
s
e
N
a
v
i
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
r
e
a
c
t
-
r
o
u
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


 
 
C
h
e
c
k
,


 
 
W
a
n
d
2
,


 
 
Z
a
p
,


 
 
S
h
i
e
l
d
,


 
 
R
o
c
k
e
t
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


 
 
S
t
a
r
,


 
 
C
r
e
d
i
t
C
a
r
d
,


 
 
L
o
c
k
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


 
 
F
i
l
e
T
e
x
t
,


 
 
S
c
a
n
S
e
a
r
c
h
,


 
 
B
u
i
l
d
i
n
g
2
,


 
 
M
a
p
,


 
 
B
r
i
e
f
c
a
s
e
,


 
 
L
o
a
d
e
r
2
,


 
 
C
o
d
e
2
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


 
 
B
r
a
i
n
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


 
 
G
i
t
P
u
l
l
R
e
q
u
e
s
t
,


 
 
A
w
a
r
d
,


 
 
C
r
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
 
}
 
f
r
o
m
 
"
d
o
d
o
p
a
y
m
e
n
t
s
-
c
h
e
c
k
o
u
t
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
 
u
s
e
A
u
t
h
S
t
o
r
e
 
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
a
u
t
h
.
s
t
o
r
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




t
y
p
e
 
P
l
a
n
K
e
y
 
=
 
"
f
r
e
e
"
 
|
 
"
p
r
o
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
l
a
n
 
{


 
 
k
e
y
:
 
P
l
a
n
K
e
y
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


 
 
p
r
i
c
e
:
 
n
u
m
b
e
r
;


 
 
y
e
a
r
l
y
P
r
i
c
e
:
 
n
u
m
b
e
r
;


 
 
b
a
d
g
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
 
R
e
a
c
t
.
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


 
 
f
e
a
t
u
r
e
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


 
 
h
i
g
h
l
i
g
h
t
e
d
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
 
p
l
a
n
s
:
 
P
l
a
n
[
]
 
=
 
[


 
 
{


 
 
 
 
k
e
y
:
 
"
f
r
e
e
"
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
"
,


 
 
 
 
p
r
i
c
e
:
 
0
,


 
 
 
 
y
e
a
r
l
y
P
r
i
c
e
:
 
0
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
 
t
h
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
s
 
t
o
 
e
x
p
l
o
r
e
 
y
o
u
r
 
c
a
r
e
e
r
 
p
a
t
h
.
"
,


 
 
 
 
i
c
o
n
:
 
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
w
-
5
 
h
-
5
"
 
/
>
,


 
 
 
 
f
e
a
t
u
r
e
s
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
l
l
 
p
u
b
l
i
c
 
j
o
b
s
"
,


 
 
 
 
 
 
"
5
 
j
o
b
 
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
 
/
 
m
o
n
t
h
"
,


 
 
 
 
 
 
"
B
a
s
i
c
 
A
T
S
 
s
c
o
r
e
 
(
3
 
s
c
a
n
s
 
/
 
m
o
n
t
h
)
"
,


 
 
 
 
 
 
"
C
a
r
e
e
r
 
p
a
t
h
 
e
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


 
 
 
 
 
 
"
V
i
e
w
 
c
o
m
p
a
n
y
 
p
r
o
f
i
l
e
s
"
,


 
 
 
 
 
 
"
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
 
(
l
i
m
i
t
e
d
 
t
o
p
i
c
s
)
"
,


 
 
 
 
 
 
"
O
p
e
n
 
s
o
u
r
c
e
 
r
e
p
o
 
d
i
s
c
o
v
e
r
y
 
(
p
a
g
i
n
a
t
e
d
)
"
,


 
 
 
 
 
 
"
G
S
o
C
 
o
r
g
 
b
r
o
w
s
e
r
"
,


 
 
 
 
 
 
"
F
i
r
s
t
 
P
R
 
&
 
G
i
t
 
g
u
i
d
e
s
"
,


 
 
 
 
 
 
"
3
 
r
e
p
o
 
s
u
g
g
e
s
t
i
o
n
s
 
/
 
m
o
n
t
h
"
,


 
 
 
 
 
 
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
 
a
c
c
e
s
s
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
k
e
y
:
 
"
p
r
o
"
,


 
 
 
 
n
a
m
e
:
 
"
P
r
o
"
,


 
 
 
 
p
r
i
c
e
:
 
2
4
9
,


 
 
 
 
y
e
a
r
l
y
P
r
i
c
e
:
 
2
4
9
9
,


 
 
 
 
b
a
d
g
e
:
 
"
M
o
s
t
 
P
o
p
u
l
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
U
n
l
o
c
k
 
e
v
e
r
y
 
t
o
o
l
 
t
o
 
s
t
a
n
d
 
o
u
t
 
a
n
d
 
l
a
n
d
 
y
o
u
r
 
d
r
e
a
m
 
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
.
"
,


 
 
 
 
i
c
o
n
:
 
<
R
o
c
k
e
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
5
 
h
-
5
"
 
/
>
,


 
 
 
 
h
i
g
h
l
i
g
h
t
e
d
:
 
t
r
u
e
,


 
 
 
 
f
e
a
t
u
r
e
s
:
 
[


 
 
 
 
 
 
"
E
v
e
r
y
t
h
i
n
g
 
i
n
 
F
r
e
e
"
,


 
 
 
 
 
 
"
U
n
l
i
m
i
t
e
d
 
j
o
b
 
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
"
,


 
 
 
 
 
 
"
U
n
l
i
m
i
t
e
d
 
A
T
S
 
s
c
a
n
s
 
&
 
A
I
 
t
i
p
s
"
,


 
 
 
 
 
 
"
L
a
T
e
X
 
r
e
s
u
m
e
 
e
d
i
t
o
r
 
&
 
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
"
,


 
 
 
 
 
 
"
F
u
l
l
 
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
 
(
a
l
l
 
t
o
p
i
c
s
,
 
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
 
p
a
t
t
e
r
n
s
)
"
,


 
 
 
 
 
 
"
S
Q
L
 
p
r
a
c
t
i
c
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
"
,


 
 
 
 
 
 
"
A
p
t
i
t
u
d
e
 
p
r
a
c
t
i
c
e
 
(
t
o
p
i
c
-
w
i
s
e
 
+
 
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
)
"
,


 
 
 
 
 
 
"
P
r
o
c
t
o
r
e
d
 
s
k
i
l
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
 
t
e
s
t
s
"
,


 
 
 
 
 
 
"
C
a
r
e
e
r
 
r
o
a
d
m
a
p
s
 
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
 
t
r
a
c
k
i
n
g
"
,


 
 
 
 
 
 
"
O
p
e
n
 
s
o
u
r
c
e
 
f
u
l
l
 
a
n
a
l
y
t
i
c
s
 
&
 
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
r
e
n
d
s
"
,


 
 
 
 
 
 
"
G
S
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
 
b
u
i
l
d
e
r
 
&
 
p
r
o
g
r
a
m
 
t
r
a
c
k
e
r
"
,


 
 
 
 
 
 
"
U
n
l
i
m
i
t
e
d
 
r
e
p
o
 
s
u
g
g
e
s
t
i
o
n
s
"
,


 
 
 
 
 
 
"
O
S
S
 
p
o
r
t
f
o
l
i
o
 
p
a
g
e
 
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
 
U
R
L
"
,


 
 
 
 
 
 
"
G
o
o
d
 
f
i
r
s
t
 
i
s
s
u
e
s
 
l
i
v
e
 
f
e
e
d
 
(
u
n
l
i
m
i
t
e
d
)
"
,


 
 
 
 
 
 
"
S
t
r
e
a
k
 
f
r
e
e
z
e
 
t
o
k
e
n
s
"
,


 
 
 
 
 
 
"
W
e
e
k
l
y
 
d
i
g
e
s
t
 
e
m
a
i
l
"
,


 
 
 
 
 
 
"
P
r
i
o
r
i
t
y
 
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
 
p
l
a
c
e
m
e
n
t
"
,


 
 
 
 
 
 
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
 
w
i
t
h
 
v
e
r
i
f
i
e
d
 
b
a
d
g
e
 
U
R
L
"
,


 
 
 
 
 
 
"
A
d
v
a
n
c
e
d
 
c
o
m
p
a
n
y
 
s
e
a
r
c
h
 
(
Y
C
 
+
 
l
o
c
a
l
)
"
,


 
 
 
 
 
 
"
P
u
b
l
i
c
 
s
h
a
r
e
a
b
l
e
 
p
r
o
f
i
l
e
"
,


 
 
 
 
 
 
"
P
r
i
o
r
i
t
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
 
b
a
d
g
e
"
,


 
 
 
 
 
 
"
E
m
a
i
l
 
s
u
p
p
o
r
t
"
,


 
 
 
 
]
,


 
 
}
,


]
;




c
o
n
s
t
 
t
e
s
t
i
m
o
n
i
a
l
s
 
=
 
[


 
 
{
 
n
a
m
e
:
 
"
P
r
i
y
a
 
S
.
"
,
 
r
o
l
e
:
 
"
S
D
E
 
I
n
t
e
r
n
 
@
 
G
o
o
g
l
e
"
,
 
t
e
x
t
:
 
"
T
h
e
 
A
T
S
 
s
c
a
n
n
e
r
 
h
e
l
p
e
d
 
m
e
 
o
p
t
i
m
i
z
e
 
m
y
 
r
e
s
u
m
e
.
 
G
o
t
 
3
 
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
a
l
l
s
 
w
i
t
h
i
n
 
a
 
w
e
e
k
!
"
,
 
a
v
a
t
a
r
:
 
"
P
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
R
a
h
u
l
 
M
.
"
,
 
r
o
l
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
 
@
 
C
N
C
F
"
,
 
t
e
x
t
:
 
"
O
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
i
s
c
o
v
e
r
y
 
f
e
a
t
u
r
e
 
l
e
d
 
m
e
 
t
o
 
m
y
 
f
i
r
s
t
 
G
S
o
C
 
p
r
o
j
e
c
t
.
 
T
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
 
w
a
s
 
i
n
v
a
l
u
a
b
l
e
.
"
,
 
a
v
a
t
a
r
:
 
"
R
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
A
n
a
n
y
a
 
K
.
"
,
 
r
o
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
 
I
n
t
e
r
n
 
@
 
R
a
z
o
r
p
a
y
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
 
p
l
a
n
 
w
a
s
 
t
h
e
 
b
e
s
t
 
i
n
v
e
s
t
m
e
n
t
.
 
T
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
 
a
n
d
 
s
k
i
l
l
 
t
e
s
t
s
 
h
e
l
p
e
d
 
m
e
 
c
r
a
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
s
.
"
,
 
a
v
a
t
a
r
:
 
"
A
"
 
}
,


]
;




c
o
n
s
t
 
f
a
q
s
 
=
 
[


 
 
{
 
q
:
 
"
C
a
n
 
I
 
c
a
n
c
e
l
 
a
n
y
t
i
m
e
?
"
,
 
a
:
 
"
Y
e
s
!
 
Y
o
u
 
c
a
n
 
c
a
n
c
e
l
 
y
o
u
r
 
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
 
a
t
 
a
n
y
 
t
i
m
e
.
 
Y
o
u
'
l
l
 
r
e
t
a
i
n
 
a
c
c
e
s
s
 
u
n
t
i
l
 
t
h
e
 
e
n
d
 
o
f
 
y
o
u
r
 
b
i
l
l
i
n
g
 
p
e
r
i
o
d
.
"
 
}
,


 
 
{
 
q
:
 
"
I
s
 
t
h
e
r
e
 
a
 
s
t
u
d
e
n
t
 
d
i
s
c
o
u
n
t
?
"
,
 
a
:
 
"
O
u
r
 
P
r
o
 
p
l
a
n
 
i
s
 
a
l
r
e
a
d
y
 
p
r
i
c
e
d
 
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
 
a
t
 
j
u
s
t
 
₹
2
4
9
/
m
o
n
t
h
.
 
W
e
 
a
l
s
o
 
o
f
f
e
r
 
a
d
d
i
t
i
o
n
a
l
 
d
i
s
c
o
u
n
t
s
 
f
o
r
 
v
e
r
i
f
i
e
d
 
.
e
d
u
 
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
e
s
.
"
 
}
,


 
 
{
 
q
:
 
"
W
h
a
t
 
p
a
y
m
e
n
t
 
m
e
t
h
o
d
s
 
d
o
 
y
o
u
 
a
c
c
e
p
t
?
"
,
 
a
:
 
"
W
e
 
a
c
c
e
p
t
 
a
l
l
 
m
a
j
o
r
 
c
r
e
d
i
t
/
d
e
b
i
t
 
c
a
r
d
s
,
 
U
P
I
,
 
n
e
t
 
b
a
n
k
i
n
g
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
r
 
w
a
l
l
e
t
s
 
t
h
r
o
u
g
h
 
o
u
r
 
s
e
c
u
r
e
 
p
a
y
m
e
n
t
 
p
a
r
t
n
e
r
.
"
 
}
,


 
 
{
 
q
:
 
"
C
a
n
 
I
 
u
p
g
r
a
d
e
 
o
r
 
d
o
w
n
g
r
a
d
e
 
l
a
t
e
r
?
"
,
 
a
:
 
"
A
b
s
o
l
u
t
e
l
y
.
 
Y
o
u
 
c
a
n
 
s
w
i
t
c
h
 
p
l
a
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
 
f
r
o
m
 
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
.
 
P
r
o
r
a
t
e
d
 
a
d
j
u
s
t
m
e
n
t
s
 
a
p
p
l
y
 
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
 
}
,


]
;




c
o
n
s
t
 
H
O
W
_
I
T
_
W
O
R
K
S
 
=
 
[


 
 
{
 
s
t
e
p
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
C
h
o
o
s
e
 
y
o
u
r
 
p
l
a
n
"
,
 
d
e
s
c
:
 
"
P
i
c
k
 
m
o
n
t
h
l
y
 
o
r
 
y
e
a
r
l
y
 
b
i
l
l
i
n
g
.
 
Y
e
a
r
l
y
 
s
a
v
e
s
 
y
o
u
 
2
5
%
.
"
 
}
,


 
 
{
 
s
t
e
p
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
P
a
y
 
s
e
c
u
r
e
l
y
"
,
 
d
e
s
c
:
 
"
C
a
r
d
s
,
 
U
P
I
,
 
n
e
t
 
b
a
n
k
i
n
g
,
 
a
l
l
 
o
p
t
i
o
n
s
 
s
u
p
p
o
r
t
e
d
.
"
 
}
,


 
 
{
 
s
t
e
p
:
 
"
0
3
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
n
l
o
c
k
 
e
v
e
r
y
t
h
i
n
g
 
i
n
s
t
a
n
t
l
y
"
,
 
d
e
s
c
:
 
"
A
l
l
 
P
r
o
 
f
e
a
t
u
r
e
s
 
a
c
t
i
v
a
t
e
 
i
m
m
e
d
i
a
t
e
l
y
 
a
f
t
e
r
 
p
a
y
m
e
n
t
.
"
 
}
,


]
;




c
o
n
s
t
 
F
E
A
T
U
R
E
_
T
I
L
E
S
 
=
 
[


 
 
{
 
i
c
o
n
:
 
<
S
c
a
n
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
w
-
4
 
h
-
4
"
 
/
>
,
 
l
a
b
e
l
:
 
"
U
n
l
i
m
i
t
e
d
 
A
T
S
 
S
c
a
n
s
"
 
}
,


 
 
{
 
i
c
o
n
:
 
<
B
r
i
e
f
c
a
s
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
"
 
/
>
,
 
l
a
b
e
l
:
 
"
U
n
l
i
m
i
t
e
d
 
A
p
p
l
y
"
 
}
,


 
 
{
 
i
c
o
n
:
 
<
F
i
l
e
T
e
x
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
,
 
l
a
b
e
l
:
 
"
L
a
T
e
X
 
R
e
s
u
m
e
 
E
d
i
t
o
r
"
 
}
,


 
 
{
 
i
c
o
n
:
 
<
W
a
n
d
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
4
 
h
-
4
"
 
/
>
,
 
l
a
b
e
l
:
 
"
A
I
 
C
o
v
e
r
 
L
e
t
t
e
r
"
 
}
,


 
 
{
 
i
c
o
n
:
 
<
C
o
d
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
4
 
h
-
4
"
 
/
>
,
 
l
a
b
e
l
:
 
"
F
u
l
l
 
D
S
A
 
P
r
a
c
t
i
c
e
"
 
}
,


 
 
{
 
i
c
o
n
:
 
<
D
a
t
a
b
a
s
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
"
 
/
>
,
 
l
a
b
e
l
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
 
}
,


 
 
{
 
i
c
o
n
:
 
<
B
r
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
w
-
4
 
h
-
4
"
 
/
>
,
 
l
a
b
e
l
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
 
P
r
a
c
t
i
c
e
"
 
}
,


 
 
{
 
i
c
o
n
:
 
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
 
c
l
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
,
 
l
a
b
e
l
:
 
"
S
k
i
l
l
 
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
"
 
}
,


 
 
{
 
i
c
o
n
:
 
<
G
i
t
P
u
l
l
R
e
q
u
e
s
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
,
 
l
a
b
e
l
:
 
"
O
S
S
 
A
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


 
 
{
 
i
c
o
n
:
 
<
M
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
4
 
h
-
4
"
 
/
>
,
 
l
a
b
e
l
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
 
}
,


 
 
{
 
i
c
o
n
:
 
<
A
w
a
r
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
4
 
h
-
4
"
 
/
>
,
 
l
a
b
e
l
:
 
"
G
r
a
n
t
 
A
l
e
r
t
s
"
 
}
,


 
 
{
 
i
c
o
n
:
 
<
B
u
i
l
d
i
n
g
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
4
 
h
-
4
"
 
/
>
,
 
l
a
b
e
l
:
 
"
Y
C
 
C
o
m
p
a
n
y
 
S
e
a
r
c
h
"
 
}
,


 
 
{
 
i
c
o
n
:
 
<
S
t
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
,
 
l
a
b
e
l
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
 
B
o
o
s
t
"
 
}
,


 
 
{
 
i
c
o
n
:
 
<
C
r
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
4
 
h
-
4
"
 
/
>
,
 
l
a
b
e
l
:
 
"
V
e
r
i
f
i
e
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
 
C
h
e
c
k
o
u
t
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
 
{
 
u
s
e
r
,
 
s
e
t
U
s
e
r
 
}
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
)
;


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
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
 
[
b
i
l
l
i
n
g
,
 
s
e
t
B
i
l
l
i
n
g
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
"
m
o
n
t
h
l
y
"
 
|
 
"
y
e
a
r
l
y
"
>
(
"
m
o
n
t
h
l
y
"
)
;


 
 
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
F
a
q
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
F
a
q
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
n
u
m
b
e
r
 
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
l
o
a
d
i
n
g
,
 
s
e
t
L
o
a
d
i
n
g
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
P
l
a
n
K
e
y
 
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
p
a
y
m
e
n
t
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
P
a
y
m
e
n
t
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
"
s
u
c
c
e
s
s
"
 
|
 
"
f
a
i
l
e
d
"
 
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
 
d
o
d
o
I
n
i
t
i
a
l
i
z
e
d
 
=
 
u
s
e
R
e
f
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
 
p
o
l
l
S
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
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
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


 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
1
0
;
 
i
+
+
)
 
{


 
 
 
 
 
 
a
w
a
i
t
 
n
e
w
 
P
r
o
m
i
s
e
(
(
r
)
 
=
>
 
s
e
t
T
i
m
e
o
u
t
(
r
,
 
2
0
0
0
)
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
 
{
 
d
a
t
a
 
}
 
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
g
e
t
(
"
/
a
u
t
h
/
m
e
"
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
r
o
f
i
l
e
 
=
 
d
a
t
a
.
u
s
e
r
 
?
?
 
d
a
t
a
;


 
 
 
 
 
 
 
 
i
f
 
(
p
r
o
f
i
l
e
.
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
S
t
a
t
u
s
 
=
=
=
 
"
A
C
T
I
V
E
"
 
&
&
 
p
r
o
f
i
l
e
.
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
P
l
a
n
 
!
=
=
 
"
F
R
E
E
"
)
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
u
s
e
r
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
U
s
e
r
(
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
.
.
.
u
s
e
r
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
P
l
a
n
:
 
p
r
o
f
i
l
e
.
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
P
l
a
n
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
S
t
a
t
u
s
:
 
p
r
o
f
i
l
e
.
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
S
t
a
t
u
s
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
E
n
d
D
a
t
e
:
 
p
r
o
f
i
l
e
.
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
E
n
d
D
a
t
e
,


 
 
 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
n
a
v
i
g
a
t
e
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
 
{
 
r
e
p
l
a
c
e
:
 
t
r
u
e
 
}
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
 
p
o
l
l
i
n
g
 
e
r
r
o
r
s


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}
,
 
[
u
s
e
r
,
 
s
e
t
U
s
e
r
,
 
n
a
v
i
g
a
t
e
]
)
;




 
 
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


 
 
 
 
i
f
 
(
d
o
d
o
I
n
i
t
i
a
l
i
z
e
d
.
c
u
r
r
e
n
t
)
 
r
e
t
u
r
n
;


 
 
 
 
d
o
d
o
I
n
i
t
i
a
l
i
z
e
d
.
c
u
r
r
e
n
t
 
=
 
t
r
u
e
;




 
 
 
 
c
o
n
s
t
 
m
o
d
e
 
=
 
i
m
p
o
r
t
.
m
e
t
a
.
e
n
v
.
V
I
T
E
_
D
O
D
O
_
M
O
D
E
 
=
=
=
 
"
l
i
v
e
"
 
?
 
"
l
i
v
e
"
 
:
 
"
t
e
s
t
"
;




 
 
 
 
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
.
I
n
i
t
i
a
l
i
z
e
(
{


 
 
 
 
 
 
m
o
d
e
,


 
 
 
 
 
 
d
i
s
p
l
a
y
T
y
p
e
:
 
"
o
v
e
r
l
a
y
"
,


 
 
 
 
 
 
o
n
E
v
e
n
t
:
 
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
e
v
e
n
t
.
e
v
e
n
t
_
t
y
p
e
 
=
=
=
 
"
c
h
e
c
k
o
u
t
.
s
t
a
t
u
s
"
)
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
a
t
u
s
 
=
 
(
e
v
e
n
t
.
d
a
t
a
?
.
m
e
s
s
a
g
e
 
a
s
 
{
 
s
t
a
t
u
s
?
:
 
s
t
r
i
n
g
 
}
)
?
.
s
t
a
t
u
s
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
s
t
a
t
u
s
 
=
=
=
 
"
s
u
c
c
e
e
d
e
d
"
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
a
y
m
e
n
t
S
t
a
t
u
s
(
"
s
u
c
c
e
s
s
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
n
u
l
l
)
;


 
 
 
 
 
 
 
 
 
 
 
 
p
o
l
l
S
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
(
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
t
a
t
u
s
 
=
=
=
 
"
f
a
i
l
e
d
"
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
a
y
m
e
n
t
S
t
a
t
u
s
(
"
f
a
i
l
e
d
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
n
u
l
l
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
i
f
 
(
e
v
e
n
t
.
e
v
e
n
t
_
t
y
p
e
 
=
=
=
 
"
c
h
e
c
k
o
u
t
.
c
l
o
s
e
d
"
)
 
{


 
 
 
 
 
 
 
 
 
 
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
.
C
h
e
c
k
o
u
t
.
c
l
o
s
e
(
)
;


 
 
 
 
 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
n
u
l
l
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
,


 
 
 
 
}
)
;


 
 
}
,
 
[
p
o
l
l
S
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
]
)
;




 
 
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


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
{


 
 
 
 
 
 
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
.
C
h
e
c
k
o
u
t
.
c
l
o
s
e
(
)
;


 
 
 
 
}
;


 
 
}
,
 
[
]
)
;




 
 
i
f
 
(
u
s
e
r
?
.
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
S
t
a
t
u
s
 
=
=
=
 
"
A
C
T
I
V
E
"
 
&
&
 
u
s
e
r
.
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
P
l
a
n
 
!
=
=
 
"
F
R
E
E
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
N
a
v
i
g
a
t
e
 
t
o
=
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
p
r
o
f
i
l
e
"
 
r
e
p
l
a
c
e
 
/
>
;


 
 
}




 
 
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
S
e
l
e
c
t
P
l
a
n
 
=
 
a
s
y
n
c
 
(
p
l
a
n
K
e
y
:
 
P
l
a
n
K
e
y
)
 
=
>
 
{


 
 
 
 
i
f
 
(
p
l
a
n
K
e
y
 
=
=
=
 
"
f
r
e
e
"
)
 
r
e
t
u
r
n
;




 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
p
l
a
n
K
e
y
)
;


 
 
 
 
s
e
t
P
a
y
m
e
n
t
S
t
a
t
u
s
(
n
u
l
l
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
 
{
 
d
a
t
a
 
}
 
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
(
"
/
p
a
y
m
e
n
t
s
/
c
r
e
a
t
e
-
c
h
e
c
k
o
u
t
"
,
 
{
 
p
l
a
n
:
 
p
l
a
n
K
e
y
,
 
b
i
l
l
i
n
g
 
}
)
;




 
 
 
 
 
 
i
f
 
(
!
d
a
t
a
.
c
h
e
c
k
o
u
t
U
r
l
)
 
t
h
r
o
w
 
n
e
w
 
E
r
r
o
r
(
"
N
o
 
c
h
e
c
k
o
u
t
 
U
R
L
 
r
e
t
u
r
n
e
d
"
)
;




 
 
 
 
 
 
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
.
C
h
e
c
k
o
u
t
.
o
p
e
n
(
{
 
c
h
e
c
k
o
u
t
U
r
l
:
 
d
a
t
a
.
c
h
e
c
k
o
u
t
U
r
l
 
}
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
P
a
y
m
e
n
t
S
t
a
t
u
s
(
"
f
a
i
l
e
d
"
)
;


 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
n
u
l
l
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
r
e
l
a
t
i
v
e
 
p
b
-
1
6
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
U
p
g
r
a
d
e
 
t
o
 
P
r
o
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




 
 
 
 
 
 
{
/
*
 
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
i
x
e
d
 
i
n
s
e
t
-
0
 
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
 
-
z
-
1
0
 
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
a
b
s
o
l
u
t
e
 
-
t
o
p
-
4
0
 
-
r
i
g
h
t
-
4
0
 
w
-
1
6
0
 
h
-
1
6
0
 
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
9
0
0
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
f
u
l
l
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
3
0
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
a
b
s
o
l
u
t
e
 
-
b
o
t
t
o
m
-
4
0
 
-
l
e
f
t
-
4
0
 
w
-
1
4
0
 
h
-
1
4
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
9
0
0
/
3
0
 
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
l
u
r
-
3
x
l
 
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
 
P
a
y
m
e
n
t
 
s
t
a
t
u
s
 
b
a
n
n
e
r
 
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
p
a
y
m
e
n
t
S
t
a
t
u
s
 
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
 
-
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


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
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
 
-
1
6
 
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
{
`
m
b
-
6
 
p
x
-
4
 
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
m
d
 
b
o
r
d
e
r
 
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
c
e
n
t
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
y
m
e
n
t
S
t
a
t
u
s
 
=
=
=
 
"
s
u
c
c
e
s
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
2
0
 
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
l
i
m
e
-
7
0
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
b
g
-
r
e
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
r
e
d
-
9
0
0
/
2
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
8
0
0
 
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
t
e
x
t
-
r
e
d
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
a
y
m
e
n
t
S
t
a
t
u
s
 
=
=
=
 
"
s
u
c
c
e
s
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
P
a
y
m
e
n
t
 
s
u
c
c
e
s
s
f
u
l
 
—
 
y
o
u
r
 
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
 
i
s
 
n
o
w
 
a
c
t
i
v
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
P
a
y
m
e
n
t
 
f
a
i
l
e
d
.
 
P
l
e
a
s
e
 
t
r
y
 
a
g
a
i
n
 
o
r
 
c
o
n
t
a
c
t
 
s
u
p
p
o
r
t
.
"
}


 
 
 
 
 
 
 
 
 
 
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
 
2
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
5
,
 
e
a
s
e
:
 
[
0
.
2
2
,
 
1
,
 
0
.
3
6
,
 
1
]
 
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
c
e
n
t
e
r
 
m
b
-
1
2
 
m
t
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
5
0
0
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
/
 
p
r
i
c
i
n
g


 
 
 
 
 
 
 
 
<
/
p
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
5
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
3
"
>


 
 
 
 
 
 
 
 
 
 
O
n
e
 
p
l
a
n
.
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
E
v
e
r
y
t
h
i
n
g
 
u
n
l
o
c
k
e
d
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
b
a
s
e
 
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
a
x
-
w
-
l
g
 
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
8
"
>


 
 
 
 
 
 
 
 
 
 
U
n
l
i
m
i
t
e
d
 
A
T
S
 
s
c
a
n
s
,
 
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
,
 
s
k
i
l
l
 
t
e
s
t
s
,
 
A
I
 
t
o
o
l
s
,
 
a
n
d
 
m
o
r
e
 
—
 
f
o
r
 
l
e
s
s
 
t
h
a
n
 
a
 
c
o
f
f
e
e
 
a
 
w
e
e
k
.


 
 
 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
 
 
{
/
*
 
B
i
l
l
i
n
g
 
t
o
g
g
l
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
0
.
5
 
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
1
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
 
s
e
t
B
i
l
l
i
n
g
(
"
m
o
n
t
h
l
y
"
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
p
x
-
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
i
l
l
i
n
g
 
=
=
=
 
"
m
o
n
t
h
l
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
s
t
o
n
e
-
9
5
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
7
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
s
t
o
n
e
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
M
o
n
t
h
l
y


 
 
 
 
 
 
 
 
 
 
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
 
s
e
t
B
i
l
l
i
n
g
(
"
y
e
a
r
l
y
"
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
p
x
-
5
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
i
l
l
i
n
g
 
=
=
=
 
"
y
e
a
r
l
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
s
t
o
n
e
-
9
5
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
7
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
s
t
o
n
e
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
Y
e
a
r
l
y


 
 
 
 
 
 
 
 
 
 
 
 
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
1
.
5
 
p
y
-
0
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
-
2
5
%


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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




 
 
 
 
 
 
{
/
*
 
P
r
i
c
i
n
g
 
c
a
r
d
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
2
 
g
a
p
-
4
 
m
b
-
2
0
 
m
a
x
-
w
-
3
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
p
l
a
n
s
.
m
a
p
(
(
p
l
a
n
,
 
i
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
l
a
n
.
k
e
y
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
2
4
 
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
e
l
a
y
:
 
0
.
1
 
+
 
i
 
*
 
0
.
1
 
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
{
`
r
e
l
a
t
i
v
e
 
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
6
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
n
.
h
i
g
h
l
i
g
h
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
w
h
i
t
e
/
2
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
B
a
d
g
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
b
a
d
g
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
a
b
s
o
l
u
t
e
 
-
t
o
p
-
3
 
l
e
f
t
-
6
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
b
a
d
g
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


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
I
c
o
n
 
+
 
n
a
m
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
{
`
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
s
m
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
n
.
h
i
g
h
l
i
g
h
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
i
c
o
n
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
{
`
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
 
$
{
p
l
a
n
.
h
i
g
h
l
i
g
h
t
e
d
 
?
 
"
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
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
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
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
r
i
c
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
b
a
s
e
l
i
n
e
 
g
a
p
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
 
$
{
p
l
a
n
.
h
i
g
h
l
i
g
h
t
e
d
 
?
 
"
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
9
5
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
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
p
r
i
c
e
 
=
=
=
 
0
 
?
 
"
₹
0
"
 
:
 
`
₹
$
{
b
i
l
l
i
n
g
 
=
=
=
 
"
m
o
n
t
h
l
y
"
 
?
 
p
l
a
n
.
p
r
i
c
e
 
:
 
p
l
a
n
.
y
e
a
r
l
y
P
r
i
c
e
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
p
r
i
c
e
 
>
 
0
 
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
{
`
t
e
x
t
-
s
m
 
$
{
p
l
a
n
.
h
i
g
h
l
i
g
h
t
e
d
 
?
 
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
4
0
0
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
{
b
i
l
l
i
n
g
 
=
=
=
 
"
m
o
n
t
h
l
y
"
 
?
 
"
m
o
"
 
:
 
"
y
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
i
l
l
i
n
g
 
=
=
=
 
"
y
e
a
r
l
y
"
 
&
&
 
p
l
a
n
.
p
r
i
c
e
 
>
 
0
 
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
x
s
 
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
t
-
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
a
v
e
 
₹
{
p
l
a
n
.
p
r
i
c
e
 
*
 
1
2
 
-
 
p
l
a
n
.
y
e
a
r
l
y
P
r
i
c
e
}
 
v
s
 
m
o
n
t
h
l
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
t
e
x
t
-
s
m
 
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
 
$
{
p
l
a
n
.
h
i
g
h
l
i
g
h
t
e
d
 
?
 
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
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
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
 
C
T
A
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
h
a
n
d
l
e
S
e
l
e
c
t
P
l
a
n
(
p
l
a
n
.
k
e
y
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
l
o
a
d
i
n
g
 
!
=
=
 
n
u
l
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
{
`
w
-
f
u
l
l
 
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
s
m
 
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
 
g
a
p
-
2
 
m
b
-
6
 
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
5
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
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
n
.
h
i
g
h
l
i
g
h
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
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
=
=
=
 
p
l
a
n
.
k
e
y
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
4
 
h
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
s
p
i
n
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
p
l
a
n
.
p
r
i
c
e
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
C
u
r
r
e
n
t
 
P
l
a
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
e
t
 
P
r
o


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
F
e
a
t
u
r
e
 
l
i
s
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
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
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
n
.
f
e
a
t
u
r
e
s
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
l
i
 
k
e
y
=
{
f
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
.
5
 
t
e
x
t
-
s
m
 
$
{
p
l
a
n
.
h
i
g
h
l
i
g
h
t
e
d
 
?
 
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
3
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
C
h
e
c
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
{
`
w
-
4
 
h
-
4
 
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
 
$
{
p
l
a
n
.
h
i
g
h
l
i
g
h
t
e
d
 
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
5
0
0
"
}
`
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
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




 
 
 
 
 
 
{
/
*
 
H
o
w
 
i
t
 
w
o
r
k
s
 
*
/
}


 
 
 
 
 
 
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
 
2
4
 
}
}


 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
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


 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
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
m
b
-
2
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
5
0
0
 
m
b
-
6
 
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


 
 
 
 
 
 
 
 
 
 
/
 
h
o
w
 
i
t
 
w
o
r
k
s


 
 
 
 
 
 
 
 
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
3
 
m
a
x
-
w
-
3
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
H
O
W
_
I
T
_
W
O
R
K
S
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
i
t
e
m
.
s
t
e
p
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
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
e
l
a
y
:
 
i
 
*
 
0
.
0
8
 
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
3
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
s
t
e
p
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
w
h
i
t
e
 
m
b
-
1
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
d
e
s
c
}
<
/
p
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




 
 
 
 
 
 
{
/
*
 
F
e
a
t
u
r
e
 
t
i
l
e
s
 
*
/
}


 
 
 
 
 
 
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
 
2
4
 
}
}


 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
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


 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
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
m
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
b
-
8
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
5
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
/
 
w
h
a
t
 
y
o
u
 
u
n
l
o
c
k


 
 
 
 
 
 
 
 
 
 
<
/
p
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
E
v
e
r
y
t
h
i
n
g
 
i
n
 
P
r
o
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
2
 
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
4
 
g
a
p
-
2
 
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
"
>


 
 
 
 
 
 
 
 
 
 
{
F
E
A
T
U
R
E
_
T
I
L
E
S
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
w
-
8
 
h
-
8
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
i
c
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
l
e
a
d
i
n
g
-
s
n
u
g
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




 
 
 
 
 
 
{
/
*
 
T
e
s
t
i
m
o
n
i
a
l
s
 
*
/
}


 
 
 
 
 
 
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
 
2
4
 
}
}


 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
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


 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
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
m
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
b
-
8
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
5
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
/
 
s
t
u
d
e
n
t
s


 
 
 
 
 
 
 
 
 
 
<
/
p
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
L
o
v
e
d
 
b
y
 
s
t
u
d
e
n
t
s
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
3
 
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
"
>


 
 
 
 
 
 
 
 
 
 
{
t
e
s
t
i
m
o
n
i
a
l
s
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
t
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
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
e
l
a
y
:
 
i
 
*
 
0
.
0
8
 
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
0
.
5
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
A
r
r
a
y
(
5
)
.
f
i
l
l
(
0
)
.
m
a
p
(
(
_
,
 
j
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
j
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
3
 
h
-
3
 
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
 
f
i
l
l
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
 
m
b
-
4
 
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
"
{
t
.
t
e
x
t
}
"
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
.
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
w
-
8
 
h
-
8
 
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
s
t
o
n
e
-
9
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
.
a
v
a
t
a
r
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
n
a
m
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
5
0
0
"
>
{
t
.
r
o
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




 
 
 
 
 
 
{
/
*
 
T
r
u
s
t
 
b
a
d
g
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
6
 
m
b
-
1
6
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
 
<
S
h
i
e
l
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
,
 
t
e
x
t
:
 
"
S
S
L
 
E
n
c
r
y
p
t
e
d
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
<
L
o
c
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
,
 
t
e
x
t
:
 
"
S
e
c
u
r
e
 
P
a
y
m
e
n
t
s
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
i
c
o
n
:
 
<
C
r
e
d
i
t
C
a
r
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
,
 
t
e
x
t
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
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
b
a
d
g
e
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
b
a
d
g
e
.
t
e
x
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
o
n
o
 
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
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
b
a
d
g
e
.
i
c
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
{
b
a
d
g
e
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
 
F
A
Q
 
*
/
}


 
 
 
 
 
 
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
 
2
4
 
}
}


 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
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


 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
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
b
-
8
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
5
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
/
 
f
a
q


 
 
 
 
 
 
 
 
 
 
<
/
p
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
C
o
m
m
o
n
 
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
d
i
v
i
d
e
-
y
 
d
i
v
i
d
e
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
d
i
v
i
d
e
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
f
a
q
s
.
m
a
p
(
(
f
a
q
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
F
a
q
(
e
x
p
a
n
d
e
d
F
a
q
 
=
=
=
 
i
 
?
 
n
u
l
l
 
:
 
i
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
x
-
5
 
p
y
-
4
 
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
/
5
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
a
q
.
q
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
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
 
s
h
r
i
n
k
-
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
t
r
a
n
s
f
o
r
m
 
$
{
e
x
p
a
n
d
e
d
F
a
q
 
=
=
=
 
i
 
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
F
a
q
 
=
=
=
 
i
 
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
1
8
 
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
p
x
-
5
 
p
b
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
f
a
q
.
a
}
<
/
p
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




 
 
 
 
 
 
{
/
*
 
B
o
t
t
o
m
 
C
T
A
 
*
/
}


 
 
 
 
 
 
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
 
2
4
 
}
}


 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
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


 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
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
r
e
l
a
t
i
v
e
 
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
8
0
0
 
p
-
8
 
m
d
:
p
-
1
2
 
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
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
 
-
t
o
p
-
2
4
 
-
r
i
g
h
t
-
2
4
 
w
-
6
4
 
h
-
6
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
 
b
l
u
r
-
3
x
l
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
a
b
s
o
l
u
t
e
 
-
b
o
t
t
o
m
-
2
4
 
-
l
e
f
t
-
2
4
 
w
-
6
4
 
h
-
6
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
l
i
m
e
-
4
0
0
/
5
 
b
l
u
r
-
3
x
l
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
3
"
>
/
 
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
<
/
p
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
w
h
i
t
e
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
R
e
a
d
y
 
t
o
 
s
u
p
e
r
c
h
a
r
g
e
 
y
o
u
r
 
c
a
r
e
e
r
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
s
m
 
m
a
x
-
w
-
m
d
 
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
7
"
>


 
 
 
 
 
 
 
 
 
 
 
 
J
o
i
n
 
t
h
o
u
s
a
n
d
s
 
o
f
 
s
t
u
d
e
n
t
s
 
u
s
i
n
g
 
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
 
t
o
 
l
a
n
d
 
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
 
b
u
i
l
d
 
p
o
r
t
f
o
l
i
o
s
,
 
a
n
d
 
g
r
o
w
 
t
h
e
i
r
 
c
a
r
e
e
r
s
.


 
 
 
 
 
 
 
 
 
 
<
/
p
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
 
h
a
n
d
l
e
S
e
l
e
c
t
P
l
a
n
(
"
p
r
o
"
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
l
o
a
d
i
n
g
 
!
=
=
 
n
u
l
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
7
 
p
y
-
3
 
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
 
f
o
n
t
-
b
o
l
d
 
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
 
t
e
x
t
-
s
m
 
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
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
=
=
=
 
"
p
r
o
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
4
 
h
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
s
p
i
n
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
e
t
 
P
r
o
 
N
o
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


 
 
)
;


}


