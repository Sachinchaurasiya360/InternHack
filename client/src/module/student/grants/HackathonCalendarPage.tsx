
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


 
 
X
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


 
 
G
l
o
b
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
a
l
e
n
d
a
r
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


 
 
I
n
f
o
,


 
 
W
a
n
d
2
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


 
 
T
a
g
,


 
 
A
r
r
o
w
L
e
f
t
,


 
 
T
r
o
p
h
y
,


 
 
L
o
a
d
e
r
2
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


t
y
p
e
 
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
S
t
a
t
u
s
 
=
 
"
I
N
T
E
R
E
S
T
E
D
"
 
|
 
"
P
A
R
T
I
C
I
P
A
T
I
N
G
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
 
M
y
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
 
{


 
 
h
a
c
k
a
t
h
o
n
I
d
:
 
n
u
m
b
e
r
;


 
 
s
t
a
t
u
s
:
 
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
S
t
a
t
u
s
;


}


t
y
p
e
 
H
a
c
k
a
t
h
o
n
S
t
a
t
u
s
 
=
 
"
u
p
c
o
m
i
n
g
"
 
|
 
"
o
n
g
o
i
n
g
"
 
|
 
"
p
a
s
t
"
;


t
y
p
e
 
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
 
"
i
n
-
p
e
r
s
o
n
"
 
|
 
"
h
y
b
r
i
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
 
H
a
c
k
a
t
h
o
n
 
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


 
 
l
o
g
o
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


 
 
p
r
i
z
e
P
o
o
l
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


 
 
t
r
a
c
k
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


 
 
s
t
a
t
u
s
:
 
H
a
c
k
a
t
h
o
n
S
t
a
t
u
s
;


 
 
e
c
o
s
y
s
t
e
m
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


}




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
C
O
N
F
I
G
 
=
 
{


 
 
u
p
c
o
m
i
n
g
:
 
{


 
 
 
 
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


 
 
 
 
b
g
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


 
 
 
 
l
a
b
e
l
:
 
"
U
p
c
o
m
i
n
g
"
,


 
 
}
,


 
 
o
n
g
o
i
n
g
:
 
{


 
 
 
 
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
,


 
 
 
 
b
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


 
 
 
 
l
a
b
e
l
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


 
 
}
,


 
 
p
a
s
t
:
 
{


 
 
 
 
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
"
,


 
 
 
 
b
g
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
g
r
a
y
-
8
0
0
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
a
s
t
"
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
:
 
{
 
v
a
l
u
e
:
 
H
a
c
k
a
t
h
o
n
S
t
a
t
u
s
 
|
 
"
A
L
L
"
;
 
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
 
}
[
]
 
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
A
L
L
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
l
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
u
p
c
o
m
i
n
g
"
,
 
l
a
b
e
l
:
 
"
U
p
c
o
m
i
n
g
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
o
n
g
o
i
n
g
"
,
 
l
a
b
e
l
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
 
v
a
l
u
e
:
 
"
p
a
s
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
P
a
s
t
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
 
L
O
C
A
T
I
O
N
_
O
P
T
I
O
N
S
:
 
{
 
v
a
l
u
e
:
 
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
 
|
 
"
A
L
L
"
;
 
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
 
}
[
]
 
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
A
L
L
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
l
 
L
o
c
a
t
i
o
n
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
v
i
r
t
u
a
l
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
r
t
u
a
l
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
i
n
-
p
e
r
s
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
I
n
-
P
e
r
s
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
h
y
b
r
i
d
"
,
 
l
a
b
e
l
:
 
"
H
y
b
r
i
d
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
 
f
o
r
m
a
t
D
a
t
e
R
a
n
g
e
(
s
t
a
r
t
:
 
s
t
r
i
n
g
,
 
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
 
{


 
 
c
o
n
s
t
 
s
 
=
 
n
e
w
 
D
a
t
e
(
s
t
a
r
t
)
;


 
 
c
o
n
s
t
 
e
 
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
)
;


 
 
c
o
n
s
t
 
o
p
t
s
:
 
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
O
p
t
i
o
n
s
 
=
 
{
 
m
o
n
t
h
:
 
"
s
h
o
r
t
"
,
 
d
a
y
:
 
"
n
u
m
e
r
i
c
"
 
}
;


 
 
i
f
 
(
s
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
 
=
=
=
 
e
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
 
&
&
 
s
.
g
e
t
M
o
n
t
h
(
)
 
=
=
=
 
e
.
g
e
t
M
o
n
t
h
(
)
)
 
{


 
 
 
 
r
e
t
u
r
n
 
`
$
{
s
.
t
o
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
(
"
e
n
-
U
S
"
,
 
o
p
t
s
)
}
 
-
 
$
{
e
.
g
e
t
D
a
t
e
(
)
}
,
 
$
{
e
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
}
`
;


 
 
}


 
 
r
e
t
u
r
n
 
`
$
{
s
.
t
o
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
(
"
e
n
-
U
S
"
,
 
o
p
t
s
)
}
 
-
 
$
{
e
.
t
o
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
(
"
e
n
-
U
S
"
,
 
o
p
t
s
)
}
,
 
$
{
e
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
}
`
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
 
H
a
c
k
a
t
h
o
n
C
a
l
e
n
d
a
r
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
t
a
t
u
s
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
S
t
a
t
u
s
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
H
a
c
k
a
t
h
o
n
S
t
a
t
u
s
 
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
l
o
c
a
t
i
o
n
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
L
o
c
a
t
i
o
n
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
e
c
o
s
y
s
t
e
m
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
E
c
o
s
y
s
t
e
m
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
l
e
c
t
e
d
H
a
c
k
a
t
h
o
n
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
H
a
c
k
a
t
h
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
H
a
c
k
a
t
h
o
n
 
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
s
h
o
w
M
i
n
e
,
 
s
e
t
S
h
o
w
M
i
n
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
:
 
l
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
h
a
c
k
a
t
h
o
n
s
.
l
i
s
t
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
 
(
)
 
=
>
 
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
h
a
c
k
a
t
h
o
n
s
"
)
.
t
h
e
n
(
(
r
e
s
)
 
=
>
 
r
e
s
.
d
a
t
a
.
h
a
c
k
a
t
h
o
n
s
 
a
s
 
H
a
c
k
a
t
h
o
n
[
]
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
 
h
a
c
k
a
t
h
o
n
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
 
d
a
t
a
 
?
?
 
[
]
,
 
[
d
a
t
a
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
 
m
y
D
a
t
a
 
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
h
a
c
k
a
t
h
o
n
s
.
m
y
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
s
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
 
(
)
 
=
>
 
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
h
a
c
k
a
t
h
o
n
s
/
m
y
"
)
.
t
h
e
n
(
(
r
e
s
)
 
=
>
 
r
e
s
.
d
a
t
a
.
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
o
n
s
 
a
s
 
M
y
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
[
]
)
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
!
u
s
e
r
,


}
)
;


c
o
n
s
t
 
m
y
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
 
m
y
D
a
t
a
 
?
?
 
[
]
,
 
[
m
y
D
a
t
a
]
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
i
c
i
p
a
t
i
o
n
M
a
p
 
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
 
n
e
w
 
M
a
p
(
m
y
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
s
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
 
[
p
.
h
a
c
k
a
t
h
o
n
I
d
,
 
p
.
s
t
a
t
u
s
]
)
)
,
 
[
m
y
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
 
s
t
a
t
u
s
 
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
 
s
t
a
t
u
s
:
 
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
S
t
a
t
u
s
 
}
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
`
/
h
a
c
k
a
t
h
o
n
s
/
$
{
i
d
}
/
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
`
,
 
{
 
s
t
a
t
u
s
 
}
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
h
a
c
k
a
t
h
o
n
s
.
m
y
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
s
(
)
 
}
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
 
r
e
m
o
v
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
h
a
c
k
a
t
h
o
n
s
/
$
{
i
d
}
/
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
h
a
c
k
a
t
h
o
n
s
.
m
y
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
s
(
)
 
}
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
 
H
A
C
K
A
T
H
O
N
_
E
C
O
S
Y
S
T
E
M
S
 
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
n
e
w
 
S
e
t
(
h
a
c
k
a
t
h
o
n
s
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
 
h
.
e
c
o
s
y
s
t
e
m
)
)
)
.
s
o
r
t
(
)
,


 
 
 
 
[
h
a
c
k
a
t
h
o
n
s
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


 
 
r
e
t
u
r
n
 
h
a
c
k
a
t
h
o
n
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
h
)
 
=
>
 
{


 
 
 
 
i
f
 
(
s
h
o
w
M
i
n
e
 
&
&
 
!
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
o
n
M
a
p
.
h
a
s
(
h
.
i
d
)
)
 
r
e
t
u
r
n
 
f
a
l
s
e
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
 
h
.
s
t
a
t
u
s
 
!
=
=
 
s
t
a
t
u
s
F
i
l
t
e
r
)
 
r
e
t
u
r
n
 
f
a
l
s
e
;


 
 
 
 
 
 
i
f
 
(
l
o
c
a
t
i
o
n
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
 
h
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
 
!
=
=
 
l
o
c
a
t
i
o
n
F
i
l
t
e
r
)
 
r
e
t
u
r
n
 
f
a
l
s
e
;


 
 
 
 
 
 
i
f
 
(
e
c
o
s
y
s
t
e
m
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
 
h
.
e
c
o
s
y
s
t
e
m
 
!
=
=
 
e
c
o
s
y
s
t
e
m
F
i
l
t
e
r
)
 
r
e
t
u
r
n
 
f
a
l
s
e
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


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
h
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


 
 
 
 
 
 
 
 
 
 
h
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


 
 
 
 
 
 
 
 
 
 
h
.
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


 
 
 
 
 
 
 
 
 
 
h
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


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}


 
 
 
 
 
 
r
e
t
u
r
n
 
t
r
u
e
;


 
 
 
 
}
)
;


 
 
}
,
 
[
h
a
c
k
a
t
h
o
n
s
,
 
s
e
a
r
c
h
,
 
s
t
a
t
u
s
F
i
l
t
e
r
,
 
l
o
c
a
t
i
o
n
F
i
l
t
e
r
,
 
e
c
o
s
y
s
t
e
m
F
i
l
t
e
r
,
 
s
h
o
w
M
i
n
e
,
 
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
o
n
M
a
p
]
)
;




 
 
c
o
n
s
t
 
o
n
g
o
i
n
g
C
o
u
n
t
 
=
 
h
a
c
k
a
t
h
o
n
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
h
)
 
=
>
 
h
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
 
"
o
n
g
o
i
n
g
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
 
u
p
c
o
m
i
n
g
C
o
u
n
t
 
=
 
h
a
c
k
a
t
h
o
n
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
h
)
 
=
>
 
h
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
 
"
u
p
c
o
m
i
n
g
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
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
[
#
f
a
f
a
f
a
]
 
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
H
a
c
k
a
t
h
o
n
 
C
a
l
e
n
d
a
r
 
2
0
2
6
 
-
 
U
p
c
o
m
i
n
g
 
H
a
c
k
a
t
h
o
n
s
 
f
o
r
 
S
t
u
d
e
n
t
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
B
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
 
h
a
c
k
a
t
h
o
n
s
 
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
.
 
F
i
n
d
 
v
i
r
t
u
a
l
 
a
n
d
 
i
n
-
p
e
r
s
o
n
 
h
a
c
k
a
t
h
o
n
s
 
w
i
t
h
 
p
r
i
z
e
s
,
 
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
 
d
e
t
a
i
l
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
h
a
c
k
a
t
h
o
n
 
c
a
l
e
n
d
a
r
,
 
u
p
c
o
m
i
n
g
 
h
a
c
k
a
t
h
o
n
s
,
 
s
t
u
d
e
n
t
 
h
a
c
k
a
t
h
o
n
s
,
 
c
o
d
i
n
g
 
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
,
 
h
a
c
k
a
t
h
o
n
 
2
0
2
6
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
g
r
a
n
t
s
/
h
a
c
k
a
t
h
o
n
s
"
)
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
 
b
g
-
[
#
f
a
f
a
f
a
]
 
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
 
p
t
-
1
2
 
p
b
-
1
4
 
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
2
5
 
h
-
1
2
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
b
l
u
e
-
5
0
 
t
o
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
b
l
u
e
-
9
0
0
/
2
0
 
d
a
r
k
:
t
o
-
i
n
d
i
g
o
-
9
0
0
/
2
0
 
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
0
0
 
h
-
1
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
t
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
0
0
/
2
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
0
0
/
2
0
 
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
3
]
 
d
a
r
k
:
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
2
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
#
0
0
0
 
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
 
1
p
x
)
,
 
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
9
0
d
e
g
,
 
#
0
0
0
 
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
 
1
p
x
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
6
4
p
x
 
6
4
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
 
z
-
1
0
 
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
t
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
0
5
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
a
n
t
s
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
1
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
 
m
b
-
6
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
a
c
k
 
t
o
 
G
r
a
n
t
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
m
o
t
i
o
n
.
h
1


 
 
 
 
 
 
 
 
 
 
 
 
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
e
l
a
y
:
 
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
"
f
o
n
t
-
d
i
s
p
l
a
y
 
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
4
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
H
a
c
k
a
t
h
o
n
 
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
m
o
t
i
o
n
.
h
1
>




 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
p


 
 
 
 
 
 
 
 
 
 
 
 
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
e
l
a
y
:
 
0
.
2
 
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
l
g
 
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
5
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
 
m
b
-
1
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


 
 
 
 
 
 
 
 
 
 
 
 
D
i
s
c
o
v
e
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
 
h
a
c
k
a
t
h
o
n
s
 
a
c
r
o
s
s
 
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
 
B
u
i
l
d
,
 
c
o
m
p
e
t
e
,
 
a
n
d
 
w
i
n
 
p
r
i
z
e
s
.


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
p
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
e
a
r
c
h
 
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
e
l
a
y
:
 
0
.
3
 
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
4
 
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
 
h
a
c
k
a
t
h
o
n
s
,
 
e
c
o
s
y
s
t
e
m
s
,
 
t
a
g
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
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
1
1
 
p
r
-
5
 
p
y
-
3
.
5
 
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
b
l
u
e
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
b
l
u
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
a
l
l
 
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
t
a
t
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
4
 
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
 
g
a
p
-
4
 
m
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
5
0
0
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
c
k
a
t
h
o
n
s
.
l
e
n
g
t
h
}
 
h
a
c
k
a
t
h
o
n
s
 
l
i
s
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
 
h
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
3
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
6
0
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
g
r
a
y
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
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
p
c
o
m
i
n
g
C
o
u
n
t
}
 
u
p
c
o
m
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
1
 
h
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
3
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
6
0
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
g
r
a
y
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
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
n
g
o
i
n
g
C
o
u
n
t
}
 
o
n
g
o
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
1
 
h
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
3
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
6
0
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
g
r
a
y
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
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
H
A
C
K
A
T
H
O
N
_
E
C
O
S
Y
S
T
E
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
 
e
c
o
s
y
s
t
e
m
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
 
p
y
-
8
"
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
3
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
 
&
&
 
(


 
 
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
S
h
o
w
M
i
n
e
(
(
v
)
 
=
>
 
!
v
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
3
.
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
-
x
l
 
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
 
b
o
r
d
e
r
 
$
{


 
 
 
 
 
 
s
h
o
w
M
i
n
e


 
 
 
 
 
 
 
 
?
 
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
6
0
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
g
r
a
y
-
9
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
g
r
a
y
-
8
0
0
"


 
 
 
 
}
`
}


 
 
>


 
 
 
 
M
y
 
H
a
c
k
a
t
h
o
n
s


 
 
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
}


 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
t
a
t
u
s
 
c
h
i
p
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
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
t
a
t
u
s
F
i
l
t
e
r
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
p
x
-
3
.
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
-
x
l
 
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
 
b
o
r
d
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
u
s
F
i
l
t
e
r
 
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
9
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
w
h
i
t
e
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
g
r
a
y
-
9
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
g
r
a
y
-
8
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
/
*
 
L
o
c
a
t
i
o
n
 
d
r
o
p
d
o
w
n
 
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
l
o
c
a
t
i
o
n
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
 
s
e
t
L
o
c
a
t
i
o
n
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
 
|
 
"
A
L
L
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
"
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
 
p
x
-
3
.
5
 
p
y
-
2
 
p
r
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
x
l
 
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
b
l
u
e
-
5
0
0
/
2
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
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
L
O
C
A
T
I
O
N
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
l
u
e
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
a
b
s
o
l
u
t
e
 
r
i
g
h
t
-
2
.
5
 
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
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
E
c
o
s
y
s
t
e
m
 
d
r
o
p
d
o
w
n
 
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
e
c
o
s
y
s
t
e
m
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
 
s
e
t
E
c
o
s
y
s
t
e
m
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
 
p
x
-
3
.
5
 
p
y
-
2
 
p
r
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
x
l
 
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
b
l
u
e
-
5
0
0
/
2
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
"


 
 
 
 
 
 
 
 
 
 
 
 
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
 
E
c
o
s
y
s
t
e
m
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
H
A
C
K
A
T
H
O
N
_
E
C
O
S
Y
S
T
E
M
S
.
m
a
p
(
(
e
c
o
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
e
c
o
}
 
v
a
l
u
e
=
{
e
c
o
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
c
o
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
a
b
s
o
l
u
t
e
 
r
i
g
h
t
-
2
.
5
 
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
 
R
e
s
u
l
t
s
 
c
o
u
n
t
 
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


 
 
 
 
 
 
 
 
 
 
 
 
h
a
c
k
a
t
h
o
n
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


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
a
t
u
s
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
t
h
 
s
t
a
t
u
s
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
S
T
A
T
U
S
_
C
O
N
F
I
G
[
s
t
a
t
u
s
F
i
l
t
e
r
]
.
l
a
b
e
l
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
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
a
r
c
h
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
t
c
h
i
n
g
 
"
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
s
e
a
r
c
h
}
<
/
s
p
a
n
>
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
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




 
 
 
 
 
 
 
 
{
/
*
 
G
r
i
d
 
*
/
}


 
 
 
 
 
 
 
 
{
l
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
 
p
y
-
2
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
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
6
 
h
-
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
g
r
a
y
-
5
0
0
 
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


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
 
:
 
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
2
4
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
o
p
h
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
g
r
a
y
-
6
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
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
h
a
c
k
a
t
h
o
n
s
 
f
o
u
n
d


 
 
 
 
 
 
 
 
 
 
 
 
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
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
r
y
 
a
d
j
u
s
t
i
n
g
 
y
o
u
r
 
s
e
a
r
c
h
 
o
r
 
f
i
l
t
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
3
 
g
a
p
-
5
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
h
a
c
k
a
t
h
o
n
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
H
a
c
k
a
t
h
o
n
C
a
r
d


 
 
k
e
y
=
{
h
a
c
k
a
t
h
o
n
.
i
d
}


 
 
h
a
c
k
a
t
h
o
n
=
{
h
a
c
k
a
t
h
o
n
}


 
 
i
n
d
e
x
=
{
i
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
S
e
l
e
c
t
e
d
H
a
c
k
a
t
h
o
n
(
h
a
c
k
a
t
h
o
n
)
}


 
 
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
o
n
=
{
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
o
n
M
a
p
.
g
e
t
(
h
a
c
k
a
t
h
o
n
.
i
d
)
 
?
?
 
n
u
l
l
}


 
 
i
s
L
o
g
g
e
d
I
n
=
{
!
!
u
s
e
r
}


 
 
o
n
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
=
{
(
s
t
a
t
u
s
)
 
=
>
 
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
 
h
a
c
k
a
t
h
o
n
.
i
d
,
 
s
t
a
t
u
s
 
}
)
}


 
 
o
n
R
e
m
o
v
e
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
h
a
c
k
a
t
h
o
n
.
i
d
)
}


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
 
D
e
t
a
i
l
 
m
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
s
e
l
e
c
t
e
d
H
a
c
k
a
t
h
o
n
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
H
a
c
k
a
t
h
o
n
D
e
t
a
i
l
M
o
d
a
l


 
 
 
 
 
 
 
 
 
 
 
 
h
a
c
k
a
t
h
o
n
=
{
s
e
l
e
c
t
e
d
H
a
c
k
a
t
h
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
o
s
e
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
e
l
e
c
t
e
d
H
a
c
k
a
t
h
o
n
(
n
u
l
l
)
}


 
 
 
 
 
 
 
 
 
 
/
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




f
u
n
c
t
i
o
n
 
H
a
c
k
a
t
h
o
n
C
a
r
d
(
{


 
 
h
a
c
k
a
t
h
o
n
,


 
 
i
n
d
e
x
,


 
 
o
n
C
l
i
c
k
,


 
 
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
o
n
,


 
 
i
s
L
o
g
g
e
d
I
n
,


 
 
o
n
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
,


 
 
o
n
R
e
m
o
v
e
,


}
:
 
{


 
 
h
a
c
k
a
t
h
o
n
:
 
H
a
c
k
a
t
h
o
n
;


 
 
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
;


 
 
o
n
C
l
i
c
k
:
 
(
)
 
=
>
 
v
o
i
d
;


 
 
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
o
n
:
 
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
S
t
a
t
u
s
 
|
 
n
u
l
l
;


 
 
i
s
L
o
g
g
e
d
I
n
:
 
b
o
o
l
e
a
n
;


 
 
o
n
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
:
 
(
s
t
a
t
u
s
:
 
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
S
t
a
t
u
s
)
 
=
>
 
v
o
i
d
;


 
 
o
n
R
e
m
o
v
e
:
 
(
)
 
=
>
 
v
o
i
d
;


}
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
C
f
g
 
=
 
S
T
A
T
U
S
_
C
O
N
F
I
G
[
h
a
c
k
a
t
h
o
n
.
s
t
a
t
u
s
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
e
l
a
y
:
 
i
n
d
e
x
 
*
 
0
.
0
4
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


 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
y
:
 
-
4
 
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
f
u
l
l
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
o
n
C
l
i
c
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
 
h
-
f
u
l
l
 
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
l
e
f
t
 
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
a
y
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
g
r
a
y
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
s
h
a
d
o
w
-
l
g
 
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
s
h
a
d
o
w
-
g
r
a
y
-
9
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
 
f
l
e
x
-
1
 
p
-
6
"
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
:
 
l
o
g
o
 
+
 
o
r
g
a
n
i
z
e
r
 
+
 
s
t
a
t
u
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
i
m
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
h
a
c
k
a
t
h
o
n
.
l
o
g
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
h
a
c
k
a
t
h
o
n
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
E
r
r
o
r
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
 
i
m
g
 
=
 
e
.
t
a
r
g
e
t
 
a
s
 
H
T
M
L
I
m
a
g
e
E
l
e
m
e
n
t
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
m
g
.
s
t
y
l
e
.
d
i
s
p
l
a
y
 
=
 
"
n
o
n
e
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
n
 
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
c
r
e
a
t
e
E
l
e
m
e
n
t
(
"
s
p
a
n
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
p
a
n
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
g
r
a
y
-
4
0
0
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
p
a
n
.
t
e
x
t
C
o
n
t
e
n
t
 
=
 
h
a
c
k
a
t
h
o
n
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
.
c
h
a
r
A
t
(
0
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
m
g
.
p
a
r
e
n
t
E
l
e
m
e
n
t
?
.
a
p
p
e
n
d
C
h
i
l
d
(
s
p
a
n
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
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
c
k
a
t
h
o
n
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
l
g
 
$
{
s
t
a
t
u
s
C
f
g
.
b
g
}
`
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
 
$
{
s
t
a
t
u
s
C
f
g
.
c
o
l
o
r
}
`
}
>
{
s
t
a
t
u
s
C
f
g
.
l
a
b
e
l
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
 
m
b
-
2
 
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
g
r
a
y
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
c
k
a
t
h
o
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
D
a
t
e
 
r
a
n
g
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
1
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
5
0
0
 
m
b
-
3
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
>
{
f
o
r
m
a
t
D
a
t
e
R
a
n
g
e
(
h
a
c
k
a
t
h
o
n
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
 
h
a
c
k
a
t
h
o
n
.
e
n
d
D
a
t
e
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
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
L
o
c
a
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
 
c
l
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
5
0
0
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
c
k
a
t
h
o
n
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
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
h
a
c
k
a
t
h
o
n
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
 
=
=
=
 
"
i
n
-
p
e
r
s
o
n
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
p
P
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
3
.
5
 
h
-
3
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
M
a
p
P
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
3
 
h
-
3
"
 
/
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
s
p
a
n
>
{
h
a
c
k
a
t
h
o
n
.
l
o
c
a
t
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
z
e
 
p
o
o
l
 
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
1
.
5
 
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
4
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
5
0
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
h
a
c
k
a
t
h
o
n
.
p
r
i
z
e
P
o
o
l
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
.
5
 
m
b
-
4
 
f
l
e
x
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
c
k
a
t
h
o
n
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
 
3
)
.
m
a
p
(
(
t
a
g
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
a
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
a
g
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
t
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


 
 
{
i
s
L
o
g
g
e
d
I
n
 
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
f
l
e
x
 
g
a
p
-
1
.
5
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
o
n
 
=
=
=
 
"
I
N
T
E
R
E
S
T
E
D
"
 
?
 
o
n
R
e
m
o
v
e
(
)
 
:
 
o
n
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
(
"
I
N
T
E
R
E
S
T
E
D
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
c
o
l
o
r
s
 
$
{


 
 
 
 
 
 
 
 
 
 
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
o
n
 
=
=
=
 
"
I
N
T
E
R
E
S
T
E
D
"


 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
b
l
u
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
h
o
v
e
r
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
2
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
b
l
u
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
b
l
u
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


 
 
 
 
 
 
 
 
I
n
t
e
r
e
s
t
e
d


 
 
 
 
 
 
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
o
n
 
=
=
=
 
"
P
A
R
T
I
C
I
P
A
T
I
N
G
"
 
?
 
o
n
R
e
m
o
v
e
(
)
 
:
 
o
n
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
(
"
P
A
R
T
I
C
I
P
A
T
I
N
G
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
c
o
l
o
r
s
 
$
{


 
 
 
 
 
 
 
 
 
 
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
o
n
 
=
=
=
 
"
P
A
R
T
I
C
I
P
A
T
I
N
G
"


 
 
 
 
 
 
 
 
 
 
 
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
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
9
0
0
/
2
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


 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
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
n
g


 
 
 
 
 
 
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
5
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
 
m
l
-
a
u
t
o
"
>


 
 
 
 
D
e
t
a
i
l
s


 
 
 
 
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
r
a
n
s
l
a
t
e
-
x
-
0
.
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
t
r
a
n
s
f
o
r
m
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




f
u
n
c
t
i
o
n
 
H
a
c
k
a
t
h
o
n
D
e
t
a
i
l
M
o
d
a
l
(
{


 
 
h
a
c
k
a
t
h
o
n
,


 
 
o
n
C
l
o
s
e
,


}
:
 
{


 
 
h
a
c
k
a
t
h
o
n
:
 
H
a
c
k
a
t
h
o
n
;


 
 
o
n
C
l
o
s
e
:
 
(
)
 
=
>
 
v
o
i
d
;


}
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
C
f
g
 
=
 
S
T
A
T
U
S
_
C
O
N
F
I
G
[
h
a
c
k
a
t
h
o
n
.
s
t
a
t
u
s
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
 
p
-
4
 
b
g
-
b
l
a
c
k
/
4
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
o
n
C
l
o
s
e
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
 
2
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
4
 
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
2
x
l
 
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
 
p
x
-
6
 
p
y
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
t
-
2
x
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
 
z
-
1
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
i
m
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
h
a
c
k
a
t
h
o
n
.
l
o
g
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
h
a
c
k
a
t
h
o
n
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
E
r
r
o
r
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
 
i
m
g
 
=
 
e
.
t
a
r
g
e
t
 
a
s
 
H
T
M
L
I
m
a
g
e
E
l
e
m
e
n
t
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
m
g
.
s
t
y
l
e
.
d
i
s
p
l
a
y
 
=
 
"
n
o
n
e
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
n
 
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
c
r
e
a
t
e
E
l
e
m
e
n
t
(
"
s
p
a
n
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
p
a
n
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
g
r
a
y
-
4
0
0
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
p
a
n
.
t
e
x
t
C
o
n
t
e
n
t
 
=
 
h
a
c
k
a
t
h
o
n
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
.
c
h
a
r
A
t
(
0
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
m
g
.
p
a
r
e
n
t
E
l
e
m
e
n
t
?
.
a
p
p
e
n
d
C
h
i
l
d
(
s
p
a
n
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
h
a
c
k
a
t
h
o
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
5
0
0
"
>
{
h
a
c
k
a
t
h
o
n
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
o
n
C
l
o
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
5
0
0
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
6
 
s
p
a
c
e
-
y
-
6
"
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
t
a
t
u
s
 
+
 
P
r
i
z
e
 
+
 
L
o
c
a
t
i
o
n
 
+
 
E
c
o
s
y
s
t
e
m
 
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
 
g
a
p
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
.
5
 
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
x
l
 
$
{
s
t
a
t
u
s
C
f
g
.
b
g
}
`
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
{
`
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
 
$
{
s
t
a
t
u
s
C
f
g
.
c
o
l
o
r
}
`
}
>
{
s
t
a
t
u
s
C
f
g
.
l
a
b
e
l
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
.
5
 
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
x
l
 
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
5
0
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
h
a
c
k
a
t
h
o
n
.
p
r
i
z
e
P
o
o
l
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
.
5
 
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
x
l
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
c
k
a
t
h
o
n
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
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
h
a
c
k
a
t
h
o
n
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
 
=
=
=
 
"
i
n
-
p
e
r
s
o
n
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
p
P
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
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
p
P
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
5
0
0
"
 
/
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
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
c
k
a
t
h
o
n
.
l
o
c
a
t
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
x
l
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
a
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
b
l
u
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
b
l
u
e
-
4
0
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
c
k
a
t
h
o
n
.
e
c
o
s
y
s
t
e
m
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
D
a
t
e
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
 
m
b
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
1
.
5
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
g
r
a
y
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
a
t
e
s


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
o
r
m
a
t
D
a
t
e
R
a
n
g
e
(
h
a
c
k
a
t
h
o
n
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
 
h
a
c
k
a
t
h
o
n
.
e
n
d
D
a
t
e
)
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
 
m
b
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
f
o
 
c
l
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
g
r
a
y
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
b
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
c
k
a
t
h
o
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
r
a
c
k
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
 
m
b
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
o
p
h
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
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
r
a
c
k
s


 
 
 
 
 
 
 
 
 
 
 
 
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
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
c
k
a
t
h
o
n
.
t
r
a
c
k
s
.
m
a
p
(
(
t
r
a
c
k
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
r
a
c
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
r
a
c
k
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
 
m
b
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
1
.
5
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
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
c
k
a
t
h
o
n
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
p
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
i
g
h
l
i
g
h
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
 
m
b
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
H
i
g
h
l
i
g
h
t
s


 
 
 
 
 
 
 
 
 
 
 
 
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
h
a
c
k
a
t
h
o
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
s
.
m
a
p
(
(
h
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
5
0
0
 
m
t
-
0
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
e
g
i
s
t
e
r
 
b
u
t
t
o
n
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
h
a
c
k
a
t
h
o
n
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
 
w
-
f
u
l
l
 
p
y
-
3
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
x
l
 
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


 
 
 
 
 
 
 
 
 
 
 
 
R
e
g
i
s
t
e
r
 
N
o
w


 
 
 
 
 
 
 
 
 
 
 
 
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
4
 
h
-
4
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
;


}


