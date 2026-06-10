
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
 
u
s
e
Q
u
e
r
y
,
 
u
s
e
M
u
t
a
t
i
o
n
,
 
u
s
e
Q
u
e
r
y
C
l
i
e
n
t
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
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
 
P
a
g
i
n
a
t
i
o
n
C
o
n
t
r
o
l
s
 
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
u
i
/
P
a
g
i
n
a
t
i
o
n
C
o
n
t
r
o
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


 
 
A
w
a
r
d
,


 
 
P
l
u
s
,


 
 
P
e
n
c
i
l
,


 
 
T
r
a
s
h
2
,


 
 
X
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
a
r
c
h
,


 
 
F
i
l
t
e
r
,


 
 
U
s
e
r
s
,


 
 
T
o
g
g
l
e
L
e
f
t
,


 
 
T
o
g
g
l
e
R
i
g
h
t
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
 
t
o
a
s
t
 
f
r
o
m
 
"
@
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
o
a
s
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
 
q
u
e
r
y
K
e
y
s
 
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
l
i
b
/
q
u
e
r
y
-
k
e
y
s
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
 
B
a
d
g
e
,
 
B
a
d
g
e
C
a
t
e
g
o
r
y
,
 
P
a
g
i
n
a
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




/
/
 
─
─
 
C
o
n
s
t
a
n
t
s
 
─
─




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
I
E
S
:
 
B
a
d
g
e
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
C
A
R
E
E
R
"
,


 
 
"
Q
U
I
Z
"
,


 
 
"
S
K
I
L
L
"
,


 
 
"
C
O
N
T
R
I
B
U
T
I
O
N
"
,


 
 
"
M
I
L
E
S
T
O
N
E
"
,


]
;




c
o
n
s
t
 
C
R
I
T
E
R
I
A
_
T
Y
P
E
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
c
a
r
e
e
r
_
c
o
m
p
l
e
t
e
"
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
 
C
o
m
p
l
e
t
e
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
q
u
i
z
_
p
a
s
s
"
,
 
l
a
b
e
l
:
 
"
Q
u
i
z
 
P
a
s
s
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
k
i
l
l
_
t
e
s
t
_
p
a
s
s
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
k
i
l
l
 
T
e
s
t
 
P
a
s
s
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
f
i
r
s
t
_
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
 
l
a
b
e
l
:
 
"
F
i
r
s
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
s
a
_
s
o
l
v
e
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
S
A
 
S
o
l
v
e
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
p
r
o
f
i
l
e
_
c
o
m
p
l
e
t
e
"
,
 
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
 
C
o
m
p
l
e
t
e
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
 
C
A
T
E
G
O
R
Y
_
C
O
L
O
R
S
:
 
R
e
c
o
r
d
<
B
a
d
g
e
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


 
 
C
A
R
E
E
R
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
0
/
1
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
4
0
0
"
,


 
 
Q
U
I
Z
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
0
/
1
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
4
0
0
"
,


 
 
S
K
I
L
L
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
0
/
1
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
4
0
0
"
,


 
 
C
O
N
T
R
I
B
U
T
I
O
N
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
0
/
1
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
4
0
0
"
,


 
 
M
I
L
E
S
T
O
N
E
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
0
/
1
0
 
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
4
0
0
"
,


}
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
 
B
a
d
g
e
F
o
r
m
 
{


 
 
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


 
 
c
a
t
e
g
o
r
y
:
 
B
a
d
g
e
C
a
t
e
g
o
r
y
;


 
 
c
r
i
t
e
r
i
a
T
y
p
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
r
i
t
e
r
i
a
P
a
r
a
m
s
:
 
{
 
k
e
y
:
 
s
t
r
i
n
g
;
 
v
a
l
u
e
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


 
 
i
s
A
c
t
i
v
e
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
 
e
m
p
t
y
F
o
r
m
 
=
 
(
)
:
 
B
a
d
g
e
F
o
r
m
 
=
>
 
(
{


 
 
n
a
m
e
:
 
"
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
C
A
R
E
E
R
"
,


 
 
c
r
i
t
e
r
i
a
T
y
p
e
:
 
"
c
a
r
e
e
r
_
c
o
m
p
l
e
t
e
"
,


 
 
c
r
i
t
e
r
i
a
P
a
r
a
m
s
:
 
[
]
,


 
 
i
s
A
c
t
i
v
e
:
 
t
r
u
e
,


}
)
;




f
u
n
c
t
i
o
n
 
f
o
r
m
T
o
B
a
d
g
e
(
f
o
r
m
:
 
B
a
d
g
e
F
o
r
m
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
a
m
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
 
u
n
k
n
o
w
n
>
 
=
 
{
}
;


 
 
f
o
r
 
(
c
o
n
s
t
 
p
 
o
f
 
f
o
r
m
.
c
r
i
t
e
r
i
a
P
a
r
a
m
s
)
 
{


 
 
 
 
i
f
 
(
!
p
.
k
e
y
.
t
r
i
m
(
)
)
 
c
o
n
t
i
n
u
e
;


 
 
 
 
c
o
n
s
t
 
n
u
m
 
=
 
N
u
m
b
e
r
(
p
.
v
a
l
u
e
)
;


 
 
 
 
p
a
r
a
m
s
[
p
.
k
e
y
.
t
r
i
m
(
)
]
 
=
 
i
s
N
a
N
(
n
u
m
)
 
?
 
p
.
v
a
l
u
e
 
:
 
n
u
m
;


 
 
}


 
 
r
e
t
u
r
n
 
{


 
 
 
 
n
a
m
e
:
 
f
o
r
m
.
n
a
m
e
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
 
f
o
r
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
 
|
|
 
u
n
d
e
f
i
n
e
d
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
 
f
o
r
m
.
c
a
t
e
g
o
r
y
,


 
 
 
 
c
r
i
t
e
r
i
a
:
 
{
 
t
y
p
e
:
 
f
o
r
m
.
c
r
i
t
e
r
i
a
T
y
p
e
,
 
p
a
r
a
m
s
:
 
O
b
j
e
c
t
.
k
e
y
s
(
p
a
r
a
m
s
)
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
 
p
a
r
a
m
s
 
:
 
u
n
d
e
f
i
n
e
d
 
}
,


 
 
 
 
i
s
A
c
t
i
v
e
:
 
f
o
r
m
.
i
s
A
c
t
i
v
e
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
 
b
a
d
g
e
T
o
F
o
r
m
(
b
a
d
g
e
:
 
B
a
d
g
e
)
:
 
B
a
d
g
e
F
o
r
m
 
{


 
 
c
o
n
s
t
 
c
r
i
t
e
r
i
a
 
=
 
b
a
d
g
e
.
c
r
i
t
e
r
i
a
 
a
s
 
{
 
t
y
p
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
 
p
a
r
a
m
s
?
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
 
u
n
k
n
o
w
n
>
 
}
;


 
 
c
o
n
s
t
 
p
a
r
a
m
s
:
 
{
 
k
e
y
:
 
s
t
r
i
n
g
;
 
v
a
l
u
e
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
 
=
 
[
]
;


 
 
i
f
 
(
c
r
i
t
e
r
i
a
.
p
a
r
a
m
s
)
 
{


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
[
k
e
y
,
 
v
a
l
u
e
]
 
o
f
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
c
r
i
t
e
r
i
a
.
p
a
r
a
m
s
)
)
 
{


 
 
 
 
 
 
p
a
r
a
m
s
.
p
u
s
h
(
{
 
k
e
y
,
 
v
a
l
u
e
:
 
S
t
r
i
n
g
(
v
a
l
u
e
)
 
}
)
;


 
 
 
 
}


 
 
}


 
 
r
e
t
u
r
n
 
{


 
 
 
 
n
a
m
e
:
 
b
a
d
g
e
.
n
a
m
e
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
 
b
a
d
g
e
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
 
?
?
 
"
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
 
b
a
d
g
e
.
c
a
t
e
g
o
r
y
,


 
 
 
 
c
r
i
t
e
r
i
a
T
y
p
e
:
 
c
r
i
t
e
r
i
a
.
t
y
p
e
 
?
?
 
"
c
a
r
e
e
r
_
c
o
m
p
l
e
t
e
"
,


 
 
 
 
c
r
i
t
e
r
i
a
P
a
r
a
m
s
:
 
p
a
r
a
m
s
,


 
 
 
 
i
s
A
c
t
i
v
e
:
 
b
a
d
g
e
.
i
s
A
c
t
i
v
e
,


 
 
}
;


}




/
/
 
─
─
 
C
o
m
p
o
n
e
n
t
 
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
 
A
d
m
i
n
B
a
d
g
e
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
 
q
u
e
r
y
C
l
i
e
n
t
 
=
 
u
s
e
Q
u
e
r
y
C
l
i
e
n
t
(
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
g
e
,
 
s
e
t
P
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
(
1
)
;


 
 
c
o
n
s
t
 
[
c
a
t
e
g
o
r
y
F
i
l
t
e
r
,
 
s
e
t
C
a
t
e
g
o
r
y
F
i
l
t
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
<
B
a
d
g
e
C
a
t
e
g
o
r
y
 
|
 
"
A
L
L
"
>
(
"
A
L
L
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




 
 
/
/
 
M
o
d
a
l
 
s
t
a
t
e


 
 
c
o
n
s
t
 
[
m
o
d
a
l
O
p
e
n
,
 
s
e
t
M
o
d
a
l
O
p
e
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
 
[
e
d
i
t
i
n
g
I
d
,
 
s
e
t
E
d
i
t
i
n
g
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
f
o
r
m
,
 
s
e
t
F
o
r
m
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
B
a
d
g
e
F
o
r
m
>
(
e
m
p
t
y
F
o
r
m
(
)
)
;


 
 
c
o
n
s
t
 
[
d
e
l
e
t
e
T
a
r
g
e
t
,
 
s
e
t
D
e
l
e
t
e
T
a
r
g
e
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
B
a
d
g
e
 
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
 
l
i
m
i
t
 
=
 
1
0
;




 
 
/
/
 
─
─
 
Q
u
e
r
i
e
s
 
─
─




 
 
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
,
 
i
s
L
o
a
d
i
n
g
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
b
a
d
g
e
s
.
a
d
m
i
n
(
{
 
p
a
g
e
,
 
l
i
m
i
t
,
 
.
.
.
(
c
a
t
e
g
o
r
y
F
i
l
t
e
r
 
!
=
=
 
"
A
L
L
"
 
&
&
 
{
 
c
a
t
e
g
o
r
y
:
 
c
a
t
e
g
o
r
y
F
i
l
t
e
r
 
}
)
 
}
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
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
 
p
a
r
a
m
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
 
|
 
n
u
m
b
e
r
>
 
=
 
{
 
p
a
g
e
,
 
l
i
m
i
t
 
}
;


 
 
 
 
 
 
i
f
 
(
c
a
t
e
g
o
r
y
F
i
l
t
e
r
 
!
=
=
 
"
A
L
L
"
)
 
p
a
r
a
m
s
.
c
a
t
e
g
o
r
y
 
=
 
c
a
t
e
g
o
r
y
F
i
l
t
e
r
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
 
p
a
r
a
m
s
.
s
e
a
r
c
h
 
=
 
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
;


 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
 
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
b
a
d
g
e
s
/
a
d
m
i
n
"
,
 
{
 
p
a
r
a
m
s
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
r
e
s
.
d
a
t
a
 
a
s
 
{
 
b
a
d
g
e
s
:
 
(
B
a
d
g
e
 
&
 
{
 
_
c
o
u
n
t
?
:
 
{
 
s
t
u
d
e
n
t
B
a
d
g
e
s
:
 
n
u
m
b
e
r
 
}
 
}
)
[
]
;
 
p
a
g
i
n
a
t
i
o
n
:
 
P
a
g
i
n
a
t
i
o
n
 
}
;


 
 
 
 
}
,


 
 
}
)
;




 
 
c
o
n
s
t
 
b
a
d
g
e
s
 
=
 
d
a
t
a
?
.
b
a
d
g
e
s
 
?
?
 
[
]
;


 
 
c
o
n
s
t
 
p
a
g
i
n
a
t
i
o
n
 
=
 
d
a
t
a
?
.
p
a
g
i
n
a
t
i
o
n
;




 
 
/
/
 
─
─
 
M
u
t
a
t
i
o
n
s
 
─
─




 
 
c
o
n
s
t
 
c
r
e
a
t
e
M
u
t
a
t
i
o
n
 
=
 
u
s
e
M
u
t
a
t
i
o
n
(
{


 
 
 
 
m
u
t
a
t
i
o
n
F
n
:
 
(
p
a
y
l
o
a
d
:
 
R
e
t
u
r
n
T
y
p
e
<
t
y
p
e
o
f
 
f
o
r
m
T
o
B
a
d
g
e
>
)
 
=
>
 
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
b
a
d
g
e
s
/
a
d
m
i
n
"
,
 
p
a
y
l
o
a
d
)
,


 
 
 
 
o
n
S
u
c
c
e
s
s
:
 
(
)
 
=
>
 
{


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
B
a
d
g
e
 
c
r
e
a
t
e
d
"
)
;


 
 
 
 
 
 
q
u
e
r
y
C
l
i
e
n
t
.
i
n
v
a
l
i
d
a
t
e
Q
u
e
r
i
e
s
(
{
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
b
a
d
g
e
s
.
a
l
l
(
)
 
}
)
;


 
 
 
 
 
 
c
l
o
s
e
M
o
d
a
l
(
)
;


 
 
 
 
}
,


 
 
 
 
o
n
E
r
r
o
r
:
 
(
)
 
=
>
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
c
r
e
a
t
e
 
b
a
d
g
e
"
)
,


 
 
}
)
;




 
 
c
o
n
s
t
 
u
p
d
a
t
e
M
u
t
a
t
i
o
n
 
=
 
u
s
e
M
u
t
a
t
i
o
n
(
{


 
 
 
 
m
u
t
a
t
i
o
n
F
n
:
 
(
{
 
i
d
,
 
p
a
y
l
o
a
d
 
}
:
 
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
 
p
a
y
l
o
a
d
:
 
R
e
t
u
r
n
T
y
p
e
<
t
y
p
e
o
f
 
f
o
r
m
T
o
B
a
d
g
e
>
 
}
)
 
=
>


 
 
 
 
 
 
a
p
i
.
p
u
t
(
`
/
b
a
d
g
e
s
/
a
d
m
i
n
/
$
{
i
d
}
`
,
 
p
a
y
l
o
a
d
)
,


 
 
 
 
o
n
S
u
c
c
e
s
s
:
 
(
)
 
=
>
 
{


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
B
a
d
g
e
 
u
p
d
a
t
e
d
"
)
;


 
 
 
 
 
 
q
u
e
r
y
C
l
i
e
n
t
.
i
n
v
a
l
i
d
a
t
e
Q
u
e
r
i
e
s
(
{
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
b
a
d
g
e
s
.
a
l
l
(
)
 
}
)
;


 
 
 
 
 
 
c
l
o
s
e
M
o
d
a
l
(
)
;


 
 
 
 
}
,


 
 
 
 
o
n
E
r
r
o
r
:
 
(
)
 
=
>
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
u
p
d
a
t
e
 
b
a
d
g
e
"
)
,


 
 
}
)
;




 
 
c
o
n
s
t
 
d
e
l
e
t
e
M
u
t
a
t
i
o
n
 
=
 
u
s
e
M
u
t
a
t
i
o
n
(
{


 
 
 
 
m
u
t
a
t
i
o
n
F
n
:
 
(
i
d
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
 
a
p
i
.
d
e
l
e
t
e
(
`
/
b
a
d
g
e
s
/
a
d
m
i
n
/
$
{
i
d
}
`
)
,


 
 
 
 
o
n
S
u
c
c
e
s
s
:
 
(
)
 
=
>
 
{


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
B
a
d
g
e
 
d
e
l
e
t
e
d
"
)
;


 
 
 
 
 
 
q
u
e
r
y
C
l
i
e
n
t
.
i
n
v
a
l
i
d
a
t
e
Q
u
e
r
i
e
s
(
{
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
b
a
d
g
e
s
.
a
l
l
(
)
 
}
)
;


 
 
 
 
 
 
s
e
t
D
e
l
e
t
e
T
a
r
g
e
t
(
n
u
l
l
)
;


 
 
 
 
}
,


 
 
 
 
o
n
E
r
r
o
r
:
 
(
)
 
=
>
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
d
e
l
e
t
e
 
b
a
d
g
e
"
)
,


 
 
}
)
;




 
 
/
/
 
─
─
 
H
a
n
d
l
e
r
s
 
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
 
o
p
e
n
C
r
e
a
t
e
(
)
 
{


 
 
 
 
s
e
t
E
d
i
t
i
n
g
I
d
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
o
r
m
(
e
m
p
t
y
F
o
r
m
(
)
)
;


 
 
 
 
s
e
t
M
o
d
a
l
O
p
e
n
(
t
r
u
e
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
 
o
p
e
n
E
d
i
t
(
b
a
d
g
e
:
 
B
a
d
g
e
)
 
{


 
 
 
 
s
e
t
E
d
i
t
i
n
g
I
d
(
b
a
d
g
e
.
i
d
)
;


 
 
 
 
s
e
t
F
o
r
m
(
b
a
d
g
e
T
o
F
o
r
m
(
b
a
d
g
e
)
)
;


 
 
 
 
s
e
t
M
o
d
a
l
O
p
e
n
(
t
r
u
e
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
 
c
l
o
s
e
M
o
d
a
l
(
)
 
{


 
 
 
 
s
e
t
M
o
d
a
l
O
p
e
n
(
f
a
l
s
e
)
;


 
 
 
 
s
e
t
E
d
i
t
i
n
g
I
d
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
o
r
m
(
e
m
p
t
y
F
o
r
m
(
)
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
 
h
a
n
d
l
e
S
u
b
m
i
t
(
)
 
{


 
 
 
 
i
f
 
(
!
f
o
r
m
.
n
a
m
e
.
t
r
i
m
(
)
)
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
B
a
d
g
e
 
n
a
m
e
 
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
"
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


 
 
 
 
c
o
n
s
t
 
p
a
y
l
o
a
d
 
=
 
f
o
r
m
T
o
B
a
d
g
e
(
f
o
r
m
)
;


 
 
 
 
i
f
 
(
e
d
i
t
i
n
g
I
d
)
 
{


 
 
 
 
 
 
u
p
d
a
t
e
M
u
t
a
t
i
o
n
.
m
u
t
a
t
e
(
{
 
i
d
:
 
e
d
i
t
i
n
g
I
d
,
 
p
a
y
l
o
a
d
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
c
r
e
a
t
e
M
u
t
a
t
i
o
n
.
m
u
t
a
t
e
(
p
a
y
l
o
a
d
)
;


 
 
 
 
}


 
 
}




 
 
f
u
n
c
t
i
o
n
 
a
d
d
P
a
r
a
m
(
)
 
{


 
 
 
 
s
e
t
F
o
r
m
(
(
f
)
 
=
>
 
(
{
 
.
.
.
f
,
 
c
r
i
t
e
r
i
a
P
a
r
a
m
s
:
 
[
.
.
.
f
.
c
r
i
t
e
r
i
a
P
a
r
a
m
s
,
 
{
 
k
e
y
:
 
"
"
,
 
v
a
l
u
e
:
 
"
"
 
}
]
 
}
)
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
 
u
p
d
a
t
e
P
a
r
a
m
(
i
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
,
 
f
i
e
l
d
:
 
"
k
e
y
"
 
|
 
"
v
a
l
u
e
"
,
 
v
a
l
u
e
:
 
s
t
r
i
n
g
)
 
{


 
 
 
 
s
e
t
F
o
r
m
(
(
f
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
a
r
a
m
s
 
=
 
[
.
.
.
f
.
c
r
i
t
e
r
i
a
P
a
r
a
m
s
]
;


 
 
 
 
 
 
p
a
r
a
m
s
[
i
n
d
e
x
]
 
=
 
{
 
.
.
.
p
a
r
a
m
s
[
i
n
d
e
x
]
,
 
[
f
i
e
l
d
]
:
 
v
a
l
u
e
 
}
;


 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
.
.
.
f
,
 
c
r
i
t
e
r
i
a
P
a
r
a
m
s
:
 
p
a
r
a
m
s
 
}
;


 
 
 
 
}
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
 
r
e
m
o
v
e
P
a
r
a
m
(
i
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
)
 
{


 
 
 
 
s
e
t
F
o
r
m
(
(
f
)
 
=
>
 
(
{


 
 
 
 
 
 
.
.
.
f
,


 
 
 
 
 
 
c
r
i
t
e
r
i
a
P
a
r
a
m
s
:
 
f
.
c
r
i
t
e
r
i
a
P
a
r
a
m
s
.
f
i
l
t
e
r
(
(
_
,
 
i
)
 
=
>
 
i
 
!
=
=
 
i
n
d
e
x
)
,


 
 
 
 
}
)
)
;


 
 
}




 
 
c
o
n
s
t
 
i
s
S
a
v
i
n
g
 
=
 
c
r
e
a
t
e
M
u
t
a
t
i
o
n
.
i
s
P
e
n
d
i
n
g
 
|
|
 
u
p
d
a
t
e
M
u
t
a
t
i
o
n
.
i
s
P
e
n
d
i
n
g
;




 
 
/
/
 
─
─
 
S
t
y
l
e
s
 
─
─




 
 
c
o
n
s
t
 
i
n
p
u
t
C
l
a
s
s
 
=


 
 
 
 
"
w
-
f
u
l
l
 
p
x
-
3
 
p
y
-
2
 
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
w
h
i
t
e
 
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
5
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
C
l
a
s
s
 
=


 
 
 
 
"
w
-
f
u
l
l
 
p
x
-
3
 
p
y
-
2
 
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
w
h
i
t
e
 
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
5
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
;


 
 
c
o
n
s
t
 
l
a
b
e
l
C
l
a
s
s
 
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
4
0
0
 
m
b
-
1
"
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
a
n
a
g
e
 
B
a
d
g
e
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
b
-
6
"
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
w
h
i
t
e
 
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
6
 
h
-
6
 
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
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
B
a
d
g
e
s


 
 
 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
a
g
i
n
a
t
i
o
n
 
?
 
`
$
{
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
}
 
b
a
d
g
e
$
{
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
 
!
=
=
 
1
 
?
 
"
s
"
 
:
 
"
"
}
`
 
:
 
"
L
o
a
d
i
n
g
.
.
.
"
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
B
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
o
p
e
n
C
r
e
a
t
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
p
r
i
m
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
m
d
"
>


 
 
 
 
 
 
 
 
 
 
<
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
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
N
e
w
 
B
a
d
g
e


 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
{
/
*
 
F
i
l
t
e
r
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
 
m
a
x
-
w
-
x
s
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
5
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


 
 
 
 
 
 
 
 
 
 
 
 
c
l
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
3
 
p
y
-
2
 
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
l
g
 
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
w
h
i
t
e
 
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
5
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
 
b
a
d
g
e
s
.
.
.
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
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
a
g
e
(
1
)
;


 
 
 
 
 
 
 
 
 
 
 
 
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
5
0
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
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
p
l
-
9
 
p
r
-
8
 
p
y
-
2
 
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
l
g
 
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
w
h
i
t
e
 
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
5
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
 
a
p
p
e
a
r
a
n
c
e
-
n
o
n
e
 
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


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
c
a
t
e
g
o
r
y
F
i
l
t
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
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
C
a
t
e
g
o
r
y
F
i
l
t
e
r
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
 
a
s
 
B
a
d
g
e
C
a
t
e
g
o
r
y
 
|
 
"
A
L
L
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
a
g
e
(
1
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
A
L
L
"
>
A
l
l
 
C
a
t
e
g
o
r
i
e
s
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
C
A
T
E
G
O
R
I
E
S
.
m
a
p
(
(
c
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
k
e
y
=
{
c
}
 
v
a
l
u
e
=
{
c
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
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
a
b
l
e
 
*
/
}


 
 
 
 
 
 
{
i
s
L
o
a
d
i
n
g
 
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
1
,
 
2
,
 
3
,
 
4
,
 
5
]
.
m
a
p
(
(
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
h
-
1
4
 
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
l
g
 
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


 
 
 
 
 
 
)
 
:
 
b
a
d
g
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
1
0
 
h
-
1
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
p
>
N
o
 
b
a
d
g
e
s
 
f
o
u
n
d
.
 
C
r
e
a
t
e
 
y
o
u
r
 
f
i
r
s
t
 
o
n
e
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
t
a
b
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
f
u
l
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
4
0
0
 
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
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
t
e
x
t
-
l
e
f
t
 
p
x
-
4
 
p
y
-
3
"
>
N
a
m
e
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
t
e
x
t
-
l
e
f
t
 
p
x
-
4
 
p
y
-
3
"
>
C
a
t
e
g
o
r
y
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
t
e
x
t
-
l
e
f
t
 
p
x
-
4
 
p
y
-
3
"
>
C
r
i
t
e
r
i
a
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
x
-
4
 
p
y
-
3
"
>
A
c
t
i
v
e
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
x
-
4
 
p
y
-
3
"
>
E
a
r
n
e
d
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
 
p
x
-
4
 
p
y
-
3
"
>
A
c
t
i
o
n
s
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
b
o
d
y
 
c
l
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
a
d
g
e
s
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
r
i
t
e
r
i
a
 
=
 
b
a
d
g
e
.
c
r
i
t
e
r
i
a
 
a
s
 
{
 
t
y
p
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
 
p
a
r
a
m
s
?
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
 
u
n
k
n
o
w
n
>
 
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
m
o
t
i
o
n
.
t
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
i
d
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
/
3
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
t
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
p
x
-
4
 
p
y
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
U
r
l
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
m
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
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
U
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
b
a
d
g
e
.
n
a
m
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
l
g
 
o
b
j
e
c
t
-
c
o
v
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
l
g
 
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
0
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
h
i
t
e
"
>
{
b
a
d
g
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
a
d
g
e
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
g
r
a
y
-
5
0
0
 
t
r
u
n
c
a
t
e
 
m
a
x
-
w
-
x
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
a
d
g
e
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
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
p
x
-
4
 
p
y
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
{
`
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
 
$
{
C
A
T
E
G
O
R
Y
_
C
O
L
O
R
S
[
b
a
d
g
e
.
c
a
t
e
g
o
r
y
]


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
a
d
g
e
.
c
a
t
e
g
o
r
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
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
p
x
-
4
 
p
y
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
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
r
i
t
e
r
i
a
.
t
y
p
e
 
?
?
 
"
-
-
-
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
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
c
e
n
t
e
r
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
s
A
c
t
i
v
e
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
o
g
g
l
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Y
e
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
o
g
g
l
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
o


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
c
e
n
t
e
r
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
3
0
0
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
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
a
d
g
e
.
_
c
o
u
n
t
?
.
s
t
u
d
e
n
t
B
a
d
g
e
s
 
?
?
 
0
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
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
r
i
g
h
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
 
o
p
e
n
E
d
i
t
(
b
a
d
g
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
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
E
d
i
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
e
n
c
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
D
e
l
e
t
e
T
a
r
g
e
t
(
b
a
d
g
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
"
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
r
e
d
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
r
e
d
-
5
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
l
g
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
D
e
l
e
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
a
s
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
/
t
d
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
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
<
/
t
a
b
l
e
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
 
P
a
g
i
n
a
t
i
o
n
 
*
/
}


 
 
 
 
 
 
{
p
a
g
i
n
a
t
i
o
n
 
&
&
 
(


 
 
 
 
 
 
 
 
<
P
a
g
i
n
a
t
i
o
n
C
o
n
t
r
o
l
s


 
 
 
 
 
 
 
 
 
 
c
u
r
r
e
n
t
P
a
g
e
=
{
p
a
g
e
}


 
 
 
 
 
 
 
 
 
 
t
o
t
a
l
P
a
g
e
s
=
{
p
a
g
i
n
a
t
i
o
n
.
t
o
t
a
l
P
a
g
e
s
}


 
 
 
 
 
 
 
 
 
 
o
n
P
a
g
e
C
h
a
n
g
e
=
{
s
e
t
P
a
g
e
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
C
r
e
a
t
e
 
/
 
E
d
i
t
 
M
o
d
a
l
 
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
m
o
d
a
l
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
 
z
-
5
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
 
b
g
-
b
l
a
c
k
/
6
0
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
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
c
l
o
s
e
M
o
d
a
l
}


 
 
 
 
 
 
 
 
 
 
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
 
s
c
a
l
e
:
 
0
.
9
5
,
 
y
:
 
1
2
 
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
 
s
c
a
l
e
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
 
s
c
a
l
e
:
 
0
.
9
5
,
 
y
:
 
1
2
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
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
2
x
l
 
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
l
g
 
m
x
-
4
 
m
a
x
-
h
-
[
8
5
v
h
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
e
)
 
=
>
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
M
o
d
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
6
 
p
y
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
d
i
t
i
n
g
I
d
 
?
 
"
E
d
i
t
 
B
a
d
g
e
"
 
:
 
"
C
r
e
a
t
e
 
B
a
d
g
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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
c
l
o
s
e
M
o
d
a
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
5
 
h
-
5
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
M
o
d
a
l
 
b
o
d
y
 
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
x
-
6
 
p
y
-
5
 
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
 
N
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
{
l
a
b
e
l
C
l
a
s
s
}
>
N
a
m
e
 
*
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
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
{
i
n
p
u
t
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
n
a
m
e
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
F
o
r
m
(
(
f
)
 
=
>
 
(
{
 
.
.
.
f
,
 
n
a
m
e
:
 
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
 
}
)
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
e
.
g
.
 
C
a
r
e
e
r
 
E
x
p
l
o
r
e
r
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
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
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
{
l
a
b
e
l
C
l
a
s
s
}
>
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
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
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
$
{
i
n
p
u
t
C
l
a
s
s
}
 
m
i
n
-
h
-
[
7
2
p
x
]
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
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
F
o
r
m
(
(
f
)
 
=
>
 
(
{
 
.
.
.
f
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
 
}
)
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
W
h
a
t
 
t
h
i
s
 
b
a
d
g
e
 
r
e
p
r
e
s
e
n
t
s
.
.
.
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
 
C
a
t
e
g
o
r
y
 
+
 
A
c
t
i
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
2
 
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
{
l
a
b
e
l
C
l
a
s
s
}
>
C
a
t
e
g
o
r
y
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
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
{
s
e
l
e
c
t
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
c
a
t
e
g
o
r
y
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
F
o
r
m
(
(
f
)
 
=
>
 
(
{
 
.
.
.
f
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
 
a
s
 
B
a
d
g
e
C
a
t
e
g
o
r
y
 
}
)
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
C
A
T
E
G
O
R
I
E
S
.
m
a
p
(
(
c
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
k
e
y
=
{
c
}
 
v
a
l
u
e
=
{
c
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
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
e
n
d
 
p
b
-
1
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
c
h
e
c
k
b
o
x
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
h
e
c
k
e
d
=
{
f
o
r
m
.
i
s
A
c
t
i
v
e
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
F
o
r
m
(
(
f
)
 
=
>
 
(
{
 
.
.
.
f
,
 
i
s
A
c
t
i
v
e
:
 
e
.
t
a
r
g
e
t
.
c
h
e
c
k
e
d
 
}
)
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
r
o
u
n
d
e
d
 
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
i
n
d
i
g
o
-
5
0
0
 
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
i
n
d
i
g
o
-
5
0
0
 
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
o
f
f
s
e
t
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
3
0
0
"
>
A
c
t
i
v
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
l
a
b
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
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
r
i
t
e
r
i
a
 
t
y
p
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
{
l
a
b
e
l
C
l
a
s
s
}
>
C
r
i
t
e
r
i
a
 
T
y
p
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
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
{
s
e
l
e
c
t
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
c
r
i
t
e
r
i
a
T
y
p
e
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
F
o
r
m
(
(
f
)
 
=
>
 
(
{
 
.
.
.
f
,
 
c
r
i
t
e
r
i
a
T
y
p
e
:
 
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
 
}
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
C
R
I
T
E
R
I
A
_
T
Y
P
E
S
.
m
a
p
(
(
c
t
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
k
e
y
=
{
c
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
l
u
e
=
{
c
t
.
v
a
l
u
e
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
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
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
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
 
C
r
i
t
e
r
i
a
 
p
a
r
a
m
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
b
-
2
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
4
0
0
 
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
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
r
i
t
e
r
i
a
 
P
a
r
a
m
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
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
a
d
d
P
a
r
a
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
i
n
d
i
g
o
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
i
n
d
i
g
o
-
3
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
+
 
A
d
d
 
P
a
r
a
m


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
o
r
m
.
c
r
i
t
e
r
i
a
P
a
r
a
m
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
 
?
 
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
g
r
a
y
-
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
p
a
r
a
m
s
.
 
A
d
d
 
k
e
y
-
v
a
l
u
e
 
p
a
i
r
s
 
l
i
k
e
 
c
o
u
n
t
,
 
c
a
r
e
e
r
I
d
,
 
e
t
c
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
o
r
m
.
c
r
i
t
e
r
i
a
P
a
r
a
m
s
.
m
a
p
(
(
p
a
r
a
m
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
i
n
p
u
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
{
`
$
{
i
n
p
u
t
C
l
a
s
s
}
 
f
l
e
x
-
1
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
p
a
r
a
m
.
k
e
y
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
 
u
p
d
a
t
e
P
a
r
a
m
(
i
,
 
"
k
e
y
"
,
 
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
K
e
y
 
(
e
.
g
.
 
c
o
u
n
t
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
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
{
`
$
{
i
n
p
u
t
C
l
a
s
s
}
 
f
l
e
x
-
1
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
p
a
r
a
m
.
v
a
l
u
e
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
 
u
p
d
a
t
e
P
a
r
a
m
(
i
,
 
"
v
a
l
u
e
"
,
 
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
V
a
l
u
e
 
(
e
.
g
.
 
5
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
 
r
e
m
o
v
e
P
a
r
a
m
(
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
g
r
a
y
-
5
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
r
e
d
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
 
M
o
d
a
l
 
f
o
o
t
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
3
 
p
x
-
6
 
p
y
-
4
 
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
 
o
n
C
l
i
c
k
=
{
c
l
o
s
e
M
o
d
a
l
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
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
a
n
c
e
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
S
u
b
m
i
t
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
i
s
S
a
v
i
n
g
 
|
|
 
!
f
o
r
m
.
n
a
m
e
.
t
r
i
m
(
)
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
p
r
i
m
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
m
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
S
a
v
i
n
g
 
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
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
d
i
t
i
n
g
I
d
 
?
 
"
S
a
v
e
 
C
h
a
n
g
e
s
"
 
:
 
"
C
r
e
a
t
e
 
B
a
d
g
e
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
 
D
e
l
e
t
e
 
C
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
 
M
o
d
a
l
 
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
d
e
l
e
t
e
T
a
r
g
e
t
 
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
 
z
-
5
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
 
b
g
-
b
l
a
c
k
/
6
0
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
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
D
e
l
e
t
e
T
a
r
g
e
t
(
n
u
l
l
)
}


 
 
 
 
 
 
 
 
 
 
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
 
s
c
a
l
e
:
 
0
.
9
5
,
 
y
:
 
1
2
 
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
 
s
c
a
l
e
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
 
s
c
a
l
e
:
 
0
.
9
5
,
 
y
:
 
1
2
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
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
2
x
l
 
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
s
m
 
m
x
-
4
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
e
)
 
=
>
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
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
p
x
-
6
 
p
y
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
r
e
d
-
5
0
0
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
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
a
s
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
r
e
d
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
D
e
l
e
t
e
 
B
a
d
g
e
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
r
e
 
y
o
u
 
s
u
r
e
 
y
o
u
 
w
a
n
t
 
t
o
 
d
e
l
e
t
e
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
w
h
i
t
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
{
d
e
l
e
t
e
T
a
r
g
e
t
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
?
 
T
h
i
s
 
w
i
l
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
s
o
 
r
e
m
o
v
e
 
i
t
 
f
r
o
m
 
a
l
l
 
s
t
u
d
e
n
t
s
 
w
h
o
 
e
a
r
n
e
d
 
i
t
.
 
T
h
i
s
 
a
c
t
i
o
n
 
c
a
n
n
o
t
 
b
e
 
u
n
d
o
n
e
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
3
 
p
x
-
6
 
p
y
-
4
 
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
8
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
D
e
l
e
t
e
T
a
r
g
e
t
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
p
x
-
4
 
p
y
-
2
 
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
l
g
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
a
n
c
e
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
d
e
l
e
t
e
M
u
t
a
t
i
o
n
.
m
u
t
a
t
e
(
d
e
l
e
t
e
T
a
r
g
e
t
.
i
d
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
d
e
l
e
t
e
M
u
t
a
t
i
o
n
.
i
s
P
e
n
d
i
n
g
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
2
 
p
x
-
4
 
p
y
-
2
 
b
g
-
r
e
d
-
6
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
 
h
o
v
e
r
:
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
e
l
e
t
e
M
u
t
a
t
i
o
n
.
i
s
P
e
n
d
i
n
g
 
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
 
n
u
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
e
l
e
t
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


