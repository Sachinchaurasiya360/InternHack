
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
d
y
n
a
m
i
c
-
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
 
 
M
o
d
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




t
y
p
e
 
M
o
d
e
 
=
 
"
t
s
p
"
 
|
 
"
s
p
a
c
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
S
P
 
(
H
e
l
d
-
K
a
r
p
 
B
i
t
m
a
s
k
 
D
P
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
S
P
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


 
 
d
p
:
 
(
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
)
[
]
[
]
;


 
 
c
u
r
M
a
s
k
:
 
n
u
m
b
e
r
;


 
 
c
u
r
C
i
t
y
:
 
n
u
m
b
e
r
;


 
 
n
e
x
t
C
i
t
y
:
 
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
;


 
 
t
r
a
v
e
r
s
e
d
E
d
g
e
:
 
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
]
 
|
 
n
u
l
l
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
T
S
P
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
t
s
p
(
d
i
s
t
,
 
s
t
a
r
t
)
:
"
,


 
 
"
 
 
d
p
[
1
<
<
s
t
a
r
t
]
[
s
t
a
r
t
]
 
=
 
0
"
,


 
 
"
 
 
f
o
r
 
m
a
s
k
 
i
n
 
i
n
c
r
e
a
s
i
n
g
 
p
o
p
c
o
u
n
t
:
"
,


 
 
"
 
 
 
 
f
o
r
 
i
 
i
n
 
b
i
t
s
 
o
f
 
m
a
s
k
:
"
,


 
 
"
 
 
 
 
 
 
i
f
 
d
p
[
m
a
s
k
]
[
i
]
 
i
s
 
i
n
f
:
 
c
o
n
t
i
n
u
e
"
,


 
 
"
 
 
 
 
 
 
f
o
r
 
j
 
i
n
 
0
.
.
n
-
1
:
 
 
 
 
 
 
 
/
/
 
t
r
y
 
g
o
 
t
o
 
j
 
n
e
x
t
"
,


 
 
"
 
 
 
 
 
 
 
 
i
f
 
j
 
i
n
 
m
a
s
k
:
 
s
k
i
p
"
,


 
 
"
 
 
 
 
 
 
 
 
n
e
w
M
a
s
k
 
=
 
m
a
s
k
 
|
 
(
1
<
<
j
)
"
,


 
 
"
 
 
 
 
 
 
 
 
c
o
s
t
 
=
 
d
p
[
m
a
s
k
]
[
i
]
 
+
 
d
i
s
t
[
i
]
[
j
]
"
,


 
 
"
 
 
 
 
 
 
 
 
d
p
[
n
e
w
M
a
s
k
]
[
j
]
 
=
 
m
i
n
(
d
p
[
n
e
w
M
a
s
k
]
[
j
]
,
 
c
o
s
t
)
"
,


 
 
"
 
 
r
e
t
u
r
n
 
m
i
n
 
o
v
e
r
 
i
 
o
f
 
d
p
[
f
u
l
l
]
[
i
]
 
+
 
d
i
s
t
[
i
]
[
s
t
a
r
t
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
i
t
C
o
u
n
t
(
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
 
l
e
t
 
c
 
=
 
0
;
 
w
h
i
l
e
 
(
x
)
 
{
 
c
 
+
=
 
x
 
&
 
1
;
 
x
 
>
>
>
=
 
1
;
 
}
 
r
e
t
u
r
n
 
c
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
T
S
P
F
r
a
m
e
s
(
d
i
s
t
:
 
n
u
m
b
e
r
[
]
[
]
,
 
s
t
a
r
t
:
 
n
u
m
b
e
r
)
:
 
T
S
P
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
 
n
 
=
 
d
i
s
t
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
 
F
U
L
L
 
=
 
(
1
 
<
<
 
n
)
 
-
 
1
;


 
 
c
o
n
s
t
 
d
p
:
 
(
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
)
[
]
[
]
 
=
 
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
 
1
 
<
<
 
n
 
}
,
 
(
)
 
=
>
 
A
r
r
a
y
(
n
)
.
f
i
l
l
(
n
u
l
l
)
)
;


 
 
d
p
[
1
 
<
<
 
s
t
a
r
t
]
[
s
t
a
r
t
]
 
=
 
0
;


 
 
c
o
n
s
t
 
f
:
 
T
S
P
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




 
 
f
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
 
n
,
 
s
t
a
r
t
 
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
 
`
H
e
l
d
-
K
a
r
p
 
o
n
 
$
{
n
}
 
c
i
t
i
e
s
.
 
S
t
a
t
e
 
=
 
(
m
a
s
k
,
 
l
a
s
t
C
i
t
y
)
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
c
u
r
M
a
s
k
:
 
0
,
 
c
u
r
C
i
t
y
:
 
-
1
,
 
n
e
x
t
C
i
t
y
:
 
n
u
l
l
,
 
t
r
a
v
e
r
s
e
d
E
d
g
e
:
 
n
u
l
l
 
}
)
;


 
 
f
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
 
1
,
 
v
a
r
s
:
 
{
 
m
a
s
k
:
 
(
1
 
<
<
 
s
t
a
r
t
)
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
.
p
a
d
S
t
a
r
t
(
n
,
 
"
0
"
)
,
 
[
`
d
p
[
$
{
1
 
<
<
 
s
t
a
r
t
}
]
[
$
{
s
t
a
r
t
}
]
`
]
:
 
0
 
}
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
 
`
d
p
[
$
{
1
 
<
<
 
s
t
a
r
t
}
]
[
$
{
s
t
a
r
t
}
]
`
,
 
m
e
s
s
a
g
e
:
 
`
B
a
s
e
 
c
a
s
e
:
 
a
t
 
c
i
t
y
 
$
{
s
t
a
r
t
}
,
 
h
a
v
i
n
g
 
v
i
s
i
t
e
d
 
o
n
l
y
 
$
{
s
t
a
r
t
}
,
 
c
o
s
t
 
=
 
0
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
c
u
r
M
a
s
k
:
 
1
 
<
<
 
s
t
a
r
t
,
 
c
u
r
C
i
t
y
:
 
s
t
a
r
t
,
 
n
e
x
t
C
i
t
y
:
 
n
u
l
l
,
 
t
r
a
v
e
r
s
e
d
E
d
g
e
:
 
n
u
l
l
 
}
)
;




 
 
c
o
n
s
t
 
m
a
s
k
s
B
y
P
o
p
:
 
n
u
m
b
e
r
[
]
[
]
 
=
 
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
 
n
 
+
 
1
 
}
,
 
(
)
 
=
>
 
[
]
)
;


 
 
f
o
r
 
(
l
e
t
 
m
 
=
 
0
;
 
m
 
<
=
 
F
U
L
L
;
 
m
+
+
)
 
m
a
s
k
s
B
y
P
o
p
[
b
i
t
C
o
u
n
t
(
m
)
]
.
p
u
s
h
(
m
)
;




 
 
f
o
r
 
(
l
e
t
 
p
c
 
=
 
1
;
 
p
c
 
<
=
 
n
;
 
p
c
+
+
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
 
m
a
s
k
 
o
f
 
m
a
s
k
s
B
y
P
o
p
[
p
c
]
)
 
{


 
 
 
 
 
 
i
f
 
(
!
(
m
a
s
k
 
&
 
(
1
 
<
<
 
s
t
a
r
t
)
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
 
n
;
 
i
+
+
)
 
{


 
 
 
 
 
 
 
 
i
f
 
(
!
(
m
a
s
k
 
&
 
(
1
 
<
<
 
i
)
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


 
 
 
 
 
 
 
 
i
f
 
(
d
p
[
m
a
s
k
]
[
i
]
 
=
=
=
 
n
u
l
l
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


 
 
 
 
 
 
 
 
f
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
 
3
,
 
v
a
r
s
:
 
{
 
m
a
s
k
:
 
m
a
s
k
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
.
p
a
d
S
t
a
r
t
(
n
,
 
"
0
"
)
,
 
i
,
 
[
`
d
p
[
m
a
s
k
]
[
$
{
i
}
]
`
]
:
 
d
p
[
m
a
s
k
]
[
i
]
 
?
?
 
"
-
"
 
}
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
i
"
,
 
m
e
s
s
a
g
e
:
 
`
A
t
 
m
a
s
k
=
$
{
m
a
s
k
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
.
p
a
d
S
t
a
r
t
(
n
,
 
"
0
"
)
}
,
 
c
i
t
y
=
$
{
i
}
,
 
c
o
s
t
=
$
{
d
p
[
m
a
s
k
]
[
i
]
}
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
c
u
r
M
a
s
k
:
 
m
a
s
k
,
 
c
u
r
C
i
t
y
:
 
i
,
 
n
e
x
t
C
i
t
y
:
 
n
u
l
l
,
 
t
r
a
v
e
r
s
e
d
E
d
g
e
:
 
n
u
l
l
 
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
 
j
 
=
 
0
;
 
j
 
<
 
n
;
 
j
+
+
)
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
m
a
s
k
 
&
 
(
1
 
<
<
 
j
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
m
 
=
 
m
a
s
k
 
|
 
(
1
 
<
<
 
j
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
s
t
 
=
 
(
d
p
[
m
a
s
k
]
[
i
]
 
?
?
 
I
n
f
i
n
i
t
y
)
 
+
 
d
i
s
t
[
i
]
[
j
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
r
e
v
 
=
 
d
p
[
n
m
]
[
j
]
;


 
 
 
 
 
 
 
 
 
 
f
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
 
6
,
 
v
a
r
s
:
 
{
 
i
,
 
j
,
 
c
o
s
t
,
 
[
`
d
p
[
n
e
w
M
a
s
k
]
[
$
{
j
}
]
`
]
:
 
p
r
e
v
 
?
?
 
"
i
n
f
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
 
`
T
r
y
 
g
o
i
n
g
 
$
{
i
}
 
t
o
 
$
{
j
}
:
 
c
o
s
t
 
$
{
d
p
[
m
a
s
k
]
[
i
]
}
 
+
 
$
{
d
i
s
t
[
i
]
[
j
]
}
 
=
 
$
{
c
o
s
t
}
.
 
P
r
e
v
i
o
u
s
 
d
p
[
$
{
n
m
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
.
p
a
d
S
t
a
r
t
(
n
,
 
"
0
"
)
}
]
[
$
{
j
}
]
 
=
 
$
{
p
r
e
v
 
?
?
 
"
i
n
f
"
}
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
c
u
r
M
a
s
k
:
 
m
a
s
k
,
 
c
u
r
C
i
t
y
:
 
i
,
 
n
e
x
t
C
i
t
y
:
 
j
,
 
t
r
a
v
e
r
s
e
d
E
d
g
e
:
 
[
i
,
 
j
]
 
}
)
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
p
r
e
v
 
=
=
=
 
n
u
l
l
 
|
|
 
c
o
s
t
 
<
 
p
r
e
v
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
d
p
[
n
m
]
[
j
]
 
=
 
c
o
s
t
;


 
 
 
 
 
 
 
 
 
 
 
 
f
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
 
9
,
 
v
a
r
s
:
 
{
 
[
`
d
p
[
n
e
w
M
a
s
k
]
[
$
{
j
}
]
`
]
:
 
c
o
s
t
 
}
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
 
`
d
p
[
n
e
w
M
a
s
k
]
[
$
{
j
}
]
`
,
 
m
e
s
s
a
g
e
:
 
`
B
e
t
t
e
r
!
 
d
p
[
$
{
n
m
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
.
p
a
d
S
t
a
r
t
(
n
,
 
"
0
"
)
}
]
[
$
{
j
}
]
 
=
 
$
{
c
o
s
t
}
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
c
u
r
M
a
s
k
:
 
n
m
,
 
c
u
r
C
i
t
y
:
 
j
,
 
n
e
x
t
C
i
t
y
:
 
n
u
l
l
,
 
t
r
a
v
e
r
s
e
d
E
d
g
e
:
 
[
i
,
 
j
]
 
}
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}




 
 
l
e
t
 
b
e
s
t
 
=
 
I
n
f
i
n
i
t
y
;


 
 
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
 
n
;
 
i
+
+
)
 
{


 
 
 
 
i
f
 
(
d
p
[
F
U
L
L
]
[
i
]
 
=
=
=
 
n
u
l
l
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
 
t
o
t
a
l
 
=
 
(
d
p
[
F
U
L
L
]
[
i
]
 
?
?
 
I
n
f
i
n
i
t
y
)
 
+
 
d
i
s
t
[
i
]
[
s
t
a
r
t
]
;


 
 
 
 
i
f
 
(
t
o
t
a
l
 
<
 
b
e
s
t
)
 
b
e
s
t
 
=
 
t
o
t
a
l
;


 
 
}


 
 
f
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
 
1
0
,
 
v
a
r
s
:
 
{
 
a
n
s
w
e
r
:
 
b
e
s
t
 
=
=
=
 
I
n
f
i
n
i
t
y
 
?
 
"
u
n
r
e
a
c
h
a
b
l
e
"
 
:
 
b
e
s
t
 
}
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
a
n
s
w
e
r
"
,
 
m
e
s
s
a
g
e
:
 
`
C
l
o
s
e
 
t
h
e
 
t
o
u
r
:
 
m
i
n
 
o
v
e
r
 
i
 
o
f
 
d
p
[
F
U
L
L
]
[
i
]
 
+
 
d
i
s
t
[
i
]
[
$
{
s
t
a
r
t
}
]
 
=
 
$
{
b
e
s
t
 
=
=
=
 
I
n
f
i
n
i
t
y
 
?
 
"
i
n
f
"
 
:
 
b
e
s
t
}
.
`
,
 
d
p
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
c
u
r
M
a
s
k
:
 
F
U
L
L
,
 
c
u
r
C
i
t
y
:
 
-
1
,
 
n
e
x
t
C
i
t
y
:
 
n
u
l
l
,
 
t
r
a
v
e
r
s
e
d
E
d
g
e
:
 
n
u
l
l
 
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
C
i
t
i
e
s
(
s
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
 
n
:
 
n
u
m
b
e
r
;
 
d
i
s
t
:
 
n
u
m
b
e
r
[
]
[
]
 
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
 
r
o
w
s
 
=
 
s
.
s
p
l
i
t
(
"
\
n
"
)
.
m
a
p
(
(
r
)
 
=
>
 
r
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
!
r
o
w
s
.
l
e
n
g
t
h
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
i
s
t
 
=
 
r
o
w
s
.
m
a
p
(
(
r
)
 
=
>
 
r
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
N
u
m
b
e
r
)
)
;


 
 
c
o
n
s
t
 
n
 
=
 
d
i
s
t
.
l
e
n
g
t
h
;


 
 
i
f
 
(
d
i
s
t
.
s
o
m
e
(
(
r
o
w
)
 
=
>
 
r
o
w
.
l
e
n
g
t
h
 
!
=
=
 
n
 
|
|
 
r
o
w
.
s
o
m
e
(
(
v
)
 
=
>
 
!
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
v
)
)
)
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
n
 
<
 
2
 
|
|
 
n
 
>
 
5
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
 
n
,
 
d
i
s
t
 
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
o
c
a
l
 
c
i
t
y
 
g
r
a
p
h
 
S
V
G
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
C
i
t
y
G
r
a
p
h
(
{


 
 
n
,


 
 
d
i
s
t
,


 
 
c
u
r
M
a
s
k
,


 
 
c
u
r
C
i
t
y
,


 
 
n
e
x
t
C
i
t
y
,


 
 
t
r
a
v
e
r
s
e
d
E
d
g
e
,


}
:
 
{


 
 
n
:
 
n
u
m
b
e
r
;


 
 
d
i
s
t
:
 
n
u
m
b
e
r
[
]
[
]
;


 
 
c
u
r
M
a
s
k
:
 
n
u
m
b
e
r
;


 
 
c
u
r
C
i
t
y
:
 
n
u
m
b
e
r
;


 
 
n
e
x
t
C
i
t
y
:
 
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
;


 
 
t
r
a
v
e
r
s
e
d
E
d
g
e
:
 
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
]
 
|
 
n
u
l
l
;


}
)
 
{


 
 
c
o
n
s
t
 
c
x
 
=
 
2
0
0
;
 
c
o
n
s
t
 
c
y
 
=
 
1
4
0
;
 
c
o
n
s
t
 
r
 
=
 
9
0
;


 
 
c
o
n
s
t
 
p
t
s
 
=
 
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
 
n
 
}
,
 
(
_
,
 
i
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
 
=
 
(
2
 
*
 
M
a
t
h
.
P
I
 
*
 
i
)
 
/
 
n
 
-
 
M
a
t
h
.
P
I
 
/
 
2
;


 
 
 
 
r
e
t
u
r
n
 
{
 
x
:
 
c
x
 
+
 
r
 
*
 
M
a
t
h
.
c
o
s
(
a
)
,
 
y
:
 
c
y
 
+
 
r
 
*
 
M
a
t
h
.
s
i
n
(
a
)
 
}
;


 
 
}
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
4
0
0
}
 
h
e
i
g
h
t
=
{
2
8
0
}
 
v
i
e
w
B
o
x
=
"
0
 
0
 
4
0
0
 
2
8
0
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
a
u
t
o
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
 
n
 
}
,
 
(
_
,
 
i
)
 
=
>


 
 
 
 
 
 
 
 
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
 
n
 
}
,
 
(
_
_
,
 
j
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
j
 
<
=
 
i
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
 
i
s
A
c
t
i
v
e
 
=
 
t
r
a
v
e
r
s
e
d
E
d
g
e
 
&
&
 
(
(
t
r
a
v
e
r
s
e
d
E
d
g
e
[
0
]
 
=
=
=
 
i
 
&
&
 
t
r
a
v
e
r
s
e
d
E
d
g
e
[
1
]
 
=
=
=
 
j
)
 
|
|
 
(
t
r
a
v
e
r
s
e
d
E
d
g
e
[
0
]
 
=
=
=
 
j
 
&
&
 
t
r
a
v
e
r
s
e
d
E
d
g
e
[
1
]
 
=
=
=
 
i
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
g
 
k
e
y
=
{
`
e
$
{
i
}
-
$
{
j
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
p
t
s
[
i
]
.
x
}
 
y
1
=
{
p
t
s
[
i
]
.
y
}
 
x
2
=
{
p
t
s
[
j
]
.
x
}
 
y
2
=
{
p
t
s
[
j
]
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
i
s
A
c
t
i
v
e
 
?
 
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
 
:
 
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
i
s
A
c
t
i
v
e
 
?
 
2
.
5
 
:
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
=
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
 
1
 
:
 
0
.
4
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
(
p
t
s
[
i
]
.
x
 
+
 
p
t
s
[
j
]
.
x
)
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
(
p
t
s
[
i
]
.
y
 
+
 
p
t
s
[
j
]
.
y
)
 
/
 
2
 
-
 
3
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
=
"
9
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
i
s
t
[
i
]
[
j
]
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


 
 
 
 
 
 
)
}


 
 
 
 
 
 
{
p
t
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
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
i
s
i
t
e
d
 
=
 
!
!
(
c
u
r
M
a
s
k
 
&
 
(
1
 
<
<
 
i
)
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
u
r
 
=
 
i
 
=
=
=
 
c
u
r
C
i
t
y
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
N
e
x
t
 
=
 
i
 
=
=
=
 
n
e
x
t
C
i
t
y
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
g
 
=
 
i
s
C
u
r
 
?
 
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
 
:
 
i
s
N
e
x
t
 
?
 
"
#
0
6
b
6
d
4
"
 
:
 
v
i
s
i
t
e
d
 
?
 
"
#
d
c
f
c
e
7
"
 
:
 
T
H
E
M
E
.
b
g
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
g
 
=
 
i
s
C
u
r
 
|
|
 
i
s
N
e
x
t
 
?
 
"
#
f
f
f
"
 
:
 
v
i
s
i
t
e
d
 
?
 
"
#
1
6
6
5
3
4
"
 
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
M
u
t
e
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
g
 
k
e
y
=
{
`
n
$
{
i
}
`
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
1
6
}
 
f
i
l
l
=
{
b
g
}
 
s
t
r
o
k
e
=
{
i
s
C
u
r
 
?
 
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
 
:
 
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
i
s
C
u
r
 
?
 
2
 
:
 
1
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
 
4
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
 
f
o
n
t
S
i
z
e
=
"
1
2
"
 
f
i
l
l
=
{
f
g
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
m
o
n
o
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
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




f
u
n
c
t
i
o
n
 
T
S
P
V
i
s
u
a
l
i
z
e
(
)
 
{


 
 
c
o
n
s
t
 
D
E
F
A
U
L
T
 
=
 
[
"
0
,
1
0
,
1
5
,
2
0
"
,
 
"
1
0
,
0
,
3
5
,
2
5
"
,
 
"
1
5
,
3
5
,
0
,
3
0
"
,
 
"
2
0
,
2
5
,
3
0
,
0
"
]
.
j
o
i
n
(
"
\
n
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
D
E
F
A
U
L
T
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
 
p
a
r
s
e
C
i
t
i
e
s
(
i
n
p
u
t
S
t
r
)
 
?
?
 
p
a
r
s
e
C
i
t
i
e
s
(
D
E
F
A
U
L
T
)
!
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
 
=
>
 
b
u
i
l
d
T
S
P
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
d
i
s
t
,
 
0
)
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


 
 
c
o
n
s
t
 
n
 
=
 
p
a
r
s
e
d
.
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
"
B
i
t
m
a
s
k
 
D
P
,
 
T
r
a
v
e
l
l
i
n
g
 
S
a
l
e
s
m
a
n
 
(
H
e
l
d
-
K
a
r
p
)
"


 
 
 
 
 
 
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
D
i
s
t
a
n
c
e
 
m
a
t
r
i
x
 
(
n
 
r
o
w
s
 
x
 
n
 
n
u
m
b
e
r
s
,
 
2
 
<
=
 
n
 
<
=
 
5
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
{
D
E
F
A
U
L
T
}


 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
S
y
m
m
e
t
r
i
c
 
m
a
t
r
i
x
,
 
z
e
r
o
 
d
i
a
g
o
n
a
l
s
.
 
R
o
w
s
 
s
e
p
a
r
a
t
e
d
 
b
y
 
n
e
w
l
i
n
e
s
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
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
4
 
c
i
t
i
e
s
"
,
 
v
a
l
u
e
:
 
D
E
F
A
U
L
T
 
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
T
i
g
h
t
 
3
"
,
 
v
a
l
u
e
:
 
"
0
,
1
,
2
\
n
1
,
0
,
4
\
n
2
,
4
,
0
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
5
 
c
i
t
i
e
s
"
,
 
v
a
l
u
e
:
 
"
0
,
2
,
9
,
1
0
,
7
\
n
2
,
0
,
6
,
4
,
3
\
n
9
,
6
,
0
,
8
,
5
\
n
1
0
,
4
,
8
,
0
,
6
\
n
7
,
3
,
5
,
6
,
0
"
 
}
,


 
 
 
 
 
 
 
 
 
 
]
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
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
C
i
t
i
e
s
(
v
)
)
 
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
v
)
;
 
}
}


 
 
 
 
 
 
 
 
/
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
T
S
P
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


 
 
 
 
 
 
{
f
r
a
m
e
 
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
4
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
m
i
n
m
a
x
(
0
,
1
f
r
)
 
m
i
n
m
a
x
(
0
,
1
f
r
)
"
 
}
}
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
2
"
>
C
i
t
i
e
s
 
a
n
d
 
D
i
s
t
a
n
c
e
s
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
C
i
t
y
G
r
a
p
h
 
n
=
{
n
}
 
d
i
s
t
=
{
p
a
r
s
e
d
.
d
i
s
t
}
 
c
u
r
M
a
s
k
=
{
f
r
a
m
e
.
c
u
r
M
a
s
k
}
 
c
u
r
C
i
t
y
=
{
f
r
a
m
e
.
c
u
r
C
i
t
y
}
 
n
e
x
t
C
i
t
y
=
{
f
r
a
m
e
.
n
e
x
t
C
i
t
y
}
 
t
r
a
v
e
r
s
e
d
E
d
g
e
=
{
f
r
a
m
e
.
t
r
a
v
e
r
s
e
d
E
d
g
e
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
m
t
-
2
 
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
v
i
s
i
t
e
d
 
m
a
s
k
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
f
l
e
x
 
g
a
p
-
0
.
5
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
 
n
 
}
,
 
(
_
,
 
i
)
 
=
>
 
n
 
-
 
1
 
-
 
i
)
.
m
a
p
(
(
b
i
t
I
d
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
 
b
i
t
 
=
 
(
f
r
a
m
e
.
c
u
r
M
a
s
k
 
>
>
 
b
i
t
I
d
x
)
 
&
 
1
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
b
i
t
I
d
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
"
w
-
6
 
h
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
o
r
d
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
a
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
 
b
i
t
 
?
 
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
 
:
 
T
H
E
M
E
.
b
g
,
 
c
o
l
o
r
:
 
b
i
t
 
?
 
"
#
f
f
f
"
 
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
M
u
t
e
d
,
 
b
o
r
d
e
r
C
o
l
o
r
:
 
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
i
t
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
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
 
t
e
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
(
b
i
t
 
i
=
1
 
m
e
a
n
s
 
c
i
t
y
 
i
 
v
i
s
i
t
e
d
)
 
=
 
{
f
r
a
m
e
.
c
u
r
M
a
s
k
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
2
"
>
d
p
[
m
a
s
k
]
[
l
a
s
t
C
i
t
y
]
,
 
f
i
n
i
t
e
 
e
n
t
r
i
e
s
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
a
x
-
h
-
7
2
 
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
 
p
-
2
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
y
-
1
 
p
x
-
1
.
5
 
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
m
a
s
k
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
 
n
 
}
,
 
(
_
,
 
i
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
p
y
-
1
 
p
x
-
1
.
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
5
0
0
"
>
c
i
t
y
 
{
i
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
f
r
a
m
e
.
d
p
.
m
a
p
(
(
r
o
w
,
 
m
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
r
o
w
.
e
v
e
r
y
(
(
v
)
 
=
>
 
v
 
=
=
=
 
n
u
l
l
)
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
 
i
s
C
u
r
r
e
n
t
 
=
 
m
 
=
=
=
 
f
r
a
m
e
.
c
u
r
M
a
s
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
r
 
k
e
y
=
{
m
}
 
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
C
u
r
r
e
n
t
 
?
 
`
$
{
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
2
0
`
 
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
 
}
}
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
y
-
0
.
5
 
p
x
-
1
.
5
 
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
i
s
C
u
r
r
e
n
t
 
?
 
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
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
.
p
a
d
S
t
a
r
t
(
n
,
 
"
0
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
w
.
m
a
p
(
(
v
,
 
i
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
s
C
e
l
l
 
=
 
i
s
C
u
r
r
e
n
t
 
&
&
 
i
 
=
=
=
 
f
r
a
m
e
.
c
u
r
C
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
p
y
-
0
.
5
 
p
x
-
1
.
5
 
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
 
r
o
u
n
d
e
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
v
 
=
=
=
 
n
u
l
l
 
?
 
"
#
c
b
d
5
e
1
"
 
:
 
i
s
C
e
l
l
 
?
 
"
#
f
f
f
"
 
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
C
e
l
l
 
?
 
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
:
 
i
s
C
e
l
l
 
?
 
8
0
0
 
:
 
4
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
 
=
=
=
 
n
u
l
l
 
?
 
"
i
n
f
"
 
:
 
v
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
t
-
1
"
>
T
a
b
l
e
 
s
i
z
e
:
 
2
^
n
 
x
 
n
.
 
T
i
m
e
:
 
O
(
n
^
2
 
*
 
2
^
n
)
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
C
a
l
l
o
u
t
>
{
f
r
a
m
e
.
m
e
s
s
a
g
e
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
 
 
S
p
a
c
e
 
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
 
(
E
d
i
t
 
D
i
s
t
a
n
c
e
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
S
p
a
c
e
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


 
 
r
o
w
s
:
 
(
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
)
[
]
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
:
 
{
 
i
:
 
n
u
m
b
e
r
;
 
j
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
;


 
 
c
o
l
l
a
p
s
e
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


 
 
p
r
e
v
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
l
l
;


 
 
c
u
r
r
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
l
l
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
S
P
A
C
E
 
=
 
[


 
 
"
/
/
 
E
d
i
t
 
D
i
s
t
a
n
c
e
 
-
 
c
l
a
s
s
i
c
 
2
D
 
D
P
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
 
e
d
i
t
(
a
,
 
b
)
:
"
,


 
 
"
 
 
n
 
=
 
|
a
|
;
 
m
 
=
 
|
b
|
"
,


 
 
"
 
 
d
p
[
0
.
.
n
]
[
0
.
.
m
]
"
,


 
 
"
 
 
d
p
[
i
]
[
0
]
 
=
 
i
;
 
d
p
[
0
]
[
j
]
 
=
 
j
"
,


 
 
"
 
 
f
o
r
 
i
 
i
n
 
1
.
.
n
:
"
,


 
 
"
 
 
 
 
f
o
r
 
j
 
i
n
 
1
.
.
m
:
"
,


 
 
"
 
 
 
 
 
 
i
f
 
a
[
i
-
1
]
=
=
b
[
j
-
1
]
:
"
,


 
 
"
 
 
 
 
 
 
 
 
d
p
[
i
]
[
j
]
 
=
 
d
p
[
i
-
1
]
[
j
-
1
]
"
,


 
 
"
 
 
 
 
 
 
e
l
s
e
:
"
,


 
 
"
 
 
 
 
 
 
 
 
d
p
[
i
]
[
j
]
 
=
 
1
 
+
 
m
i
n
(
d
p
[
i
-
1
]
[
j
]
,
 
d
p
[
i
]
[
j
-
1
]
,
 
d
p
[
i
-
1
]
[
j
-
1
]
)
"
,


 
 
"
 
 
r
e
t
u
r
n
 
d
p
[
n
]
[
m
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
S
p
a
c
e
F
r
a
m
e
s
(
a
:
 
s
t
r
i
n
g
,
 
b
:
 
s
t
r
i
n
g
)
:
 
S
p
a
c
e
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
 
n
 
=
 
a
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
 
m
 
=
 
b
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
 
d
p
:
 
(
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
)
[
]
[
]
 
=
 
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
 
n
 
+
 
1
 
}
,
 
(
)
 
=
>
 
A
r
r
a
y
(
m
 
+
 
1
)
.
f
i
l
l
(
n
u
l
l
)
)
;


 
 
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
=
 
n
;
 
i
+
+
)
 
d
p
[
i
]
[
0
]
 
=
 
i
;


 
 
f
o
r
 
(
l
e
t
 
j
 
=
 
0
;
 
j
 
<
=
 
m
;
 
j
+
+
)
 
d
p
[
0
]
[
j
]
 
=
 
j
;


 
 
c
o
n
s
t
 
f
:
 
S
p
a
c
e
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




 
 
f
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
 
a
:
 
`
"
$
{
a
}
"
`
,
 
b
:
 
`
"
$
{
b
}
"
`
,
 
n
,
 
m
 
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
 
`
C
o
m
p
u
t
e
 
e
d
i
t
 
d
i
s
t
a
n
c
e
 
b
e
t
w
e
e
n
 
"
$
{
a
}
"
 
a
n
d
 
"
$
{
b
}
"
.
`
,
 
r
o
w
s
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
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
 
n
u
l
l
,
 
c
o
l
l
a
p
s
e
d
:
 
f
a
l
s
e
,
 
p
r
e
v
:
 
n
u
l
l
,
 
c
u
r
r
:
 
n
u
l
l
 
}
)
;


 
 
f
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
 
4
,
 
v
a
r
s
:
 
{
}
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
d
p
"
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
 
b
a
s
e
 
r
o
w
 
a
n
d
 
c
o
l
u
m
n
 
(
d
p
[
i
]
[
0
]
=
i
,
 
d
p
[
0
]
[
j
]
=
j
)
.
"
,
 
r
o
w
s
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
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
 
n
u
l
l
,
 
c
o
l
l
a
p
s
e
d
:
 
f
a
l
s
e
,
 
p
r
e
v
:
 
n
u
l
l
,
 
c
u
r
r
:
 
n
u
l
l
 
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
 
i
 
=
 
1
;
 
i
 
<
=
 
n
;
 
i
+
+
)
 
{


 
 
 
 
f
o
r
 
(
l
e
t
 
j
 
=
 
1
;
 
j
 
<
=
 
m
;
 
j
+
+
)
 
{


 
 
 
 
 
 
i
f
 
(
a
[
i
 
-
 
1
]
 
=
=
=
 
b
[
j
 
-
 
1
]
)
 
{


 
 
 
 
 
 
 
 
d
p
[
i
]
[
j
]
 
=
 
d
p
[
i
 
-
 
1
]
[
j
 
-
 
1
]
;


 
 
 
 
 
 
 
 
f
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
 
8
,
 
v
a
r
s
:
 
{
 
i
,
 
j
,
 
[
`
a
[
$
{
i
 
-
 
1
}
]
`
]
:
 
a
[
i
 
-
 
1
]
,
 
[
`
b
[
$
{
j
 
-
 
1
}
]
`
]
:
 
b
[
j
 
-
 
1
]
,
 
[
`
d
p
[
i
]
[
j
]
`
]
:
 
d
p
[
i
]
[
j
]
 
?
?
 
"
-
"
 
}
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
d
p
[
i
]
[
j
]
"
,
 
m
e
s
s
a
g
e
:
 
`
'
$
{
a
[
i
 
-
 
1
]
}
'
 
=
=
 
'
$
{
b
[
j
 
-
 
1
]
}
'
,
 
i
n
h
e
r
i
t
 
d
i
a
g
o
n
a
l
:
 
d
p
[
$
{
i
}
]
[
$
{
j
}
]
 
=
 
$
{
d
p
[
i
]
[
j
]
}
.
`
,
 
r
o
w
s
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
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
 
{
 
i
,
 
j
 
}
,
 
c
o
l
l
a
p
s
e
d
:
 
f
a
l
s
e
,
 
p
r
e
v
:
 
n
u
l
l
,
 
c
u
r
r
:
 
n
u
l
l
 
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
o
n
s
t
 
v
 
=
 
1
 
+
 
M
a
t
h
.
m
i
n
(
d
p
[
i
 
-
 
1
]
[
j
]
 
?
?
 
I
n
f
i
n
i
t
y
,
 
d
p
[
i
]
[
j
 
-
 
1
]
 
?
?
 
I
n
f
i
n
i
t
y
,
 
d
p
[
i
 
-
 
1
]
[
j
 
-
 
1
]
 
?
?
 
I
n
f
i
n
i
t
y
)
;


 
 
 
 
 
 
 
 
d
p
[
i
]
[
j
]
 
=
 
v
;


 
 
 
 
 
 
 
 
f
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
 
1
0
,
 
v
a
r
s
:
 
{
 
i
,
 
j
,
 
[
`
d
p
[
i
]
[
j
]
`
]
:
 
v
 
}
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
d
p
[
i
]
[
j
]
"
,
 
m
e
s
s
a
g
e
:
 
`
'
$
{
a
[
i
 
-
 
1
]
}
'
 
!
=
 
'
$
{
b
[
j
 
-
 
1
]
}
'
,
 
1
 
+
 
m
i
n
(
u
p
,
 
l
e
f
t
,
 
d
i
a
g
)
 
=
 
$
{
v
}
.
`
,
 
r
o
w
s
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
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
 
{
 
i
,
 
j
 
}
,
 
c
o
l
l
a
p
s
e
d
:
 
f
a
l
s
e
,
 
p
r
e
v
:
 
n
u
l
l
,
 
c
u
r
r
:
 
n
u
l
l
 
}
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}




 
 
f
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
 
1
1
,
 
v
a
r
s
:
 
{
 
a
n
s
w
e
r
:
 
d
p
[
n
]
[
m
]
 
?
?
 
"
-
"
 
}
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
a
n
s
w
e
r
"
,
 
m
e
s
s
a
g
e
:
 
`
E
d
i
t
 
d
i
s
t
a
n
c
e
 
=
 
$
{
d
p
[
n
]
[
m
]
}
.
 
S
p
a
c
e
 
u
s
e
d
 
s
o
 
f
a
r
:
 
O
(
(
n
+
1
)
(
m
+
1
)
)
.
`
,
 
r
o
w
s
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
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
 
{
 
i
:
 
n
,
 
j
:
 
m
 
}
,
 
c
o
l
l
a
p
s
e
d
:
 
f
a
l
s
e
,
 
p
r
e
v
:
 
n
u
l
l
,
 
c
u
r
r
:
 
n
u
l
l
 
}
)
;


 
 
c
o
n
s
t
 
p
r
e
v
 
=
 
d
p
[
n
 
-
 
1
 
>
=
 
0
 
?
 
n
 
-
 
1
 
:
 
0
]
.
m
a
p
(
(
x
)
 
=
>
 
x
 
?
?
 
0
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
 
=
 
d
p
[
n
]
.
m
a
p
(
(
x
)
 
=
>
 
x
 
?
?
 
0
)
;


 
 
f
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
 
1
1
,
 
v
a
r
s
:
 
{
}
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
d
p
"
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
O
b
s
e
r
v
a
t
i
o
n
:
 
d
p
[
i
]
[
j
]
 
o
n
l
y
 
r
e
a
d
s
 
r
o
w
 
i
-
1
 
a
n
d
 
r
o
w
 
i
.
 
K
e
e
p
 
j
u
s
t
 
t
w
o
 
r
o
w
s
!
"
,
 
r
o
w
s
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
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
 
n
u
l
l
,
 
c
o
l
l
a
p
s
e
d
:
 
f
a
l
s
e
,
 
p
r
e
v
,
 
c
u
r
r
 
}
)
;


 
 
f
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
 
1
1
,
 
v
a
r
s
:
 
{
 
s
p
a
c
e
:
 
"
O
(
2
*
m
)
 
=
>
 
O
(
m
)
"
 
}
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
s
p
a
c
e
"
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
C
o
l
l
a
p
s
e
 
t
h
e
 
t
a
b
l
e
 
t
o
 
t
w
o
 
1
-
D
 
a
r
r
a
y
s
.
 
S
p
a
c
e
 
d
r
o
p
s
 
f
r
o
m
 
O
(
n
*
m
)
 
t
o
 
O
(
m
)
.
"
,
 
r
o
w
s
:
 
d
p
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
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
 
n
u
l
l
,
 
c
o
l
l
a
p
s
e
d
:
 
t
r
u
e
,
 
p
r
e
v
,
 
c
u
r
r
 
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
 
O
n
e
D
R
o
w
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
s
 
}
:
 
{
 
l
a
b
e
l
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
s
:
 
n
u
m
b
e
r
[
]
 
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
2
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
1
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
l
a
b
e
l
 
=
=
=
 
"
c
u
r
r
"
 
?
 
T
H
E
M
E
.
s
u
c
c
e
s
s
 
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
M
u
t
e
d
 
}
}
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
0
.
5
"
>


 
 
 
 
 
 
 
 
{
v
a
l
s
.
m
a
p
(
(
v
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
w
-
8
 
h
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
 
b
o
r
d
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
 
l
a
b
e
l
 
=
=
=
 
"
c
u
r
r
"
 
?
 
"
#
d
c
f
c
e
7
"
 
:
 
T
H
E
M
E
.
b
g
,
 
c
o
l
o
r
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
v
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
p
a
c
e
V
i
s
u
a
l
i
z
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
k
i
t
t
e
n
 
|
 
s
i
t
t
i
n
g
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
t
s
 
=
 
i
n
p
u
t
S
t
r
.
s
p
l
i
t
(
"
|
"
)
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
 
s
.
t
r
i
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
 
a
 
=
 
(
p
a
r
t
s
[
0
]
 
|
|
 
"
a
b
"
)
.
s
l
i
c
e
(
0
,
 
8
)
;


 
 
c
o
n
s
t
 
b
 
=
 
(
p
a
r
t
s
[
1
]
 
|
|
 
"
a
c
"
)
.
s
l
i
c
e
(
0
,
 
8
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
 
=
>
 
b
u
i
l
d
S
p
a
c
e
F
r
a
m
e
s
(
a
,
 
b
)
,
 
[
a
,
 
b
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


 
 
c
o
n
s
t
 
n
 
=
 
a
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
 
m
 
=
 
b
.
l
e
n
g
t
h
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
"
S
p
a
c
e
 
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
,
 
E
d
i
t
 
D
i
s
t
a
n
c
e
"


 
 
 
 
 
 
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
w
o
 
s
t
r
i
n
g
s
 
(
s
e
p
a
r
a
t
e
d
 
b
y
 
|
)
.
 
M
a
x
 
8
 
c
h
a
r
s
 
e
a
c
h
.
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
 
k
i
t
t
e
n
 
|
 
s
i
t
t
i
n
g
"


 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
W
a
t
c
h
 
t
h
e
 
2
-
D
 
t
a
b
l
e
 
b
u
i
l
d
,
 
t
h
e
n
 
c
o
l
l
a
p
s
e
 
t
o
 
t
w
o
 
1
-
D
 
r
o
w
s
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
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
k
i
t
t
e
n
-
>
s
i
t
t
i
n
g
"
,
 
v
a
l
u
e
:
 
"
k
i
t
t
e
n
 
|
 
s
i
t
t
i
n
g
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
h
o
r
s
e
-
>
r
o
s
"
,
 
v
a
l
u
e
:
 
"
h
o
r
s
e
 
|
 
r
o
s
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
a
b
c
-
>
y
a
b
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
a
b
c
 
|
 
y
a
b
d
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
s
a
m
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
c
o
d
e
 
|
 
c
o
d
e
"
 
}
,


 
 
 
 
 
 
 
 
 
 
]
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
v
)
 
=
>
 
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
v
)
}


 
 
 
 
 
 
 
 
/
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
S
P
A
C
E
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


 
 
 
 
 
 
{
f
r
a
m
e
 
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
2
-
D
 
D
P
 
T
a
b
l
e
 
(
{
n
 
+
 
1
}
 
x
 
{
m
 
+
 
1
}
)


 
 
 
 
 
 
 
 
 
 
 
 
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
o
v
e
r
f
l
o
w
-
x
-
a
u
t
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
 
o
p
a
c
i
t
y
:
 
f
r
a
m
e
.
c
o
l
l
a
p
s
e
d
 
?
 
0
.
3
 
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
 
"
o
p
a
c
i
t
y
 
0
.
4
5
s
 
e
a
s
e
"
 
}
}
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
x
s
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
-
1
"
 
/
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
y
-
1
 
p
x
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
5
0
0
"
>
e
p
s
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
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
.
m
a
p
(
(
c
,
 
j
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
p
y
-
1
 
p
x
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
5
0
0
"
>
{
c
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
f
r
a
m
e
.
r
o
w
s
.
m
a
p
(
(
r
o
w
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
y
-
1
 
p
x
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
5
0
0
"
>
{
i
 
=
=
=
 
0
 
?
 
"
e
p
s
"
 
:
 
a
[
i
 
-
 
1
]
}
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
w
.
m
a
p
(
(
v
,
 
j
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
s
H
o
t
 
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
e
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
e
d
.
i
 
=
=
=
 
i
 
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
e
d
.
j
 
=
=
=
 
j
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
r
o
m
P
r
e
v
 
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
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
(
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
e
d
.
i
 
-
 
1
 
=
=
=
 
i
 
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
e
d
.
j
 
=
=
=
 
j
)
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
(
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
e
d
.
i
 
-
 
1
 
=
=
=
 
i
 
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
e
d
.
j
 
-
 
1
 
=
=
=
 
j
)
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
(
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
e
d
.
i
 
=
=
=
 
i
 
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
e
d
.
j
 
-
 
1
 
=
=
=
 
j
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
t
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
r
o
u
n
d
e
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
3
2
,
 
h
e
i
g
h
t
:
 
3
2
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
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
`
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
:
 
i
s
H
o
t
 
?
 
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
 
:
 
f
r
o
m
P
r
e
v
 
?
 
`
$
{
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
2
4
`
 
:
 
T
H
E
M
E
.
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
i
s
H
o
t
 
?
 
"
#
f
f
f
"
 
:
 
v
 
=
=
=
 
n
u
l
l
 
?
 
"
#
c
b
d
5
e
1
"
 
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
:
 
i
s
H
o
t
 
?
 
8
0
0
 
:
 
5
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
 
?
?
 
"
-
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
4
 
b
o
r
d
e
r
-
2
 
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
o
p
a
c
i
t
y
"


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
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
 
f
r
a
m
e
.
c
o
l
l
a
p
s
e
d
 
?
 
1
 
:
 
0
.
3
5
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
:
 
"
#
f
0
f
d
f
4
"
 
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
l
i
m
e
-
7
0
0
 
m
b
-
3
"
>
C
o
l
l
a
p
s
e
d
 
t
o
 
2
 
x
 
1
-
D
 
A
r
r
a
y
s
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
p
r
e
v
 
&
&
 
f
r
a
m
e
.
c
u
r
r
 
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
O
n
e
D
R
o
w
 
l
a
b
e
l
=
"
p
r
e
v
"
 
v
a
l
s
=
{
f
r
a
m
e
.
p
r
e
v
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
O
n
e
D
R
o
w
 
l
a
b
e
l
=
"
c
u
r
r
"
 
v
a
l
s
=
{
f
r
a
m
e
.
c
u
r
r
}
 
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
 
t
e
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
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
p
[
i
]
[
j
]
 
o
n
l
y
 
n
e
e
d
s
 
p
r
e
v
[
j
]
,
 
p
r
e
v
[
j
-
1
]
,
 
c
u
r
r
[
j
-
1
]
.
 
A
f
t
e
r
 
e
a
c
h
 
r
o
w
 
s
w
a
p
 
p
r
e
v
 
=
 
c
u
r
r
.
 
S
p
a
c
e
 
d
r
o
p
s
 
f
r
o
m
 
O
(
(
n
+
1
)
(
m
+
1
)
)
 
t
o
 
O
(
m
+
1
)
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
 
i
t
a
l
i
c
"
>
W
a
i
t
i
n
g
 
f
o
r
 
t
h
e
 
2
-
D
 
t
a
b
l
e
 
t
o
 
f
i
n
i
s
h
.
.
.
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
C
a
l
l
o
u
t
>
{
f
r
a
m
e
.
m
e
s
s
a
g
e
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
 
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
M
o
d
e
>
(
"
t
s
p
"
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
 
g
a
p
-
2
 
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
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
"
t
s
p
"
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
 
s
e
t
M
o
d
e
(
"
t
s
p
"
)
}
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
1
p
x
]
"
>
B
i
t
m
a
s
k
 
D
P
 
(
T
S
P
)
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
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
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
"
s
p
a
c
e
"
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
 
s
e
t
M
o
d
e
(
"
s
p
a
c
e
"
)
}
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
1
p
x
]
"
>
S
p
a
c
e
 
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
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
t
s
p
"
 
?
 
<
T
S
P
V
i
s
u
a
l
i
z
e
 
/
>
 
:
 
<
S
p
a
c
e
V
i
s
u
a
l
i
z
e
 
/
>
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
 
s
e
c
t
i
o
n
s
 
=
 
[


 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
t
a
t
e
 
=
 
i
d
e
n
t
i
t
y
 
o
f
 
a
 
s
u
b
p
r
o
b
l
e
m
"
,
 
b
o
d
y
:
 
"
A
 
D
P
 
s
t
a
t
e
 
i
s
 
j
u
s
t
 
e
n
o
u
g
h
 
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
 
t
o
 
d
e
c
i
d
e
 
w
h
a
t
 
t
o
 
d
o
 
n
e
x
t
.
 
F
o
r
 
T
S
P
,
 
'
I
'
m
 
a
t
 
c
i
t
y
 
i
 
a
n
d
 
h
a
v
e
 
v
i
s
i
t
e
d
 
s
e
t
 
S
'
,
 
(
i
,
 
S
)
,
 
i
s
 
s
u
f
f
i
c
i
e
n
t
.
 
R
e
s
t
 
o
f
 
t
h
e
 
p
a
s
t
 
d
o
e
s
n
'
t
 
m
a
t
t
e
r
.
 
P
i
c
k
 
t
h
e
 
s
m
a
l
l
e
s
t
 
t
u
p
l
e
 
t
h
a
t
 
m
a
k
e
s
 
t
h
e
 
r
e
c
u
r
r
e
n
c
e
 
w
o
r
k
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
B
i
t
m
a
s
k
 
=
 
t
i
n
y
 
s
e
t
s
"
,
 
b
o
d
y
:
 
"
W
h
e
n
 
t
h
e
 
'
s
e
t
'
 
i
n
 
y
o
u
r
 
s
t
a
t
e
 
h
a
s
 
<
=
 
~
2
0
 
e
l
e
m
e
n
t
s
,
 
r
e
p
r
e
s
e
n
t
 
i
t
 
a
s
 
a
n
 
i
n
t
e
g
e
r
 
w
h
o
s
e
 
i
-
t
h
 
b
i
t
 
i
s
 
1
 
i
f
 
e
l
e
m
e
n
t
 
i
 
i
s
 
i
n
 
t
h
e
 
s
e
t
.
 
U
n
i
o
n
 
=
 
O
R
,
 
t
e
s
t
 
=
 
A
N
D
,
 
a
d
d
 
=
 
O
R
.
 
T
a
b
l
e
s
 
b
e
c
o
m
e
 
2
^
n
 
x
 
n
 
a
r
r
a
y
s
.
 
C
a
n
o
n
i
c
a
l
 
f
o
r
 
T
S
P
,
 
s
u
b
s
e
t
-
s
u
m
-
w
i
t
h
-
t
r
a
c
k
i
n
g
,
 
a
s
s
i
g
n
m
e
n
t
 
p
r
o
b
l
e
m
s
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
S
p
a
c
e
 
o
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
 
r
u
l
e
 
o
f
 
t
h
u
m
b
"
,
 
b
o
d
y
:
 
"
I
f
 
d
p
[
i
]
 
d
e
p
e
n
d
s
 
o
n
l
y
 
o
n
 
d
p
[
i
-
1
]
 
(
a
n
d
 
m
a
y
b
e
 
d
p
[
i
-
2
]
)
,
 
y
o
u
 
o
n
l
y
 
n
e
e
d
 
O
(
1
)
 
o
r
 
O
(
2
)
 
r
o
w
s
.
 
R
e
p
l
a
c
e
 
d
p
[
n
]
[
m
]
 
w
i
t
h
 
p
r
e
v
[
]
 
a
n
d
 
c
u
r
r
[
]
 
a
r
r
a
y
s
.
 
S
p
a
c
e
 
O
(
n
*
m
)
 
-
>
 
O
(
m
)
.
 
T
h
i
s
 
i
s
 
f
r
e
e
,
 
n
o
 
a
l
g
o
r
i
t
h
m
i
c
 
c
h
a
n
g
e
,
 
j
u
s
t
 
r
e
w
r
i
t
i
n
g
 
t
h
e
 
l
o
o
p
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
T
o
p
-
d
o
w
n
 
v
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
"
,
 
b
o
d
y
:
 
"
T
o
p
-
d
o
w
n
 
(
m
e
m
o
i
z
a
t
i
o
n
)
 
m
i
r
r
o
r
s
 
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
 
r
e
c
u
r
r
e
n
c
e
:
 
r
e
c
u
r
s
e
 
+
 
m
e
m
o
.
 
B
o
t
t
o
m
-
u
p
 
f
i
l
l
s
 
t
h
e
 
t
a
b
l
e
 
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
c
y
 
o
r
d
e
r
.
 
B
o
t
t
o
m
-
u
p
 
m
a
k
e
s
 
s
p
a
c
e
 
o
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
 
o
b
v
i
o
u
s
,
 
y
o
u
 
c
a
n
 
p
h
y
s
i
c
a
l
l
y
 
s
e
e
 
w
h
i
c
h
 
r
o
w
s
 
a
r
e
 
n
e
e
d
e
d
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
d
p
 
s
t
a
t
e
 
d
e
s
i
g
n
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
T
h
e
 
r
i
g
h
t
 
s
t
a
t
e
 
w
r
i
t
e
s
 
t
h
e
 
r
e
c
u
r
r
e
n
c
e
 
f
o
r
 
y
o
u
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


 
 
 
 
 
 
 
 
 
 
D
P
 
p
r
o
b
l
e
m
s
 
a
r
e
n
'
t
 
s
o
l
v
e
d
 
b
y
 
f
i
n
d
i
n
g
 
a
 
c
l
e
v
e
r
 
f
o
r
m
u
l
a
,
 
t
h
e
y
'
r
e
 
s
o
l
v
e
d
 
b
y
 
c
h
o
o
s
i
n
g
 
t
h
e
 
s
t
a
t
e
 
w
e
l
l
.
 
A
 
w
e
l
l
-
c
h
o
s
e
n
 
s
t
a
t
e
 
h
a
l
v
e
s
 
y
o
u
r
 
c
o
d
e
.
 
A
 
p
o
o
r
l
y
-
c
h
o
s
e
n
 
s
t
a
t
e
 
m
a
k
e
s
 
t
h
e
 
p
r
o
b
l
e
m
 
f
e
e
l
 
i
m
p
o
s
s
i
b
l
e
.
 
B
i
t
m
a
s
k
s
 
a
n
d
 
s
p
a
c
e
 
o
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
 
a
r
e
 
t
w
o
 
t
o
o
l
s
 
f
o
r
 
g
e
t
t
i
n
g
 
t
h
e
 
s
t
a
t
e
 
r
i
g
h
t
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
4
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
1
 
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
s
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
l
e
m
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
B
i
t
m
a
s
k
 
T
S
P
 
o
n
 
4
 
c
i
t
i
e
s
 
h
a
s
 
h
o
w
 
m
a
n
y
 
s
t
a
t
e
s
 
(
m
a
s
k
 
x
 
c
i
t
y
)
?
"
,
 
a
:
 
"
6
4
"
 
}
,


 
 
 
 
{
 
q
:
 
"
E
d
i
t
 
d
i
s
t
a
n
c
e
 
d
p
 
t
a
b
l
e
 
s
i
z
e
 
f
o
r
 
w
o
r
d
s
 
o
f
 
l
e
n
g
t
h
 
n
=
5
 
a
n
d
 
m
=
7
?
"
,
 
a
:
 
"
4
8
"
 
}
,


 
 
 
 
{
 
q
:
 
"
A
f
t
e
r
 
s
p
a
c
e
 
o
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
,
 
h
o
w
 
m
a
n
y
 
i
n
t
 
c
e
l
l
s
 
d
o
e
s
 
e
d
i
t
 
d
i
s
t
a
n
c
e
 
n
e
e
d
 
(
i
n
 
t
e
r
m
s
 
o
f
 
m
)
?
"
,
 
a
:
 
"
2
(
m
+
1
)
"
 
}
,


 
 
 
 
{
 
q
:
 
"
m
a
s
k
 
=
 
0
b
1
0
1
1
.
 
W
h
i
c
h
 
c
i
t
i
e
s
 
a
r
e
 
v
i
s
i
t
e
d
 
(
s
o
r
t
e
d
 
b
i
t
s
 
s
e
t
)
?
"
,
 
a
:
 
"
0
,
1
,
3
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
s
t
r
i
n
g
[
]
>
(
p
r
o
b
l
e
m
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
 
"
"
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
l
e
m
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


 
 
c
o
n
s
t
 
n
o
r
m
a
l
i
z
e
 
=
 
(
s
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
 
s
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
\
s
+
/
g
,
 
"
"
)
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
 
o
u
t
 
t
h
e
 
s
t
a
t
e
 
s
p
a
c
e
 
s
i
z
e
s
 
o
n
 
p
a
p
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
 
"
s
t
a
t
e
"
 
i
s
 
t
h
e
 
k
e
y
 
o
b
j
e
c
t
 
i
n
 
D
P
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
l
e
m
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
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
=
 
n
o
r
m
a
l
i
z
e
(
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
)
 
=
=
=
 
n
o
r
m
a
l
i
z
e
(
p
.
a
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
4
0
0
 
m
r
-
1
"
>
#
{
i
 
+
 
1
}
.
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
w
-
3
2
 
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
 
t
e
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
{
`
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
 
$
{
c
o
r
r
e
c
t
 
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
o
s
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
r
o
s
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
r
o
s
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
r
o
s
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
r
o
s
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
c
o
r
r
e
c
t
 
?
 
`
C
o
r
r
e
c
t
 
-
 
$
{
p
.
a
}
`
 
:
 
`
A
n
s
w
e
r
:
 
$
{
p
.
a
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
B
i
t
m
a
s
k
 
D
P
 
f
e
a
s
i
b
i
l
i
t
y
 
b
o
u
n
d
a
r
y
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
t
m
a
s
k
 
o
n
 
n
 
i
t
e
m
s
:
 
2
^
n
 
m
a
s
k
s
 
x
 
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
s
 
=
 
O
(
n
^
2
 
*
 
2
^
n
)
 
t
i
m
e
,
 
O
(
n
 
*
 
2
^
n
)
 
s
p
a
c
e
.
 
F
o
r
 
n
=
2
0
:
 
~
4
*
1
0
^
8
 
o
p
s
,
 
f
e
a
s
i
b
l
e
.
 
F
o
r
 
n
=
2
5
:
 
1
0
^
1
0
,
 
t
o
o
 
s
l
o
w
.
 
W
h
e
n
 
n
 
c
r
e
e
p
s
 
a
b
o
v
e
 
2
0
,
 
l
o
o
k
 
f
o
r
 
p
r
o
b
l
e
m
-
s
p
e
c
i
f
i
c
 
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
m
e
e
t
-
i
n
-
t
h
e
-
m
i
d
d
l
e
,
 
S
O
S
 
D
P
)
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
S
p
a
c
e
 
o
p
t
 
g
o
t
c
h
a
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
l
i
s
t
-
d
i
s
c
 
p
l
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
l
i
>
0
/
1
 
k
n
a
p
s
a
c
k
:
 
r
e
v
e
r
s
e
 
t
h
e
 
i
n
n
e
r
 
l
o
o
p
 
(
j
 
f
r
o
m
 
W
 
d
o
w
n
 
t
o
 
w
)
 
t
o
 
r
e
u
s
e
 
d
p
[
j
-
w
]
 
f
r
o
m
 
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
 
r
o
w
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
U
n
b
o
u
n
d
e
d
 
k
n
a
p
s
a
c
k
:
 
f
o
r
w
a
r
d
 
i
n
n
e
r
 
l
o
o
p
,
 
y
o
u
 
W
A
N
T
 
t
o
 
r
e
u
s
e
 
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
 
r
o
w
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
I
f
 
y
o
u
 
n
e
e
d
 
t
o
 
r
e
c
o
n
s
t
r
u
c
t
 
t
h
e
 
p
a
t
h
,
 
k
e
e
p
 
t
h
e
 
f
u
l
l
 
t
a
b
l
e
.
 
D
o
n
'
t
 
c
o
l
l
a
p
s
e
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
L
I
S
 
w
i
t
h
 
p
a
t
i
e
n
c
e
 
s
o
r
t
 
c
o
l
l
a
p
s
e
s
 
O
(
n
^
2
)
 
D
P
 
i
n
t
o
 
O
(
n
 
l
o
g
 
n
)
,
 
s
t
a
t
e
 
r
e
d
e
s
i
g
n
,
 
n
o
t
 
s
p
a
c
e
 
t
r
i
c
k
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
H
o
w
 
t
o
 
p
i
c
k
 
a
 
s
t
a
t
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


 
 
 
 
 
 
 
 
 
 
A
s
k
:
 
"
I
f
 
I
'
m
 
a
b
o
u
t
 
t
o
 
m
a
k
e
 
t
h
e
 
n
e
x
t
 
d
e
c
i
s
i
o
n
,
 
w
h
a
t
 
m
i
n
i
m
u
m
 
i
n
f
o
 
f
r
o
m
 
t
h
e
 
p
a
s
t
 
d
o
 
I
 
n
e
e
d
?
"
 
T
h
a
t
 
i
n
f
o
 
I
S
 
t
h
e
 
s
t
a
t
e
.
 
F
o
r
 
T
S
P
:
 
w
h
e
r
e
 
a
m
 
I
 
+
 
w
h
a
t
 
h
a
v
e
 
I
 
v
i
s
i
t
e
d
.
 
F
o
r
 
e
d
i
t
 
d
i
s
t
a
n
c
e
:
 
h
o
w
 
m
u
c
h
 
o
f
 
s
t
r
i
n
g
 
a
 
+
 
h
o
w
 
m
u
c
h
 
o
f
 
s
t
r
i
n
g
 
b
 
I
'
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
d
.
 
T
h
e
 
r
e
c
u
r
r
e
n
c
e
 
t
h
e
n
 
w
r
i
t
e
s
 
i
t
s
e
l
f
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


/
*
 
 
R
o
o
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
8
_
D
P
S
t
a
t
e
D
e
s
i
g
n
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
 
o
f
 
H
e
l
d
-
K
a
r
p
 
b
i
t
m
a
s
k
 
D
P
 
f
o
r
 
T
S
P
 
o
n
 
n
 
c
i
t
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
O
(
n
!
)
"
,
 
"
O
(
n
²
 
*
 
2
ⁿ
)
"
,
 
"
O
(
n
³
)
"
,
 
"
O
(
n
 
*
 
2
ⁿ
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
2
ⁿ
 
m
a
s
k
s
 
x
 
n
 
l
a
s
t
-
c
i
t
i
e
s
 
=
 
n
 
*
 
2
ⁿ
 
s
t
a
t
e
s
;
 
e
a
c
h
 
c
o
n
s
i
d
e
r
s
 
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
s
.
 
T
o
t
a
l
 
O
(
n
²
 
*
 
2
ⁿ
)
.
 
B
r
u
t
e
 
f
o
r
c
e
 
w
o
u
l
d
 
b
e
 
O
(
n
!
)
,
 
m
u
c
h
 
w
o
r
s
e
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
 
t
h
e
 
e
d
i
t
-
d
i
s
t
a
n
c
e
 
2
-
D
 
D
P
,
 
w
h
i
c
h
 
c
e
l
l
s
 
d
o
e
s
 
d
p
[
i
]
[
j
]
 
d
i
r
e
c
t
l
y
 
d
e
p
e
n
d
 
o
n
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
p
[
i
+
1
]
[
j
+
1
]
 
o
n
l
y
"
,


 
 
 
 
 
 
 
 
"
d
p
[
i
-
1
]
[
j
]
,
 
d
p
[
i
]
[
j
-
1
]
,
 
d
p
[
i
-
1
]
[
j
-
1
]
"
,


 
 
 
 
 
 
 
 
"
A
l
l
 
c
e
l
l
s
 
o
f
 
r
o
w
 
0
"
,


 
 
 
 
 
 
 
 
"
d
p
[
0
]
[
0
]
 
o
n
l
y
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
D
e
l
e
t
e
 
=
 
u
p
,
 
i
n
s
e
r
t
 
=
 
l
e
f
t
,
 
r
e
p
l
a
c
e
/
k
e
e
p
 
=
 
d
i
a
g
o
n
a
l
.
 
A
l
l
 
t
h
r
e
e
 
a
r
e
 
n
e
e
d
e
d
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
A
f
t
e
r
 
s
p
a
c
e
 
o
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
,
 
e
d
i
t
 
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
 
s
t
r
i
n
g
s
 
o
f
 
l
e
n
g
t
h
 
n
 
a
n
d
 
m
 
u
s
e
s
 
h
o
w
 
m
u
c
h
 
m
e
m
o
r
y
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
 
*
 
m
)
"
,
 
"
O
(
n
 
+
 
m
)
"
,
 
"
O
(
m
i
n
(
n
,
 
m
)
)
"
,
 
"
B
o
t
h
 
B
 
a
n
d
 
C
 
a
r
e
 
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
 
3
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
Y
o
u
 
k
e
e
p
 
t
w
o
 
r
o
w
s
 
o
f
 
l
e
n
g
t
h
 
m
+
1
:
 
O
(
m
)
.
 
Y
o
u
 
c
a
n
 
a
l
w
a
y
s
 
i
t
e
r
a
t
e
 
o
v
e
r
 
t
h
e
 
s
h
o
r
t
e
r
 
s
t
r
i
n
g
'
s
 
l
e
n
g
t
h
 
-
>
 
O
(
m
i
n
(
n
,
 
m
)
)
.
 
B
o
t
h
 
a
n
s
w
e
r
s
 
e
x
p
r
e
s
s
 
t
h
e
 
s
a
m
e
 
i
d
e
a
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
i
c
h
 
o
f
 
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
 
p
r
o
b
l
e
m
s
 
i
s
 
N
O
T
 
n
a
t
u
r
a
l
l
y
 
s
o
l
v
e
d
 
b
y
 
b
i
t
m
a
s
k
 
D
P
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
T
r
a
v
e
l
l
i
n
g
 
s
a
l
e
s
m
a
n
 
w
i
t
h
 
1
5
 
c
i
t
i
e
s
"
,


 
 
 
 
 
 
 
 
"
A
s
s
i
g
n
m
e
n
t
 
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
 
1
2
 
j
o
b
s
"
,


 
 
 
 
 
 
 
 
"
S
h
o
r
t
e
s
t
 
p
a
t
h
 
i
n
 
a
 
1
0
⁶
-
n
o
d
e
 
g
r
a
p
h
"
,


 
 
 
 
 
 
 
 
"
M
i
n
i
m
u
m
 
c
o
s
t
 
t
o
 
c
o
v
e
r
 
a
l
l
 
s
u
b
s
e
t
s
 
o
f
 
1
8
 
i
t
e
m
s
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
A
 
1
0
⁶
-
n
o
d
e
 
g
r
a
p
h
 
h
a
s
 
n
o
 
s
m
a
l
l
 
'
s
e
t
 
i
n
 
t
h
e
 
s
t
a
t
e
'
 
t
o
 
b
i
t
m
a
s
k
.
 
U
s
e
 
D
i
j
k
s
t
r
a
/
B
F
S
.
 
B
i
t
m
a
s
k
 
D
P
 
i
s
 
f
o
r
 
s
m
a
l
l
-
n
 
e
x
p
o
n
e
n
t
i
a
l
 
e
n
u
m
e
r
a
t
i
o
n
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
D
P
 
S
t
a
t
e
 
D
e
s
i
g
n
"


 
 
 
 
 
 
l
e
v
e
l
=
{
8
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
5
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
V
e
r
y
 
h
i
g
h
 
-
 
s
e
p
a
r
a
t
e
s
 
m
i
d
-
l
e
v
e
l
 
f
r
o
m
 
s
e
n
i
o
r
 
c
a
n
d
i
d
a
t
e
s
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
P
a
t
t
e
r
n
 
R
e
c
o
g
n
i
t
i
o
n
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


