
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
L
i
n
k
,
 
L
i
n
k
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
 
F
i
l
e
T
e
x
t
,
 
L
o
g
O
u
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
 
C
h
e
v
r
o
n
s
L
e
f
t
,
 
C
h
e
v
r
o
n
s
R
i
g
h
t
,
 
U
s
e
r
C
i
r
c
l
e
,
 
A
w
a
r
d
,
 
G
l
o
b
e
,
 
C
r
o
w
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
 
V
i
d
e
o
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
 
U
s
e
r
,
 
M
e
n
u
,
 
X
,
 
L
o
c
k
,
 
B
r
a
i
n
C
i
r
c
u
i
t
,
 
R
a
d
a
r
 
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




t
y
p
e
 
N
a
v
I
t
e
m
 
=
 
{


 
 
t
o
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
C
o
m
p
o
n
e
n
t
T
y
p
e
<
{
 
c
l
a
s
s
N
a
m
e
?
:
 
s
t
r
i
n
g
 
}
>
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
;


 
 
p
r
e
m
i
u
m
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
;




t
y
p
e
 
N
a
v
G
r
o
u
p
 
=
 
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


 
 
i
t
e
m
s
:
 
N
a
v
I
t
e
m
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
 
N
A
V
_
G
R
O
U
P
S
:
 
N
a
v
G
r
o
u
p
[
]
 
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
w
o
r
k
"
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
{
 
t
o
:
 
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
j
o
b
s
"
,
 
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
 
l
a
b
e
l
:
 
"
B
r
o
w
s
e
 
J
o
b
s
"
 
}
,


{
 
t
o
:
 
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
s
i
g
n
a
l
s
"
,
 
i
c
o
n
:
 
R
a
d
a
r
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
n
d
i
n
g
 
S
i
g
n
a
l
s
"
 
}
,


 
 
 
 
 
 
{
 
t
o
:
 
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
 
l
a
b
e
l
:
 
"
M
y
 
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
 
}
,


 
 
 
 
 
 
{
 
t
o
:
 
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
o
m
p
a
n
i
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
u
i
l
d
i
n
g
2
,
 
l
a
b
e
l
:
 
"
E
x
p
l
o
r
e
 
C
o
m
p
a
n
i
e
s
"
 
}
,


 
 
 
 
]
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
p
r
e
p
"
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
{
 
t
o
:
 
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
a
i
-
a
g
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
r
a
i
n
C
i
r
c
u
i
t
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
 
}
,


 
 
 
 
 
 
{
 
t
o
:
 
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
a
t
s
/
s
c
o
r
e
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
n
S
e
a
r
c
h
,
 
l
a
b
e
l
:
 
"
R
e
s
u
m
e
"
 
}
,


 
 
 
 
 
 
{
 
t
o
:
 
"
/
l
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
i
n
g
 
H
u
b
"
 
}
,


 
 
 
 
 
 
{
 
t
o
:
 
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
s
k
i
l
l
-
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
s
"
 
}
,


 
 
 
 
 
 
{
 
t
o
:
 
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
m
o
c
k
-
i
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
 
i
c
o
n
:
 
V
i
d
e
o
,
 
l
a
b
e
l
:
 
"
M
o
c
k
 
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
 
p
r
e
m
i
u
m
:
 
t
r
u
e
 
}
,


 
 
 
 
]
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
d
i
s
c
o
v
e
r
"
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
{
 
t
o
:
 
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
,
 
i
c
o
n
:
 
A
w
a
r
d
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
s
"
 
}
,


 
 
 
 
 
 
{
 
t
o
:
 
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
"
,
 
i
c
o
n
:
 
G
l
o
b
e
,
 
l
a
b
e
l
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
"
 
}
,


 
 
 
 
]
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
a
c
c
o
u
n
t
"
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
{
 
t
o
:
 
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
i
r
c
l
e
,
 
l
a
b
e
l
:
 
"
M
y
 
P
r
o
f
i
l
e
"
 
}
,


 
 
 
 
 
 
{
 
t
o
:
 
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
,
 
i
c
o
n
:
 
C
r
o
w
n
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
g
r
a
d
e
"
 
}
,


 
 
 
 
]
,


 
 
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
S
t
u
d
e
n
t
S
i
d
e
b
a
r
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
 
l
o
g
o
u
t
 
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
 
!
=
=
 
"
F
R
E
E
"
 
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
E
n
d
D
a
t
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
E
n
d
D
a
t
e
)
 
>
 
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
c
o
l
l
a
p
s
e
d
,
 
s
e
t
C
o
l
l
a
p
s
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
"
s
i
d
e
b
a
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
d
"
)
 
=
=
=
 
"
t
r
u
e
"
;


 
 
}
)
;


 
 
c
o
n
s
t
 
[
i
m
g
E
r
r
o
r
,
 
s
e
t
I
m
g
E
r
r
o
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
m
o
b
i
l
e
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
b
i
l
e
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
 
t
o
g
g
l
e
S
i
d
e
b
a
r
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
C
o
l
l
a
p
s
e
d
(
(
p
r
e
v
)
 
=
>
 
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
"
s
i
d
e
b
a
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
d
"
,
 
S
t
r
i
n
g
(
!
p
r
e
v
)
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
!
p
r
e
v
;


 
 
 
 
}
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
L
o
g
o
u
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
l
o
g
o
u
t
(
)
;


 
 
 
 
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
"
)
;


 
 
}
;




 
 
c
o
n
s
t
 
s
i
d
e
b
a
r
W
i
d
t
h
 
=
 
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
 
7
2
 
:
 
2
5
6
;




 
 
c
o
n
s
t
 
g
r
o
u
p
s
 
=
 
N
A
V
_
G
R
O
U
P
S
.
m
a
p
(
(
g
)
 
=
>
 
(
{


 
 
 
 
.
.
.
g
,


 
 
 
 
i
t
e
m
s
:
 
g
.
i
t
e
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
i
t
e
m
)
 
=
>
 
!
(
i
t
e
m
.
t
o
 
=
=
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
 
&
&
 
i
s
P
r
e
m
i
u
m
)
)
,


 
 
}
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
g
)
 
=
>
 
g
.
i
t
e
m
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
)
;




 
 
c
o
n
s
t
 
a
v
a
t
a
r
 
=
 
(
s
i
z
e
:
 
"
s
m
"
 
|
 
"
m
d
"
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
i
m
 
=
 
s
i
z
e
 
=
=
=
 
"
s
m
"
 
?
 
"
w
-
8
 
h
-
8
"
 
:
 
"
w
-
9
 
h
-
9
"
;


 
 
 
 
c
o
n
s
t
 
i
c
o
n
 
=
 
s
i
z
e
 
=
=
=
 
"
s
m
"
 
?
 
"
w
-
4
 
h
-
4
"
 
:
 
"
w
-
5
 
h
-
5
"
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
p
r
o
f
i
l
e
P
i
c
 
&
&
 
!
i
m
g
E
r
r
o
r
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
i
m
g


 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
u
s
e
r
.
p
r
o
f
i
l
e
P
i
c
}


 
 
 
 
 
 
 
 
 
 
a
l
t
=
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
$
{
d
i
m
}
 
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
`
}


 
 
 
 
 
 
 
 
 
 
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
)
 
=
>
 
s
e
t
I
m
g
E
r
r
o
r
(
t
r
u
e
)
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
)
;


 
 
 
 
}


 
 
 
 
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
$
{
d
i
m
}
 
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
`
}
>


 
 
 
 
 
 
 
 
<
U
s
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
{
`
$
{
i
c
o
n
}
 
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
`
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
;


 
 
}
;




 
 
c
o
n
s
t
 
s
i
d
e
b
a
r
 
=
 
(


 
 
 
 
<
>


 
 
 
 
 
 
{
/
*
 
M
o
b
i
l
e
 
t
o
p
 
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
i
x
e
d
 
t
o
p
-
0
 
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
 
z
-
4
0
 
l
g
:
h
i
d
d
e
n
 
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
 
p
x
-
4
 
p
y
-
3
 
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
3
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
M
o
b
i
l
e
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
O
p
e
n
 
m
e
n
u
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
m
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
c
o
l
o
r
s
 
b
o
r
d
e
r
-
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
M
e
n
u
 
c
l
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
L
i
n
k
 
t
o
=
"
/
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
2
 
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
h
-
7
 
w
-
7
 
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
0
.
5
 
-
r
i
g
h
t
-
0
.
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
<
/
d
i
v
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
p
r
o
f
i
l
e
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


 
 
 
 
 
 
 
 
 
 
{
a
v
a
t
a
r
(
"
s
m
"
)
}


 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
b
i
l
e
 
o
v
e
r
l
a
y
 
*
/
}


 
 
 
 
 
 
{
m
o
b
i
l
e
O
p
e
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
9
5
0
/
6
0
 
l
g
:
h
i
d
d
e
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
 
s
e
t
M
o
b
i
l
e
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
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
/
*
 
S
i
d
e
b
a
r
 
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
{
`
f
i
x
e
d
 
t
o
p
-
0
 
l
e
f
t
-
0
 
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
 
b
o
r
d
e
r
-
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
 
z
-
5
0
 
$
{


 
 
 
 
 
 
 
 
 
 
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
 
"
w
-
1
8
"
 
:
 
"
w
-
6
4
"


 
 
 
 
 
 
 
 
}
 
$
{
m
o
b
i
l
e
O
p
e
n
 
?
 
"
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
"
 
:
 
"
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
x
-
f
u
l
l
"
}
 
l
g
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
`
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
M
o
b
i
l
e
 
c
l
o
s
e
 
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
 
p
x
-
5
 
p
t
-
4
 
p
b
-
2
 
l
g
:
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
M
o
b
i
l
e
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
C
l
o
s
e
 
m
e
n
u
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
s
t
o
n
e
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
c
o
l
o
r
s
 
b
o
r
d
e
r
-
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
 
I
d
e
n
t
i
t
y
 
+
 
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
2
 
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
 
$
{
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
 
"
p
x
-
3
 
p
y
-
3
"
 
:
 
"
p
x
-
5
 
p
y
-
3
"
}
`
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
p
r
o
f
i
l
e
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
M
o
b
i
l
e
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
}


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
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


 
 
 
 
 
 
 
 
 
 
 
 
c
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
3
 
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
 
m
i
n
-
w
-
0
 
$
{
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
 
"
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
 
f
l
e
x
-
1
"
 
:
 
"
f
l
e
x
-
1
"
}
 
h
o
v
e
r
:
o
p
a
c
i
t
y
-
8
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
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
a
v
a
t
a
r
(
"
m
d
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
!
c
o
l
l
a
p
s
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
s
t
o
n
e
-
5
0
 
t
r
u
n
c
a
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
 
f
l
e
x
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
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
s
h
r
i
n
k
-
0
 
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
"
 
t
i
t
l
e
=
"
P
r
e
m
i
u
m
"
 
/
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
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
{
!
c
o
l
l
a
p
s
e
d
 
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
t
o
g
g
l
e
S
i
d
e
b
a
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
C
o
l
l
a
p
s
e
 
s
i
d
e
b
a
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
h
i
d
d
e
n
 
l
g
:
f
l
e
x
 
s
h
r
i
n
k
-
0
 
p
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
s
t
o
n
e
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
c
o
l
o
r
s
 
b
o
r
d
e
r
-
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
C
h
e
v
r
o
n
s
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


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
c
o
l
l
a
p
s
e
d
 
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
h
i
d
d
e
n
 
l
g
:
f
l
e
x
 
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
t
o
g
g
l
e
S
i
d
e
b
a
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
E
x
p
a
n
d
 
s
i
d
e
b
a
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
s
t
o
n
e
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
c
o
l
o
r
s
 
b
o
r
d
e
r
-
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
C
h
e
v
r
o
n
s
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




 
 
 
 
 
 
 
 
{
/
*
 
N
a
v
 
g
r
o
u
p
s
 
*
/
}


 
 
 
 
 
 
 
 
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
{
`
f
l
e
x
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
 
$
{
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
 
"
p
x
-
2
 
p
y
-
3
"
 
:
 
"
p
x
-
3
 
p
y
-
3
"
}
 
s
p
a
c
e
-
y
-
4
`
}
>


 
 
 
 
 
 
 
 
 
 
{
g
r
o
u
p
s
.
m
a
p
(
(
g
r
o
u
p
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
g
r
o
u
p
.
l
a
b
e
l
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
c
o
l
l
a
p
s
e
d
 
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
2
 
m
b
-
1
.
5
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
g
r
o
u
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
c
o
l
l
a
p
s
e
d
 
&
&
 
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
p
x
 
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
 
m
x
-
2
 
m
b
-
2
"
 
/
>
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
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
r
o
u
p
.
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
L
o
c
k
e
d
 
=
 
i
t
e
m
.
p
r
e
m
i
u
m
 
&
&
 
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
t
o
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
N
a
v
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
i
s
L
o
c
k
e
d
 
?
 
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
 
:
 
i
t
e
m
.
t
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
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
 
(
i
s
L
o
c
k
e
d
 
?
 
`
$
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
 
(
P
r
o
)
`
 
:
 
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
)
 
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
b
i
l
e
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
(
{
 
i
s
A
c
t
i
v
e
 
}
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
`
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
"
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
x
-
2
 
p
y
-
2
"
 
:
 
"
p
x
-
3
 
p
y
-
2
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
 
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
 
&
&
 
!
i
s
L
o
c
k
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
n
t
-
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
9
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
(
{
 
i
s
A
c
t
i
v
e
 
}
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
A
c
t
i
v
e
 
&
&
 
!
i
s
L
o
c
k
e
d
 
&
&
 
!
c
o
l
l
a
p
s
e
d
 
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
 
h
-
4
 
w
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
t
e
m
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
!
c
o
l
l
a
p
s
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
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
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
o
c
k
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
h
-
3
 
m
l
-
a
u
t
o
 
s
h
r
i
n
k
-
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
.
p
r
e
m
i
u
m
 
&
&
 
!
i
s
L
o
c
k
e
d
 
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
m
l
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
[
9
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
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
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
N
a
v
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
<
/
n
a
v
>




 
 
 
 
 
 
 
 
{
/
*
 
F
o
o
t
e
r
:
 
l
o
g
o
u
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
{
`
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
 
$
{
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
 
"
p
x
-
2
 
p
y
-
3
"
 
:
 
"
p
x
-
3
 
p
y
-
3
"
}
`
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
h
a
n
d
l
e
L
o
g
o
u
t
}


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
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
 
"
L
o
g
o
u
t
"
 
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


 
 
 
 
 
 
 
 
 
 
 
 
c
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
r
e
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
 
b
o
r
d
e
r
-
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
 
"
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
x
-
2
"
 
:
 
"
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
g
O
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
!
c
o
l
l
a
p
s
e
d
 
&
&
 
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
L
o
g
o
u
t
<
/
s
p
a
n
>
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
a
s
i
d
e
>


 
 
 
 
<
/
>


 
 
)
;




 
 
r
e
t
u
r
n
 
{
 
c
o
l
l
a
p
s
e
d
,
 
s
i
d
e
b
a
r
W
i
d
t
h
,
 
s
i
d
e
b
a
r
 
}
;


}


