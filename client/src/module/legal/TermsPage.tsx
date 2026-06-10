
﻿
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
 
m
o
t
i
o
n
,
 
t
y
p
e
 
V
a
r
i
a
n
t
s
 
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


 
 
L
o
c
k
,


 
 
B
a
d
g
e
C
h
e
c
k
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


 
 
B
o
t
,


 
 
S
c
a
l
e
,


 
 
B
a
n
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




t
y
p
e
 
S
e
c
t
i
o
n
 
=
 
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
;




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
I
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


 
 
 
 
 
 
'
W
e
l
c
o
m
e
 
t
o
 
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
 
(
"
w
e
"
,
 
"
o
u
r
"
,
 
"
u
s
"
)
.
 
B
y
 
a
c
c
e
s
s
i
n
g
 
o
r
 
u
s
i
n
g
 
o
u
r
 
w
e
b
s
i
t
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
e
r
v
i
c
e
s
,
 
y
o
u
 
a
g
r
e
e
 
t
o
 
c
o
m
p
l
y
 
w
i
t
h
 
t
h
e
s
e
 
T
e
r
m
s
 
a
n
d
 
C
o
n
d
i
t
i
o
n
s
.
 
I
f
 
y
o
u
 
d
o
 
n
o
t
 
a
g
r
e
e
,
 
p
l
e
a
s
e
 
d
i
s
c
o
n
t
i
n
u
e
 
u
s
e
 
o
f
 
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
.
'
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
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
 
m
u
s
t
 
b
e
 
a
t
 
l
e
a
s
t
 
1
6
 
y
e
a
r
s
 
o
l
d
 
t
o
 
u
s
e
 
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
.
 
B
y
 
c
r
e
a
t
i
n
g
 
a
n
 
a
c
c
o
u
n
t
,
 
y
o
u
 
c
o
n
f
i
r
m
 
t
h
a
t
 
a
l
l
 
p
r
o
v
i
d
e
d
 
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
 
i
s
 
a
c
c
u
r
a
t
e
 
a
n
d
 
c
o
m
p
l
e
t
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
u
s
e
r
-
a
c
c
o
u
n
t
s
"
,


 
 
 
 
i
c
o
n
:
 
L
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
U
s
e
r
 
A
c
c
o
u
n
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
 
a
r
e
 
r
e
s
p
o
n
s
i
b
l
e
 
f
o
r
 
m
a
i
n
t
a
i
n
i
n
g
 
t
h
e
 
c
o
n
f
i
d
e
n
t
i
a
l
i
t
y
 
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
 
c
r
e
d
e
n
t
i
a
l
s
 
a
n
d
 
a
n
y
 
a
c
t
i
v
i
t
y
 
u
n
d
e
r
 
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
a
c
c
e
p
t
a
b
l
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
 
B
a
d
g
e
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
A
c
c
e
p
t
a
b
l
e
 
U
s
e
"
,


 
 
 
 
l
i
s
t
:
 
[


 
 
 
 
 
 
"
D
o
 
n
o
t
 
u
s
e
 
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
 
f
o
r
 
u
n
l
a
w
f
u
l
 
o
r
 
f
r
a
u
d
u
l
e
n
t
 
p
u
r
p
o
s
e
s
"
,


 
 
 
 
 
 
"
D
o
 
n
o
t
 
p
o
s
t
 
m
i
s
l
e
a
d
i
n
g
 
o
r
 
h
a
r
m
f
u
l
 
c
o
n
t
e
n
t
"
,


 
 
 
 
 
 
"
D
o
 
n
o
t
 
a
t
t
e
m
p
t
 
u
n
a
u
t
h
o
r
i
z
e
d
 
a
c
c
e
s
s
"
,


 
 
 
 
 
 
"
D
o
 
n
o
t
 
s
c
r
a
p
e
 
o
r
 
c
o
l
l
e
c
t
 
d
a
t
a
 
w
i
t
h
o
u
t
 
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
"
,


 
 
 
 
 
 
"
D
o
 
n
o
t
 
i
m
p
e
r
s
o
n
a
t
e
 
a
n
o
t
h
e
r
 
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
 
o
r
 
e
n
t
i
t
y
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
-
p
a
y
m
e
n
t
s
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
T
e
x
t
,


 
 
 
 
t
i
t
l
e
:
 
"
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
s
 
&
 
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


 
 
 
 
c
o
n
t
e
n
t
:


 
 
 
 
 
 
"
S
o
m
e
 
f
e
a
t
u
r
e
s
 
r
e
q
u
i
r
e
 
p
a
i
d
 
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
.
 
P
a
y
m
e
n
t
s
 
a
r
e
 
s
e
c
u
r
e
l
y
 
p
r
o
c
e
s
s
e
d
 
t
h
r
o
u
g
h
 
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
 
P
r
i
c
i
n
g
 
a
n
d
 
b
i
l
l
i
n
g
 
d
e
t
a
i
l
s
 
a
r
e
 
s
h
o
w
n
 
d
u
r
i
n
g
 
c
h
e
c
k
o
u
t
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
a
i
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
-
c
o
n
t
e
n
t
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
i
t
l
e
:
 
"
A
I
-
G
e
n
e
r
a
t
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


 
 
 
 
c
o
n
t
e
n
t
:


 
 
 
 
 
 
"
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
 
u
s
e
s
 
A
I
 
t
o
o
l
s
 
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
 
r
e
s
p
o
n
s
e
s
.
 
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
 
m
a
y
 
c
o
n
t
a
i
n
 
i
n
a
c
c
u
r
a
c
i
e
s
,
 
s
o
 
u
s
e
r
s
 
s
h
o
u
l
d
 
r
e
v
i
e
w
 
o
u
t
p
u
t
s
 
c
a
r
e
f
u
l
l
y
 
b
e
f
o
r
e
 
u
s
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
l
i
m
i
t
a
t
i
o
n
-
o
f
-
l
i
a
b
i
l
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
c
a
l
e
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
m
i
t
a
t
i
o
n
 
o
f
 
L
i
a
b
i
l
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
 
s
h
a
l
l
 
n
o
t
 
b
e
 
l
i
a
b
l
e
 
f
o
r
 
i
n
d
i
r
e
c
t
 
o
r
 
c
o
n
s
e
q
u
e
n
t
i
a
l
 
d
a
m
a
g
e
s
 
r
e
s
u
l
t
i
n
g
 
f
r
o
m
 
u
s
e
 
o
f
 
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
.
 
L
i
a
b
i
l
i
t
y
 
i
s
 
l
i
m
i
t
e
d
 
t
o
 
t
h
e
 
a
m
o
u
n
t
 
p
a
i
d
 
b
y
 
t
h
e
 
u
s
e
r
 
i
n
 
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
 
1
2
 
m
o
n
t
h
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
t
e
r
m
i
n
a
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
 
B
a
n
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
r
m
i
n
a
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
s
e
r
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
 
s
u
s
p
e
n
d
 
o
r
 
t
e
r
m
i
n
a
t
e
 
a
c
c
e
s
s
 
t
o
 
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
 
f
o
r
 
v
i
o
l
a
t
i
o
n
s
 
o
f
 
t
h
e
s
e
 
T
e
r
m
s
 
o
r
 
h
a
r
m
f
u
l
 
a
c
t
i
v
i
t
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
c
h
a
n
g
e
s
-
t
o
-
t
e
r
m
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
e
r
m
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
e
s
e
 
T
e
r
m
s
 
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
 
C
o
n
t
i
n
u
e
d
 
u
s
e
 
o
f
 
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
 
a
f
t
e
r
 
u
p
d
a
t
e
s
 
i
n
d
i
c
a
t
e
s
 
a
c
c
e
p
t
a
n
c
e
 
o
f
 
t
h
e
 
r
e
v
i
s
e
d
 
T
e
r
m
s
.
"
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
 
c
o
n
t
a
i
n
e
r
V
a
r
i
a
n
t
s
:
 
V
a
r
i
a
n
t
s
 
=
 
{


 
 
h
i
d
d
e
n
:
 
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
 
}
,


 
 
v
i
s
i
b
l
e
:
 
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
:
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
8
 
}
,


 
 
}
,


}
;




c
o
n
s
t
 
i
t
e
m
V
a
r
i
a
n
t
s
:
 
V
a
r
i
a
n
t
s
 
=
 
{


 
 
h
i
d
d
e
n
:
 
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
,


 
 
v
i
s
i
b
l
e
:
 
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
,


 
 
 
 
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
:
 
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
 
a
s
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
,
 
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
}
,


 
 
}
,


}
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
 
T
e
r
m
s
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
f
o
n
t
-
s
a
n
s
 
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
T
e
r
m
s
 
a
n
d
 
C
o
n
d
i
t
i
o
n
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
e
r
m
s
 
a
n
d
 
C
o
n
d
i
t
i
o
n
s
 
f
o
r
 
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
,
 
y
o
u
r
 
a
l
l
-
i
n
-
o
n
e
 
c
a
r
e
e
r
 
p
l
a
t
f
o
r
m
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
p
t
-
2
8
 
p
b
-
1
6
 
m
d
:
p
b
-
2
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
 
p
x
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
6
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
K
i
c
k
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
m
b
-
6
"
>
t
e
r
m
s
 
o
f
 
s
e
r
v
i
c
e
<
/
K
i
c
k
e
r
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
 
m
d
:
t
e
x
t
-
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
e
r
m
s
 
&
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
C
o
n
d
i
t
i
o
n
s
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
6
 
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
a
x
-
w
-
x
l
 
m
x
-
a
u
t
o
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
l
e
a
s
e
 
r
e
a
d
 
t
h
e
s
e
 
T
e
r
m
s
 
c
a
r
e
f
u
l
l
y
 
b
e
f
o
r
e
 
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
.
 
B
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
c
e
s
s
i
n
g
 
o
u
r
 
p
l
a
t
f
o
r
m
,
 
y
o
u
 
a
g
r
e
e
 
t
o
 
c
o
m
p
l
y
 
w
i
t
h
 
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
o
n
d
i
t
i
o
n
s
 
a
n
d
 
p
o
l
i
c
i
e
s
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
2
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
 
C
o
n
t
e
n
t
 
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
 
p
t
-
8
 
m
d
:
p
t
-
1
0
 
p
b
-
2
0
 
m
d
:
p
b
-
2
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
 
p
x
-
6
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
1
0
 
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
5
6
 
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
 
m
b
-
3
 
p
x
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
O
n
 
t
h
i
s
 
p
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
0
.
5
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
2
.
5
 
p
x
-
2
 
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
l
g
 
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
x
s
 
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
4
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
5
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
 
s
i
z
e
=
{
1
3
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
e
c
t
i
o
n
 
C
a
r
d
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
c
o
n
t
a
i
n
e
r
V
a
r
i
a
n
t
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
,
 
m
a
r
g
i
n
:
 
"
-
5
0
p
x
"
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
i
t
e
m
V
a
r
i
a
n
t
s
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
/
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
0
0
/
5
0
 
p
-
6
 
m
d
:
p
-
8
 
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
2
8
 
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
4
0
0
/
3
0
 
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
3
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
 
h
-
1
0
 
w
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
l
g
 
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
8
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
-
1
 
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
3
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
 
s
h
r
i
n
k
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
f
u
l
l
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
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
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
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
 
C
T
A
 
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
 
p
y
-
2
0
 
m
d
:
p
y
-
2
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
 
p
x
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
6
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
l
i
m
e
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
/
2
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
s
t
o
n
e
-
8
0
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
 
o
p
a
c
i
t
y
-
[
0
.
0
6
]
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
I
m
a
g
e
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
r
a
d
i
a
l
-
g
r
a
d
i
e
n
t
(
c
i
r
c
l
e
 
a
t
 
1
p
x
 
1
p
x
,
 
w
h
i
t
e
 
1
p
x
,
 
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
 
0
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
S
i
z
e
:
 
"
2
8
p
x
 
2
8
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
2
 
h
-
1
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
l
i
m
e
-
4
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
f
 
y
o
u
 
h
a
v
e
 
q
u
e
s
t
i
o
n
s
 
r
e
g
a
r
d
i
n
g
 
t
h
e
s
e
 
T
e
r
m
s
 
a
n
d
 
C
o
n
d
i
t
i
o
n
s
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
 
p
x
-
6
 
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
n
t
-
b
o
l
d
 
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
6
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
s
e
c
t
i
o
n
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


