
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
,
 
u
s
e
R
e
f
 
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
 
L
i
n
k
,
 
u
s
e
P
a
r
a
m
s
 
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
 
R
e
a
c
t
M
a
r
k
d
o
w
n
 
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
m
a
r
k
d
o
w
n
"
;


i
m
p
o
r
t
 
r
e
m
a
r
k
G
f
m
 
f
r
o
m
 
"
r
e
m
a
r
k
-
g
f
m
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
m
a
r
k
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


 
 
C
h
e
v
r
o
n
R
i
g
h
t
,


 
 
C
i
r
c
l
e
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


 
 
L
o
a
d
e
r
2
,


 
 
S
a
v
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
,
 
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
 
t
y
p
e
 
{


 
 
R
o
a
d
m
a
p
R
e
s
o
u
r
c
e
,


 
 
R
o
a
d
m
a
p
T
o
p
i
c
,


 
 
R
o
a
d
m
a
p
T
o
p
i
c
S
t
a
t
u
s
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
n
t
e
r
f
a
c
e
 
T
o
p
i
c
R
e
s
p
o
n
s
e
 
{


 
 
t
o
p
i
c
:
 
R
o
a
d
m
a
p
T
o
p
i
c
 
&
 
{


 
 
 
 
r
e
s
o
u
r
c
e
s
:
 
R
o
a
d
m
a
p
R
e
s
o
u
r
c
e
[
]
;


 
 
 
 
s
e
c
t
i
o
n
:
 
{


 
 
 
 
 
 
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


 
 
 
 
 
 
o
r
d
e
r
I
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


 
 
 
 
 
 
r
o
a
d
m
a
p
:
 
{
 
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
 
i
s
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
 
b
o
o
l
e
a
n
 
}
;


 
 
 
 
}
;


 
 
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
 
R
o
a
d
m
a
p
T
o
p
i
c
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
 
s
l
u
g
 
=
 
"
"
,
 
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
 
"
"
 
}
 
=
 
u
s
e
P
a
r
a
m
s
(
)
;


 
 
c
o
n
s
t
 
{
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
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
 
[
s
a
v
i
n
g
N
o
t
e
s
,
 
s
e
t
S
a
v
i
n
g
N
o
t
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
a
v
e
d
,
 
s
e
t
S
a
v
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
 
/
/
 
S
t
a
t
e
 
t
o
 
s
h
o
w
 
"
S
a
v
e
d
"
 
m
e
s
s
a
g
e
 
a
f
t
e
r
 
a
u
t
o
-
s
a
v
i
n
g


 
 
c
o
n
s
t
 
a
u
t
o
S
a
v
e
T
i
m
e
o
u
t
 
=
 
u
s
e
R
e
f
<
N
o
d
e
J
S
.
T
i
m
e
o
u
t
 
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
 
/
/
 
R
e
f
 
t
o
 
t
r
a
c
k
 
a
u
t
o
-
s
a
v
e
 
t
i
m
e
o
u
t


 
 
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
 
d
a
t
a
:
 
t
o
p
i
c
D
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
 
t
o
p
i
c
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
r
o
a
d
m
a
p
s
.
t
o
p
i
c
(
s
l
u
g
,
 
t
o
p
i
c
S
l
u
g
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
<
T
o
p
i
c
R
e
s
p
o
n
s
e
>
(
`
/
r
o
a
d
m
a
p
s
/
$
{
s
l
u
g
}
/
t
o
p
i
c
s
/
$
{
t
o
p
i
c
S
l
u
g
}
`
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
s
l
u
g
 
&
&
 
!
!
t
o
p
i
c
S
l
u
g
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
 
1
0
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
}
)
;




 
 
c
o
n
s
t
 
t
o
p
i
c
 
=
 
t
o
p
i
c
D
a
t
a
?
.
t
o
p
i
c
 
|
|
 
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
 
l
o
a
d
i
n
g
 
=
 
t
o
p
i
c
L
o
a
d
i
n
g
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
 
e
n
r
o
l
l
m
e
n
t
s
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
r
o
a
d
m
a
p
s
.
e
n
r
o
l
l
m
e
n
t
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
<
{


 
 
 
 
 
 
 
 
 
 
e
n
r
o
l
l
m
e
n
t
s
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


 
 
 
 
 
 
 
 
 
 
 
 
r
o
a
d
m
a
p
:
 
{
 
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
 
}
;


 
 
 
 
 
 
 
 
 
 
 
 
t
o
p
i
c
P
r
o
g
r
e
s
s
:
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
p
i
c
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
 
R
o
a
d
m
a
p
T
o
p
i
c
S
t
a
t
u
s
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
o
k
m
a
r
k
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
o
t
e
s
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
[
]
;


 
 
 
 
 
 
 
 
 
 
}
[
]
;


 
 
 
 
 
 
 
 
}
>
(
"
/
r
o
a
d
m
a
p
s
/
m
e
/
e
n
r
o
l
l
m
e
n
t
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
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
&
&
 
!
!
t
o
p
i
c
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
 
5
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
}
)
;




 
 
c
o
n
s
t
 
e
n
r
o
l
l
m
e
n
t
 
=
 
e
n
r
o
l
l
m
e
n
t
s
D
a
t
a
?
.
e
n
r
o
l
l
m
e
n
t
s
.
f
i
n
d
(


 
 
 
 
(
e
)
 
=
>
 
e
.
r
o
a
d
m
a
p
.
s
l
u
g
 
=
=
=
 
s
l
u
g
,


 
 
)
;


 
 
c
o
n
s
t
 
e
n
r
o
l
l
m
e
n
t
I
d
 
=
 
e
n
r
o
l
l
m
e
n
t
?
.
i
d
 
|
|
 
n
u
l
l
;




 
 
/
/
 
W
e
 
k
e
e
p
 
l
o
c
a
l
 
s
t
a
t
e
 
f
o
r
 
o
p
t
i
m
i
s
t
i
c
 
u
p
d
a
t
e
s
 
d
u
r
i
n
g
 
e
d
i
t
i
n
g


 
 
c
o
n
s
t
 
[
p
r
o
g
r
e
s
s
,
 
s
e
t
P
r
o
g
r
e
s
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
{


 
 
 
 
s
t
a
t
u
s
:
 
R
o
a
d
m
a
p
T
o
p
i
c
S
t
a
t
u
s
;


 
 
 
 
b
o
o
k
m
a
r
k
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


 
 
 
 
n
o
t
e
s
:
 
s
t
r
i
n
g
;


 
 
}
 
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
e
n
r
o
l
l
m
e
n
t
 
&
&
 
t
o
p
i
c
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
 
=
 
e
n
r
o
l
l
m
e
n
t
.
t
o
p
i
c
P
r
o
g
r
e
s
s
.
f
i
n
d
(
(
t
p
)
 
=
>
 
t
p
.
t
o
p
i
c
I
d
 
=
=
=
 
t
o
p
i
c
.
i
d
)
;


 
 
 
 
 
 
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
P
r
o
g
r
e
s
s
(
{


 
 
 
 
 
 
 
 
s
t
a
t
u
s
:
 
p
?
.
s
t
a
t
u
s
 
?
?
 
"
N
O
T
_
S
T
A
R
T
E
D
"
,


 
 
 
 
 
 
 
 
b
o
o
k
m
a
r
k
e
d
:
 
p
?
.
b
o
o
k
m
a
r
k
e
d
 
?
?
 
f
a
l
s
e
,


 
 
 
 
 
 
 
 
n
o
t
e
s
:
 
p
?
.
n
o
t
e
s
 
?
?
 
"
"
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}


 
 
}
,
 
[
e
n
r
o
l
l
m
e
n
t
,
 
t
o
p
i
c
]
)
;




 
 
c
o
n
s
t
 
l
e
a
r
n
i
n
g
R
e
s
o
u
r
c
e
S
c
h
e
m
a
 
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


 
 
 
 
i
f
 
(
!
t
o
p
i
c
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
L
e
a
r
n
i
n
g
R
e
s
o
u
r
c
e
"
,


 
 
 
 
 
 
n
a
m
e
:
 
t
o
p
i
c
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
 
t
o
p
i
c
.
s
u
m
m
a
r
y
,


 
 
 
 
 
 
t
i
m
e
R
e
q
u
i
r
e
d
:
 
`
P
T
$
{
t
o
p
i
c
.
e
s
t
i
m
a
t
e
d
H
o
u
r
s
}
H
`
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
 
`
L
e
v
e
l
 
$
{
t
o
p
i
c
.
d
i
f
f
i
c
u
l
t
y
}
/
5
`
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
r
o
a
d
m
a
p
s
/
$
{
s
l
u
g
}
/
t
o
p
i
c
s
/
$
{
t
o
p
i
c
.
s
l
u
g
}
`
,


 
 
 
 
 
 
l
e
a
r
n
i
n
g
R
e
s
o
u
r
c
e
T
y
p
e
:
 
"
L
e
s
s
o
n
"
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


 
 
 
 
}
;


 
 
}
,
 
[
t
o
p
i
c
,
 
s
l
u
g
]
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
P
r
o
g
r
e
s
s
 
=
 
a
s
y
n
c
 
(
p
a
t
c
h
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
 
R
o
a
d
m
a
p
T
o
p
i
c
S
t
a
t
u
s
;


 
 
 
 
b
o
o
k
m
a
r
k
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


 
 
 
 
n
o
t
e
s
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
 
=
>
 
{


 
 
 
 
i
f
 
(
!
e
n
r
o
l
l
m
e
n
t
I
d
 
|
|
 
!
t
o
p
i
c
)
 
r
e
t
u
r
n
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
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
a
t
c
h
(


 
 
 
 
 
 
 
 
`
/
r
o
a
d
m
a
p
s
/
m
e
/
e
n
r
o
l
l
m
e
n
t
s
/
$
{
e
n
r
o
l
l
m
e
n
t
I
d
}
/
t
o
p
i
c
s
/
$
{
t
o
p
i
c
.
i
d
}
`
,


 
 
 
 
 
 
 
 
p
a
t
c
h
,


 
 
 
 
 
 
)
;


 
 
 
 
 
 
s
e
t
P
r
o
g
r
e
s
s
(
(
p
)
 
=
>


 
 
 
 
 
 
 
 
p
 
?
 
{
 
.
.
.
p
,
 
.
.
.
p
a
t
c
h
,
 
n
o
t
e
s
:
 
p
a
t
c
h
.
n
o
t
e
s
 
?
?
 
p
.
n
o
t
e
s
 
}
 
:
 
p
,


 
 
 
 
 
 
)
;


 
 
 
 
 
 
/
/
 
I
n
v
a
l
i
d
a
t
e
 
e
n
r
o
l
l
m
e
n
t
s
 
a
n
d
 
d
e
t
a
i
l
 
t
o
 
k
e
e
p
 
d
a
t
a
 
f
r
e
s
h


 
 
 
 
 
 
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
r
o
a
d
m
a
p
s
.
e
n
r
o
l
l
m
e
n
t
s
(
)
,


 
 
 
 
 
 
}
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
r
o
a
d
m
a
p
s
.
e
n
r
o
l
l
m
e
n
t
D
e
t
a
i
l
(
e
n
r
o
l
l
m
e
n
t
I
d
)
,


 
 
 
 
 
 
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
C
o
u
l
d
 
n
o
t
 
s
a
v
e
"
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
s
a
v
e
N
o
t
e
s
 
=
 
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


 
 
 
 
i
f
 
(
!
p
r
o
g
r
e
s
s
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
a
v
i
n
g
N
o
t
e
s
(
t
r
u
e
)
;


 
 
 
 
a
w
a
i
t
 
u
p
d
a
t
e
P
r
o
g
r
e
s
s
(
{
 
n
o
t
e
s
:
 
p
r
o
g
r
e
s
s
.
n
o
t
e
s
 
}
)
;


 
 
 
 
s
e
t
S
a
v
i
n
g
N
o
t
e
s
(
f
a
l
s
e
)
;


 
 
 
 
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
N
o
t
e
s
 
s
a
v
e
d
"
)
;


 
 
}
;




 
 
/
/
 
A
u
t
o
-
s
a
v
e
 
n
o
t
e
s
 
5
0
0
m
s
 
a
f
t
e
r
 
t
e
x
t
a
r
e
a
 
l
o
s
e
s
 
f
o
c
u
s


 
 
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
A
u
t
o
S
a
v
e
 
=
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
p
r
o
g
r
e
s
s
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
a
u
t
o
S
a
v
e
T
i
m
e
o
u
t
.
c
u
r
r
e
n
t
)
 
{


 
 
 
 
 
 
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
a
u
t
o
S
a
v
e
T
i
m
e
o
u
t
.
c
u
r
r
e
n
t
)
;


 
 
 
 
}




 
 
 
 
a
u
t
o
S
a
v
e
T
i
m
e
o
u
t
.
c
u
r
r
e
n
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


 
 
 
 
 
 
s
e
t
S
a
v
i
n
g
N
o
t
e
s
(
t
r
u
e
)
;




 
 
 
 
 
 
a
w
a
i
t
 
u
p
d
a
t
e
P
r
o
g
r
e
s
s
(
{


 
 
 
 
 
 
 
 
n
o
t
e
s
:
 
p
r
o
g
r
e
s
s
.
n
o
t
e
s
,


 
 
 
 
 
 
}
)
;




 
 
 
 
 
 
s
e
t
S
a
v
i
n
g
N
o
t
e
s
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
S
a
v
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
 
{


 
 
 
 
 
 
 
 
s
e
t
S
a
v
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


 
 
 
 
 
 
}
,
 
2
0
0
0
)
;


 
 
 
 
}
,
 
5
0
0
)
;


 
 
}
;




 
 
i
f
 
(
l
o
a
d
i
n
g
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
8
 
h
-
8
 
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
;


 
 
}




 
 
i
f
 
(
!
t
o
p
i
c
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
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
T
o
p
i
c
 
n
o
t
 
f
o
u
n
d
.


 
 
 
 
 
 
<
/
d
i
v
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
{
`
$
{
t
o
p
i
c
.
t
i
t
l
e
}
 
-
 
$
{
t
o
p
i
c
.
s
e
c
t
i
o
n
.
r
o
a
d
m
a
p
.
t
i
t
l
e
}
`
}


 
 
 
 
 
 
 
 
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
{
t
o
p
i
c
.
s
u
m
m
a
r
y
}


 
 
 
 
 
 
 
 
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
`
/
r
o
a
d
m
a
p
s
/
$
{
s
l
u
g
}
/
t
o
p
i
c
s
/
$
{
t
o
p
i
c
.
s
l
u
g
}
`
)
}


 
 
 
 
 
 
 
 
o
g
T
y
p
e
=
"
a
r
t
i
c
l
e
"


 
 
 
 
 
 
 
 
n
o
I
n
d
e
x
=
{
!
t
o
p
i
c
.
s
e
c
t
i
o
n
.
r
o
a
d
m
a
p
.
i
s
P
u
b
l
i
s
h
e
d
}


 
 
 
 
 
 
 
 
s
t
r
u
c
t
u
r
e
d
D
a
t
a
=
{
l
e
a
r
n
i
n
g
R
e
s
o
u
r
c
e
S
c
h
e
m
a
 
?
?
 
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
 
p
x
-
6
 
p
b
-
1
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
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
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
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
n
a
v


 
 
 
 
 
 
 
 
 
 
 
 
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
8
 
m
b
-
6
"


 
 
 
 
 
 
 
 
 
 
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
r
o
a
d
m
a
p
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
g
r
a
y
-
3
0
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
a
d
m
a
p
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
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
3
 
h
-
3
"
 
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
=
"
t
r
u
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
/
r
o
a
d
m
a
p
s
/
$
{
s
l
u
g
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
g
r
a
y
-
3
0
0
 
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
t
o
p
i
c
.
s
e
c
t
i
o
n
.
r
o
a
d
m
a
p
.
t
i
t
l
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
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
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
3
 
h
-
3
"
 
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
=
"
t
r
u
e
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
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
c
u
r
r
e
n
t
=
"
p
a
g
e
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
p
i
c
.
t
i
t
l
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
n
a
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
3
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
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
p
i
c
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
 
m
b
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
p
i
c
.
s
u
m
m
a
r
y
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
x
-
4
 
g
a
p
-
y
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
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
{
t
o
p
i
c
.
e
s
t
i
m
a
t
e
d
H
o
u
r
s
}
 
h
o
u
r
s
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
>
·
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
>
d
i
f
f
i
c
u
l
t
y
 
{
t
o
p
i
c
.
d
i
f
f
i
c
u
l
t
y
}
/
5
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
>
·
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
c
t
i
o
n
 
{
t
o
p
i
c
.
s
e
c
t
i
o
n
.
o
r
d
e
r
I
n
d
e
x
 
+
 
1
}
:
 
{
t
o
p
i
c
.
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
p
r
o
g
r
e
s
s
 
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
2
 
m
b
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
g
r
e
s
s
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
C
O
M
P
L
E
T
E
D
"
 
?
 
"
p
r
i
m
a
r
y
"
 
:
 
"
o
u
t
l
i
n
e
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
p
r
o
g
r
e
s
s
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
C
O
M
P
L
E
T
E
D
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
p
d
a
t
e
P
r
o
g
r
e
s
s
(
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
u
s
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
g
r
e
s
s
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
C
O
M
P
L
E
T
E
D
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
N
O
T
_
S
T
A
R
T
E
D
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
C
O
M
P
L
E
T
E
D
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
e
s
s
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
C
O
M
P
L
E
T
E
D
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
3
.
5
 
h
-
3
.
5
"
 
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
=
"
t
r
u
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
i
r
c
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
3
.
5
 
h
-
3
.
5
"
 
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
=
"
t
r
u
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
e
s
s
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
C
O
M
P
L
E
T
E
D
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
C
o
m
p
l
e
t
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
M
a
r
k
 
c
o
m
p
l
e
t
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
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
{
p
r
o
g
r
e
s
s
.
b
o
o
k
m
a
r
k
e
d
 
?
 
"
p
r
i
m
a
r
y
"
 
:
 
"
o
u
t
l
i
n
e
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
p
r
o
g
r
e
s
s
.
b
o
o
k
m
a
r
k
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
p
d
a
t
e
P
r
o
g
r
e
s
s
(
{
 
b
o
o
k
m
a
r
k
e
d
:
 
!
p
r
o
g
r
e
s
s
.
b
o
o
k
m
a
r
k
e
d
 
}
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
o
o
k
m
a
r
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
3
.
5
 
h
-
3
.
5
 
$
{
p
r
o
g
r
e
s
s
.
b
o
o
k
m
a
r
k
e
d
 
?
 
"
f
i
l
l
-
c
u
r
r
e
n
t
"
 
:
 
"
"
}
`
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
=
"
t
r
u
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
e
s
s
.
b
o
o
k
m
a
r
k
e
d
 
?
 
"
B
o
o
k
m
a
r
k
e
d
"
 
:
 
"
B
o
o
k
m
a
r
k
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


 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
M
a
r
k
d
o
w
n
 
c
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
a
r
t
i
c
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
p
r
o
s
e
 
p
r
o
s
e
-
z
i
n
c
 
d
a
r
k
:
p
r
o
s
e
-
i
n
v
e
r
t
 
m
a
x
-
w
-
n
o
n
e
 
m
b
-
1
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
a
c
t
M
a
r
k
d
o
w
n
 
r
e
m
a
r
k
P
l
u
g
i
n
s
=
{
[
r
e
m
a
r
k
G
f
m
]
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
p
i
c
.
c
o
n
t
e
n
t
M
d
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
R
e
a
c
t
M
a
r
k
d
o
w
n
>


 
 
 
 
 
 
 
 
 
 
<
/
a
r
t
i
c
l
e
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
e
s
o
u
r
c
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
t
o
p
i
c
.
r
e
s
o
u
r
c
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
m
b
-
1
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
s
o
u
r
c
e
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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
t
o
p
i
c
.
r
e
s
o
u
r
c
e
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
k
e
y
=
{
r
.
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
r
.
u
r
l
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
s
t
a
r
t
 
g
a
p
-
3
 
p
-
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
x
l
 
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
7
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
 
g
r
o
u
p
 
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
 
m
t
-
1
 
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
r
.
k
i
n
d
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
s
o
u
r
c
e
 
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
 
m
t
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
s
o
u
r
c
e
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
 
s
h
r
i
n
k
-
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
=
"
t
r
u
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
e
c
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
{
t
o
p
i
c
.
m
i
n
i
P
r
o
j
e
c
t
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
m
b
-
1
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
l
i
m
e
-
9
5
0
/
3
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
l
i
m
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
2
x
l
 
p
-
6
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
M
i
n
i
 
p
r
o
j
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
b
a
s
e
 
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
g
r
a
y
-
2
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
t
o
p
i
c
.
m
i
n
i
P
r
o
j
e
c
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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


 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
{
t
o
p
i
c
.
s
e
l
f
C
h
e
c
k
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
m
b
-
1
0
 
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
 
d
a
r
k
:
b
g
-
a
m
b
e
r
-
9
5
0
/
3
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
a
m
b
e
r
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
a
m
b
e
r
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
 
p
-
6
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
a
m
b
e
r
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
a
m
b
e
r
-
4
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
e
l
f
-
c
h
e
c
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
b
a
s
e
 
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
g
r
a
y
-
2
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
t
o
p
i
c
.
s
e
l
f
C
h
e
c
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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


 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
N
o
t
e
s
 
f
o
r
 
e
n
r
o
l
l
e
d
 
u
s
e
r
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
p
r
o
g
r
e
s
s
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
c
t
i
o
n
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
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
r
 
n
o
t
e
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
h
t
m
l
F
o
r
=
"
t
o
p
i
c
-
n
o
t
e
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
s
r
-
o
n
l
y
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
o
t
e
s
 
f
o
r
 
{
t
o
p
i
c
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
t
o
p
i
c
-
n
o
t
e
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
p
r
o
g
r
e
s
s
.
n
o
t
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
x
L
e
n
g
t
h
=
{
1
0
0
0
}
 
/
/
 
m
a
x
L
e
n
g
t
h
 
a
d
d
e
d
 
t
o
 
l
i
m
i
t
 
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
B
l
u
r
=
{
h
a
n
d
l
e
A
u
t
o
S
a
v
e
}
 
/
/
 
a
u
t
o
-
s
a
v
e
 
o
n
 
b
l
u
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
P
r
o
g
r
e
s
s
(
(
p
)
 
=
>
 
(
p
 
?
 
{
 
.
.
.
p
,
 
n
o
t
e
s
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
 
:
 
p
)
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
6
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
A
n
y
t
h
i
n
g
 
y
o
u
 
w
a
n
t
 
t
o
 
r
e
m
e
m
b
e
r
 
a
b
o
u
t
 
t
h
i
s
 
t
o
p
i
c
.
.
.
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
f
u
l
l
 
p
-
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
g
r
a
y
-
1
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
2
 
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
m
t
-
2
 
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
p
r
o
g
r
e
s
s
.
n
o
t
e
s
.
l
e
n
g
t
h
}
 
/
 
1
0
0
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
a
v
e
d
 
&
&
 
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
1
 
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
e
e
n
-
5
0
0
"
>
S
a
v
e
d
<
/
p
>
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
t
-
2
 
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
e
n
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
s
i
z
e
=
"
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
s
a
v
e
N
o
t
e
s
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
s
a
v
i
n
g
N
o
t
e
s
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
a
v
i
n
g
N
o
t
e
s
 
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
3
.
5
 
h
-
3
.
5
 
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
=
"
t
r
u
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
a
v
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
"
 
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
=
"
t
r
u
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
a
v
e
 
n
o
t
e
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
e
c
t
i
o
n
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


