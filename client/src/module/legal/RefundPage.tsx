
﻿
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


 
 
X
C
i
r
c
l
e
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


 
 
B
a
n
,


 
 
M
a
i
l
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
C
i
r
c
l
e
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
-
p
l
a
n
s
"
,


 
 
 
 
i
c
o
n
:
 
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
 
P
l
a
n
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
 
o
f
f
e
r
s
 
M
o
n
t
h
l
y
 
a
n
d
 
Y
e
a
r
l
y
 
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
 
p
l
a
n
s
 
t
h
a
t
 
u
n
l
o
c
k
 
p
r
e
m
i
u
m
 
f
e
a
t
u
r
e
s
.
 
A
l
l
 
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
 
a
r
e
 
b
i
l
l
e
d
 
i
n
 
a
d
v
a
n
c
e
 
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
a
n
c
e
l
l
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
 
X
C
i
r
c
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
C
a
n
c
e
l
l
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


 
 
 
 
 
 
"
Y
o
u
 
m
a
y
 
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
 
f
r
o
m
 
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
 
s
e
t
t
i
n
g
s
 
o
r
 
b
y
 
c
o
n
t
a
c
t
i
n
g
 
u
s
 
v
i
a
 
e
m
a
i
l
"
,


 
 
 
 
 
 
"
U
p
o
n
 
c
a
n
c
e
l
l
a
t
i
o
n
,
 
y
o
u
r
 
p
r
e
m
i
u
m
 
a
c
c
e
s
s
 
w
i
l
l
 
c
o
n
t
i
n
u
e
 
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
 
c
u
r
r
e
n
t
 
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
"
,


 
 
 
 
 
 
"
A
f
t
e
r
 
t
h
e
 
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
 
e
n
d
s
,
 
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
 
w
i
l
l
 
r
e
v
e
r
t
 
t
o
 
t
h
e
 
f
r
e
e
 
t
i
e
r
"
,


 
 
 
 
 
 
"
C
a
n
c
e
l
l
a
t
i
o
n
 
d
o
e
s
 
n
o
t
 
t
r
i
g
g
e
r
 
a
n
 
a
u
t
o
m
a
t
i
c
 
r
e
f
u
n
d
 
f
o
r
 
t
h
e
 
r
e
m
a
i
n
i
n
g
 
p
e
r
i
o
d
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
r
e
f
u
n
d
-
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


 
 
 
 
t
i
t
l
e
:
 
"
R
e
f
u
n
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
R
e
f
u
n
d
s
 
m
a
y
 
b
e
 
g
r
a
n
t
e
d
 
i
n
 
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
s
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


 
 
 
 
 
 
"
W
i
t
h
i
n
 
7
 
d
a
y
s
 
o
f
 
p
u
r
c
h
a
s
e
:
 
I
f
 
y
o
u
 
h
a
v
e
 
n
o
t
 
u
s
e
d
 
a
n
y
 
p
r
e
m
i
u
m
 
f
e
a
t
u
r
e
s
,
 
y
o
u
 
a
r
e
 
e
l
i
g
i
b
l
e
 
f
o
r
 
a
 
f
u
l
l
 
r
e
f
u
n
d
"
,


 
 
 
 
 
 
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
 
i
s
s
u
e
s
:
 
I
f
 
a
 
p
a
y
m
e
n
t
 
w
a
s
 
p
r
o
c
e
s
s
e
d
 
b
u
t
 
p
r
e
m
i
u
m
 
f
e
a
t
u
r
e
s
 
w
e
r
e
 
n
o
t
 
a
c
t
i
v
a
t
e
d
 
a
n
d
 
w
e
 
a
r
e
 
u
n
a
b
l
e
 
t
o
 
r
e
s
o
l
v
e
 
t
h
e
 
i
s
s
u
e
"
,


 
 
 
 
 
 
"
D
u
p
l
i
c
a
t
e
 
p
a
y
m
e
n
t
s
:
 
I
f
 
y
o
u
 
w
e
r
e
 
c
h
a
r
g
e
d
 
m
o
r
e
 
t
h
a
n
 
o
n
c
e
 
f
o
r
 
t
h
e
 
s
a
m
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
 
p
e
r
i
o
d
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
n
o
n
-
r
e
f
u
n
d
a
b
l
e
-
c
a
s
e
s
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
N
o
n
-
R
e
f
u
n
d
a
b
l
e
 
C
a
s
e
s
"
,


 
 
 
 
l
i
s
t
:
 
[


 
 
 
 
 
 
"
R
e
q
u
e
s
t
s
 
m
a
d
e
 
a
f
t
e
r
 
7
 
d
a
y
s
 
o
f
 
p
u
r
c
h
a
s
e
"
,


 
 
 
 
 
 
"
A
c
c
o
u
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
 
u
s
e
d
 
p
r
e
m
i
u
m
 
f
e
a
t
u
r
e
s
 
(
A
I
 
t
o
o
l
s
,
 
r
e
s
u
m
e
 
g
e
n
e
r
a
t
i
o
n
,
 
e
t
c
.
)
"
,


 
 
 
 
 
 
"
P
a
r
t
i
a
l
 
r
e
f
u
n
d
s
 
f
o
r
 
u
n
u
s
e
d
 
d
a
y
s
 
w
i
t
h
i
n
 
a
 
b
i
l
l
i
n
g
 
c
y
c
l
e
"
,


 
 
 
 
 
 
"
D
i
s
s
a
t
i
s
f
a
c
t
i
o
n
 
w
i
t
h
 
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
 
q
u
a
l
i
t
y
 
(
o
u
t
p
u
t
s
 
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
 
i
n
p
u
t
)
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
h
o
w
-
t
o
-
r
e
q
u
e
s
t
"
,


 
 
 
 
i
c
o
n
:
 
M
a
i
l
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
 
t
o
 
R
e
q
u
e
s
t
 
a
 
R
e
f
u
n
d
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
T
o
 
r
e
q
u
e
s
t
 
a
 
r
e
f
u
n
d
,
 
e
m
a
i
l
 
u
s
 
a
t
 
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
 
d
e
t
a
i
l
s
:
'
,


 
 
 
 
l
i
s
t
:
 
[


 
 
 
 
 
 
"
Y
o
u
r
 
r
e
g
i
s
t
e
r
e
d
 
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
"
,


 
 
 
 
 
 
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
 
I
D
"
,


 
 
 
 
 
 
"
R
e
a
s
o
n
 
f
o
r
 
t
h
e
 
r
e
f
u
n
d
 
r
e
q
u
e
s
t
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
r
e
f
u
n
d
-
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
R
e
f
u
n
d
 
P
r
o
c
e
s
s
i
n
g
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
A
p
p
r
o
v
e
d
 
r
e
f
u
n
d
s
 
w
i
l
l
 
b
e
 
p
r
o
c
e
s
s
e
d
 
w
i
t
h
i
n
 
5
-
7
 
b
u
s
i
n
e
s
s
 
d
a
y
s
.
 
T
h
e
 
r
e
f
u
n
d
 
w
i
l
l
 
b
e
 
c
r
e
d
i
t
e
d
 
t
o
 
t
h
e
 
o
r
i
g
i
n
a
l
 
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
 
u
s
e
d
 
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
u
r
c
h
a
s
e
.
 
Y
o
u
 
w
i
l
l
 
r
e
c
e
i
v
e
 
a
 
c
o
n
f
i
r
m
a
t
i
o
n
 
e
m
a
i
l
 
o
n
c
e
 
t
h
e
 
r
e
f
u
n
d
 
i
s
 
i
n
i
t
i
a
t
e
d
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
n
t
a
c
t
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
C
i
r
c
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
C
o
n
t
a
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


 
 
 
 
 
 
'
F
o
r
 
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
 
r
e
g
a
r
d
i
n
g
 
c
a
n
c
e
l
l
a
t
i
o
n
s
 
o
r
 
r
e
f
u
n
d
s
,
 
r
e
a
c
h
 
o
u
t
 
t
o
 
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
.
'
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
 
R
e
f
u
n
d
P
a
g
e
(
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
C
a
n
c
e
l
l
a
t
i
o
n
 
&
 
R
e
f
u
n
d
 
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
C
a
n
c
e
l
l
a
t
i
o
n
 
a
n
d
 
R
e
f
u
n
d
 
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
c
a
n
c
e
l
l
a
t
i
o
n
 
&
 
r
e
f
u
n
d
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
a
n
c
e
l
l
a
t
i
o
n
 
&
 
R
e
f
u
n
d
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
P
o
l
i
c
y
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
 
h
o
w
 
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
,
 
c
a
n
c
e
l
l
a
t
i
o
n
s
,
 
a
n
d
 
r
e
f
u
n
d
s
 
w
o
r
k
 
o
n
 
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
C
l
o
c
k
 
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
s
e
c
t
i
o
n
>




 
 
 
 
 
 
 
 
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
e
s
s
a
g
e
C
i
r
c
l
e
 
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
 
c
a
n
c
e
l
l
a
t
i
o
n
s
 
o
r
 
r
e
f
u
n
d
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




