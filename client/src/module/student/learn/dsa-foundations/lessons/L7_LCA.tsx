
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
 
B
o
o
k
O
p
e
n
,
 
C
o
d
e
2
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
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


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
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
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
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


 
 
A
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
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
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
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
l
o
u
t
,


 
 
C
a
r
d
,


 
 
I
n
l
i
n
e
C
o
d
e
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
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
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
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
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
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
 
"
b
i
n
a
r
y
-
t
r
e
e
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
e
e
 
m
o
d
e
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




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
N
o
d
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


 
 
p
a
r
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


 
 
c
h
i
l
d
r
e
n
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
e
p
t
h
:
 
n
u
m
b
e
r
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
 
p
a
r
s
e
T
r
e
e
(
i
n
p
u
t
:
 
s
t
r
i
n
g
)
:
 
{
 
r
o
o
t
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
 
n
o
d
e
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
 
T
N
o
d
e
>
 
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
 
t
o
k
e
n
s
 
=
 
i
n
p
u
t
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
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
 
t
.
t
r
i
m
(
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
B
o
o
l
e
a
n
)
;


 
 
i
f
 
(
t
o
k
e
n
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
 
n
o
d
e
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
 
T
N
o
d
e
>
 
=
 
{
}
;


 
 
l
e
t
 
r
o
o
t
:
 
s
t
r
i
n
g
 
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
 
t
o
k
 
o
f
 
t
o
k
e
n
s
)
 
{


 
 
 
 
c
o
n
s
t
 
m
 
=
 
t
o
k
.
m
a
t
c
h
(
/
^
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
>
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
$
/
)
;


 
 
 
 
i
f
 
(
!
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


 
 
 
 
c
o
n
s
t
 
[
,
 
p
,
 
c
]
 
=
 
m
;


 
 
 
 
i
f
 
(
r
o
o
t
 
=
=
=
 
u
n
d
e
f
i
n
e
d
)
 
r
o
o
t
 
=
 
p
;


 
 
 
 
i
f
 
(
!
n
o
d
e
s
[
p
]
)
 
n
o
d
e
s
[
p
]
 
=
 
{
 
i
d
:
 
p
,
 
c
h
i
l
d
r
e
n
:
 
[
]
,
 
d
e
p
t
h
:
 
0
 
}
;


 
 
 
 
i
f
 
(
!
n
o
d
e
s
[
c
]
)
 
n
o
d
e
s
[
c
]
 
=
 
{
 
i
d
:
 
c
,
 
c
h
i
l
d
r
e
n
:
 
[
]
,
 
d
e
p
t
h
:
 
0
 
}
;


 
 
 
 
i
f
 
(
n
o
d
e
s
[
c
]
.
p
a
r
e
n
t
 
!
=
=
 
u
n
d
e
f
i
n
e
d
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


 
 
 
 
n
o
d
e
s
[
c
]
.
p
a
r
e
n
t
 
=
 
p
;


 
 
 
 
n
o
d
e
s
[
p
]
.
c
h
i
l
d
r
e
n
.
p
u
s
h
(
c
)
;


 
 
}


 
 
i
f
 
(
!
r
o
o
t
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
 
Q
 
=
 
[
r
o
o
t
]
;


 
 
n
o
d
e
s
[
r
o
o
t
]
.
d
e
p
t
h
 
=
 
0
;


 
 
w
h
i
l
e
 
(
Q
.
l
e
n
g
t
h
)
 
{


 
 
 
 
c
o
n
s
t
 
u
 
=
 
Q
.
s
h
i
f
t
(
)
!
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
 
c
h
i
l
d
 
o
f
 
n
o
d
e
s
[
u
]
.
c
h
i
l
d
r
e
n
)
 
{


 
 
 
 
 
 
n
o
d
e
s
[
c
h
i
l
d
]
.
d
e
p
t
h
 
=
 
n
o
d
e
s
[
u
]
.
d
e
p
t
h
 
+
 
1
;


 
 
 
 
 
 
Q
.
p
u
s
h
(
c
h
i
l
d
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
 
r
o
o
t
I
d
:
 
r
o
o
t
,
 
n
o
d
e
s
 
}
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
B
i
n
a
r
y
 
l
i
f
t
i
n
g
 
t
a
b
l
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
L
i
f
t
T
a
b
l
e
 
{


 
 
u
p
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
 
(
s
t
r
i
n
g
 
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
)
[
]
>
;


 
 
L
O
G
:
 
n
u
m
b
e
r
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
u
i
l
d
L
i
f
t
i
n
g
(
r
o
o
t
I
d
:
 
s
t
r
i
n
g
,
 
n
o
d
e
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
 
T
N
o
d
e
>
)
:
 
L
i
f
t
T
a
b
l
e
 
{


 
 
c
o
n
s
t
 
i
d
s
 
=
 
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
n
o
d
e
s
)
;


 
 
l
e
t
 
m
a
x
D
e
p
t
h
 
=
 
0
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
 
i
d
 
o
f
 
i
d
s
)
 
m
a
x
D
e
p
t
h
 
=
 
M
a
t
h
.
m
a
x
(
m
a
x
D
e
p
t
h
,
 
n
o
d
e
s
[
i
d
]
.
d
e
p
t
h
)
;


 
 
c
o
n
s
t
 
L
O
G
 
=
 
M
a
t
h
.
m
a
x
(
1
,
 
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
M
a
t
h
.
l
o
g
2
(
m
a
x
D
e
p
t
h
 
+
 
2
)
)
)
;


 
 
c
o
n
s
t
 
u
p
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
 
(
s
t
r
i
n
g
 
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
)
[
]
>
 
=
 
{
}
;


 
 
c
o
n
s
t
 
Q
 
=
 
[
r
o
o
t
I
d
]
;


 
 
w
h
i
l
e
 
(
Q
.
l
e
n
g
t
h
)
 
{


 
 
 
 
c
o
n
s
t
 
u
 
=
 
Q
.
s
h
i
f
t
(
)
!
;


 
 
 
 
u
p
[
u
]
 
=
 
n
e
w
 
A
r
r
a
y
(
L
O
G
)
.
f
i
l
l
(
u
n
d
e
f
i
n
e
d
)
;


 
 
 
 
u
p
[
u
]
[
0
]
 
=
 
n
o
d
e
s
[
u
]
.
p
a
r
e
n
t
;


 
 
 
 
f
o
r
 
(
l
e
t
 
k
 
=
 
1
;
 
k
 
<
 
L
O
G
;
 
k
+
+
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
m
i
d
 
=
 
u
p
[
u
]
[
k
 
-
 
1
]
;


 
 
 
 
 
 
u
p
[
u
]
[
k
]
 
=
 
m
i
d
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
?
 
u
p
[
m
i
d
]
?
.
[
k
 
-
 
1
]
 
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
;


 
 
 
 
}


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
c
h
i
l
d
 
o
f
 
n
o
d
e
s
[
u
]
.
c
h
i
l
d
r
e
n
)
 
Q
.
p
u
s
h
(
c
h
i
l
d
)
;


 
 
}


 
 
r
e
t
u
r
n
 
{
 
u
p
,
 
L
O
G
 
}
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
C
A
 
f
r
a
m
e
 
b
u
i
l
d
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
L
C
A
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
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
>
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
u
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


 
 
v
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


 
 
u
H
i
g
h
l
i
g
h
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


 
 
v
H
i
g
h
l
i
g
h
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


 
 
h
i
g
h
l
i
g
h
t
C
e
l
l
?
:
 
{
 
n
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
 
k
:
 
n
u
m
b
e
r
 
}
;


 
 
r
e
s
u
l
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


 
 
f
l
a
s
h
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


 
 
t
a
b
l
e
:
 
L
i
f
t
T
a
b
l
e
;


}




c
o
n
s
t
 
P
S
E
U
D
O
_
L
C
A
 
=
 
[


 
 
"
#
 
B
i
n
a
r
y
 
l
i
f
t
i
n
g
 
L
C
A
 
q
u
e
r
y
"
,


 
 
"
f
u
n
c
t
i
o
n
 
L
C
A
(
u
,
 
v
)
:
"
,


 
 
"
 
 
#
 
P
h
a
s
e
 
1
:
 
l
i
f
t
 
d
e
e
p
e
r
 
n
o
d
e
 
t
o
 
m
a
t
c
h
 
d
e
p
t
h
"
,


 
 
"
 
 
i
f
 
d
e
p
t
h
[
u
]
 
<
 
d
e
p
t
h
[
v
]
:
 
s
w
a
p
(
u
,
 
v
)
"
,


 
 
"
 
 
d
i
f
f
 
←
 
d
e
p
t
h
[
u
]
 
−
 
d
e
p
t
h
[
v
]
"
,


 
 
"
 
 
f
o
r
 
k
 
i
n
 
0
.
.
L
O
G
:
"
,


 
 
"
 
 
 
 
i
f
 
(
d
i
f
f
 
>
>
 
k
)
 
&
 
1
:
 
u
 
←
 
u
p
[
u
]
[
k
]
"
,


 
 
"
 
 
i
f
 
u
 
=
=
 
v
:
 
r
e
t
u
r
n
 
u
"
,


 
 
"
 
 
#
 
P
h
a
s
e
 
2
:
 
l
i
f
t
 
b
o
t
h
 
w
i
t
h
o
u
t
 
m
e
e
t
i
n
g
"
,


 
 
"
 
 
f
o
r
 
k
 
f
r
o
m
 
L
O
G
-
1
 
d
o
w
n
 
t
o
 
0
:
"
,


 
 
"
 
 
 
 
i
f
 
u
p
[
u
]
[
k
]
 
≠
 
u
p
[
v
]
[
k
]
:
"
,


 
 
"
 
 
 
 
 
 
u
 
←
 
u
p
[
u
]
[
k
]
;
 
v
 
←
 
u
p
[
v
]
[
k
]
"
,


 
 
"
 
 
#
 
L
C
A
 
i
s
 
p
a
r
e
n
t
 
o
f
 
c
u
r
r
e
n
t
 
u
"
,


 
 
"
 
 
r
e
t
u
r
n
 
u
p
[
u
]
[
0
]
"
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
 
b
u
i
l
d
L
C
A
F
r
a
m
e
s
(


 
 
_
r
o
o
t
I
d
:
 
s
t
r
i
n
g
,


 
 
n
o
d
e
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
 
T
N
o
d
e
>
,


 
 
t
a
b
l
e
:
 
L
i
f
t
T
a
b
l
e
,


 
 
u
O
r
i
g
:
 
s
t
r
i
n
g
,


 
 
v
O
r
i
g
:
 
s
t
r
i
n
g
,


)
:
 
L
C
A
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
L
C
A
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
i
f
 
(
!
n
o
d
e
s
[
u
O
r
i
g
]
 
|
|
 
!
n
o
d
e
s
[
v
O
r
i
g
]
)
 
{


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
e
r
r
o
r
:
 
"
n
o
d
e
 
m
i
s
s
i
n
g
"
 
}
,
 
m
e
s
s
a
g
e
:
 
"
V
e
r
t
e
x
 
n
o
t
 
i
n
 
t
r
e
e
.
"
,
 
u
I
d
:
 
u
O
r
i
g
,
 
v
I
d
:
 
v
O
r
i
g
,
 
t
a
b
l
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
 
f
r
a
m
e
s
;


 
 
}


 
 
l
e
t
 
u
 
=
 
u
O
r
i
g
,
 
v
 
=
 
v
O
r
i
g
;


 
 
c
o
n
s
t
 
s
n
a
p
 
=
 
(


 
 
 
 
l
i
n
e
:
 
n
u
m
b
e
r
,


 
 
 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
,


 
 
 
 
v
a
r
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
>
 
=
 
{
}
,


 
 
 
 
e
x
t
r
a
:
 
P
a
r
t
i
a
l
<
L
C
A
F
r
a
m
e
>
 
=
 
{
}
,


 
 
)
 
=
>
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
,
 
v
a
r
s
,
 
m
e
s
s
a
g
e
,
 
u
I
d
:
 
u
,
 
v
I
d
:
 
v
,
 
t
a
b
l
e
,
 
.
.
.
e
x
t
r
a
 
}
)
;




 
 
s
n
a
p
(
1
,
 
`
S
t
a
r
t
 
L
C
A
(
$
{
u
}
,
 
$
{
v
}
)
.
 
d
e
p
t
h
[
$
{
u
}
]
=
$
{
n
o
d
e
s
[
u
]
.
d
e
p
t
h
}
,
 
d
e
p
t
h
[
$
{
v
}
]
=
$
{
n
o
d
e
s
[
v
]
.
d
e
p
t
h
}
.
`
,


 
 
 
 
{
 
u
,
 
v
,
 
"
d
e
p
t
h
[
u
]
"
:
 
n
o
d
e
s
[
u
]
.
d
e
p
t
h
,
 
"
d
e
p
t
h
[
v
]
"
:
 
n
o
d
e
s
[
v
]
.
d
e
p
t
h
 
}
)
;




 
 
i
f
 
(
n
o
d
e
s
[
u
]
.
d
e
p
t
h
 
<
 
n
o
d
e
s
[
v
]
.
d
e
p
t
h
)
 
{


 
 
 
 
[
u
,
 
v
]
 
=
 
[
v
,
 
u
]
;


 
 
 
 
s
n
a
p
(
3
,
 
`
S
w
a
p
 
s
o
 
u
 
i
s
 
d
e
e
p
e
r
:
 
u
=
$
{
u
}
 
(
d
e
p
t
h
 
$
{
n
o
d
e
s
[
u
]
.
d
e
p
t
h
}
)
,
 
v
=
$
{
v
}
 
(
d
e
p
t
h
 
$
{
n
o
d
e
s
[
v
]
.
d
e
p
t
h
}
)
.
`
,


 
 
 
 
 
 
{
 
u
,
 
v
 
}
,
 
{
 
f
l
a
s
h
K
e
y
:
 
"
u
"
 
}
)
;


 
 
}




 
 
c
o
n
s
t
 
d
i
f
f
 
=
 
n
o
d
e
s
[
u
]
.
d
e
p
t
h
 
-
 
n
o
d
e
s
[
v
]
.
d
e
p
t
h
;


 
 
s
n
a
p
(
4
,
 
`
d
i
f
f
 
=
 
$
{
n
o
d
e
s
[
u
]
.
d
e
p
t
h
}
 
−
 
$
{
n
o
d
e
s
[
v
]
.
d
e
p
t
h
}
 
=
 
$
{
d
i
f
f
}
 
 
(
b
i
n
a
r
y
:
 
$
{
d
i
f
f
.
t
o
S
t
r
i
n
g
(
2
)
}
)
.
`
,


 
 
 
 
{
 
d
i
f
f
,
 
b
i
t
s
:
 
d
i
f
f
.
t
o
S
t
r
i
n
g
(
2
)
 
}
,
 
{
 
f
l
a
s
h
K
e
y
:
 
"
d
i
f
f
"
 
}
)
;




 
 
f
o
r
 
(
l
e
t
 
k
 
=
 
0
;
 
k
 
<
 
t
a
b
l
e
.
L
O
G
;
 
k
+
+
)
 
{


 
 
 
 
i
f
 
(
(
d
i
f
f
 
>
>
 
k
)
 
&
 
1
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
t
a
r
g
e
t
 
=
 
t
a
b
l
e
.
u
p
[
u
]
?
.
[
k
]
;


 
 
 
 
 
 
s
n
a
p
(
6
,
 
`
B
i
t
 
k
=
$
{
k
}
 
s
e
t
 
→
 
j
u
m
p
 
2
^
$
{
k
}
=
$
{
1
 
<
<
 
k
}
 
l
e
v
e
l
s
:
 
$
{
u
}
 
→
 
$
{
t
a
r
g
e
t
 
?
?
 
"
?
"
}
.
`
,


 
 
 
 
 
 
 
 
{
 
k
,
 
"
2
^
k
"
:
 
1
 
<
<
 
k
,
 
"
u
p
[
u
]
[
k
]
"
:
 
t
a
r
g
e
t
 
?
?
 
"
−
"
 
}
,


 
 
 
 
 
 
 
 
{
 
h
i
g
h
l
i
g
h
t
C
e
l
l
:
 
{
 
n
o
d
e
:
 
u
,
 
k
 
}
,
 
u
H
i
g
h
l
i
g
h
t
:
 
t
a
r
g
e
t
 
}
)
;


 
 
 
 
 
 
i
f
 
(
t
a
r
g
e
t
)
 
u
 
=
 
t
a
r
g
e
t
;


 
 
 
 
}


 
 
}




 
 
i
f
 
(
u
 
=
=
=
 
v
)
 
{


 
 
 
 
s
n
a
p
(
7
,
 
`
A
f
t
e
r
 
l
i
f
t
,
 
u
 
=
=
 
v
 
=
=
 
$
{
u
}
 
 
→
 
L
C
A
 
f
o
u
n
d
 
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
.
`
,


 
 
 
 
 
 
{
 
l
c
a
:
 
u
 
}
,
 
{
 
r
e
s
u
l
t
:
 
u
,
 
u
H
i
g
h
l
i
g
h
t
:
 
u
,
 
v
H
i
g
h
l
i
g
h
t
:
 
v
,
 
f
l
a
s
h
K
e
y
:
 
"
l
c
a
"
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


 
 
}




 
 
s
n
a
p
(
7
,
 
`
A
f
t
e
r
 
l
i
f
t
:
 
u
=
$
{
u
}
,
 
v
=
$
{
v
}
 
(
s
a
m
e
 
d
e
p
t
h
 
$
{
n
o
d
e
s
[
u
]
.
d
e
p
t
h
}
,
 
n
o
t
 
e
q
u
a
l
 
y
e
t
)
.
`
,
 
{
 
u
,
 
v
 
}
)
;




 
 
f
o
r
 
(
l
e
t
 
k
 
=
 
t
a
b
l
e
.
L
O
G
 
-
 
1
;
 
k
 
>
=
 
0
;
 
k
-
-
)
 
{


 
 
 
 
c
o
n
s
t
 
u
p
U
 
=
 
t
a
b
l
e
.
u
p
[
u
]
?
.
[
k
]
;


 
 
 
 
c
o
n
s
t
 
u
p
V
 
=
 
t
a
b
l
e
.
u
p
[
v
]
?
.
[
k
]
;


 
 
 
 
s
n
a
p
(
9
,
 
`
k
=
$
{
k
}
:
 
u
p
[
$
{
u
}
]
[
$
{
k
}
]
=
$
{
u
p
U
 
?
?
 
"
−
"
}
,
 
u
p
[
$
{
v
}
]
[
$
{
k
}
]
=
$
{
u
p
V
 
?
?
 
"
−
"
}
.
`
,


 
 
 
 
 
 
{
 
k
,
 
"
u
p
[
u
]
"
:
 
u
p
U
 
?
?
 
"
−
"
,
 
"
u
p
[
v
]
"
:
 
u
p
V
 
?
?
 
"
−
"
 
}
,


 
 
 
 
 
 
{
 
h
i
g
h
l
i
g
h
t
C
e
l
l
:
 
{
 
n
o
d
e
:
 
u
,
 
k
 
}
,
 
u
H
i
g
h
l
i
g
h
t
:
 
u
,
 
v
H
i
g
h
l
i
g
h
t
:
 
v
 
}
)
;


 
 
 
 
i
f
 
(
u
p
U
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
u
p
V
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
u
p
U
 
!
=
=
 
u
p
V
)
 
{


 
 
 
 
 
 
u
 
=
 
u
p
U
;
 
v
 
=
 
u
p
V
;


 
 
 
 
 
 
s
n
a
p
(
1
1
,
 
`
D
i
f
f
e
r
e
n
t
 
a
n
c
e
s
t
o
r
s
 
→
 
j
u
m
p
 
b
o
t
h
:
 
u
→
$
{
u
}
,
 
v
→
$
{
v
}
.
`
,


 
 
 
 
 
 
 
 
{
 
u
,
 
v
 
}
,
 
{
 
u
H
i
g
h
l
i
g
h
t
:
 
u
,
 
v
H
i
g
h
l
i
g
h
t
:
 
v
 
}
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
s
n
a
p
(
9
,
 
`
S
a
m
e
 
a
n
c
e
s
t
o
r
 
a
t
 
k
=
$
{
k
}
 
→
 
s
k
i
p
 
(
w
o
u
l
d
 
o
v
e
r
s
h
o
o
t
 
L
C
A
)
.
`
,


 
 
 
 
 
 
 
 
{
 
k
 
}
,
 
{
 
u
H
i
g
h
l
i
g
h
t
:
 
u
,
 
v
H
i
g
h
l
i
g
h
t
:
 
v
 
}
)
;


 
 
 
 
}


 
 
}




 
 
c
o
n
s
t
 
l
c
a
 
=
 
t
a
b
l
e
.
u
p
[
u
]
?
.
[
0
]
;


 
 
s
n
a
p
(
1
3
,
 
`
L
C
A
 
=
 
u
p
[
$
{
u
}
]
[
0
]
 
=
 
$
{
l
c
a
 
?
?
 
"
−
"
}
.
`
,


 
 
 
 
{
 
l
c
a
:
 
l
c
a
 
?
?
 
"
−
"
 
}
,
 
{
 
r
e
s
u
l
t
:
 
l
c
a
,
 
f
l
a
s
h
K
e
y
:
 
"
l
c
a
"
,
 
u
H
i
g
h
l
i
g
h
t
:
 
l
c
a
,
 
v
H
i
g
h
l
i
g
h
t
:
 
l
c
a
 
}
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
S
V
G
 
t
r
e
e
 
r
e
n
d
e
r
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
N
o
d
e
P
o
s
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}




f
u
n
c
t
i
o
n
 
l
a
y
o
u
t
T
r
e
e
(


 
 
r
o
o
t
I
d
:
 
s
t
r
i
n
g
,


 
 
n
o
d
e
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
 
T
N
o
d
e
>
,


 
 
W
:
 
n
u
m
b
e
r
,


 
 
H
:
 
n
u
m
b
e
r
,


)
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
 
N
o
d
e
P
o
s
>
 
{


 
 
/
/
 
C
o
m
p
u
t
e
 
s
u
b
t
r
e
e
 
w
i
d
t
h
s
 
b
o
t
t
o
m
-
u
p


 
 
c
o
n
s
t
 
s
u
b
W
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
 
n
u
m
b
e
r
>
 
=
 
{
}
;


 
 
c
o
n
s
t
 
p
o
s
t
O
r
d
e
r
:
 
s
t
r
i
n
g
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
s
t
a
c
k
 
=
 
[
r
o
o
t
I
d
]
;


 
 
w
h
i
l
e
 
(
s
t
a
c
k
.
l
e
n
g
t
h
)
 
{


 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
s
t
a
c
k
.
p
o
p
(
)
!
;


 
 
 
 
p
o
s
t
O
r
d
e
r
.
p
u
s
h
(
i
d
)
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
 
c
 
o
f
 
n
o
d
e
s
[
i
d
]
.
c
h
i
l
d
r
e
n
)
 
s
t
a
c
k
.
p
u
s
h
(
c
)
;


 
 
}


 
 
f
o
r
 
(
c
o
n
s
t
 
i
d
 
o
f
 
p
o
s
t
O
r
d
e
r
.
r
e
v
e
r
s
e
(
)
)
 
{


 
 
 
 
c
o
n
s
t
 
c
h
 
=
 
n
o
d
e
s
[
i
d
]
.
c
h
i
l
d
r
e
n
;


 
 
 
 
s
u
b
W
[
i
d
]
 
=
 
c
h
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
 
1
 
:
 
c
h
.
r
e
d
u
c
e
(
(
s
,
 
c
)
 
=
>
 
s
 
+
 
s
u
b
W
[
c
]
,
 
0
)
;


 
 
}




 
 
c
o
n
s
t
 
m
a
x
D
e
p
t
h
 
=
 
M
a
t
h
.
m
a
x
(
.
.
.
O
b
j
e
c
t
.
v
a
l
u
e
s
(
n
o
d
e
s
)
.
m
a
p
(
(
n
)
 
=
>
 
n
.
d
e
p
t
h
)
)
;


 
 
c
o
n
s
t
 
P
A
D
_
X
 
=
 
2
4
;


 
 
c
o
n
s
t
 
P
A
D
_
Y
 
=
 
3
6
;


 
 
c
o
n
s
t
 
u
s
a
b
l
e
W
 
=
 
W
 
-
 
P
A
D
_
X
 
*
 
2
;


 
 
c
o
n
s
t
 
u
s
a
b
l
e
H
 
=
 
H
 
-
 
P
A
D
_
Y
 
*
 
2
;


 
 
c
o
n
s
t
 
p
o
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
 
N
o
d
e
P
o
s
>
 
=
 
{
}
;




 
 
c
o
n
s
t
 
a
s
s
i
g
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
,
 
x
L
e
f
t
:
 
n
u
m
b
e
r
,
 
x
R
i
g
h
t
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
 
{


 
 
 
 
c
o
n
s
t
 
m
i
d
 
=
 
(
x
L
e
f
t
 
+
 
x
R
i
g
h
t
)
 
/
 
2
;


 
 
 
 
c
o
n
s
t
 
y
 
=
 
P
A
D
_
Y
 
+
 
(
n
o
d
e
s
[
i
d
]
.
d
e
p
t
h
 
/
 
M
a
t
h
.
m
a
x
(
1
,
 
m
a
x
D
e
p
t
h
)
)
 
*
 
u
s
a
b
l
e
H
;


 
 
 
 
p
o
s
[
i
d
]
 
=
 
{
 
x
:
 
P
A
D
_
X
 
+
 
m
i
d
 
*
 
u
s
a
b
l
e
W
,
 
y
 
}
;


 
 
 
 
c
o
n
s
t
 
c
h
 
=
 
n
o
d
e
s
[
i
d
]
.
c
h
i
l
d
r
e
n
;


 
 
 
 
i
f
 
(
c
h
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
 
=
 
s
u
b
W
[
i
d
]
;


 
 
 
 
l
e
t
 
c
u
r
 
=
 
x
L
e
f
t
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
 
c
 
o
f
 
c
h
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
f
r
a
c
 
=
 
s
u
b
W
[
c
]
 
/
 
t
o
t
a
l
;


 
 
 
 
 
 
a
s
s
i
g
n
(
c
,
 
c
u
r
,
 
c
u
r
 
+
 
f
r
a
c
 
*
 
(
x
R
i
g
h
t
 
-
 
x
L
e
f
t
)
)
;


 
 
 
 
 
 
c
u
r
 
+
=
 
f
r
a
c
 
*
 
(
x
R
i
g
h
t
 
-
 
x
L
e
f
t
)
;


 
 
 
 
}


 
 
}
;


 
 
a
s
s
i
g
n
(
r
o
o
t
I
d
,
 
0
,
 
1
)
;


 
 
r
e
t
u
r
n
 
p
o
s
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
 
T
r
e
e
S
V
G
(
{
 
n
o
d
e
s
,
 
r
o
o
t
I
d
,
 
f
r
a
m
e
,
 
W
 
=
 
5
6
0
,
 
H
 
=
 
3
1
0
 
}
:
 
{


 
 
n
o
d
e
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
 
T
N
o
d
e
>
;


 
 
r
o
o
t
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


 
 
f
r
a
m
e
:
 
L
C
A
F
r
a
m
e
;


 
 
W
?
:
 
n
u
m
b
e
r
;


 
 
H
?
:
 
n
u
m
b
e
r
;


}
)
 
{


 
 
c
o
n
s
t
 
p
o
s
 
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
 
l
a
y
o
u
t
T
r
e
e
(
r
o
o
t
I
d
,
 
n
o
d
e
s
,
 
W
,
 
H
)
,
 
[
r
o
o
t
I
d
,
 
n
o
d
e
s
,
 
W
,
 
H
]
)
;


 
 
c
o
n
s
t
 
R
 
=
 
1
6
;




 
 
c
o
n
s
t
 
n
o
d
e
C
o
l
o
r
 
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
:
 
s
t
r
i
n
g
 
=
>
 
{


 
 
 
 
i
f
 
(
i
d
 
=
=
=
 
f
r
a
m
e
.
r
e
s
u
l
t
)
 
r
e
t
u
r
n
 
T
H
E
M
E
.
a
c
c
e
n
t
;


 
 
 
 
i
f
 
(
i
d
 
=
=
=
 
f
r
a
m
e
.
u
H
i
g
h
l
i
g
h
t
)
 
r
e
t
u
r
n
 
"
#
3
b
8
2
f
6
"
;


 
 
 
 
i
f
 
(
i
d
 
=
=
=
 
f
r
a
m
e
.
v
H
i
g
h
l
i
g
h
t
)
 
r
e
t
u
r
n
 
"
#
0
6
b
6
d
4
"
;


 
 
 
 
i
f
 
(
i
d
 
=
=
=
 
f
r
a
m
e
.
u
I
d
)
 
r
e
t
u
r
n
 
"
#
3
b
8
2
f
6
"
;


 
 
 
 
i
f
 
(
i
d
 
=
=
=
 
f
r
a
m
e
.
v
I
d
)
 
r
e
t
u
r
n
 
"
#
0
6
b
6
d
4
"
;


 
 
 
 
r
e
t
u
r
n
 
T
H
E
M
E
.
b
g
;


 
 
}
;


 
 
c
o
n
s
t
 
n
o
d
e
T
e
x
t
C
o
l
o
r
 
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
:
 
s
t
r
i
n
g
 
=
>
 
{


 
 
 
 
i
f
 
(
i
d
 
=
=
=
 
f
r
a
m
e
.
r
e
s
u
l
t
)
 
r
e
t
u
r
n
 
"
#
1
c
1
9
1
7
"
;


 
 
 
 
i
f
 
(
i
d
 
=
=
=
 
f
r
a
m
e
.
u
H
i
g
h
l
i
g
h
t
 
|
|
 
i
d
 
=
=
=
 
f
r
a
m
e
.
u
I
d
)
 
r
e
t
u
r
n
 
"
#
f
f
f
"
;


 
 
 
 
i
f
 
(
i
d
 
=
=
=
 
f
r
a
m
e
.
v
H
i
g
h
l
i
g
h
t
 
|
|
 
i
d
 
=
=
=
 
f
r
a
m
e
.
v
I
d
)
 
r
e
t
u
r
n
 
"
#
f
f
f
"
;


 
 
 
 
r
e
t
u
r
n
 
T
H
E
M
E
.
t
e
x
t
;


 
 
}
;


 
 
c
o
n
s
t
 
s
t
r
o
k
e
C
o
l
o
r
 
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
:
 
s
t
r
i
n
g
 
=
>
 
{


 
 
 
 
i
f
 
(
i
d
 
=
=
=
 
f
r
a
m
e
.
r
e
s
u
l
t
)
 
r
e
t
u
r
n
 
T
H
E
M
E
.
a
c
c
e
n
t
D
a
r
k
;


 
 
 
 
i
f
 
(
i
d
 
=
=
=
 
f
r
a
m
e
.
u
H
i
g
h
l
i
g
h
t
 
|
|
 
i
d
 
=
=
=
 
f
r
a
m
e
.
u
I
d
)
 
r
e
t
u
r
n
 
"
#
1
d
4
e
d
8
"
;


 
 
 
 
i
f
 
(
i
d
 
=
=
=
 
f
r
a
m
e
.
v
H
i
g
h
l
i
g
h
t
 
|
|
 
i
d
 
=
=
=
 
f
r
a
m
e
.
v
I
d
)
 
r
e
t
u
r
n
 
"
#
0
e
7
4
9
0
"
;


 
 
 
 
r
e
t
u
r
n
 
T
H
E
M
E
.
b
o
r
d
e
r
;


 
 
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
s
v
g


 
 
 
 
 
 
w
i
d
t
h
=
{
W
}


 
 
 
 
 
 
h
e
i
g
h
t
=
{
H
}


 
 
 
 
 
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
W
}
 
$
{
H
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
b
l
o
c
k
 
w
-
f
u
l
l
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
a
x
H
e
i
g
h
t
:
 
H
 
}
}


 
 
 
 
>


 
 
 
 
 
 
{
O
b
j
e
c
t
.
v
a
l
u
e
s
(
n
o
d
e
s
)
.
m
a
p
(
(
n
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
 
=
 
p
o
s
[
n
.
i
d
]
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
.
c
h
i
l
d
r
e
n
.
m
a
p
(
(
c
I
d
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
p
 
=
 
p
o
s
[
c
I
d
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
 
|
|
 
!
c
p
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
$
{
n
.
i
d
}
-
$
{
c
I
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
p
.
x
}
 
y
1
=
{
p
.
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
c
p
.
x
}
 
y
2
=
{
c
p
.
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
T
H
E
M
E
.
b
o
r
d
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
{
O
b
j
e
c
t
.
v
a
l
u
e
s
(
n
o
d
e
s
)
.
m
a
p
(
(
n
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
 
=
 
p
o
s
[
n
.
i
d
]
;


 
 
 
 
 
 
 
 
i
f
 
(
!
p
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
 
f
i
l
l
 
=
 
n
o
d
e
C
o
l
o
r
(
n
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
c
 
=
 
n
o
d
e
T
e
x
t
C
o
l
o
r
(
n
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
 
s
c
 
=
 
s
t
r
o
k
e
C
o
l
o
r
(
n
.
i
d
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
g
 
k
e
y
=
{
n
.
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
c
x
=
{
p
.
x
}
 
c
y
=
{
p
.
y
}
 
r
=
{
R
}
 
f
i
l
l
=
{
f
i
l
l
}
 
s
t
r
o
k
e
=
{
s
c
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
2
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
p
.
x
}
 
y
=
{
p
.
y
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
o
m
i
n
a
n
t
B
a
s
e
l
i
n
e
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
=
{
1
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
=
"
b
o
l
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
h
e
a
d
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
t
c
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
p
.
x
}
 
y
=
{
p
.
y
 
+
 
R
 
+
 
1
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
o
m
i
n
a
n
t
B
a
s
e
l
i
n
e
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
=
{
9
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
=
{
n
.
d
e
p
t
h
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
s
v
g
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
i
f
t
 
t
a
b
l
e
 
p
a
n
e
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
i
f
t
T
a
b
l
e
P
a
n
e
l
(
{
 
f
r
a
m
e
,
 
i
d
s
 
}
:
 
{
 
f
r
a
m
e
:
 
L
C
A
F
r
a
m
e
;
 
i
d
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
 
}
)
 
{


 
 
c
o
n
s
t
 
{
 
u
p
,
 
L
O
G
 
}
 
=
 
f
r
a
m
e
.
t
a
b
l
e
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
5
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
p
x
-
3
 
p
t
-
3
 
p
b
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


 
 
 
 
 
 
 
 
u
p
[
v
]
[
k
]
 
=
 
2
^
k
-
t
h
 
a
n
c
e
s
t
o
r


 
 
 
 
 
 
<
/
d
i
v
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
 
t
e
x
t
-
x
s
 
b
o
r
d
e
r
-
c
o
l
l
a
p
s
e
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
p
x
-
2
 
p
y
-
1
 
t
e
x
t
-
l
e
f
t
 
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
5
0
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
"
>
v
<
/
t
h
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
 
L
O
G
 
}
,
 
(
_
,
 
k
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
k
e
y
=
{
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
p
x
-
2
 
p
y
-
1
 
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
5
0
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
=
{
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
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
>


 
 
 
 
 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
 
k
e
y
=
{
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
2
 
p
y
-
1
 
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
1
0
0
 
f
o
n
t
-
m
o
n
o
"
>
{
i
d
}
<
/
t
d
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
 
L
O
G
 
}
,
 
(
_
,
 
k
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
e
l
l
 
=
 
u
p
[
i
d
]
?
.
[
k
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
H
L
 
=
 
f
r
a
m
e
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
C
e
l
l
?
.
n
o
d
e
 
=
=
=
 
i
d
 
&
&
 
f
r
a
m
e
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
C
e
l
l
.
k
 
=
=
=
 
k
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
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
p
x
-
2
 
p
y
-
1
 
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
 
f
o
n
t
-
m
o
n
o
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
:
 
i
s
H
L
 
?
 
"
r
g
b
a
(
5
9
,
1
3
0
,
2
4
6
,
0
.
1
8
)
"
 
:
 
"
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
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
c
e
l
l
 
=
=
=
 
u
n
d
e
f
i
n
e
d
 
?
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
 
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
3
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
e
l
l
 
?
?
 
"
−
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
)
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
3
 
p
y
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


 
 
 
 
 
 
 
 
B
u
i
l
d
:
 
O
(
n
 
l
o
g
 
n
)
 
·
 
Q
u
e
r
y
:
 
O
(
l
o
g
 
n
)


 
 
 
 
 
 
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
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




c
o
n
s
t
 
T
R
E
E
_
P
R
E
S
E
T
S
 
=
 
[


 
 
{
 
l
a
b
e
l
:
 
"
B
a
l
a
n
c
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
 
"
A
>
B
,
 
A
>
C
,
 
B
>
D
,
 
B
>
E
,
 
C
>
F
,
 
C
>
G
,
 
E
>
H
,
 
E
>
I
,
 
G
>
J
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
S
k
e
w
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
 
"
A
>
B
,
 
B
>
C
,
 
C
>
D
,
 
D
>
E
,
 
E
>
F
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
W
i
d
e
"
,
 
v
a
l
u
e
:
 
"
A
>
B
,
 
A
>
C
,
 
A
>
D
,
 
B
>
E
,
 
B
>
F
,
 
C
>
G
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
e
e
p
"
,
 
v
a
l
u
e
:
 
"
R
>
A
,
 
A
>
B
,
 
B
>
C
,
 
C
>
D
,
 
D
>
E
,
 
R
>
X
,
 
X
>
Y
,
 
Y
>
Z
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
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
t
r
e
e
S
t
r
,
 
s
e
t
T
r
e
e
S
t
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
A
>
B
,
 
A
>
C
,
 
B
>
D
,
 
B
>
E
,
 
C
>
F
,
 
C
>
G
,
 
E
>
H
,
 
E
>
I
,
 
G
>
J
"
)
;


 
 
c
o
n
s
t
 
[
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
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
A
>
B
,
 
A
>
C
,
 
B
>
D
,
 
B
>
E
,
 
C
>
F
,
 
C
>
G
,
 
E
>
H
,
 
E
>
I
,
 
G
>
J
"
)
;


 
 
c
o
n
s
t
 
[
u
,
 
s
e
t
U
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
H
"
)
;


 
 
c
o
n
s
t
 
[
v
,
 
s
e
t
V
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
J
"
)
;




 
 
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
 
p
a
r
s
e
T
r
e
e
(
t
r
e
e
S
t
r
)
,
 
[
t
r
e
e
S
t
r
]
)
;


 
 
c
o
n
s
t
 
i
d
s
 
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
 
p
a
r
s
e
d
 
?
 
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
s
e
d
.
n
o
d
e
s
)
 
:
 
[
]
,
 
[
p
a
r
s
e
d
]
)
;


 
 
c
o
n
s
t
 
t
a
b
l
e
 
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
 
p
a
r
s
e
d
 
?
 
b
u
i
l
d
L
i
f
t
i
n
g
(
p
a
r
s
e
d
.
r
o
o
t
I
d
,
 
p
a
r
s
e
d
.
n
o
d
e
s
)
 
:
 
n
u
l
l
,
 
[
p
a
r
s
e
d
]
)
;




 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
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
:
 
L
C
A
F
r
a
m
e
[
]
 
=
>
 
{


 
 
 
 
i
f
 
(
!
p
a
r
s
e
d
 
|
|
 
!
t
a
b
l
e
)
 
{


 
 
 
 
 
 
r
e
t
u
r
n
 
[
{


 
 
 
 
 
 
 
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
e
r
r
o
r
:
 
"
p
a
r
s
e
 
e
r
r
o
r
"
 
}
,
 
m
e
s
s
a
g
e
:
 
"
E
n
t
e
r
 
a
 
v
a
l
i
d
 
t
r
e
e
 
(
e
.
g
.
 
A
>
B
,
 
A
>
C
)
.
"
,


 
 
 
 
 
 
 
 
u
I
d
:
 
"
"
,
 
v
I
d
:
 
"
"
,
 
t
a
b
l
e
:
 
{
 
u
p
:
 
{
}
,
 
L
O
G
:
 
1
 
}
,


 
 
 
 
 
 
}
]
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
s
a
f
e
U
 
=
 
p
a
r
s
e
d
.
n
o
d
e
s
[
u
]
 
?
 
u
 
:
 
i
d
s
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
a
f
e
V
 
=
 
p
a
r
s
e
d
.
n
o
d
e
s
[
v
]
 
?
 
v
 
:
 
i
d
s
[
1
]
 
?
?
 
i
d
s
[
0
]
 
?
?
 
"
"
;


 
 
 
 
r
e
t
u
r
n
 
b
u
i
l
d
L
C
A
F
r
a
m
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
r
o
o
t
I
d
,
 
p
a
r
s
e
d
.
n
o
d
e
s
,
 
t
a
b
l
e
,
 
s
a
f
e
U
,
 
s
a
f
e
V
)
;


 
 
}
,
 
[
p
a
r
s
e
d
,
 
t
a
b
l
e
,
 
u
,
 
v
,
 
i
d
s
]
)
;




 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
{
`
L
C
A
 
v
i
a
 
B
i
n
a
r
y
 
L
i
f
t
i
n
g
,
 
q
u
e
r
y
 
L
C
A
(
$
{
u
}
,
 
$
{
v
}
)
`
}


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
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
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
T
r
e
e
 
e
d
g
e
s
 
(
P
a
r
e
n
t
>
C
h
i
l
d
)
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
S
t
r
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
 
A
>
B
,
 
A
>
C
,
 
B
>
D
"


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
L
i
s
t
 
e
d
g
e
s
 
a
s
 
P
a
r
e
n
t
>
C
h
i
l
d
.
 
F
i
r
s
t
 
p
a
r
e
n
t
 
s
e
e
n
 
b
e
c
o
m
e
s
 
r
o
o
t
.
"


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
T
R
E
E
_
P
R
E
S
E
T
S
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
s
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
 
=
 
p
a
r
s
e
T
r
e
e
(
s
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
p
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
n
p
u
t
S
t
r
(
s
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
T
r
e
e
S
t
r
(
s
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
I
d
s
 
=
 
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
.
n
o
d
e
s
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
.
n
o
d
e
s
[
u
]
)
 
s
e
t
U
(
n
e
w
I
d
s
[
n
e
w
I
d
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
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
.
n
o
d
e
s
[
v
]
)
 
s
e
t
V
(
n
e
w
I
d
s
[
M
a
t
h
.
m
a
x
(
0
,
 
n
e
w
I
d
s
.
l
e
n
g
t
h
 
-
 
2
)
]
 
?
?
 
"
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
R
a
n
d
o
m
=
{
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
 
i
d
x
 
=
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
T
R
E
E
_
P
R
E
S
E
T
S
.
l
e
n
g
t
h
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
 
=
 
T
R
E
E
_
P
R
E
S
E
T
S
[
i
d
x
]
.
v
a
l
u
e
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
 
=
 
p
a
r
s
e
T
r
e
e
(
s
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
p
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
n
p
u
t
S
t
r
(
s
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
T
r
e
e
S
t
r
(
s
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
I
d
s
 
=
 
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
.
n
o
d
e
s
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
U
(
n
e
w
I
d
s
[
n
e
w
I
d
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
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
V
(
n
e
w
I
d
s
[
M
a
t
h
.
m
a
x
(
0
,
 
n
e
w
I
d
s
.
l
e
n
g
t
h
 
-
 
2
)
]
 
?
?
 
"
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
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
f
l
e
x
 
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
u
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
u
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
U
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
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
m
 
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
1
0
0
 
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
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
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
i
d
}
 
v
a
l
u
e
=
{
i
d
}
>
{
i
d
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
v
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
v
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
V
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
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
m
 
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
1
0
0
 
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
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
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
i
d
}
 
v
a
l
u
e
=
{
i
d
}
>
{
i
d
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
T
R
E
E
_
P
R
E
S
E
T
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
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
p
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
=
{
t
r
e
e
S
t
r
 
=
=
=
 
p
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
2
 
=
 
p
a
r
s
e
T
r
e
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
p
a
r
s
e
d
2
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
n
p
u
t
S
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
T
r
e
e
S
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
I
d
s
 
=
 
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
s
e
d
2
.
n
o
d
e
s
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
U
(
n
e
w
I
d
s
[
n
e
w
I
d
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
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
V
(
n
e
w
I
d
s
[
M
a
t
h
.
m
a
x
(
0
,
 
n
e
w
I
d
s
.
l
e
n
g
t
h
 
-
 
2
)
]
 
?
?
 
"
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
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
b
l
o
c
k
 
w
-
3
 
h
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
s
m
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
:
 
"
#
3
b
8
2
f
6
"
 
}
}
 
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
u
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
b
l
o
c
k
 
w
-
3
 
h
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
s
m
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
:
 
"
#
0
6
b
6
d
4
"
 
}
}
 
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
v
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
b
l
o
c
k
 
w
-
3
 
h
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
s
m
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
:
 
T
H
E
M
E
.
a
c
c
e
n
t
 
}
}
 
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
L
C
A
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


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
_
L
C
A
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
f
l
a
s
h
K
e
y
 
?
 
[
f
r
a
m
e
.
f
l
a
s
h
K
e
y
]
 
:
 
[
]
}
 
/
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
4
"
>


 
 
 
 
 
 
 
 
{
p
a
r
s
e
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
T
r
e
e
S
V
G


 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
d
e
s
=
{
p
a
r
s
e
d
.
n
o
d
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
o
t
I
d
=
{
p
a
r
s
e
d
.
r
o
o
t
I
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
r
a
m
e
=
{
f
r
a
m
e
 
?
?
 
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
}
,
 
m
e
s
s
a
g
e
:
 
"
"
,
 
u
I
d
:
 
"
"
,
 
v
I
d
:
 
"
"
,
 
t
a
b
l
e
:
 
{
 
u
p
:
 
{
}
,
 
L
O
G
:
 
1
 
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


 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
P
a
r
s
e
 
e
r
r
o
r
,
 
e
n
t
e
r
 
v
a
l
i
d
 
e
d
g
e
s
 
l
i
k
e
 
A
&
g
t
;
B
,
 
A
&
g
t
;
C
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
{
p
a
r
s
e
d
 
&
&
 
t
a
b
l
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
L
i
f
t
T
a
b
l
e
P
a
n
e
l


 
 
 
 
 
 
 
 
 
 
 
 
f
r
a
m
e
=
{
f
r
a
m
e
 
?
?
 
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
}
,
 
m
e
s
s
a
g
e
:
 
"
"
,
 
u
I
d
:
 
"
"
,
 
v
I
d
:
 
"
"
,
 
t
a
b
l
e
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
i
d
s
=
{
i
d
s
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
C
a
l
l
o
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
"
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
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
 
b
i
n
a
r
y
 
l
i
f
t
i
n
g
 
L
C
A
 
a
l
g
o
r
i
t
h
m
.
"
}


 
 
 
 
 
 
 
 
<
/
C
a
l
l
o
u
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
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
c
a
r
d
s
 
=
 
[


 
 
 
 
{
 
t
:
 
"
W
h
a
t
 
i
s
 
L
C
A
?
"
,
 
b
:
 
"
T
h
e
 
L
o
w
e
s
t
 
C
o
m
m
o
n
 
A
n
c
e
s
t
o
r
 
o
f
 
n
o
d
e
s
 
u
 
a
n
d
 
v
 
i
n
 
a
 
r
o
o
t
e
d
 
t
r
e
e
 
i
s
 
t
h
e
 
d
e
e
p
e
s
t
 
n
o
d
e
 
t
h
a
t
 
i
s
 
a
n
 
a
n
c
e
s
t
o
r
 
o
f
 
b
o
t
h
.
 
E
q
u
i
v
a
l
e
n
t
:
 
t
h
e
 
u
n
i
q
u
e
 
n
o
d
e
 
w
h
e
r
e
 
t
h
e
 
p
a
t
h
s
 
f
r
o
m
 
r
o
o
t
-
t
o
-
u
 
a
n
d
 
r
o
o
t
-
t
o
-
v
 
d
i
v
e
r
g
e
.
 
S
h
o
w
s
 
u
p
 
e
v
e
r
y
w
h
e
r
e
:
 
t
r
e
e
 
d
i
s
t
a
n
c
e
,
 
r
a
n
g
e
 
q
u
e
r
i
e
s
 
o
n
 
E
u
l
e
r
 
t
o
u
r
,
 
n
e
t
w
o
r
k
 
r
o
u
t
i
n
g
,
 
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
 
m
e
r
g
e
 
b
a
s
e
s
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
W
h
y
 
b
i
n
a
r
y
 
l
i
f
t
i
n
g
?
"
,
 
b
:
 
"
N
a
i
v
e
:
 
w
a
l
k
 
u
 
u
p
 
o
n
e
 
s
t
e
p
 
a
t
 
a
 
t
i
m
e
 
u
n
t
i
l
 
d
e
p
t
h
s
 
m
a
t
c
h
,
 
t
h
e
n
 
w
a
l
k
 
b
o
t
h
 
u
p
 
t
o
g
e
t
h
e
r
.
 
O
(
n
)
 
p
e
r
 
q
u
e
r
y
.
 
B
i
n
a
r
y
 
l
i
f
t
i
n
g
:
 
p
r
e
c
o
m
p
u
t
e
,
 
f
o
r
 
e
a
c
h
 
n
o
d
e
 
v
 
a
n
d
 
e
a
c
h
 
k
,
 
t
h
e
 
2
^
k
-
t
h
 
a
n
c
e
s
t
o
r
 
o
f
 
v
.
 
T
h
e
n
 
a
n
y
 
a
n
c
e
s
t
o
r
 
d
i
s
t
a
n
c
e
 
d
 
c
a
n
 
b
e
 
e
x
p
r
e
s
s
e
d
 
a
s
 
d
 
=
 
s
u
m
 
o
f
 
p
o
w
e
r
s
 
o
f
 
2
,
 
s
o
 
w
e
 
j
u
m
p
 
i
n
 
O
(
l
o
g
 
n
)
 
p
e
r
 
q
u
e
r
y
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
P
r
e
c
o
m
p
u
t
e
 
(
O
(
n
 
l
o
g
 
n
)
)
"
,
 
b
:
 
"
u
p
[
v
]
[
0
]
 
=
 
p
a
r
e
n
t
[
v
]
.
 
u
p
[
v
]
[
k
]
 
=
 
u
p
[
u
p
[
v
]
[
k
-
1
]
]
[
k
-
1
]
 
(
t
h
e
 
2
^
k
-
t
h
 
a
n
c
e
s
t
o
r
 
=
 
t
h
e
 
2
^
(
k
-
1
)
-
t
h
 
a
n
c
e
s
t
o
r
 
o
f
 
t
h
e
 
2
^
(
k
-
1
)
-
t
h
 
a
n
c
e
s
t
o
r
)
.
 
L
O
G
 
=
 
c
e
i
l
(
l
o
g
2
 
n
)
 
l
e
v
e
l
s
.
 
B
u
i
l
d
 
v
i
a
 
B
F
S
 
s
o
 
p
a
r
e
n
t
-
c
e
l
l
s
 
e
x
i
s
t
 
w
h
e
n
 
c
h
i
l
d
-
c
e
l
l
s
 
n
e
e
d
 
t
h
e
m
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
Q
u
e
r
y
:
 
2
 
p
h
a
s
e
s
"
,
 
b
:
 
"
(
1
)
 
L
i
f
t
 
t
h
e
 
d
e
e
p
e
r
 
n
o
d
e
 
u
p
 
t
o
 
m
a
t
c
h
 
t
h
e
 
o
t
h
e
r
'
s
 
d
e
p
t
h
,
 
s
e
t
 
b
i
t
s
 
o
f
 
t
h
e
 
d
e
p
t
h
 
d
i
f
f
e
r
e
n
c
e
 
t
e
l
l
 
y
o
u
 
w
h
i
c
h
 
2
^
k
 
j
u
m
p
s
 
t
o
 
t
a
k
e
.
 
(
2
)
 
L
i
f
t
 
B
O
T
H
 
n
o
d
e
s
 
u
p
 
i
n
 
p
a
r
a
l
l
e
l
 
a
s
 
f
a
r
 
a
s
 
p
o
s
s
i
b
l
e
 
W
I
T
H
O
U
T
 
m
e
e
t
i
n
g
.
 
T
h
e
 
s
i
n
g
l
e
 
s
t
e
p
 
f
u
r
t
h
e
r
 
i
s
 
t
h
e
 
L
C
A
.
 
B
o
t
h
 
p
h
a
s
e
s
 
t
a
k
e
 
a
t
 
m
o
s
t
 
O
(
l
o
g
 
n
)
 
j
u
m
p
s
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
W
h
y
 
'
a
s
 
f
a
r
 
a
s
 
p
o
s
s
i
b
l
e
 
w
i
t
h
o
u
t
 
m
e
e
t
i
n
g
'
?
"
,
 
b
:
 
"
I
f
 
y
o
u
 
l
i
f
t
 
b
o
t
h
 
t
o
 
a
 
c
o
m
m
o
n
 
a
n
c
e
s
t
o
r
 
t
o
o
 
e
a
g
e
r
l
y
,
 
y
o
u
 
m
i
g
h
t
 
o
v
e
r
s
h
o
o
t
 
t
h
e
 
L
C
A
.
 
I
n
s
t
e
a
d
,
 
s
c
a
n
 
k
 
=
 
L
O
G
-
1
 
d
o
w
n
 
t
o
 
0
;
 
w
h
e
n
e
v
e
r
 
u
p
[
u
]
[
k
]
 
i
s
 
n
o
t
 
e
q
u
a
l
 
t
o
 
u
p
[
v
]
[
k
]
,
 
j
u
m
p
 
(
w
e
 
k
n
o
w
 
t
h
e
 
L
C
A
 
i
s
 
s
t
i
l
l
 
s
t
r
i
c
t
l
y
 
a
b
o
v
e
)
.
 
W
h
e
n
 
y
o
u
 
c
a
n
n
o
t
 
j
u
m
p
 
a
n
y
w
h
e
r
e
 
w
i
t
h
o
u
t
 
m
e
e
t
i
n
g
,
 
L
C
A
 
=
 
p
a
r
e
n
t
 
o
f
 
w
h
e
r
e
 
y
o
u
 
s
t
o
p
p
e
d
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
D
i
s
t
a
n
c
e
 
v
i
a
 
L
C
A
"
,
 
b
:
 
"
d
i
s
t
(
u
,
 
v
)
 
=
 
d
e
p
t
h
[
u
]
 
+
 
d
e
p
t
h
[
v
]
 
-
 
2
*
d
e
p
t
h
[
L
C
A
(
u
,
v
)
]
.
 
W
i
t
h
 
L
C
A
 
i
n
 
O
(
l
o
g
 
n
)
 
a
n
d
 
d
e
p
t
h
s
 
p
r
e
c
o
m
p
u
t
e
d
,
 
y
o
u
 
g
e
t
 
t
r
e
e
-
d
i
s
t
a
n
c
e
 
q
u
e
r
i
e
s
 
i
n
 
O
(
l
o
g
 
n
)
.
 
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
 
f
o
r
 
t
r
e
e
-
b
a
s
e
d
 
D
P
,
 
k
t
h
-
a
n
c
e
s
t
o
r
 
q
u
e
r
i
e
s
,
 
a
n
d
 
c
e
n
t
r
o
i
d
-
d
e
c
o
m
p
o
s
i
t
i
o
n
-
s
t
y
l
e
 
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
 
}
,


 
 
]
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
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
t
r
e
e
 
a
n
c
e
s
t
o
r
 
q
u
e
r
i
e
s
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
B
i
n
a
r
y
 
l
i
f
t
i
n
g
:
 
t
e
l
e
p
o
r
t
i
n
g
 
u
p
 
t
h
e
 
t
r
e
e
 
i
n
 
l
o
g
 
n
 
j
u
m
p
s
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
C
l
i
m
b
i
n
g
 
a
 
t
r
e
e
 
o
n
e
 
s
t
e
p
 
a
t
 
a
 
t
i
m
e
 
i
s
 
s
l
o
w
.
 
B
i
n
a
r
y
 
l
i
f
t
i
n
g
 
p
r
e
c
o
m
p
u
t
e
s
 
t
e
l
e
p
o
r
t
e
r
s
:
 
f
r
o
m
 
a
n
y
 
n
o
d
e
 
y
o
u
 
c
a
n
 
j
u
m
p
 
1
,
 
2
,
 
4
,
 
8
,
 
.
.
.
 
s
t
e
p
s
 
u
p
 
i
n
 
O
(
1
)
.
 
A
n
y
 
h
e
i
g
h
t
 
d
i
f
f
e
r
e
n
c
e
 
i
s
 
a
 
s
u
m
 
o
f
 
t
h
e
s
e
 
p
o
w
e
r
s
,
 
s
o
 
a
n
y
 
a
n
c
e
s
t
o
r
 
q
u
e
r
y
 
t
a
k
e
s
 
o
n
l
y
 
O
(
l
o
g
 
n
)
 
j
u
m
p
s
.
 
T
h
e
 
s
a
m
e
 
t
r
i
c
k
 
g
e
n
e
r
a
l
i
z
e
s
 
(
s
p
a
r
s
e
 
t
a
b
l
e
)
 
t
o
 
r
a
n
g
e
-
m
i
n
/
m
a
x
 
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
r
r
a
y
s
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
M
e
n
t
a
l
 
m
o
d
e
l
<
/
S
u
b
H
e
a
d
i
n
g
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
"
>


 
 
 
 
 
 
 
 
 
 
P
r
e
c
o
m
p
u
t
e
 
<
I
n
l
i
n
e
C
o
d
e
>
u
p
[
v
]
[
k
]
<
/
I
n
l
i
n
e
C
o
d
e
>
 
=
 
t
h
e
 
2
^
k
-
t
h
 
a
n
c
e
s
t
o
r
 
o
f
 
v
 
f
o
r
 
a
l
l
 
v
 
a
n
d
 
k
 
f
r
o
m
 
0
 
t
o
 
L
O
G
-
1
.
 
T
h
i
s
 
t
a
b
l
e
 
h
a
s
 
O
(
n
 
l
o
g
 
n
)
 
e
n
t
r
i
e
s
 
a
n
d
 
c
a
n
 
b
e
 
b
u
i
l
t
 
b
o
t
t
o
m
-
u
p
 
i
n
 
O
(
n
 
l
o
g
 
n
)
.
 
A
n
y
 
a
n
c
e
s
t
o
r
 
d
i
s
t
a
n
c
e
 
d
 
d
e
c
o
m
p
o
s
e
s
 
i
n
t
o
 
s
e
t
 
b
i
t
s
,
 
s
o
 
y
o
u
 
h
o
p
 
t
h
r
o
u
g
h
 
a
t
 
m
o
s
t
 
L
O
G
 
j
u
m
p
s
 
p
e
r
 
q
u
e
r
y
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
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
a
p
-
3
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
a
u
t
o
-
f
i
t
,
 
m
i
n
m
a
x
(
2
6
0
p
x
,
 
1
f
r
)
)
"
 
}
}
>


 
 
 
 
 
 
 
 
{
c
a
r
d
s
.
m
a
p
(
(
c
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
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
 
m
b
-
2
 
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
 
u
p
p
e
r
c
a
s
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
0
{
i
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
{
c
.
t
}
<
/
S
u
b
H
e
a
d
i
n
g
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
"
>
{
c
.
b
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
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
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
I
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
p
r
o
b
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
O
n
 
a
 
b
a
l
a
n
c
e
d
 
t
r
e
e
 
A
>
B
,
 
A
>
C
,
 
B
>
D
,
 
B
>
E
,
 
C
>
F
,
 
C
>
G
,
 
E
>
H
,
 
E
>
I
,
 
G
>
J
,
 
L
C
A
(
H
,
 
J
)
 
=
 
?
"
,
 
a
:
 
"
A
"
 
}
,


 
 
 
 
{
 
q
:
 
"
S
a
m
e
 
t
r
e
e
,
 
L
C
A
(
D
,
 
I
)
 
=
 
?
"
,
 
a
:
 
"
B
"
 
}
,


 
 
 
 
{
 
q
:
 
"
O
n
 
t
h
e
 
p
a
t
h
 
A
>
B
>
C
>
D
>
E
>
F
,
 
L
C
A
(
C
,
 
F
)
 
=
 
?
"
,
 
a
:
 
"
C
"
 
}
,


 
 
 
 
{
 
q
:
 
"
T
r
e
e
 
d
i
s
t
a
n
c
e
 
f
o
r
m
u
l
a
 
g
i
v
e
n
 
d
e
p
t
h
s
 
a
n
d
 
L
C
A
?
"
,
 
a
:
 
"
d
e
p
t
h
[
u
]
 
+
 
d
e
p
t
h
[
v
]
 
-
 
2
*
d
e
p
t
h
[
L
C
A
]
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
 
[
g
u
e
s
s
e
s
,
 
s
e
t
G
u
e
s
s
e
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
(
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
)
[
]
>
(
p
r
o
b
s
.
m
a
p
(
(
)
 
=
>
 
n
u
l
l
)
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
n
,
 
s
e
t
S
h
o
w
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
b
o
o
l
e
a
n
[
]
>
(
p
r
o
b
s
.
m
a
p
(
(
)
 
=
>
 
f
a
l
s
e
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
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
W
o
r
k
 
e
a
c
h
 
p
r
o
b
l
e
m
 
b
y
 
h
a
n
d
 
u
s
i
n
g
 
b
i
n
a
r
y
 
l
i
f
t
i
n
g
,
 
t
h
e
n
 
v
e
r
i
f
y
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
p
r
o
b
s
.
m
a
p
(
(
p
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
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
f
o
n
t
-
m
o
n
o
 
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
5
0
0
 
m
r
-
2
"
>
#
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
p
.
q
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
f
l
e
x
 
g
a
p
-
2
 
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
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
u
e
s
s
e
s
[
i
]
 
?
?
 
"
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
g
u
e
s
s
e
s
]
;
 
v
[
i
]
 
=
 
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
;
 
s
e
t
G
u
e
s
s
e
s
(
v
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
m
 
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
1
0
0
 
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
w
h
i
t
e
/
3
0
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
W
i
d
t
h
:
 
2
4
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
{
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
s
h
o
w
n
]
;
 
v
[
i
]
 
=
 
t
r
u
e
;
 
s
e
t
S
h
o
w
n
(
v
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
4
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
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


 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
n
[
i
]
 
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
3
 
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
2
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
4
0
0
/
3
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
a
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


 
 
 
 
 
 
 
 
<
/
C
a
r
d
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
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
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
4
"
>


 
 
 
 
 
 
<
C
a
r
d
 
p
a
d
d
e
d
=
{
f
a
l
s
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
2
"
>


 
 
 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
T
h
r
e
e
 
c
l
a
s
s
i
c
a
l
 
L
C
A
 
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
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
/
d
i
v
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
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
<
t
h
e
a
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
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[
"
M
e
t
h
o
d
"
,
 
"
P
r
e
c
o
m
p
u
t
e
"
,
 
"
Q
u
e
r
y
"
,
 
"
B
e
s
t
 
f
o
r
"
]
.
m
a
p
(
(
h
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
k
e
y
=
{
h
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
"
>
{
h
}
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
B
i
n
a
r
y
 
l
i
f
t
i
n
g
"
,
 
"
O
(
n
 
l
o
g
 
n
)
"
,
 
"
O
(
l
o
g
 
n
)
"
,
 
"
O
n
l
i
n
e
 
q
u
e
r
i
e
s
;
 
k
t
h
-
a
n
c
e
s
t
o
r
 
f
o
r
 
f
r
e
e
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
E
u
l
e
r
 
t
o
u
r
 
+
 
R
M
Q
 
(
s
p
a
r
s
e
 
t
a
b
l
e
)
"
,
 
"
O
(
n
 
l
o
g
 
n
)
"
,
 
"
O
(
1
)
"
,
 
"
T
o
n
s
 
o
f
 
o
n
l
i
n
e
 
q
u
e
r
i
e
s
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
T
a
r
j
a
n
 
o
f
f
l
i
n
e
"
,
 
"
O
(
n
 
α
(
n
)
)
"
,
 
"
O
(
α
(
n
)
)
 
a
m
o
r
t
i
z
e
d
"
,
 
"
A
l
l
 
q
u
e
r
i
e
s
 
k
n
o
w
n
 
u
p
 
f
r
o
n
t
;
 
u
s
e
s
 
D
S
U
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
]
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
t
r
 
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
2
 
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
1
0
0
"
>
{
r
[
0
]
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
2
 
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
"
>
{
r
[
1
]
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
2
 
f
o
n
t
-
m
o
n
o
 
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
"
>
{
r
[
2
]
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
2
 
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
{
r
[
3
]
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
)
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
C
a
r
d
>




 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
k
t
h
-
a
n
c
e
s
t
o
r
 
f
o
r
 
f
r
e
e
<
/
S
u
b
H
e
a
d
i
n
g
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
"
>


 
 
 
 
 
 
 
 
 
 
T
h
e
 
s
a
m
e
 
l
i
f
t
 
t
a
b
l
e
 
g
i
v
e
s
 
<
I
n
l
i
n
e
C
o
d
e
>
k
t
h
A
n
c
e
s
t
o
r
(
v
,
 
k
)
<
/
I
n
l
i
n
e
C
o
d
e
>
 
i
n
 
O
(
l
o
g
 
n
)
:
 
f
o
r
 
e
a
c
h
 
s
e
t
 
b
i
t
 
o
f
 
k
,
 
j
u
m
p
 
2
^
b
i
t
 
l
e
v
e
l
s
 
u
s
i
n
g
 
<
I
n
l
i
n
e
C
o
d
e
>
u
p
[
v
]
[
b
i
t
]
<
/
I
n
l
i
n
e
C
o
d
e
>
.
 
T
h
i
s
 
i
s
 
e
x
a
c
t
l
y
 
P
h
a
s
e
 
1
 
o
f
 
t
h
e
 
L
C
A
 
q
u
e
r
y
,
 
r
e
p
a
c
k
a
g
e
d
.
 
L
e
e
t
C
o
d
e
 
1
4
8
3
 
(
K
t
h
 
A
n
c
e
s
t
o
r
 
o
f
 
a
 
T
r
e
e
 
N
o
d
e
)
 
i
s
 
t
h
e
 
c
a
n
o
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
 
p
r
o
b
l
e
m
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>




 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
W
h
e
r
e
 
t
h
i
s
 
l
a
n
d
s
<
/
S
u
b
H
e
a
d
i
n
g
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
 
s
p
a
c
e
-
y
-
1
.
5
 
p
l
-
4
 
l
i
s
t
-
d
i
s
c
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
1
0
0
"
>
T
r
e
e
 
d
i
s
t
a
n
c
e
 
q
u
e
r
i
e
s
<
/
s
t
r
o
n
g
>
:
 
d
i
s
t
(
u
,
 
v
)
 
=
 
d
e
p
t
h
[
u
]
 
+
 
d
e
p
t
h
[
v
]
 
-
 
2
*
d
e
p
t
h
[
L
C
A
]
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
1
0
0
"
>
P
a
t
h
 
s
u
m
 
/
 
m
a
x
 
o
n
 
t
r
e
e
<
/
s
t
r
o
n
g
>
:
 
p
r
e
c
o
m
p
u
t
e
 
p
r
e
f
i
x
-
f
r
o
m
-
r
o
o
t
,
 
t
h
e
n
 
u
s
e
 
L
C
A
 
t
o
 
c
a
n
c
e
l
 
t
h
e
 
c
o
m
m
o
n
 
p
r
e
f
i
x
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
1
0
0
"
>
H
e
a
v
y
-
L
i
g
h
t
 
D
e
c
o
m
p
o
s
i
t
i
o
n
<
/
s
t
r
o
n
g
>
:
 
t
h
e
 
n
a
t
u
r
a
l
 
i
n
d
e
x
 
f
o
r
 
p
a
t
h
 
q
u
e
r
i
e
s
 
t
o
 
s
e
g
m
e
n
t
 
t
r
e
e
s
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
1
0
0
"
>
G
i
t
 
m
e
r
g
e
 
b
a
s
e
<
/
s
t
r
o
n
g
>
:
 
t
h
e
 
L
C
A
 
o
f
 
t
w
o
 
c
o
m
m
i
t
 
n
o
d
e
s
 
i
n
 
t
h
e
 
D
A
G
 
(
G
i
t
 
u
s
e
s
 
b
i
d
i
r
e
c
t
i
o
n
a
l
 
B
F
S
 
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
 
c
o
m
m
i
t
 
g
r
a
p
h
 
i
s
 
a
 
D
A
G
,
 
n
o
t
 
a
 
t
r
e
e
)
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
1
0
0
"
>
O
n
l
i
n
e
 
p
h
y
l
o
g
e
n
e
t
i
c
 
t
r
e
e
 
q
u
e
r
i
e
s
<
/
s
t
r
o
n
g
>
:
 
m
o
s
t
 
r
e
c
e
n
t
 
c
o
m
m
o
n
 
a
n
c
e
s
t
o
r
 
o
f
 
t
w
o
 
s
p
e
c
i
e
s
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
<
/
C
a
r
d
>




 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
S
p
a
r
s
e
 
t
a
b
l
e
,
 
s
a
m
e
 
t
r
i
c
k
 
o
n
 
a
r
r
a
y
s
<
/
S
u
b
H
e
a
d
i
n
g
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
"
>


 
 
 
 
 
 
 
 
 
 
B
i
n
a
r
y
 
l
i
f
t
i
n
g
'
s
 
a
r
r
a
y
 
c
o
u
s
i
n
 
i
s
 
t
h
e
 
s
p
a
r
s
e
 
t
a
b
l
e
:
 
f
o
r
 
a
n
 
i
m
m
u
t
a
b
l
e
 
a
r
r
a
y
,
 
p
r
e
c
o
m
p
u
t
e
 
<
I
n
l
i
n
e
C
o
d
e
>
s
t
[
i
]
[
k
]
<
/
I
n
l
i
n
e
C
o
d
e
>
 
=
 
m
i
n
 
o
f
 
A
[
i
.
.
i
+
2
^
k
 
-
 
1
]
.
 
R
a
n
g
e
-
m
i
n
 
q
u
e
r
y
 
[
l
,
 
r
]
 
i
n
 
O
(
1
)
 
b
y
 
o
v
e
r
l
a
p
p
i
n
g
 
t
w
o
 
p
o
w
e
r
-
o
f
-
t
w
o
 
r
a
n
g
e
s
.
 
O
(
n
 
l
o
g
 
n
)
 
p
r
e
c
o
m
p
u
t
e
,
 
O
(
1
)
 
p
e
r
 
q
u
e
r
y
,
 
t
h
e
 
s
t
a
n
d
a
r
d
 
f
o
r
 
r
e
a
d
-
o
n
l
y
 
R
M
Q
.
 
U
s
e
d
 
i
n
 
t
h
e
 
E
u
l
e
r
-
t
o
u
r
 
L
C
A
 
r
e
d
u
c
t
i
o
n
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
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
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




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
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
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
 
v
o
i
d
;


}




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
 
L
7
_
L
C
A
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
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
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
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
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
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
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
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
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
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
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
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
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
c
l
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
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
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


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
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


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[
]
)
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
T
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
 
f
o
r
 
t
h
e
 
b
i
n
a
r
y
-
l
i
f
t
i
n
g
 
L
C
A
 
p
r
e
c
o
m
p
u
t
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
n
)
 
/
 
O
(
n
)
"
,
 
"
O
(
n
 
l
o
g
 
n
)
 
/
 
O
(
n
 
l
o
g
 
n
)
"
,
 
"
O
(
n
²
)
 
/
 
O
(
n
)
"
,
 
"
O
(
n
 
α
(
n
)
)
 
/
 
O
(
n
)
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
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
:
 
"
u
p
[
v
]
[
k
]
 
i
s
 
f
i
l
l
e
d
 
f
o
r
 
e
v
e
r
y
 
n
o
d
e
 
x
 
e
v
e
r
y
 
l
e
v
e
l
 
(
L
O
G
 
=
 
c
e
i
l
(
l
o
g
2
 
n
)
)
.
 
B
o
t
h
 
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
 
a
r
e
 
O
(
n
 
l
o
g
 
n
)
.
"
,


 
 
 
 
}
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
:
 
"
H
o
w
 
m
a
n
y
 
j
u
m
p
s
 
d
o
e
s
 
a
n
 
L
C
A
 
q
u
e
r
y
 
t
a
k
e
 
i
n
 
t
h
e
 
w
o
r
s
t
 
c
a
s
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
1
)
"
,
 
"
O
(
l
o
g
 
n
)
"
,
 
"
O
(
s
q
r
t
 
n
)
"
,
 
"
O
(
n
)
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
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
:
 
"
P
h
a
s
e
 
1
 
(
d
e
p
t
h
 
m
a
t
c
h
)
 
i
s
 
a
t
 
m
o
s
t
 
L
O
G
 
j
u
m
p
s
;
 
P
h
a
s
e
 
2
 
(
p
a
r
a
l
l
e
l
 
l
i
f
t
 
w
i
t
h
o
u
t
 
m
e
e
t
i
n
g
)
 
i
s
 
a
l
s
o
 
a
t
 
m
o
s
t
 
L
O
G
 
j
u
m
p
s
.
 
T
o
t
a
l
 
i
s
 
a
t
 
m
o
s
t
 
2
*
l
o
g
2
 
n
.
"
,


 
 
 
 
}
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
:
 
"
I
n
 
P
h
a
s
e
 
2
,
 
w
h
y
 
d
o
 
w
e
 
l
i
f
t
 
B
O
T
H
 
u
 
a
n
d
 
v
 
t
o
g
e
t
h
e
r
 
a
s
 
f
a
r
 
a
s
 
p
o
s
s
i
b
l
e
 
W
I
T
H
O
U
T
 
m
e
e
t
i
n
g
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
I
t
 
i
s
 
f
a
s
t
e
r
 
t
h
a
n
 
o
t
h
e
r
 
o
r
d
e
r
i
n
g
s
"
,


 
 
 
 
 
 
 
 
"
I
f
 
w
e
 
e
v
e
r
 
m
e
t
 
a
b
o
v
e
 
t
h
e
 
t
r
u
e
 
L
C
A
 
w
e
 
w
o
u
l
d
 
o
v
e
r
s
h
o
o
t
,
 
b
y
 
s
t
o
p
p
i
n
g
 
j
u
s
t
 
b
e
f
o
r
e
 
m
e
e
t
i
n
g
,
 
t
h
e
 
p
a
r
e
n
t
 
o
f
 
w
h
e
r
e
 
w
e
 
s
t
o
p
p
e
d
 
i
s
 
e
x
a
c
t
l
y
 
t
h
e
 
L
C
A
"
,


 
 
 
 
 
 
 
 
"
I
t
 
s
a
v
e
s
 
m
e
m
o
r
y
"
,


 
 
 
 
 
 
 
 
"
I
t
 
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
 
t
h
e
 
b
i
n
a
r
y
-
l
i
f
t
i
n
g
 
i
n
v
a
r
i
a
n
t
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
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
:
 
"
G
r
e
e
d
i
l
y
 
j
u
m
p
i
n
g
 
u
n
t
i
l
 
t
h
e
y
 
m
e
e
t
 
c
o
u
l
d
 
l
a
n
d
 
u
s
 
a
t
 
a
 
s
t
r
i
c
t
 
a
n
c
e
s
t
o
r
 
o
f
 
t
h
e
 
L
C
A
 
(
o
v
e
r
s
h
o
o
t
)
.
 
J
u
m
p
i
n
g
 
w
h
i
l
e
 
s
t
i
l
l
 
d
i
s
t
i
n
c
t
,
 
t
h
e
n
 
t
a
k
i
n
g
 
p
a
r
e
n
t
 
o
f
 
t
h
e
 
s
t
o
p
 
p
o
s
i
t
i
o
n
,
 
h
i
t
s
 
t
h
e
 
L
C
A
 
e
x
a
c
t
l
y
.
"
,


 
 
 
 
}
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
:
 
"
T
r
e
e
 
d
i
s
t
a
n
c
e
 
f
o
r
m
u
l
a
 
u
s
i
n
g
 
L
C
A
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
d
e
p
t
h
[
u
]
 
-
 
d
e
p
t
h
[
v
]
"
,


 
 
 
 
 
 
 
 
"
d
e
p
t
h
[
u
]
 
+
 
d
e
p
t
h
[
v
]
"
,


 
 
 
 
 
 
 
 
"
d
e
p
t
h
[
u
]
 
+
 
d
e
p
t
h
[
v
]
 
-
 
2
*
d
e
p
t
h
[
L
C
A
(
u
,
 
v
)
]
"
,


 
 
 
 
 
 
 
 
"
m
a
x
(
d
e
p
t
h
[
u
]
,
 
d
e
p
t
h
[
v
]
)
 
-
 
d
e
p
t
h
[
L
C
A
]
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
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
:
 
"
u
-
t
o
-
L
C
A
 
e
d
g
e
s
 
+
 
v
-
t
o
-
L
C
A
 
e
d
g
e
s
 
=
 
(
d
e
p
t
h
[
u
]
 
-
 
d
e
p
t
h
[
L
C
A
]
)
 
+
 
(
d
e
p
t
h
[
v
]
 
-
 
d
e
p
t
h
[
L
C
A
]
)
 
=
 
d
e
p
t
h
[
u
]
 
+
 
d
e
p
t
h
[
v
]
 
-
 
2
*
d
e
p
t
h
[
L
C
A
]
.
"
,


 
 
 
 
}
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
:
 
"
W
h
a
t
 
i
s
 
t
h
e
 
a
r
r
a
y
 
a
n
a
l
o
g
u
e
 
o
f
 
b
i
n
a
r
y
 
l
i
f
t
i
n
g
 
f
o
r
 
r
a
n
g
e
-
m
i
n
 
q
u
e
r
i
e
s
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
F
e
n
w
i
c
k
 
t
r
e
e
"
,
 
"
S
e
g
m
e
n
t
 
t
r
e
e
"
,
 
"
S
p
a
r
s
e
 
t
a
b
l
e
"
,
 
"
T
r
e
a
p
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
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
:
 
"
S
p
a
r
s
e
 
t
a
b
l
e
:
 
s
t
[
i
]
[
k
]
 
=
 
m
i
n
 
o
f
 
A
[
i
.
.
i
+
2
^
k
-
1
]
.
 
O
(
n
 
l
o
g
 
n
)
 
p
r
e
c
o
m
p
u
t
e
,
 
O
(
1
)
 
q
u
e
r
y
 
(
o
v
e
r
l
a
p
 
t
w
o
 
p
o
w
e
r
-
o
f
-
t
w
o
 
r
a
n
g
e
s
)
.
 
S
a
m
e
 
p
r
e
c
o
m
p
u
t
e
 
p
a
t
t
e
r
n
 
a
s
 
b
i
n
a
r
y
 
l
i
f
t
i
n
g
'
s
 
u
p
[
v
]
[
k
]
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
L
o
w
e
s
t
 
C
o
m
m
o
n
 
A
n
c
e
s
t
o
r
"


 
 
 
 
 
 
l
e
v
e
l
=
{
7
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
7
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
H
i
g
h
,
 
L
C
1
4
8
3
 
(
K
t
h
 
A
n
c
e
s
t
o
r
)
,
 
t
r
e
e
-
d
i
s
t
a
n
c
e
 
q
u
e
r
i
e
s
,
 
H
L
D
 
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
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
A
d
v
a
n
c
e
d
 
G
r
a
p
h
 
A
l
g
o
r
i
t
h
m
s
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


