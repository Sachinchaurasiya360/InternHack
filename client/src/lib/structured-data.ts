
i
m
p
o
r
t
 
{
 
S
I
T
E
_
U
R
L
 
}
 
f
r
o
m
 
"
.
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




t
y
p
e
 
J
s
o
n
L
d
 
=
 
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
;




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
S
a
l
a
r
y
V
a
l
u
e
(
s
a
l
a
r
y
:
 
s
t
r
i
n
g
)
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
 
{


 
 
c
o
n
s
t
 
m
a
t
c
h
 
=
 
s
a
l
a
r
y
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
.
m
a
t
c
h
(
/
\
d
+
/
)
;


 
 
r
e
t
u
r
n
 
m
a
t
c
h
 
?
 
p
a
r
s
e
I
n
t
(
m
a
t
c
h
[
0
]
,
 
1
0
)
 
:
 
n
u
l
l
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
j
o
b
P
o
s
t
i
n
g
S
c
h
e
m
a
(
j
o
b
:
 
{


 
 
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


 
 
c
o
m
p
a
n
y
:
 
s
t
r
i
n
g
;


 
 
l
o
c
a
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
 
|
 
n
u
l
l
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


 
 
i
s
R
e
m
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


 
 
e
m
p
l
o
y
m
e
n
t
T
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


}
)
:
 
J
s
o
n
L
d
 
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
S
a
l
a
r
y
 
=
 
j
o
b
.
s
a
l
a
r
y
 
?
 
p
a
r
s
e
S
a
l
a
r
y
V
a
l
u
e
(
j
o
b
.
s
a
l
a
r
y
)
 
:
 
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
J
o
b
P
o
s
t
i
n
g
"
,


 
 
 
 
t
i
t
l
e
:
 
j
o
b
.
t
i
t
l
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
 
j
o
b
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
,


 
 
 
 
h
i
r
i
n
g
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


 
 
 
 
 
 
n
a
m
e
:
 
j
o
b
.
c
o
m
p
a
n
y
,


 
 
 
 
}
,


 
 
 
 
j
o
b
L
o
c
a
t
i
o
n
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
P
l
a
c
e
"
,


 
 
 
 
 
 
a
d
d
r
e
s
s
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
P
o
s
t
a
l
A
d
d
r
e
s
s
"
,


 
 
 
 
 
 
 
 
a
d
d
r
e
s
s
L
o
c
a
l
i
t
y
:
 
j
o
b
.
l
o
c
a
t
i
o
n
,


 
 
 
 
 
 
}
,


 
 
 
 
}
,


 
 
 
 
.
.
.
(
p
a
r
s
e
d
S
a
l
a
r
y
 
&
&
 
{


 
 
 
 
 
 
b
a
s
e
S
a
l
a
r
y
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
M
o
n
e
t
a
r
y
A
m
o
u
n
t
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
 
"
I
N
R
"
,


 
 
 
 
 
 
 
 
v
a
l
u
e
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
V
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
 
p
a
r
s
e
d
S
a
l
a
r
y
,


 
 
 
 
 
 
 
 
 
 
u
n
i
t
T
e
x
t
:
 
"
M
O
N
T
H
"
,


 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
}
,


 
 
 
 
}
)
,


 
 
 
 
e
m
p
l
o
y
m
e
n
t
T
y
p
e
:
 
j
o
b
.
e
m
p
l
o
y
m
e
n
t
T
y
p
e
 
|
|
 
"
I
N
T
E
R
N
"
,


 
 
 
 
.
.
.
(
j
o
b
.
i
s
R
e
m
o
t
e
 
&
&
 
{
 
j
o
b
L
o
c
a
t
i
o
n
T
y
p
e
:
 
"
T
E
L
E
C
O
M
M
U
T
E
"
 
}
)
,


 
 
 
 
.
.
.
(
j
o
b
.
d
e
a
d
l
i
n
e
 
&
&
 
{
 
v
a
l
i
d
T
h
r
o
u
g
h
:
 
j
o
b
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
)
,


 
 
 
 
d
a
t
e
P
o
s
t
e
d
:
 
j
o
b
.
c
r
e
a
t
e
d
A
t
 
|
|
 
n
e
w
 
D
a
t
e
(
)
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
,


 
 
 
 
u
r
l
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
j
o
b
s
/
$
{
j
o
b
.
i
d
}
`
,


 
 
}
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
b
l
o
g
P
o
s
t
i
n
g
S
c
h
e
m
a
(
p
o
s
t
:
 
{


 
 
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


 
 
e
x
c
e
r
p
t
?
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


 
 
s
l
u
g
:
 
s
t
r
i
n
g
;


 
 
a
u
t
h
o
r
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
;


 
 
p
u
b
l
i
s
h
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
 
|
 
n
u
l
l
;


 
 
u
p
d
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


 
 
f
e
a
t
u
r
e
d
I
m
a
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
 
|
 
n
u
l
l
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


}
)
:
 
J
s
o
n
L
d
 
{


 
 
c
o
n
s
t
 
p
o
s
t
U
r
l
 
=
 
`
$
{
S
I
T
E
_
U
R
L
}
/
b
l
o
g
/
$
{
p
o
s
t
.
s
l
u
g
}
`
;


 
 
r
e
t
u
r
n
 
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
B
l
o
g
P
o
s
t
i
n
g
"
,


 
 
 
 
h
e
a
d
l
i
n
e
:
 
p
o
s
t
.
t
i
t
l
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
 
p
o
s
t
.
e
x
c
e
r
p
t
 
|
|
 
p
o
s
t
.
c
o
n
t
e
n
t
.
s
l
i
c
e
(
0
,
 
1
6
0
)
,


 
 
 
 
a
u
t
h
o
r
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
P
e
r
s
o
n
"
,
 
n
a
m
e
:
 
p
o
s
t
.
a
u
t
h
o
r
N
a
m
e
 
}
,


 
 
 
 
p
u
b
l
i
s
h
e
r
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


 
 
 
 
 
 
n
a
m
e
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
"
,


 
 
 
 
 
 
u
r
l
:
 
S
I
T
E
_
U
R
L
,


 
 
 
 
 
 
l
o
g
o
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
I
m
a
g
e
O
b
j
e
c
t
"
,


 
 
 
 
 
 
 
 
u
r
l
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
o
g
-
i
m
a
g
e
.
p
n
g
`
,


 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
1
2
0
0
,


 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
6
3
0
,


 
 
 
 
 
 
}
,


 
 
 
 
}
,


 
 
 
 
d
a
t
e
P
u
b
l
i
s
h
e
d
:
 
p
o
s
t
.
p
u
b
l
i
s
h
e
d
A
t
 
|
|
 
n
e
w
 
D
a
t
e
(
)
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
,


 
 
 
 
.
.
.
(
p
o
s
t
.
u
p
d
a
t
e
d
A
t
 
&
&
 
{
 
d
a
t
e
M
o
d
i
f
i
e
d
:
 
p
o
s
t
.
u
p
d
a
t
e
d
A
t
 
}
)
,


 
 
 
 
.
.
.
(
p
o
s
t
.
f
e
a
t
u
r
e
d
I
m
a
g
e
 
&
&
 
{
 
i
m
a
g
e
:
 
p
o
s
t
.
f
e
a
t
u
r
e
d
I
m
a
g
e
 
}
)
,


 
 
 
 
u
r
l
:
 
p
o
s
t
U
r
l
,


 
 
 
 
m
a
i
n
E
n
t
i
t
y
O
f
P
a
g
e
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
W
e
b
P
a
g
e
"
,
 
"
@
i
d
"
:
 
p
o
s
t
U
r
l
 
}
,


 
 
 
 
.
.
.
(
p
o
s
t
.
t
a
g
s
?
.
l
e
n
g
t
h
 
&
&
 
{
 
k
e
y
w
o
r
d
s
:
 
p
o
s
t
.
t
a
g
s
.
j
o
i
n
(
"
,
 
"
)
 
}
)
,


 
 
}
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
e
v
e
n
t
S
c
h
e
m
a
(
e
v
e
n
t
:
 
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
 
s
t
r
i
n
g
;


 
 
e
n
d
D
a
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


 
 
l
o
c
a
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


 
 
l
o
c
a
t
i
o
n
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


 
 
o
r
g
a
n
i
z
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


 
 
w
e
b
s
i
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
 
|
 
n
u
l
l
;


}
)
:
 
J
s
o
n
L
d
 
{


 
 
c
o
n
s
t
 
i
s
V
i
r
t
u
a
l
 
=


 
 
 
 
e
v
e
n
t
.
l
o
c
a
t
i
o
n
T
y
p
e
?
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
 
=
=
=
 
"
v
i
r
t
u
a
l
"
 
|
|


 
 
 
 
e
v
e
n
t
.
l
o
c
a
t
i
o
n
T
y
p
e
?
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
 
=
=
=
 
"
o
n
l
i
n
e
"
;




 
 
r
e
t
u
r
n
 
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


 
 
 
 
n
a
m
e
:
 
e
v
e
n
t
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
 
e
v
e
n
t
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
 
e
v
e
n
t
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
,


 
 
 
 
e
n
d
D
a
t
e
:
 
e
v
e
n
t
.
e
n
d
D
a
t
e
,


 
 
 
 
l
o
c
a
t
i
o
n
:
 
i
s
V
i
r
t
u
a
l


 
 
 
 
 
 
?
 
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
 
u
r
l
:
 
e
v
e
n
t
.
w
e
b
s
i
t
e
 
|
|
 
S
I
T
E
_
U
R
L
 
}


 
 
 
 
 
 
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
P
l
a
c
e
"
,


 
 
 
 
 
 
 
 
 
 
a
d
d
r
e
s
s
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
P
o
s
t
a
l
A
d
d
r
e
s
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
a
d
d
r
e
s
s
L
o
c
a
l
i
t
y
:
 
e
v
e
n
t
.
l
o
c
a
t
i
o
n
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
}
,


 
 
 
 
o
r
g
a
n
i
z
e
r
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
 
n
a
m
e
:
 
e
v
e
n
t
.
o
r
g
a
n
i
z
e
r
 
}
,


 
 
 
 
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
:
 
i
s
V
i
r
t
u
a
l


 
 
 
 
 
 
?
 
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
f
f
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


 
 
}
;


}




e
x
p
o
r
t
 
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
u
r
s
e
S
c
h
e
m
a
(
c
o
u
r
s
e
:
 
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


 
 
u
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


}
)
:
 
J
s
o
n
L
d
 
{


 
 
r
e
t
u
r
n
 
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
C
o
u
r
s
e
"
,


 
 
 
 
n
a
m
e
:
 
c
o
u
r
s
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
 
c
o
u
r
s
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
,


 
 
 
 
p
r
o
v
i
d
e
r
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


 
 
 
 
 
 
n
a
m
e
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
"
,


 
 
 
 
 
 
u
r
l
:
 
S
I
T
E
_
U
R
L
,


 
 
 
 
}
,


 
 
 
 
u
r
l
:
 
c
o
u
r
s
e
.
u
r
l
,


 
 
 
 
i
s
A
c
c
e
s
s
i
b
l
e
F
o
r
F
r
e
e
:
 
t
r
u
e
,


 
 
 
 
n
u
m
b
e
r
O
f
C
r
e
d
i
t
s
:
 
"
0
"
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
a
l
L
e
v
e
l
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
 
t
o
 
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


 
 
 
 
i
n
L
a
n
g
u
a
g
e
:
 
"
e
n
"
,


 
 
 
 
h
a
s
C
o
u
r
s
e
I
n
s
t
a
n
c
e
:
 
[


 
 
 
 
 
 
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
C
o
u
r
s
e
I
n
s
t
a
n
c
e
"
,


 
 
 
 
 
 
 
 
c
o
u
r
s
e
M
o
d
e
:
 
"
O
n
l
i
n
e
"
,


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
n
a
m
e
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
"
,


 
 
 
 
 
 
 
 
 
 
u
r
l
:
 
S
I
T
E
_
U
R
L
,


 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
c
o
u
r
s
e
S
c
h
e
d
u
l
e
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
S
c
h
e
d
u
l
e
"
,


 
 
 
 
 
 
 
 
 
 
r
e
p
e
a
t
F
r
e
q
u
e
n
c
y
:
 
"
P
1
D
"
,


 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
;


}


e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
b
r
e
a
d
c
r
u
m
b
S
c
h
e
m
a
(


 
 
i
t
e
m
s
:
 
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
 
u
r
l
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
,


)
:
 
J
s
o
n
L
d
 
{


 
 
r
e
t
u
r
n
 
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
B
r
e
a
d
c
r
u
m
b
L
i
s
t
"
,


 
 
 
 
i
t
e
m
L
i
s
t
E
l
e
m
e
n
t
:
 
i
t
e
m
s
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
L
i
s
t
I
t
e
m
"
,


 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
i
 
+
 
1
,


 
 
 
 
 
 
n
a
m
e
:
 
i
t
e
m
.
n
a
m
e
,


 
 
 
 
 
 
i
t
e
m
:
 
i
t
e
m
.
u
r
l
,


 
 
 
 
}
)
)
,


 
 
}
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
f
a
q
S
c
h
e
m
a
(


 
 
q
u
e
s
t
i
o
n
s
:
 
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
 
s
t
r
i
n
g
;
 
a
n
s
w
e
r
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
,


)
:
 
J
s
o
n
L
d
 
{


 
 
r
e
t
u
r
n
 
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
F
A
Q
P
a
g
e
"
,


 
 
 
 
m
a
i
n
E
n
t
i
t
y
:
 
q
u
e
s
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
q
)
 
=
>
 
(
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
Q
u
e
s
t
i
o
n
"
,


 
 
 
 
 
 
n
a
m
e
:
 
q
.
q
u
e
s
t
i
o
n
,


 
 
 
 
 
 
a
c
c
e
p
t
e
d
A
n
s
w
e
r
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
A
n
s
w
e
r
"
,
 
t
e
x
t
:
 
q
.
a
n
s
w
e
r
 
}
,


 
 
 
 
}
)
)
,


 
 
}
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
w
e
b
s
i
t
e
S
c
h
e
m
a
(
)
:
 
J
s
o
n
L
d
 
{


 
 
r
e
t
u
r
n
 
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
W
e
b
S
i
t
e
"
,


 
 
 
 
n
a
m
e
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
"
,


 
 
 
 
u
r
l
:
 
S
I
T
E
_
U
R
L
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
I
-
p
o
w
e
r
e
d
 
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
,
 
c
u
r
a
t
e
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
 
A
T
S
 
r
e
s
u
m
e
 
s
c
o
r
i
n
g
,
 
l
e
a
r
n
i
n
g
 
t
r
a
c
k
s
,
 
a
n
d
 
d
i
r
e
c
t
 
r
e
c
r
u
i
t
e
r
 
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
s
.
"
,


 
 
 
 
p
o
t
e
n
t
i
a
l
A
c
t
i
o
n
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
S
e
a
r
c
h
A
c
t
i
o
n
"
,


 
 
 
 
 
 
t
a
r
g
e
t
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
E
n
t
r
y
P
o
i
n
t
"
,


 
 
 
 
 
 
 
 
u
r
l
T
e
m
p
l
a
t
e
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
j
o
b
s
?
s
e
a
r
c
h
=
{
s
e
a
r
c
h
_
t
e
r
m
_
s
t
r
i
n
g
}
`
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
"
q
u
e
r
y
-
i
n
p
u
t
"
:
 
"
r
e
q
u
i
r
e
d
 
n
a
m
e
=
s
e
a
r
c
h
_
t
e
r
m
_
s
t
r
i
n
g
"
,


 
 
 
 
}
,


 
 
}
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
p
l
a
t
f
o
r
m
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
c
h
e
m
a
(
)
:
 
J
s
o
n
L
d
 
{


 
 
r
e
t
u
r
n
 
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
@
i
d
"
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
#
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
`
,


 
 
 
 
n
a
m
e
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
"
,


 
 
 
 
u
r
l
:
 
S
I
T
E
_
U
R
L
,


 
 
 
 
l
o
g
o
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
I
m
a
g
e
O
b
j
e
c
t
"
,


 
 
 
 
 
 
u
r
l
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
o
g
-
i
m
a
g
e
.
p
n
g
`
,


 
 
 
 
 
 
w
i
d
t
h
:
 
1
2
0
0
,


 
 
 
 
 
 
h
e
i
g
h
t
:
 
6
3
0
,


 
 
 
 
}
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
I
-
p
o
w
e
r
e
d
 
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
n
d
 
r
e
c
r
u
i
t
e
r
s
,
 
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
 
A
T
S
 
r
e
s
u
m
e
 
s
c
o
r
i
n
g
,
 
l
e
a
r
n
i
n
g
 
t
r
a
c
k
s
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
,
 
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
.
"
,


 
 
 
 
s
a
m
e
A
s
:
 
[


 
 
 
 
 
 
"
h
t
t
p
s
:
/
/
t
w
i
t
t
e
r
.
c
o
m
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
"
,


 
 
 
 
 
 
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
l
i
n
k
e
d
i
n
.
c
o
m
/
c
o
m
p
a
n
y
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
"
,


 
 
 
 
 
 
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
i
t
h
u
b
.
c
o
m
/
S
a
c
h
i
n
C
h
a
u
r
a
s
i
y
a
/
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
,


 
 
 
 
]
,


 
 
}
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
i
t
e
m
L
i
s
t
S
c
h
e
m
a
(
i
t
e
m
s
:
 
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
 
u
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
)
:
 
J
s
o
n
L
d
 
{


 
 
r
e
t
u
r
n
 
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
I
t
e
m
L
i
s
t
"
,


 
 
 
 
i
t
e
m
L
i
s
t
E
l
e
m
e
n
t
:
 
i
t
e
m
s
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
L
i
s
t
I
t
e
m
"
,


 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
i
 
+
 
1
,


 
 
 
 
 
 
n
a
m
e
:
 
i
t
e
m
.
n
a
m
e
,


 
 
 
 
 
 
u
r
l
:
 
i
t
e
m
.
u
r
l
,


 
 
 
 
 
 
.
.
.
(
i
t
e
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
 
&
&
 
{
 
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
 
i
t
e
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
)
,


 
 
 
 
}
)
)
,


 
 
}
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
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
S
c
h
e
m
a
(
o
r
g
:
 
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


 
 
s
l
u
g
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
?
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
;


 
 
c
i
t
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


 
 
i
n
d
u
s
t
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
)
:
 
J
s
o
n
L
d
 
{


 
 
r
e
t
u
r
n
 
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


 
 
 
 
n
a
m
e
:
 
o
r
g
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
 
o
r
g
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
,


 
 
 
 
u
r
l
:
 
o
r
g
.
w
e
b
s
i
t
e
 
|
|
 
`
$
{
S
I
T
E
_
U
R
L
}
/
c
o
m
p
a
n
i
e
s
/
$
{
o
r
g
.
s
l
u
g
}
`
,


 
 
 
 
.
.
.
(
o
r
g
.
c
i
t
y
 
&
&
 
{


 
 
 
 
 
 
a
d
d
r
e
s
s
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
P
o
s
t
a
l
A
d
d
r
e
s
s
"
,


 
 
 
 
 
 
 
 
a
d
d
r
e
s
s
L
o
c
a
l
i
t
y
:
 
o
r
g
.
c
i
t
y
,


 
 
 
 
 
 
}
,


 
 
 
 
}
)
,


 
 
 
 
.
.
.
(
o
r
g
.
i
n
d
u
s
t
r
y
 
&
&
 
{
 
i
n
d
u
s
t
r
y
:
 
o
r
g
.
i
n
d
u
s
t
r
y
 
}
)
,


 
 
}
;


}


