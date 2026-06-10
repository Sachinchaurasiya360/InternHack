
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
R
e
f
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
C
a
l
l
b
a
c
k
,
 
u
s
e
M
e
m
o
 
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


 
 
M
a
p
P
i
n
,


 
 
C
o
d
e
2
,


 
 
Z
a
p
,


 
 
A
r
r
o
w
U
p
I
c
o
n
,


 
 
M
i
c
,


 
 
M
i
c
O
f
f
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
 
L
i
n
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
 
c
n
 
}
 
f
r
o
m
 
"
@
/
l
i
b
/
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


 
 
J
o
b
A
g
e
n
t
M
e
s
s
a
g
e
,


 
 
J
o
b
A
g
e
n
t
R
e
s
p
o
n
s
e
,


 
 
J
o
b
F
e
e
d
M
a
t
c
h
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
 
C
o
n
f
i
r
m
D
i
a
l
o
g
 
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
C
o
n
f
i
r
m
D
i
a
l
o
g
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
g
e
n
t
M
e
s
s
a
g
e
 
}
 
f
r
o
m
 
"
.
/
A
g
e
n
t
M
e
s
s
a
g
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
 
T
h
i
n
k
i
n
g
I
n
d
i
c
a
t
o
r
 
}
 
f
r
o
m
 
"
.
/
T
h
i
n
k
i
n
g
I
n
d
i
c
a
t
o
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
 
u
s
e
S
p
e
e
c
h
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
 
}
 
f
r
o
m
 
"
.
/
u
s
e
S
p
e
e
c
h
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
 
D
i
s
p
l
a
y
M
e
s
s
a
g
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


 
 
r
o
l
e
:
 
"
u
s
e
r
"
 
|
 
"
a
s
s
i
s
t
a
n
t
"
;


 
 
c
o
n
t
e
n
t
:
 
s
t
r
i
n
g
;


 
 
j
o
b
s
?
:
 
J
o
b
F
e
e
d
M
a
t
c
h
[
"
j
o
b
"
]
[
]
;


}




c
o
n
s
t
 
F
R
E
E
_
L
I
M
I
T
 
=
 
2
;




c
o
n
s
t
 
Q
U
I
C
K
_
P
R
O
M
P
T
S
 
=
 
[


 
 
{
 
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
 
t
e
x
t
:
 
"
R
e
m
o
t
e
 
R
e
a
c
t
 
j
o
b
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
 
M
a
p
P
i
n
,
 
t
e
x
t
:
 
"
B
a
c
k
e
n
d
 
r
o
l
e
s
 
i
n
 
B
a
n
g
a
l
o
r
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
 
t
e
x
t
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
 
a
b
o
v
e
 
5
 
L
P
A
"
 
}
,


 
 
{
 
i
c
o
n
:
 
Z
a
p
,
 
t
e
x
t
:
 
"
S
h
o
w
 
m
e
 
D
e
v
O
p
s
 
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
 
u
s
e
A
u
t
o
R
e
s
i
z
e
T
e
x
t
a
r
e
a
(
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
,


 
 
m
a
x
H
e
i
g
h
t
,


}
:
 
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
 
n
u
m
b
e
r
;


 
 
m
a
x
H
e
i
g
h
t
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
 
t
e
x
t
a
r
e
a
R
e
f
 
=
 
u
s
e
R
e
f
<
H
T
M
L
T
e
x
t
A
r
e
a
E
l
e
m
e
n
t
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
d
j
u
s
t
H
e
i
g
h
t
 
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


 
 
 
 
(
r
e
s
e
t
?
:
 
b
o
o
l
e
a
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
 
t
e
x
t
a
r
e
a
 
=
 
t
e
x
t
a
r
e
a
R
e
f
.
c
u
r
r
e
n
t
;


 
 
 
 
 
 
i
f
 
(
!
t
e
x
t
a
r
e
a
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
i
f
 
(
r
e
s
e
t
)
 
{


 
 
 
 
 
 
 
 
t
e
x
t
a
r
e
a
.
s
t
y
l
e
.
h
e
i
g
h
t
 
=
 
`
$
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
}
p
x
`
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}


 
 
 
 
 
 
t
e
x
t
a
r
e
a
.
s
t
y
l
e
.
h
e
i
g
h
t
 
=
 
`
$
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
}
p
x
`
;


 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
H
e
i
g
h
t
 
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
i
n
H
e
i
g
h
t
,


 
 
 
 
 
 
 
 
M
a
t
h
.
m
i
n
(
t
e
x
t
a
r
e
a
.
s
c
r
o
l
l
H
e
i
g
h
t
,
 
m
a
x
H
e
i
g
h
t
 
?
?
 
N
u
m
b
e
r
.
P
O
S
I
T
I
V
E
_
I
N
F
I
N
I
T
Y
)
,


 
 
 
 
 
 
)
;


 
 
 
 
 
 
t
e
x
t
a
r
e
a
.
s
t
y
l
e
.
h
e
i
g
h
t
 
=
 
`
$
{
n
e
w
H
e
i
g
h
t
}
p
x
`
;


 
 
 
 
}
,


 
 
 
 
[
m
i
n
H
e
i
g
h
t
,
 
m
a
x
H
e
i
g
h
t
]
,


 
 
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


 
 
 
 
c
o
n
s
t
 
t
e
x
t
a
r
e
a
 
=
 
t
e
x
t
a
r
e
a
R
e
f
.
c
u
r
r
e
n
t
;


 
 
 
 
i
f
 
(
t
e
x
t
a
r
e
a
)
 
t
e
x
t
a
r
e
a
.
s
t
y
l
e
.
h
e
i
g
h
t
 
=
 
`
$
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
}
p
x
`
;


 
 
}
,
 
[
m
i
n
H
e
i
g
h
t
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
R
e
s
i
z
e
 
=
 
(
)
 
=
>
 
a
d
j
u
s
t
H
e
i
g
h
t
(
)
;


 
 
 
 
w
i
n
d
o
w
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
r
e
s
i
z
e
"
,
 
h
a
n
d
l
e
R
e
s
i
z
e
)
;


 
 
 
 
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
 
w
i
n
d
o
w
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
r
e
s
i
z
e
"
,
 
h
a
n
d
l
e
R
e
s
i
z
e
)
;


 
 
}
,
 
[
a
d
j
u
s
t
H
e
i
g
h
t
]
)
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
a
r
e
a
R
e
f
,
 
a
d
j
u
s
t
H
e
i
g
h
t
 
}
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
 
J
o
b
A
g
e
n
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
 
i
s
P
r
e
m
i
u
m
 
=


 
 
 
 
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
P
l
a
n
 
=
=
=
 
"
M
O
N
T
H
L
Y
"
 
|
|


 
 
 
 
 
 
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
P
l
a
n
 
=
=
=
 
"
Y
E
A
R
L
Y
"
)
 
&
&


 
 
 
 
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
;




 
 
c
o
n
s
t
 
q
c
 
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
i
n
p
u
t
,
 
s
e
t
I
n
p
u
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
i
n
t
e
r
i
m
T
e
x
t
,
 
s
e
t
I
n
t
e
r
i
m
T
e
x
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
l
o
c
a
l
M
e
s
s
a
g
e
s
,
 
s
e
t
L
o
c
a
l
M
e
s
s
a
g
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
D
i
s
p
l
a
y
M
e
s
s
a
g
e
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
m
a
n
u
a
l
H
i
t
F
r
e
e
L
i
m
i
t
,
 
s
e
t
M
a
n
u
a
l
H
i
t
F
r
e
e
L
i
m
i
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
s
h
o
w
R
e
s
e
t
C
o
n
f
i
r
m
,
 
s
e
t
S
h
o
w
R
e
s
e
t
C
o
n
f
i
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
h
a
s
C
h
a
t
t
e
d
,
 
s
e
t
H
a
s
C
h
a
t
t
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
 
s
c
r
o
l
l
R
e
f
 
=
 
u
s
e
R
e
f
<
H
T
M
L
D
i
v
E
l
e
m
e
n
t
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
 
{
 
t
e
x
t
a
r
e
a
R
e
f
,
 
a
d
j
u
s
t
H
e
i
g
h
t
 
}
 
=
 
u
s
e
A
u
t
o
R
e
s
i
z
e
T
e
x
t
a
r
e
a
(
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
 
2
4
,


 
 
 
 
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
 
2
0
0
,


 
 
}
)
;




 
 
/
/
 
V
o
i
c
e
 
i
n
p
u
t


 
 
c
o
n
s
t
 
{


 
 
 
 
s
u
p
p
o
r
t
e
d
:
 
v
o
i
c
e
S
u
p
p
o
r
t
e
d
,


 
 
 
 
i
s
L
i
s
t
e
n
i
n
g
,


 
 
 
 
e
r
r
o
r
:
 
v
o
i
c
e
E
r
r
o
r
,


 
 
 
 
s
t
a
r
t
:
 
s
t
a
r
t
L
i
s
t
e
n
i
n
g
,


 
 
 
 
s
t
o
p
:
 
s
t
o
p
L
i
s
t
e
n
i
n
g
,


 
 
}
 
=
 
u
s
e
S
p
e
e
c
h
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
(
{


 
 
 
 
o
n
I
n
t
e
r
i
m
:
 
(
t
e
x
t
)
 
=
>
 
s
e
t
I
n
t
e
r
i
m
T
e
x
t
(
t
e
x
t
)
,


 
 
 
 
o
n
F
i
n
a
l
:
 
(
t
e
x
t
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
I
n
p
u
t
(
(
p
r
e
v
)
 
=
>
 
(
p
r
e
v
 
?
 
`
$
{
p
r
e
v
}
 
$
{
t
e
x
t
}
`
 
:
 
t
e
x
t
)
)
;


 
 
 
 
 
 
s
e
t
I
n
t
e
r
i
m
T
e
x
t
(
"
"
)
;


 
 
 
 
 
 
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
(
)
 
=
>
 
a
d
j
u
s
t
H
e
i
g
h
t
(
)
,
 
0
)
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
 
d
i
s
p
l
a
y
V
a
l
u
e
 
=
 
i
n
p
u
t
 
+
 
(
i
n
t
e
r
i
m
T
e
x
t
 
?
 
"
 
"
 
+
 
i
n
t
e
r
i
m
T
e
x
t
 
:
 
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
v
o
i
c
e
H
i
n
t
,
 
s
e
t
V
o
i
c
e
H
i
n
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
v
o
i
c
e
E
r
r
o
r
 
=
=
=
 
"
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
)
 
{


 
 
 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
 
 
s
e
t
V
o
i
c
e
H
i
n
t
(
"
M
i
c
r
o
p
h
o
n
e
 
a
c
c
e
s
s
 
b
l
o
c
k
e
d
 
-
 
c
h
e
c
k
 
b
r
o
w
s
e
r
 
s
e
t
t
i
n
g
s
"
)
;


 
 
 
 
}


 
 
}
,
 
[
v
o
i
c
e
E
r
r
o
r
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
!
v
o
i
c
e
H
i
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


 
 
 
 
c
o
n
s
t
 
t
i
m
e
r
 
=
 
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
(
)
 
=
>
 
s
e
t
V
o
i
c
e
H
i
n
t
(
n
u
l
l
)
,
 
5
0
0
0
)
;


 
 
 
 
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
 
c
l
e
a
r
T
i
m
e
o
u
t
(
t
i
m
e
r
)
;


 
 
}
,
 
[
v
o
i
c
e
H
i
n
t
]
)
;




 
 
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
:
 
c
o
n
v
e
r
s
a
t
i
o
n
 
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
j
o
b
A
g
e
n
t
.
c
o
n
v
e
r
s
a
t
i
o
n
(
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
j
o
b
-
a
g
e
n
t
/
c
o
n
v
e
r
s
a
t
i
o
n
"
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
 
m
e
s
s
a
g
e
s
:
 
J
o
b
A
g
e
n
t
M
e
s
s
a
g
e
[
]
 
}
 
|
 
n
u
l
l
;


 
 
 
 
}
,


 
 
 
 
e
n
a
b
l
e
d
:
 
!
h
a
s
C
h
a
t
t
e
d
,


 
 
 
 
r
e
t
r
y
:
 
f
a
l
s
e
,


 
 
 
 
s
t
a
l
e
T
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
,


 
 
}
)
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
s
a
t
i
o
n
M
e
s
s
a
g
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
<
D
i
s
p
l
a
y
M
e
s
s
a
g
e
[
]
>
(


 
 
 
 
(
)
 
=
>


 
 
 
 
 
 
c
o
n
v
e
r
s
a
t
i
o
n
?
.
m
e
s
s
a
g
e
s
?
.
m
a
p
(
(
m
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
{


 
 
 
 
 
 
 
 
i
d
:
 
m
.
i
d
 
?
?
 
`
$
{
m
.
r
o
l
e
}
-
$
{
m
.
t
i
m
e
s
t
a
m
p
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
,


 
 
 
 
 
 
 
 
r
o
l
e
:
 
m
.
r
o
l
e
,


 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
m
.
c
o
n
t
e
n
t
,


 
 
 
 
 
 
 
 
j
o
b
s
:
 
m
.
j
o
b
s
?
.
l
e
n
g
t
h
 
?
 
m
.
j
o
b
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
,


 
 
 
 
 
 
}
)
)
 
?
?
 
[
]
,


 
 
 
 
[
c
o
n
v
e
r
s
a
t
i
o
n
]
,


 
 
)
;




 
 
c
o
n
s
t
 
m
e
s
s
a
g
e
s
 
=


 
 
 
 
h
a
s
C
h
a
t
t
e
d
 
|
|
 
l
o
c
a
l
M
e
s
s
a
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
 
>
 
0


 
 
 
 
 
 
?
 
l
o
c
a
l
M
e
s
s
a
g
e
s


 
 
 
 
 
 
:
 
c
o
n
v
e
r
s
a
t
i
o
n
M
e
s
s
a
g
e
s
;


 
 
c
o
n
s
t
 
u
s
e
r
M
s
g
C
o
u
n
t
 
=
 
m
e
s
s
a
g
e
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
m
)
 
=
>
 
m
.
r
o
l
e
 
=
=
=
 
"
u
s
e
r
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
 
h
i
t
F
r
e
e
L
i
m
i
t
 
=


 
 
 
 
m
a
n
u
a
l
H
i
t
F
r
e
e
L
i
m
i
t
 
|
|
 
(
!
i
s
P
r
e
m
i
u
m
 
&
&
 
u
s
e
r
M
s
g
C
o
u
n
t
 
>
=
 
F
R
E
E
_
L
I
M
I
T
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


 
 
 
 
c
o
n
s
t
 
e
l
 
=
 
s
c
r
o
l
l
R
e
f
.
c
u
r
r
e
n
t
;


 
 
 
 
i
f
 
(
!
e
l
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
 
s
c
r
o
l
l
 
=
 
(
)
 
=
>
 
e
l
.
s
c
r
o
l
l
T
o
(
{
 
t
o
p
:
 
e
l
.
s
c
r
o
l
l
H
e
i
g
h
t
,
 
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
 
}
)
;


 
 
 
 
r
e
q
u
e
s
t
A
n
i
m
a
t
i
o
n
F
r
a
m
e
(
s
c
r
o
l
l
)
;


 
 
 
 
c
o
n
s
t
 
t
 
=
 
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
s
c
r
o
l
l
,
 
3
0
0
)
;


 
 
 
 
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
 
c
l
e
a
r
T
i
m
e
o
u
t
(
t
)
;


 
 
}
,
 
[
m
e
s
s
a
g
e
s
]
)
;




 
 
c
o
n
s
t
 
c
h
a
t
M
u
t
 
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
 
a
s
y
n
c
 
(
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
)
 
=
>
 
{


 
 
 
 
 
 
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
p
o
s
t
(
"
/
j
o
b
-
a
g
e
n
t
/
c
h
a
t
"
,
 
{
 
m
e
s
s
a
g
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
 
J
o
b
A
g
e
n
t
R
e
s
p
o
n
s
e
;


 
 
 
 
}
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
d
a
t
a
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
H
a
s
C
h
a
t
t
e
d
(
t
r
u
e
)
;


 
 
 
 
 
 
s
e
t
L
o
c
a
l
M
e
s
s
a
g
e
s
(
(
p
r
e
v
)
 
=
>
 
[


 
 
 
 
 
 
 
 
.
.
.
p
r
e
v
,


 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
i
d
:
 
c
r
y
p
t
o
.
r
a
n
d
o
m
U
U
I
D
(
)
,


 
 
 
 
 
 
 
 
 
 
r
o
l
e
:
 
"
a
s
s
i
s
t
a
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
 
d
a
t
a
.
r
e
p
l
y
,


 
 
 
 
 
 
 
 
 
 
j
o
b
s
:
 
d
a
t
a
.
j
o
b
s
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
 
d
a
t
a
.
j
o
b
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
,


 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
]
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
e
r
r
:
 
u
n
k
n
o
w
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
 
r
e
s
p
 
=
 
(


 
 
 
 
 
 
 
 
e
r
r
 
a
s
 
{


 
 
 
 
 
 
 
 
 
 
r
e
s
p
o
n
s
e
?
:
 
{


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
u
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


 
 
 
 
 
 
 
 
 
 
 
 
d
a
t
a
?
:
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
s
a
g
e
?
:
 
{
 
a
c
t
i
o
n
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
i
e
r
?
:
 
s
t
r
i
n
g
 
}
;


 
 
 
 
 
 
 
 
 
 
 
 
}
;


 
 
 
 
 
 
 
 
 
 
}
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
)
?
.
r
e
s
p
o
n
s
e
;


 
 
 
 
 
 
c
o
n
s
t
 
i
s
F
r
e
e
L
i
m
i
t
E
r
r
o
r
 
=


 
 
 
 
 
 
 
 
r
e
s
p
?
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
 
4
2
9
 
&
&


 
 
 
 
 
 
 
 
r
e
s
p
.
d
a
t
a
?
.
u
s
a
g
e
?
.
a
c
t
i
o
n
 
=
=
=
 
"
A
I
_
J
O
B
_
C
H
A
T
"
 
&
&


 
 
 
 
 
 
 
 
r
e
s
p
.
d
a
t
a
?
.
u
s
a
g
e
?
.
t
i
e
r
 
=
=
=
 
"
F
R
E
E
"
;




 
 
 
 
 
 
i
f
 
(
i
s
F
r
e
e
L
i
m
i
t
E
r
r
o
r
)
 
{


 
 
 
 
 
 
 
 
s
e
t
M
a
n
u
a
l
H
i
t
F
r
e
e
L
i
m
i
t
(
t
r
u
e
)
;


 
 
 
 
 
 
 
 
s
e
t
L
o
c
a
l
M
e
s
s
a
g
e
s
(
(
p
r
e
v
)
 
=
>
 
[


 
 
 
 
 
 
 
 
 
 
.
.
.
p
r
e
v
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
c
r
y
p
t
o
.
r
a
n
d
o
m
U
U
I
D
(
)
,


 
 
 
 
 
 
 
 
 
 
 
 
r
o
l
e
:
 
"
a
s
s
i
s
t
a
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
Y
o
u
'
v
e
 
u
s
e
d
 
y
o
u
r
 
2
 
f
r
e
e
 
m
e
s
s
a
g
e
s
.
 
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
e
m
i
u
m
 
f
o
r
 
u
n
l
i
m
i
t
e
d
 
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
 
j
o
b
 
s
e
a
r
c
h
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
s
e
t
L
o
c
a
l
M
e
s
s
a
g
e
s
(
(
p
r
e
v
)
 
=
>
 
[


 
 
 
 
 
 
 
 
 
 
.
.
.
p
r
e
v
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
c
r
y
p
t
o
.
r
a
n
d
o
m
U
U
I
D
(
)
,


 
 
 
 
 
 
 
 
 
 
 
 
r
o
l
e
:
 
"
a
s
s
i
s
t
a
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
W
e
'
r
e
 
e
x
p
e
r
i
e
n
c
i
n
g
 
h
i
g
h
 
d
e
m
a
n
d
 
r
i
g
h
t
 
n
o
w
 
a
n
d
 
c
o
u
l
d
n
'
t
 
p
r
o
c
e
s
s
 
y
o
u
r
 
r
e
q
u
e
s
t
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
 
i
n
 
a
 
m
o
m
e
n
t
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]
)
;


 
 
 
 
 
 
}


 
 
 
 
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
 
r
e
s
e
t
M
u
t
 
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
"
/
j
o
b
-
a
g
e
n
t
/
c
o
n
v
e
r
s
a
t
i
o
n
"
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


 
 
 
 
 
 
s
e
t
H
a
s
C
h
a
t
t
e
d
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
M
a
n
u
a
l
H
i
t
F
r
e
e
L
i
m
i
t
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
L
o
c
a
l
M
e
s
s
a
g
e
s
(
[
]
)
;


 
 
 
 
 
 
q
c
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
j
o
b
A
g
e
n
t
.
c
o
n
v
e
r
s
a
t
i
o
n
(
)
 
}
)
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
 
h
a
n
d
l
e
S
e
n
d
 
=
 
(
t
e
x
t
?
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


 
 
 
 
c
o
n
s
t
 
c
o
m
m
i
t
t
e
d
I
n
p
u
t
 
=
 
i
n
t
e
r
i
m
T
e
x
t


 
 
 
 
 
 
?
 
i
n
p
u
t


 
 
 
 
 
 
 
 
?
 
`
$
{
i
n
p
u
t
}
 
$
{
i
n
t
e
r
i
m
T
e
x
t
}
`


 
 
 
 
 
 
 
 
:
 
i
n
t
e
r
i
m
T
e
x
t


 
 
 
 
 
 
:
 
i
n
p
u
t
;


 
 
 
 
c
o
n
s
t
 
m
s
g
 
=
 
(
t
e
x
t
 
?
?
 
c
o
m
m
i
t
t
e
d
I
n
p
u
t
)
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
m
s
g
 
|
|
 
c
h
a
t
M
u
t
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
I
n
p
u
t
(
"
"
)
;


 
 
 
 
s
e
t
I
n
t
e
r
i
m
T
e
x
t
(
"
"
)
;


 
 
 
 
a
d
j
u
s
t
H
e
i
g
h
t
(
t
r
u
e
)
;


 
 
 
 
s
e
t
H
a
s
C
h
a
t
t
e
d
(
t
r
u
e
)
;


 
 
 
 
s
e
t
L
o
c
a
l
M
e
s
s
a
g
e
s
(
[


 
 
 
 
 
 
.
.
.
m
e
s
s
a
g
e
s
,


 
 
 
 
 
 
{
 
i
d
:
 
c
r
y
p
t
o
.
r
a
n
d
o
m
U
U
I
D
(
)
,
 
r
o
l
e
:
 
"
u
s
e
r
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
 
m
s
g
 
}
,


 
 
 
 
]
)
;


 
 
 
 
c
h
a
t
M
u
t
.
m
u
t
a
t
e
(
m
s
g
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
K
e
y
D
o
w
n
 
=
 
(
e
:
 
R
e
a
c
t
.
K
e
y
b
o
a
r
d
E
v
e
n
t
<
H
T
M
L
T
e
x
t
A
r
e
a
E
l
e
m
e
n
t
>
)
 
=
>
 
{


 
 
 
 
i
f
 
(
e
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
 
&
&
 
!
e
.
s
h
i
f
t
K
e
y
)
 
{


 
 
 
 
 
 
e
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


 
 
 
 
 
 
h
a
n
d
l
e
S
e
n
d
(
)
;


 
 
 
 
}


 
 
}
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
!
i
s
L
i
s
t
e
n
i
n
g
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
 
h
a
n
d
l
e
E
s
c
a
p
e
 
=
 
(
e
:
 
K
e
y
b
o
a
r
d
E
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
.
k
e
y
 
=
=
=
 
"
E
s
c
a
p
e
"
)
 
{


 
 
 
 
 
 
 
 
e
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


 
 
 
 
 
 
 
 
s
t
o
p
L
i
s
t
e
n
i
n
g
(
)
;


 
 
 
 
 
 
 
 
s
e
t
I
n
t
e
r
i
m
T
e
x
t
(
"
"
)
;


 
 
 
 
 
 
}


 
 
 
 
}
;


 
 
 
 
d
o
c
u
m
e
n
t
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
k
e
y
d
o
w
n
"
,
 
h
a
n
d
l
e
E
s
c
a
p
e
)
;


 
 
 
 
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
 
d
o
c
u
m
e
n
t
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
k
e
y
d
o
w
n
"
,
 
h
a
n
d
l
e
E
s
c
a
p
e
)
;


 
 
}
,
 
[
i
s
L
i
s
t
e
n
i
n
g
,
 
s
t
o
p
L
i
s
t
e
n
i
n
g
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
!
i
s
L
i
s
t
e
n
i
n
g
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
r
a
f
 
=
 
r
e
q
u
e
s
t
A
n
i
m
a
t
i
o
n
F
r
a
m
e
(
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
t
e
x
t
a
r
e
a
R
e
f
.
c
u
r
r
e
n
t
?
.
f
o
c
u
s
(
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
e
n
 
=
 
i
n
p
u
t
.
l
e
n
g
t
h
;


 
 
 
 
 
 
 
 
t
e
x
t
a
r
e
a
R
e
f
.
c
u
r
r
e
n
t
?
.
s
e
t
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
a
n
g
e
(
l
e
n
,
 
l
e
n
)
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
)
 
=
>
 
c
a
n
c
e
l
A
n
i
m
a
t
i
o
n
F
r
a
m
e
(
r
a
f
)
;


 
 
 
 
}


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
e
x
h
a
u
s
t
i
v
e
-
d
e
p
s


 
 
}
,
 
[
i
s
L
i
s
t
e
n
i
n
g
]
)
;




 
 
c
o
n
s
t
 
i
s
E
m
p
t
y
 
=
 
m
e
s
s
a
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
;


 
 
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
D
i
s
a
b
l
e
d
 
=
 
c
h
a
t
M
u
t
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
 
h
i
t
F
r
e
e
L
i
m
i
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
 
f
l
e
x
-
c
o
l
 
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
h
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
 
o
v
e
r
s
c
r
o
l
l
-
n
o
n
e
 
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
 
A
I
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
s
h
r
i
n
k
-
0
 
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
t
-
4
 
p
b
-
2
 
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
 
m
b
-
1
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
 
o
p
a
c
i
t
y
:
 
[
0
.
4
,
 
1
,
 
0
.
4
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
a
d
o
w
-
[
0
_
0
_
8
p
x
_
r
g
b
a
(
1
6
,
1
8
5
,
1
2
9
,
0
.
6
)
]
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
y
s
t
e
m
 
o
n
l
i
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
 
t
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
|


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
i
 
/
 
j
o
b
 
a
g
e
n
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
a
l
k
 
t
o
 
y
o
u
r
 
j
o
b
 
a
g
e
n
t
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
1
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
i
s
P
r
e
m
i
u
m
 
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
M
a
t
h
.
m
i
n
(
u
s
e
r
M
s
g
C
o
u
n
t
,
 
F
R
E
E
_
L
I
M
I
T
)
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
{
F
R
E
E
_
L
I
M
I
T
}
 
f
r
e
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
>
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
m
i
u
m
,
 
u
n
l
i
m
i
t
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
e
s
s
a
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
 
>
 
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
m
e
s
s
a
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
S
h
o
w
R
e
s
e
t
C
o
n
f
i
r
m
(
t
r
u
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
r
e
s
e
t
M
u
t
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
2
.
5
 
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
e
w
 
c
h
a
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
C
o
n
f
i
r
m
D
i
a
l
o
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
e
n
=
{
s
h
o
w
R
e
s
e
t
C
o
n
f
i
r
m
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
S
t
a
r
t
 
a
 
n
e
w
 
c
h
a
t
?
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
h
i
s
 
w
i
l
l
 
p
e
r
m
a
n
e
n
t
l
y
 
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
 
c
u
r
r
e
n
t
 
c
o
n
v
e
r
s
a
t
i
o
n
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
f
i
r
m
L
a
b
e
l
=
"
D
e
l
e
t
e
 
a
n
d
 
s
t
a
r
t
 
n
e
w
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
a
n
c
e
l
L
a
b
e
l
=
"
C
a
n
c
e
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
o
n
f
i
r
m
=
{
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
e
t
M
u
t
.
m
u
t
a
t
e
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
h
o
w
R
e
s
e
t
C
o
n
f
i
r
m
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
a
n
c
e
l
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
h
o
w
R
e
s
e
t
C
o
n
f
i
r
m
(
f
a
l
s
e
)
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
e
s
s
a
g
e
s
 
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
h
-
0
 
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
"
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
 
m
o
d
e
=
"
w
a
i
t
"
>


 
 
 
 
 
 
 
 
 
 
{
i
s
E
m
p
t
y
 
?
 
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
"
e
m
p
t
y
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
8
 
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
h
-
0
 
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
 
g
a
p
-
4
 
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
t
-
2
 
p
b
-
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
H
e
r
o
 
i
c
o
n
 
b
o
x
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
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
 
m
b
-
2
 
m
t
-
0
.
5
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
 
y
:
 
[
0
,
 
-
6
,
 
0
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
u
r
a
t
i
o
n
:
 
3
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
I
n
O
u
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
b
l
u
r
-
3
x
l
 
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
2
x
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
s
t
o
n
e
-
7
0
0
 
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
i
m
g
 
s
r
c
=
"
/
l
o
g
o
.
p
n
g
"
 
a
l
t
=
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
7
 
h
-
7
 
o
b
j
e
c
t
-
c
o
n
t
a
i
n
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
1
 
-
r
i
g
h
t
-
1
 
h
-
2
 
w
-
2
 
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
2
 
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
[
0
_
0
_
8
p
x
_
r
g
b
a
(
1
6
3
,
2
3
0
,
5
3
,
0
.
8
)
]
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
 
m
b
-
1
 
t
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
H
e
y
{
u
s
e
r
?
.
n
a
m
e
 
?
 
`
,
 
$
{
u
s
e
r
.
n
a
m
e
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
`
 
:
 
"
"
}
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
x
s
 
s
m
:
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
 
m
a
x
-
w
-
s
m
 
m
b
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
e
l
l
 
m
e
 
w
h
a
t
 
y
o
u
'
r
e
 
l
o
o
k
i
n
g
 
f
o
r
 
a
n
d
 
I
'
l
l
 
s
u
r
f
a
c
e
 
t
h
e
 
b
e
s
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
t
c
h
e
s
 
f
r
o
m
 
t
h
e
 
l
i
v
e
 
j
o
b
 
f
e
e
d
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
Q
u
i
c
k
 
p
r
o
m
p
t
 
n
u
m
b
e
r
e
d
 
g
r
i
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
2
.
5
 
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
x
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
Q
U
I
C
K
_
P
R
O
M
P
T
S
.
m
a
p
(
(
q
,
 
i
)
 
=
>
 
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
q
.
t
e
x
t
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
 
h
a
n
d
l
e
S
e
n
d
(
q
.
t
e
x
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
3
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
2
 
w
-
f
u
l
l
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
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
{
S
t
r
i
n
g
(
i
 
+
 
1
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
2
,
 
"
0
"
)
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
q
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
x
s
 
s
m
:
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
w
h
i
t
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
q
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
b
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
i
s
P
r
e
m
i
u
m
 
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
 
t
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
F
r
e
e
 
p
l
a
n
:
 
{
F
R
E
E
_
L
I
M
I
T
}
 
m
e
s
s
a
g
e
s
 
p
e
r
 
d
a
y
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
-
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
c
h
e
c
k
o
u
t
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
3
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
U
p
g
r
a
d
e
 
f
o
r
 
u
n
l
i
m
i
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
"
m
e
s
s
a
g
e
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
f
=
{
s
c
r
o
l
l
R
e
f
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
h
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
y
-
a
u
t
o
 
p
t
-
2
 
p
b
-
2
 
m
a
s
k
-
[
l
i
n
e
a
r
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
t
o
_
b
o
t
t
o
m
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
,
b
l
a
c
k
_
3
%
,
b
l
a
c
k
_
9
7
%
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
)
]
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
x
-
a
u
t
o
 
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
4
x
l
 
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
m
e
s
s
a
g
e
s
.
m
a
p
(
(
m
s
g
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
g
e
n
t
M
e
s
s
a
g
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
m
s
g
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
l
e
=
{
m
s
g
.
r
o
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
=
{
m
s
g
.
c
o
n
t
e
n
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
j
o
b
s
=
{
m
s
g
.
j
o
b
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
h
a
t
M
u
t
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
 
&
&
 
<
T
h
i
n
k
i
n
g
I
n
d
i
c
a
t
o
r
 
/
>
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




 
 
 
 
 
 
{
/
*
 
I
n
p
u
t
 
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
s
h
r
i
n
k
-
0
 
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
b
-
4
 
p
t
-
2
 
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
8
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
8
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
m
d
 
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
 
f
o
c
u
s
-
w
i
t
h
i
n
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
-
w
i
t
h
i
n
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
6
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
a
d
o
w
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
T
e
x
t
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
p
x
-
4
 
p
t
-
3
 
p
b
-
0
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
f
=
{
t
e
x
t
a
r
e
a
R
e
f
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
d
i
s
p
l
a
y
V
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
n
t
e
r
i
m
T
e
x
t
(
"
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
n
p
u
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
d
j
u
s
t
H
e
i
g
h
t
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
h
a
n
d
l
e
K
e
y
D
o
w
n
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
t
F
r
e
e
L
i
m
i
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
 
c
o
n
t
i
n
u
e
 
c
h
a
t
t
i
n
g
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
c
h
a
t
M
u
t
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
 
"
T
h
i
n
k
i
n
g
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
A
s
k
 
m
e
 
a
b
o
u
t
 
j
o
b
s
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
n
p
u
t
D
i
s
a
b
l
e
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
{
c
n
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
w
-
f
u
l
l
 
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
-
n
o
n
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
0
 
t
e
x
t
-
s
m
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
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
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
0
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
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
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
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
s
c
r
o
l
l
b
a
r
-
t
h
i
n
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
2
4
p
x
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




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
B
o
t
t
o
m
 
a
c
t
i
o
n
 
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
 
p
x
-
3
 
p
y
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
v
o
i
c
e
S
u
p
p
o
r
t
e
d
 
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
i
c
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
s
L
i
s
t
e
n
i
n
g
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
n
t
e
r
i
m
T
e
x
t
(
"
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
o
p
L
i
s
t
e
n
i
n
g
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
r
t
L
i
s
t
e
n
i
n
g
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
L
i
s
t
e
n
i
n
g
 
?
 
"
S
t
o
p
 
r
e
c
o
r
d
i
n
g
"
 
:
 
"
S
t
a
r
t
 
v
o
i
c
e
 
i
n
p
u
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
p
r
e
s
s
e
d
=
{
i
s
L
i
s
t
e
n
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
{
c
n
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
L
i
s
t
e
n
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
5
0
/
3
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
r
e
d
-
4
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
e
d
-
2
0
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
5
0
0
/
2
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
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
i
s
t
e
n
i
n
g
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
[
1
,
 
1
.
1
5
,
 
1
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
2
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
M
i
c
O
f
f
 
c
l
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
i
c
 
c
l
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
i
c
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
 
h
a
n
d
l
e
S
e
n
d
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
(
i
n
p
u
t
.
t
r
i
m
(
)
 
|
|
 
i
n
t
e
r
i
m
T
e
x
t
.
t
r
i
m
(
)
)
 
|
|
 
i
n
p
u
t
D
i
s
a
b
l
e
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
{
c
n
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
(
i
n
p
u
t
.
t
r
i
m
(
)
 
|
|
 
i
n
t
e
r
i
m
T
e
x
t
.
t
r
i
m
(
)
)
 
&
&
 
!
i
n
p
u
t
D
i
s
a
b
l
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
e
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
"
S
e
n
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
U
p
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
 
s
e
l
e
c
t
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
1
.
5
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
i
t
F
r
e
e
L
i
m
i
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
l
i
m
i
t
 
r
e
a
c
h
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
e
n
t
e
r
 
t
o
 
s
e
n
d
,
 
s
h
i
f
t
 
+
 
e
n
t
e
r
 
f
o
r
 
n
e
w
l
i
n
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
o
i
c
e
H
i
n
t
 
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
 
f
o
n
t
-
b
o
l
d
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
(
{
v
o
i
c
e
H
i
n
t
}
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
o
w
e
r
e
d
 
b
y
 
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
 
A
I
 
·
 
A
l
w
a
y
s
 
v
e
r
i
f
y
 
j
o
b
 
d
e
t
a
i
l
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


